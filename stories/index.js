import React from 'react';

import { storiesOf } from '@storybook/react';
import LoadImage from '../'

storiesOf('LoadImage', module)
  .add('basic usage', () => {
    return <LoadImage
      url='https://upload.wikimedia.org/wikipedia/commons/8/86/Redningsb%C3%A5den_k%C3%B8res_gennem_klitterne_%28high_resolution%29.jpg'
      render={({ url }) => {
        return url ? <img width='800' src={url} /> : 'Loading...'
      }
    } />
  })
  .add('failed to load', () => {
    return <LoadImage
      url='https://upload.wikimedia.org/wikipedia/commons/8/86/fail.jpg'
      render={({ url, error }) => {
        return url ? <img src={url} /> : error ? 'Failed to load image :(' : 'Loading...'
      }
    } />
  })
