google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Category', 'Serviced Y', 'Serviced N', {role: 'annotation'}],
        ['Atlanta', 10, 90, ''],
        ['San Antonio', 20, 80, ''],
    ]);

    var options = {
        width: 600,
        height: 400,
        legent: {postion: 'top', maxlines: 3},
        bar: {groupWidth: '75%'},
        isStacked: true
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("serviced"));
    chart.draw(data, options);
}
