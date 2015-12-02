
            var chart;
            var legend;

            AmCharts.ready(function () {
                // PIE CHART
                chart = new AmCharts.AmPieChart();
                chart.dataProvider = pieChartJson;
                chart.titleField = "company";
                chart.valueField = "percent";
                chart.alpha = 0.6;
                chart.hoverAlpha = 1;
                chart.fontFamily = "Lato-Regular";

                /*quite weird for sizing the font, but labels make the chart tiny while font is changed only on @mobile and not changed fot 760-1200px vw*/
                chart.fontSize = 15;

                if ($(window).width() < 1279) {
                chart.fontSize = $(window).width()/75;
                }

                if ($(window).width() < 768) {
                    chart.labelsEnabled = false;
                    chart.fontSize = 10;
                }

                chart.color = "rgba(119,34,17,1)";
                chart.colors = [
                    "#0D52D1",
                    "#2A0CD0",
                    "#8A0CCF",
                    "#CD0D74",
                    "#754DEB",
                    "#DDDDDD",
                    "#999999",
                    "#333333",
                    "#000000",
                    "#57032A",
                    "#CA9726",
                    "#990000",
                    "#4B0C25"
                ];

                // LEGEND
                legend = new AmCharts.AmLegend();
                legend.align = "center";
                legend.markerType = "square";
                chart.balloonText = "[[title]]<br><span><b>[[value]]</b> ([[percents]]%)</span>";
                chart.addLegend(legend);
                legend.fontFamily = "Lato-Regular";
                legend.fontSize = $(window).width()/75;
                legend.color = "rgba(119,34,17,1)";
                legend.equalWidths = false;
                if ($(window).width() < 768) {
                    legend.fontSize = 12;
                    legend.equalWidths = true;
                }

                // WRITE
                chart.write("chartdiv1");
            });

 