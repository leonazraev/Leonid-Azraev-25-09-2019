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
        if (!contex.state.favorites.find(element => { return element.city === cityD.city })) {
            var copy = Object.assign({}, cityD);
            contex.state.favorites.push(copy);
        }
    },
    removeFavorite: (contex, cityD) => {
        contex.state.favorites = contex.state.favorites.filter(element => {
            return element.city !== cityD.city;
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