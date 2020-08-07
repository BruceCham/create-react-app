import React from 'react'
import { inject } from 'mobx-react';

interface IProps {
  homeStore: any;
}
@inject('homeStore')
class AboutPage extends React.Component<IProps, {}>{
  render() {
    setTimeout(() => {
      console.log('has tragger')
      this.props.homeStore.changeTitle('this is come from about page')
    }, 5000)
    return (
      <div>
        <h2>about</h2>
      </div>
    )
  }
}

export default AboutPage
