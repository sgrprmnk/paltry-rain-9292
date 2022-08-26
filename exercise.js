




let yoga=["Yoga",
    "Yoga Six",
   " Yoga to the People",
   'Aerobics, low impact',
'Aerobics, step, with 10-12 inch step',
'Aerobics, step, with 6-8 inch',
'Aerobics, step, with 6-8 inch step',
'Aquathlon'
   ]
   let walk =['Wake Surfing',
   'Wakeboarding',
   'walk',
   'walkblock',
   'Walking, 2.0 mph, slow pace',
   'Walking, 2.5 mph',
   'Walking, 2.5 mph, downhill',
   'Walking, 2.5 mph, leisurely pa',
 ]
   
let SearchDatabase =  () => {
    let search = document.getElementById('search_bar').value;
    document.getElementById("text_box").innerHTML="";
    if(search==="yoga"){
        yoga.forEach(function(e){
            let p=document.createElement("p");
            p.innerText=e;
            document.getElementById("text_box").append(p);
        })
    }else if(search=="walk"){
        walk.forEach(function(e){
            let p=document.createElement("p");
            p.innerText=e;
            document.getElementById("text_box").append(p);
        })
    }
}
let cresult=document.getElementById("cresult")
let long=document.getElementById("min-box");
long.addEventListener("input",function(){
   let longvalue=document.getElementById("min-box").value;
   longvalue=Number(longvalue)
    let weight=document.getElementById("weight-box").value;
    if( longvalue==1 && weight.length>0){
        cresult.innerText="4"
        
    }else if(longvalue==10){
        cresult.innerText="42"
    }else if(longvalue==100){
        cresult.innerText="417"
    }else{
        alert("Error")
    }
})