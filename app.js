let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");
// c.fillStyle="#ff4562"
// c.fillRect(100,100,50,50)
// c.fillRect(50,50,50,50)
// c.fillRect(0,0,50,50)
// c.fillRect(0,100,50,50)
// c.fillRect(100,0,50,50)
// c.fillRect(150,50,50,50)

// c.beginPath();
// c.moveTo(500,500)
// c.lineTo(700,700)
// c.lineTo(200,700)
// c.strokeStyle = "green"
// c.stroke()

// c.beginPath()
// c.arc(300,300,100,0,Math.PI*2,false)
// c.stroke()

// let col = 6
// let hexa = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
// for(let i =0 ; i<100;i++){
//     c.beginPath()
//     let x=Math.random()*window.innerWidth
//     let y=Math.random()*window.innerHeight
//     c.arc(x,y,50,0,Math.PI*2,false)
//     c.strokeStyle = `#${hexa[Math.floor(Math.random()*16)]}${hexa[Math.floor(Math.random()*16)]}${hexa[Math.floor(Math.random()*16)]}${hexa[Math.floor(Math.random()*16)]}${hexa[Math.floor(Math.random()*16)]}${hexa[Math.floor(Math.random()*16)]}`
//     c.stroke()
// }
function Circle(x,y,dx,dy,r){
    this.x=x
    this.y =y 
    this.dx = dx
    this.dy =dy
    this.r = r
    this.all = this
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.strokeStyle = "red";
        c.stroke();
        // c.fillStyle = "red";
        // c.fill();
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
        this.draw()

    }

}
let circle_arr = []
for (let i =0 ; i<100 ; i++){
    let x=Math.random()*innerWidth
    let y= Math.random()*innerHeight
    let dx = (Math.random()-0.5)
    let dy = (Math.random()-0.5)
    let circle = new Circle(x,y,dx,dy,30)
    circle_arr.push(circle)
}

// let circle1 = new Circle(300,200,6,3,50)
// let circle2 = new Circle(200,200,4,2,10)

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0,0,innerWidth,innerHeight);
  circle_arr.map(circle =>{
    circle.update()
  }
  )
//   circle1.update()

//   circle2.update()
}
animate();

