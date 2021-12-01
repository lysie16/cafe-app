import './styles.css';
import {useParams} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CoffeeOrderContext from '../../../context/coffeeOrderContext';

export const CoffeeDetailsPage = (props) => {
    const{id} = useParams();

    const globalState = useContext(CoffeeOrderContext);

    const [coffee, setCoffee] = useState({});

    useEffect ( () => {
        const coffee = globalState.coffee.find(
            (coffee) => coffee.id.stringValue === id
        );
        setCoffee(coffee);
    }, [])

    if (coffee) {
        return (
            <div className="coffee-page">
                <h1 className="coffee-title"> {coffee.name?.stringValue}
                {id} </h1>
                <img src={coffee.image?.stringValue} alt="coffee-photo" />
            </div>
        )
    } else {
        return <p>Not Available</p>
    }
}