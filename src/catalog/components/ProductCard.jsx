/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

// Estilos para el card del producto
const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 12px 0;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
`;

const ProductCard = ({ title, price, image }) => (
  <Card>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    <Price>${price}</Price>
  </Card>
);

export default ProductCard;
