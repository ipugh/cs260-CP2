$(document).ready(function() {
    $("#searchSubmit").click(function(e) {//grab information from form
	    e.preventDefault();
        var result = "";
        var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
        
        var queryString = $.param({
            apikey: "7393e0d0-11c9-11e8-b6eb-2feb8ab9bc5e",
            title: "rabbit",
            classification: "Paintings"
        });

        $.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
            console.log("harvard stuff");
            console.log(data); 
            if (data.info.totalrecords > 0){
				var r = Math.floor(Math.random() * data.records.length);
				result += "<img src=" + data.records[r].primaryimageurl + "></img>"; // put in image
			}
            else { console.log("should repeat here"); }
            $("#picture").html(result);
            
        });
        $("#searchResults").html(result)
        
    });
});
