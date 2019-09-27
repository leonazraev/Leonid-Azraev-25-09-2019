const state = {
    warningStyle: 'light',
    warningText: 'Add to Favorites'
}
const getters = {
    warningStyle: state => {
        return state.warningStyle;
    },
    warningText: state =>{
        return state.warningText;
    }
}
const actions = {
    setWarningStyle: (contex,style) =>{
        contex.state.warningStyle = style;
    },
    setWarningText: (contex,text) =>{
        contex.state.warningText = text;
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