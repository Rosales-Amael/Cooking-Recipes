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
  useToast,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import './RegisterForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeRegisterFirstname,
  changeRegisterEmail,
  changeRegisterPassword,
  changeRegisterConfirmPassword,
  registerRequest,
} from '../../actions/register';

function RegisterForm() {
  const dispatch = useDispatch();
  const toast = useToast();
  const firstname = useSelector((state) => state.register.firstname);
  const email = useSelector((state) => state.register.email);
  const password = useSelector((state) => state.register.password);
  const confirmPassword = useSelector(
    (state) => state.register.confirmPassword
  );

  const errors = useSelector((state) => state.register.errors);

  return (
    <Flex id="login_container">
      <Box id="user_form" boxShadow="xl" borderRadius="md" bg="gray.100" p={10}>
        <Center>
          <h1 className="main_title">Crée mon compte</h1>
        </Center>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(registerRequest());
          }}
        >
          <FormControl mb={4} isInvalid={errors.name}>
            <FormLabel>Prénom</FormLabel>
            <Input
              type="text"
              placeholder="John"
              value={firstname}
              onChange={(e) => {
                dispatch(changeRegisterFirstname(e.target.value));
              }}
            />
            {errors.name && (
              <FormErrorMessage>{errors.name[0]}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mb={4} isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => {
                dispatch(changeRegisterEmail(e.target.value));
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
              value={password}
              onChange={(e) => {
                dispatch(changeRegisterPassword(e.target.value));
              }}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password[0]}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mb={4} isInvalid={errors.password}>
            <FormLabel>Confirmer le mot de passe</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                dispatch(changeRegisterConfirmPassword(e.target.value));
              }}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password[0]}</FormErrorMessage>
            )}
          </FormControl>
          <Button
            mt={2}
            w="100%"
            type="submit"
            colorScheme="telegram"
            rightIcon={<ArrowForwardIcon mt={1} />}
          >
            Crée le compte
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default RegisterForm;
