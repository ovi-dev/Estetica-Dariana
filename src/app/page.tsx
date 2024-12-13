import Image from 'next/image';


export default function Home() {
  return (
    <>
    <section className=' container mx-auto space-x-0'>

    
      <div className="flex flex-wrap items-center justify-between p-[10px]">
        {/* Texto alineado a la izquierda */}
        <div className="w-full md:w-1/2">
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
        </div>

        {/* Imagen alineada a la derecha */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center mt-3 md:mt-2">
          <Image
            src="/fotospng/dariana.jpg"
            width={350}
            height={200}
            alt="Dariana Ortiz"
            className="rounded-[90px] shadow-2xl "
          />
        </div>
      </div>
      </section>

      <section>
        <h1> mas todavia </h1>
      </section>
    </>
  );
}
