import React from "react";

const PizzaDetail = props => {
    const renderImage = props.images.map(image => {
        const url = "image/" + image + ".png";
        return <img className="mr-5 mb-5" key={image} src={url} alt="" />;
    });

    return <div className="PizzaDetail">{renderImage}</div>;
};

export default PizzaDetail;
