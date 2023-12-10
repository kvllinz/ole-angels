import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { deepOrange, grey } from '@mui/material/colors';
import { useRoutes } from 'react-router-dom';
import appRoutes from './appRoutes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // // palette values for dark mode
    // primary: deepOrange,
    // divider: deepOrange[700],
    // background: {
    //   default: deepOrange[900],
    //   paper: deepOrange[900],
    // },
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
      <CssBaseline>{routes}</CssBaseline>
    </ThemeProvider>
  );
}

export default App;
