import React from "react";
import { Container, Button } from "react-bootstrap";

export default function ProductScreen() {
  return (
    <div className="product-area" id="product">
      <Container>
        <div className="product-items">
          {productContents.map((content, i) => (
            <ProductItems
              key={i}
              image={content.image}
              name={content.name}
              price={content.price}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

function ProductItems(props) {
  return (
    <div className="c__product-card mt-5">
      <div className="c__card-head">
        <img src={props.image} alt="product" />
      </div>
      <div className="c__card-body">
        <h6 className="product-name">{props.name}</h6>
        <h5 className="product-price">{props.price}</h5>
        <Button>Masukkan Keranjang</Button>
      </div>
    </div>
  );
}

const productContents = [
  {
    image: `https://s4.bukalapak.com/img/40730056152/s-330-330/data.jpeg.webp`,
    name: "Tas Ransel",
    price: "Rp 370.000",
  },
  {
    image: `https://www.ncrsport.com/img/storage/large/NTBCBPK8B-3.jpg`,
    name: "Tas Ransel New Balance",
    price: "Rp 670.000",
  },
  {
    image: `https://www.ncrsport.com/img/storage/small/FM6912-1.jpg`,
    name: "Tas Ransel Adidas",
    price: "Rp 830.000",
  },
  {
    image: `https://assets.adidas.com/images/w_600,f_auto,q_auto/982e6a61d86649169fbcaa870176f011_9366/Canvas_Per_Tote_Bag_Black_FN1370_01_standard.jpg`,
    name: "Tas Jinjing",
    price: "Rp 120.000",
  },
  {
    image: `https://www.ncrsport.com/img/storage/small/07686503-1.jpg`,
    name: "Tas Punggung",
    price: "Rp 160.000",
  },
  {
    image: `https://static.shop.adidas.co.id/media/catalog/product/cache/2/small_image/230x/9df78eab33525d08d6e5fb8d27136e95/G/D/GD8956_FC_eCom.jpg`,
    name: "Tas Punggung",
    price: "Rp 160.000",
  },
  {
    image: `https://static.shop.adidas.co.id/media/catalog/product/cache/2/small_image/230x/9df78eab33525d08d6e5fb8d27136e95/G/E/GE6148_FC_eCom.jpg`,
    name: "Tas Punggung",
    price: "Rp 160.000",
  },
  {
    image: `https://static.shop.adidas.co.id/media/catalog/product/cache/2/small_image/230x/9df78eab33525d08d6e5fb8d27136e95/G/G/GG1064_FC_eCom.jpg`,
    name: "Tas Punggung",
    price: "Rp 160.000",
  },
];
