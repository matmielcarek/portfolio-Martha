            var chart;
            //var lineChartData = $.getJSON( "../json/panel-line-chart.json" );

            var average = 90.4;

            AmCharts.ready(function () {

                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();

                chart.dataProvider = lineChartJson;
                chart.categoryField = "date";
                chart.dataDateFormat = "YYYY-MM-DD";
                chart.fontFamily = "Lato-Regular";
                chart.fontSize = 15;
                chart.color = "rgba(119,34,17,1)";



                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
                categoryAxis.minPeriod = "DD"; // our data is daily, so we set minPeriod to DD
                categoryAxis.dashLength = 1;
                categoryAxis.gridAlpha = 0.15;
                categoryAxis.axisColor = "#DADADA";
                categoryAxis.fontSize = 10;


                // value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.axisColor = "#DADADA";
                valueAxis.dashLength = 1;
                valueAxis.logarithmic = false; // this line makes axis logarithmic
                valueAxis.fontSize = 10;
                chart.addValueAxis(valueAxis);


                // GUIDE for average
                var guide = new AmCharts.Guide();
                guide.value = average;
                guide.lineColor = "#CC0000";
                guide.dashLength = 4;
                guide.label = "average";
                guide.inside = true;
                guide.lineAlpha = 1;
                valueAxis.addGuide(guide);


                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.type = "smoothedLine";
                graph.bullet = "round";
                graph.bulletColor = "#FFFFFF";
                graph.useLineColorForBulletBorder = true;
                graph.bulletBorderAlpha = 1;
                graph.bulletBorderThickness = 2;
                graph.bulletSize = 7;
                graph.title = "Call me a Chart";
                graph.valueField = "value";
                graph.lineThickness = 2;
                graph.lineColor = "#0000FF";
                chart.addGraph(graph);


                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorPosition = "mouse";
                chart.addChartCursor(chartCursor);

                // SCROLLBAR
                var chartScrollbar = new AmCharts.ChartScrollbar();
                chartScrollbar.graph = graph;
                chartScrollbar.scrollbarHeight = 30;
                chart.addChartScrollbar(chartScrollbar);

                chart.creditsPosition = "bottom-right";

                // WRITE
                chart.write("chartdiv2");
            });