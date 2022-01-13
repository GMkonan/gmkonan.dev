import screenSizeCompare from "./utils/screenSizeCompare"

const BREAKPOINTS = {
    tablet: 550,
    laptop: 1100,
    desktop: 1500,
  }
  const QUERIES = {
    'phone': `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
    'tablet': `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
    'laptop': `(max-width: ${BREAKPOINTS.desktop / 16}rem)`,
}

//maybe substitute screenSizeCompare for constants with comparators here?

// const SIZES = {
//     isSmall: screenSizeCompare(BREAKPOINTS.tablet),
//     isMedium: screenSizeCompare(BREAKPOINTS.laptop),
//     isBig: screenSizeCompare(BREAKPOINTS.desktop),
// }

export {QUERIES}