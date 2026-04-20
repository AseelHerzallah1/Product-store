import { VStack, Container, Heading, Box, Input, Button } from '@chakra-ui/react';
import { useColorModeValue } from './../components/ui/color-mode';
import { toaster } from './../components/ui/toaster';
import { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct);
    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
      duration: 3000,
    });
    if (success) {
      setNewProduct({name:"", price:"", image:""});
    }
  };

  return (
    <Container maxW={"640px"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"} bg={useColorModeValue("white", "gray.800")}
          p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              variant={"outline"}
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input
              placeholder='Price'
              variant={"outline"}
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input
              placeholder='Image URL'
              variant={"outline"}
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />
            <Button colorPalette={"blue"} onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage
