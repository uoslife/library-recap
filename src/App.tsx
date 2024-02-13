import GlobalStyle from './styles/GlobalStyle';
import MainContainer from './components/containers/MainContainer/MainContainer';
import useInitApp from './hooks/useInitApp';
import ErrorBoundary from './components/Errorboundary';

const App = () => {
  useInitApp();

  return (
    <GlobalStyle>
      <ErrorBoundary>
        <MainContainer />
      </ErrorBoundary>
    </GlobalStyle>
  );
};

export default App;
