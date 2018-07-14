import React from 'react'

import { Header } from 'theme/typography'
import mcGillLogo from 'images/mcgill-logo.png'

import { HeaderContainer, Logo } from './styled'

export default function MullerLabHeader () {
  return (
    <HeaderContainer>
      <Logo src={mcGillLogo}/>
      <Header>Muller Lab</Header>
    </HeaderContainer>
  )
}