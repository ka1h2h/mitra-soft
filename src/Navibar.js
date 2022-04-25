import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Dropdown } from 'react-bootstrap';
import avatar from './avatar.jpg'

const Navibar = () => {
    return (
        <Navbar className="" bg="dark" variant="dark" >
            <Container className="align-items-start">
                <Navbar.Brand href="/">Mitra Soft</Navbar.Brand>
                <Dropdown >
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Меню
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='p-3'>
                        <div className='d-flex align-items-center'>
                            <div className='mx-1' >Илья Пономарев</div>
                            <img src={avatar} className="img-thumbnail rounded-circle avatar" style={{ height: "45px", width: "45px" }} />
                        </div>
                        <Dropdown.Item href="/">Галерея</Dropdown.Item>
                        <Dropdown.Item className='mb-2' href="about">Обо мне</Dropdown.Item>
                        <div className='mx-1'>ilya_ponomarev@mail.ru</div>
                    </Dropdown.Menu>
                </Dropdown>
            </Container >
        </Navbar >
    )
}

export default Navibar