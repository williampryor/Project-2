
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#333';
//Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.legend.display = false;

function makeChart(allPowerPlants) {

    var fuelType = allPowerPlants.map(function(d) {return d.TYPE_Clear3});
    var ammountAllPP = allPowerPlants.map(function(d) {return +d.Number_of_Power_Plants_of_Each_Type});
    
  //var playerColors = powerPlants.map(function(d) {return d.Gender === 'Female' ? '#F15F36' : '#19A0AA';});

    var ctx4 = document.getElementById("allPowerPlants").getContext("2d");

    var chart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: fuelType,
            datasets: [{
                //label: false,
                data: ammountAllPP,
                backgroundColor: [
                    'rgba(224,73,87, 0.8)',
                    'rgba(244,234,150, 0.8)',
                    'rgba(90,151,206, 0.8)',                    
                    'rgba(173,90,255, 0.8)',
                    'rgba(54,206,86, 0.8)',
                    'rgba(75,192,192, 0.8)',
                    'rgba(255,99,132, 0.8)',
                    'rgba(255,159,64, 0.8)'],
                borderWidth: 2,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: "#000"
            
            }],
        },
        options: {
            title: {
                display: true,
                text: "Number of Energy Power Plants in US 2019",
                fontSize: 18
            },
            scales: {
                yAxes: [{
                    
                    ticks: {
                        fontSize: 12,
                        fontStyle: 'bold'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Amount',
                        fontSize: 16,
                        fontStyle: 'bold'
                    }
                }],
                xAxes: [{
                    //scaleFontSize: 20,
                    ticks: {
                        fontSize: 12,
                        fontStyle: 'bold'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Power Plant Type',
                        fontSize: 16,
                        fontStyle: 'bold'
                    }
                }]

            }

        },
    })

}

// Request data using D3
d3.csv('amount_pp_by_type.csv').then(makeChart);


// Changing size with Window-Size
chart4.canvas.parentNode.style.height = '128px';
chart2.canvas.parentNode.style.width = '128px';