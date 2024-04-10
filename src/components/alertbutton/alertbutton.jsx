function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export default function Alertbutton() {
    return (

        <a href="../src/assets/Curriculum-Vitae.pdf" target="_blank" rel="noopener noreferrer">
            <AlertButton message="Abrir en otra pestaña.">
                <button className="u-color-bgl-white border rounded-lg p-4 ">
                    <span className="relative">CURRICULUM VITAE</span>
                </button>
            </AlertButton>
        </a>

    )
}