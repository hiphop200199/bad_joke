// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9qTQGvOwvbBmPkw-mcxJeeeJUVGbHrqQ",
  authDomain: "bad-joke-60b0c.firebaseapp.com",
  projectId: "bad-joke-60b0c",
  storageBucket: "bad-joke-60b0c.firebasestorage.app",
  messagingSenderId: "59569384855",
  appId: "1:59569384855:web:731da50b3fc6fb172b28d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//變數宣告
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const logoImage = document.getElementById("logo-image");
const explosionSFX = new Audio('explosion.mp3');
let logoAnimation;
let entry = document.getElementById('entry');
let entryBGs = document.querySelectorAll('.background');
let entryTitle = document.getElementById('title');
let entryBtn = document.getElementById('get-in');
let entryCopyright = document.getElementById('copyright');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  





//mylogo
//用來生成一個個粒子
class Particle{
    constructor(effect,x,y,color) {
        this.effect=effect;
        this.x=Math.random()*this.effect.width;
        this.y=Math.random()*this.effect.height;
        this.originX =x;
        this.originY=y;
        this.color=color;
        this.size=this.effect.gap;
        this.vx=0;
        this.vy=0;
        this.ease=0.155;
    }
    draw(ctx){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
    update(){
        this.x+=(this.originX - this.x)*this.ease;
        this.y+=(this.originY - this.y)*this.ease;
    }
}
//用來一次同時操作所有粒子而形成效果
class Effect{
    constructor(width,height) {
        this.width=width;
        this.height=height;
        this.image = logoImage;
        this.particleArray=[];
        this.centerX = this.width * 0.5;
        this.centerY = this.height * 0.5;
        this.gap = 1;
        this.x = this.centerX - this.image.width*0.25;
        this.y = this.centerY - this.image.height*0.25;
    }
    init(ctx){
        ctx.drawImage(this.image,this.x,this.y,this.image.width*0.5,this.image.height*0.5);
        const pixels = ctx.getImageData(0,0,this.width,this.height).data;
        for(let y=0;y<this.height;y+=this.gap){
            for(let x=0;x<this.width;x+=this.gap){
                const index = (y*this.width+x)*4;
                const red = pixels[index];
                const green = pixels[index+1];
                const blue = pixels[index+2];
                const alpha = pixels[index+3];
                const color = 'rgb('+red+','+green+','+blue+')';
                if(alpha>0)this.particleArray.push(new Particle(effect,x,y,color));      
            }
        }
    }
    draw(ctx){
        this.particleArray.forEach(particle => particle.draw(ctx));
       
    }
    update(){
        this.particleArray.forEach(particle => particle.update());
    }
}


function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    effect.draw(ctx);
    effect.update();
    logoAnimation = requestAnimationFrame(animate);
}




const effect = new Effect(canvas.width,canvas.height);
effect.init(ctx);
animate();
setTimeout(function(){
    cancelAnimationFrame(logoAnimation);
    canvas.style.display='none';
    entry.style.display='flex';
},4000);

setTimeout(function () {
    for (const element of entryBGs) {
        element.classList.add('in');
    }
    entryTitle.classList.add('in');
    entryBtn.classList.add('in');
    entryCopyright.classList.add('in');
  },4500)








    
    
    
    
  
    
    
   
   
   
 

   




  


























