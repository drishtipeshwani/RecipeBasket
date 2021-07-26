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
import { useColorMode } from '@chakra-ui/color-mode';

function Home() {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div>
            <div className="header">
                <Container maxW={'5xl'}>
                    <Box align={'end'} marginTop={5}>
                        <Button onClick={toggleColorMode}>
                            Toggle {colorMode === "light" ? "Dark" : "Light"}
                        </Button>
                    </Box>
                    <Stack
                        textAlign={'center'}
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 20 }}>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'100%'} color={'white.500'}>
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
                            <Image src={header} alt="header" width="601px" maxH="301px" objectFit='fill'></Image>
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
