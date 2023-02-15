import React from 'react';
import ContactForm from './ContactForm';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <ContactForm />
    </div>
    </ThemeProvider>
  );
}

export default App;

