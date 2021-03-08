import React from 'react'

import { Container } from './styles'

const Menu: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>Todos os tipos</li>
        <li> Jornalismo </li>
        <li> Novelas </li>
        <li> Programas </li>
      </ul>
    </Container>
  )
}

export default Menu
