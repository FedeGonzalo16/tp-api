import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { FormatAlignJustify } from '@mui/icons-material';

function Cards() {
return (
    <Container className='mt-2'>
        <Row>
        <Card style={{ width: '18rem'}}>
            <Card.Body>
        <Card.Text>
        Gestiona proyectos para calcular tus gastos, tanto individuales como en grupo.
        </Card.Text>
        <Card.Link href="#">Ver más</Card.Link>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
            <Card.Body>
        <Card.Text>
        Sube tus tickets de compra, para obtener el calculo gastado de los mismos. 
        </Card.Text>
        <Card.Link href="#">Ver más</Card.Link>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
            <Card.Body>
        <Card.Text>
        Visualiza un historial de tus tickets con sus respectivos gastos y genera reportes detallados.
        </Card.Text>
        <Card.Link href="#">Ver más</Card.Link>
    </Card.Body>
    </Card>
        </Row>
    </Container>
);
}

export default Cards;