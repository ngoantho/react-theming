# react-theming

> A tiny theming library for React projects

## Usage

Wrap your React app with ThemeProvider:

<details>
<summary>Generic example</summary>
```js
import React, { Component } from "react"
import ThemeProvider "..."

export default class extends Component {
  render() {
    return (
      <ThemeProvider theme={{
        ...
      }}>
        <App/>
      </ThemeProvider>
    )
  }
}```

</details>

## License

MIT © [Anthony Ngo](http://anthonyngo.me)