import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-between;
    background-color: #04244F;
    padding: 24px 24px;
    color: #fff;
    align-items: center;
`

const Socials = styled.div`
    display: flex;
    gap: 40px;
`

const Footer = () => {
  return (
    <FooterStyle>
        <Socials>
            <img src='/imagens/sociais/facebook.svg'/>
            <img src='/imagens/sociais/twitter.svg'/>
            <img src='/imagens/sociais/instagram.svg'/>
        </Socials>
        <spam>Desenvolvido por Turtoga</spam>
    </FooterStyle>
  )
}

export default Footer