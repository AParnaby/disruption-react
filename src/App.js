import React from 'react';
import { Container, Grid } from '@material-ui/core';
import ContactForm from './ContactForm';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Grid container justify="center">
        <Grid item>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>   
    </ThemeProvider>
  );
}

export default App;

