import StyledApp from './components/styled/App.Styled'
import GlobalStyle from './components/styled/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './themes';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './components/auth/Signup';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
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
        "Logged In"
        : <Signup/>
      }
    </StyledApp>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
