import React from 'react'
import { Flex, Text, Button, Input, Select, Stack } from '@chakra-ui/react'

const index = () => {
    return (
        <>
            <Flex minH="100vh" w="100%" align="center" justify="center">
                <Flex bg="white" w="70%" minH="90vh">
                    <Stack direction="row" w="100%" spacing={5}>
                        <Flex w="90vh">
                        <Input placeholder="Masukkan kata kunci atau judul artikel"/>
                        <Button ml={2} bg="main.primary" color="white" w="150px" colorScheme="black">Cari</Button>
                        </Flex>
                        <Select w="200px" placeholder="Kategori"/>
                        <Select w="200px" placeholder="urutkan"/>
                    </Stack>
                </Flex>
            </Flex>
        </>
    )
}

export default index