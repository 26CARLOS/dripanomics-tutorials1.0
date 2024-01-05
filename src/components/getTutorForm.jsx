import {React, useState} from 'react'
import emailjs from 'emailjs-com';

const GetTutorForm = () => {

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[phone, setPhone] = useState();
    const[module, setModule] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const serviceId = "service_k16mbtm";
        const templateId = "template_j7q2jqz";
        const publicKey = "aWUp0yhPlGpd7on-e";

        const templateParams ={
            from_name: name,
            from_email: email,
            req_module: module,
            user_phone: phone,
            to_name: 'dripanomics tutorials',
        };
        emailjs.send(serviceId,templateId,templateParams, publicKey)
        .then((Response) =>{
            console.log('Email sent succesfully!', Response);
            setName('');
            setEmail('');
            setPhone('');
            setModule('');
             alert("Sent Succesfuly!");
        })
        .catch((error) =>
        console.error('Error sending email', error));
        
    }

    const getSelectedValue = (e) => {
        // Set the selected value to the state
        setModule(e.target.value);
    };

  return (
    <div className='mt-[95px] mb-[85px]'>
        <div className='text-black text-center py-2'>
            <h1 className='text-4xl font-medium py-6'>Get an expericed tutor today!</h1>
        </div>
        <form className='flex flex-col justify-center items-center gap-6' onSubmit={handleSubmit}>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
            <p className='px-2 py-2 text-gray-500'> Please Select a Module below:</p>
            <select  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={module} onChange={(e) => getSelectedValue(e)} required>
                <option>Accounting A</option>
                <option>Accounting B</option>
                <option>Accounting 1A</option>
                <option>Accounting 1B</option>
                <option>Accounting Studies 200</option>
                <option>Analytical techniques 1A</option>
                <option>Analytical techniques 1B</option>
                <option>Business Management 1A</option>
                <option>Business Management 1B</option>
                <option>Computer Science 1A</option>
                <option>Computer Science 1B</option>
                <option>Economics 1A</option>
                <option>Economics 2C</option>
                <option>Economics 2D</option>
                <option>Financial-Management 1A</option>
                <option>Financial-Management 1B</option>
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
            <button type="submit" className='bg-gray-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Submit</button>
        </form>
    </div>
  )
}

export default GetTutorForm