import React, {useState} from 'react'
import emailjs from 'emailjs-com';

const BecomeTutor = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[degree,setDegree] = useState('');
  const[module, setModule] = useState('');
  const[yos,setYos] = useState('');
  const[extraModule,setExtraModule] = useState('');

  const handleSubmit = (e) =>{
      e.preventDefault();

      const serviceId = "service_k16mbtm";
      const templateId = "template_9x193s4";
      const publicKey = "aWUp0yhPlGpd7on-e";

      const templateParams ={
          from_name: name,
          from_email: email,
          req_module: module,
          tutor_phone: phone,
          tutor_degree: degree,
          year_ofStudy:yos,
          extra_modules: extraModule,
          to_name: 'dripanomics tutorials',
      };
      
      emailjs.send(serviceId,templateId,templateParams, publicKey)
      .then((Response) =>{
          console.log('Email sent succesfully!', Response);
          console.log({module});
          setName('');
          setEmail('');
          setPhone('');
          setDegree('');
          setYos('');
          setModule('');
          setExtraModule('');
      })
      .catch((error) =>
      console.error('Error sending email', error));
      
  }

//   const getSelectedValue = (event) => {
//     const selectedValue = event.target.value;
//     // Do something with the selected value
//     console.log(selectedValue);
//   };

  return (
<div className='max-w-[800px] w-full h-[110vh] mx-auto text-center flex flex-col mt-[65px] mb-[85px]' >
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6 text-black'>
            Join The Team:
            <div className='flex flex-col justify-center items-center'>
            <p className='px-2 py-2 text-gray-500 text-justify text-xs'>Become a tutor with Dripanomics Tutorials, today!</p>
            </div>
        </h1>
        <form className='flex flex-col justify-center items-center gap-6' onSubmit={handleSubmit}>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Degree(e.g Bcom Accounting)' value={degree} onChange={(e)=>setDegree(e.target.value)} required/>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Year of study' value={yos} onChange={(e)=>setYos(e.target.value)} required/>
            <p className='px-2 py-2 text-gray-500'> Please Select a Module You Want To Tutor below:</p>
            <select  className=" w-[350px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center" value={module} onChange={(e) => setModule(e.target.value)} defaultValue='Accounting A' required>
                <option>--Select an Option--</option>
                <option>Accounting A</option>
                <option>Accounting B</option>
                <option>Accounting 1A</option>
                <option>Accounting 1B</option>
                <option>Accounting 2A</option>
                <option>Accounting Studies 200</option>
                <option>Analytical techniques 1A</option>
                <option>Analytical techniques 1B</option>
                <option>Basic Maths & Application in Economics & Business A</option>
                <option>Basic Maths & Application in Economics & Business B</option>
                <option>Business Management 1A</option>
                <option>Business Management 1B</option>
                <option>Computer Science 1A</option>
                <option>Computer Science 1B</option>
                <option>Economics 1A</option>
                <option>Economics 2C</option>
                <option>Economics 2D</option>
                <option>Financial-Management 1A</option>
                <option>Financial-Management 1B</option>
                <option>Financial-Management 2A</option>
                <option>Human Resource Management 1A</option>
                <option>Human Resource Management 1B</option>
                <option>Industrial Psychlogy 1A</option>
                <option>Industrial Psychlogy 1B</option>
                <option>Marketing 1A</option>
                <option>Marketing 1B</option>
                <option>Psychology 1A</option>
                <option>Psychology 1B</option>
                <option>Psychology 1B</option>
                <option>Research Modules 2nd year</option>
                <option>Taxation 200</option>
                <option>Taxation 2A</option>
                <option>Taxation 2B</option>
            </select>
            <textarea className="shadow appearance-none border w-[250px] h-[200px] rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Please specify any additional modules that you can tutor.' value={extraModule} onChange={(e)=>setExtraModule(e.target.value)} />
            <button type="submit" className='bg-gray-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Submit</button>
        </form>
    </div>
    
  )
}

export default BecomeTutor;