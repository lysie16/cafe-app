import './styles.css';
import { Button } from '../Button';
import {Link} from 'react-router-dom';

export const CoffeeItem = (props) => {
    
    const {image, name, type, price, size, id} = props;

    return (
        <div className="coffee">
            <img className="coffee-photo" src={image} alt={name + price + "photo"} />

            <Link to={`/coffee/${id}`}>
            <h1 className = "coffee-name"> {name} </h1>
            </Link>

            <p className="coffee-price"> ${price} </p>
            <p className="coffee-size"> {size} </p>

            <Button text="Order" type="primary" isDisabled={false} action={() => alert("Ordered")} />
        </div>
    )
}