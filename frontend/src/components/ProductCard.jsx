import { useState } from 'react'
import { Box, Image, Heading, Text, HStack, IconButton, Input, VStack, Button,
    DialogRoot, DialogContent, DialogHeader, DialogBody, DialogCloseTrigger, 
    DialogBackdrop, DialogFooter, DialogPositioner } from '@chakra-ui/react'
import { LuPencil, LuTrash2 } from 'react-icons/lu'
import { useProductStore } from '../store/product'
import { toaster } from './ui/toaster'
import { useColorModeValue } from './ui/color-mode'

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    const { deleteProduct, updateProduct } = useProductStore();
    const [isOpen, setIsOpen] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState({
        name: product.name,
        price: product.price,
        image: product.image,
    });

    const handleDelete = async (id) => {
        const { success, message } = await deleteProduct(id);
        toaster.create({
            title: success ? "Product deleted" : "Error",
            description: success ? undefined : message,
            type: success ? "success" : "error",
            duration: 3000,
        });
    };

    const handleUpdate = async () => {
        const { success, message } = await updateProduct(product._id, updatedProduct);
        toaster.create({
            title: success ? "Product updated" : "Error",
            description: success ? undefined : message,
            type: success ? "success" : "error",
            duration: 3000,
        });
        if (success) setIsOpen(false);
    };

    return (
        <>
        <Box shadow="lg" rounded="lg" overflow="hidden" transition="all 0.3s" _hover={{ transform: "translateY(-5px)", shadow: "xl" }} bg={bg}>
            <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" />
            <Box p={4}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>${product.price}</Text>
                <HStack spacing={2}>
                    <IconButton aria-label="Edit" colorPalette="blue" variant="ghost" onClick={() => setIsOpen(true)}>
                        <LuPencil />
                    </IconButton>
                    <IconButton aria-label="Delete" colorPalette="red" variant="ghost" onClick={() => handleDelete(product._id)}>
                        <LuTrash2 />
                    </IconButton>
                </HStack>
            </Box>
        </Box>

        <DialogRoot open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
            <DialogBackdrop />
            <DialogPositioner>
                <DialogContent>
                    <DialogHeader>Update Product</DialogHeader>
                    <DialogCloseTrigger />
                    <DialogBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder="Product Name"
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            />
                            <Input
                                placeholder="Price"
                                type="number"
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            />
                            <Input
                                placeholder="Image URL"
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                            />
                        </VStack>
                    </DialogBody>
                    <DialogFooter>
                        <Button colorPalette="blue" onClick={handleUpdate}>Update</Button>
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                    </DialogFooter>
                </DialogContent>
            </DialogPositioner>
        </DialogRoot>
        </>
    );
};

export default ProductCard;
