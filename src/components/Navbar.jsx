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
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Link to={"/"}>
          <Box p="4" bg="#90C34E">
            TiendaMate
          </Box>
        </Link>

        <Spacer />

        <Menu>
          <MenuButton bg="#90C34E">Categorias</MenuButton>
          <MenuList>
            <Link to={"/categoria/Mate"}>
              <MenuItem>Mates</MenuItem>
            </Link>

            <Link to={"/categoria/Bombilla"}>
              <MenuItem>Bombillas</MenuItem>
            </Link>

            <Link to={"/categoria/Termo"}>
              <MenuItem>Termos</MenuItem>
            </Link>
          </MenuList>
        </Menu>

        <Spacer />

        <Link to={"/cart"}>
          <Box p="4" bg="#90C34E">
            <CartWidget />
          </Box>
        </Link>
      </Flex>
    </div>
  );
};

export default NavBar;
