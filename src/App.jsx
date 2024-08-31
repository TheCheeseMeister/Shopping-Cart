import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Link } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <>
      {/*
      Nav Bar
      Content/Container
      Footer 
      */}
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 25,
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <img src="./src/bossbaby.jpg" alt="The boss of the company" />
            <Typography variant='subtitle1'>Our very cool boss</Typography>
          </Box>

          <Box>
            <Typography variant='h4'>Hey. We know you want stuff. We have the stuff.</Typography>
            <Link to="shop">Check the store here</Link>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default App
