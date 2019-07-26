google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Serviced Y', 'Serviced N', {role: 'annotation'}],
        ['Atlanta', 'San Antonio'],
    ]);

    var options = {
        width: 600,
        height: 400,
        legent: {postion: 'top', maxlines: 4},
        bar: {groupWidth: '75%'},
        isStacked: true
    };
    var chart = new google.visualization.ColumnChart;(document.getElementById("serviced"));
    chart.draw(view, options);
}
