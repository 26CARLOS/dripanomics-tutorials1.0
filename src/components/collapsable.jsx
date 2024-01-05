import { Accordion } from '@ark-ui/react'
import { ChevronDownIcon } from 'lucide-react'

const Collapsible = () => {
    const faqs =[
        {question:'What modules do you offer tutoring in?',
        answer:'We offer tutoring services in a wide range of modules, including but not limited to accounting, analytical techniques, business studies, financial management, human resource management, marketing and psychology. Our team of experienced tutors covers a diverse array of academic disciplines.'},

        {question:'How can I find the right tutor for my needs?',
        answer:'You can browse through our tutor profiles on the website to find the best match for your requirements. Each tutor profile includes information about their expertise, teaching style, and availability.'},

        {question:'What grade levels do you cater to?',
        answer:'Our tutoring services are available for students from university level. We have tutors who specialize in different university levels and academic curricula.'},

        {question:'How do I schedule a tutoring session?',
        answer:'Scheduling a tutoring session is easy! Simply provide your details and one of consultants will contact you to schedule a session. You can also contact our support team for assistance in scheduling sessions.'},

        {question:'What is the duration of each tutoring session?',
        answer:'Our standard tutoring sessions are 60 minutes or more long, but we also offer the flexibility to extend sessions if needed. Discuss your preferences with your tutor to ensure the best learning experience.'},

        {question:'Do you offer group tutoring sessions?',
        answer:'Yes, we do offer group tutoring sessions. Group sessions are a great option for students who prefer collaborative learning or want to study with classmates. The group size can vary, and rates are adjusted accordingly.'},

        {question:'How do I pay for tutoring sessions?',
        answer:'Payments can be made securely through manual eft.'},

        {question:'Can I request a specific tutor for ongoing sessions?',
        answer:'Absolutely! If you find a tutor who fits your needs and teaching style preferences, you can request them for ongoing sessions. We strive to provide consistency and ensure a productive learning experience.'},

        {question:'How do I provide feedback on my tutoring sessions?',
        answer:'We value your feedback! After each session, you will have the opportunity to provide feedback through your tutor We use this feedback to continually improve our services.'},
    ]
  return (
    <Accordion.Root>
      {faqs.map((item, id) => (
        <Accordion.Item key={id} value={item}>
          <Accordion.ItemTrigger>
            {item.question}
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item.answer}
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default Collapsible;