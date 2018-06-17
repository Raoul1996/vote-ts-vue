export default {
  url: {
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? '/api/'
        : 'https://api.raoul1996.cn/',
  },
  timeout: 5000,
}
