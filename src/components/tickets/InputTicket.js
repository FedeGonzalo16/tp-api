import Form from 'react-bootstrap/Form';

function InputTicket() {
return (
<>
    <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Carga tu ticket manualmente</Form.Label>
        <Form.Control type="file" />
    </Form.Group>
</>
);
}

export default InputTicket;