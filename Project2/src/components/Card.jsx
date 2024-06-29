import React from 'react'


// these are the react hook which we can pass to any function for any dynamic change
// here we are using tailwind css for implementing css in code
function Card({username = " Pm ",post = "not assigned yet",salary="0"}) {
  return (
    <div>
     <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/7425346/pexels-photo-7425346.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512"/>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
               {username}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {post}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {salary}
              </div>
             
                          
             </figcaption>
          </div>
        </figure>
    </div>
  )
}

export default Card
