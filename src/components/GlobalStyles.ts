import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd {
  margin: 0;
  padding: 0;
  font-family: Raleway, 'sans-serif';
}

  html, body {
  height: 100%;
  background: #232946;
}

// create root stacking context
#__next {
  isolation: isolate;
  height: 100%;
}
`

export default GlobalStyles