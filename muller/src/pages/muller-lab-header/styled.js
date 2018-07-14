import styled from 'styled-components'

import { lightGrey } from 'theme/colours'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center
  align-items: center
  width: 100%;
  height: 160px;
  background-color: ${lightGrey};
  text-transform: uppercase;
`

export const Logo = styled.img`
  width: 300px;
`