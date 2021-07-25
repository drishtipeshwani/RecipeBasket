import React from 'react'
import { Box, Container, Text, Stack, Heading } from '@chakra-ui/react';


function About() {
    return (
        <div>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading
                        fontWeight={600}>
                        Walmart's{' '}
                        <Text as={'span'} color={'orange.400'}>
                            Next Innovation
                        </Text>
                    </Heading>
                </Stack>
                <Stack textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 15, md: 15 }}>
                    <Box shadow="lg" borderWidth="2px">
                        <Heading fontSize="xl" fontWeight='bold' color={'gray.500'} marginTop={2}>Fast and Efficient</Heading>
                        <Text padding={2} color={'gray.500'} maxW={'3xl'} fontSize={'17px'}>This feature will make the user's shopping
                            experience more fast and efficient. They won't have to search for every ingredient separately
                            but will have the comfort of buying the recipe basket with all the contents in one place.</Text>
                    </Box>
                </Stack>
                <Stack textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 18, md: 18 }}>
                    <Box shadow="lg" borderWidth="2px">
                        <Heading fontSize="xl" fontWeight='bold' color={'gray.500'} marginTop={2}>Personalized Customisation</Heading>
                        <Text padding={2} color={'gray.500'} maxW={'3xl'} fontSize={'17px'}> The best part about this basket would be that basket will be completely customized based on the user's choices. After selecting the recipe, users will be asked a set of questions
                            depending upon the user's answers the user will be recommended a basket with all the suitable ingredients</Text>
                    </Box>
                </Stack>

            </Box>
        </div>
    )
}

export default About
