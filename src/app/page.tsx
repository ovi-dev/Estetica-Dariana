
import Image from 'next/image';






export default function Home() {
  return (

   <>
   <div>

      {/* contenido */}
    <div> 
      <p>contenido</p>
    </div>


    {/* Imagen */}
    <div>

    <Image
      src='/fotospng/dariana.jpg'
      width={500}
      height={500}
      alt="Dariana Ortiz"
    />
    </div>


   </div>
   
   </>


  //  redirect('principa/home')
  );
}
