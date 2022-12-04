import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { id } = useParams();
  const { isSingleLoading, getSingleProduct, singleProduct } =
    useProductContext();
  const {
    category,
    colors,
    company,
    description,
    image,
    name,
    price,
    reviews,
    stars,
    stock,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  if (isSingleLoading) {
    return (
      <Load className="loading">
        <h2> ....Product is Loading</h2>
      </Load>
    );
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>General Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            <div>
              {stock > 0 ? (
                <AddToCart product={singleProduct} />
              ) : (
                "Not Available"
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Load = styled.div`
  text-align: center;
  padding: 50px;
  width: 100vw;
  h2 {
    text-align: center;
  }
`;

const Wrapper = styled.section`
  .container {
    padding: 5rem 0;
    .grid {
      .product_images {
        display: flex;
        align-items: center;
      }
    }
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #cccccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: #dcdcdc80;
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      border: 0.1rem solid #000000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
    .grid {
      height: 100%;
    }
  }
`;

export default SingleProduct;
