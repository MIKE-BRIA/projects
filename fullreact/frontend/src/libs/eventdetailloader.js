export async function loader({ params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch event details" }),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
