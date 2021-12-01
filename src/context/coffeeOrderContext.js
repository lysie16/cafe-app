import React, {useState} from 'react';

const CoffeeOrderContext = React.createContext({
    coffee: [],
    order: [],
    initializeCoffee: () => {},
    addCoffeeToOrder: () => {},
    removeCoffeeFromOrder: () => {},
});

export const CoffeeOrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);
    const [coffee, setCoffee] = useState([]);

    const initializeCoffee = (coffeeFromApi) => {
        setCoffee(coffeeFromApi);
    }

    const addCoffeeToOrder = (coffee) => {
        let newOrder = order; 
        newOrder.push (coffee);
        setOrder(order);
    }

    const removeCoffeeFromOrder = (coffeeId) => {
        let prevOrder = order;
        const found = order.findIndex( (coffee ) => {
            return (coffee.id === coffeeId); 
        })
        if (found !== -1) {
            prevOrder.splice(found, 1); // delete one
            setOrder([...prevOrder]);
        } else {
            console.log ("error delete");
        }
    }
    
    return (<CoffeeOrderContext.Provider
     value={{order: order, addCoffeeToOrder: addCoffeeToOrder, removeCoffeeFromOrder: removeCoffeeFromOrder, coffee:coffee, initializeCoffee:initializeCoffee }}
    >
        {props.children}
    </CoffeeOrderContext.Provider>)

} 

export default CoffeeOrderContext;