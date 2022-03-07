import styled from "styled-components"
import '../style/BasicStyle.css'

export const ContainerSeccion = styled.div `
    color: var(--white);
    font-family: var(--fuenteBody);
    margin: auto;
    background-color: var(--mainBg);
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SeccionInicio = styled.div `
    font-family: var(--fuenteBody);
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    text-align: center;
    padding: 2rem;
    background-image: url('https://res.cloudinary.com/sarapalacio01/image/upload/v1646605113/Reto1-Sprint3/bg-curvy-desktop_dysmy4.svg')
`
export const TextSeccion = styled.p`
    line-height: 2rem;
`
export const ButtonInicio = styled.button`
    color: var(--white);
    background-color: var(--cyan);
    border: var(--cyan);
    padding: 10px 50px;
    border-radius: 20px;
    @media only screen and (max-width: 365px) {
        padding: 10px 20px;
        width: 150px; 
    }
`
/* Seccion  */
export const ContainerSeccionGrid = styled.div `
    padding-left: 15%;
    padding-right: 15%;
    color: var(--white);
    background-color: var(--mainBg);
    font-family: var(--fuenteBody);
    margin: auto;
    background-image: url('https://res.cloudinary.com/sarapalacio01/image/upload/v1646605113/Reto1-Sprint3/bg-curvy-desktop_dysmy4.svg');
    background-position: center;
    background-repeat: no-repeat;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    text-align: center;
    padding-bottom: 2rem;
    @media only screen and (max-width: 365px) {
        padding: 2rem 4rem;
        display: block;
        }
`
export const SeccionCentral = styled.div`
    padding: 1rem;
    color: var(--white);
    background-color: var(--mainBg);
    font-family: var(--fuenteBody);
    margin: auto;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    text-align: center;
    @media only screen and (max-width: 365px) {
        display: block;
    }
`
export const TitleSeccion3 = styled.h2`
    color: var(--white);
    font-size: 20px;
    width: 30%;
    margin: auto;
`
export const ParrafoCentral = styled.p`
    font-family: var(--fuenteBody);
    color: var(--white);
    line-height: 2rem;
    width: 90%;
    margin: auto;
    text-align: left;
    margin-top: 2rem;
`
export const ButtonCentral = styled.button`
    width: 90%;
    margin-top: 2rem;
    background-color: transparent;
    color: var(--white);
    border: none;
    display: flex;
    text-decoration: underline;
    margin-left: 1.5rem;
    &:hover {
        color: var(--cyan)
    }
`
export const ContainerSeccion4 = styled.div `
    font-family: var(--fuenteBody);
    padding: 2rem;
    color: var(--white);
    background-color: var(--mainBg);
    background-image: url('https://res.cloudinary.com/sarapalacio01/image/upload/v1646496187/Reto1-Sprint3/bg-quotes_nwrp3z.png');
    background-repeat: no-repeat;
`
export const GridOpiniones = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    text-align: center;
    width: 90%;
    margin: auto;
    @media only screen and (max-width: 650px) {
        display: block;
    }
`
export const OpinionCard = styled.div`
    font-family: var(--fuenteBody);
    background-color: var(--testimonialBg);
    padding: 1rem;
    margin-bottom: 2rem
`
/*Seccion 5*/
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--mainBg);
`
export const InputMenuInterno = styled.div`
    background-color: var(--introBg); 
    color: var(--white);  
    width: 45%;
    text-align: center;
    margin: auto;
    position: relative;
    padding: 1rem 2rem;
    top: 40px;
`
export const InputCorreo = styled.input`
    width: 150px;  
    margin-right: 1rem;
    margin-bottom: 1.5rem;
    color: black;
    background-color: var(--white);
    border: var(--cyan);
    border-radius: 20px;
    padding: 10px 50px;
    @media only screen and (max-width: 365px) {
        padding: 10px 0;
        margin-bottom: 1.5rem;
    }
`
/* Footer */
export const ContainerFooter = styled.div`
    padding-top: 5rem;
    padding-left: 2rem;
    color: var(--white);
    background-color: var(--footerBg);
    font-family: var(--fuenteBody);
    margin: auto;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    @media only screen and (max-width: 365px) {
        display: block;
    }
`