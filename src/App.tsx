import GlobalStyle from './styles/GlobalStyle';
import MainContainer from './components/containers/MainContainer/MainContainer';
import useInitApp from './hooks/useInitApp';

const App = () => {
  useInitApp();

  return (
    <GlobalStyle>
      <MainContainer />
    </GlobalStyle>
  );
};

export default App;
