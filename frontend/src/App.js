import StyledApp from './components/styled/App.Styled'
import GlobalStyle from './components/styled/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './themes';
import {BrowserRouter} from 'react-router-dom'
import Signup from './components/auth/Signup';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Home from './components/home/Home';
function App() {
  const {user} = useContext(UserContext)
  return (
    <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
    <GlobalStyle/>
    <StyledApp>
      {
        user.loggedIn === null ? "" : 
        user.loggedIn === true ?
        <Home/>
        : <Signup/>
      }
    </StyledApp>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
