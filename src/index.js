/* global Image */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class LoadImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      src: undefined,
      error: undefined
    }
  }

  componentDidMount () {
    const { props: { src } } = this
    this.image = new Image()
    this.image.onload = () => this.setState({ src })
    this.image.onerror = (error) => this.setState({ error })
    this.image.src = src
  }

  componentWillUnmount () {
    // prevent setState warnings
    this.image.onload = () => {}
  }

  render () {
    const { state: { src, error }, props: { render } } = this
    if (!render) {
      return null
    }
    return (
      render({
        src,
        error
      })
    )
  }
}

LoadImage.propTypes = {
  src: PropTypes.string.isRequired
}
