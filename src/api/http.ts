import fetch from 'isomorphic-fetch'
import { HTTP_STATUS, COMMON_STATUS } from 'consts/statusCode'
import { genUrl, encodeParam } from 'utils/url'

const METHOD_GET = 'GET'
const METHOD_POST = 'POST'

const commonFetch = (api: string, config = {}) => {
  return fetch(api, config)
}

interface Response {
  code?: number;
  msg?: string;
  data?: any;
  [propName: string]: any;
}

export async function fetchJson(api: string, config: object) {
  const COMMON_ERROR_MESSAGE = '出错了，请稍后再试...'
  /* eslint-disable no-throw-literal */
  try {
    let response = await commonFetch(api, config)
    if (response.status === HTTP_STATUS.AUTHENTICATE) {
      throw { status: COMMON_STATUS.AUTH_FAILED, data: null, message: '认证错误' }
    } else if (response.status === HTTP_STATUS.CLIENT_ERROR) {
      throw { status: COMMON_STATUS.CLIENT_ERROR, data: null, message: COMMON_ERROR_MESSAGE }
    } else if (response.status === HTTP_STATUS.SERVER_ERROR) {
      throw { status: COMMON_STATUS.EXCEPTION, data: null, message: COMMON_ERROR_MESSAGE }
    } else if (response.status !== 200) {
      throw { status: response.status, data: null, message: COMMON_ERROR_MESSAGE }
    }
    response = await response.json()
    let res: Response = response || { status: COMMON_STATUS.EXCEPTION, message: COMMON_ERROR_MESSAGE }
    // 转化后台返回的数据 res key值
    const { code, msg, data } = res
    res = Object.assign({}, { status: code, message: msg, data })
    return res
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`错误类型：${err.name}，错误信息：${err.message}`)
    }
    throw err
  }
}

export const fetchApi = (url: string, params: object, options?: object) => {
  let cfg = {
    method: METHOD_GET,
    credentials: 'same-origin',
  };
  let thisParams = { ...params }
  let fetchUrl = genUrl(url, thisParams)
  return fetchJson(fetchUrl, Object.assign({}, cfg, options))
}

export const postApi = (url: string, data: object, options?: object) => {
  let thisParams = { ...data }
  let cfg = {
    method: METHOD_POST,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(thisParams),
  }
  return fetchJson(url, Object.assign({}, cfg, options))
}

export const postFormData = (url: string, data: object, options: object) => {
  let cfg = {
    method: METHOD_POST,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encodeParam(data),
  }
  return fetchJson(url, Object.assign({}, cfg, options))
}
