import axios from 'axios'
import { PHONE_MICROSERVICE } from '../API_URLS'
import authHeaders from '../authHeaders'

export const getToken = () => {
  const p = new Promise((res, rej) => {
    axios.post(`${PHONE_MICROSERVICE}/get_token`, {}, authHeaders())
      .then((data) => {
        res(data.data)
      })
      .catch((err) => {
        rej(err)
      })
  })
  return p
}

export const voice = (number) => {
  const p = new Promise((res, rej) => {
    axios.post(`${PHONE_MICROSERVICE}/voice`, { number, }, authHeaders())
      .then((data) => {
        res(data.data)
      })
      .catch((err) => {
        rej(err)
      })
  })
  return p
}

export const lookupNumber = (number) => {
  const p = new Promise((res, rej) => {
    axios.post(`${PHONE_MICROSERVICE}/lookup_number`, { number, }, authHeaders())
      .then((data) => {
        res(data.data)
      })
      .catch((err) => {
        rej(err)
      })
  })
  return p
}
