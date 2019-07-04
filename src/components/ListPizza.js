import React from "react";
import Pizza from "./Pizza";
import { connect } from "react-redux";
import { resetPizza } from "../actions/index";

class ListPizza extends React.Component {
    toggleReset = () => {
        this.props.resetPizza();
    };

    renderPizza = () => {
        return this.props.list.map(({ title, price }) => {
            return (
                <Pizza
                    manipulatePizza={this.props.manipulatePizza}
                    title={title}
                    price={price}
                    key={title}
                    calTotal={this.calculateTotal}
                    reset={this.props.resetAllPizza}
                />
            );
        });
    };

    render() {
        return (
            <div className="list-pizza">
                <div className="mb-3">
                    <h5 className="mr-2 d-inline">Your pizza</h5>
                    <span className="badge badge-pill badge-secondary mr-2">{this.props.yourPizza}$</span>
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
                        <div className="col-sm-3"> {this.props.total}$ </div>
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

const mapStateToProps = state => {
    return { total: state.total, yourPizza: state.yourPizza, resetAllPizza: state.resetAllPizza };
};

export default connect(
    mapStateToProps,
    { resetPizza }
)(ListPizza);
