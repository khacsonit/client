const Numbers = {
    URL_SERVER: 'http://localhost:8000'
};
Numbers.install = function (Vue) {
    Vue.prototype.$getConst = (key) => {
        return Numbers[key];
    }
};
export default Numbers;