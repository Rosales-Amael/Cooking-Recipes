/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {
  Box,
  Flex,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetPasswordChangeEmail,
  resetPasswordChangePassword,
  resetPasswordChangePasswordConfirmation,
  resetPasswordChangeStatus,
  resetPasswordChangeToastMessage,
  resetPasswordChangeToken,
  resetPasswordRequest,
} from '../../actions/resetPassword';

const ResetPassword = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const errors = useSelector((state) => state.resetPassword.errors);
  const password = useSelector((state) => state.resetPassword.password);
  const passwordConfirmation = useSelector(
    (state) => state.resetPassword.passwordConfirmation
  );
  const resetPasswordtoastMessage = useSelector(
    (state) => state.resetPassword.toastMessage
  );
  const resetPasswordstatus = useSelector(
    (state) => state.resetPassword.status
  );

  useEffect(() => {
    dispatch(resetPasswordChangeEmail(searchParams.get('email')));
    dispatch(resetPasswordChangeToken(params.token));
  });

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
          <h1 className="main_title">Nouveau mot de passe</h1>
        </Center>

        <Text my={4}>Entrez votre mot de passe</Text>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(resetPasswordRequest(navigate));
          }}
        >
          <FormControl mb={4} isInvalid={errors.password}>
            <FormLabel>Mot de passe</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                dispatch(resetPasswordChangePassword(e.target.value));
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
              value={passwordConfirmation}
              onChange={(e) => {
                dispatch(
                  resetPasswordChangePasswordConfirmation(e.target.value)
                );
              }}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password[0]}</FormErrorMessage>
            )}
          </FormControl>
          <Button mt={2} w="100%" type="submit" colorScheme="telegram">
            Réinitialiser
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ResetPassword;
