import React from 'react'
import { Screen, Components, Utils } from 'react-dom-chunky'
import { Card, CardMedia, CardActions } from '@rmwc/card'

export default class ContactScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderImage() {
    const { chapter } = this.props

    return Utils.renderResponsive(
      'image',
      <img
        src={`${chapter.image}`}
        style={{
          width: '80vw',
          opacity: 0.5,
          boxShadow: ' 0 5px 20px 0 rgba(0,0,0,.15)'
        }}
      />,
      <img
        src={`${chapter.image}`}
        style={{
          width: '700px',
          maxWidth: '90vw',
          opacity: 0.5,
          boxShadow: ' 0 5px 20px 0 rgba(0,0,0,.15)'
        }}
      />
    )
  }

  renderArticle() {
    const source = 'https://raw.githubusercontent.com/aclowwwn/march-for-life-2019/master/chunks/story/data'

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          marginTop: '40px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
      <Card
        style={{
          margin: '20px',
          maxWidth: width,
          width: '100%',
          padding: '20px',
          boxShadow: 'none'
        }}
        onClick={() => {}}
      >
        <Components.Text
          source={`${source}/chapters/unic-din-prima-clipa/README.md`}
        />
      </Card>
      
      </div>)
  }

  components() {
    return [
      ...super.components(),
      this.renderArticle()
    ]
  }
}
