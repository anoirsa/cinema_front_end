import React from 'react';
import styled,{css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import BravePic from '../images/brave.jpg'
import FastPic from '../images/fast_and_furious.jpg'



const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2rem;
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

const Header = styled.div`
    padding: 1rem 7rem;
    text-align: start;
    h1 {
        font-size: 2rem;
      font-weight: 400;
    }
`;

const customGrid = css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    h2 {
        
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }
    img {
        position: relative;
        width: 90%;
        height: 400px;
        object-fit: cover;
        margin-bottom: 1.5rem;
    }
`

const ColumnLeft = styled.div`
    ${customGrid}
    margin-top: 140px;

`;

const ColumnRight = styled.div`
    ${customGrid}
`;
const SubSection = styled.div`
    padding: 1rem 7rem 1rem 7rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 700px;
    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
    }
    
`;

const InfoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color : #000d1a;
    width: 140px;
    transition: 0.3s;

    &:hover {
        transform: translateY(-2px);
    }
`;


const Listings = () => {
    return (
        <Section>
            <Container>
                <Header>
                    <h1>Our special offers</h1>
                </Header>
                <SubSection>
                <ColumnLeft
                    data-aos = 'fade-down-right'
                    data-aos-duration = '1000'
                    data-aos-delay = '200'
                    data-aos-anchor-placement ='center bottom'
                    data-aos-once = 'true'

                >
                    <img src={BravePic}  />
                    <h2>Brave, In English with Finnish subtitles</h2>
                    <InfoLink>View details</InfoLink>
                
                </ColumnLeft>

                <ColumnRight
                     data-aos = 'fade-up-left'
                     data-aos-duration = '1000'
                     data-aos-delay = '600'
                     data-aos-anchor-placement ='center bottom'
                     data-aos-once = 'true'
                >
                <img src={FastPic} />
               
                <h2>Fast and furious 8, In English with Finnish subtitles</h2>
                <InfoLink>View details</InfoLink>
                </ColumnRight>
                </SubSection>
            </Container>
            
        </Section>
    )
}

export default Listings
