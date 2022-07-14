import { createStore } from "vuex";
const store = createStore({
    /*define state variables */
    state() {
        return{
            token: localStorage.getItem('token') || 0,
            user: localStorage.getItem('user') || 0
        }
    },

    /* get state variables value */
    getters: {
        getToken(state){
            return state.token;
        },

        getUser(state){
            return state.user;
        }
    },

    /*update the variables values */
    mutations: {
        UPDATE_TOKEN(state, new_token){
            state.token = new_token
        },
        UPDATE_USER(state, new_user){
            state.user = new_user
        }
    },

    /*perform action to be performed */
    actions: {
        setToken({commit}, token){
            localStorage.setItem('token', token)
            commit('UPDATE_TOKEN', token);
        },
        removeToken({commit}){
            localStorage.removeItem('token');
            commit('UPDATE_TOKEN', 0);
        },
        setUser({commit}, user){
            localStorage.setItem('user', user)
            commit('UPDATE_USER', user);
        },
        removeUser({commit}, user){
            localStorage.removeItem('user');
            commit('UPDATE_USER', 0);
        }
    }
});


export default store;
