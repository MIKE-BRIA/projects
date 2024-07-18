import Conversation from "../models/conversationModel";

export async function sendMessage(req, res) {
  try {
    const { recipientId, message } = req.body;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recipientId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: { senderId, recipientId },
        lastMessage: {
          text: message,
          sender: senderId,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
