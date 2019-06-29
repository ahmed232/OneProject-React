import React , {Component}  from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import {Worksection ,Worktitle, Worktitlespan , Workpart,Workparticon , 
  Workparttitle , Workpartline , Workpartdes} from "./style.js";


class Work extends  Component {
    state = {
        works : []
    }

    componentDidMount(){
        axios.get("js/data.json").then(res => {this.setState({
            works : res.data.works
        })})
    }

    render() {
        const {works} = this.state;
        const element = <Workparticon ><FontAwesomeIcon icon={faCoffee} /></Workparticon>

        const AllWorks = works.map((workitem) => {
            return (
                <Workpart key={workitem.id} first={workitem.id}>
                    {element}
                    <Workparttitle>{workitem.title}</Workparttitle>
                    <Workpartline />
                    <Workpartdes>
                        {workitem.body}
                    </Workpartdes>
                </Workpart>
            )
        })
      return (
        <Worksection>
          <div className="container">
              <Worktitle ><Worktitlespan>My</Worktitlespan> Work</Worktitle>
  
            {AllWorks}
          </div>
      </Worksection>
      )
    }
}
export default Work;