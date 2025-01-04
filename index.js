var leftRandomNumber = Math.ceil(Math.random()*6);
 var rightRandomNumber = Math.ceil(Math.random()*6);
 document.querySelector('.img1').setAttribute('src','./images/'+'dice'+leftRandomNumber+'.png');
 document.querySelector('.img2').setAttribute('src','./images/'+'dice'+rightRandomNumber+'.png');
 if(leftRandomNumber>rightRandomNumber){
    document.querySelector('h1').innerText = "🚩Player 1 Won!";
 }
 else if(leftRandomNumber<rightRandomNumber){
    document.querySelector('h1').innerText = "Player 2 Won!🚩";
 }
 else{
    document.querySelector('h1').innerText = "it's Draw." 
 }