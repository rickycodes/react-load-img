/* global Image */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class LoadImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: undefined,
      error: undefined
    }
  }

  componentDidMount () {
    const { url } = this.props
    this.image = new Image()
    this.image.onload = () => this.setState({ url })
    this.image.onerror = (error) => this.setState({ error })
    this.image.src = url
  }

  componentWillUnmount () {
    // prevent setState warnings
    this.image.onload = () => {}
  }

  render () {
    if (!this.props.render) {
      return null
    }
    return (
      this.props.render({
        url: this.state.url,
        error: this.state.error
      })
    )
  }
}

LoadImage.propTypes = {
  url: PropTypes.string.isRequired
}

export default LoadImage
