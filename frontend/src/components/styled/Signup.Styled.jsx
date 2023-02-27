import styled from 'styled-components';

const Signup = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
&> form {
    background-color: ${({theme}) => theme.elevation_1};
    border-radius: 5px;
    height: 400px;
    width: 90%;
    max-width: 500px;
    display: flex;
    justify-content:  space-evenly;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: ${({theme}) => theme.shadow};
    h1{
        font-family: "Pacifico" cursive;
    }
    
}
`;

export const SignupButton = styled.button`
        appearance:none;
        --moz-appearance:none;
        font-family: "Monsterrat", sans-serif;
        --webkit-appearance:none;
        font-size: 1.3rem;
        border-radius: 5px;
        border: none;
        outline: none;
        width: 90%;
        max-width:250px;
        height: 15%;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        color: white;
        cursor: pointer;
        background-color: ${({theme}) => theme.primary};
        &:hover{
            background-color: ${({theme}) => theme.primaryHover};
        }
        &:active{
            transform: scale(0.98);
        }
        &:focus,&:hover{
            appearance:none;
        --moz-appearance:none;
        --webkit-appearance:none;
        border: none;
        outline: none;
        }
`;
export default Signup