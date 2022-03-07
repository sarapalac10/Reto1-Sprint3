import React from 'react'
import { ButtonInicio, InputContainer, InputCorreo, InputMenuInterno } from '../style/SeccionStyle';

const Seccion5 = () => {
  return (
    <InputContainer>
    <InputMenuInterno>
      <h2>Get early access today</h2>
      <p>  
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
        questions, our support team would be happy to help you.
      </p>
      <div>
        <InputCorreo placeholder='email@email.com'></InputCorreo>
        <ButtonInicio> 
          Get Started For Free
        </ButtonInicio>
      </div>
    </InputMenuInterno>
    </InputContainer>
  )
}

export default Seccion5;
