// Pie Charts with Chart.js library
//var co2EmissionChart = document.getElementById('co2EmissionChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#333';

function makeChart(powerPlants) {
  // players is an array of objects where each object is something like:
  // {
  //   "Name": "Steffi Graf",
  //   "Weeks": "377",
  //   "Gender": "Female"
  // }

    var fuelType = powerPlants.map(function(d) {return d.Fuel_Type});
    var ammountPP = powerPlants.map(function(d) {return +d.Number_of_Power_Plants});
    var co2Emission = powerPlants.map(function(d) {return +d.CO2_Emission_tons});
    var fuelComs = powerPlants.map(function(d) {return +d.Fuel_Consumption_MMBtu});
    var energy = powerPlants.map(function(d) {return +d.Energy_Generated_kWh});
  //var playerColors = powerPlants.map(function(d) {return d.Gender === 'Female' ? '#F15F36' : '#19A0AA';});

    //Percentage calculations
    //var perc_ammountPP = 

    var ctx = document.getElementById("co2EmissionChart").getContext("2d");
    var ctx1 = document.getElementById("co2EmissionChart1").getContext("2d");
    var ctx2 = document.getElementById("co2EmissionChart2").getContext("2d");
    var ctx3 = document.getElementById("co2EmissionChart3").getContext("2d");

    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: fuelType,
            datasets: [{
                label: 'Fossil Fuel Types',
                data: ammountPP,
                backgroundColor: [
                    'rgba(153,102,255, 0.8)',
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
            responsive: true,
            title: {
                display: true,
                text: "Amount of Power Plants per Fossil Type",
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            },
            plugins: {
                datalabels: {
                    labels: {
                        render: 'label',
                        fontColor: '#000',
                        position: "outside"
                    },
                    color: '#fff',
                    anchor: 'end',
                    align: 'start',
                    offset: -10,
                    borderWidth: 2,
                    borderColor: '#fff',
                    borderRadius: 25,
                    backgroundColor: (context) => {
                        return context.dataset.backgroundColor;
                    },
                    font: {
                        weight: 'bold',
                        size: '14'
                    },
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value*100 / sum).toFixed(0)+"%";
                        return  percentage;
                    },

           
                },
            },
        },
    })

    var chart1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: fuelType,
            datasets: [{
                label: 'Fossil Fuel Types',
                data: co2Emission,
                backgroundColor: [
                    'rgba(153,102,255, 0.8)',
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
                text: "CO2 Emission by Fuel Type (tons)",
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            },
            plugins: {
                datalabels: {
                    labels: {
                        render: 'label',
                        fontColor: '#000',
                        position: "outside"
                    },
                    color: '#fff',
                    anchor: 'end',
                    align: 'start',
                    offset: -10,
                    borderWidth: 2,
                    borderColor: '#fff',
                    borderRadius: 25,
                    backgroundColor: (context) => {
                        return context.dataset.backgroundColor;
                    },
                    font: {
                        weight: 'bold',
                        size: '14'
                    },
                    formatter: (value, ctx1) => {
                        let sum = 0;
                        let dataArr = ctx1.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value*100 / sum).toFixed(0)+"%";
                        return  percentage;
                    },

           
                },
            },
        },
    })

    var chart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: fuelType,
            datasets: [{
                label: 'Fossil Fuel Types',
                data: energy,
                backgroundColor: [
                    'rgba(153,102,255, 0.8)',
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
                text: "Fuel Consumption (MMBtu)",
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            },
            plugins: {
                datalabels: {
                    labels: {
                        render: 'label',
                        fontColor: '#000',
                        position: "outside"
                    },
                    color: '#fff',
                    anchor: 'end',
                    align: 'start',
                    offset: -10,
                    borderWidth: 2,
                    borderColor: '#fff',
                    borderRadius: 25,
                    backgroundColor: (context) => {
                        return context.dataset.backgroundColor;
                    },
                    font: {
                        weight: 'bold',
                        size: '14'
                    },
                    formatter: (value, ctx2) => {
                        let sum = 0;
                        let dataArr = ctx2.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value*100 / sum).toFixed(0)+"%";
                        return  percentage;
                    },

           
                },
            },        
        },
    })

    var chart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: fuelType,
        datasets: [{
            label: 'Fossil Fuel Types',
            data: ammountPP,
            backgroundColor: [
                'rgba(153,102,255, 0.8)',
                'rgba(54,206,86, 0.8)',
                'rgba(75,192,192, 0.8)',
                'rgba(255,99,132, 0.8)',
                'rgba(255,159,64, 0.8)'],
            borderWidth: 2,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: "#000"
            
        }]
    },
    options: {
        title: {
            display: true,
            text: "Energy Generated (kWh)",
            fontSize: 16
        },
        legend: {
            position: 'bottom'
        },
        plugins: {
            datalabels: {
                labels: {
                    render: 'label',
                    fontColor: '#000',
                    position: "outside"
                },
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -10,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 25,
                backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                },
                font: {
                    weight: 'bold',
                    size: '14'
                },
                formatter: (value, ctx3) => {
                    let sum = 0;
                    let dataArr = ctx3.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / sum).toFixed(0)+"%";
                    return  percentage;
                },

       
            },
        },
    },
  })

}

// Request data using D3
d3.csv('co2_PieChart_nvk.csv').then(makeChart);


// Changing size with Window-Size
//chart1.canvas.parentNode.style.height = '128px';
//chart2.canvas.parentNode.style.width = '128px';