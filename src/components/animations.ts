import { keyframes } from 'styled-components'

const translateToRight = keyframes`
  from {
    transform: translateX(-300px);
    opacity: 0;
  }
  to {
    transform:  translateX(0);
    opacity: 1;
  }
`

const translateToLeft = keyframes`
  from {
    transform: translateX(300px);
    opacity: 0;
  }
  to {
    transform:  translateX(0);
    opacity: 1;
  }
`

const scaleInExistence = keyframes`
  from {
    transform: scale(0);
    //opacity: 0;
  }
  to {
    transform:  scale(1);
    //opacity: 1;
  }
`

const scaleInOpacity = keyframes`
  from {
    
    opacity: 0;
  }
  to {

    opacity: 1;
  }
`

export { translateToLeft, translateToRight, scaleInExistence, scaleInOpacity }
