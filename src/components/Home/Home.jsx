import { Link, Route, Routes } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Text,
  Image,
  IconButton,
  Center,
  Avatar,
  Container,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Rating from '@mui/material/Rating';

import './Home.scss';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import Profil from '../Profil/Profil';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

function Home() {
  return (
    <div className="home">
      <Flex className="main_container">
        <Box
          className="main_box"
          id="recipe_details_box"
          boxShadow="xl"
          borderRadius="md"
          bg="gray.100"
          py={10}
          px={3}
        >
          {/* A LA UNE */}
          <Text fontSize="2xl">
            <Center>A la une sur notre site</Center>
          </Text>
          <Divider w="90%" m="25px auto" />
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            id="grid_cards"
          >
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
          </SimpleGrid>

          {/* ENTREES */}
          <Text mt={24} fontSize="2xl">
            <Center>Entrées</Center>
          </Text>
          <Divider w="90%" m="25px auto" />
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            id="grid_cards"
          >
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
          </SimpleGrid>
          <Link to="/entrees">
            <Button
              colorScheme="telegram"
              mt={4}
              float="right"
              rightIcon={<ArrowForwardIcon mt={1} />}
            >
              Voir plus
            </Button>
          </Link>

          {/* PLATS */}
          <Text mt={24} fontSize="2xl">
            <Center>Plats</Center>
          </Text>
          <Divider w="90%" m="25px auto" />
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            id="grid_cards"
          >
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
          </SimpleGrid>
          <Link to="plats">
            <Button
              colorScheme="telegram"
              mt={4}
              float="right"
              rightIcon={<ArrowForwardIcon mt={1} />}
            >
              Voir plus
            </Button>
          </Link>

          {/* DESSERTS */}
          <Text mt={24} fontSize="2xl">
            <Center>Desserts</Center>
          </Text>
          <Divider w="90%" m="25px auto" />
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            id="grid_cards"
          >
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardHeader>
                <Heading size="md">
                  <Center>Pancakes</Center>
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex className="tags_container">
                  <Badge bg="primary" className="tags">
                    <AccessTimeIcon className="tag_icons" />
                    10 - 15min
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <MenuBookIcon className="tag_icons" />
                    Facile
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <RestaurantIcon className="tag_icons" />
                    Dessert
                  </Badge>
                  <Badge bg="primary" className="tags">
                    <PeopleAltIcon className="tag_icons" />4 Pers.
                  </Badge>
                </Flex>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                  </Carousel.Item>
                </Carousel>

                <Flex mt={2}>
                  <Avatar src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  <Box ml="3" position="relative">
                    <Text fontWeight="bold">Stupid guy</Text>
                    <Rating size="small" defaultValue={4} readOnly />
                  </Box>
                </Flex>
              </CardBody>
              <CardFooter className="card_footer">
                <IconButton
                  // eslint-disable-next-line react/jsx-boolean-value
                  isRound={true}
                  icon={<FavoriteIcon id="favorite_icon" />}
                />
                <Link to="/details-recette/1">
                  <Button>Voir</Button>
                </Link>
              </CardFooter>
            </Card>
          </SimpleGrid>
          <Link to="desserts">
            <Button
              colorScheme="telegram"
              mt={4}
              float="right"
              rightIcon={<ArrowForwardIcon mt={1} />}
            >
              Voir plus
            </Button>
          </Link>
        </Box>
      </Flex>
    </div>
  );
}

export default Home;
