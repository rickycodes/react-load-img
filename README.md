## React Load IMG
[![npm-version](https://img.shields.io/npm/v/react-load-img.svg?style=flat)](https://www.npmjs.com/package/react-load-img)
[![build status](https://api.travis-ci.org/rickycodes/react-load-img.svg?branch=master)](https://travis-ci.org/rickycodes/react-load-img/)

📷 declarative img in react

### Install
```bash
npm install -S react-load-img
```
### Basic Usage
```javascript
<LoadImage
  url='https://upload.wikimedia.org/wikipedia/commons/8/86/Redningsb%C3%A5den_k%C3%B8res_gennem_klitterne_%28high_resolution%29.jpg'
  render={({ url, error }) => {
    return url ? <img src={url} /> : error ? 'Failed to load image :(' : 'Loading...'
  }
} />
```
### License
Copyright (c) 2016 Ricky Miller (@rickycodes).

Released under the [MIT license](https://tldrlegal.com/license/mit-license).
