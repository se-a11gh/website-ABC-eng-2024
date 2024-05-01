/* PopUps */
let popFone = document.querySelectorAll('.popup_js');
let btn_showJs = document.querySelectorAll('.btn_showJs');
let btnMass = Array.from(btn_showJs);
let btnMass2 = Array.from(popFone);
let element1 = btnMass2.splice(2, 1)[0];
let element2 = btnMass2.splice(0, 1)[0];
btnMass2.unshift(element1);
btnMass2.push(element2);

function addClickEvent(element, index) {
  element.addEventListener('click', (e) => {
    if (e.target.dataset.close == 'cl1') {
      element.classList.toggle('visib');
    } else if (e.target.dataset.close == 'cl2') {
      element.style.display = "none";
    }
    element.removeEventListener('click', addClickEvent);
  });
}
btnMass.map((e, ind) => { 
  e.addEventListener('click', () => {
    btnMass2[ind].classList.toggle('visib');
    if (ind == 1) {
      btnMass2[ind].style.cssText = `display:block; opacity: 1;`; // Боковое меню
    }
  });
});
btnMass2.forEach((p, index) => {
  addClickEvent(p, index);
});





/* Слайдер учителя */
let slider2 = document.querySelector('.teach_foto_slider_1');
let line2 = document.querySelectorAll('.teach_sliderline');
let btn_Prev = document.querySelector('.btn_sl_prev');
let btn_Next = document.querySelector('.btn_sl_next');
let dots = document.querySelectorAll('.dot');
let mass = Array.from(dots);
let sl_height = slider2.clientHeight;
let count2 = 0;
function toMove_next2(){
    count2++;
    if(count2 > 3){
        count2 = 0;
    } scrol2();
}
function toMove_prev2(){
    count2--;
    if(count2 < 0){
        count2 = 0;
    } scrol2();
}
function scrol2(){
  line2.forEach((r)=>{
    r.style.top = `${((-count2 * sl_height) / 2) * 2}px`;
  })
  dots.forEach((r)=>{
    r.classList.remove('dot_act');
  })
  mass[count2].classList.toggle('dot_act');
}
btn_Prev.addEventListener('click', toMove_prev2);
btn_Next.addEventListener('click', toMove_next2);





/* Слайдер-отзывы */
let slider = document.querySelector('.feed_Slider');
let line = document.querySelector('.feed_sliderline');
let btnFeed_Prev = document.querySelector('.btn_feed_prev');
let btnFeed_Next = document.querySelector('.btn_feed_next');
let dotsFeed = document.querySelectorAll('.dotFeed');
let massFeed = Array.from(dotsFeed);
let sl_width = slider.clientWidth;
let count = 0;
let lineCount;
if(window.innerWidth < 670){
    lineCount = 3;
}else{
    lineCount = 1;
}

function toMove_next(){
    count++;
    if(count > lineCount){
        count = 0;
    } scrol();
}
function toMove_prev(){
    count--;
    if(count < 0){
        count = 0;
    } scrol();
}

function scrol(){
    line.style.left = `${((-count * sl_width) / 2) * 2}px`;
    dotsFeed.forEach((r)=>{
    r.classList.remove('dot_actFeed');
  })
  massFeed[count].classList.toggle('dot_actFeed');
}
btnFeed_Prev.addEventListener('click', toMove_prev);
btnFeed_Next.addEventListener('click', toMove_next);







/* Тач-cвайп слайдер */
let wrapp_feed_slider = document.querySelector('.wrapp_feed_slider');
wrapp_feed_slider.addEventListener('touchstart', handStart, false);
wrapp_feed_slider.addEventListener('touchmove', handMove, false);
let x1 = null;
let y1 = null;
function handStart(e){
    x1 = e.touches[0].clientX;
    y1 = e.touches[0].clientY;
}
function handMove(e){
let x2 = e.touches[0].clientX;
let y2 = e.touches[0].clientY;
let xD = x2 - x1;
let yD = y2 - y1;

if(Math.abs(xD) > Math.abs(yD)){
    if(xD < 0){
        toMove_next();
    }else{
        toMove_prev();
    }
}
x1 = null;
y1 = null;
}




