




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