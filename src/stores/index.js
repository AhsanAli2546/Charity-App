import { createStore } from 'vuex'


export default createStore({

    state: {

        User: {},
        Token: '',
        RefreshToken: ''
    },
    mutations: {
        
        SetUser(state, data) {
            state.User = data;
            console.log(state.User);
        },
        SetToken(state, data) {
            
            state.Token = data;
            
        },
        SetRefreshToken(state, data) {
            state.RefreshToken = data
        },
        
    },
    actions: {},
    getters:{
        GetToken(state) {
            return state.Token
        },
        
        GetUser(state){
            return state.User;
        },
        GetRefreshToken(state){
            return state.RefreshToken;
        }
    },
    modules: {

    }
})