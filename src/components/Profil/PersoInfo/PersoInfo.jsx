import { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  userChangeEmail,
  userChangeName,
  userEditRequest,
} from '../../../actions/user';

function PersoInfo() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);

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
            <form
              action=""
              method="PATCH"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(userEditRequest());
              }}
            >
              <Flex className="flexbox_edit_form">
                <FormControl mb={4} isRequired>
                  <FormLabel>Nom</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      dispatch(userChangeName(e.target.value));
                    }}
                  />
                </FormControl>
              </Flex>

              <Flex className="flexbox_edit_form">
                <FormControl mb={4} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      dispatch(userChangeEmail(e.target.value));
                    }}
                  />
                </FormControl>
              </Flex>
              <Button type="submit" mt={2} w="100%" colorScheme="telegram">
                Enregistrer
              </Button>
            </form>
          </Box>
        </Flex>
      </AccordionPanel>
    </>
  );
}

export default PersoInfo;
