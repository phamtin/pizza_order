import React from "react";
import PizzaDetail from "./PizzaDetail";
import ListPizza from "./ListPizza";
import { connect } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-8">
                        <h5 className="mb-4 mt-1">Your pizza:</h5>
                        <PizzaDetail images={this.props.selectedPizza} />
                    </div>
                    <div className="col-sm-3 pl-0">
                        <ListPizza
                            list={this.props.listPizza}
                            resetImage={this.resetImage}
                            manipulatePizza={this.manipulatePizza}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { listPizza: state.listPizza, selectedPizza: state.selectedPizza };
};

export default connect(mapStateToProps)(App);
