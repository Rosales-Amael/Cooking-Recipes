import {
  Box,
  Flex,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import './RegisterForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeRegisterEmail,
  changeRegisterFirstname,
  changeRegisterLastname,
  changeRegisterPassword,
} from '../../actions/register';

function RegisterForm() {
  const dispatch = useDispatch();
  const toast = useToast();
  const email = useSelector((state) => state.register.email);
  const firstname = useSelector((state) => state.register.firstname);
  const lastname = useSelector((state) => state.register.lastname);
  const password = useSelector((state) => state.register.password);

  return (
    <Flex id="login_container">
      <Box id="user_form" boxShadow="xl" borderRadius="md" bg="gray.100" p={10}>
        <Center>
          <h1 className="main_title">Crée mon compte</h1>
        </Center>
        <FormControl mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              dispatch(changeRegisterEmail(e.target.value));
            }}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Prénom</FormLabel>
          <Input
            type="text"
            placeholder="John"
            value={firstname}
            onChange={(e) => {
              dispatch(changeRegisterFirstname(e.target.value));
            }}
          />
        </FormControl>
        <FormControl mb={4} isRequired>
          <FormLabel>Nom</FormLabel>
          <Input
            type="text"
            placeholder="Doe"
            value={lastname}
            onChange={(e) => {
              dispatch(changeRegisterLastname(e.target.value));
            }}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Mot de passe</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              dispatch(changeRegisterPassword(e.target.value));
            }}
          />
        </FormControl>
        <Button
          onClick={() => {
            toast({
              title: 'Compte créer avec succès',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
          }}
          mt={2}
          w="100%"
          colorScheme="telegram"
          rightIcon={<ArrowForwardIcon mt={1} />}
        >
          Crée le compte
        </Button>
      </Box>
    </Flex>
  );
}

export default RegisterForm;
