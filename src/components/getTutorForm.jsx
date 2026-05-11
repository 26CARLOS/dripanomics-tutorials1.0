import { React, useState } from 'react'
import emailjs from 'emailjs-com';
import { BsArrowRight, BsCheckCircle, BsPerson, BsEnvelope, BsPhone, BsBook } from 'react-icons/bs'

const GetTutorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [module, setModule] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_k16mbtm";
    const templateId = "template_j7q2jqz";
    const publicKey = "aWUp0yhPlGpd7on-e";

    const templateParams = {
      from_name: name,
      from_email: email,
      req_module: module,
      user_phone: phone,
      to_name: 'dripanomics tutorials',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((Response) => {
        console.log('Email sent successfully!', Response);
        setName('');
        setEmail('');
        setPhone('');
        setModule('');
        setIsSuccess(true);
        setIsSubmitting(false);
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch((error) => {
        console.error('Error sending email', error);
        setIsSubmitting(false);
        alert('Something went wrong. Please try again.');
      });
  }

  const moduleOptions = [
    'Accounting A', 'Accounting B', 'Accounting 1A', 'Accounting 1B', 'Accounting 2A',
    'Accounting Studies 200', 'Analytical techniques 1A', 'Analytical techniques 1B',
    'Basic Maths & Application in Economics & Business A', 'Basic Maths & Application in Economics & Business B',
    'Business Management 1A', 'Business Management 1B', 'Commercial Law 1A', 'Commercial Law 1B',
    'Computer Science 1A', 'Computer Science 1B', 'Economics 1A', 'Economics 2C', 'Economics 2D',
    'Financial-Management 1A', 'Financial-Management 1B', 'Financial-Management 2A',
    'Financial Reporting Analysis & Management A', 'Financial Reporting Analysis & Management B',
    'Governance and Control', 'Human Resource Management 1A', 'Human Resource Management 1B',
    'Industrial Psychology 1A', 'Industrial Psychology 1B', 'Management Accounting',
    'Marketing 1A', 'Marketing 1B', 'Psychology 1A', 'Psychology 1B', 'Research Modules 2nd year',
    'Taxation 200', 'Taxation 2A', 'Taxation 2B'
  ];

  if (isSuccess) {
    return (
      <section className='py-20 lg:py-32 bg-background'>
        <div className='max-w-lg mx-auto px-4 text-center'>
          <div className='bg-card rounded-2xl border border-border p-8 sm:p-12'>
            <div className='w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6'>
              <BsCheckCircle className='w-8 h-8 text-green-600' />
            </div>
            <h2 className='font-display font-bold text-2xl text-foreground'>
              Request Submitted!
            </h2>
            <p className='mt-4 text-muted-foreground'>
              Thank you for your interest. Our team will contact you shortly to match you with the perfect tutor.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='py-20 lg:py-32 bg-background'>
      <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-10'>
          <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
            Start Learning
          </span>
          <h1 className='font-display font-bold text-3xl sm:text-4xl text-foreground mt-3'>
            Get an Experienced Tutor
          </h1>
          <p className='mt-4 text-muted-foreground'>
            Fill out the form below and we will match you with the perfect tutor for your needs.
          </p>
        </div>

        {/* Form Card */}
        <div className='bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-soft'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label className='block text-sm font-medium text-foreground mb-2'>
                Full Name
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                  <BsPerson className='w-5 h-5 text-muted-foreground' />
                </div>
                <input
                  type="text"
                  placeholder='Enter your full name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all'
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className='block text-sm font-medium text-foreground mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                  <BsEnvelope className='w-5 h-5 text-muted-foreground' />
                </div>
                <input
                  type="email"
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all'
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label className='block text-sm font-medium text-foreground mb-2'>
                Phone Number
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                  <BsPhone className='w-5 h-5 text-muted-foreground' />
                </div>
                <input
                  type="tel"
                  placeholder='Enter your phone number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className='w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all'
                />
              </div>
            </div>

            {/* Module Select */}
            <div>
              <label className='block text-sm font-medium text-foreground mb-2'>
                Select Module
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                  <BsBook className='w-5 h-5 text-muted-foreground' />
                </div>
                <select
                  value={module}
                  onChange={(e) => setModule(e.target.value)}
                  required
                  className='w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer'
                >
                  <option value="">Select a module...</option>
                  {moduleOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className='w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 group'
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <span>Submit Request</span>
                  <BsArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className='flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground'>
          <div className='flex items-center gap-2'>
            <BsCheckCircle className='w-4 h-4 text-green-600' />
            <span>No commitment required</span>
          </div>
          <div className='flex items-center gap-2'>
            <BsCheckCircle className='w-4 h-4 text-green-600' />
            <span>Response within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetTutorForm
