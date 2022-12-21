import React, { useEffect, useState } from "react";

// import {reducer as AuthReducer} from "./AppReducer/reducer";
import {
  Box,
  SimpleGrid,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Flex,
  Stack,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { IproductData } from "../../Redux/AppReducer/reducer";
import ProductCard from "../../Components/ProductsPage/ProductCard";
import { relative } from "path";
const ProductsPage = () => {
  const AllProductData: IproductData[] = useSelector(
    (state: any) => state.AppReducer.AllProductData
  );
  const isLoading: boolean = useSelector(
    (state: any) => state.AppReducer.isLoading
  );
  // https://images.bewakoof.com/web/bwkf-loading-anim-common.gif
  const [data, setData] = useState([]);
  const dispatch = useDispatch;
  const [sort, setSort] = useState("popular");
  console.log(AllProductData);

  // if(isLoading) {
  //   return <Center w="100%" h="100%" > <Image   w="250px" src='https://images.bewakoof.com/web/bwkf-loading-anim-common.gif' /></Center>}

  return (
    <div>
      {/* <Box  > */}
      <Box position="sticky" top="0">
        {/* <Navbar /> */}
      </Box>
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

          <BreadcrumbItem isCurrentPage>
            {/* <BreadcrumbLink href="/men">Men</BreadcrumbLink> */}
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box>
        {/* <Image
          w="100%"
          src={`https://images.bewakoof.com/uploads/category/desktop/${data.desktop_banner}`}
        /> */}
      </Box>
      <Box
        w="1170px"
        m="auto"
        mt="45px"
        mb="50px"
        textAlign="left"
        fontSize="24px"
        fontWeight="bold"
      >
        {/* {data.title}{" "} */}
        <Box as="span" fontWeight="normal" color="#949494">
          {/* ({data.total_product_count}) */}
        </Box>
        <Box w="117px" h="2px" bg="#FBD139" ml="1px" mt="6px"></Box>
      </Box>
      <Box w="1170px" h="auto" m="auto" display="flex">
        <Box w="295.5px" h="auto">
          <Flex color="#333333" direction="column" position="sticky" top="52px">
            <Box
              color="#2D2D2D80"
              fontSize="12px"
              p="12px 0"
              textAlign="left"
              fontWeight="bold"
            >
              FILTERS
            </Box>
            <Accordion allowToggle mr="10px"  >
              <AccordionItem  w="94%">
                <h2>
                  <AccordionButton  p="8px 0px 8px 0px" >
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem w="94%">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                     Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem w="94%">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Color
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem w="94%">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Fit
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem w="94%">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Sleeve
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem w="94%">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Discount
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem w="94%" >
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Sort By
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem w="94%">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                     Sizes
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            {/* <Stack spacing={3} w="100%">
              <Select
                variant="flushed"
                color="#333333"
                placeholder="Category"
              ></Select>
              <Select
                variant="flushed"
                color="#333333"
                placeholder="Sizes"
              ></Select>
              <Select
                variant="flushed"
                color="#333333"
                placeholder="Brand"
              ></Select>
              <Select
                variant="flushed"
                color="#333333"
                placeholder="Design"
              ></Select>
              <Select
                variant="flushed"
                color="#333333"
                placeholder="Fit"
              ></Select>
              <Select
                variant="flushed"
                color="#333333"
                placeholder="Rating"
              ></Select>
              <Select
                variant="flushed"
                color="#333333"
                placeholder="Discount"
              ></Select>
            </Stack> */}
          </Flex>
        </Box>
        <Box w="877.5px">
          <Box p="12px 15px 0" mb="12px" display="flex" justifyContent="end">
            <Box
              as="span"
              fontSize="12px"
              pt="6px"
              color="#2D2D2D80"
              fontWeight="bold"
            >
              SORT BY
            </Box>
            <Select
              p="1px 6px 12px"
              w="147px"
              h="26px"
              fontSize="12px"
              variant="unstyled"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="popular">Popular</option>
              <option value="new">New</option>
              <option value="high">price: High to Low</option>
              <option value="low">price: Low to High</option>
            </Select>
          </Box>
          <SimpleGrid columns={3} gap="10px">
            {AllProductData?.map((item) => {
              return <ProductCard key={item.id} {...item} />;
            })}
          </SimpleGrid>
        </Box>
      </Box>
      {/* </Box> */}
    </div>
  );
};

export default ProductsPage;

{
  /* <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                /> */
}
