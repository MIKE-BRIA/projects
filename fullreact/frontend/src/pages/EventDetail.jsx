import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
  // const params = useParams();
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export default EventDetail;
