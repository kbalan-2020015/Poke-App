import React, {useState} from "react";
import {Search} from '../search'
import { Card } from "../cards/Card";

export const Pokemon = () => {
    const [url] = useState('https://pokeapi.co/api/v2/pokemon');
    const estado = Search(url);
    const {cargando, data} = estado;
    cargando? console.log(''): console.log(data.results);

    return (
        <div>
            {
                cargando
                ?
                <h1>Cargando...</h1>
                :
                <Card results = {data.results} />
            }
        </div>
    )
}