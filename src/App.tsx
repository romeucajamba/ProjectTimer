import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './components/styles/themes/default';
import { GlobalStyle } from './components/styles/themes/global';
import { BrowserRouter } from 'react-router-dom';
import { CycleContextProvider } from './components/context/CycleContex';
import { Router } from './components/routes/Router';


export function App() {


  return (
    <ThemeProvider theme={defaultTheme} >
    <BrowserRouter >
    <CycleContextProvider>
        <Router/>
    </CycleContextProvider>
      
    </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider >
  )
}
