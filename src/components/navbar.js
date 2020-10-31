import React, { useState } from "react";
import { Navbar, Nav, Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/reducers";

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar bg="light" variant="light" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">BerkualiTas</Navbar.Brand>
          <Nav className="ml-auto">
            <div onClick={() => handleShow()}>
              <i className="fas fa-shopping-cart"></i>
              &nbsp;
              {cart.length}
            </div>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Price</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((product) => {
            return (
              <div
                style={{
                  paddingBottom: 10,
                  display: "flex",
                  justifyContent: "space-between",
                }}
                key={product.id}
              >
                <div>
                  <div>{product.name}</div>
                  <div>{product.price}</div>
                </div>
                <div
                  onClick={() => {
                    dispatch(removeItem(product.id));
                  }}
                >
                  <i className="fas fa-trash"></i>
                </div>
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    </div>
  );
}
