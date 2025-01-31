import React from 'react'
import Titulo from '../Titulo'
import Tags from './Tags'
import styled from 'styled-components'
import Populares from './Populares'
import Imagem from './Imagem'

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`
const FotoWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 24px;
    gap: 24px;
    `


const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, aoFiltrar, setTag}) => {
  return (
    <>
        <Tags setTag={setTag}/>
        
        <GaleriaContainer>
            <SecaoFluida>
                <Titulo>Navegue pela Galeria</Titulo>
                <FotoWrap>
                    {fotos.map(foto => <Imagem aoAlternarFavorito={aoAlternarFavorito} aoZoomSolicitado={aoFotoSelecionada} foto={foto}/>)}
                </FotoWrap>
                
                
            </SecaoFluida>
            <Populares/>

        </GaleriaContainer>
    </>
  )
}

export default Galeria