/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
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
  SimpleGrid,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Rating from '@mui/material/Rating';
import SelectComponent from '../SelectComponent/SelectComponent';
import {
  categoriesOptions,
  difficultyOptions,
  durationOptions,
} from '../../utils/selectOptions';

import './Search.scss';

function Search() {
  const isRecipesFounded = true;

  return (
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
        <Text mb={4}>
          <Center fontSize="2xl">Rechercher une recette</Center>
        </Text>
        <Flex mb={8}>
          <Input type="text" placeholder="Pancakes..." mr={2} />
          <Button type="submit" colorScheme="teal">
            Rechercher
          </Button>
        </Flex>
        <Flex>
          <FormControl mr={4} isRequired>
            <FormLabel>Catégorie</FormLabel>
            <SelectComponent
              options={categoriesOptions}
              // value={categoryValue}
              // changeValue={changeCategory}
              placeholder="catégorie"
            />
          </FormControl>
          <FormControl mr={4} isRequired>
            <FormLabel>Difficulté</FormLabel>
            <SelectComponent
              options={difficultyOptions}
              // value={difficultyValue}
              // changeValue={changeDifficulty}
              placeholder="difficulté"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Durée</FormLabel>
            <SelectComponent
              options={durationOptions}
              // value={durationValue}
              // changeValue={changeDuration}
              placeholder="durée"
            />
          </FormControl>
        </Flex>

        {isRecipesFounded ? (
          <SimpleGrid
            mt={12}
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
          </SimpleGrid>
        ) : (
          <Text p={24} fontWeight="bold">
            <Center fontSize="2xl">AUCUN RESULTAT</Center>
          </Text>
        )}
      </Box>
    </Flex>
  );
}

export default Search;
