import {
  Avatar,
  Flex,
  Image,
  useColorModeValue,
  Text,
  Divider,
} from "@chakra-ui/react";

const MessageContainer = () => {
  return (
    <Flex
      flex={"70"}
      bg={useColorModeValue("gray.200", "gray.dark")}
      borderRadius={"md"}
      p={3}
      flexDir={"column"}
    >
      {/* Message header */}
      <Flex w={"full"} h={12} alignItems={"center"} gap={2}>
        <Avatar src="" size={"sm"} />
        <Text display={"flex"} alignItems={"center"}>
          gweno <Image src="/verified.png" w={4} h={4} ml={1} />
        </Text>
      </Flex>

      <Divider />
    </Flex>
  );
};

export default MessageContainer;
