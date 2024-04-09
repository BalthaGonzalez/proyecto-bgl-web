import Biography from '../../components/biography/biography';
import Alertbutton from '../../components/alertbutton/alertbutton';

export const Cv = () => {
    return (
        <div className='h-full flex items-center'>
            <div className='flex flex-col justify-center'>
                < Biography />
                <div className='btn__wrapper flex justify-center w-full'>
                    < Alertbutton />
                </div>
            </div>
        </div>
    )
}
