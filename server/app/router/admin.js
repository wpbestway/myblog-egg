module.exports = app => {
  const { router, controller, jwt } = app
  router.post('/admin/register', controller.admin.user.register)
  router.post('/admin/login', controller.admin.user.login)
  router.post('/admin/logout', controller.admin.user.logout)

  router.get('/admin/blog/list', jwt, controller.admin.blog.getBlogs)
  router.get('/admin/blog', jwt, controller.admin.blog.getBlog)
  router.post('/admin/blog/edit', jwt, controller.admin.blog.editBlog)
}
