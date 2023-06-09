import styled from "styled-components";
const OuterProject = styled.div`
    position: relative;
    width: 100%;
    min-height: 90vh;
    
    .blurLayer{
        background-image: url(/background.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: blur(5px);
        min-height: 90vh;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index:1;


    }
    .projects{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 2rem;
        min-height: 90vh;
        justify-content: center;
        align-items: center;
        gap:4rem;
        z-index: 2;
        position: relative;
        background-color: rgba(0,0,0,0.5);

    }
`

export {OuterProject}