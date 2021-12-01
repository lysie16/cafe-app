import "./styles.css";
import {useEffect, useState, useContext } from 'react';
import { CoffeeItem } from "../../CoffeeItem";
import CoffeeOrderContext from "../../../context/coffeeOrderContext";

export const CafeHomePage = () => {

    const [coffee, setCoffee] = useState([]);

    const globalState = useContext(CoffeeOrderContext);

    useEffect(
        () => {
            getCoffee();
        }, []
    );

    const getCoffee = async() => {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/pets-api-40916/databases/(default)/documents/pets');
            const data = await response.json();
            console.log(data);
            const formattedData = data.documents.map((item) => {
                return item.fields
            });

            console.log(formattedData);
            setCoffee(formattedData);
            globalState.initializeCoffee(formattedData);


        } catch(err) {
            console.log (err)
        }
    }

    return (
        <div className="coffee-page">
        <h1 className="coffee-title">All Coffee</h1>
         <div className="coffee-container">
            { 
            coffee.map( (coffee) => (
                 <CoffeeItem key={coffee.id.stringValue} image={coffee.image.stringValue} name={coffee.name.stringValue} id={coffee.id.stringValue}>
                     {/* change these in the API (cafe-app) // size={coffee.size.stringValue} price={coffee.price.stringValue}  type={coffee.coffeeType.stringValue}*/}

                 </CoffeeItem>
             ))
           }
         </div>
     </div>
    );
};