import { Box, Button, Image, Text, useDisclosure,  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from '@chakra-ui/react'
import React, { useState } from 'react'


const ItemCard = (elem) => {
    const [modal, setModal] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleModal = (item) => {
        console.log(item)
        setModal(true);
     
    }
  return (
    <Box display='flex' flexDirection='column' h='400px' boxShadow='xl' borderRadius='xl' p='4'>
        {/* <Box h='50%' w='80%' m='auto'  >
            <Image borderRadius='xl' w='100%' h='100%' src={elem.image_url} />
        </Box> */}

        <Box display='flex' flexDirection='column'>
            <Text fontSize='xl' fontWeight='600'>eruihgufdh</Text>
          

        </Box>
        <Button mt='4' onClick={handleModal} >Trial</Button>

        {modal && 
        <Modal isOpen={true} onClose={()=>onClose(setModal(!modal))}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            <img  src={elem.image_url} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>onClose(setModal(!modal))}>
              Close
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
      
        }
      
    </Box>
  )
}

export default ItemCard