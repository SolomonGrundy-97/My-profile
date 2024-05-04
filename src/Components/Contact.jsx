import React from 'react'
import { useState, useRef   } from 'react';


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState('Submit');
  const spinnerRef = useRef(null);


  // CHANGING THE SUBMIT BUTTON TEXT LOGIC...
  const handleButtonClick = () => {

    setTimeout(() => {
      spinnerRef.current.classList.add('d-none');
      setButtonText('Submitted');
      }, 2000);
      setName('');
      setEmail('');
      setText('');
      if (buttonText) {
        setButtonText('Submit');
        spinnerRef.current.classList.remove('d-none')
    };
  }

  return (
    <>

      <section className='semi_dark_color text-white d-flex gap-4 justify-content-center align-itens-center mt-4 p-5' id='contact' aria-label='Contact'>

        <div className='form__part'>
          {/* FORM_SECTION... */}

          <form action="" className='form-control'>
            <div className='name_input'>
              <label htmlFor="name" className='sr-only'>name</label>
              <input
                type="text"
                value={name}
                id="name"
                placeholder='Name'
                className='form-control'
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='email_input'>
              <label htmlFor="email" className='sr-only'>email</label>
              <input
                type="text"
                id="email"
                placeholder='Your email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <textarea name="" id="" cols="30" rows="5" placeholder='Your message' className='textarea form-control'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <button type="button" className='orange_color
              border_orange_color
              text-center
               form-control'
              disabled={!name || !email || !text ? true : false}
              onClick={handleButtonClick}
            >
             {buttonText}
             <div ref={spinnerRef} className="spinner-border orange_color d-none" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
            </button>
          </form>
        </div>
      </section>
      <hr className='horizontal_line_color'/>
    </>
  )
}

export default Contact
