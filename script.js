
let main=document.querySelector("#main");

let arr=["https://i.pinimg.com/474x/5a/00/6f/5a006f9bbe5e5bbda62f00a13df90fe6.jpg",
    "https://i.pinimg.com/236x/08/e7/f3/08e7f3f45fd3a34c7e7afdfd2e589e6a.jpg",
    "https://i.pinimg.com/236x/57/b0/64/57b064a6dc8646dbca5f670e2d7e1a37.jpg",
    "https://i.pinimg.com/236x/31/49/13/3149131d03082fddb8b096d9c3aeff48.jpg",

    "https://i.pinimg.com/236x/5f/41/aa/5f41aaaed94514ff0c60e9ed4cbfa2de.jpg"];
    let s="";
for(let i=1;i<41;i++){

    let r=Math.floor(Math.random()*arr.length);
   s+= `<div class="card"><img src=${arr[r]}></div>`

}
main.innerHTML=s;