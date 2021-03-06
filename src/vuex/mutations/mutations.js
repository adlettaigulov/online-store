export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        // Наполнение массива products в state новыми данными
        state.products = products;
    },
    // Если товар уже есть в корзине, увеличить его количество
    SET_CART: (state, product) => {
        if (state.cart.length) {
            let isProductExists = false;
            
            state.cart.map(function(cartProduct) {
                if (cartProduct.article === product.article) {
                    isProductExists = true;
                    cartProduct.quantity++;
                    
                }
            })
            if (!isProductExists) {
                state.cart.push(product);
            }
        }
        else {
            state.cart.push(product);
        }
        
    },
    DELETE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1);
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1 ) {
            state.cart[index].quantity--
        }
    }
}