import React from 'react'
import { inject, observer } from 'mobx-react';

import { apiGetPinocchioImg, apiGetStoreDetail } from 'api/home'
import './index.css'

interface IProps {
  homeStore: any;
}

@inject('homeStore')
@observer
class HomePage extends React.Component<IProps, {}>{
  render() {
    apiGetPinocchioImg().then(res => {
      console.log(res, '=========')
    })
    apiGetStoreDetail().then(res => {
      console.log(res, '=========')
    })
    console.log(this.props.homeStore.title, 'homeStore.title ========')
    return (
      <div>
        <h2 className="red">Home-World</h2>
      </div>
    )
  }
}

export default HomePage
