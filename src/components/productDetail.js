import React from "react";
import { getProductDetail } from "./product";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function ProductDetailScreen(props) {
  const id = props.match.params.id;
  console.log(id);
  // const name = props.match.params.name;

  const selectedProduct = getProductDetail(id);

  if (!selectedProduct) {
    return <div>Ada kesalahan. ID tidak cocok</div>;
  }

  console.log("selected product:", selectedProduct);
  return (
    <div className="product-detail mt-5">
      <Container>
        <Row className="d-block d-xl-flex pt-5">
          <Col lg={6}>
            <div className="product-detail-card rounded">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                height={"550"}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="product-detail-content">
              <h1 className="product-name">{selectedProduct.name}</h1>
              <h2 className="product-price mt-3">{selectedProduct.price}</h2>
              <h5>Stok : 5</h5>
            </div>
            <h5 className="mt-5">Pilih Warna</h5>
            <div className="product-detail-color d-flex">
              <span className="red"></span>
              <span className="black"></span>
              <span className="green"></span>
              <span className="pink"></span>
            </div>
            <h5 className="mt-5">Jumlah : - 1 +</h5>
            <div className="product-detail-button d-flex justify-content-between">
              <Button>Tambahkan Ke Keranjang!</Button>
              <Button variant="outline-primary">Beli Sekarang!</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
