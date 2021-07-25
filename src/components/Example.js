import React from 'react'
import { Box, Stack, Container, Text, Image, Heading, Link } from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom"

function Example() {
    return (
        <div>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading
                    fontWeight={600}>
                    Glimpe of{' '}
                    <Text as={'span'} color={'orange.400'}>
                        the Idea
                    </Text>
                </Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                </Text>
            </Stack>
            <Box
                paddingBottom={8}
                marginTop={{ base: '1', sm: '3' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '75%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '10%' }}
                        marginTop="5%">
                        <Image
                            borderRadius="lg"
                            src={
                                "https://images.unsplash.com/photo-1612182062966-c8fe45ecbf73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhbmNha2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                            }
                            alt="events"
                            objectFit="contain"
                        />
                    </Box>
                    <Box zIndex="1" width="90%" position="absolute" height="100%" marginLeft={{ base: '0', sm: '3%' }}>
                        <Box
                            bgGradient={
                                'radial(orange.400 1px, transparent 1px)'}
                            backgroundSize="15px 15px"
                            opacity="1"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }} marginRight={8}>
                    <Heading marginTop="1" textAlign='center' color={'yellow.300'}>
                        Pancakes {' '}<Text as={'span'} color={'yellow.300'}>
                            Basket
                        </Text>
                    </Heading>
                    <Text textAlign='center'
                        as="p"
                        marginTop="2"
                        color={'gray.500'}
                        fontSize="17px">
                        Suppose a user wants to make pancakes for breakfast. Rather than separately searching for pancake mix, fruits, syrup,
                        we could personally customize a basket for the user they can directly purchase. User's can click on the link below
                        to answers a set of questions so that their presonalized shopping basket can be prepared.</Text>
                    <Text fontSize="2xl" textAlign='center' marginTop={8}
                        _hover={{
                            color: "teal.500",
                        }}><Link as={ReachLink} to="/recipe">Customise Your Basket</Link></Text>
                </Box>
            </Box>
        </div>
    )
}

export default Example
