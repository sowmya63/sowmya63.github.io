let MSDhonioldinfo={ 
    imgurl: "https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg?s=1500x700&q=85",
    name : "A.P.J Abdul Kalam", 
    Description: "Indian aerospace scientist and statesman who served as the 11th president of India" 
} 
let MSDhoninewinfo={ 
    imgurl: "https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg?s=1500x700&q=85",
    name : "A.P.J Abdul Kalam",
    Description: "Indian aerospace scientist and statesman who served as the 11th president of India" 
} 
 
let isMsDhoniold=true; 
let displayobject; 
let flipdata=function() 
{ 
    if(isMsDhoniold==true) 
    { 
        displayobject=MSDhonioldinfo; 
        isA.P.JAbdulKalamold=false; 
    } 
    else 
    { 
        displayobject=A.P.JAbdulKalamnewinfo; 
        isA.P.JAbdulKalamold=true; 
    } 
    document.getElementById("scientist").src=displayobject.imgurl; 
    document.getElementById("scientist_name").innerHTML=displayobject.name; 
    document.getElementById("scientist_dec").innerHTML=displayobject.Description; 
}