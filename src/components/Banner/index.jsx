import React from 'react'
import styled from 'styled-components'

const BannerStyled = styled.div`
    background-image: url(/imagens/banner.png);
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;

    h1 {
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
    }

`

const Banner = () => {
  return (
    <BannerStyled>
        <h1>A galeria mais completa de fotos do espaço</h1>
    </BannerStyled>    
  )
}

export default Banner