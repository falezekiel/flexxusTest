import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroById } from '../helpers';

export const SearchPageCodigo = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroById(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;


  const { searchText, onInputChange } = useForm({
    searchText: q
  });



  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);
  }


  return (
    <>
      <h1>Buscar</h1> 
      <hr />

      <div className="row">

          <div className="col-5">
            <h4>Busqueda</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Buscar por código"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-1">
                Buscar
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

            {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}
            
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Sin busquedas...
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hay productos con <b>{ q }</b>
            </div>


            {
              heroes.map( hero => (
                <HeroCard key={ hero.codigo } {...hero } />
              ))
            }

          </div>
      </div>

      
      

    </>
  )
}
