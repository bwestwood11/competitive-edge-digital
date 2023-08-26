import Image from 'next/image'
import { BsQuote } from 'react-icons/bs'

const ClientReviews = () => {
  return (
    <div className="w-full sm:h-[600px] h-[1300px] bg-[#F3F4F6] pt-12">
         <div className="max-w-6xl mx-auto">
              <div className="flex flex-col text-center">
                  <h3 className="text-[#1F2937]">Testimonials</h3>
                    <h2 className="font-extrabold text-[#1F2937] text-3xl mt-4">What our client says</h2>
              </div>
              <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 mt-8 px-10">
                <div>
                     <div className="flex flex-col items-center w-full border-gray-50 border-2 bg-white py-5 px-8">
                          <BsQuote className="text-[#4B5563] text-4xl" />
                          <p>
                          I am absolutely blown away by the user-friendly interface and seamless experience of this product. Highly recommend!
                          </p>
                    </div> 
                    <Image
                        src="/user1.png"
                        alt="user1"
                        width={40}
                        height={40}
                        className="mx-auto mt-8"
                    />
                    <h4 className='text-center font-bold'>Kera Joo</h4>
                    <p className="text-center">CEO</p>
                </div>
                <div>
                     <div className="flex flex-col items-center text-white w-full border-gray-50 border-2 bg-[#F68800] py-5 px-8">
                          <BsQuote className="text-white text-4xl" />
                          <p>
                          I had a fantastic experience working with this web development and design team. They were responsive, knowledgeable, and produced a beautiful website for my business. I highly recommend their services!
                          </p>
                    </div> 
                    <Image
                        src="/user2.png"
                        alt="user1"
                        width={40}
                        height={40}
                        className="mx-auto mt-8"
                    />
                    <h4 className='text-center font-bold'>Alen Max</h4>
                    <p className="text-center">Designer</p>
                </div>
                <div>
                     <div className="flex flex-col items-center w-full border-gray-50 border-2 bg-white py-5 px-8">
                          <BsQuote className="text-[#4B5563] text-4xl" />
                          <p>
                          This social media marketing service was incredibly effective in increasing my online presence and driving traffic to my website.
                          </p>
                    </div> 
                    <Image
                        src="/user3.png"
                        alt="user1"
                        width={40}
                        height={40}
                        className="mx-auto mt-8"
                    />
                    <h4 className='text-center font-bold'>Katie</h4>
                    <p className="text-center">Designer</p>
                </div>
                  
                    
              </div>
         </div>
    </div>
  )
}

export default ClientReviews