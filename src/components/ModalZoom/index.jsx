import React, { useRef, useState } from "react";
import Imagem from "../Galeria/Imagem";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const Dialog = styled.dialog`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  border: none;
  width: 100vh;
  background-color: transparent;
`;

const ModalZoom = ({ foto, onClose, aoAlternarFavorito}) => {

    const dialogRef = useRef(null)

    const onCloseModal = () => { 
        if(dialogRef.current) {
            dialogRef.current.close()
            onClose()
        }
    };

    return (
        <>
            {foto && (
                <>
                    <Overlay onClick={onCloseModal}/>
                    <Dialog ref={dialogRef} open={!!foto}>
                        <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}  onCloseModal={onCloseModal}/>
                    </Dialog>
                </>
            )}
        </>
    );
};

export default ModalZoom;
