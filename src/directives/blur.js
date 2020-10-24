const blur = {};

// De la misma manera que tenemos hooks en los componentes, también tenemos directivas, como bind o update, unbind, updated y vienen con 4 atributos: el (El elemento), binding (El valor), una referencia al nodo del virtual DOM y una referencia al nodo anterior del virtual DOM

function setBlur(el, binding) {

    el.style.filter = !binding.value ? "blur(3px)" : "none";
    el.style.cursor = !binding.value ? "not-allowed" : "inherit";

    el.querySelectorAll("button").forEach(button => {

        if (!binding.value)
            button.setAttribute("disabled", true);
        else
            button.removeAttribute("disabled");

    });

}

blur.install = function(Vue) {
    
    // Recibe un objeto con los hooks de la directiva
    Vue.directive("blur", {

        bind(el, binding) {
            setBlur(el, binding);
        }

    });

}

export default blur;