    import React from 'react'
    import styled from 'styled-components'
    import favorito from '/icones/favorito.png'
    import favoritoAtivo from '/icones/favorito-ativo.png'
    import expandir from '/icones/expandir.png'
    import fechar from '/icones/fechar.png'

    const ImagemContainer = styled.figure`
        width: ${(props) => (props.$expandida ? '100%' : '448px')};
        max-width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        & > img {
            max-width: 100%;
            border-radius: 20px 20px 0 0;
        }
        figcaption {
            background-color: #001634;
            border-radius: 0px 0px 20px 20px;
            color: white;
            box-sizing: border-box;
            padding: 16px 20px;
            h3 {
                font-family: 'GandhiSansBold';
            }
            h3,
            h4 {
                margin: 0;
                font-size: 16px;
            }
        }

        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
            }
            p {
                margin: 0;
            }
        }

    `

    const CloseButton = styled.button`
        position: absolute;
        top: 24px;
        right: 24px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    `

    const Imagem = ({foto, aoZoomSolicitado, expandida, onCloseModal, aoAlternarFavorito}) => {
    
    const iconeFav = foto.favorita? favoritoAtivo : favorito
    
    return (
        <ImagemContainer $expandida={expandida}>
            {expandida &&
                <CloseButton  onClick={() => onCloseModal()}>
                    <img src={fechar}/>
                </CloseButton>
            }
            <img src={foto.path} alt={foto.titulo}></img>
            <figcaption>
                <h3>
                    {foto.titulo}
                </h3>
                <footer>
                    <p>
                        {foto.fonte}
                    </p>
                    <div>
                    <button onClick={() => aoAlternarFavorito(foto)}> 
                        <img src={iconeFav}/>
                    </button>
                    {!expandida && 
                        <button onClick={() => aoZoomSolicitado(foto)}>
                            <img src={expandir}/>
                        </button>
                    }
                    </div>
                    
                </footer>
            </figcaption>
        </ImagemContainer>
    )
    }

    export default Imagem