
import React from 'react'
import Image from 'next/image';



const Contacto = () => {
  return (
    <section className='py-7'>
      {/* envuelve todo */}
      <div className='container mx-auto '>
        <div className=' flex flex-col lg:flex-row gap-2'>
          {/* lado izquierdo */}

          <div className='flex flex-col gap-5 justify-start items-center'>
            <p className=' text-xl  font-medium mb-2 tracking-wide'>Dariana Ortiz</p>
            <Image
              className='rounded-[10px]'
              src="/fotospng/DAV_8898-Editar.png" alt="Dariana Ortiz"
              width={400} height={400} />

            <h5>Telefono </h5>

          </div>


          {/* lado derecho */}
          <div className=' mx-auto'>
            <h2 className=' mb-8 text-center  text-xl  font-medium tracking-wide'>CONTACTO</h2>
            <form className='bg-white shadow-md rounded-lg py-10 px-6 mb-10'>
              <div className=' mb-5'>
                <label className="text-sm font-medium">Nombre</label>
                <input
                  className="w-full p-3  border border-gray-600"
                  type="text"
                  placeholder="Nombre"
                />
              </div>
              <div className=' mb-5'>
                <label>Correo</label>
                <input type="email"
                  className="w-full p-3  border border-gray-600"
                  placeholder="Email"
                />
              </div>
              <div className=' mb-5'>
                <label className=' text-sm font-medium'>Mensaje</label>
                <textarea className="w-full p-3  border border-gray-600"></textarea>
              </div>
              <div className=' mb-5'>
                <label>Telefono</label>
                <input type="tel"
                  className="w-full p-3  border border-gray-600"
                  placeholder="Telefono"
                />
              </div>
                <div className=' mb-5'>
                  <input type="checkbox" />
                  <label> <span>  Acepto ley de proteccion de datos</span></label>
                </div>
                <button className=" uppercase  text-sm bg-hovernav m-2 p-2 text-lg rounded-md transition-all hover:bg-green-400">Enviar</button>
              </form>
          </div>


        </div>
      </div>





    </section>
  )
}

export default Contacto

