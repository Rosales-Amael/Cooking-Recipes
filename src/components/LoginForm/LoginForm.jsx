/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
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
import {
  registerChangeStatus,
  registerChangeToastMessage,
} from '../../actions/register';
import {
  userChangeDeleteStatus,
  userChangeDeleteToastMessage,
} from '../../actions/user';
import {
  resetPasswordChangeStatus,
  resetPasswordChangeToastMessage,
} from '../../actions/resetPassword';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const registerToastMessage = useSelector(
    (state) => state.register.toastMessage
  );
  const registerStatus = useSelector((state) => state.register.status);

  const deleteToastMessage = useSelector(
    (state) => state.user.deleteToastMessage
  );
  const deleteStatus = useSelector((state) => state.user.deleteStatus);

  const resetPasswordtoastMessage = useSelector(
    (state) => state.resetPassword.toastMessage
  );
  const resetPasswordstatus = useSelector(
    (state) => state.resetPassword.status
  );

  const emailValue = useSelector((state) => state.login.email);
  const passwordValue = useSelector((state) => state.login.password);
  const errors = useSelector((state) => state.login.errors);

  useEffect(() => {
    if (registerToastMessage && registerStatus) {
      const toastType = registerStatus > 204 ? 'error' : 'success';
      const title = registerStatus > 204 ? 'Erreur' : 'Confirmation';
      toast({
        title,
        description: registerToastMessage,
        status: toastType,
        duration: 5000,
        isClosable: true,
      });
      dispatch(registerChangeToastMessage(''));
      dispatch(registerChangeStatus(0));
    }
  }, [registerToastMessage, registerStatus]);

  useEffect(() => {
    if (deleteToastMessage && deleteStatus) {
      const toastType = deleteStatus > 204 ? 'error' : 'success';
      const title = deleteStatus > 204 ? 'Erreur' : 'Confirmation';
      toast({
        title,
        description: deleteToastMessage,
        status: toastType,
        duration: 5000,
        isClosable: true,
      });
      dispatch(userChangeDeleteToastMessage(''));
      dispatch(userChangeDeleteStatus(0));
    }
  }, [deleteToastMessage, deleteStatus]);

  useEffect(() => {
    if (resetPasswordtoastMessage && resetPasswordstatus) {
      const toastType = resetPasswordstatus > 204 ? 'error' : 'success';
      const title = resetPasswordstatus > 204 ? 'Erreur' : 'Confirmation';
      toast({
        title,
        description: resetPasswordtoastMessage,
        status: toastType,
        duration: 5000,
        isClosable: true,
      });
      dispatch(resetPasswordChangeToastMessage(''));
      dispatch(resetPasswordChangeStatus(0));
    }
  }, [resetPasswordtoastMessage, resetPasswordstatus]);

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

          <FormControl isInvalid={errors.password}>
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
          <Link to="/mot-de-passe-oublie">
            <small id="forget_password_text">Mot de passe oublié ?</small>
          </Link>
          <Button
            type="submit"
            mt={6}
            w="100%"
            colorScheme="telegram"
            rightIcon={<ArrowForwardIcon mt={1} />}
          >
            Se connecter
          </Button>
        </form>

        <Box position="relative" py="6">
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
