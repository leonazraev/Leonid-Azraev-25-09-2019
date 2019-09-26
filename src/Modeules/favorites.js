const state = {
    favorites: [],
}
const getters = {
    favorites: state => {
        return state.favorites;
    }
}
const actions = {
    addFavorite: (contex, cityD) => {
        if (!contex.state.favorites.find(element => { return element === cityD }))
            contex.state.favorites.push(cityD);
    },
    removeFavorite: (contex, cityD) => {
        contex.state.favorites = contex.state.favorites.filter(element =>{
            return element !== cityD;
        })
    }
}
const mutations = {

}

export default {
    mutations,
    actions,
    getters,
    state
}