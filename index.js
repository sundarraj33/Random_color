function gererate_color(){
    var lets = '0123456789ABCDEF';
    var temp ='';
    for(var i=0;i<6;i++){
        var c = lets[Math.round(Math.random() * 15)];
        temp += c;
    }
    var colorcode ="#"+temp;    
    document.querySelector(".color_box").style.background = colorcode;
    document.querySelector(".min_box").style.background = colorcode;      
    document.querySelector(".color_random").value = colorcode;    
}

function copy() {
    let copyText = document.querySelector(".color_random");
    copyText.select();
    document.execCommand("copy");
    var notification_box = document.querySelector(".notification_box");
    notification_box.setAttribute('style','display:visible');
    setTimeout(()=>{
        notification_box.setAttribute('style','display:none');
    },2000);
    console.log(notification_box)
}

var notification_box = document.querySelector(".notification_box");
notification_box.setAttribute('style','display:none');




document.getElementById('genarate_button').addEventListener('click',gererate_color);
document.querySelector("#copy_button").addEventListener("click", copy);