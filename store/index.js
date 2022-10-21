export const state = () => {
    return {
        sumOrSn: "both",
    }
}

export const getters = {}

export const actions = {
    async anAction() {
        // Some async action
    }
}

export const mutations =  {
    changeToSun(state){
        state.sumOrSn = "sun"
    },

    changeToSnow(state){
        state.sumOrSn = "snow"
    },

    selfClick(state){
        state.sumOrSn = "both"
    },

}