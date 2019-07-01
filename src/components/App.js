import React from "react";
import PizzaDetail from "./PizzaDetail";
import ListPizza from "./ListPizza";

class App extends React.Component {
    state = {
        listPizza: [
            { id: 1, title: "Pizza BBQ", price: 5 },
            { id: 2, title: "Fish oversea", price: 7 },
            { id: 3, title: "Chese mate", price: 6 },
            { id: 4, title: "Chese USA", price: 9 },
            { id: 5, title: "Pizza grid", price: 6 },
            { id: 6, title: "Pizza box", price: 5 },
            { id: 7, title: "Chese mates", price: 8 }
        ],
        selectedPizza: []
    };

    resetImage = () => {
        this.setState({ selectedPizza: [] });
    };

    // addPizza = pizzaTitle => {
    //     const alreadyShow = this.state.selectedPizza.includes(pizzaTitle);
    //     if (!alreadyShow) {
    //         this.setState(state => ({
    //             selectedPizza: [...state.selectedPizza, pizzaTitle]
    //         }));
    //     }
    // };
    // removePizza = pizzaTitle => {
    //     const alreadyShow = this.state.selectedPizza.includes(pizzaTitle);
    //     if (alreadyShow) {
    //         function check(title) {
    //             return title !== pizzaTitle;
    //         }
    //         this.setState(state => ({
    //             selectedPizza: [...state.selectedPizza.filter(check)]
    //         }));
    //     }
    // };

    manipulatePizza = (pizzaTitle, option) => {
        if (option === "render") {
            const alreadyShow = this.state.selectedPizza.includes(pizzaTitle);
            if (!alreadyShow) {
                this.setState(state => ({
                    selectedPizza: [...state.selectedPizza, pizzaTitle]
                }));
            }
        } else if (option === "remove") {
            const alreadyShow = this.state.selectedPizza.includes(pizzaTitle);
            if (alreadyShow) {
                function check(title) {
                    return title !== pizzaTitle;
                }
                this.setState(state => ({
                    selectedPizza: [...state.selectedPizza.filter(check)]
                }));
            }
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-8">
                        <h5 className="mb-4 mt-1">Your pizza:</h5>
                        <PizzaDetail images={this.state.selectedPizza} />
                    </div>
                    <div className="col-sm-3 pl-0">
                        <ListPizza list={this.state.listPizza} resetImage={this.resetImage} manipulatePizza={this.manipulatePizza} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
