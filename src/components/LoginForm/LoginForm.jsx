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
  useToast,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import './LoginForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginEmail, changeLoginPassword } from '../../actions/login';

function LoginForm() {
  const dispatch = useDispatch();
  const toast = useToast();
  const emailValue = useSelector((state) => state.login.email);
  const passwordValue = useSelector((state) => state.login.password);

  return (
    <Flex id="login_container">
      <Box id="user_form" boxShadow="xl" borderRadius="md" bg="gray.100" p={10}>
        <Center>
          <h1 className="main_title">Connectez-vous</h1>
        </Center>
        <FormControl mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="example@gmail.com"
            value={emailValue}
            onChange={(e) => {
              dispatch(changeLoginEmail(e.target.value));
            }}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Mot de passe</FormLabel>
          <Input
            type="password"
            value={passwordValue}
            onChange={(e) => {
              dispatch(changeLoginPassword(e.target.value));
            }}
          />
        </FormControl>
        <Button
          onClick={() => {
            toast.closeAll();
            toast({
              title: 'Email ou Mot de passe incorrect !',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
          }}
          mt={2}
          w="100%"
          colorScheme="telegram"
          rightIcon={<ArrowForwardIcon mt={1} />}
        >
          Se connecter
        </Button>

        <Box position="relative" py="10">
          <Divider id="divider" />
          <AbsoluteCenter bg="gray.100" px="2">
            OU
          </AbsoluteCenter>
        </Box>

        <Link to="/cree-mon-compte">
          <Button w="100%" colorScheme="telegram" variant="outline">
            Crée un compte
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default LoginForm;
