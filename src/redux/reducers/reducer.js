const defaultState = {
    cartItems: []
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            let duplicateItem = state.cartItems.find(item => item.product.name === action.item.product.name)
            if (duplicateItem !== undefined) {
                duplicateItem.quantity += action.item.quantity
                var filteredArray = state.cartItems.filter(item => item.product.name !== action.item.product.name)
                filteredArray.push(duplicateItem)
                return {
                    ...state,
                    cartItems: filteredArray
                }
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.concat(action.item)
                }
            }
        case "UPDATE_QUANTITY":
            if (parseInt(action.updateObject.newQuantity) === 0) {
                let filteredCartArray = state.cartItems.filter(item => item.product.name !== action.updateObject.itemName)
                return {
                    ...state,
                    cartItems: filteredCartArray
                }
            } else {
               var itemToUpdate = state.cartItems.find(item => item.product.name === action.updateObject.itemName)
                itemToUpdate.quantity = action.updateObject.newQuantity
                return {
                    ...state,
                    cartItems: state.cartItems
                } 
            }
            
        case "REMOVE_FROM_CART":
            console.log("Made it here")
            let cartItemsWithoutRemovedItem = state.cartItems.filter(item => item.product.name !== action.item.product.name)
            return {
                ...state,
                cartItems: cartItemsWithoutRemovedItem
            }
        default:
            return {
                ...defaultState
            }
    }
}