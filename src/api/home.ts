import { postApi, fetchApi } from 'api/http'

export const apiGetPinocchioImg = (data = {}) => {
  return fetchApi('https://cms.xueersibook.com/api/1128a654', data)
}

export const apiGetStoreDetail = (data = {}) => {
  return postApi('/webapi/cicp/store/v1/micropage/detail', data)
}
