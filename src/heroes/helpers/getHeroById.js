import { heroes } from '../data/heroes';


export const getHeroById = ( codigo = '' ) => {

    codigo = codigo.toLocaleLowerCase().trim();

    if ( codigo.length === 0 ) return [];

    return heroes.filter(
        hero => hero.codigo.toLocaleLowerCase().includes( codigo ) 
    );
}