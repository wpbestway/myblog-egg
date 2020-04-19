module.exports = {
  success(data, info = 'success') {
    this.body = {
      info,
      data,
      err_code: 0
    }
  },
  fail(data = {}, info = 'error', err_code = 1) {
    this.body = {
      info,
      data,
      err_code
    }
  },
  error(data, status, err_code = 1, err_info = 'error') {
    this.body = {
      data,
      err_info,
      err_code
    }
    this.status = status
  }
}