import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class MainScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, tweets: null }
  }

  components() {
    return [
      ...super.components()
    ]
  }
}
