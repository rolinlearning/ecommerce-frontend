/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import CategoryCard from './../components/CategoryCard';
import ProductCard from './../components/ProductCard';

// Estilos globales de la página Home
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

const Home = () => {
  // Datos simulados para categorías y productos
  const categories = [
    { id: 1, name: 'Electrónica', description: 'Todo en tecnología', image: 'https://via.placeholder.com/300x200?text=Electrónica' },
    { id: 2, name: 'Ropa', description: 'Moda y vestimenta', image: 'https://via.placeholder.com/300x200?text=Ropa' },
    { id: 3, name: 'Hogar', description: 'Artículos para el hogar', image: 'https://via.placeholder.com/300x200?text=Hogar' },
  ];

  const allProducts = {
    1: [
      { id: 1, title: 'Laptop', price: 1200, image: 'https://via.placeholder.com/150?text=Laptop' },
      { id: 2, title: 'Auriculares', price: 150, image: 'https://via.placeholder.com/150?text=Auriculares' },
    ],
    2: [
      { id: 3, title: 'Camiseta', price: 25, image: 'https://via.placeholder.com/150?text=Camiseta' },
      { id: 4, title: 'Jeans', price: 50, image: 'https://via.placeholder.com/150?text=Jeans' },
    ],
    3: [
      { id: 5, title: 'Sofá', price: 600, image: 'https://via.placeholder.com/150?text=Sofá' },
      { id: 6, title: 'Mesa', price: 200, image: 'https://via.placeholder.com/150?text=Mesa' },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Container>
      {/* Sección de Categorías */}
      <SectionTitle>Categorías</SectionTitle>
      <Grid>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            description={category.description}
            image={category.image}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </Grid>

      {/* Si hay una categoría seleccionada, mostrar sus productos */}
      {selectedCategory && (
        <>
          <SectionTitle>Productos en {categories.find((cat) => cat.id === selectedCategory).name}</SectionTitle>
          <Grid>
            {allProducts[selectedCategory].map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </Grid>
        </>
      )}

      {/* Sección de todos los productos */}
      <SectionTitle>Todos los Productos</SectionTitle>
      {Object.keys(allProducts).map((categoryId) => (
        <div key={categoryId}>
          <h2>{categories.find((cat) => cat.id === parseInt(categoryId)).name}</h2>
          <Grid>
            {allProducts[categoryId].map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default Home;

  