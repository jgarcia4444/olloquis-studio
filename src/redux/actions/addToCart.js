

const addToCart = (item) => {
    console.log(item)
    return {
        type: "ADD_TO_CART",
        item: item
    }
}

export default addToCart;