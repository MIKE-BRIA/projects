import { redirect } from "react-router-dom";

export async function action({ request }) {
  try {
    const data = await request.formData();

    const eventData = {
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description"),
    };

    const response = await fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData);
      throw new Response(
        JSON.stringify({ message: "Could not save event", error: errorData }),
        { status: response.status }
      );
    }

    return redirect("/");
  } catch (error) {
    console.error("Catch Error:", error);
    throw new Response(
      JSON.stringify({ message: "An error occurred", error: error.message }),
      { status: 500 }
    );
  }
}
