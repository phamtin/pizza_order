import React from "react";
import Pizza from "./Pizza";

class ListPizza extends React.Component {
    constructor(props) {
        super(props);
        this.state = { total: 2, yourPizza: 0, reset: false };
    }

    calculateTotal = (priceOnePizza, option) => {
        if (option === "plus") {
            const totalUpdate = this.state.total + priceOnePizza;
            this.setState({ total: totalUpdate });
            const yourPizzaUpdate = this.state.yourPizza + priceOnePizza;
            this.setState({ yourPizza: yourPizzaUpdate });
        } else if (option === "minus") {
            const totalUpdate = this.state.total - priceOnePizza;
            this.setState({ total: totalUpdate });
            const yourPizzaUpdate = this.state.yourPizza - priceOnePizza;
            this.setState({ yourPizza: yourPizzaUpdate });
        }
    };

    toggleReset = () => {
        this.setState(() => ({
            reset: true,
            total: 2.0,
            yourPizza: 0
        }));
        this.resetImage();
    };

    resetImage = () => {
        this.props.resetImage();
    };

    componentDidUpdate() {
        if (this.state.reset) {
            // when the state is updated
            // a timeout is triggered to switch it back false
            this.toggleResetFalse = setTimeout(() => {
                this.setState(() => ({ reset: false }));
            }, 500);
        }
    }
    componentWillUnmount() {
        // we set the timeout to this.turnOffRedTimeout so that we can
        // clean it up when the component is unmounted.
        // otherwise you could get your app trying to modify the state on an
        // unmounted component, which will throw an error
        clearTimeout(this.toggleResetFalse);
    }

    renderPizza = () => {
        return this.props.list.map(({ title, price }) => {
            return (
                <Pizza
                    manipulatePizza={this.props.manipulatePizza}
                    title={title}
                    price={price}
                    key={title}
                    calTotal={this.calculateTotal}
                    reset={this.state.reset}
                />
            );
        });
    };

    render() {
        return (
            <div className="list-pizza">
                <div className="mb-3">
                    <h5 className="mr-2 sub-title">Your pizza</h5>
                    <span className="badge badge-pill badge-secondary mr-2">{this.state.yourPizza}$</span>
                    <button className="btn btn-warning" onClick={this.toggleReset}>
                        Reset pizza
                    </button>
                </div>

                {this.renderPizza()}

                <div className="total">
                    <div className="row border py-1">
                        <div className="col-sm-9">
                            <h6>Total</h6>
                        </div>
                        <div className="col-sm-3"> {this.state.total}$ </div>
                    </div>
                    <div className="row border py-2">
                        <div className="col-sm-9">
                            <button className="btn btn-primary">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListPizza;
