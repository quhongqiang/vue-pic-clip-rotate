import PicClip from './PicClip'

const install = function(Vue) {
  Vue.component(PicClip.name, PicClip)
}
// if (typeof window !== 'undefiend' && window.Vue) {
//   install(window.Vue)
// }
if (window.Vue) {
  install(window.Vue)
}
export { PicClip }

export default {
  install,
  PicClip,
}