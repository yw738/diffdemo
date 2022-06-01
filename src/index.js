import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from 'snabbdom'

const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
])
const container = document.getElementById('container')
const btn = document.getElementById('btn')

/**
 * 只有是同一个虚拟节点，才会进行精细化比较，否则就是暴力删除旧的、插入新的。
 * 延伸问题：如何定义是同一个虚拟节点？答：选择器相同且key相同
 */
/**
 * 只进行同层比较，不会进行跨层比较。即使是同一片虚拟节点，但是跨层了，
 * diff不会进行精细化比较。而是暴力删除旧的、然后插入新节点。
 * （父节点变了，子节点一定更新）
 */
let vnode1 = h('div', {}, [
    h('p', { key: 'A' }, 'A'),
    h('p', { key: 'B' }, 'B'),
    h('p', { key: 'C' }, 'C'),
    h('p', { key: 'D' }, 'D'),
])
let vnode2 = h('div', {}, [
        h('p', { key: 'E' }, 'E'),
        h('p', { key: 'A' }, 'A'),
        h('p', { key: 'B' }, 'B'),
        h('p', { key: 'C' }, 'C'),
        h('p', { key: 'D' }, 'D'),
    ])
    // 让虚拟节点上树

patch(container, vnode1)

btn.onclick = function() {
    patch(vnode1, vnode2)
}