let MSDhonioldinfo={ 
    imgurl: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png", 
    name : "MS Dhoni", 
    Description: "Captain of Indian Cricket team" 
} 
let MSDhoninewinfo={ 
    imgurl: "https://feeds.abplive.com/onecms/images/uploaded-images/2021/11/20/cf26040f28b78037fe29203c3a4db278_original.jpg?impolicy=abp_cdn&imwidth=650",
    name : "MS Dhoni", 
    Description: "Csk Captain" 
} 
 
let isMsDhoniold=true; 
let displayobject; 
let flipdata=function() 
{ 
    if(isMsDhoniold==true) 
    { 
        displayobject=MSDhonioldinfo; 
        isMsDhoniold=false; 
    } 
    else 
    { 
        displayobject=MSDhoninewinfo; 
        isMsDhoniold=true; 
    } 
    document.getElementById("cricketer").src=displayobject.imgurl; 
    document.getElementById("cricketer_name").innerHTML=displayobject.name; 
    document.getElementById("cricketer_dec").innerHTML=displayobject.Description; 
}