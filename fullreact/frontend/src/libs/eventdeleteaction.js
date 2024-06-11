import { redirect } from "react-router-dom";

export async function action({ params }) {
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error:", errorData);
    throw new Response(
      JSON.stringify({ message: "Could not delete event", error: errorData }),
      { status: response.status }
    );
  }

  return redirect("/events");
}
