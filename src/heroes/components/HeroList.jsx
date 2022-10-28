
import { useMemo } from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ tipo }) => {

    const heroes = useMemo( () => getHeroesByPublisher( tipo ), [ tipo ]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.codigo } 
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
