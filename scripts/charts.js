// Stores Serviced Y/N
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Category', 'N', 'Y', {role: 'annotation'}],
        ['Atlanta', 10, 90, ''],
        ['San Antonio', 20, 80, ''],
        ['Jackson', 30, 70, ''],
        ['Fife', 40, 60, ''],
        ['Ontario', 30, 70, ''],
        ['Salt Lake', 25, 75, ''],
        ['Hawaii', 0, 100, ''],
        ['Alaska', 5, 95, ''],
        ['ALL', 20, 80, '']
    ]);

    var options = {
        title: 'Stores Serviced by Agency Y/N (%)',
        legend: {position: 'top', maxlines: 3},
        bar: {groupWidth: '50%'},
        isStacked: 'percent',
        vAxis: {
            minValue: 0,
            ticks: [0, .25, 0.5, 0.75, 1]
        },
        height: '100%'
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("serviced"));
    chart.draw(data, options);
}


// Serviced at Required Time
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Category', 'N', 'Y', {role: 'annotation'}],
        ['Atlanta', 10, 90, ''],
        ['San Antonio', 20, 80,''],
        ['Jackson', 10, 90, ''],
        ['Fife', 40, 60, ''],
        ['Ontario', 30, 70, ''],
        ['Salt Lake', 25, 75, ''],
        ['Hawaii', 0, 100, ''],
        ['Alaska', 5, 95,''],
        ['ALL', 20, 80, '']
    ]);

    var options = {
        title: 'Stores Serviced On Time (%)',
        legend: {position: 'top', maxlines: 3},
        bar: {groupWidth: '50%'},
        isStacked: 'percent',
        vAxis: {
            minValue: 0,
            ticks: [0, .25, 0.5, 0.75, 1]
        }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("serviced-on-time"));
    chart.draw(data, options);
}

// Serviced at Required Time
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['Category', 'Under', 'Ok', 'Over', {role: 'annotation'}],
        ['Atlanta', 15, 80, 5, ''],
        ['San Antonio', 10, 80, 10, ''],
        ['Jackson', 5, 75, 20, ''],
        ['Fife', 40, 55, 5, ''],
        ['Ontario', 10, 50, 40, ''],
        ['Salt Lake', 25, 70, 5, ''],
        ['Hawaii', 0, 100, 0, ''],
        ['Alaska', 5, 95, 0, ''],
        ['ALL', 20, 70, 10, '']
    ]);

    var options = {
        title: 'Time In Store (%)',
        legend: {position: 'top', maxlines: 3},
        bar: {groupWidth: '50%'},
        isStacked: 'percent',
        vAxis: {
            minValue: 0,
            ticks: [0, .25, 0.5, 0.75, 1]
        }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("time-in-store"));
    chart.draw(data, options);
}

google.charts.load('current', {'packages': ['line']});
google.charts.setOnLoadCallback(drawLineChart);

function drawLineChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Week');
    data.addColumn('number', 'Stores Not Serviced');
    data.addColumn('number', 'Not Serviced On Time');
    data.addColumn('number', 'Questionable Hours Over');
    data.addColumn('number', 'Questionable Hours Under');

    data.addRows([
        [1, 19, 15, 10, 5],
        [2, 16, 17, 9, 6],
        [3, 18, 25, 6, 5],
        [4, 20, 20, 8, 7],
        [5, 13, 16, 7, 8],
        [6, 15, 13, 6, 10],
        [7, 12, 13, 6, 10],
        [8, 10, 11, 5, 9],
        [9, 13, 15, 6, 10],
        [10, 14, 13, 5, 9],
        [11, 15, 14, 5, 9],
        [12, 14, 12, 6, 10],
        [13, 14, 12, 5, 11],
        [14, 15, 12, 5, 10]
    ]);

    var options = {
        chart: {
            title: 'Weekly Trending (%)',
        }
    };

    var chart = new google.charts.Line(document.getElementById('chart-trending'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}


// Quality
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['Category', 'Score', {role: 'annotation'}],
        ['Atlanta', 4, ''],
        ['San Antonio', 3, ''],
        ['Jackson', 3.5, ''],
        ['Fife', 4.2, ''],
        ['Ontario', 2, ''],
        ['Salt Lake', 3, ''],
        ['Hawaii', 4.5, ''],
        ['Alaska', 5, ''],
        ['ALL', 3.75, '']
    ]);

    var options = {
        title: 'Quality Score',
        legend: {position: 'top', maxlines: 3},
        bar: {groupWidth: '50%'},
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("chart-quality"));
    chart.draw(data, options);
}