import React from "react";
import { connect } from "react-redux";
import { increasePizza, decreasePizza } from "../actions/index";

class Pizza extends React.Component {
    state = { amount: 0, reset: false };

    increase = () => {
        if (this.state.amount < 10) {
            this.setState({
                amount: this.state.amount + 1
            });

            const title = this.props.title;
            const price = this.props.price;
            this.props.increasePizza(title, price);
        }
    };

    decrease = () => {
        if (this.state.amount > 0) {
            this.setState({
                amount: this.state.amount - 1
            });
            const title = this.props.title;
            const price = this.props.price;
            const amount = this.state.amount;
            // if (this.state.amount === 1) {
            this.props.decreasePizza(title, price, amount);
            // }
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.reset === true) {
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
                            <button className="btn btn-danger" onClick={this.decrease}>
                                <span className="glyphicon glyphicon-minus">
                                    <strong>-</strong>
                                </span>
                            </button>
                        </span>
                        <div className="px-2 py-1 mt-1 border">{this.state.amount}</div>
                        <span className="input-group-btn">
                            <button className="btn btn-success" onClick={this.increase}>
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

const mapStateToProps = state => {
    return { amount: state.amount, reset: state.reset };
};
export default connect(
    mapStateToProps,
    { increasePizza, decreasePizza }
)(Pizza);
