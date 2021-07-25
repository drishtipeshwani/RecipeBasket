import React from 'react'
import {
    Link,
    Stack,
    Button,
    Container,
    Heading,
    Text,
    Image,
    Center,
    Box
} from '@chakra-ui/react';
import header from '../images/header.jpg'
import About from '../components/About'
import Example from '../components/Example'

function Home() {
    return (
        <div>
            <div className="header">
                <Container maxW={'5xl'}>
                    <Stack
                        textAlign={'center'}
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 20 }}>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'100%'}>
                            Recipe{' '}
                            <Text as={'span'} color={'orange.400'}>
                                Basket
                            </Text>
                        </Heading>
                        <Text color={'orange.400'} fontSize={'xl'} padding={2}>
                            Why search for different ingredients of your recipe separately
                            when you can buy them together like a basket. To provide a better shopping experience to its customers,
                            Walmart can introduce the concept of recipe baskets.
                            A recipe basket will comprise all the ingredients of a particular recipe.
                        </Text>
                        <Stack spacing={6} direction={'row'} padding={2} marginBottom={12}>
                            <Link href='#about'>
                                <Button
                                    rounded={'full'}
                                    px={6}
                                    colorScheme={'orange'}
                                    bg={'orange.400'}
                                    _hover={{ bg: 'orange.500' }}>
                                    Learn More
                                </Button>
                            </Link>
                            <Link href='#examples'>
                                <Button
                                    rounded={'full'}
                                    px={6}
                                    colorScheme={'gray'}
                                    bg={'gray.400'}
                                    _hover={{ bg: 'gray.500' }}>
                                    Example
                                </Button>
                            </Link>
                        </Stack>
                        <Center marginTop={6}>
                            <Image src={header} alt="header" w="601px" h="301px" objectFit='fill'></Image>
                            <Box zIndex="-1" width="650px" position="absolute" height="350px">
                                <Box
                                    bgGradient={
                                        'radial(orange.600 1px, transparent 1px)'}
                                    backgroundSize="11px 11px"
                                    opacity="1"
                                    height="100%"
                                />
                            </Box>
                        </Center>
                    </Stack>
                </Container>
            </div>
            <div id="about">
                <About></About>
            </div>
            <div id="examples">
                <Example></Example>
            </div>
        </div>
    )
}

export default Home
