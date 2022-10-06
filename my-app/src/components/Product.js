const Product = (props) => {
    console.log(props.product)
    return (
        <div>
            id: {props.product.id} - title: {props.product.title} - thumbnail: {props.product.thumbnail} - descripcion: {props.product.description}
        </div>
    );
}

export default Product;