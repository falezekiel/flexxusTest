import { heroes } from '../data/heroes';


export const getHeroesByPublisher = ( tipo ) =>{

    const validPublishers = ['auto','moto'];
    if ( !validPublishers.includes( tipo ) ) {
        throw new Error(`${ tipo } is not a valid tipo`);
    }

    return heroes.filter( heroe => heroe.tipo === tipo );
}


