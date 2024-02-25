import { useRef } from 'react';
import {
  Box,
  Flex,
  Avatar,
  IconButton,
  Accordion,
  AccordionItem,
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import PersoInfo from './PersoInfo/PersoInfo';
import './Profil.scss';
import SavedRecipes from './SavedRecipes/SavedRecipes';
import MyRecipes from './MyRecipes/MyRecipes';

function Profil() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  return (
    <Flex className="main_container">
      <Box
        className="main_box"
        boxShadow="xl"
        borderRadius="md"
        bg="gray.100"
        py={10}
        px={3}
      >
        {/* AVATAR */}
        <Flex alignItems="center" flexDirection="column">
          <div className="avatar_container">
            <Avatar size="2xl" bg="teal.500" />
            <IconButton
              // eslint-disable-next-line react/jsx-boolean-value
              isRound={true}
              colorScheme="telegram"
              size="sm"
              className="edit_icon"
              icon={<EditIcon color="white" />}
            />
          </div>

          <h1>SlimDumbledodge</h1>
        </Flex>

        {/* ACCORDION */}
        <Flex justifyContent="center" mt={12}>
          <Box
            className="box_accordion"
            boxShadow="2xl"
            borderRadius="md"
            bg="gray.100"
            py={2}
          >
            <Accordion allowToggle>
              <AccordionItem p={4}>
                <PersoInfo />
              </AccordionItem>
              <AccordionItem p={4}>
                <MyRecipes />
              </AccordionItem>
              <AccordionItem p={4}>
                <SavedRecipes />
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>

        <Button
          size="sm"
          id="delete_account_button"
          colorScheme="red"
          onClick={onOpen}
        >
          Supprimer le compte
        </Button>
        {/* ALERT DELETE ACCOUNT */}
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Supprimer mon compte
              </AlertDialogHeader>

              <AlertDialogBody>
                Vous allez supprimer votre compte. Êtes-vous sur de vouloir
                continuer ?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Annuler
                </Button>
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  Supprimer
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </Flex>
  );
}

export default Profil;
