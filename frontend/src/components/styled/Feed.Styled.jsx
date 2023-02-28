import styled from 'styled-components';


export const StyledFeed = styled.div`
margin: 3rem auto 0;
min-height: 100vh;
display: flex;
flex-direction:column;
gap: 3rem;
width: 90%;
max-width: 700px;
h1{
    text-align: center;
}
`;



export const StyledPost = styled.div`
    background-color: ${({theme}) => theme.elevation_1} ;
    padding: 1rem 2rem;
    border-radius: 5px;
    & > p{
        margin-top:1rem;
    }

`;
export const StyledHeader = styled.div`
display: flex;
align-items: center;
gap: 2rem;
padding-bottom:1rem;
border-bottom: 2px dotted gray;
& > img {
    border-radius: 50%;
    width: 50px;
}
`;
export const LoadMoreButton = styled.div`
position: relative;
width: 150px;
height: 20px;
border-radius: 5px;
margin: 2rem auto 1rem;
padding: 1rem 2rem;
& > button{
    color: white;
    font-size: 1.5rem;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.primary} ;
    position: absolute;
    cursor: pointer;
    inset:0;
    &:active{
        transform: scale(0.98);
    }
}
`;