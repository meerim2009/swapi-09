import React, { useState, useEffect } from 'react';
import SwapiService from "../../services/swapi-service";
import './item-list.css';

const ItemList = ({setSelectedItem}) => {
    const [data, setData] = useState([]);
    const swapi = new SwapiService();

    useEffect(() => {
        swapi.getAllPeople().then(data => setData(data))
    }, [])

    const elements = data.map((person) => {
        return(
            <li
                key={person.id}
                className="list-group-item"
                onClick={() => setSelectedItem(person.id)}
            >
                {person.name}
        </li>
        )
    })
    return (
      <ul className="item-list list-group">
          {elements}
      </ul>
    );
}

export default ItemList;
