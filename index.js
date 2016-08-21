function getData(year, country){
	var link = "http://api.population.io/1.0/population/"+year+"/"+country+"/?type=country";
    var params = {
		type: 'country',
	};
	$.getJSON(link, params, function (data) {
		console.log(data);  
		showData(data); 

	});
};

// getData('2016', 'Morocco');
function showData(data){

	var lineChartData = {
        labels: function() {
		        	var labelAge = [];
		        	for (var i = 20; i <= 40; i++) {
		        		 var age = data[i].age;
		        		 labelAge.push(age);
		        	}
		        	return labelAge;
	        }(),
        datasets: [
            {
                label: "The Total",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,0.4)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: function() {
	            	var labelTotal = [];
	            	for (var i = 20; i <= 40; i++) {
	            		var total = data[i].total;
	            		labelTotal.push(total);
	            	}
	            	return labelTotal;
	            }(),
                spanGaps: false,
            },
        
            {
                label: "Females",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(220, 139, 227, 0.84)",
                borderColor: "rgba(206, 22, 105, 0.95)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(206, 22, 105, 0.95)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(220, 139, 227, 0.84)",
                pointHoverBorderColor: "rgba(206, 22, 105, 0.95)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: function() {
                	var labelFemales = [];
                	for (var i = 20; i <= 40; i++) {
                		var female = data[i].females;
                		labelFemales.push(female);
                	}
                	return labelFemales;
                }(),
                spanGaps: false,
            },

            {
                label: "Males",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(57, 134, 228, 0.85)",
                borderColor: "rgba(18, 111, 226, 0.85)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(18, 111, 226, 0.85)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(57, 134, 228, 0.85)",
                pointHoverBorderColor: "rgba(18, 111, 226, 0.85)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: function() {
                	var labelMales = [];
                	for (var i = 20; i <= 40; i++) {
                		var male = data[i].males;
                		labelMales.push(male);
                	}
                	return labelMales;
                }(),
                spanGaps: false,
            },
        ]
    }
	
	var ctx = $("#myChart");

	var myChart = new Chart(ctx, {
			type: "line",
			data: lineChartData

	});
	
  
};


// getData("2015", "Brazil");
$("#submit").click(function(e) {
	e.preventDefault();
	$("body").css("background-color", "#F0F8FF");
	var year = $("#year").val();
	var country = $("#country").val();
	if (!country || year < 1950 || year > 2100) {
		$('p').html("Sorry we couldn't find the information you are looking for, please try again.");	
		$('p').show();
		$('#myChart').hide();
	} else{
		getData(year, country);
		$('#myChart').show();
		$('p').hide();

	}
});
