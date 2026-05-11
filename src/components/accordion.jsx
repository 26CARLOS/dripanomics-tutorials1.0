import { useState } from "react";
import React from 'react'
import { BsChevronDown, BsQuestionCircle } from "react-icons/bs";

const faqs = [
  {
    question: 'What modules do you offer tutoring in?',
    answer: 'We offer tutoring services in a wide range of modules, including but not limited to accounting, analytical techniques, business studies, financial management, human resource management, marketing and psychology. Our team of experienced tutors covers a diverse array of academic disciplines.'
  },
  {
    question: 'How can I find the right tutor for my needs?',
    answer: 'You can browse through our tutor profiles on the website to find the best match for your requirements. Each tutor profile includes information about their expertise, teaching style, and availability.'
  },
  {
    question: 'What grade levels do you cater to?',
    answer: 'Our tutoring services are available for students at university level. We have tutors who specialize in different university levels and academic curricula.'
  },
  {
    question: 'How do I schedule a tutoring session?',
    answer: 'Scheduling a tutoring session is easy! Simply provide your details and one of our consultants will contact you to schedule a session. You can also contact our support team for assistance in scheduling sessions.'
  },
  {
    question: 'What is the duration of each tutoring session?',
    answer: 'Our standard tutoring sessions are 60-120 minutes long, but we also offer the flexibility to extend sessions if needed. Discuss your preferences with your tutor to ensure the best learning experience.'
  },
  {
    question: 'Do you offer group tutoring sessions?',
    answer: 'Yes, we do offer group tutoring sessions. Group sessions are a great option for students who prefer collaborative learning or want to study with classmates. The group size can vary, and rates are adjusted accordingly.'
  },
  {
    question: 'How do I pay for tutoring sessions?',
    answer: 'Payments can be made securely through manual EFT or ATM cash deposit.'
  },
  {
    question: 'Can I request a specific tutor for ongoing sessions?',
    answer: 'Absolutely! If you find a tutor who fits your needs and teaching style preferences, you can request them for ongoing sessions. We strive to provide consistency and ensure a productive learning experience.'
  },
  {
    question: 'How do I provide feedback on my tutoring sessions?',
    answer: 'We value your feedback! After each session, you have the opportunity to provide feedback by contacting our support team via our official email. We use this feedback to continually improve our services.'
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggleAccordion(index) {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  }

  return (
    <div className='max-w-3xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-12 lg:mb-16'>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground text-background rounded-2xl mb-6">
          <BsQuestionCircle className="w-8 h-8" />
        </div>
        <h2 className="text-display-sm text-foreground">
          Frequently Asked
          <span className="block text-muted-foreground">Questions</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Everything you need to know about our tutoring services
        </p>
      </div>

      {/* FAQ Items */}
      <div className='space-y-4'>
        {faqs.map((item, index) => (
          <div 
            key={index}
            className={`bg-card rounded-2xl border overflow-hidden transition-all duration-300 ${
              openIndex === index 
                ? 'border-foreground/20 shadow-medium' 
                : 'border-border hover:border-border/80'
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className='w-full flex items-center justify-between p-6 text-left'
            >
              <span className={`font-semibold text-lg pr-4 transition-colors ${
                openIndex === index ? 'text-foreground' : 'text-foreground/80'
              }`}>
                {item.question}
              </span>
              <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-foreground text-background rotate-180' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <BsChevronDown className="w-5 h-5" />
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-smooth-out ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className='px-6 pb-6'>
                <div className="h-px bg-border mb-4" />
                <p className='text-muted-foreground leading-relaxed'>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accordion;
