import React from "react";

class ImageRendered extends React.Component {
    state = { name: null };

    // output = () => {
    //     if (this.props.name !== undefined) {
    //         const url = "image/" + this.props.name + "./png";
    //         return <img src={url} alt="" />;
    //     } else {
    //         return <div>{console.log(this.props.name)}</div>;
    //     }
    // };

    // componentDidMount() {
    //     console.log("object");
    //     const add = localStorage.getItem("add");

    //     const name = localStorage.getItem("name");
    //     if (add === true) {
    //         this.setState({ name: name });
    //         const url = "image/" + this.state.name + "./png";
    //         return <img src={url} alt="" />;
    //     }
    // }

    output = () => {};

    render() {
        return <div>{this.componentDidMount()}</div>;
    }
}

export default ImageRendered;
