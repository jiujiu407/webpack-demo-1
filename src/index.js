import x from './x.js'
import png from './assets/1.png'
const div = document.getElementById('app')
div.innerHTML = `<img src="${png}" >`

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        //函数等于模块的默认值
        const fn = module.default
        fn()
    },()=>{})
}
div.appendChild(button)