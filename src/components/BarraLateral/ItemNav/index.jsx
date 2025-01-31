import React from 'react'
import styled from 'styled-components'

const ItemNavStyled = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props=> props.$ativo?'#7b78e5' : '#d9d9d9' };
    font-family: ${ props=> props.$ativo?'GandhiSansBold' : 'GandhiSansRegular' } ;
    display: flex;
    gap: 22px;
`

const ItemNav = ({children, iconeAtivo, iconeInativo, ativo = false }) => {
  return (
    <ItemNavStyled $ativo={ativo}>
        <img src={ativo? iconeAtivo : iconeInativo} alt=""/>
        {children}
    </ItemNavStyled>
  )
}

export default ItemNav