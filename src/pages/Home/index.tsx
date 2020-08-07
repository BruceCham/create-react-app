import React from 'react'
import { apiGetPinocchioImg, apiGetStoreDetail } from 'api/home'
import './index.css'

const HomePage: React.FC<{}> = () => {
  apiGetPinocchioImg().then(res => {
    console.log(res, '=========')
  })
  apiGetStoreDetail().then(res => {
    console.log(res, '=========')
  })
  return (
    <div>
      <h2 className="red">Home-World</h2>
    </div>
  )
}

export default HomePage
