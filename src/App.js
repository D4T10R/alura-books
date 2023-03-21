import Header from './componentes/Header/index.js'
import Pesquisa from './componentes/Pesquisa/index.js'
import UltimosLivros from './componentes/UltimosLancamentos/index.js'
import Recomendacao from './componentes/Recomendacao/index.js';

import imagemLivro from './img/livro2.png'

import styled from 'styled-components';



const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLivros />
      <Recomendacao 
        titulo='Veja e aprenda mais'
        subTitulo='Cangaceiro do JS'
        descricao='Melhor livrode JS para pessoas avançadas em JS'
        imagem={imagemLivro}
      />
    </AppContainer>
  );
}

export default App;
