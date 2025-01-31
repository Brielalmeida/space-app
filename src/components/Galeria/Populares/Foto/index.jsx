import React from 'react'
import styled from 'styled-components'

const FotoStyle = styled.div`
  img {
    border-radius: 20px;
    object-fit: none;
  }
`

const Foto = ({foto}) => {
  return (
    <FotoStyle>
      <img src={foto.path}/>
    </FotoStyle>  
  )
}

export default Foto