import React from 'react'

import { storiesOf } from '@storybook/react'
import LoadImage from '../'

storiesOf('LoadImage', module)
  .add('basic usage', () => {
    return <LoadImage
      src='https://upload.wikimedia.org/wikipedia/commons/8/86/Redningsb%C3%A5den_k%C3%B8res_gennem_klitterne_%28high_resolution%29.jpg'
      render={({ src }) => {
        return src ? <img width='800' src={src} /> : 'Loading...'
      }
    } />
  })
  .add('failed to load', () => {
    return <LoadImage
      src='https://upload.wikimedia.org/wikipedia/commons/8/86/fail.jpg'
      render={({ src, error }) => {
        return src ? <img src={src} /> : error ? 'Failed to load image :(' : 'Loading...'
      }
    } />
  })
