import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NavBarStyled = styled.nav`
    background-color: pink;
    height: 10vh;

    >ul {
        list-style: none;

        >li {
            display: inline-block;
            padding: 15px;
            border: 1px solid black;
            &:hover {
                cursor: pointer;
                background-color: white;
            }
        }
    }
`;

export const NavBar = () => {

    const navigation = useNavigate()

    // const getOnClick = (page) => () => navigation(page)
    return (
        <NavBarStyled>
            <ul>
                <li onClick={() => navigation('/')}>Home</li>
                <li onClick={() => navigation('/pilots')}>Pilots</li>
                <li onClick={() => navigation('/starships')}>Starships</li>
            </ul>
        </NavBarStyled>
    )
}