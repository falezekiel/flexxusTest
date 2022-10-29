import { Link } from 'react-router-dom';

const CharactersByHero = ({ precio, marca}) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return ( precio === marca )
     ? <></>
     : <p>{ marca }</p>;
}

//info card
export const HeroCard = ({ 
    codigo,
    nombre,
    tipo,
    precio,
    descripcion,
    marca ,
}) => {

    const heroImageUrl = `/assets/heroes/${ codigo }.jpg`;

    // const charactesByHero =  (<p>{ characters }</p>);


    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ nombre } />
                    </div>

                    <div className="col-8">

                        <div className="card-body">


                            <h5 className="card-title">Nombre:{ nombre }</h5>
                            <p className="card-text"> Precio:{ precio }</p>
                            <p className='card-tex'>Código: {codigo}</p>

                            {/* {
                                ( alter_ego !== characters ) && charactesByHero
                                ( alter_ego !== characters ) && <p>{ characters }</p>
                            } */}
                            <CharactersByHero marca= { marca } precio={ precio } />

                            <p className="card-text">
                                <small className="text-muted">{ descripcion }</small>
                            </p>

                            
                            
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
