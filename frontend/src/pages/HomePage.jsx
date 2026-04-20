import React, { useEffect } from 'react'
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12} px={8}>
      <VStack spacing={8}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          bgGradient={"to-r"}
          gradientFrom={"#00b3ff"}
          gradientTo={"#1500ff"}
          color={"transparent"}
          backgroundClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color={"gray.500"}>
            No Products Available 😢{" "}
            <Link to={"/create"}>
              <Text as={"span"} color={"blue.500"} _hover={{textDecoration:"underline"}}>
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
}

export default HomePage
