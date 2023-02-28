import styled from 'styled-components';

export const StyledPostModal = styled.div`
position: absolute;
z-index: 0;
background-color: #1118;
inset: 0;
display: flex;
justify-content: center;
align-items: center;
`;
export const PostModalForm = styled.form`
width: 90%;
max-width: 500px;
background-color: ${({theme}) => theme.elevation_3};
height: 60%;
border-radius: 5px;
box-shadow:${({theme}) => theme.shadow} ;
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;

& > textarea {
    width: 90%;
    max-width: 300px;
    height: 50%;
    outline: none;
    border:none;
    padding: 1rem 1rem;
    border-radius: 5px;
    resize: none;
}
& > button{
    color: white;
    background-color:${({theme}) => theme.primary} ;
    outline: none;
    border: none;
    appearance:none;
    cursor: pointer;
        --moz-appearance:none;
        --webkit-appearance:none;
        text-decoration: none;
        padding: 0.7rem 1rem;
        font-size: 1rem;
        border-radius: 5px;
        &:active{
            transform: scale(0.98);
        }
}
`;
export const PostModalHeader = styled.form``;

export const PostModalButton = styled.i`
    margin-top: auto;
    margin-inline:auto;
    padding: 0.2rem 1.2rem;
    font-size: 1.5rem;
    color: ${({theme}) => theme.primary};
    background-color: transparent;
    border-radius: 5px;
    z-index: 3;
    cursor: pointer;
    border: 4px solid ${({theme}) => theme.primary};
@media (min-width: 600px) {
    margin-inline:0;
    margin-top:0;
    padding: 0.2rem 0.7rem;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover{
        color:${({theme}) => theme.elevation_2} ;
        background-color: ${({theme}) => theme.primary};
        transition: all 150ms ease-in;
    }
}
`;