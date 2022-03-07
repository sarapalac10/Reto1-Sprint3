import React from 'react'
import { ButtonCentral, ParrafoCentral, SeccionCentral, TitleSeccion3 } from '../style/SeccionStyle';

const Seccion3 = () => {
  return (
  <SeccionCentral>
        <img className='seccion-3' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646496187/Reto1-Sprint3/illustration-stay-productive_wvccpa.png' alt="imagen-seccion3" />
      <div>
        <TitleSeccion3>Stay productive, wherever you are</TitleSeccion3>
        <ParrafoCentral>
        Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
        storage needs.
        <br/>
        Securely share files and folders with friends, family and colleagues for live collaboration. No email 
        attachments required.
        </ParrafoCentral>
        <ButtonCentral>
          See how Fylo works  
        </ButtonCentral>
      </div>
  </SeccionCentral>
  )
}

export default Seccion3;