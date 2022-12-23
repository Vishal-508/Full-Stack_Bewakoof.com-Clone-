import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const PaymentPage = () => {
  return (
   <Box p="35px 0 50px" >
    <Flex w="60%" m="auto" border={"1px solid blue"} >
    <Box w="60%" border={"1px solid black"} ><Box fontSize={"16px"} color="#333333" m="0 0 16px" fontWeight={"bold"} textAlign="left" as="p">Choose your payment method</Box>
    <Box></Box></Box>
    <Box w="40%" border={"1px solid black"}></Box>
    </Flex>
   </Box>
  )
}

export default PaymentPage