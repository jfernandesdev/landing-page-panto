import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    max-width: 100vw;
    overflow-X: hidden;
  }
  
  body {
    font: 16px 'Gilroy', 'Inter', Arial, Helvetica, sans-serif;

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(36, 37, 41, 0.5);
    }
  }

  body, input, button, textarea { 
    font: 16px 'Gilroy', 'Inter', Arial, Helvetica, sans-serif;
  }

  :root {
    --white: #FFFFFF;
    --black: #1E1E1E;
    --orange-100: #E58411;
    --orange-50: #F6B76F;
    --blue-dark: #0D1B39;
    --gray-300: #8D8D8D;
    --gray-200: #EEEEEE;
    --gray-100: #FAFAFA;
    --gray-50: #F7F7F7;
  }

  p {
    font-size: 18px;
    line-height: 185%;
    color: #1E1E1E;
    opacity: 0.8;
  }

  input { 
    :-webkit-autofill, :-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;

    [data-autocompleted] {
      background-color: transparent !important;
    }
  }

  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(12, 24, 51, 0.4);
      box-shadow: 0 0 0 0 rgba(12, 24, 51, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 10px rgba(12, 24, 51, 0);
        box-shadow: 0 0 0 10px rgba(12, 24, 51, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(12, 24, 51, 0);
        box-shadow: 0 0 0 0 rgba(12, 24, 51, 0);
    }
  }


  @keyframes hamburger4animTop {
    0% {
      display: none;
    }
    1% {
      display: inline-block;
    }
    60% {
      transform: none;
      opacity: 0;
    }
    100% {
      transform: rotate(45deg);
      opacity: 1;
    }
  }
  @keyframes hamburger4animBottom {
    0% {
      display: none;
    }
    1% {
      display: inline-block;
    }
    60% {
      transform: none;
      opacity: 0;
    }
    100% {
      transform: rotate(-45deg);
      opacity: 1;
    }
  }
}

span[type=next], span[type=prev]{
  box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
}

@media(max-width: 769px) {
  div:has(span[type=next]), 
  div:has(span[type=prev]) {
    display: invert !important;
  }
}
`;
