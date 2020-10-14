import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function ProductDetailScreen() {
  return (
    <div className="product-detail mt-5">
      <Container>
        <Row className="d-block d-xl-flex pt-5">
          <Col lg={6}>
            <div className="product-detail-card rounded">
              <img
                src="https://static.shop.adidas.co.id/media/catalog/product/cache/2/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/G/D/GD4768_FC_eCom.jpg"
                alt=""
                height="550"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="product-detail-content">
              <h1 className="product-name">Tas Ransel Adidas Original</h1>
              <h2 className="product-price mt-3">Rp 350.000</h2>
              <h5>Stok : 5</h5>
            </div>
            <h5>Pilih Warna</h5>
            <div className="product-detail-color d-flex">
              <span className="red"></span>
              <span className="black"></span>
              <span className="green"></span>
              <span className="pink"></span>
            </div>
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
