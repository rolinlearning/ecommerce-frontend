/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

// Estilos para el card de categoría
const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 12px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

const CategoryCard = ({ name, description, image, onClick }) => (
  <Card onClick={onClick}>
    <Image src={image} alt={name} />
    <Title>{name}</Title>
    <Description>{description}</Description>
  </Card>
);

export default CategoryCard;
