import { useState } from "react";

const faqs = [
  {
    question: "How can I BUY event tickets on the Eventio app?",
    answer:
      "To purchase event tickets on the Eventio app, simply open the app and browse through our curated list of upcoming events, where you can view detailed information and select your desired event. Once you’ve chosen your event, select the number of tickets you wish to purchase and proceed to checkout, where you’ll be prompted to enter your payment information securely. After completing the payment process, you’ll receive a confirmation email with your digital tickets, which you can easily access through the app for seamless entry to the event. Additionally, our app offers options to manage and transfer your tickets, ensuring a smooth and convenient experience from start to finish."
  },
  {
    question: "How can I BUY event tickets on the Eventio app?",
    answer:
      "To purchase event tickets on the Eventio app, simply open the app and browse through our curated list of upcoming events, where you can view detailed information and select your desired event. Once you’ve chosen your event, select the number of tickets you wish to purchase and proceed to checkout, where you’ll be prompted to enter your payment information securely. After completing the payment process, you’ll receive a confirmation email with your digital tickets, which you can easily access through the app for seamless entry to the event. Additionally, our app offers options to manage and transfer your tickets, ensuring a smooth and convenient experience from start to finish."
  },
  {
    question: "How can I BUY event tickets on the Eventio app?",
    answer:
      "To purchase event tickets on the Eventio app, simply open the app and browse through our curated list of upcoming events, where you can view detailed information and select your desired event. Once you’ve chosen your event, select the number of tickets you wish to purchase and proceed to checkout, where you’ll be prompted to enter your payment information securely. After completing the payment process, you’ll receive a confirmation email with your digital tickets, which you can easily access through the app for seamless entry to the event. Additionally, our app offers options to manage and transfer your tickets, ensuring a smooth and convenient experience from start to finish."
  },
  {
    question: "How can I BUY event tickets on the Eventio app?",
    answer:
      "To purchase event tickets on the Eventio app, simply open the app and browse through our curated list of upcoming events, where you can view detailed information and select your desired event. Once you’ve chosen your event, select the number of tickets you wish to purchase and proceed to checkout, where you’ll be prompted to enter your payment information securely. After completing the payment process, you’ll receive a confirmation email with your digital tickets, which you can easily access through the app for seamless entry to the event. Additionally, our app offers options to manage and transfer your tickets, ensuring a smooth and convenient experience from start to finish."
  },
  {
    question: "How can I BUY event tickets on the Eventio app?",
    answer:
      "To purchase event tickets on the Eventio app, simply open the app and browse through our curated list of upcoming events, where you can view detailed information and select your desired event. Once you’ve chosen your event, select the number of tickets you wish to purchase and proceed to checkout, where you’ll be prompted to enter your payment information securely. After completing the payment process, you’ll receive a confirmation email with your digital tickets, which you can easily access through the app for seamless entry to the event. Additionally, our app offers options to manage and transfer your tickets, ensuring a smooth and convenient experience from start to finish."
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white rounded-lg p-4 pl-8 mb-2 mx-auto w-full max-w-6xl bg-white">
      <button
        className="w-full text-left text-xl font-bold text-black flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`text-black font-bold text-3xl ${isOpen ? "" : ""}`}>
          {isOpen ? "-" : "+"}
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px]' : 'max-h-0'}`}> 
        <p className="mt-4 text-black">{answer}</p>
      </div>
    </div>
  );
};

const EventTicketFAQ = () => {
  return (
    <div className="w-full min-h-screen bg-blue-50 px-6 py-24">
      <h2 className="text-2xl font-bold text-center mb-8">-FAQ</h2>
      <h2 className="text-3xl font-bold text-center mb-12">
       <span className="text-[#5516DA]">Question?</span> Look Here
      </h2>

      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default EventTicketFAQ;
