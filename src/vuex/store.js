// Импорт Vue и Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from './mutations/mutations'
import getters from './getters/getters'

// Объединение двух файлов actions.js и api-requests.js
const actions = {...commonActions, ...apiRequests}

// Подключение Vuex
Vue.use(Vuex);

// Глобальная база знаний приложения
let store = new Vuex.Store({
    // state (состояние) - здесь хранятся все переменные, объекты и тд.
    state: {
        products: [],
        cart: [],
    },
    // mutations (синхронные, выполняются по одной) - необходимы для изменения state
    mutations,
    // actions (действие) - необходимы для придания mutations ассинхронности
    actions,
    // getters - короткий путь получения данных
    getters,
})

export default store;