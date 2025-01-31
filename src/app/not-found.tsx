import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="text-center">
          <p className=" font-semibold text-indigo-600 text-[60px]">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Pagina No Encontrada
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
                
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            <Link href="/">Pagina Inicio</Link>
            </a>
            
          </div>
        </div>
    
    
  )
}