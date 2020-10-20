const eventBus = {};

// Esta función es la que usará Vue para instalar el plugin
eventBus.install = function(Vue) {
    
    Vue.prototype.$bus = new Vue();

}

export default eventBus;