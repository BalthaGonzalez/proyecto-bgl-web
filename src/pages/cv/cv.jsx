import Header from '../../components/header/header';

function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export const Cv = () => {
    return (
        <>
            <Header />
            <section className='h-screen bg-gradient-to-b from-white from-10% via-slate-200 via-30% to-gray-600 to-90%'>
                <div>
                    <a href="../src/assets/Curriculum-Vitae.pdf" target="_blank" rel="noopener noreferrer">
                        <AlertButton message="Visualizar Curriculum Vitae">
                            <button className="m-1 relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
                                <span className="relative">CV</span>
                            </button>
                        </AlertButton>
                    </a>
                </div>
            </section>
        </>


    )
}
