js/app.js

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.onload = () => {

gsap.to("#loader",{

opacity:0,

duration:1.5,

delay:1,

onComplete(){

document.getElementById("loader").style.display="none";

}

});

gsap.from(".hero-content h1",{

y:80,

opacity:0,

duration:1.2

});

gsap.from(".hero-content p",{

y:40,

opacity:0,

duration:1.5,

delay:.3

});

gsap.from(".btn",{

opacity:0,

scale:.8,

duration:1,

delay:.6

});

}

gsap.from(".about-image",{

scrollTrigger:".about",

opacity:0,

x:-120,

duration:1.2

});

gsap.from(".about-content",{

scrollTrigger:".about",

opacity:0,

x:120,

duration:1.2

});

gsap.from(".showreel-card",{

scrollTrigger:".portfolio",

opacity:0,

y:120,

duration:1.3

});

gsap.from(".project-card",{

scrollTrigger:".portfolio-grid",

opacity:0,

y:80,

stagger:.2,

duration:1

});

const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const speed=80;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,25);

}else{

counter.innerText=target;

}

};

update();

});

const images=document.querySelectorAll(".gallery-grid img");

const lightbox=document.querySelector(".lightbox");

const lightboxImg=document.getElementById("lightbox-image");

const closeBtn=document.querySelector(".close-lightbox");

images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=image.src;

});

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.classList.add("loader-hide");

},1800);

});

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const cursor=document.querySelector(".cursor");

const blur=document.querySelector(".cursor-blur");

const spotlight=document.querySelector(".spotlight");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

blur.style.left=e.clientX+"px";
blur.style.top=e.clientY+"px";

spotlight.style.background=
`radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
rgba(255,255,255,.08),
transparent 260px)`;

});

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",revealSections);

revealSections();

function revealSections(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-120){

section.classList.add("active");

}

});

}

const heroTitle=document.querySelector(".hero-content h1");

const text=heroTitle.innerText;

heroTitle.innerText="";

let i=0;

function type(){

if(i<text.length){

heroTitle.innerHTML+=text.charAt(i);

i++;

setTimeout(type,70);

}

}

type();


