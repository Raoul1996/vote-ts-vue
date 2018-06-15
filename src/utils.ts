export const getAuthToken = () => window.localStorage.getItem('token')
export const validateResp = (code: number) => [200, 304].indexOf(code) !== -1
