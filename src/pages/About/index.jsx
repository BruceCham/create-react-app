import React from 'react'
import { inject } from 'mobx-react';

@inject('homeStore')
class AboutPage extends React.Component {
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
