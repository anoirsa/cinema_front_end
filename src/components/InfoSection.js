import React from 'react'
import styled,{css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import Joker from '../images/Joker.jpg'
import { Button } from './Button';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
    position: relative;
    @media screen and (max-width: 760px) {
        padding: 1rem;
       
        
    }
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 3rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1000px;
    
    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 1rem;
       
        
    }
`;
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 5rem;
    

    h1 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }
    p {
        margin-bottom: 2rem;
    }

`;
const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 6rem;

    

    img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2px;
    }

    @media screen and (max-width: 760px) {
        
        padding: 1rem;
       
        
    }
    
`;




const InfoSection = ({image, textOne, textTwo, heading}) => {

    return (
        <Section>
            <Container>

                <ColumnLeft
                    data-aos = 'fade-up'
                    data-aos-duration = '600'
                    data-aos-delay = '200'
                    aos-anchor-placement = 'center bottom'
                >
                <h1>{heading}</h1>
                <p>{textOne}</p>
                <p>{textTwo}</p>
                <Button primary={true} content={true}> Discover now</Button>
                </ColumnLeft>



                <ColumnRight 
                      data-aos = 'fade-left'
                      data-aos-duration = '600'
                      data-aos-delay = '800'
                      data-aos-anchor-placement ='center bottom'
                >
                    <img src={Joker}  />
                </ColumnRight>


            </Container>

        </Section>
    )
}

export default InfoSection
