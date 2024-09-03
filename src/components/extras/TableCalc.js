import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

function TableCalc(){
    return(
        <Table striped bordered hover>
<thead>
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Total a Pagar</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Alex</td>
        <td>Yoon</td>
        <td>$500</td>
    </tr>
    <tr>
        <td>Santi</td>
        <td>Boher</td>
        <td>$36899</td>
        <td><Form.Check aria-label="option 1" /></td>
    </tr>
</tbody>
</Table>
    );
}

export default TableCalc;