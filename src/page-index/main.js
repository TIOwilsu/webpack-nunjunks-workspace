import { Bar, } from '../js/bar.es6';
import { Foo, } from '../js/foo.cjs';
import 'normalize.css/normalize.css';
import '../css/main.scss';
import './page.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index',);
},);

window.Foo = Foo.instance();
window.Bar = Bar();

console.log(window.Foo.getValue(),);
console.log(window.Bar,);
