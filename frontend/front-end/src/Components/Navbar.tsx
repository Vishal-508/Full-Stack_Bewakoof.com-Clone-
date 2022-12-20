import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'
// import { useDispatch } from "react-redux";
import { getAllProducts } from "../Redux/AppReducer/action_creaters";
import { useDispatch, useSelector } from 'react-redux';
import { IproductData } from "../Redux/AppReducer/reducer";

// console.log(getAllProducts)
const Navbar = () => {
  const AllProductData: IproductData[] = useSelector((state:any) => state.AppReducer.AllProductData);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleClick = (gender:string) => {
        var payload={
            limit:40,
            category:"T-Shirt",
            gender:gender,
            page:2,
            dispatch
        }
       
       getAllProducts(payload)
       console.log(AllProductData)
        navigate("/ProductsPage")
        
      };
      // useEffect(()=>{
      //   var payload={
      //     limit:40,
      //     category:"T-Shirt",
      //     gender:"Men",
      //     page:2,

      // }
      //   getAllProducts()
      //   console.log(AllProductData)
      // },[])
    return (
        <Box bg="#FFF" >
          <Box h="52px" borderBottom="1px solid rgba(0,0,0,.2)">
            {/* minWidth="max-content" */}
            <Flex
              w="1170px"
              h="52px"
              direction="row"
              m="auto"
              justify="center"
              alignItems="center"
              gap="2"
            >
              {/* logo below */}
              <Box p="2" w="195px">
                <Link to="/">
                  <Image
                    w="147px"
                    h="20px"
                    src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo-christmas-v1.svg"
                  />
                </Link>
              </Box>
    
              {/* men,women and mobile covers links and menubar start below */}
              <Box pl="0px" w="487.5px" h="51px">
                <Flex fontSize="13px" h="51px" align="center">
                  <Box
                    as="span"
                    display="inline-block"
                    p="13px 11px"
                    color="000000E6"
                    fontWeight="medium"
                    letterSpacing="1PX"
                   
                    _hover={{ borderBottom: "4px solid #FDD835",cursor:"pointer" }}
                    onClick={()=>handleClick("Men")}
                   
                  >
                    MEN
                    {/* <Link to="/ProductsPage">MEN</Link> */}
                  </Box>
                  <Box
                    as="span"
                    display="inline-block"
                    p="13px 11px"
                    color="000000E6"
                    fontWeight="medium"
                    letterSpacing="1PX"
                    _hover={{ borderBottom: "4px solid #FDD835",cursor:"pointer"  }}
                    onClick={()=>handleClick("Women")}
                    
                  >
                    WOMEN
                    {/* <Link to="/ProductsPage">WOMEN</Link> */}
                  </Box>
                  
                </Flex>
              </Box>
    
              {/* search section start below */}
              <Box w="487.5px" display="flex" alignItems="center">
                <Box fontSize="12px">
                  <FormControl m="0">
                    {" "}
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon />}
                      />
                      <Input
                        m="0"
                        variant="filled"
                        placeholder="Search product here"
                        focusBorderColor="grey"
                        _focus={{ border: ".5px solid grey" }}
                        w="301px"
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box fontSize="14px" display="flex" alignItems="center">
                  <Box
                    display="inline-block"
                    w="1px"
                    h="20px"
                    background="#000"
                    opacity=".3"
                    m="16px 15px 14px 15px"
                  ></Box>
    
                  <Link style={{ fontSize: "14px" }} to="/UserLogin">
                   Login
                  </Link>
                  <Link
                    style={{ fontSize: "14px", margin: "0 0 0 15px" }}
                    to="/WishListPage"
                  >
                    <Image
                      src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg"
                      alt="cart"
                      w="20px"
                    />
                  </Link>
                  <Link  style={{ fontSize: "14px", margin: "0 15px",display:"flex" }} to="/CartPage">
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/3034/3034002.png"
                      alt="cart"
                      w="20px"
                    />
                    <Box as="span" fontWeight="bold" >
                        {/* {item} */}
                        </Box>
                  </Link>
                  <Image
                      src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                      alt="cart"
                      w="30px"
                    />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      );
}

export default Navbar