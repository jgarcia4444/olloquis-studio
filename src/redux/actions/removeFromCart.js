
const removeFromCart = (item) => {
    return {
        type: "REMOVE_FROM_CART",
        item: item
    }
}

export default removeFromCart;