import React from "react";

class Pizza extends React.Component {
    state = { amount: 0, reset: true };

    decrementAmount = e => {
        e.preventDefault();
        if (this.state.amount > 0) {
            const newAmount = this.state.amount - 1;
            this.setState({ amount: newAmount });
        }
        if (this.state.amount === 1) {
            this.manipulatePizza(this.props.title, "remove");
        }
    };
    incrementAmount = e => {
        e.preventDefault();
        if (this.state.amount < 10) {
            const newAmount = this.state.amount + 1;
            this.setState({ amount: newAmount });
        }
        this.manipulatePizza(this.props.title, "render");
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.amount > prevState.amount) {
            this.props.calTotal(this.props.price, "plus");
        } else if (this.state.amount < prevState.amount) {
            if (!this.props.reset) {
                this.props.calTotal(this.props.price, "minus");
            }
        }
    }

    manipulatePizza = (pizza, option) => {
        this.props.manipulatePizza(pizza, option);
    };

    componentWillReceiveProps(props) {
        if (props.reset === true) {
            this.setState({ amount: 0 });
        }
    }

    render() {
        return (
            <div className="row border pizza py-2">
                <div className="col-sm-6">
                    <h6>{this.props.title}</h6>
                    <small className="text-muted">{this.props.price}$</small>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-danger" onClick={this.decrementAmount}>
                                <span className="glyphicon glyphicon-minus">
                                    <strong>-</strong>
                                </span>
                            </button>
                        </span>
                        <div className="px-2 py-1 mt-1 border">{this.state.amount}</div>
                        <span className="input-group-btn">
                            <button className="btn btn-success" onClick={this.incrementAmount}>
                                <span className="glyphicon glyphicon-plus">
                                    <strong>+</strong>
                                </span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pizza;
