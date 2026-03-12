import React from 'react'
import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 'auto',
        bgcolor: 'rgba(180, 174, 169, 0.85)',
        color: 'white',
        width: '100%',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; 2026 𝓤𝓻𝓫𝓪𝓷 𝓕𝓪𝓼𝓱𝓲𝓸𝓷 Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  )
}