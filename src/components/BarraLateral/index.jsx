import React from 'react'
import styled from 'styled-components'
import ItemNav from './ItemNav'

const ListaStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;

`

export const BarraLateral = () => {
  return (
    <aside>
        <nav>
            <ListaStyled>
                <ItemNav iconeAtivo="/icones/home-ativo.png" iconeInativo="/icones/home-inativo.png" ativo={true}>
                    Início
                </ItemNav>
                <ItemNav iconeAtivo="/icones/mais-vistas-ativo.png" iconeInativo="/icones/mais-vistas-inativo.png">
                    Mais vistas
                </ItemNav>
                <ItemNav iconeAtivo="/icones/mais-curtidas-ativo.png" iconeInativo="/icones/mais-curtidas-inativo.png">
                    Mais curtidas
                </ItemNav>
                <ItemNav iconeAtivo="/icones/novas-ativo.png" iconeInativo="/icones/novas-inativo.png">
                    Novas
                </ItemNav>
                <ItemNav iconeAtivo="/icones/surpreenda-me-ativo.png" iconeInativo="/icones/surpreenda-me-inativo.png">
                    Surpreenda-me
                </ItemNav>
            </ListaStyled>
        </nav>
    </aside>
  )
}
