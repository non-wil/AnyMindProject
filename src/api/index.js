import axios from 'axios'

const request = axios.create({
  baseURL: 'https://anymind-recruitment-python-backend.adasia.biz/',
  timeout: 5000,
})

export const getTweetsByHashTag = hashtag =>
  request({
    url: `/hashtags/${hashtag}`,
    params: { offset: 0 },
  })
