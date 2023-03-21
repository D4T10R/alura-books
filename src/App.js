import Header from './componentes/Header/index.js'
import Pesquisa from './componentes/Pesquisa/index.js'
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
    </AppContainer>
  );
}

export default App;
