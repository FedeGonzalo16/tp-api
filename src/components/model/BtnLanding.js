import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export default function BtnLanding() {
return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <Button>Comenzar</Button>
    <a href=''><p>¿Ya tienes una cuenta?</p></a>
    </Box>
);
}