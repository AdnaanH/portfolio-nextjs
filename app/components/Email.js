import React from 'react'

const Email = () => {
  return (
    <section className='grid md:grid-cols-2 mt-12 place-content-center md:my-12 pt-24 gap-4'>
        <div className='place-content-center'>
            <h5 className='text-xl font-bold text-[#FCA311] my-2'>Connect with me</h5>
            <p className='text-[#14213D]'>
                I am always looking for exciting new project opportunities, Reach out to me and I will 
                try my best to get back to you!
            </p>
        </div>
        <div>
            <form action="" className='flex flex-col'>
                <div className="mb-6">
                    <label htmlFor="email" className='text-[#14213D] block text-sm mb-2 font-medium'>Email</label>
                    <input type="email" id='email' required placeholder='abc123@example.com'
                        className='bg-transparent border border-[#14213D] placeholder-[#FCA311] text-[#14213D] text-sm rounded-lg p-2 block w-full '
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className='text-[#14213D] block text-sm mb-2 font-medium'>Email</label>
                    <input type="text" id='subject' placeholder='Admin Panel Design'
                        className='bg-transparent border border-[#14213D] placeholder-[#FCA311] text-[#14213D] text-sm rounded-lg p-2 block w-full '
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className='text-[#14213D] block text-sm mb-2 font-medium'>Message</label>
                    <textarea name="message" id="message" className='bg-transparent border border-[#14213D] p-2 w-full placeholder-[#FCA311]' placeholder='Your Message'></textarea>
                </div>
                <button
                    type='submit'
                    className='bg-[#14213D] hover:bg-transparent text-[#FCA311] font-medium py-2 px-5 rounded-lg block w-full '
                >
                    SEND
                </button>
                
            </form>
        </div>

    </section>
  )
}

export default Email
