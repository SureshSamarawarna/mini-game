const player = document.getElementById('player');
const ground = document.getElementById('ground');

console.log(player)

let dx = 0;
let dy = 1;
let acceleration = 0.2;
let index =1;
let d = 0;

const draw =()=>{
    if(index > 10 ) index = 1;
    if(dx != 0){
       
        player.style.backgroundImage = `url('img/adventure_girl/png/Run (${index++}).png')`;
        
    }else if(dy !== 0){
        player.style.backgroundImage = `url('img/adventure_girl/png/Jump (${index++}).png')`;
        
    }else if(d == 0){

        player.style.backgroundImage = `url('img/adventure_girl/png/Idle (${index++}).png')`;
    }



    requestAnimationFrame(draw);
}

const animate = ()=>{
    if((player.offsetLeft +player.offsetWidth) > innerWidth){
        dx=0;
        player.style.left = `${innerWidth-player.offsetWidth}px`;
    }else if(player.offsetLeft < 0){
        dx=0;
        player.style.left =`0`;
    }
    
    
    dy += acceleration;
    if((player.offsetTop +player.offsetHeight)>(ground.offsetTop)){
        dy=0;
        player.style.top = `${ground.offsetTop-player.offsetHeight +10}px`
        acceleration =0;
    }
    player.style.left = `${player.offsetLeft + dx}px`;
    player.style.top = `${player.offsetTop + dy}px`

    requestAnimationFrame(animate);
}







addEventListener('keydown',({key})=>{
    
    
    if(key === 'ArrowRight'){
        dx=10;
        // index = 1;
        player.classList.remove('turn');
        
    }else if(key === 'ArrowLeft'){
 
        player.classList.add('turn');
        dx=-10;
        // index = 1;

    }else if(key === 'd'){
        d = 1;
       console.log('keyDddDown')

    }
    

});
addEventListener('keypress',({key})=>{
    
    
    if(key === ' '){
        dy = -10;
        dx = 0;
        acceleration = 0.3
        index = 1;
    }

});


addEventListener('keyup',({key})=>{
    
    if(key === 'ArrowRight' || key === 'ArrowLeft'){
       dx=0;
    }else if(key === 'ArrowUp'){
        dy=0;
    }else if(key === 'd'){
        d = 0;
        console.log('keydddUp')

      

    }
  
});

requestAnimationFrame(draw);
requestAnimationFrame(animate);


// let j=0;
// let t1=0;
// const interval = 2;
// function repaint(timestamp){
//     if (!t1) t1 = timestamp;
//     const diff = timestamp - t1;
//     if(diff >= (interval *1000)){
//         console.log("painted" + j++ , timestamp)
//     }
//     requestAnimationFrame(repaint);
// }
// requestAnimationFrame(repaint);