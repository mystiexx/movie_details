import React, { useState } from "react";
import {
  Box,
  Input,
  Center,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import "./style.css";
import { useMediaQuery } from "@chakra-ui/media-query";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [word, setWord] = useState("");
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  const handleFilter = (e) => {
    let searchWord = e.target.value.toLowerCase();
    setWord(searchWord);
    let newFilter = data.filter(
      (value) =>
        value?.title?.toLowerCase().includes(searchWord) ||
        value?.name?.toLowerCase().includes(searchWord)
    );
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWord("");
  };
  return (
    <Box className="search">
      <Box
        className="searchInputs"
        display="flex"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Center w={isNotSmallerScreen ? "40%" : null}>
          <InputGroup>
            <Input
              type="text"
              value={word}
              placeholder={placeholder}
              onChange={handleFilter}
            />
            <InputRightElement
              children={
                filteredData.length === 0 ? (
                  <AiOutlineSearch />
                ) : (
                  <AiOutlineClose onClick={clearInput} />
                )
              }
            />
          </InputGroup>
        </Center>
      </Box>
      {filteredData.length !== 0 && (
        <Box
          className={isNotSmallerScreen ? "dataResult" : "dataResult-mobile"}
        >
          {filteredData?.map((data) => {
            return (
              <Box key={data.id} className="dataItem">
                <Text ml={5} mt={2}>
                  {data.title || data.name}
                </Text>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
