/**
 * 获取环境变量
 * @param {string} key - 环境变量名
 * @param {any} defaultValue - 默认值
 * @returns {string} 环境变量值
 */
export const getEnv = (key, defaultValue = '') => {
  const envKey = `APP_${key}`
  return import.meta.env[envKey] || defaultValue
}

/**
 * 检查当前是否为开发环境
 * @returns {boolean}
 */
export const isDev = () => {
  return import.meta.env.MODE === 'development'
}

/**
 * 检查当前是否为生产环境
 * @returns {boolean}
 */
export const isProd = () => {
  return import.meta.env.MODE === 'production'
}

/**
 * 获取API基础URL
 * @returns {string}
 */
export const getApiBaseUrl = () => {
  return getEnv('API_URL', '/api')
}

/**
 * 获取应用信息
 * @returns {Object} 应用信息对象
 */
export const getAppInfo = () => {
  return {
    title: getEnv('TITLE', '简易博客系统'),
    description: getEnv('DESCRIPTION', '基于Vue3构建的简约博客'),
    version: getEnv('VERSION', '0.0.1')
  }
}