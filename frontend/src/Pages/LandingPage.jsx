import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Crousel from "../Components/Crousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../Redux/action";
import { useState } from "react";
import ItemCard from "../Components/ItemCard";

const LandingPage = () => {
  const dispatch = useDispatch();
  const capsulesData = useSelector((store) => store.data);
  const [data, setData] = useState(capsulesData);

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    setData(capsulesData);
  }, [capsulesData]);
  console.log(data);


  return (
    <Box>
      <Navbar />
      <Crousel />
     

      <Box w='90%'   m='auto' display='grid'  gridTemplateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)', lg:'repeat(4, 1fr)'}} gap='4'>
      {data.map((elem) => <ItemCard {...elem} key={elem.capsule_serial}/>)}
      
    </Box>

    <Footer />
    </Box>
  );
};

export default LandingPage;
