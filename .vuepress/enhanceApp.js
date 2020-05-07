const redirectList= [
  {
    path: "/next-gen/",
    redirect: "/ckan-architectures/next-gen/"
  }
];

export default ({ router }) => {
  router.addRoutes(redirectList)
}
