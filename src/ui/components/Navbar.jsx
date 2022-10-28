import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/motos"
                    >
                        Motos
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/autos"
                    >
                        Autos
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/search"
                    >
                        Buscar
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/searchC"
                    >
                        Buscar por código
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary">
                        Eze Decan
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}