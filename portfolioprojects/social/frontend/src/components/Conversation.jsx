import {
  Avatar,
  AvatarBadge,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";

const Conversation = () => {
  return (
    <>
      <Flex
        gap={4}
        alignItems={"center"}
        p={"1"}
        _hover={{
          cursor: "pointer",
          bg: useColorModeValue("gray.600", "gray.dark"),
          color: "white",
        }}
        borderRadius={"md"}
      >
        <WrapItem>
          <Avatar
            size={{ base: "xs", sm: "sm", md: "md" }}
            src="https://bit.ly/borken-link"
          >
            <AvatarBadge boxSize={"1em"} bg={"green.500"} />
          </Avatar>
        </WrapItem>

        <Stack>
          <Text fontWeight={"700"} display={"flex"} alignItems={"center"}>
            gweno <Image src="/verified.png" w={4} h={4} ml={1} />
          </Text>
          <Text fontSize={"xs"} display={"flex"} alignItems={"center"} gap={1}>
            Hello this is your Message
          </Text>
        </Stack>
      </Flex>
    </>
  );
};

export default Conversation;