import { useState } from "react";
import React from 'react'
import { BsChevronDown } from "react-icons/bs";

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
      <div className='text-center mb-12'>
        <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
          Got Questions?
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-3">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-muted-foreground">
          Find answers to common questions about our tutoring services
        </p>
      </div>

      {/* FAQ Items */}
      <div className='space-y-3'>
        {faqs.map((item, index) => (
          <div 
            key={index}
            className={`bg-card rounded-xl border transition-all duration-200 ${
              openIndex === index 
                ? 'border-primary/30 shadow-soft' 
                : 'border-border hover:border-border/80'
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className='w-full flex items-center justify-between p-5 text-left'
            >
              <span className={`font-medium pr-4 ${
                openIndex === index ? 'text-foreground' : 'text-foreground/80'
              }`}>
                {item.question}
              </span>
              <div className={`flex-shrink-0 p-1 rounded-full transition-all duration-200 ${
                openIndex === index ? 'bg-primary text-primary-foreground rotate-180' : 'bg-muted text-muted-foreground'
              }`}>
                <BsChevronDown className="w-4 h-4" />
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}>
              <p className='px-5 pb-5 text-muted-foreground leading-relaxed'>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accordion;
