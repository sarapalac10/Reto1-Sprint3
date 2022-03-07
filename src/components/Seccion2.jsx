import React from 'react'
import { ContainerSeccionGrid } from '../style/SeccionStyle'

const Seccion2 = () => {
  return (
    <ContainerSeccionGrid>
        <div>
          <img className='imagen-grid' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646605114/Reto1-Sprint3/icon-access-anywhere_srhgtz.svg' alt='logo-grid' />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your account means your 
            files follow you everywhere.
          </p>
        </div>
        <div>
          <img className='imagen-grid' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646605112/Reto1-Sprint3/icon-security_mo9wdw.svg' alt='logo-grid' />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a couple of the security 
            features we allow to help secure your files.
          </p>
        </div>
        <div>
          <img className='imagen-grid' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646605112/Reto1-Sprint3/icon-collaboration_oslhay.svg' alt='logo-grid' />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues for live collaboration. 
            No email attachments required.
          </p>
        </div>
        <div>
          <img className='imagen-grid' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646605114/Reto1-Sprint3/icon-any-file_eja1va.svg' alt='logo-grid' />
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
            file types to be securely stored and shared.
          </p>
        </div>
    </ContainerSeccionGrid>
  )
}

export default Seccion2