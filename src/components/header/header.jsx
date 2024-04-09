import Menu from '../menu/menu';
import './_header.scss';

export default function Header() {
    return (
        <header className='border-b h-16 flex items-center justify-center w-full'>
            <Menu />
        </header>
    )
}