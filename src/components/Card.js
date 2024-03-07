import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" color="black" borderRadius={8} alignItems="left">
      <Image src={imageSrc} alt="" h='200px' w="100%" borderRadius={8}/>
      <Heading size={16} paddingLeft={4}>{title}</Heading>
      <Text size={14} paddingLeft={4}>{description}</Text>
      <HStack paddingLeft={4} paddingBottom={6}>
        <p size={12} >See more</p>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
