import { useState } from "react";
import UserHeader from "../components/UserHeader";
// import UserPost from "../components/UserPost";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const showToast = useShowToast();
  const { username } = useParams();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [fetchingPosts, setFetchingPosts] = useState(false);

  useEffect(() => {
    //*Get the user
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

    //*Get the User Posts
    const getPosts = async () => {
      setFetchingPosts(true);
      try {
        const res = await fetch(`/api/posts/user/${username}`);
        const data = await res.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
        setPosts([]);
      } finally {
        setFetchingPosts(false);
      }
    };

    getUser();
    getPosts();
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

      {!fetchingPosts && posts.length === 0 && (
        <Flex justifyContent={"center"} mt={4}>
          <h1>User has no posts yet</h1>
        </Flex>
      )}

      {fetchingPosts && (
        <Flex justifyContent={"center"} my={12}>
          <Spinner size={"xl"} />
        </Flex>
      )}

      {posts?.map((post) => (
        <Post key={post._id} post={post} postedBy={post.postedBy} />
      ))}
    </>
  );
};

export default UserPage;
