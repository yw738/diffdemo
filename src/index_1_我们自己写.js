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

var vnode = h(
    'a', { props: { href: 'http://www.baidu.com', target: '_blank' } },
    '尚硅谷'
)
console.log(vnode)

// 让虚拟节点上树
const container = document.getElementById('container')
patch(container, vnode)