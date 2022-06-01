import h from './mysnabbdom/h.js'

let myVode1 = h('div', {}, [
    h('p', {}, '牛皮'),
    h('p', {}, '喜喜'),
    h('p', {}, h('div', {}, '子节点')),
])
console.log(myVode1)