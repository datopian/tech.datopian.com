const redirectList= [
  {
    path: "/next-gen/",
    redirect: "/ckan-v3/"
  },
  {
    path: "/import-ui/",
    redirect: "/publish/"
  }
];

export default ({ router }) => {
  router.addRoutes(redirectList)
}
