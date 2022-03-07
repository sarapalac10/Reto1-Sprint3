import React from 'react'
import '../style/HeaderStyle.js'
import { ContainerHeader, MenuHeader, SubMenuHeader } from '../style/HeaderStyle.js';

const Header = () => {
  return (
    <ContainerHeader className='container-header'>
      <div>
        <img className='imagen-header' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646496203/Reto1-Sprint3/logo_yj2h4n.svg' alt='logo-fylo' />
      </div>
      <MenuHeader className='menu-header'>
        <SubMenuHeader>Features</SubMenuHeader>
        <SubMenuHeader>Team</SubMenuHeader>
        <SubMenuHeader>Sign In</SubMenuHeader>
      </MenuHeader>
    </ContainerHeader>
  )
}

export default Header;