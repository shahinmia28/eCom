import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((data) => {
        return <Product key={data.id} {...data} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export default GridView;
