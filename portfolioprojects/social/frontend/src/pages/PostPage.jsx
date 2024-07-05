import {
  Avatar,
  Flex,
  Image,
  Text,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Action from "../components/Action";
import { useState } from "react";
import Comments from "../components/Comments";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="mark" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerberg
            </Text>
            <Image src="/verified.png" w={"4"} h={"4"} ml={4} />
          </Flex>
        </Flex>

        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Let&apos;s talk about threads</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/post1.png" alt="" />
      </Box>

      <Flex gap={3} my={3}>
        <Action liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          238 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {500 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>🤯</Text>
          <Text color={"gray.light"}>
            You are now able to see what others comment about you on all social
            media platforms
          </Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />

      <Comments
        comment="This really looks good"
        createdAt="21hrs"
        likes={2070}
        username="kamausau"
        userAvatar="https://bit.ly/kent-c-dodds"
      />
      <Comments
        comment="Niggah i need all that money that you have"
        createdAt="2d"
        likes={70}
        username="Stalon"
        userAvatar="https://bit.ly/code-beast"
      />
      <Comments
        comment="When are you showing up in court for the privacy lawsuit"
        createdAt="2hrs"
        likes={10070}
        username="Lownai"
        userAvatar="https://bit.ly/ryan-florenc"
      />
      <Comments
        comment="Is this the best picture that you team could take??"
        createdAt="1hr"
        likes={4567}
        username="Lukas"
        userAvatar="https://bit.ly/prosper-baba"
      />
    </>
  );
};

export default PostPage;
