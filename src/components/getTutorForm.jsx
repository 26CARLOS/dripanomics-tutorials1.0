import { React, useState } from 'react'
import emailjs from 'emailjs-com';
import { BsArrowRight, BsCheckCircle, BsPerson, BsEnvelope, BsPhone, BsBook, BsShieldCheck, BsClock } from 'react-icons/bs'

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
      <section className='py-24 lg:py-32 bg-background min-h-[80vh] flex items-center'>
        <div className='max-w-lg mx-auto px-6 text-center'>
          <div className='bg-card rounded-3xl border border-border p-10 lg:p-14'>
            <div className='w-20 h-20 mx-auto bg-foreground rounded-2xl flex items-center justify-center mb-8'>
              <BsCheckCircle className='w-10 h-10 text-background' />
            </div>
            <h2 className='text-display-sm text-foreground'>
              Request Submitted!
            </h2>
            <p className='mt-4 text-muted-foreground text-lg'>
              Thank you for your interest. Our team will contact you within 24 hours to match you with the perfect tutor.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='py-24 lg:py-32 bg-background'>
      <div className='max-w-5xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-5 gap-12 lg:gap-16'>
          {/* Left Column - Info */}
          <div className='lg:col-span-2'>
            <span className="inline-block text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
              Start Learning
            </span>
            <h1 className='text-display-md text-foreground'>
              Get an Expert
              <span className='block text-muted-foreground'>Tutor</span>
            </h1>
            <p className='mt-6 text-muted-foreground text-lg'>
              Fill out the form and we&apos;ll match you with the perfect tutor for your needs.
            </p>

            {/* Trust indicators */}
            <div className='mt-10 space-y-4'>
              <div className='flex items-center gap-4 text-foreground'>
                <div className='w-12 h-12 flex items-center justify-center bg-muted rounded-xl'>
                  <BsShieldCheck className='w-5 h-5' />
                </div>
                <div>
                  <div className='font-semibold'>No Commitment</div>
                  <div className='text-sm text-muted-foreground'>Free consultation</div>
                </div>
              </div>
              <div className='flex items-center gap-4 text-foreground'>
                <div className='w-12 h-12 flex items-center justify-center bg-muted rounded-xl'>
                  <BsClock className='w-5 h-5' />
                </div>
                <div>
                  <div className='font-semibold'>Fast Response</div>
                  <div className='text-sm text-muted-foreground'>Reply within 24 hours</div>
                </div>
              </div>
              <div className='flex items-center gap-4 text-foreground'>
                <div className='w-12 h-12 flex items-center justify-center bg-muted rounded-xl'>
                  <BsCheckCircle className='w-5 h-5' />
                </div>
                <div>
                  <div className='font-semibold'>Expert Match</div>
                  <div className='text-sm text-muted-foreground'>Personalized tutor pairing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className='lg:col-span-3'>
            <div className='bg-card rounded-3xl border border-border p-8 lg:p-10 shadow-soft'>
              <form className='space-y-6' onSubmit={handleSubmit}>
                {/* Name Input */}
                <div>
                  <label className='block text-sm font-semibold text-foreground mb-3'>
                    Full Name
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none'>
                      <BsPerson className='w-5 h-5 text-muted-foreground' />
                    </div>
                    <input
                      type="text"
                      placeholder='Enter your full name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className='w-full pl-14 pr-5 py-4 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all'
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className='block text-sm font-semibold text-foreground mb-3'>
                    Email Address
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none'>
                      <BsEnvelope className='w-5 h-5 text-muted-foreground' />
                    </div>
                    <input
                      type="email"
                      placeholder='Enter your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className='w-full pl-14 pr-5 py-4 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all'
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label className='block text-sm font-semibold text-foreground mb-3'>
                    Phone Number
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none'>
                      <BsPhone className='w-5 h-5 text-muted-foreground' />
                    </div>
                    <input
                      type="tel"
                      placeholder='Enter your phone number'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className='w-full pl-14 pr-5 py-4 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all'
                    />
                  </div>
                </div>

                {/* Module Select */}
                <div>
                  <label className='block text-sm font-semibold text-foreground mb-3'>
                    Select Module
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none'>
                      <BsBook className='w-5 h-5 text-muted-foreground' />
                    </div>
                    <select
                      value={module}
                      onChange={(e) => setModule(e.target.value)}
                      required
                      className='w-full pl-14 pr-5 py-4 bg-background border border-border rounded-2xl text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all appearance-none cursor-pointer'
                    >
                      <option value="">Select a module...</option>
                      {moduleOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className='absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none'>
                      <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className='group w-full flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background font-semibold rounded-2xl hover:shadow-strong disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 mt-8'
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetTutorForm
