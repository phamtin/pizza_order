import { combineReducers } from "redux";

const pizzasReducer = () => {
    return [
        { id: 1, title: "Pizza BBQ", price: 5 },
        { id: 2, title: "Fish oversea", price: 7 },
        { id: 3, title: "Chese mate", price: 6 },
        { id: 4, title: "Chese USA", price: 9 },
        { id: 5, title: "Pizza grid", price: 6 },
        { id: 6, title: "Pizza box", price: 5 },
        { id: 7, title: "Chese mates", price: 8 }
    ];
};

const selectedPizzaReducer = (selectedPizza = [], action) => {
    switch (action.type) {
        case "INCREASE_PIZZA":
            if (action.payload.option === "render") {
                if (selectedPizza.length === 0) {
                    const selectedPizzaUpdate = action.payload.title;
                    return [selectedPizzaUpdate];
                }
                if (selectedPizza !== []) {
                    const alreadyShow = selectedPizza.includes(action.payload.title);
                    if (!alreadyShow) {
                        return [...selectedPizza, action.payload.title];
                    }
                }
                return selectedPizza;
            }

        case "DECREASE_PIZZA":
            if (action.payload.option === "remove") {
                if (selectedPizza !== null) {
                    if (action.payload.amount === 1) {
                        const alreadyShow = selectedPizza.includes(action.payload.title);
                        if (alreadyShow) {
                            function check(title) {
                                return title !== action.payload.title;
                            }
                            return [...selectedPizza.filter(check)];
                        }
                    }
                }
            }
            break;

        case "RESET_PIZZA":
            return [];
    }
    return selectedPizza;
};

const totalReducer = (total = 2, action) => {
    switch (action.type) {
        case "INCREASE_PIZZA":
            yourPizzaReducer(0, action);
            const totalUpdates = total + action.payload.price;
            return totalUpdates;

        case "DECREASE_PIZZA":
            yourPizzaReducer(0, action);
            const totalUpdate = total - action.payload.price;
            return totalUpdate;

        case "RESET_PIZZA":
            total = 2;
            return total;
    }
    return total;
};

const amountReducer = (amount = 0, action) => {
    switch (action.type) {
        case "INCREASE_PIZZA":
            totalReducer(2, action);
            selectedPizzaReducer([], action);

        case "DECREASE_PIZZA":

        case "RESET_PIZZA":
            amount = 0;
            return amount;
    }
    return amount;
};

const yourPizzaReducer = (yourPizza = 0, action) => {
    switch (action.type) {
        case "INCREASE_PIZZA":
            const yourPizzaUpdates = yourPizza + action.payload.price;
            return yourPizzaUpdates;

        case "DECREASE_PIZZA":
            const yourPizzaUpdate = yourPizza - action.payload.price;
            return yourPizzaUpdate;

        case "RESET_PIZZA":
            yourPizza = 0;
            return yourPizza;
    }
    return yourPizza;
};

const resetReducer = (reset = false, action) => {
    if (action.type === "RESET_PIZZA") {
        amountReducer(0, action);
        reset = true;
        return reset;
    }
    return reset;
};

const resetAllPizzaReducer = (resetAllPizza = false, action) => {
    if (action.type === "RESET_PIZZA") {
        totalReducer(2, action);
        yourPizzaReducer(0, action);
        resetReducer(false, action);
        const isReset = !resetAllPizza;
        return isReset;
    }
    return resetAllPizza;
};

export default combineReducers({
    resetAllPizza: resetAllPizzaReducer,
    total: totalReducer,
    yourPizza: yourPizzaReducer,
    listPizza: pizzasReducer,
    selectedPizza: selectedPizzaReducer,
    amount: amountReducer,
    reset: resetReducer
});
