import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import routes from './components/routes';
import Nav from './components/Nav.jsx';

import Box from '@mui/material/Box';

const router = createBrowserRouter([
  {
    element: (
      <>
        <Nav />
        <Outlet />
        {/* Footer */}
      </>
    ),
    children: routes,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Box sx={{ marginTop: 10 }}>
      <RouterProvider router={router} />
    </Box>
  </StrictMode>,
)
