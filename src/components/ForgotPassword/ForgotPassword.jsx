/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
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
  Text,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  forgotPasswordChangeEmail,
  forgotPasswordChangeStatus,
  forgotPasswordChangeToast,
  forgotPasswordSendEmail,
} from '../../actions/forgotPassword';
import Loader from '../Loader/Loader';

const ForgotPassword = () => {
  const email = useSelector((state) => state.forgotPassword.email);
  const dispatch = useDispatch();
  const toast = useToast();
  const toastMesssage = useSelector(
    (state) => state.forgotPassword.toastMessage
  );
  const status = useSelector((state) => state.forgotPassword.status);
  useEffect(() => {
    if (toastMesssage && status) {
      const toastType = status > 204 ? 'error' : 'success';
      const title = status > 204 ? 'Erreur' : 'Confirmation';
      toast({
        title,
        description: toastMesssage,
        status: toastType,
        duration: 5000,
        isClosable: true,
      });
      dispatch(forgotPasswordChangeToast(''));
      dispatch(forgotPasswordChangeStatus(0));
    }
  }, [toastMesssage, status]);

  return (
    <Flex id="login_container">
      <Box id="user_form" boxShadow="xl" borderRadius="md" bg="gray.100" p={10}>
        <Center>
          <h1 className="main_title">Mot de passe oublié</h1>
        </Center>

        <Text my={4}>
          Renseigné l'email ou vous voulez recevoir un lien vers la
          réinitialisation de votre mot de passe.
        </Text>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(forgotPasswordSendEmail());
          }}
        >
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => {
                dispatch(forgotPasswordChangeEmail(e.target.value));
              }}
            />
          </FormControl>
          <Button mt={2} w="100%" type="submit" colorScheme="telegram">
            Envoyé l'email
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ForgotPassword;
