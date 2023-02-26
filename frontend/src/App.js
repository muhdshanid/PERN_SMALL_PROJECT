import StyledApp from './components/styled/App.Styled'
import GlobalStyle from './components/styled/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './themes';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './components/auth/Signup';
function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
    <GlobalStyle/>
    <StyledApp>
      <Signup/>
    </StyledApp>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
