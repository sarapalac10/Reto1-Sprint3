import React from 'react'
import { ContainerSeccion4, GridOpiniones, OpinionCard } from '../style/SeccionStyle';

const Seccion4 = () => {
  return (
    <ContainerSeccion4>
      <GridOpiniones>
        <OpinionCard>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.
          <div className='inf-testimonio'>
            <img className='imagen-test' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646496187/Reto1-Sprint3/profile-1_q9sb5h.jpg' alt="opinion-1" />
            Satish Patel
            Founder & CEO, Huddle
          </div>
        </OpinionCard>

        <OpinionCard>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.
          <div className='inf-testimonio'>
            <img className='imagen-test' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646496187/Reto1-Sprint3/profile-2_jbtn4o.jpg' alt="opinion-1" />
            Bruce McKenzie
            Founder & CEO, Huddle
          </div>
        </OpinionCard>

        <OpinionCard>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.
          <div className='inf-testimonio'>
            <img className='imagen-test' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646496187/Reto1-Sprint3/profile-3_yuojec.jpg' alt="opinion-1" />
            Iva Boyd
            Founder & CEO, Huddle
          </div>
        </OpinionCard>
      </GridOpiniones>
    </ContainerSeccion4>
  )
}

export default Seccion4;
