import React, { useState } from "react"
import About from "../components/HomepageComponents/About"
import Banner from "../components/HomepageComponents/Banner"
import Contact from "../components/HomepageComponents/Contact"
import Projects from "../components/HomepageComponents/Projects"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useGlobalDispatchContext, useGlobalStateContext } from "../context/GlobalContext"

const IndexPage = () => {
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || null;
    dispatch({
      type: "CURSOR_TYPE",
      cursorType: cursorType
    })
  };
  // useEffect(() => {
  //   if (typeof window !== `undefined`) {
  //     window.localStorage.setItem('theme', isDark);
  //   } 
  // }, [isDark])

  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  return (
    <Layout onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}>
      <SEO title="Home" />
      <Banner onCursor={onCursor} />
      <About onCursor={onCursor} />
      <Projects onCursor={onCursor} />
      <Contact onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
