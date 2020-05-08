# Authentication :closed_lock_with_key:

## Introduction

The core function of authentication is to **Identify** Users of the Portal (in a federated way) so we can base access on their identity.

There are 3 major conceptual components: Identity, Accounts and Sessions which come together in the following stages:

* **Root Identity Determination:** Determine Identity often via Delegation
* **Sessions:** Persistence of the identity in the web application in a secure way (without new identity determination on each request! I don't want to have to login via third party service every time)
* **Account (aka profile):** Storing Related Account/Profile Information in our application (not in third party identity) eg. email, name (other preferences)
  * This will get auto-created usually at first Identification
  * In limited case this can be seen as a cache of info from Identity system (e.g. your email)
  * However often richer info that is app specific that is generated (relevant for personalization)

### Root Identity Determination options :key:

The identity determination can be done in multiple ways. In this article we're considering following 3 options that we believe are widely used:

- Password authentication - traditional username and password pair
- Single Sign-on (SSO) via protocols such as OAuth, SAML, OpenID Connect
- One-time password (OTP) via email or SMS (aka passwordless connection)

#### Password authentication

Traditional way of authentication of users. When signing up user provides at least username and password pair which is then stored in a database for future authentication processes. Normally, additional information such as email address, full name etc. is also requested when registering.

Examples of password authentication in popular services:

- GitHub - https://github.com/join
- GitLab - https://gitlab.com/users/sign_up
- NPM - https://www.npmjs.com/signup

#### Single Sign-on (SSO)

The way of delegating identity determination process to some third-party service. Normally, popular social network services are used, e.g., Google, Facebook, Twitter etc. SSO implementations can be done using OAuth or SAML protocols. In addition, there is OpenID Connect protocol which is an extension of OAuth2.0.

- OAuth
  - JWT based
  - JSON based
  - 'webby'
- SAML
  - XML based
  - SOAP based
  - 'enterprisey'

List of OAuth providers:

https://en.wikipedia.org/wiki/List_of_OAuth_providers

Examples of SSO in popular projects:

- https://datahub.io/login
- https://vercel.com/signup

#### One-time password (OTP)

Also known as dynamic password, OTP also solves limitations of traditional password authentication method. Usually, the one time passwords are received via email or SMS.

### Account (aka profile) :bust_in_silhouette:

- Storage of user profile information (email, fullname, gravatar etc.)
- Retrieving user profile information via API
- Updating profile
- Deleting profile

### Sessions :hourglass:

- Log out: DePersisting the Session
- Invalidating all Sessions: e.g. if a security issue
- Sessions outside of browsers

## Key Job Stories

When a user signs in, I want to know her/his identity so that I can limit access and editing based on who she/he is.

When a user visits the data portal for the first time, I want to provide him/her a way to register easily/quickly so that more people uses the data portal.

When I visit the data portal for the first time, I want to sign up using my existing social network account so that I don't need to remember yet another credentials.

When I'm using the CLI app (or anything else outside browser), I want to be able to login so that I can work from the terminal (e.g., have write access: editing datasets etc.).

[More job stories](#more-job-stories).

## CKAN 2 (CKAN Classic)

### Basic CKAN authentication

In classic system, we have basic CKAN authentication. Below is how registration page looks like:

![CKAN Classic register page](../img/ckan-register.png)

Registration flow in CKAN Classic:

```mermaid
sequenceDiagram

  user->>ckan: fill in the form and submit
  ckan->>ckan: check access (if user can create user)
  ckan->>ckan: parse params
  ckan->>ckan: check recaptcha
  ckan->>ckan: call 'user_create' action
  ckan->>ckan.model: add a new user into db
  ckan->>ckan: create an activity
  ckan->>ckan: log the user
  ckan->>user: redirect to dashboard
```

We can extend basic CKAN authentication with:

- LDAP
  - https://extensions.ckan.org/extension/ldap/
  - https://github.com/NaturalHistoryMuseum/ckanext-ldap
- OAuth - see below
- SAML - https://extensions.ckan.org/extension/saml2/

### CKAN Classic as OAuth client

CKAN Classic can also be used as OAuth client:

- https://github.com/conwetlab/ckanext-oauth2 - this is the only one that's maintained.
- https://github.com/etalab/ckanext-oauth2 - outdated, the one above is based on this.
- https://github.com/okfn/ckanext-oauth - last commit 9 years ago.
- https://github.com/ckan/ckanext-oauth2waad - Windows Azure Active Directory specific and outdated.

How it works:

```mermaid
sequenceDiagram

  user->>ckan: request for login via OAuth provider
  ckan->>ckan.oauth: raise 401 and call `challenge` function
  ckan.oauth->>user: redirect the user to the 3rd party log in page
  user->>3rdparty: perform login
  3rdparty->>ckan.oauth: redirect to /oauth2/callback with token
  ckan.oauth->>3rdparty: call `authenticate` with token
  3rdparty->>ckan.oauth: return user info
  ckan.oauth->>ckan: if doesn't exist save that info in db or update it
  ckan.oauth->>ckan.oauth: add cookies
  ckan.oauth->>user: redirect to dashboard
```

## CKAN 3 (Next Gen)

We have considered some of popular and/or modern solutions for identity management that we can implement in CKAN 3:

|  | PassportJS | Auth0 | AuthN | ORY/Kratos | Datopian/auth |
|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Architecture | Node module for Express app | Separate service | Separate service | Separate service | Separate service |
| Self-service account management | Couldn't find any info | fully supported | update profile, changing password | update profile, add/update email addresses, and changing passwords | Can only change username at the moment. No docs about deleting. |
| Account administration | Same | fully supported | update, lock, unlock, archive, import accounts | create, read, delete, import, update details | create, read, delete |
| Docs | ok docs: 5/10 | great docs: 9/10 | generally good docs: 7/10 | generally great docs with some pages missing/WIP: 8/10 | Limited but being added: 5/10 |
| Identity types | N/A | it uses roles instead | N/A | Possible to have several identity types and schemas (eg, user vs admin vs service). | N/A |
| Username / Email / phone number & Password | Basic feature is available | supported | Supported with some additional feature: username policy - restricting to specific domain and/or email is username | Very flexible, eg, we can have several identifiers username + email. This is something we missed in CKAN Classic. | N/A |
| Single Sign-on | 500+ different providers including Google, Github, Facebook etc. | Many options available out of the box | Google, Github, Facebook and Discord | Google and GitHub out of the box. | Google and Github out of the box. |
| Adding a new SSO provider | No need since almost all possible providers can be added as plugins. However, adding custom provider might require some effort. | No need | Not clear how to add another provider. | Adding any OAuth provider is easy. E.g., adding Facebook is requires adding some more configs. | Requires implementation (?) |
| Passwordless | Supported | Supported | Supported | Mentioned as supported but probably WIP | N/A |
| Login from CLI | Supported | Supported | Supported | Supported | Supported |
| Overall: | Basic solution useful if just need SSO. Can be used for PoC or small projects. | Easy-to-use, e.g., it's hosted and you just connect via configs and start using it. However, it isn't free and not clear if open source. | Looks minimal but provides most necessary features. Additional work might be needed to setup service / host / deploy. | Rich functionality + being actively developed.  Reading the docs, it looks like authors are considering every edge cases. | Our in-house solution, quite limited in comparison to other services in this table. One major thing might be lack of basic username/password authentication as it is often necessary. |




### Existing work

In datahub.io we have implemented SSO via Google/Github. Below is sequence diagram showing the auth flow with datopian/auth + frontend express app (similar to CKAN 3 frontend):

```mermaid
sequenceDiagram

  frontend.login->>auth.authenticate: authenticate(jwt=None,next=/success/...)
  auth.authenticate->>frontend.login: failed + here are urls for logging on 3rd party including success
  frontend.login->>user: login form with login urls to 3rd party including next url in state
  user->>3rdparty: login
  3rdparty->>auth.oauth_response: success
  auth.oauth_response->>frontend.success: redirect to next url
  frontend.success->>auth.authenticate: with valid jwt
  auth.authenticate->>frontend.success: valid + here is profile
  frontend.success->>frontend.success: decode jwt, check it, then see localstorage
  frontend.success->>frontend.dashboard: redirect to dashboard
```

## CKAN 2 to CKAN 3 (aka Next Gen)

How does this conceptual framework map to an evolution of CKAN 2 to CKAN 3?

```mermaid
graph LR

id[Identity Determination]
persist[Identity Persistence]
accounts[Accounts Storage]
accountui[Account Management]
logout[Logout]
login[Login]

subgraph "Third Party"
  id
end

subgraph "CKAN 3"
  persist
  login
  logout
  accountui
end

subgraph "CKAN 2"
  accounts
end
```


Questions

* Does CKAN Classic allow us to store arbitrary account information (are there "extras")
* How would we avoid having to support identity persistence, delegation etc in both NG frontend and Classic Admin UI?
  * Can we share cookies (e.g. via using subdomains)
* How is login, identity determination etc done at least for frontend in DataHub.io
* Should account UI really be in NG frontned vs Classic Admin UI?

<mermaid />

## Appendix

### More job stories

When a user visits the data portal, I want to provide multiple options for him/her to sign up so that I have more users registered and using the data portal.

When a user needs to change his/her profile info, I want to make sure it is possible, so that I have the up-to-date information about users.

When my personal info (email etc.) is changed, I want to edit it in my profile so that I provide up-to-date information about me and I receive messages (eg, notifications) properly.

When I decide to stop using the data portal, I want to be able to delete my account, so that my personal details aren't stored in the service that I don't need anymore.