/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Flex,
  Button,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Divider,
  AbsoluteCenter,
  useToast,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeLoginEmail,
  changeLoginPassword,
  loginRequest,
} from '../../actions/login';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const emailValue = useSelector((state) => state.login.email);
  const passwordValue = useSelector((state) => state.login.password);
  const errors = useSelector((state) => state.login.errors);

  return (
    <Flex id="login_container">
      <Box id="user_form" boxShadow="xl" borderRadius="md" bg="gray.100" p={10}>
        <Center>
          <h1 className="main_title">Connectez-vous</h1>
        </Center>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loginRequest(navigate));
          }}
        >
          <FormControl mb={4} isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={emailValue}
              onChange={(e) => {
                dispatch(changeLoginEmail(e.target.value));
              }}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email[0]}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mb={4} isInvalid={errors.password}>
            <FormLabel>Mot de passe</FormLabel>
            <Input
              type="password"
              value={passwordValue}
              onChange={(e) => {
                dispatch(changeLoginPassword(e.target.value));
              }}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password[0]}</FormErrorMessage>
            )}
          </FormControl>
          <Button
            type="submit"
            mt={2}
            w="100%"
            colorScheme="telegram"
            rightIcon={<ArrowForwardIcon mt={1} />}
          >
            Se connecter
          </Button>
        </form>

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
