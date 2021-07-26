import React from 'react'
import {
    Box,
    FormControl,
    HStack,
    FormLabel,
    RadioGroup,
    Stack,
    Button,
    Radio,
    Heading,
    Text,
    Image,
    Center,
    Link,
    Container,
    Flex
} from '@chakra-ui/react';
import { useToast } from "@chakra-ui/react";

function Recipe() {

    const toast = useToast();

    return (
        <div>
            <Box overflowX='scroll'>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 20, md: 20 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'} textAlign='center' color={'white.500'}>
                        Pancakes{' '}
                        <Text as={'span'} color={'orange.400'}>
                            Recipe
                        </Text>
                    </Heading>
                    <Center>
                        <Image src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pancakes" w="500px" h="300px" ></Image>
                    </Center>
                    <Link href='#quiz'>
                        <Button
                            rounded={'full'}
                            px={6}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}
                        >
                            Tell your choices
                        </Button>
                    </Link>
                </Stack>
                <Stack textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 4, md: 4 }}
                    py={{ base: 10, md: 10 }}>
                    <Heading fontSize={'3xl'} color={'white.500'}>User's{' '}<Text as={'span'} color={'orange.400'}>
                        Choice Quiz
                    </Text></Heading>
                    <Box shadow="lg" borderWidth="2px" padding={2} flexDirection='column'>
                        <Text color={'gray.500'} fontSize={'2xl'}>
                            Select your preferences
                        </Text>
                        <div id="quiz">
                            <FormControl as="fieldset" margin={2}>
                                <FormLabel as="legend" color={'white.500'}>Favorite Syrup :</FormLabel>
                                <RadioGroup defaultValue="maple" marginBottom={3}>
                                    <HStack spacing='22px'>
                                        <Radio value="maple" color={'white.500'}>Maple Syrup</Radio>
                                        <Radio value="blueberry" color={'white.500'}>Blueberry Syrup</Radio>
                                        <Radio value="chocolate" color={'white.500'}>Chocolate Syrup</Radio>
                                        <Radio value="null" color={'white.500'}>No syrup</Radio>
                                    </HStack>
                                </RadioGroup>
                                <FormLabel as="legend" color={'white.500'}>Favorite Pancake Fruits Topping :</FormLabel>
                                <RadioGroup defaultValue="berry" marginBottom={3}>
                                    <HStack spacing="24px">
                                        <Radio value="berry" color={'white.500'}>Fresh Berries</Radio>
                                        <Radio value="banana" color={'white.500'}>Bananas</Radio>
                                        <Radio value="apples" color={'white.500'}>Apples</Radio>
                                        <Radio value="null" color={'white.500'}>No Fruit toppings</Radio>
                                    </HStack>
                                </RadioGroup>
                                <FormLabel as="legend" color={'white.500'}>Favorite Extra Pancake Toppings :</FormLabel>
                                <RadioGroup defaultValue="nutella" marginBottom={3}>
                                    <HStack spacing="24px">
                                        <Radio value="nutella" color={'white.500'}>Nutella</Radio>
                                        <Radio value="butter" color={'white.500'}>Peanut Butter</Radio>
                                        <Radio value="nuts" color={'white.500'}>Nuts</Radio>
                                        <Radio value="null" color={'white.500'}>No extra toppings</Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                            <Button
                                margin={2}
                                rounded={'full'}
                                px={6}
                                colorScheme={'orange'}
                                bg={'orange.400'}
                                _hover={{ bg: 'orange.500' }}
                                onClick={() =>
                                    toast({
                                        title: "Choices Submitted",
                                        description: "We will try to recommend the most suitable basket for you.",
                                        status: "success",
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                }>
                                Submit
                            </Button>
                        </div>
                    </Box>
                </Stack>
                <div id="footer">
                    <Stack textAlign={'center'}
                        align={'center'}
                        spacing={{ base: 8, md: 8 }}
                        py={{ base: 20, md: 20 }}>
                        <Heading fontSize={'3xl'} color={'white.500'}>Breif{' '}<Text as={'span'} color={'orange.400'}>
                            Summary
                        </Text></Heading>
                        <Box shadow="lg" borderWidth="2px">
                            <Text padding={2} color={'gray.500'} maxW={'3xl'} fontSize={'17px'}>In this way, a set of such questions can be asked to users. The questions can also be related to their favorite food brands and their budget for each product, thus making sure the basket is as personalized as possible. Therefore a recommendation system can be built,
                                such that depending upon all of the answers given, the most suitable
                                ingredients are recommended to the users. This can be one of the ways
                                Walmart can enhance the shopping experience of their users and make
                                it more personalized and easy for them</Text>
                        </Box>
                    </Stack>
                </div>
            </Box>
        </div >
    )
}

export default Recipe
