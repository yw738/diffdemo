import vnode from './vnode.js'
/**
 * # 手写h函数
 * 低配版本h 函数，不具备重载功能
 * 调用的形态，必须是下面的三种之一
 * 1、h('div',{},'文字');
 * 2、h('div',{},[]);
 * 3、h('div',{},h())
 */
export default function(sel, data, c) {
    // 检查参数个数
    if (arguments.length != 3) throw new Error('h函数必须传三个参数!')
        // 检查参数c的类型
    if (typeof c == 'string') {
        // c是字符串
        return vnode(sel, data, undefined, c, undefined)
    } else if (c instanceof Array) {
        // c 是数组
        for (let i = 0; i < c.length; i++) {
            if (!c[i].sel) {
                throw new Error('第三个参数不是h函数!')
            }
        }
        return vnode(sel, data, c, undefined, undefined)
    } else if (c instanceof Object && c.hasOwnProperty('sel')) {
        // 说明传入的c，是唯一的h函数
        return vnode(sel, data, [c], undefined, undefined)
    } else {
        throw new Error('第三个参数,参数类型不对！')
    }
}