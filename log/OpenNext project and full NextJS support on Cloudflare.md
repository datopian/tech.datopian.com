---
date: 2025-03-18
---

Up until now if you wanted to run your NextJS app on cloudflare it would only work if it was a pure static site *or* it ran purely on the edge runtime which was pretty restrictive. We ourselves have wanted to run our nextjs app for [Flowershow](https://flowershow.app) on cloudflare but ended up on Vercel b/c we just couldn't get it to work easily with the edge runtime.

However, that is now changing with the arrival of the [OpenNext](https://opennext.js.org/) which aims to have all NextJS applications running on a variety of platforms including Cloudflare 🙌.

![image](https://github.com/user-attachments/assets/b5332be3-533b-446e-9985-55f886e79235)

## Cloudflare support

https://opennext.js.org/cloudflare

Getting there but not yet fully ready for primtetime:

> @opennextjs/cloudflare is pre 1.0, and still in active development. You should try it, report bugs, share feedback, and contribute code to help make running Next.js apps on Cloudflare easier. We don't quite yet recommend using it for mission-critical production apps.

![image](https://github.com/user-attachments/assets/8d6b53fb-6490-4bfd-ac02-6e611bf6dc41)

## Dedicated tool for converting NextJS to run with OpenNext on cloudflare

There's even a dedicated tool (467⭐) for converting NextJS to run with OpenNext on cloudflare though it still early stage:

https://github.com/ygwyg/diverce
