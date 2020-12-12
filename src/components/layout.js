import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize';
// import { useGlobalStateContext } from "../context/GlobalContext";
// import './styles/fonts.css'
import { Helmet } from "react-helmet";
import CustomCursor from "./CustomCursor";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
	${normalize}
	* {
		text-decoration: none;
		cursor: none;
    scroll-behavior: smooth;
	}
	html {
		box-sizing: border-box;
		font-size: 16px;
		-webkit-font-smoothing: antialiased;
  }
	body {
		font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: ${props => props.theme.background};
		color: ${props => props.theme.text};
		overscroll-behavior: none;
		overflow-x: hidden;
		min-height: 100vh;
  }
`;

const Layout = ({ children, cursorPosition, onCursor, toggleMenu, setToggleMenu }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);



  const darkTheme = {
    isDark: true,
    background: "#000",
    text: "#fff",
    red: "#ea291e",
    // left: `${cursorPosition.x}px`,
    // top: `${cursorPosition.y}px`
  }

  const lightTheme = {
    isDark: false,
    background: "#fff",
    text: "#111",
    red: "#ea291e",
    // left: `${cursorPosition.x}px`,
    // top: `${cursorPosition.y}px`
  }

  // const { isDark } = useGlobalStateContext();



  return (
    <ThemeProvider theme={darkTheme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <main>{children}</main>
      <Footer onCursor={onCursor} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
