import styled from 'styled-components';

export const StyledNavbar =  styled.div`
position: sticky;
top: 0;
`;

export const HandburgerButton = styled.i`
    font-size: 2rem;
    z-index: 5;
    position: absolute;
    top: 10px;
    left: 10px;
    margin: 0;
    @media (min-width: 600px) {
        display: none;
    }
`

export const MobileMenu = styled.nav`
display: flex;
background-color: ${({theme}) => theme.elevation_2};
position: absolute;
top: 0;
padding: 4rem 0.5rem;
bottom: 0;
width: 35%;
flex-direction: column;
gap: 2rem;
text-align: center;
font-size: 1.3rem;
font-weight: bold;
transition: transform 150ms ease-in;
transform: ${({open}) => open ? "translateX(0%);" : "translateX(-100%);"};
a:first-child{
    text-decoration: none;
}
a {
    color: white;
}
@media (min-width: 600px) {
    display: none;
}
`; 
export const DesktopMenu = styled.nav`
background-color: ${({theme}) => theme.elevation_2};
display: flex;
max-width: 100%;
font-size: 1.5rem;
height: 15%;
gap: 2rem;
align-items: center;
text-align: center;
padding: 1rem 2rem;
a:first-child{
    margin-right: auto;
    &:hover{
        text-decoration: none;
    }
}
a{
    color: white;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
}
@media (max-width: 600px) {
    display: none;
}`; 