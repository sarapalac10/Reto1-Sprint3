import styled from "styled-components"
import '../style/BasicStyle.css'

export const MenuHeader = styled.div `
    color: var(--white);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 365px) {
        justify-content: center;
        margin-left: 0;
    }
`
export const ContainerHeader = styled.div `
    font-family: var(--fuenteTitulo);
    margin: auto;
    background-color: var(--mainBg);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 30px;
    @media only screen and (max-width: 365px) {
        justify-content: center;
        margin-left: 0;
    }
`
export const SubMenuHeader = styled.a`
    margin: 0 1rem;
    cursor: pointer
`
