import React from "react";
import CartWidget from "./CartWidget";
import {
  Flex,
  Spacer,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p="4" bg="#90C34E">
          TiendaMate
        </Box>
        <Spacer />

        <Menu>
          <MenuButton bg="#90C34E"> Categorias</MenuButton>
          <MenuList>
            <MenuItem>Mates</MenuItem>
            <MenuItem>Bombillas</MenuItem>
            <MenuItem>Termos</MenuItem>
          </MenuList>
        </Menu>

        <Spacer />

        <Box p="4" bg="#90C34E">
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
