var count=25;
window.addEventListener("load",()=>{
    list_load(count);
    var list = document.getElementById("list");
    list.addEventListener("scroll",(e)=>scrolling(e))
    // console.log(fetch("https://api.github.com/rate_limit").then(res=> console.log(res)))
})

function list_load(count){
    fetch("https://api.github.com/users?per_page="+count).then(res => res.json()).then(data => list_append(data)).catch(err=> console.log(err))
}

function list_append(data){
    var list = document.getElementById("list");
    console.log(list.scrollTop)
    for(var i=0;i<data.length;i++){
        var p=document.createElement("p");
        p.textContent=data[i].login;
        list.append(p)
    }
}

function scrolling(e){
    // console.log(e.target.scrollTop+400);
    // console.log(e.target.scrollHeight);
    if(e.target.scrollTop+400 === e.target.scrollHeight){
        count=count+25
        list_load(count)
    }
    
}