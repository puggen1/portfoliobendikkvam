import styled from "styled-components";
const OuterProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    width: 350px;
    align-items: center;
    h2{
        text-align: center;
        color: white;
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
    }
    img{
        width: 90%;
        border-radius: 20px;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;

    }
    a{
        text-decoration: none;
        button{
            color: white;
            border: solid 1px white;
            border-radius: 20px;
            padding: 0.5rem 1rem;
            background-color: transparent;
            transition: all 0.2s ease-in-out;


        }

    }
    .buttons{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 1rem auto;
       
    }
    :hover{
        background-color: rgba(255, 255, 255, 0.25);
        button{
                border-color: #EAB27E;
                color: #EAB27E;
                cursor: pointer;
        }
        img{
            opacity: 1; 
        }
    }
    `


export default OuterProjectCard;