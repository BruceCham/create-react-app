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
    return (
      <div>
        <h2 className="red">{this.props.homeStore.title}</h2>
      </div>
    )
  }
}

export default HomePage
