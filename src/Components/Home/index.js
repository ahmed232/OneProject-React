import React  from 'react';
import {Homesection , Homeinformation , Hometitle ,Homeinfo ,Homedesc , Homedescspan ,Homebtn } from "./style.js"

const Home = () => {
    return (
      <Homesection className="home">
          <div className="container">
              <Homeinformation className="home-information">
                  <Hometitle className="home-title margin-bottom">Hamza Nabil</Hometitle>
                  <Homeinfo className="home-info">Creative Director</Homeinfo>
                  <Homedesc className="home-desc">
                      Iam a professional <Homedescspan>UX Designer</Homedescspan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                  </Homedesc>
                  <Homebtn className="home-btn">Let's Begin</Homebtn>
              </Homeinformation>
          </div>
      </Homesection>
    )
}
export default Home;