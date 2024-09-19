import { useState } from "react";

const faqs = [
  {
    question: "How do I book tickets?",
    answer:
      "To book tickets, open the Eventio app, browse events, select the one you want, choose your tickets, and proceed to checkout. You’ll get a confirmation email with your tickets after payment."
  },
  {
    question: "What should I do if there's a problem with my tickets?",
    answer:
      "If you have issues with your tickets, contact support through the app or email support@eventioapp.com with your order details for help."
  },
  {
    question: "Can I transfer my tickets to someone else?",
    answer:
      "Yes, you can transfer tickets via the app. Select the ticket and enter the recipient’s details to complete the transfer."
  },
  {
    question: "How can I get a refund?",
    answer:
      "To request a refund, use the app before the refund deadline. If you need help, contact our support team."
  },
  {
    question: "What if I didn't get my ticket?",
    answer:
      "If you didn’t receive your ticket, check the app for your ticket information or contact support@eventioapp.com."
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
        <span className={`text-black font-bold text-3xl`}>
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
      <h2 className="text-2xl font-bold text-center mb-8">- FAQ</h2>
      <h2 className="text-3xl font-bold text-center mb-12">
       <span className="text-[#5516DA]">Questions?</span> Find Answers Here
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
