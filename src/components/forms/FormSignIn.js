import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import PasswordMeterInput from './password-sign-up';
import { Key, Padding } from '@mui/icons-material';
import ButtonSingUp from './BtnSignUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonSingIn from './BtnSignIn';
import Form from 'react-bootstrap/Form';

export default function FormSignIn() {
return (
    <div>
        <FormControl>
        <Form.Floating className="mb-3 mt-3">
            <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Correo Electrónico</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
            <Form.Control
            id="floatingInputCustom"
            type="password"
            placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Contraseña</label>
        </Form.Floating>
            <ButtonSingIn></ButtonSingIn>
        </FormControl>
    </div>
);
}