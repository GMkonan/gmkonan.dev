import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 9px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    //you can manipulate border here if you want as well.
    background-color: #5f6c7b;
  }

  //doesnt work on firefox
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--gray);
  }

  :root {
    --primary: #094067;
    --white: #fffffe;
    --off-white: hsl(225deg 25% 95%);
    --gray: #5f6c7b;
    --blue400: #3da9fc;
    --blue50: #d8eefe;
    --red: #ef4565;

    //syntax colors to be used in code blocks
    --red-500: hsl(353deg 100% 55%);
    --primary-50: hsl(205, 84%, 30%);
  }

body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd, pre {
  margin: 0;
  padding: 0;
  font-family: Raleway, 'sans-serif';
}

  html, body {
  height: 100%;
  min-width: 100%;
  background: hsl(225deg 25% 95%); //#fffffe
}

// create root stacking context
#__next {
  isolation: isolate;
  height: 100%;
  width: 100%;
}
`

export default GlobalStyles