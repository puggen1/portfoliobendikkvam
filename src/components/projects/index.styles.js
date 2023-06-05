import styled from "styled-components";
const OuterProject = styled.div`
    position: relative;
    width: 100vw;
    height: 90vh;
    .blurLayer{
        background-image: url(/background.jpg);
        filter: blur(5px);
        height: 100%;
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
        height: 100%;
        justify-content: center;
        align-items: center;
        gap:4rem;
        z-index: 2;
        position: relative;
        background-color: rgba(0,0,0,0.5);

    }
`

export {OuterProject}