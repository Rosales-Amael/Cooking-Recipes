/* eslint-disable import/no-duplicates */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import {
  Box,
  Flex,
  Avatar,
  IconButton,
  Accordion,
  AccordionItem,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
} from '@chakra-ui/react';
import { Fab } from '@mui/material';
import { Button as ChakraButton } from '@chakra-ui/react';
import EditIcon from '@mui/icons-material/Edit';
import PersoInfo from './PersoInfo/PersoInfo';
import './Profil.scss';
import SavedRecipes from './SavedRecipes/SavedRecipes';
import MyRecipes from './MyRecipes/MyRecipes';
import {
  avatarChangeStatus,
  avatarChangeToast,
  avatarRequest,
} from '../../actions/avatar';
import serverPath from '../../utils/serverPath';
import {
  userChangeEditStatus,
  userChangeEditToastMessage,
  userDeleteRequest,
} from '../../actions/user';

function Profil() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const userState = useSelector((state) => state.user.user);
  const avatarToastMessage = useSelector((state) => state.avatar.toastMesssage);
  const editToastMessage = useSelector((state) => state.user.editToastMessage);
  const avatarStatus = useSelector((state) => state.avatar.status);
  const editStatus = useSelector((state) => state.user.editStatus);

  const user = JSON.parse(localStorage.getItem('USER_DATA'));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  useEffect(() => {}, [userState]);

  useEffect(() => {
    if (avatarToastMessage && avatarStatus) {
      const toastType = avatarStatus > 204 ? 'error' : 'success';
      const title = avatarStatus > 204 ? 'Erreur' : 'Confirmation';
      toast({
        title,
        description: avatarToastMessage,
        status: toastType,
        duration: 5000,
        isClosable: true,
      });
      dispatch(avatarChangeToast(''));
      dispatch(avatarChangeStatus(0));
    }
  }, [avatarToastMessage, avatarStatus]);

  useEffect(() => {
    if (editToastMessage && editStatus) {
      const toastType = editStatus > 204 ? 'error' : 'success';
      const title = editStatus > 204 ? 'Erreur' : 'Confirmation';
      toast({
        title,
        description: editToastMessage,
        status: toastType,
        duration: 5000,
        isClosable: true,
      });
      dispatch(userChangeEditToastMessage(''));
      dispatch(userChangeEditStatus(0));
    }
  }, [editToastMessage, editStatus]);

  return (
    <Flex className="main_container">
      <Box
        className="main_box"
        id="recipe_details_box"
        boxShadow="xl"
        borderRadius="md"
        bg="gray.100"
        py={10}
        px={3}
      >
        {/* AVATAR */}
        <Flex alignItems="center" flexDirection="column">
          <div className="avatar_container">
            <Avatar size="2xl" bg="teal.500" src={serverPath + user.avatar} />
            <form
              id="form_upload_image"
              action=""
              encType="multipart/form-data"
            >
              <label>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  onChange={(e) => {
                    const formData = new FormData();
                    formData.append('avatar', e.target.files[0]);
                    dispatch(avatarRequest(formData));
                  }}
                />
                <Fab
                  color="primary"
                  size="small"
                  component="span"
                  aria-label="add"
                  id="upload_button"
                >
                  <EditIcon id="upload_button_icon" />
                </Fab>
              </label>
            </form>
          </div>

          <h1>{user.name}</h1>
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

        <ChakraButton
          size="sm"
          id="delete_account_button"
          colorScheme="red"
          onClick={onOpen}
        >
          Supprimer le compte
        </ChakraButton>
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
                <ChakraButton ref={cancelRef} onClick={onClose}>
                  Annuler
                </ChakraButton>
                <ChakraButton
                  colorScheme="red"
                  onClick={
                    (onClose,
                    () => {
                      dispatch(userDeleteRequest(navigate));
                    })
                  }
                  ml={3}
                >
                  Supprimer
                </ChakraButton>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </Flex>
  );
}

export default Profil;
