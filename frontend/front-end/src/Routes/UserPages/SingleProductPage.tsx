import React from 'react'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Text,
  Button,
  HStack,
  Spacer,
  Center,
} from "@chakra-ui/react";
const SingleProductPage = () => {
  return (
    <div>
      {/* <div>SingleProduct</div> */}
      {/* <Navbar /> */}
      <Box>
        <Breadcrumb
          fontSize="12px"
          w="1170px"
          p="10px 10px"
          m="auto"
          textAlign="left"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            {/* <BreadcrumbLink href="/women">women</BreadcrumbLink> */}
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            {/* <BreadcrumbLink href={`/singleproduct/:${id}`}> */}
              {/* {singlePageData.name} */}
             {/* {name} */}
              {/* </BreadcrumbLink> */}
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex w="1170px" m="auto">
        <Box display="flex" w="570px" h="588px" >
          <Box w="80px" mr="10px" >
            {/* <Image src={`https://images.bewakoof.com/t1080/${display_image}`} */}
             {/* /> */}
          </Box>
          {/* https://images.bewakoof.com/t640/${display_image} */}
          <Box>
            <Image
              w="450px"
              src={`https://images.bewakoof.com/t1080/men-s-black-nagato-graphic-printed-oversized-t-shirt-563596-1671460704-1.jpg`}
            />
          </Box>
        </Box>
        <Box w="527px" h="588px" >
          <Box fontSize="18px" p="8px 0" w="470px" textAlign="left" m="auto" fontWeight="semibold">
           
            manufacturer_brand
          </Box>
          <Text p="8px 0" w="470px" textAlign="left" m="auto" >
            {/* {singlePageData.name} */}
            Women's Red Slim Fit T-shirt
            {/* {name} */}
            
            
            </Text>
          <Box>
            <Flex fontSize="14px" align="center" w="470px" m="auto" >
              <Box fontWeight="bold" fontSize="24px">
                {" "}
                <Box as="span" fontSize="16px">
                  ₹
                </Box>{" "}
                
                349
                {/* {price} */}
              </Box>
              <Box textDecorationLine="line-through" fontSize="16px" pl="5px">
             
                399
                {/* {mrp} */}
              </Box>
              <Box textDecorationLine="line-through" fontSize="16px" pl="5px">
                {/* {singlePageData.product_discount} */}
                14% OFF
                {/* {product_discount} */}
              </Box>
            </Flex>
            <Flex w="470px"  m="0 auto 20px auto" >
              <Text fontSize="11px" fontWeight="bold" p="3px 8px" bg="#F7F7F7">
                {/* ₹{singlePageData.member_price} */}
                {/* {singlePageData.tribe_text} */}
               ₹319  For TriBe Members
              </Text>
            </Flex>
            <Box m="auto" w="470px" h="3px" bg="#EEEEEE"></Box>
            <Box fontSize="12px" p="16px 0">
              <Text>
                TriBe members get an extra discount of{" "}
                <Box as="span" fontWeight="bold">
                  ₹50
                </Box>{" "}
                and FREE shipping.
                <Box color="#42A2A2" as="span">
                  Learn more
                </Box>
              </Text>
            </Box>
          </Box>
          <Box m="auto" w="470px" h="3px" bg="#EEEEEE"></Box>
          <Box>
            <Flex w="470px" m="15px auto" justifyContent="space-between" >
              <Box fontSize="12px" fontWeight="bold" as="span">
                SELECT SIZE
              </Box>
              
              <Box fontSize="12px" fontWeight="bold" as="span" color="#42A2A2">
                Size Guide
              </Box>
            </Flex >
            <Flex  w="470px" m="auto" >
              {/* {
                product_sizes?.map((ele)=>  <Center
                w="46px"
                h="46px"
                m="0 9px 5px 0"
                border="1px solid black"
                borderRadius="5px"
              >
                {ele.name}
               
              </Center>)
              } */}
                
            </Flex>
          </Box>
          <Box>
            <Box w="470px"  m="0 auto -15px" fontSize="14px" textAlign="left" fontWeight="bold" color="#FF2E2E">
              Few Left
            </Box>
            <Box w="470px" m="20px auto">
              <HStack>

              <Button
              //  onClick={handleItem }
                 h="40px" w="248px" borderRadius="5px"  bg="#FFD84D" fontSize="14px">
                ADD TO BAG
              </Button>
             <Spacer/>
              <Button h="40px"  borderRadius="5px" border="1px solid #949494" color="#949494" w="195px" bg="#ffffff" fontSize="14px"  >
                WISHLIST
              </Button>
              </HStack>
            </Box>
          </Box>
          <Box m="auto" w="470px" h="3px" bg="#EEEEEE"></Box>
        </Box>
      </Flex>
    </div>
  );
}

export default SingleProductPage