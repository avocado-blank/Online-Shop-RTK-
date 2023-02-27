export const setLocal = (datas) => {
    datas.map(item => localStorage.setItem(item.name, JSON.stringify(item.data)))
}