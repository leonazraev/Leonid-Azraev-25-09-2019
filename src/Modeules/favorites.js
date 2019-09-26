const state = {
    favorites: [],
}
const getters = {
    favorites: state =>{
        return state.favorites;
    }
}
const actions = {
    addRemoveFavorite: (contex, cityD) => {
        if (!favorites.find(element => { return element === cityD }))
          contex.state.favorites.push(cityD);
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