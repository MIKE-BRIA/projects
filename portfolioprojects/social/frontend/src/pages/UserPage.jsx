import { useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const showToast = useShowToast();
  const { username } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        console.log(data);
        if (data.error) return showToast("Error", data.error, "error");

        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [username, showToast]);

  if (!user && loading)
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );

  if (!user && !loading)
    return (
      <Flex justifyContent={"center"}>
        <h1>User not found</h1>
      </Flex>
    );

  return (
    <>
      <UserHeader user={user} />
      <UserPost />
      <UserPost />
      <UserPost />
    </>
  );
};

export default UserPage;
