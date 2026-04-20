import { Flex, Text, HStack, Button, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { LuSquarePlus, LuSun } from 'react-icons/lu'
import { IoMoon } from 'react-icons/io5'
import { useColorMode} from './ui/color-mode'

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm:"row"
      }}
      >
        <Text
          fontSize ={{base:"22", sm:"28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"to-r"}
          gradientFrom={"#00b3ff"}
          gradientTo={"#1500ff"}
          color={"transparent"}
          backgroundClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <LuSquarePlus size="20" />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar
