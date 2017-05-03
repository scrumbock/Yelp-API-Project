
  // $.ajax({
  //        url: "https://yelp-search.herokuapp.com/search",
  //        method: "GET",
  //        data: {
  //        	term: "pizza",
  //        	location: "fishtown"
  //       },
  //        success: function(response){
  //            console.log(response)
  //        }

  //    })


  var submit = document.getElementsByClassName("submit")[0];
  var itemInput = document.getElementsByClassName("item-search")[0];
  // var locInput = document.getElementsByClassName("hood-search")[0];
  var output = document.getElementsByClassName("output")[0];
  var hoodChoice = document.getElementById("hood-choice");
  var neighborhoodSearch = hoodChoice.options[hoodChoice.selectedIndex].value;


submit.addEventListener("click", function(){
output.innerHTML = " ";


    
$.ajax({
 url: "https://yelp-search.herokuapp.com/search",
 method: "GET",
 data: {
     term: itemInput.value,
    location: hoodChoice.value
},

 success: function(response){
     console.log(response)
    response.businesses.forEach(function(business){
    yelpApi(business);
})



}
})

function yelpApi(business) {
    var outputDiv = "<a target='_blank' href = ' "+ business.url + "  '><div class='output'><img src='";
    
    outputDiv += business.image_url;
    outputDiv += "'> ";
            outputDiv += "<div class='name'>";
            outputDiv += business.name;
                outputDiv += "<div class='location'>";
                outputDiv += business.location.address + " " +"Philadelphia, PA";
                outputDiv += "</div>";
                outputDiv += "</div></div>";
                 outputDiv += "</a>";
    
    output.innerHTML += outputDiv;
   
}
})








//////////////////////////////////////////////////////



//  for(let i = 0; i < response.businesses.length ; i++){

//     console.log(response.businesses[i]);
//     console.log(response.businesses[i].location);

//     yelpApi(response.businesses[i]);

// }
//////////////////////////////////////////////////////

  // function SearchY() {



  //   function getTerm() {

  //   }

  //   function getLocation() {

  //   }

  // }


//   arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);



