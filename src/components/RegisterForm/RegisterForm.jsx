import {
  Box,
  Flex,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import './RegisterForm.scss';

function RegisterForm() {
  return (
    <Flex id="login_container">
      <Box id="user_form" boxShadow="xl" borderRadius="md" bg="gray.100" p={10}>
        <Center>
          <h1 className="main_title">Crée mon compte</h1>
        </Center>
        <FormControl mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="example@gmail.com" />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Prénom</FormLabel>
          <Input type="text" placeholder="John" />
        </FormControl>
        <FormControl mb={4} isRequired>
          <FormLabel>Nom</FormLabel>
          <Input type="text" placeholder="Doe" />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Mot de passe</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button
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
