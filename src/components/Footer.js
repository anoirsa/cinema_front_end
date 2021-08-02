import React from 'react';
import styled, {css} from 'styled-components/macro'
import { Button } from './Button';
import {FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube} from 'react-icons/fa';


const Section = styled.section`
    position: relative;
    background: #000d1a;
    padding : 3rem 3rem;
    width: 100%;
    min-height: 600px;
    
`;
const Container = styled.div`

    height:100%;
    width:100%;
    padding: 1rem 0rem;
    
`;
const FooterTop = styled.div`
    width:90%;
    color:#fff;
    display: flex;
    padding:0 4rem;

    @media screen and (max-width : 768px) {
        flex-direction: column;
        padding: 0 1rem;

    }
    
`;
const Quote = styled.div`
    flex: 1;
    padding: 0 3rem;
    height: 100%;
    h3 {
        font-size: 2rem;
        font-weight: 500;
    }

    @media screen and (max-width : 768px) {
        margin-bottom: 2rem;

    }

   
`;
const FooterInfo = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    line-height: 3;
    @media screen and (max-width : 768px) {
        flex-direction: column;
        padding: 1rem 0rem;

    }

    @media screen and (max-width : 850px) {
        
        padding: 1rem 0.5rem;

    }
    a {
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;
const FooterBottom = styled.div`
    display: flex;
    min-height:200px;
    padding: 2rem 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color:#fff;
    width:80%;

    @media screen and (max-width : 768px) {
        flex-direction: column;
        padding: 0 1rem;

    }
    
`;
const SocialIcons = styled.div`
    padding-left: 6rem;
    display: flex;
    flex: 1;
    @media screen and (max-width : 768px) {
        flex : 100%;
        padding: 0 1rem;

    }


`;
const Chat = styled.div`
   
    display: flex;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    @media screen and (max-width : 768px) {
        flex : 1;

    }
   
`;

const icons = css`
    font-size: 2rem;
    margin-right: 1.5rem;
    color: #cd853f;
`;


const Facebook = styled(FaFacebookF)`${icons}`;
const Instagram = styled(FaInstagram)`${icons}`;
const Youtube = styled(FaYoutube)`${icons}`;
const LinkedIn = styled(FaLinkedinIn)`${icons}`;




const Footer = () => {
    
    return (
        <Section>
            <Container>
                <FooterTop>
                    <Quote>
                    <h3>Let's find <br />a suitable subscription</h3>
                    </Quote>
                    <FooterInfo>
                        <h4>Our offices</h4>
                        <a>Helsinki</a>
                        <a>Tempere</a>
                        <a>Vaasa</a>
                    </FooterInfo>

                    <FooterInfo>
                        <h4>Contact US</h4>
                        <a>FQA</a>
                        <a>Support</a>
                        <a>Questions</a>
                    </FooterInfo>
                </FooterTop>
                <FooterBottom>
                    <SocialIcons>
                        <Facebook />
                        <Instagram />
                        <Youtube />
                        <LinkedIn />
                    </SocialIcons>
                    <Chat>
                        <Button style={{position:'absolute'}} content={true}>Let's Chat</Button>
                    </Chat>
                </FooterBottom>
            </Container>
            
        </Section>
    )
    
}

export default Footer
