import React from 'react'

const Contact = () => {
    const handleFromSubmit=(formData)=>{
        console.log(formData.entries());
        const fromInputData=Object.fromEntries(formData.entries())
console.log(fromInputData, 'test');

    }
  return (
    <section className='section-contact'>
        <h2 className='container-title'>
            Contact Us

        </h2>
        <div className='contact-wrapper container'>

        <form action={handleFromSubmit}>
            <input type="text"   className='form-control' placeholder='Enter Your name' autoComplete='off' name="username"/>
            <input type="text"   className='form-control' placeholder='Enter Your email' autoComplete='off' name="email"/>
            <textarea
            className='form-control'
            rows={10}
            placeholder='Enter your message'
            name="message"
            required
            autoComplete='off'
            >

            </textarea>
            <button type="submit" value="send">Send</button>
        </form>
        </div>

    </section>
  )
}

export default Contact