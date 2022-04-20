import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const form: any = useRef();
  const [error, setError]: any = useState({});
  const [loading, setLoading]: any = useState(false);
  const [success, setSuccess]: any = useState(false);

  const onInputChange = (e: any) => {
    const { name } = e.target;
    setError((prevData: any) => ({
      ...prevData,
      [name]: false,
    }));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    let pass = true;
    if (e.target.to_name.value.length <= 0) {
      setError((prevState: any) => ({
        ...prevState,
        to_name: true,
      }));
      pass = false;
      setLoading(false);
    }
    if (e.target.from_name.value.length <= 0) {
      setError((prevState: any) => ({
        ...prevState,
        from_name: true,
      }));
      pass = false;
      setLoading(false);
    }
    if (e.target.message.value.length <= 0) {
      setError((prevState: any) => ({
        ...prevState,
        message: true,
      }));
      pass = false;
      setLoading(false);
    }
    if (pass) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current,
          process.env.NEXT_PUBLIC_USER_ID as string
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
              e.target.message.value = '';
              e.target.from_name.value = '';
              e.target.to_name.value = '';
            }, 1530);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'>
      <div className='relative'>
        {success && (
          <div className='absolute h-full w-full flex '>
            <div className='m-auto'>
              <img src='./success.gif' width='50%' className='text-center m-auto rounded-md' alt='' />
            </div>
          </div>
        )}

        <form ref={form} onSubmit={sendEmail}>
          <div className='mb-6'>
            <input
              type='text'
              name='to_name'
              id='to_name'
              onChange={onInputChange}
              className={`px-3 py-2 rounded-md w-full bg-gray-900 border-2 ${error['to_name'] ? 'focus:outline-none border-red-900' : 'border-purple-900'} `}
              placeholder='Full name*'
            />
          </div>
          <div className='mb-6'>
            <input
              type='email'
              name='from_name'
              onChange={onInputChange}
              id='from_name'
              className={`px-3 py-2 rounded-md w-full bg-gray-900 border-2 ${error['from_name'] ? 'focus:outline-none border-red-900' : 'border-purple-900'} `}
              placeholder='Email*'
            />
          </div>
          <div className='mb-6'>
            <textarea
              cols={30}
              rows={7}
              onChange={onInputChange}
              name='message'
              id='message'
              className={`px-3 py-2 rounded-md w-full bg-gray-900 border-2 ${error['message'] ? 'focus:outline-none border-red-900' : 'border-purple-900'} `}
              placeholder='Message*'
            ></textarea>
            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
          </div>
          <div className=''>
            <button disabled={loading} type='submit' className='bg-purple-900 px-10 py-2 rounded-md'>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className=' h-full'>
        <img src='./contact.png' className='sm:-mt-10' height='100%' width='100%' alt='' />
      </div>
    </div>
  );
};

export default Contact;
