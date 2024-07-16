import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ChatPage = () => {
  return (
    <>
      <Box
        position={"absolute"}
        left={"50%"}
        w={{ base: "100%", md: "80%", lg: "750px" }}
        transform={"translateX(-50%)"}
        p={4}
        border={"1px solid red"}
      >
        <Flex
          gap={4}
          flexDirection={{ base: "column", md: "row" }}
          maxW={{ sm: "400px", md: "full" }}
          mx={"auto"}
        >
          <Flex
            flex={30}
            gap={2}
            flexDirection={"column"}
            maxW={{ sm: "250px", md: "full" }}
          >
            <Text
              fontWeight={700}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Your Conversations
            </Text>
            <form>
              <Flex alignItems={"center"} gap={2}>
                <Input placeholder="Search for a user" />
                <Button>
                  <SearchIcon />
                </Button>
              </Flex>
            </form>
          </Flex>
          <Flex flex={70}>MessageContainer</Flex>
        </Flex>
      </Box>
    </>
  );
};

export default ChatPage;
