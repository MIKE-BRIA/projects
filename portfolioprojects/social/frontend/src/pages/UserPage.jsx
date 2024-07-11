import { useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [user, setUser] = useState(null);

  const { username } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [username]);

  return (
    <>
      <UserHeader />
      <UserPost />
      <UserPost />
      <UserPost />
    </>
  );
};

export default UserPage;
