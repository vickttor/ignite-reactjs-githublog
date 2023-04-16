import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: 'Nunito', Arial, sans-serif;
    line-height: 1.6; // 160%
    font-weight: 400; // regular (700 to bold)

    color-scheme: light dark;
    color: ${({theme})=>theme.text};
    background-color: ${({theme})=>theme.bgcolor};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-weight: 400;
    color: ${({theme})=>theme.primary};
    border-bottom: 1px solid transparent;
    transition: border 0.2s ease-in;
    text-decoration: inherit;
    padding-bottom: 0.25rem;
    &:hover {
      border-color: ${({theme})=>theme.primary};
    }
  }

  h1 { 
    font-size: 1.5rem; // 24px
    line-height: 1.3;
    color: ${({theme})=>theme.title};
  }

  h2, h3, h4, h5, h6 {
    color: ${({theme})=>theme.subtitle};
  }

  h2 { font-size: 1.25rem; } // 20px
  h3 { font-size: 1.125rem; } // 18px
  h4 { font-size: 1rem; } // 16px
  h5 { font-size: .875rem; } // 14px
  h6 { font-size: .75rem; } // 14px

  p {
    font-size: 1rem;
    color: ${({theme})=>theme.text};
  }

  button {
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid ${({theme})=>theme.primary};
    cursor: pointer;
    transition: background 0.25s;

    &:hover {
      background-color: ${({theme})=>theme.primary};
      /* filter: drop-shadow(16px 16px 20px red) invert(75%); */
    }

    &:focus, &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }

  ul, li, ol {
    list-style: none;
  }

  input {
    width: 100%;
    height: 50px;
    background-color: ${({theme})=>theme.input};
    border: 1px solid ${({theme})=>theme.border};
    border-radius: 6px;
    outline: none;
    padding: .75rem 1rem;

    font-size: 1rem;
    color: ${({theme})=>theme.text};
    
    transition: all 0.1s ease-in-out;

    &::placeholder {
      color: ${({theme})=>theme.label}
    }

    &:focus {
      border-color: ${({theme})=>theme.primary};
    }
  }

  *::-webkit-scrollbar {
		width: 0.5rem;
	}
 
	*::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}
	
	*::-webkit-scrollbar-thumb {
		background-color: ${({theme})=>theme.primary};
	}
`;
