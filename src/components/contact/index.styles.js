import styled from "styled-components";
const OuterContact = styled.div`
width: 100%;
padding: 2rem;
box-sizing: border-box;
margin: 0;
color: white;
font-family: 'Montserrat', sans-serif;
h2{
    font-size: 2rem;
    text-align: center;
}

img{
    width: 100px;
    height: auto;
}
a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 2rem;
    border-radius: 20px;
    gap: 3rem;
    p{
        margin: 0;
    }
    :hover{
        background-color: rgba(255, 255, 255, 0.25);

    }
}

.contactInfo{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-evenly;
}
`

export { OuterContact };