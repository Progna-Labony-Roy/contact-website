import React from 'react';
import Contact from '../Contact/Contact';
import './PageInfo.css'

const PageInfo = () => {
    return (
        <div className="">
            <section className='mt-40 mb-10 mx-20 lg:my-16 flex lg:flex-row flex-col'>
                <div className='lg:w-1/2 lg:pr-60'>
                    <p className='text-sm'>OUR FEATURES</p>
                    <h2 className='text-2xl font-bold my-3'>Know your audience and boost sales</h2>
                    <hr className='hr-line w-60' />
                </div>
                <div className='lg:mt-20 mt-10 mb-10 lg:w-1/2 pl-10'>
                    <p>Effective emails convey the most significant substance to a client at the proper time which is our marketing approaches include scheduled emails.</p>
                </div>
            </section>

            {/* ------- */}
            <section className='p-10 mx-20 flex lg:flex-row flex-col second-section'>
                <div className='lg:w-1/2 lg:mt-10 lg:pr-44'>
                <div>
                    <h2 className='text-xl font-semibold
                    '>Save procious time with automation</h2>
                    <p className='py-3'>Time is very valuable. We all should know the importance of time in our life to get success.</p>
                </div>
                <button className='text-sm'>Learn More</button>
                </div>
                <div>
                    <img className='w-96 lg:mt-0 mt-10' src="https://www.pngall.com/wp-content/uploads/11/Hosting-PNG-Background.png" alt="" />
                </div>
            </section>

            {/* Review */}
           <section className='my-16 px-20 flex-col lg:flex-row flex review-section p-10'>
            <div className='w-1/2 lg:pr-60'>
            <p className='text-sm'>OUR HAPPY CUSTOMERS</p>
            <h2 className='text-2xl font-bold my-3'>What our customers say about us</h2>
            <hr />
            </div>
            <div  className='w-1/2 mt-20 pl-24'>
                <p>The site is very helpful. I had a great experience with their services. Highly recommendable!</p>
                <p>Jane Doe</p>
                <p>Product Specialist, Lorem Co.</p>
            </div>
           </section>
           <Contact></Contact>
        </div>
    );
};

export default PageInfo;