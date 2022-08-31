import React from 'react'
import {CardPokemon} from './CardPokemon';
import '../estilos/styles.css';

export const Card = ({results}) => {
  return (
    <main className='main'>
        <section className='cards'>
            <div className='card__container'>
                <h1 className='title'>Pokemons</h1>
                <article className='card__body'>
                    <div>
                        {
                            results.map(p => (
                                <div key={p.name} className='card__item'>
                                    <CardPokemon url = {p.url} />
                                </div>
                            ))
                        }
                    </div>
                </article>
            </div>
        </section>
    </main>
  )
}

export default Card