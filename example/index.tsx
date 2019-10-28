import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import ReactChip from '../'

const GlobalStyle = createGlobalStyle`
  body {
    border: 0;
    padding: 40px 30px;
    margin: 0;
  }
`

const App = () => {
  const [chips, setChips] = React.useState(['React', 'Node.js'])

  return (
    <>
      <ReactChip
        defaultChips={chips}
        defaultValue={'JavaScript'}
        maxLength={10}
        onChange={value => setChips(value)}
      />
      <br/>
      {JSON.stringify(chips, null, 2)}
      <GlobalStyle />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
