function change(){
    var e = document.getElementById('imgh');
    if(e.src.match('bulb2')){
        e.src = "img/bulb.png";
    document.getElementById('onoff').value = 'ON'; 
    }
    else if(e.src.match('bulb')){
        e.src = 'img/bulb2.png';
        document.getElementById('onoff').value = "OFF";
    }
   
}