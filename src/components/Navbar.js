import React,{useState, useEffect}from 'react'
import styled,{css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { NavItems } from '../data/NavItems';
import { Button } from './Button';
import Bars from '../images/bars.svg';


const MainContainer = styled.div`
    height: 60px;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 200;
    padding:1rem;
    @media screen and (max-width: 768px) {
        justify-content: space-between;
        padding: 0;
    }  
    
`;

const customNav = css`
    color : #fff;
    text-decoration: none;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;


const Logo = styled(Link)`
    ${customNav}
    font-style: italic;
    font-size: 20px;
`;

const NavLink = styled(Link)`
    ${customNav}
    font-size: 18px;
    &:hover {
        transform: translateY(-2px);
    }

`;

const NavMenu = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 760px) {
        display : ${({primary}) => (primary ? 'flex' : 'none')};
        position: fixed;
        flex-direction: column;
        justify-content: space-around;
        color:black;
        height: 250px;
        width:100%;
        top:60px;
        background: transparent;
        z-index: 100;
        transition: all 0.5s ease-out;
        
    }    
`;

const NavSign = styled(Link)`
    ${customNav}
    display: none;
    @media screen and (max-width: 760px) {
        display: block;
    }
`;

const NavIcon = styled.i`
    display: none;

    @media screen and (max-width: 760px) {
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height:40px;
        width: 40px;
        position: absolute;
        top: 10px;
        right:60px;
        
    }

`;

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(!clicked);
    return (
        <MainContainer>
            <Logo>
            FinCinema
            </Logo>
            <NavIcon onClick={handleClick}/>
            <NavMenu primary={clicked}>
            {NavItems.map((item, index) => {
                return (
                <NavLink key={index} to={item.path}>{item.title}</NavLink>
                )
            })}
            <NavSign to="/contactus" className="contactUs">Contact US</NavSign>
            </NavMenu>

            <Button
                primary={true}
            >CONTACT US</Button>

            
        </MainContainer>
    )
}

export default Navbar
