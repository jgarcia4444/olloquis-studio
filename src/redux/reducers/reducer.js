const defaultState = {
    cartItems: []
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            // ADD PRODUCT TO CART
            return {
                ...state,
                cartItems: state.cartItems.concat(action.item)
            }
        case "REMOVE_FROM_CART":
            // REMOVE PRODUCT FROM CART
            return {
                ...state
            }
        default:
            return {
                ...defaultState
            }
    }
}