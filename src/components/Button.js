import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#000d1a' : '#CD853F')};
    white-space: nowrap;
    outline:none;
    border:none;
    text-decoration: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3;
    display: flex;
    
    justify-content: center;
    font-size : ${({big}) =>(big ? '20px' : '12px')};
    align-items: center;
    padding : 16px 7px 16px 7px;
    color : ${({primary}) => (primary ? '#ffff' : '#000d1a')};

    &:hover {
        transform: translateY(-2px);
    }

    @media screen and (max-width: 768px) {
        display: ${({content}) => (content ? 'flex' : 'none')};
    }


`;