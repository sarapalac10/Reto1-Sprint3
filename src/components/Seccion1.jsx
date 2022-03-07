import React from 'react'
import { ButtonInicio, ContainerSeccion, SeccionInicio, TextSeccion } from '../style/SeccionStyle'

const Seccion1 = () => {
  return (
    <ContainerSeccion>
      <img className='imagen-seccion1' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646496187/Reto1-Sprint3/illustration-intro_eexx0w.png' alt='logo-seccion1' />
      <SeccionInicio>
        <h2>All your files in one secure location, accessible anywhere</h2>
        <TextSeccion>
          Fylo stores all your most important files in one secure location. Access them wherever 
        you need, share and collaborate with friends family, and co-workers.
        </TextSeccion>
        <ButtonInicio>
          Get Started
        </ButtonInicio>
      </SeccionInicio>
    </ContainerSeccion>
  )
}

export default Seccion1