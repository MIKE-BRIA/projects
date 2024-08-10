import useUserDetails from "../hooks/useUserDetails";

const OverView = () => {
  const { loading, userDetails } = useUserDetails();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userDetails) {
    return <p>No user details available.</p>;
  }

  return (
    <div>
      <h1>{userDetails.name}</h1>
      <h1>{userDetails.email}</h1>
      {/* You can display other user details here if userDetails is an object */}
    </div>
  );
};

export default OverView;