/* Switch_lessons */
let dayCircle1 = document.querySelector(".dayCircle1");
let dayCircle2 = document.querySelector(".dayCircle2");
let switch_content = document.querySelector('.switch_content');

function changeTypeLesson1(){
    dayCircle1.classList.add('type_lesson1');
    dayCircle2.classList.add('type_lesson2');
    switch_content.style.left = '-100%';
}
function changeTypeLesson2(){
    dayCircle1.classList.remove('type_lesson1');
    dayCircle2.classList.remove('type_lesson2');
    switch_content.style.left = '0%';
}
dayCircle2.addEventListener('click', changeTypeLesson1);
dayCircle1.addEventListener('click', changeTypeLesson2);





/* Общая анимация при скролле */
const animItems = document.querySelectorAll("._anim-items");
if(animItems.length > 0){
    window.addEventListener("scroll", animOnScroll);
function animOnScroll(){
for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    let animItemPoint = window.innerHeight - animItemHeight / 1.5;
    if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / 1.5;
    }
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("actv");
    }
}
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }   
  animOnScroll();
}





/* Телефон-консультация */
let btn_phone = document.querySelector('.btn_phone');
window.addEventListener('scroll', ()=>{
if(scrollY > 1200){ btn_phone.style.visibility = "visible"; }
else{ btn_phone.style.visibility = "hidden";}
});
let out_timer2 = document.querySelector(".out_timeCall");
function timer_call(){
    let min = 11;
    let timerId = setInterval(function goTimer() {
        min--;
        let out_timer = document.querySelector(".out_timeCall span");
        out_timer.innerHTML = `через ${min} сек`;
    },1000);
    setTimeout(() => { clearInterval(timerId); out_timer2.textContent = 'Менеджер с вами свяжется!'; }, 10000);    
}
document.querySelector('.btn_call').addEventListener('click', timer_call);





/* Таймер акции */
let countDownDate = new Date('Jul 30, 2024 23:06:50').getTime();
let countDownFunction = setInterval(function(){
let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
let clocks = document.querySelectorAll(".promo_timer span");
clocks[0].innerHTML = clock_show(days, 2);
clocks[1].innerHTML = clock_show(hours, 2);
clocks[2].innerHTML = clock_show(minutes, 2);
clocks[3].innerHTML = clock_show(seconds, 2);
if(distance < 0) {
clearInterval(countDownFunction);
clocks.innerHTML = ' ';
clocks.forEach((cl)=>{
    cl.innerHTML = "Акція закінчилася !";
    });
}
}, 1000);
function clock_show(n, width) {
  n = n + "";
  while (n.length < width) {
    n = "0" + n;
  }
  return n;
}





/* Переход по блокам сайта */
let listMenu = document.querySelectorAll(".abc-header__menu ul li");
function scrollBlock(scrl){
    window.scrollTo({
        top:scrl,
        left:0,
        behavior: 'smooth'
    })
}
listMenu.forEach((e)=>{
e.addEventListener('click', (e)=>{
    if(e.target.dataset.srl == 'scr1'){scrollBlock(1650);}
    if(e.target.dataset.srl == 'scr2'){scrollBlock(1650);}
    if(e.target.dataset.srl == 'scr3'){scrollBlock(1200);}
    if(e.target.dataset.srl == 'scr4'){scrollBlock(2550);}
    if(e.target.dataset.srl == 'scr5'){scrollBlock(750); }        
    });
});





/* LazyLoad */
function scrollPage(myImg, observer) {
    myImg.forEach((e) => { 
    if (e.intersectionRatio > 0 && !e.target.dataset.loaded) {
    e.target.src = e.target.getAttribute('data-src');
    e.target.classList.toggle('visibl');
    e.target.dataset.loaded = true;
    }
    });
}
let observer = new IntersectionObserver(scrollPage, {
root: null,
rootMargin: '150px',
threshold: 0.1
});
const images = document.querySelectorAll('.lazload');
images.forEach((e)=>{
observer.observe(e);
});