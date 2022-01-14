import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
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
    ---gray-100: #FAFAFA
    --gray-50: #F7F7F7;
  }

  input { 
    :-webkit-autofill, :-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;

    [data-autocompleted] {
      background-color: transparent !important;
    }
  }
`;