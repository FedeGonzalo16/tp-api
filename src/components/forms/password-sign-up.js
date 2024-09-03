
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import Key from '@mui/icons-material/Key';
import Form from 'react-bootstrap/Form';

function PasswordMeterInput() {
const [value, setValue] = React.useState('');
const minLength = 12;
return (
    <Stack spacing={0.5} sx={{ '--hue': Math.min(value.length * 10, 120) }}>
        <Form.Floating>
            <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Contraseña"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                aria-describedby="passwordHelpBlock"
        />
        <label htmlFor="floatingPasswordCustom">Contraseña</label>
        </Form.Floating>
        <Form.Text id="passwordHelpBlock" muted className='mb-2 mt-2'>
            Tu contraseña debe tener de 8 a 20 caracteres, conteniendo letras y números
            y no puede contener espacios, caracteres especiales ni emojis.
        </Form.Text>
        <LinearProgress
            determinatesize="sm"
            value={Math.min((value.length * 100) / minLength, 100)}
            sx={{ bgcolor: 'background.level3', color: 'hsl(var(--hue) 80% 40%)' }}
        />
        <Typography
            level="body-xs"
            sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
        >
            {value.length < 3 && 'Muy débil'}
            {value.length >= 3 && value.length < 6 && 'Débil'}
            {value.length >= 6 && value.length < 10 && 'Fuerte'}
            {value.length >= 10 && 'Muy fuerte'}
        </Typography>
    </Stack>
);
}

export default PasswordMeterInput;
