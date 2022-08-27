let customStore = [
    {
      title: "Fitbit",
      category: "Activity Trackers",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png",
    },
    {
      title: "Garmin Connect",
      category: "Activity Trackers",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png",
    },
    {
      title: "MapMyFitness",
      category: "Fitness Apps",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_182_1_10_0_90660.png",
    },

    {
      title: "MapMyWalk",
      category: "Fitness Apps",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_182_1_10_0_90660.png",
    },
    {
      title: "MapMyRide",
      category: "Fitness Apps",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_184_1_10_0_61431.png",
    },
    {
      title: "MapMyRun",
      category: "Fitness Apps",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png",
    },

    {
      title: "Withings Health...",
      category: "Activity Trackers",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_139_1_10_0_10915.png",
    },
    {
      title: "Strava",
      category: "Fitness Apps",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png",
    },
    {
      title: "RunKeeper",
      category: "Fitness Apps",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png",
    },

    {
      title: "Runtastic",
      category: "Fitness Apps",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_2_1_10_0_87968.png",
    },
    {
      title: "Polar Flow",
      category: "Activity Tracker",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_331_1_10_0_52964.png",
    },
    {
      title: "xID",
      category: "Fitness Apps",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_86_1_10_0_19952.png",
    },

    {
      title: "TrainingPeaks",
      category: "Fitness Apps",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_306_1_10_0_49537.png",
    },
    {
      title: "Misfit",
      category: "Activity Tracker",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_282_1_10_0_81543.png",
    },
    {
      title: "Glow",
      category: "Fertility",
      url: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_130_1_10_0_23647.png",
    },
  ];



let container = document.querySelector(".container")


function display(data){

  data.forEach(function(el){
  let div=document.createElement("div")
  div.setAttribute("class","main")

  let div1=document.createElement("div")
  div1.setAttribute("class","sub")

  let img=document.createElement("img")
  img.src=el.url


  let div2=document.createElement("div")
  div2.setAttribute("class","sub2")

  let div3=document.createElement("div")
  div3.setAttribute("class","title")
  div3.innerText=el.title

  let div4=document.createElement("div")
  div4.setAttribute("class","tex")
div4.innerText=el.category

  let btn=document.createElement("button")
  btn.innerText="GET"


  div2.append(div3,div4,btn)
  div1.append(img)
  div.append(div1,div2)
  container.append(div)
  })
}

 display(customStore)