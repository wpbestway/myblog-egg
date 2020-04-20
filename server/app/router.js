
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  // client
  router.get('/client/blog/list', controller.client.blog.getBlogs)
  router.get('/client/blog/detail', controller.client.blog.getBlog)
  router.get('/client/tag/list', controller.client.blog.getTags)
  router.get('/client/classify/list', controller.client.blog.getClassifies)
  router.get('/client/series/list', controller.client.blog.getSeries)
  router.get('/client/tool/list', controller.client.blog.getTools)
  router.get('/client/tool/detail', controller.client.blog.getTool)
  router.get('/client/comment/list', controller.client.blog.getComments)
  router.post('/client/comment/add', controller.client.blog.addComment)
}
