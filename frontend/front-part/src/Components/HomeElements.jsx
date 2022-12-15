import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from '@chakra-ui/react'
import MensHome from "./MenHome";
import WomenHome from "./WomenHome";
// import { useContext } from "react";
// import { productHomeMen, productHomeWomen } from "../Context/Action";
// import { AppContext } from "../Context/AppContext";

export function HomeElements() {
  //   const {dispatch}=useContext(AppContext)
  const navigate = useNavigate();
  // const mens=()=>{
  //     navigate(<MensHome/>)
  // }
  // const women=()=>{
  //     navigate(<WomenHome/>)
  // }
  return (
    <Box  bg="#FFFFFF">
      <Tabs align="center">
        <TabList border="none">
          <Tab
            style={{ padding: "21px 24px" }}
            _selected={{
              borderBottom: "4px solid  #FDD835",
              fontWeight: "bold",
              fontSize: "17px",
            }}
            //  onClick={mens }
          >
            MEN
          </Tab>
          <Tab
            style={{ padding: "21px 24px" }}
            _selected={{
              borderBottom: "4px solid  #FDD835",
              fontWeight: "bold",
              fontSize: "17px",
            }}
            //   onClick={women }
          >
            WOMEN
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MensHome/>
          </TabPanel>
          <TabPanel>
            <WomenHome/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
