import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import {addProductToCart} from "../../actions";

const ProductDetail = (props) => {

    const {
        title,
        images,
        brand,
        color,
        material,
        type,
        gears,
        fender,
        weight,
        brake,
        luggage_rack,
        lighting,
        price,
        year,
        id,
        description,
    } = props.product;


    const onCart = () => {
        props.dispatch(addProductToCart(props.product));
    };

    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{title}</h3>

                <p className="price-detail-wrap">
	<span className="price h3 text-warning">
		<span className="currency">Rp </span><span className="num">{formatMoney(price)}</span>
	</span>
                </p>
                <dl className="item-property">
                    <dt>Description</dt>
                    <dd><p className="text-capitalize">{description}</p></dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Brand</dt>
                    <dd className="text-capitalize">{brand}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Year</dt>
                    <dd className="text-capitalize">{year}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Color</dt>
                    <dd className="text-capitalize">{color}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Material</dt>
                    <dd className="text-capitalize">{material}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Type</dt>
                    <dd className="text-capitalize">{type}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Gears</dt>
                    <dd className="text-capitalize">{gears}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Fender</dt>
                    <dd className="text-capitalize">{fender}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Weight</dt>
                    <dd className="text-capitalize">{weight}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Brake</dt>
                    <dd className="text-capitalize">{brake}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Luggage Rack</dt>
                    <dd className="text-capitalize">{luggage_rack}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Lighting</dt>
                    <dd className="text-capitalize">{lighting}</dd>
                </dl>
                <hr/>
                <hr/>
                <button
                    onClick={onCart}
                    className="btn btn-lg btn-outline-primary text-uppercase"><i
                    className="fa fa-shopping-cart"/> Add to cart
                </button>
            </article>
        </aside>
    );
};

export default connect()(ProductDetail);
