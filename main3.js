let audioChooseUdest = document.querySelector('.choose');
var audioUNevWin = document.querySelector('.never');
var enterAge = document.querySelector('.enterAge');
var testAge = document.querySelector('.testAge');

    testAge.onclick = function(){
        
        let age = enterAge.value;
    
    if (age >=17){ audioChooseUdest.play(); (window.location.href = 'main.html');

    }else{ (window.location.href = 'end.html');

    }
}

enterAge.onclick = function(){
    audioChooseUdest.play();
}



