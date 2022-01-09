import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --primary: #094067;
    --white: #fffffe;
    --off-white: hsl(225deg 25% 95%);
    --gray: #5f6c7b;
    --blue400: #3da9fc;
    --blue50: #d8eefe;
    --red: #ef4565;
  }

body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd {
  margin: 0;
  padding: 0;
  font-family: Raleway, 'sans-serif';
}

  html, body {
  height: 100%;
  background: hsl(225deg 25% 95%); //#fffffe
}

// create root stacking context
#__next {
  isolation: isolate;
  height: 100%;
}
`

export default GlobalStyles