const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve("success");
        },2000);
    });
}
fetchData()
  .then((result)=>{
    console.log(result);
  })
  .catch((error)=>{
    console.log("error fetching data:",error);
  })
     
