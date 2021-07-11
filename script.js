let labels1 = ['YES', 'YES BUT IN GREEN'];
let data1 = [69, 31];
let colors1 = ['#49A9EA', '#36CAAB'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    }
});

let labels2 = ['American Airlines Group', 'Ryanair', 'China Southern Airlines', 'Lufhansa Group'];
let data2 = [199.6, 130.3, 126.3, 130];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Number of passenger carried in 2017 (in mio.)",
            display: true
        },
        legend: {
            display: false
        }
    }
});

let labels3 = ['Attack', 'Defense', 'Passing', 'Tackle', 'Speed'];
// let data2 = [199.6, 130.3, 126.3, 130];
// let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [{
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Number of passenger carried in 2017 (in mio.)",
            display: true
        },
        legend: {
            display: false
        }
    }
});