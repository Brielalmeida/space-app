import React from 'react'
import styled from 'styled-components'

const ButtomStyle = styled.button`
    border: #C98CF1 solid 2px;
    background: transparent;
    box-sizing: border-box;
    font-family: 'GandhiSansBold';
    color: #D9D9D9;
    padding: 12px 16px;
    border-radius: 10px;
    cursor: pointer;
`

const Button = ({children}) => {
  return (
    <ButtomStyle>
        {children}
    </ButtomStyle>
  )
}

export default Button