import React from 'react'
import { Flex, Text, Spacer, Stack, Button, Select } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <>
            <Flex>
                <Stack direction="row" spacing={10} d="flex" align="center" ml="16">
                    <Text
                    color="main.primary"
                    letterSpacing="widest"
                    fontWeight="bold" 
                    fontSize="4xl">
                        Designate.
                    </Text>
                    <Text
                    fontSize="xl"
                    >
                        Events
                    </Text>
                    <Text
                    fontSize="xl"
                    >
                        Blog
                    </Text>
                    <Select variant="unstyled" placeholder="ID"/>
                </Stack>
                <Spacer />
                <Stack direction="row" spacing={10} d="flex" align="center" mr="16">
                    <Text
                    fontSize="xl"
                    >
                        Masuk
                    </Text>
                    <Text
                    fontSize="xl"
                    >
                        Daftar
                    </Text>
                    <Button
                    variant="outline"
                    borderRadius={0}
                    color="main.primary"
                    width="200px"
                    borderWidth="2px"
                    borderColor="main.primary"
                    transition="300ms"
                    _hover={{ 
                        backgroundColor:"main.primary",
                        color:"white"
                     }}
                    >Perusahaan</Button>
                </Stack>
            </Flex>
        </>
    )
}

export default Navbar
