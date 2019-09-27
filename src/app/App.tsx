import React from 'react'
import styled from 'styled-components'
import MiniSidebar from './components/MiniSidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Works from './pages/Works'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { background, mainText } from './data/colors/elements'
import { Color } from './data/types/elements'

const App: React.FC = () => {
  return (
    <Router>
      <Parent color={mainText}>
        <MiniSidebar />
        <Body color={background}>
          <Header />
          <ScrollToTop>
            <Route exact path="/" component={Home} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/contact" component={Contact} />
          </ScrollToTop>
          <Footer />
        </Body>
      </Parent>
    </Router>
  )
}

/* Styles */
const Parent = styled.div`
  color: ${(props: Color) => props.color};
  min-height: 100vh;
  width: 100vw;
  display: flex;
`

const Body = styled.div`
  background-color: ${(props: Color) => props.color};
  flex: 1;
`

export default App;
