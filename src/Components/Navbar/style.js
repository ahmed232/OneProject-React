import styled from "styled-components"
import { NavLink } from 'react-router-dom'

export const Navbarsection = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`
export const Logo = styled.div`
    width: 50%;
    float: left;
`
export const Logotext = styled.h2`
    font-size: 30px;
    font-weight: bold
`
export const Ullist = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
`

export const Listitem = styled.li`
    display: inline-block;
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424
    }
`
export const StyledNavLink = styled(NavLink)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424
    }
`