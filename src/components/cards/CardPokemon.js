import React from 'react'
import { Search } from '../search'
import '../estilos/styles.css';

export const CardPokemon = ({url}) => {
    const estado = Search(url);
    const {cargando, data} = estado;

  return (
    <div>
        {
            cargando
            ?
            <h1>Cargando</h1>
            :
            <main className='main'>
                <section className='cards'>
                    <div className='card__container'>
                        <article className='card__body'>
                            <h4 className='card__title'> { data.id } </h4>

                            <h2 className='card__texts'> { data.forms[0].name } </h2>

                            <img src={ data.sprites.front_default } alt='Img' className='card__img'></img>
                        </article>
                    </div>
                </section>
            </main>
        }
    </div>
  )
}