module.exports = {
  async pageQuery (model, page = 1, page_size = 20, query_params = {}, sort_params = {}) {
    var start = (page - 1) * page_size
    let dataArr = await Promise.all([
      model.count(query_params), 
      model.find(query_params).skip(start).limit(page_size).sort(sort_params)
    ])
    return {
      page,
      page_size,
      count: dataArr[0],
      data: dataArr[1]
    }
  },
  async papulatePageQuery(model, page = 1, page_size = 20, query_params, path, options = {}) {
    let start = (page - 1) * page_size
    let dataArr = await Promise.all([
      model.findOne(query_params),
      model.findOne(query_params).populate({
        path,
        options: {
          skip: start,
          limit: page_size,
          ...options
        }
      })
    ])
    return {
      page,
      page_size,
      count: dataArr[0][path].length,
      data: dataArr[1],
    }
  },
  /**
   * 
   * @param {model} model
   * @param {object} options 查询参数
   * @return {object} 返回分页查询结果
   */
  async aggregatePageQuery(model, options) {
    const page = options.page || 1
    const page_size = options.page_size || 1
    var start = (page - 1) * page_size
    const query_params = [
      { $match: options.match || {} },
      { $project: options.project || {} },
      { $group: options.group || {} },
    ]
    let data = await model.aggregate(query_params).facet({
      list: [{ $sort: options.sort || {} }, { $skip: start }, { $limit: page_size }],
      total: [{ $count: "total" }],
    })
    .addFields({ total: { $arrayElemAt: ['$total', 0] } })
    .project({ data: "$list", total: "$total.total" });
    return { current_page: page, page_size, ...data[0] }
  }
}