let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

let color_arr = ["#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#F9F871"]

let mouse = {
    x:undefined,
    y:undefined
}
let max_r = 40
let min_r =2
window.addEventListener("mousemove",(e)=>{
    mouse.x = e.x
    mouse.y = e.y
})
window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init()
})

function Circle(x,y,dx,dy,r,color){
    this.x=x
    this.y =y 
    this.dx = dx
    this.dy =dy
    this.r = r
    this.color =  color
    this.min_radius =r
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function(){
        if (this.x+this.r>innerWidth||this.x-this.r<0){
            this.dx =-this.dx
         }
        if (this.y+this.r>innerHeight || this.y-this.r<0){
             this.dy=-this.dy
         }

        this.x+=this.dx
        this.y+=this.dy
        if(mouse.x - this.x <50 && mouse.x -this.x > -50 && mouse.y - this.y <50 && mouse.y -this.y > -50 ){
            if (this.r <max_r){
                this.r +=2 
            }
        } // this condition means that any circle in the area of raduis 50 will increase in its raduis 
        else if (this.r > this.min_radius){
            this.r -=1
        }
        this.draw()
    }
}

let circle_arr = []
let init = ()=>{
    circle_arr=[]
    for (let i =0 ; i<800 ; i++){
        let x=Math.random()*innerWidth
        let y= Math.random()*innerHeight
        let dx = (Math.random()-0.5)
        let dy = (Math.random()-0.5)
        let color = color_arr[Math.floor(Math.random()*color_arr.length)]
        let raduis = Math.random()*3+1
        let circle = new Circle(x,y,dx,dy,raduis,color)
        circle_arr.push(circle)
    }// generate a number of circle objects and add it into one arr
    
}
init()

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0,0,innerWidth,innerHeight);
  circle_arr.map(circle =>{
    circle.update()
  }
  )
}
animate();

