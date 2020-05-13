const redirectList= [
  {
    path: "/next-gen/",
    redirect: "/ckan-v3/"
  }
];

export default ({ router }) => {
  router.addRoutes(redirectList)
}
