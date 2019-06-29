import React , {useState , useEffect}  from 'react';
import {Portfolioall , Portfoliotitle , Portfoliotitlespan ,
   Portfoliolist , Portfolioitem, Boxdiv , BoxImg , Overlay , Overlayspan
} from "./style.js"

import axios from "axios"

const Portfolio = () => {

  const [images , setImage] = useState([])

  useEffect(() => {
    axios.get("js/data.json").then(res => {
      setImage(
        res.data.portfolio
      )
    })
  } , [])

    const ports = images.map( (itemimage) => {
      return (
        <Boxdiv key={itemimage.id}>
          <BoxImg src={itemimage.image} alt="" />
          <Overlay>
              <Overlayspan>
                  Show Image
              </Overlayspan>
          </Overlay>
        </Boxdiv>
      )
    })
    return (
      <Portfolioall>
      <Portfoliotitle><Portfoliotitlespan>My</Portfoliotitlespan> Portfolio</Portfoliotitle>
      <Portfoliolist>
          <Portfolioitem active>All</Portfolioitem>
          <Portfolioitem>HTML</Portfolioitem>
          <Portfolioitem>Photoshop</Portfolioitem>
          <Portfolioitem>Wordpress</Portfolioitem>
          <Portfolioitem>Mobile</Portfolioitem>
      </Portfoliolist>
      
      <div className="box">
          {ports}
      </div>
      
  </Portfolioall>
  
    )
}
export default Portfolio;