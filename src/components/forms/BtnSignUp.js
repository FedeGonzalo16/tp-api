import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export default function ButtonSingUp() {
return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <Button>Registrarse</Button>
    <a href='' color='red'><p>¿Ya tienes una cuenta?</p></a>
    </Box>
);
}