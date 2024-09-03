import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import PasswordMeterInput from './password-sign-up';
import ButtonSingUp from './BtnSignUp';
import Form from 'react-bootstrap/Form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function FormSignUp() {
return (
    <div  sx={{}}>
    <FormControl>
        <Form.Floating className="mb-3 mt-3">
            <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Nombre</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
            <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Apellido</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
            <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Correo Electrónico</label>
        </Form.Floating>
        <PasswordMeterInput></PasswordMeterInput>
        <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group">
            <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
            <FormControlLabel value="Femenino" control={<Radio />} label="Femenino" />
            <FormControlLabel value="Otro" control={<Radio />} label="Otro" />
            </RadioGroup>
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Acepto Términos y Condiciones"
                className='mb-3'/>
        <ButtonSingUp></ButtonSingUp>
    </FormControl>
    </div>
);
}