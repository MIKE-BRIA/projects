// import { createContext, useState } from "react";
// import { useRecoilValue } from "recoil";
// import userAtom from "../atoms/userAtom";
// import { useEffect } from "react";
// import io from "socket.io-client";

// const SocketContext = createContext();

// export const SocketContextProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const user = useRecoilValue(userAtom);

//   useEffect(() => {
//     const socket = io("http://localhost:3000", {
//       query: {
//         userId: user?._id,
//       },
//     });

//     setSocket(socket);
//     return () => socket && socket.close();
//   }, [socket, user?._id]);

//   return (
//     <SocketContext.Provider value={"hi"}>{children}</SocketContext.Provider>
//   );
// };

import { createContext, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import io from "socket.io-client";

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    if (user?._id) {
      const newSocket = io("http://localhost:3000", {
        query: {
          userId: user._id,
        },
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    }
  }, [user?._id]); // Only re-run if user._id changes

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext };
