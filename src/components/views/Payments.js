import Table from 'react-bootstrap/Table';
import Notify from '../extras/notify';
import DropdownTickets from '../extras/DropTickets';
import Form from 'react-bootstrap/Form';
import BtnCalc from '../extras/BtnCalc';
import TableCalc from '../extras/TableCalc';
import NavbarApp from '../partials/NavbarApp';

function Payments() {
return (
    <div>
        <h2>
            Elegir Ticket
        </h2>
        <p>Elige el Ticket para dividir tus gastos</p>
        <DropdownTickets></DropdownTickets>
        <h2>
            Asignar Usuarios
        </h2>
        <p>Asigna los integrantes con los que quieras dividir el ticket seleccionado</p>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>integrantes</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo Electrónico</th>
                <th>Porcentaje</th>
                <th>Seleccionar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Alex</td>
                <td>Yoon</td>
                <td>alex@gmail.com</td>
                <td>10%</td>
                <td> <Form.Check aria-label="option 1" /></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Santi</td>
                <td>Boher</td>
                <td>santi@gmail.com</td>
                <td>30%</td>
                <td><Form.Check aria-label="option 1" /></td>
            </tr>
        </tbody>
        </Table>
        <h3>
            Calcular Total
        </h3>
        <p>Calcula el Total a pagar por cada usuario seleccionado</p>
        <BtnCalc></BtnCalc>
        <TableCalc></TableCalc>
        <h4>
            Enviar Notificación 
        </h4>
        <p>Envía un correo a cada integrante para notificarle su parte a pagar del ticket</p>
        <Notify></Notify>
    </div>
);
}

export default Payments;