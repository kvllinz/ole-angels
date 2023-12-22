import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { deepOrange } from '@mui/material/colors';
import { useRoutes } from 'react-router-dom';
import appRoutes from './appRoutes';
import ResponsiveAppBar from './Components/AppBar/AppBar';
import FloatingButton from './Components/FloatingButton/FloatingButton';
import Donate from './Components/Donate/Donate';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // // palette values for dark mode
    primary: deepOrange,
    // divider: deepOrange[700],
    background: {
      default: '#015955',
      paper: '#015955',
    },
    // text: {
    //   primary: '#fff',
    //   secondary: grey[500],
    // },
  },
});
function App() {
  const routes = useRoutes(appRoutes);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <ResponsiveAppBar />
        <FloatingButton />
        <Donate />
        {routes}
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
