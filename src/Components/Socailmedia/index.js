import React  from 'react';
import axios from "axios";
import {
  SocialMedia , 
  Social , 
  SocialIcon , 
  SocialPara,
  SocialParaSpan
 } from "./style.js";

 
class  Socailmedia extends React.Component {

  state = {
    social : []
  }

  componentDidMount(){
    axios.get("../../js/data.json").then(res => {
      this.setState({social : res.data.social})
    })
  }
  

    render(){   
      const {social} = this.state
      const getsocail = social.map((item , i) =>{
        return(
          <Social tp={item.tp} key={item.id}>
            <SocialIcon className={item.icon}></SocialIcon>
            <SocialPara >
                <SocialParaSpan >{item.title}</SocialParaSpan>
                <SocialParaSpan info="2">{item.body}</SocialParaSpan>
            </SocialPara>
        </Social>
        )
     })
      return (
        <SocialMedia>
              {getsocail}
        </SocialMedia>
      )
    }
}
export default Socailmedia;