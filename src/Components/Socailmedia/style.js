import styled from "styled-components"
export const SocialMedia = styled.div`
    height: auto;
    overflow: hidden
`
export const Social = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px
    background : ${props => 
    props.tp === "face" ? "#3b5998" : 
    props.tp === "twitter" ? "#498cbf" : 
    props.tp === "pin" ? "#cc2127;" : ""}
`
export const SocialIcon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`
export const SocialPara = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
`
export const SocialParaSpan = styled.span`
    display: block;
    margin-bottom: 8px
    font-weight: ${props => props.info === "2" ? "normal" : ""}
`