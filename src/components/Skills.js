import React from 'react'
import CSS from "../assets/css.png"
import HTML from "../assets/html.png"
import JAVASCRIPT from "../assets/javascript.png"
import REACT from "../assets/react.png"
import TAILWIND from "../assets/tailwind.png"
import MONGO from "../assets/mongo.png"
import NODE from "../assets/node.png"
import Express from "../assets/Express.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl inline border-b-4 border-green-600'>Skills</p>
                <p className='py-4'>These are the technologies I work with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} alt='hmtl' className='w-20 mx-auto' />
                    <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CSS} alt='css' className='w-20 mx-auto' />
                    <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JAVASCRIPT} alt='javascript' className='w-20 mx-auto' />
                    <p className='my-4'>JAVASCRIPT</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={REACT} alt='react' className='w-20 mx-auto' />
                    <p className='my-4'>REACT</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={TAILWIND} alt='tailwind' className='w-20 mx-auto' />
                    <p className='my-4'>TAILWIND</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={MONGO} alt='mongo' className='w-20 mx-auto' />
                    <p className='my-4'>MONGO</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={NODE} alt='node' className='w-20 mx-auto' />
                    <p className='my-4'>NODE</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Express} alt='express' className='w-40 mx-auto mb-2' />
                    <p className='my-7'>EXPRESS</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Skills