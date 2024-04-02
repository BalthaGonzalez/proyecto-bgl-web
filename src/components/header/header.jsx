import Menu from '../menu/menu';
import './_header.scss';

export default function Header() {
    return (
        <section>
            <header className='header border-b border-black h-24 flex items-center justify-evenly'>
                <Menu />
            </header>
        </section>

    );
}