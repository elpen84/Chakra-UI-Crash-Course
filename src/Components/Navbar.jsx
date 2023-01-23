import React from 'react'
import { Heading, Flex, Text, Button, Box, Spacer } from '@chakra-ui/react'

export default function Navbar() {
  return (
    
    <Flex as="nav" p="10px" alignItems="center" gap="10px">
        <Heading as="h1">
            13 More Hours
        </Heading>
        <Spacer />
        <Box bg="gray.200" p="10px">M</Box>
        <Text>Eddie@productperfect.com</Text>
        <Button colorScheme="blue">Logout</Button>
    </Flex>
  )
}
