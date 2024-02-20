import {
  Box,
  Flex,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Divider,
  AbsoluteCenter,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

function LoginForm() {
  return (
    <Flex id="login_container">
      <Box boxShadow="xl" borderRadius="md" bg="gray.100" w="30%" p={10}>
        <Center>
          <h1 className="main_title">Connectez-vous</h1>
        </Center>
        <FormControl mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="example@gmail.com" />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Mot de passe</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button mt={2} w="100%" colorScheme="telegram">
          Se connecter
        </Button>
        <Link to="/connexion" id="forgot_password_text">
          Mot de passe oublié ?
        </Link>
        <Box position="relative" py="10">
          <Divider id="divider" />
          <AbsoluteCenter bg="gray.100" px="2">
            OU
          </AbsoluteCenter>
        </Box>

        <Button w="100%" colorScheme="telegram" variant="outline">
          Crée un compte
        </Button>
      </Box>
    </Flex>
  );
}

export default LoginForm;
