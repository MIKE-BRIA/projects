// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./pages/RootLayout";
import EventsRootLayout from "./pages/EventsRootLayout";
import { loader as eventsdataloader } from "./libs/eventdataloader";
import Error from "./pages/Error";
import { loader as eventdetailloader } from "./libs/eventdetailloader";
import { action as newEventAction } from "./libs/eventsendaction";
import { action as deleteEvent } from "./libs/eventdeleteaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsdataloader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventdetailloader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEvent,
              },
              { path: "edit", element: <EditEvent /> },
            ],
          },

          { path: "new", element: <NewEvent />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
