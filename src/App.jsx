import { styled } from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import { BarraLateral } from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import fotos from './fotos.json'
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  margin-bottom: 72px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const onCloseFoto = () => {
    setFotoSelecionada(null)
  }

  useEffect(()=>{
    const fotosFiltradas = fotos.filter(foto=>{
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosGaleria(fotosFiltradas)
  }, [filtro, tag])

  const aoAlternarFavorito = (foto) => {

    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
    
    if(foto.id === fotoSelecionada.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    
  }

  const aoFiltrar = (idTag) => {
    setFotosFiltradas(fotosGaleria.filter(foto => foto.tagId === idTag))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho setFiltro={setFiltro} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria setTag={setTag} aoFotoSelecionada={foto => setFotoSelecionada(foto)} fotos={fotosGaleria} aoAlternarFavorito={aoAlternarFavorito}/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Footer/>
      <ModalZoom foto={fotoSelecionada} onClose={onCloseFoto} aoAlternarFavorito={aoAlternarFavorito}/>
    </FundoGradiente>
  );
}

export default App;
