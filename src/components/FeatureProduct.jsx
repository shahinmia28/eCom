import { useProductContext } from "../context/productContext";
import styled from "styled-components";
import Product from "./Product";

const FeatureProduct = () => {
  const { featureProducts, isLoading } = useProductContext();
  if (isLoading) {
    return <div>....Loading</div>;
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {featureProducts.map((data) => {
            return <Product key={data.id} {...data} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
`;

export default FeatureProduct;
