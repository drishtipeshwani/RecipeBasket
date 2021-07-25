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
import { useToast } from "@chakra-ui/react"


function Recipe() {

    const toast = useToast()

    return (
        <div>
            <Box>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 20, md: 20 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'} textAlign='center'>
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
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>User's{' '}<Text as={'span'} color={'orange.400'}>
                        Choice Quiz
                    </Text></Heading>
                    <Flex shadow="lg" borderWidth="2px" padding={2} maxW={'8xl'} flexDirection='column'>
                        <Text color={'gray.500'} fontSize={'25px'}>
                            Select your preferences
                        </Text>
                        <div id="quiz">
                            <FormControl as="fieldset" margin={2}>
                                <FormLabel as="legend">Favorite Syrup :</FormLabel>
                                <RadioGroup defaultValue="maple" marginBottom={3}>
                                    <HStack spacing="24px">
                                        <Radio value="maple">Maple Syrup</Radio>
                                        <Radio value="blueberry">Blueberry Syrup</Radio>
                                        <Radio value="chocolate">Chocolate Syrup</Radio>
                                        <Radio value="null">No syrup</Radio>
                                    </HStack>
                                </RadioGroup>
                                <FormLabel as="legend">Favorite Pancake Fruits Topping :</FormLabel>
                                <RadioGroup defaultValue="berry" marginBottom={3}>
                                    <HStack spacing="24px">
                                        <Radio value="berry">Fresh Berries</Radio>
                                        <Radio value="banana">Bananas</Radio>
                                        <Radio value="apples">Apples</Radio>
                                        <Radio value="null">No Fruit toppings</Radio>
                                    </HStack>
                                </RadioGroup>
                                <FormLabel as="legend">Favorite Extra Pancake Toppings :</FormLabel>
                                <RadioGroup defaultValue="nutella" marginBottom={3}>
                                    <HStack spacing="24px">
                                        <Radio value="nutella">Nutella</Radio>
                                        <Radio value="butter">Peanut Butter</Radio>
                                        <Radio value="nuts">Nuts</Radio>
                                        <Radio value="null">No extra toppings</Radio>
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
                    </Flex>
                </Stack>
                <div id="footer">
                    <Stack textAlign={'center'}
                        align={'center'}
                        spacing={{ base: 8, md: 8 }}
                        py={{ base: 20, md: 20 }}>
                        <Heading fontSize={'3xl'}>Breif{' '}<Text as={'span'} color={'orange.400'}>
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
