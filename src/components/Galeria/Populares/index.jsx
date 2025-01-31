import React from 'react'
import Titulo from '../../Titulo'
import fotos from './item.json'
import Foto from './Foto'
import styled from 'styled-components'
import Button from '../../Button'

const FotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`

const Populares = () => {
  return (
    <div>
      <Titulo $alinhamento='center' >Populares</Titulo>
      <FotosContainer>
        {fotos.map(foto => <Foto foto={foto}/>)}
        <Button>Ver mais</Button>
      </FotosContainer>
    </div>
  )
}

export default Populares