import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export default function ButtonSingIn() {
return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <Button>Iniciar Sesión</Button>
    <a href=''><p>¿Todavía no tienes una cuenta?</p></a>
    </Box>
);
}