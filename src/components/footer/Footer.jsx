import {Link} from 'wouter';
import './Footer.css';

function Footer () {

    return(
        <footer className='flex flex-col gap-3 justify-center sticky bottom-0 py-4'>
           <ul className='flex gap-6 justify-center'>
           <li className='nav-zoom' >
            <Link href='/' className={(active) => (active ? 'active-navbar ' : '')} >Start</Link>
            </li>
            <li className='nav-zoom' >
                <Link href='/Instructions' className={(active) => (active ? 'active-navbar ' : '')}>Instructions</Link>
            </li>
            <li className='nav-zoom' >
                <Link href='/Progress' className={(active) => (active ? 'active-navbar ' : '')} >Progress</Link>
            </li>
            <li className='nav-zoom' >
            <Link href='/Tips' className={(active) => (active ? 'active-navbar ' : '')} >Tips</Link>
            </li>
           </ul>

           <p className='copyrights flex justify-center'>&copy; Lenika Nuffer, 2024</p>
           <p className='sound flex justify-center'>Sound from <a href='https://www.zapsplat.com/'> &nbsp;zapsplat.com</a></p>
        </footer>
    )
}

export default Footer