import React from 'react'
import styled from 'styled-components'
import MiniSidebar from './components/MiniSidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Works from './pages/Works'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { background, mainText } from './data/colors/elements'
import { Color } from './data/types/elements'
import withTracker from './withTracker'

const App: React.FC = () => {
  return (
    <Router>
      <Parent color={mainText}>
        <MiniSidebar />
        <Body color={background}>
          <Header />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={withTracker(Home)} />
              <Route exact path="/works" component={withTracker(Works)} />
              <Route exact path="/contact" component={withTracker(Contact)} />
              <Route component={withTracker(NotFound)} />
            </Switch>
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
  width: 100vw;
  display: flex;
`

const Body = styled.div`
  background-color: ${(props: Color) => props.color};
  flex: 1;
  min-height: 100vh;
`

export default App;
