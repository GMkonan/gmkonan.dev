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
    --primary: #094067; //#094067
    --white: #fffffe; //#fffffe
    --off-white: hsl(225deg 25% 95%); //hsl(225deg 25% 95%)
    --gray: hsl(212, 13%, 43%); //#5f6c7b
    --blue400: #3da9fc; //#3da9fc
    --blue50: hsl(205, 95%, 92%); //#d8eefe
    --red: #ef4565; //#ef4565

    //syntax colors to be used in code blocks
    --red-500: hsl(353deg 100% 55%); //hsl(353deg 100% 55%)
    --primary-50: hsl(205, 84%, 30%); //hsl(205, 84%, 30%)
    --green: #84cc16;
    --black: #00000;
    --blue50-blurred: hsl(205, 25%, 55%, 0.65);
  }

  [data-theme='dark'] {
    --primary: hsl(205, 95%, 40%); //#094067
    --white: hsl(210deg, 30%, 8%); //#fffffe
    --off-white: hsl(210deg, 30%, 2%); //hsl(225deg 25% 95%)
    --gray: #fff; //#5f6c7b
    --blue400: #3da9fc; //#3da9fc
    --blue50: hsl(205, 85%, 15%); //#d8eefe
    --red: #ef4565; //#ef4565

    //syntax colors to be used in code blocks
    --red-500: hsl(353deg 100% 55%); //hsl(353deg 100% 55%)
    --primary-50: hsl(205, 84%, 30%); //hsl(205, 84%, 30%)
    --green: #84cc16;
    --black: #ffffff;
    --blue50-blurred: hsl(205, 25%, 25%, 0.65);
}

body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd, pre {
  margin: 0;
  padding: 0;
  font-family: Raleway, 'sans-serif';
}

// prevent svg from getting in front of button, making it not trigger
svg {
  pointer-events: none;
}

//change mouse selection background
::-moz-selection { /* Code for Firefox */
  //color: red;
  background: var(--blue50);
}

::selection {
  //color: red;
  background: var(--blue50);
}

  html, body {
  height: 100%;
  min-width: 100%;
  background: var(--white); //#fffffe
  transition: color 350ms ease 0s, background-color 350ms ease 0s;
}

// create root stacking context
#__next {
  isolation: isolate;
  height: 100%;
  width: 100%;
}
`

export default GlobalStyles
