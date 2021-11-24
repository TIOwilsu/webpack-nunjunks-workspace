import 'normalize.css/normalize.css';
import '../css/main.scss';
import './page.scss';
import img from '../img/unicorn.jpg';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-about',);
  console.log('Image through require()', img,);
},);
