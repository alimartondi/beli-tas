import { uniqueId } from "lodash";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/reducers";

export default function ProductScreen() {
  const dispatch = useDispatch();
  return (
    <div className="product-area">
      <Container>
        <div className="product-items mt-5">
          {getProduct().map((product) => {
            return (
              <div className="c__product-card mt-5" key={product.id}>
                <div className="c__card-head">
                  <Link to={"/product/" + product.id + "/" + product.name}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                </div>
                <div className="c__card-body">
                  <h6 className="product-name">{product.name}</h6>
                  <h5 className="product-price">{product.price}</h5>
                  <Button
                    onClick={() => {
                      dispatch(addItem(product));
                    }}
                  >
                    Masukkan Keranjang
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

// function ProductItems(props) {
//   return (
//     <BrowserRouter>
//       <div className="c__product-card mt-5">
//         <div className="c__card-head">
//           <Link to={"/product/" + props.id}>
//             <img src={props.image} alt={props.name} />
//           </Link>
//         </div>
//         <div className="c__card-body">
//           <h6 className="product-name">{props.name}</h6>
//           <h5 className="product-price">{props.price}</h5>
//           <Button>Masukkan Keranjang</Button>
//         </div>
//       </div>

//       <Switch>
//         <Route exact path="/productDetail/:id" component={ProductDetail} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

function generateUuid() {
  return uniqueId("-");
}

const productContents = [
  {
    id: generateUuid(),
    image: `https://s4.bukalapak.com/img/40730056152/s-330-330/data.jpeg.webp`,
    name: "Tas Ransel",
    price: "Rp 370.000",
  },
  {
    id: generateUuid(),
    image: `https://www.ncrsport.com/img/storage/large/NTBCBPK8B-3.jpg`,
    name: "Tas Ransel New Balance",
    price: "Rp 670.000",
  },
  {
    id: generateUuid(),
    image: `https://www.ncrsport.com/img/storage/small/FM6912-1.jpg`,
    name: "Tas Ransel Adidas",
    price: "Rp 830.000",
  },
  {
    id: generateUuid(),
    image: `https://assets.adidas.com/images/w_600,f_auto,q_auto/982e6a61d86649169fbcaa870176f011_9366/Canvas_Per_Tote_Bag_Black_FN1370_01_standard.jpg`,
    name: "Tas Jinjing",
    price: "Rp 120.000",
  },
  {
    id: generateUuid(),
    image: `https://www.ncrsport.com/img/storage/small/07686503-1.jpg`,
    name: "Tas Punggung",
    price: "Rp 160.000",
  },
  {
    id: generateUuid(),
    image: `https://static.shop.adidas.co.id/media/catalog/product/cache/2/small_image/230x/9df78eab33525d08d6e5fb8d27136e95/G/D/GD8956_FC_eCom.jpg`,
    name: "Tas Punggung",
    price: "Rp 160.000",
  },
  {
    id: generateUuid(),
    image: `https://static.shop.adidas.co.id/media/catalog/product/cache/2/small_image/230x/9df78eab33525d08d6e5fb8d27136e95/G/E/GE6148_FC_eCom.jpg`,
    name: "Tas Punggung",
    price: "Rp 160.000",
  },
  {
    id: generateUuid(),
    image: `https://static.shop.adidas.co.id/media/catalog/product/cache/2/small_image/230x/9df78eab33525d08d6e5fb8d27136e95/G/G/GG1064_FC_eCom.jpg`,
    name: "Tas Punggung",
    price: "Rp 160.000",
  },
];

export function getProduct() {
  return productContents;
}

export function getProductDetail(id) {
  const result = productContents.find((content) => content.id === id);
  console.log("hasil dari getProductDetail: ", result);
  return result;
}
