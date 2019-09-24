import React from 'react';
import styled from 'styled-components';
import MiniSidebar from './components/MiniSidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Works from './pages/Works';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Parent>
        <MiniSidebar />
        <Body>
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
  );
}

/* Styles */
const Parent = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`

const Body = styled.div`
  background-color: #FAFAFA;
  flex: 1;
`

export default App;
