import React from 'react'
import styled from 'styled-components/macro';
import CinemaValue from '../images/history.jpg';
import { Button } from './Button';


// Dimensions to be fixed later

const Section = styled.section`
    position: relative;
    background: #000d1a;
    display: grid;
    grid-template-areas: ". . . . ."
                         ". . . b b"
                         "a a a b b"
                         "a a a b b"
                         "a a a b b"
                         "a a a b b"
                         "a a a b b"
                         ". . . b b"
                         ". . . . .";
    height : 70vh;
    width: 100%; 
    
    @media screen and (max-width : 1218px) {
        height: 90vh;

    }
    @media screen and (max-width : 920px) {
        height: 110vh;

    }
`;

const LeftColumn = styled.div`
    grid-area : a;
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    position: relative;

    
`;
const RightColumn = styled.div`
    grid-area: b;
    width: 100%;
    height: 100%;
    
    
`;
const Image = styled.img`
    grid-area: b;
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 2px;

    @media screen and (max-width : 760px) {
        height: 50%;
        position:absolute;
        top: 50%;
        width: 120%;
        transform: translateY(-50%);
        z-index: 4;

    }
   


`;
const Content = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding-left: 10rem;
    padding-right: 2rem;
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
        margin-bottom:  1.5rem;
        font-size: 2rem;
        font-weight: 400;
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.2;
        font-size: 1rem;
    }
    @media screen and (max-width : 760px) {
        padding-left: 1rem;
        padding-right: 0.5rem;

    }
   

`;

const Features = () => {
    return (
        <Section>
            
                <LeftColumn>
                    <Content 
                        data-aos = 'flip-left'
                        data-aos-duration = '600'
                        data-aos-once = 'true'
                        data-aos-delay='100'
                        >
                    <h1>Our history</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Amet mauris commodo quis imperdiet massa. Tortor posuere ac ut consequat.
                    Mattis nunc sed blandit libero volutpat sed cras ornare.</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                      <Button content = {true}>SEE MORE</Button>              
                    </Content>
                </LeftColumn>
                
                <Image src={CinemaValue} 
                       data-aos = 'flip-right'
                       data-aos-duration = '600'
                       data-aos-once = 'true'
                       data-aos-delay='400'
                />
               
           
        </Section>
    )
}

export default Features


/**
 

     @media screen and (max-width : 1218px) {
        height: 90vh;

    }
    @media screen and (max-width : 920px) {
        height: 110vh;

    }
 */