import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  CloseButton,
  Text,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import HomeIcon from '@mui/icons-material/Home';
import EggAltIcon from '@mui/icons-material/EggAlt';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import IcecreamIcon from '@mui/icons-material/Icecream';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState('left');

  return (
    <Flex className="main_container">
      <Box
        className="main_box"
        id="recipe_details_box"
        borderRadius="md"
        px={3}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between" mt={4}>
          <IconButton
            size="lg"
            icon={<HamburgerIcon boxSize={6} />}
            aria-label="Open Menu"
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Link to="/">
              <Box>Logo</Box>
            </Link>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            />
          </HStack>

          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              <Avatar size="sm" bg="teal.500" />
            </MenuButton>
            <MenuList>
              <Link to="/profil">
                <MenuItem>Profil</MenuItem>
              </Link>
              <MenuDivider />
              <Link to="/connexion">
                <MenuItem>Se connecter</MenuItem>
              </Link>

              <MenuItem>Se déconnecter</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <Flex justifyContent="space-between" alignItems="center">
              <DrawerHeader borderBottomWidth="1px">
                <Link to="/" onClick={onClose}>
                  Logo
                </Link>
              </DrawerHeader>
              <CloseButton onClick={onClose} size="lg" mr={4} />
            </Flex>
            <DrawerBody>
              <Link to="/">
                <Box pb={8}>
                  <Stack as="nav" spacing={4}>
                    <Box
                      onClick={onClose}
                      px={2}
                      py={1}
                      rounded="md"
                      _hover={{
                        textDecoration: 'none',
                        bg: 'gray.200',
                      }}
                    >
                      <Flex>
                        <HomeIcon style={{ color: '#b0bec5' }} />
                        <Text ml={2}>Accueil</Text>
                      </Flex>
                    </Box>
                  </Stack>
                </Box>
              </Link>
              <Link to="/entrees">
                <Box pb={4}>
                  <Stack as="nav" spacing={4}>
                    <Box
                      onClick={onClose}
                      px={2}
                      py={1}
                      rounded="md"
                      _hover={{
                        textDecoration: 'none',
                        bg: 'gray.200',
                      }}
                    >
                      <Flex>
                        <EggAltIcon style={{ color: '#b0bec5' }} />
                        <Text ml={2}>Entrées</Text>
                      </Flex>
                    </Box>
                  </Stack>
                </Box>
              </Link>
              <Link to="/plats">
                <Box pb={4}>
                  <Stack as="nav" spacing={4}>
                    <Box
                      onClick={onClose}
                      px={2}
                      py={1}
                      rounded="md"
                      _hover={{
                        textDecoration: 'none',
                        bg: 'gray.200',
                      }}
                    >
                      <Flex>
                        <DinnerDiningIcon style={{ color: '#b0bec5' }} />
                        <Text ml={2}>Plats</Text>
                      </Flex>
                    </Box>
                  </Stack>
                </Box>
              </Link>
              <Link to="/desserts">
                <Box pb={4}>
                  <Stack as="nav" spacing={4}>
                    <Box
                      onClick={onClose}
                      px={2}
                      py={1}
                      rounded="md"
                      _hover={{
                        textDecoration: 'none',
                        bg: 'gray.200',
                      }}
                    >
                      <Flex>
                        <IcecreamIcon style={{ color: '#b0bec5' }} />
                        <Text ml={2}>Desserts</Text>
                      </Flex>
                    </Box>
                  </Stack>
                </Box>
              </Link>
              <Link to="/profil">
                <Box pb={4}>
                  <Stack as="nav" spacing={4}>
                    <Box
                      onClick={onClose}
                      px={2}
                      py={1}
                      rounded="md"
                      _hover={{
                        textDecoration: 'none',
                        bg: 'gray.200',
                      }}
                    >
                      <Flex>
                        <LocalDiningIcon style={{ color: '#b0bec5' }} />
                        <Text ml={2}>Mes recettes</Text>
                      </Flex>
                    </Box>
                  </Stack>
                </Box>
              </Link>
              <Link to="/profil">
                <Box pb={4}>
                  <Stack as="nav" spacing={4}>
                    <Box
                      onClick={onClose}
                      px={2}
                      py={1}
                      rounded="md"
                      _hover={{
                        textDecoration: 'none',
                        bg: 'gray.200',
                      }}
                    >
                      <Flex>
                        <FavoriteIcon style={{ color: '#b0bec5' }} />
                        <Text ml={2}>Recettes enregistrées</Text>
                      </Flex>
                    </Box>
                  </Stack>
                </Box>
              </Link>
              <Link to="/recherche">
                <Box mt={4}>
                  <Stack as="nav" spacing={4}>
                    <Button
                      variant="solid"
                      colorScheme="telegram"
                      onClick={onClose}
                      size="sm"
                      mb={4}
                      leftIcon={<SearchIcon />}
                    >
                      Rechercher une recette
                    </Button>
                  </Stack>
                </Box>
              </Link>
              <Link to="/creer-une-recette">
                <Box pb={4}>
                  <Stack as="nav" spacing={4}>
                    <Button
                      variant="solid"
                      colorScheme="teal"
                      onClick={onClose}
                      size="sm"
                      mb={4}
                      leftIcon={<AddIcon />}
                    >
                      Créer une recette
                    </Button>
                  </Stack>
                </Box>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
}

export default Navbar;
