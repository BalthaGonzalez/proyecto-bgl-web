import Menu from '../menu/menu';
import './_header.scss';

export default function Header() {
    return (
        <header className='border-b border-black h-14 flex items-center justify-center'>
            <Menu />
        </header>
    )
}