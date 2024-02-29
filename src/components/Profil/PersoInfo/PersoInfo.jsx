import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import './PersoInfo.scss';

function PersoInfo() {
  const user = JSON.parse(localStorage.getItem('USER_DATA'));
  return (
    <>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Informations personnelles
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Flex justifyContent="center" mt={12}>
          <Box borderRadius="md" bg="gray.100" w="100%" px={6}>
            <Flex className="flexbox_edit_form">
              <FormControl mb={4} mr={4} isRequired>
                <FormLabel>Prénom</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Nom</FormLabel>
                <Input type="text" />
              </FormControl>
            </Flex>

            <Flex className="flexbox_edit_form">
              <FormControl mb={4} mr={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Mot de passe</FormLabel>
                <Input type="password" />
              </FormControl>
            </Flex>
            <Button mt={2} w="100%" colorScheme="telegram">
              Enregistrer
            </Button>
          </Box>
        </Flex>
      </AccordionPanel>
    </>
  );
}

export default PersoInfo;
