export const state = () => ({
  selectedKey: 1
})

export const mutations = {
  change(state, key) {
    state.selectedKey = key;
  }
}
