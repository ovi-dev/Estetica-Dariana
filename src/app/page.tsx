'use client'

import Image from 'next/image';

import { motion } from "motion/react"
import { fadeIn2 } from '@/variantes/var';



export default function Home() {
  
  return (
    <>
    <section className=' container mx-auto space-x-0'>

    
      <div className="flex flex-wrap items-center justify-between p-[10px] ">
        {/* Texto alineado a la izquierda */}
        <motion.div 
        variants={fadeIn2('left', 1.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-4 text-center">Dariana Ortiz</h1>
          <p className="text-lg leading-relaxed">
            Siempre he tenido la determinación de luchar por lo que me apasiona,
            es más que un trabajo es mi pasión.
            <br />
            <br />
            Soy experta en rejuvenecimiento facial no quirúrgico, después de muchos tratamientos exitosos,
            lo que más me llena de satisfacción es ver en la cara de mis pacientes la felicidad de verse y sentirse mejor,
            mi enfoque se basa en resultados naturales que potencian y realzan la belleza.
          </p>
        </motion.div>

        {/* Imagen alineada a la derecha */}
        <motion.div 
         variants={fadeIn2('right', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
        
        className="w-full md:w-1/2 flex justify-center md:justify-center mt-3 md:mt-2">
          <Image
            src="/fotospng/dariana.jpg"
            width={350}
            height={200}
            alt="Dariana Ortiz"
            className="rounded-[90px] shadow-2xl "
          />
        </motion.div>
      </div>
      </section>

      <section className='container mx-auto space-x-0'>

        <h1 className=' font-bold text-center mt-20 mb-7 text-4xl'> Nuestro Trabajo </h1>
        <div className="grid grid-cols-2 gap-3">
        <div>
            <Image 
            width={550}
            height={400}
            className="h-auto max-w-full rounded-lg" src="/fotospng/DAV_8805-Editar.png" alt="uno"/>
        </div>
        <div>
            <Image 
             width={550}
             height={200}
            className="h-auto max-w-full rounded-lg" src="/fotospng/DAV_8805-Editar.png" alt=""/>
        </div>
        <div>
            <Image 
             width={550}
             height={200}
            className="h-auto max-w-full rounded-lg" src="/fotospng/DAV_8805-Editar.png" alt=""/>
        </div>
        <div>
            <Image 
             width={550}
             height={200}
            className="h-auto max-w-full rounded-lg" src="/fotospng/DAV_8805-Editar.png" alt=""/>
        </div>
    </div>


      </section>
    </>
  );
}
