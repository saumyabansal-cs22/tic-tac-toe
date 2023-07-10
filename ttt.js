console.log("welcome to my tic tac toe game")
let click=new Audio("click sound.mp3")
let uwin=new Audio("winning sound.mp3")
let turn='X'
 
//Function for change turn
const changeturn = ()=>{
    return turn === "X"?"0": "X"
}
//function to check win
const checkwin=()=>{
    let textbox=document.getElementsByClassName("textbox")
    let wins=[
        
        [0,1,2,2,6,0],
        [3,4,5,4,16,0],
        [6,7,8,4,26,0],
        [0,3,6,-8,16,90],
        [1,4,7,2,16,90],
        [2,5,8,12,16,90],
        [0,4,8,4,17,45],
        [2,4,6,4,14,135]

    ]
    wins.forEach(e =>
    {
        if ((textbox[e[0]].innerText===textbox[e[1]].innerText)&&(textbox[e[2]].innerText===textbox[e[1]].innerText)&&(textbox[e[0]].innerText!=='')
         ){
            document.querySelector('.info').innerText=textbox[e[0]].innerText+" won"
            isgameover=true
            document.querySelector('.image').getElementsByTagName('img')[0].style.width="320px";
            document.querySelector('.line').style.width= "30vw";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            window.matchMedia("max-width:500px");
            uwin.play()
            uwin.volume()
        }
    })
    let swins=[
        
        [0,1,2,7,12,0],
        [3,4,5,7,32,0],
        [6,7,8,7,52,0],
        [0,3,6,-13,32,90],
        [1,4,7,7,32,90],
        [2,5,8,27,32,90],
        [0,4,8,4,28,45],
        [2,4,6,4,34,135]

    ]
    window.matchMedia("max-width:500px");{
        swins.forEach(a =>
            {
                if ((textbox[a[0]].innerText===textbox[a[1]].innerText)&&(textbox[a[2]].innerText===textbox[a[1]].innerText)&&(textbox[e[0]].innerText!=='')
                 ){
                   
                    document.querySelector('.line').style.width= "60vw";
                    document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                   
                    uwin.play()
                    uwin.volume()
                }
            })}
 
}
//Game logic 
//uwin.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let textbox = element.querySelector('.textbox');
    element.addEventListener('click', ()=>{
        if(textbox.innerText === ''){
            textbox.innerText = turn;
            turn=changeturn();
            click.play();
            checkwin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})
//logic for reset button
reset.addEventListener('click',()=>{
    let textbox = document.querySelectorAll('.textbox');
    Array.from(textbox).forEach(element =>{
        element.innerText=""
        click.play()
    })
    turn='X'
    isgameover=false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector('.line').style.width= "0vw";
    uwin.load()
})