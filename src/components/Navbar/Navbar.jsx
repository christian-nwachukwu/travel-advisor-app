import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'

const Navbar = () => {
    return(
        <section className='navBarSection'>
            <div className='header'>
                <div className='logoDiv'>
                    <a href="#" className="logo">
                        <h1><SiYourtraveldottv className="icon"/>Safari</h1>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Navbar;