
// import Swiper from 'swiper';
// import 'swiper/swiper.min.css'
// import Inputmask from 'inputmask';
// import smoothscroll from 'smoothscroll-polyfill';
import { Bar, } from '../../assets/js/bar.es6';
import { Foo, } from '../../assets/js/foo.cjs';
import '../../partials/layout/scripts';
import './styles.scss';
import './partials/index-card/scripts';
import './partials/index-card/styles.scss';



document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index',);
},);

window.Foo = Foo.instance();
window.Bar = Bar();

console.log(window.Foo.getValue(),);
console.log(window.Bar,);
