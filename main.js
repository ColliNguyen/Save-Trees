
var reasontext= [
    "Reason 2. Trees provide food",
    " Reason 3. Trees provide shelter",
    "Reason 4. Trees provide Medicine",
    "Reason 5. Trees prevent soil erosion"
  ];
  
  var images=[
   "https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RoyNZRPFswOG9JCcpUWLCxyvJ795hmAvUA&usqp=CAU",
    "https://imgs.mongabay.com/wp-content/uploads/sites/20/2015/09/03164048/pittsfield_state_forest_153.jpg",
    "https://climatekids.nasa.gov/resources/icons/tree-rings.png"
  ];
  
  var i=0;
  
  function nextslide(){
    document.getElementById("Reason").innerHTML=reasontext[i];
    document.getElementById("Fivereasons").src=images[i];
    i++;
   document.getElementById("Song").play();
  }
  