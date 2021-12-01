import "./styles.css";
import {useEffect, useState, useContext } from 'react';
import { CoffeeItem } from "../../CoffeeItem";
import CoffeeOrderContext from "../../../context/coffeeOrderContext";
import { Search } from '../../Search';

export const CafeHomePage = () => {

    const [coffee, setCoffee] = useState([]); 
    const [filteredCoffee, setFilteredCoffee] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchString, setSearchString] = useState('');

    const globalState = useContext(CoffeeOrderContext);

    useEffect(
        () => {
            getCoffee();
        }, []
    );

    useEffect (
        () => {
            handleSearchByName();
        }, [searchString]
    )

    const handleSearchByName = () => {
        // id search string was empty, dont filter and show all coffees
        if(searchString === '') {
            setFilteredCoffee(coffee);
            return;
        }

        //filter
        const coffeeFiltered = coffee.filter(
            (coffee) => {
                const name = coffee.name?.stringValue.toLowerCase();
                const isMatch = name.indexOf(searchString.trim().toLowerCase());

                return isMatch !== -1; 
            }
        )
        setFilteredCoffee(coffeeFiltered);
    }

    const getCoffee = async() => {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/cafe-app-a223b/databases/(default)/documents/coffee');
            const data = await response.json();
            console.log(data);
            const formattedData = data.documents.map((item) => {
                return item.fields
            });

            console.log(formattedData);
            setCoffee(formattedData);
            setFilteredCoffee(formattedData);
            globalState.initializeCoffee(formattedData);
            setLoading(false); 


        } catch(err) {
            console.log (err)
            setLoading(false);
        }
    }

    const handleSearchUpdate = (event) => {
        setSearchString(event.target.value);
    }

    return (
        <div className="coffee-page">
            {searchString}
        <h1 className="coffee-title">All Coffee</h1>
        <Search handleSearchUpdate={handleSearchUpdate} />
         <div className="coffee-container">
            { 
            filteredCoffee.map( (coffee) => (
                 <CoffeeItem key={coffee.id?.stringValue} image={coffee.image?.stringValue} name={coffee.name?.stringValue} id={coffee.id?.stringValue}
                  size={coffee.size?.stringValue} price={coffee.price?.stringValue}  type={coffee.coffeeType?.stringValue}>
                 </CoffeeItem>
             ))
           }
           {
              !loading && filteredCoffee.length === 0 && <p>Nothing found for {searchString}!</p>
           }

           {
               loading && <p>Loading data...</p>
           }
         </div>
     </div>
    );
};