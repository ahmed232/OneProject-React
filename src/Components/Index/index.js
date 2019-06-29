import React ,{Component}  from 'react';

// import Page
import About from "../About/index"
import Footer from "../Footer/index"
import Home from "../Home/index"
import Portfolio from "../Portfolio/index"
import Profile from "../Profile/index"
import Socailmedia from "../Socailmedia/index"
import Work from "../Work/index"


class Index extends Component{
    render () {
        return (
            <div>
              <Home />
              <Work />
              <Portfolio />
              <Profile />
              <About />        
              <Socailmedia />
              <Footer />
            </div>
        )
    }

}
export default Index;