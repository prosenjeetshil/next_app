import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Personal Diet Advisor",
  initialMessages: [
    createChatBotMessage(`Hi there! I'm here to help you achieve your fitness goals. Let's get started by calculating your BMI.`)
  ]
}

export default config


// bot Avatar