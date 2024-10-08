import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import useShowToast from "../hooks/useShowToast";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  conversationsAtom,
  selectedConversationAtom,
} from "../atoms/messagesAtom";

const MessageInput = ({ setMessages }) => {
  const [messageText, setMessageText] = useState("");
  const showToast = useShowToast();
  const selectedConversation = useRecoilValue(selectedConversationAtom);
  const [conversations, setConversations] = useRecoilState(conversationsAtom);

  async function handleSendMessage(e) {
    e.preventDefault();

    if (!messageText) return;

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          recipientId: selectedConversation.userId,
        }),
      });

      const data = await res.json();
      if (data.error) return showToast("Error", data.error, "error");

      setMessages((messages) => [...messages, data]);

      setConversations((prevConvs) => {
        const updatedConversations = prevConvs.map((conversation) => {
          if (conversation._id === selectedConversation._id) {
            return {
              ...conversation,
              lastMessage: {
                text: messageText,
                sender: data.sender,
              },
            };
          }

          return conversation;
        });

        return updatedConversations;
      });

      setMessageText("");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  }

  return (
    <form onSubmit={handleSendMessage}>
      <InputGroup>
        <Input
          w={"full"}
          placeholder="Enter message"
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
        />
        <InputRightElement onClick={handleSendMessage} cursor={"pointer"}>
          <IoSendSharp />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default MessageInput;

// import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
// import { useState } from "react";
// import { IoSendSharp } from "react-icons/io5";
// import useShowToast from "../hooks/useShowToast";
// import { useRecoilState, useRecoilValue } from "recoil";
// import {
//   conversationsAtom,
//   selectedConversationAtom,
// } from "../atoms/messagesAtom";

// const MessageInput = ({ setMessages }) => {
//   const [messageText, setMessageText] = useState("");
//   const showToast = useShowToast();
//   const selectedConversation = useRecoilValue(selectedConversationAtom);
//   const [setConversations] = useRecoilState(conversationsAtom);

//   async function handleSendMessage(e) {
//     e.preventDefault();

//     if (!messageText) return;

//     try {
//       const res = await fetch("/api/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           message: messageText,
//           recipientId: selectedConversation.userId,
//         }),
//       });

//       const data = await res.json();
//       if (data.error) return showToast("Error", data.error, "error");

//       setMessages((messages) => [...messages, data]);

//       setConversations((prevConvs) => {
//         const updatedConversations = prevConvs.map((conversation) => {
//           if (conversation._id === selectedConversation._id) {
//             return {
//               ...conversation,
//               lastMessage: {
//                 text: messageText,
//                 sender: data.sender,
//               },
//             };
//           }

//           return conversation;
//         });

//         return updatedConversations;
//       });

//       setMessageText("");
//     } catch (error) {
//       showToast("Error", error.message, "error");
//     }
//   }

//   return (
//     <form onSubmit={handleSendMessage}>
//       <InputGroup>
//         <Input
//           w={"full"}
//           placeholder="Enter message"
//           onChange={(e) => setMessageText(e.target.value)}
//           value={messageText}
//         />
//         <InputRightElement onClick={handleSendMessage} cursor={"pointer"}>
//           <IoSendSharp />
//         </InputRightElement>
//       </InputGroup>
//     </form>
//   );
// };

// export default MessageInput;
