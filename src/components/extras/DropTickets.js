import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownTickets() {
return (
    <Dropdown as={ButtonGroup}>
        <Button variant="success">Seleccionar Ticket</Button>
        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
        <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Ticket #3457889 - $4500</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Ticket #FindePasado - $ 3789</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ticket #5990 - & 5500</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);
}

export default DropdownTickets;