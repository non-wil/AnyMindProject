import axios from 'axios'

// export function fetchList(query) {
//   return request({
//     url: '/article/list',
//     method: 'get',
//     params: query
//   })
// }

const request = axios.create({
  baseURL: 'https://anymind-recruitment-python-backend.adasia.biz/',
  // timeout: 1000,
})

export const getTweetsByHashTag = hashtag =>
  request({
    url: `/hashtags/${hashtag}`,
    params: { offset: 0 },
  })
