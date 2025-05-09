import dayjs from 'dayjs'

/**
 * 格式化日期为 YYYY-MM-DD 形式
 * @param {string|Date} date - 日期字符串或Date对象
 * @returns {string} 格式化后的日期字符串
 */
export const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD')
}

/**
 * 格式化日期为 YYYY年MM月DD日 形式
 * @param {string|Date} date - 日期字符串或Date对象
 * @returns {string} 格式化后的日期字符串
 */
export const formatDateCN = (date) => {
  return dayjs(date).format('YYYY年MM月DD日')
}

/**
 * 格式化为相对时间（如：3天前，2小时前）
 * @param {string|Date} date - 日期字符串或Date对象
 * @returns {string} 相对时间字符串
 */
export const formatRelativeTime = (date) => {
  const now = dayjs()
  const target = dayjs(date)
  const diffMinutes = now.diff(target, 'minute')

  if (diffMinutes < 1) return '刚刚'
  if (diffMinutes < 60) return `${diffMinutes}分钟前`

  const diffHours = now.diff(target, 'hour')
  if (diffHours < 24) return `${diffHours}小时前`

  const diffDays = now.diff(target, 'day')
  if (diffDays < 30) return `${diffDays}天前`

  const diffMonths = now.diff(target, 'month')
  if (diffMonths < 12) return `${diffMonths}个月前`

  return `${now.diff(target, 'year')}年前`
}