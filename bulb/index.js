function switch_status(s) {
    if(s == 1){
        pic="images/off.jpg";
    }
    else{
        pic = "images/on.png"
    }
    document.getElementById('bulb_img').src = pic;
}