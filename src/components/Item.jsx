import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ titulo, productoId }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{titulo}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <button>
            <Link to={`/producto/${productoId}`}>Ver Detalle</Link>
          </button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
