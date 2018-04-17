# React Load IMG
🖼️ pre-load and provide a fallback for images in react

[![npm-version](https://img.shields.io/npm/v/react-load-img.svg?style=flat)](https://www.npmjs.com/package/react-load-img)
[![build status](https://api.travis-ci.org/rickycodes/react-load-img.svg?branch=master)](https://travis-ci.org/rickycodes/react-load-img/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Why
The internet can be unpredictable and having a broken image in your web application is very uncool. This provides a way to add a pre-loader for a massive image and/or provide a fallback image in case your image fails to load for whatever reason.

## Props

### src `string`
`src` is a string representing the url of the image you'd like to load (just like an img tag)

### render `function`
`render` is a function that receives an object as its only argument

The object contains the following keys:
- src `string` (once loaded) otherwise `undefined`
- error `object` (if loading fails) otherwise `undefined`

## Install
```bash
npm install -S react-load-img
```
## Basic Usage
```javascript
<LoadImage
  src='https://upload.wikimedia.org/wikipedia/commons/8/86/Redningsb%C3%A5den_k%C3%B8res_gennem_klitterne_%28high_resolution%29.jpg'
  render={({ src, error }) => {
    return src
      ? <img src={src} />
      : error
        ? <div>Failed to load image :(</div>
        : <div>Loading...</div>
  }
} />
```
## License
Copyright © 2017 Ricky Miller (@rickycodes).

Released under the [MIT license](https://tldrlegal.com/license/mit-license).
