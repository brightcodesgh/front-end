import React from 'react'

const Card = ({username, title}) =>{
  return (
    
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://th.bing.com/th/id/R.d02a90078bd0e35b84e6769e093c8857?rik=EvkqfX6m%2bDOhPQ&pid=ImgRaw&r=0" alt="" width="384" height="512"></img>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipiscing elit libero diam metus, cras hendrerit erat 
          molestie posuere varius non congue vel. Curae imperdiet sed tortor nisi tempus aliquet quam 
          sagittis senectus platea, vestibulum ut morbi ornare nibh suspendisse potenti sem fringilla 
          varius nascetur
          </p>
        </blockquote>
        <figcaption>
          <div>
           {username}
          </div>
          <div>
            {title}
          </div>
        </figcaption>
      </div>
     </figure>

  )
}

export default Card;
