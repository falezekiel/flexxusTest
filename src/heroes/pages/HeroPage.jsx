import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';


export const HeroPage = () => {

  const { codigo } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( codigo ), [ codigo ]); 

  const onNavigateBack = () => {
    navigate(-1);
  }


  if ( !hero ) {
    return <Navigate to="/motos" />
  }
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ `/assets/heroes/${ codigo }.jpg` } 
          alt={ hero.nombre }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ hero.nombre }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Precio:</b> { hero.precio } </li>
          <li className="list-group-item"> <b>Tipo:</b> { hero.tipo } </li>
          <li className="list-group-item"> <b>Descripcion:</b> { hero.descripcion } </li>
        </ul>

        <h5 className="mt-3"> Marca </h5>
        <p>{ hero.marca }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
