
const state = {
    warningStyle: 'light',
    warningText: 'Add to Favorites',
    celFar: 'C',
    themeChange: "primary",
    toastOptions: {position: 'top-center',duration: 3000,type: 'error'}
}
const getters = {
    warningStyle: state => {
        return state.warningStyle;
    },
    warningText: state => {
        return state.warningText;
    },
    celFar: state => {
        return state.celFar;
    },
    themeChange: state => {
        return state.themeChange;
    },
    toastOptions: state =>{
        return state.toastOptions;
    }
}
const actions = {
    setWarningStyle: (contex, style) => {
        contex.state.warningStyle = style;
    },
    setWarningText: (contex, text) => {
        contex.state.warningText = text;
    },
    setThemeChange: contex => {
        if (contex.state.themeChange === "primary")
            contex.state.themeChange = "dark"
        else contex.state.themeChange = "primary"
    },
    setCelFar: contex => {
        if (contex.state.celFar === 'C')
            contex.state.celFar = 'F'
        else contex.state.celFar = 'C'
    },

}
const mutations = {

}

export default {
    mutations,
    actions,
    getters,
    state
}