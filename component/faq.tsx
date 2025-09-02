"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";


// const faqs = [
//   {
//     question: "Can I trial Webflow before paying?",
//     answer: "Yes, Webflow offers a free trial so you can explore the platform before making a purchase."
//   },
//   {
//     question: "What is a project?",
//     answer: "A project is a workspace where you design, build, and manage your website in Webflow."
//   },
//   {
//     question: "What can I white label?",
//     answer: "You can white label the client-facing parts of Webflow, making it appear as your own brand."
//   },
//   {
//     question: "How much traffic can the hosting handle?",
//     answer: "Webflow hosting can handle millions of visits per month depending on your plan."
//   },
//   {
//     question: "What kind of support does Webflow provide?",
//     answer: "Webflow provides documentation, tutorials, and customer support to help you succeed."
//   },
//   {
//     question: "How long does it take to learn Webflow?",
//     answer: "Learning Webflow varies, but most users become comfortable after a few hours of practice."
//   },
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-2xl">
//         <h2 className="text-center text-2xl font-bold mb-8">FAQ</h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border rounded-lg bg-white shadow-sm"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="flex items-center justify-between w-full p-4 text-left text-gray-800 font-medium"
//               >
//                 {faq.question}
//                 <ChevronDown
//                   className={`h-5 w-5 transform transition-transform ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {openIndex === index && (
//                 <div className="px-4 pb-4 text-gray-600 text-sm">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



const FAQSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">FAQ</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-700 font-semibold">Can I trial Webflow before paying?</h3>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-700 font-semibold">What is a project?</h3>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-700 font-semibold">What can I white label?</h3>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-700 font-semibold">How much traffic can the hosting handle?</h3>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-700 font-semibold">What kind of support does Webflow provide?</h3>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-700 font-semibold">How long does it take to learn Webflow?</h3>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
