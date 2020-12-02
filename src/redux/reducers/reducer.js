const defaultState = {
    cartItems: []
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            // ADD PRODUCT TO CART
            if (state.cartItems.length > 0) { 
                var isDuplicate = false
                var newCartItems = state.cartItems.map(item => {
                    if (item.product.name === action.item.product.name) {
                        item.quantity += action.item.quantity
                        isDuplicate = true
                        return item
                    } else {
                        return item
                    }
                })
                if (!isDuplicate) {
                    newCartItems.concat(action.item)
                }
                return {
                    ...state,
                    cartItems: newCartItems
                }
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.concat(action.item)
                }
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