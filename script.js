$(document).ready(function() {
    $("#searchSubmit, #picture").on('click', function(e) {//grab information from form
		e.preventDefault();
        var result = "";
        var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
		$("#searchSubmit").hide();

		var randomWords = ["rabbit", "china", "man"] 
		randomWords += ["cliff", "ocean", "tree"];
		var w = Math.floor(Math.random() * randomWords.length);
        console.log(randomWords[w]);
		var queryString = $.param({
            apikey: "7393e0d0-11c9-11e8-b6eb-2feb8ab9bc5e",
            title: randomWords[w],
            classification: "Paintings"
        });

        $.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
            console.log("harvard stuff");
            console.log(data); 
			var r = Math.floor(Math.random() * data.records.length);
			if (data.info.totalrecords > 0 && data.records[r].primaryimageurl != null){
				result += "<img src=" + data.records[r].primaryimageurl + "></img>"; // put in image
				result += "<h1>" + data.records[r].title + "</h1>";
                if (data.records[r].period != null) {
					result += "<h2>" + data.records[r].period + "</h2>";
				}
			}
            else { console.log("trying again..."); $("#picture").trigger("click"); }
			$("#picture").html(result);
            
        });
        $("#searchResults").html(result)
        
    });
});
