const indexController = {
  index() {
    return async (ctx, next) => {
      const title = '前端集成';
      await ctx.render('index', {
        title
      })
    }
  },
  updata() {
    return async (ctx, next) => {
      const title = '前端集成';
      ctx.body = {code: 0}
    }
  }
}
export default indexController;