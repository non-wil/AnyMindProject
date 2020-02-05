import axios from 'axios'

const request = axios.create({
  baseURL: 'https://anymind-recruitment-python-backend.adasia.biz/',
  timeout: 5000,
})

/**
 * @param  {string} hashtag
 * @param  {number} offset
 */
export const getTweetsByHashTag = (hashtag, offset) =>
  request({
    url: `/hashtags/${hashtag}`,
    params: { offset },
  })
/**
 * @param  {string} userName
 * @param  {number} offset
 */
export const searchTweetsByUser = (userName, offset) =>
  request({
    url: `/users/${userName}`,
    params: { offset },
  })
