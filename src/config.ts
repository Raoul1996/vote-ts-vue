export default {
  url: {
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080/api/'
        : 'https://api.raoul1996.cn/',
  },
  timeout: 5000,
}
