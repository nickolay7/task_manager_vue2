const state = {
    tasks: [],
};

const mutations = {
    INIT_TASKS(state, tasks) {
        state.tasks = tasks;
    },
    ADD_TASK(state, task) {
        state.tasks.push(task);
    },
    UPDATE_TASK(state, { index, task }) {
        let taskIndexById = state.tasks.findIndex((task) => task.id === index);
        state.tasks[taskIndexById] = task;
    },
    DELETE_TASK(state, index) {
        state.tasks.splice(index, 1);
    },
};

const actions = {
    initTasks({ commit }, tasks) {
        commit('INIT_TASKS', tasks);
    },
    addTask({ commit }, task) {
        commit('ADD_TASK', task);
    },
    updateTask({ commit, state }, { index, task }) {
        commit('UPDATE_TASK', { index, task });
    },
    deleteTask({ commit, state }, index) {
        commit('DELETE_TASK', index);
    },
};

const getters = {
    tasks: state => state.tasks,
};

export default {
    state,
    mutations,
    actions,
    getters,
};