export const increasePizza = (title, price) => {
    return {
        type: "INCREASE_PIZZA",
        payload: { option: "render", title: title, price: price }
    };
};

export const decreasePizza = (title, price, amount) => {
    return {
        type: "DECREASE_PIZZA",
        payload: { option: "remove", title: title, price: price, amount: amount }
    };
};

export const resetPizza = () => {
    return {
        type: "RESET_PIZZA"
    };
};
