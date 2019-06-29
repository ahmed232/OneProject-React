import styled from "styled-components";


export const Worksection = styled.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
`
export const Worktitle = styled.h2`
    font-size: 60px; 
`
export const Worktitlespan = styled.span`
    font-weight: normal
`
export const Workpart = styled.div`
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 20px 0;
    border: 1px solid #888;
    padding-top: 70px;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
    margin-left: ${props => props.first === 1  ? "0" : "5%" }
`
export const Workparticon = styled.i`
    color: #888;
    margin-bottom: 20px;
    display: inline-block;
    font-size: 25px;
`

export const Workparttitle = styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`

export const Workpartline = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const Workpartdes = styled.p`
font-size: 14px;
color: #888;
line-height: 27px;
padding: 20px
`
