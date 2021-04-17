let  name = "shinya" ;
console.log(name);
console.log(window);

document.getElementsByTagName("button")[0].addEventListener("click",()=>{
    window.alert('まいちゃんおつかれさま、ドングリありがとう');
});

document.getElementsByTagName("button")[1].addEventListener("click",()=>{
    window.alert('わんわん');
});

document.getElementsByTagName("button")[2].addEventListener("click",()=>{
    window.alert('おつかれさま、いっぱいやすんでね');
});

document.getElementsByTagName("button")[3].addEventListener("click",()=>{
    window.alert('にゃー');
});