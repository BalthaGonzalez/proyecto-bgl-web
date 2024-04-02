import { Link } from "react-router-dom";

export default function biography() {
    return (
        <article className="m-10 flex-col justify-center items-center text-center">
            <h1>SOBRE MÍ</h1>
            <p className="mt-12">
                Me especializo en diseño de contenidos web, trabajé durante varios años en una compañía de servicios de salud como director de redes sociales, también tengo participación en proyectos de desarrollo web orientado al front-end.
            </p>
            <p className="p-8">
                Cuento con las habilidades necesarias para adaptarme a un grupo de trabajo formado, creo firmemente que el proceso para llegar a un mismo objetivo, se da cuando se comparten ideas y se mantiene un entorno laboral positivo.
            </p>
            <p className="mb-12">
                Estoy en un proceso continuo de crecimiento y aprendizaje, que implica la mejoría en un aspecto fundamental de mi vida, la pasión por la computación y el enfoque a la creación de sistemas para mejorar la experiencia de otras personas.
            </p>
            <div>
                <Link to={`cv`}>
                    <button class="m-1 relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
                        <span class="relative">CV</span>
                    </button></Link>
                <Link to={`portafolio`}>
                    <button class="m-1 relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
                        <span class="relative">PORTAFOLIO</span>
                    </button></Link>
            </div>
        </article>)
}
