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
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      position="absolute"
      left="0"
      right="0"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="lg"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>Logo</Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }} />
        </HStack>
        <Flex alignItems="center">
          <Link to="/creer-une-recette">
            <Button
              variant="solid"
              colorScheme="green"
              size="sm"
              mr={4}
              leftIcon={<AddIcon />}
            >
              Créer une recette
            </Button>
          </Link>
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
      </Flex>

      {isOpen ? (
        <>
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <Box
                as="a"
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.200',
                }}
                href="#"
              >
                Mes recettes
              </Box>
            </Stack>
          </Box>
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <Box
                as="a"
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.200',
                }}
                href="#"
              >
                Recettes enregistrées
              </Box>
            </Stack>
          </Box>
          <Stack as="nav" spacing={4}>
            <Button
              variant="solid"
              colorScheme="blackAlpha"
              size="sm"
              mb={4}
              leftIcon={<SearchIcon />}
            >
              Rechercher une recette
            </Button>
          </Stack>
        </>
      ) : null}
    </Box>
  );
}

export default Navbar;
