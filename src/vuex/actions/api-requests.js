import axios from 'axios'

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        // Два параметра (URL - из db.json, метод GET)
        // Данный URL появляется после ввода в консоли команды json-server --watch db.json
        return axios('http://localhost:3000/products ', {
            method: 'GET'
        }) 
        .then((products) => {
            // Вызов мутации, которая будет добавлять products в state
            commit('SET_PRODUCTS_TO_STATE', products.data)
            // Возвращаем products, чтобы в будущем что-то с ним сделать
            return products;
        })
        .catch((error) => {
            console.log(error)
            // Возвращаем erro, чтобы в будущем что-то с ней сделать
            return error
        })
    },
}