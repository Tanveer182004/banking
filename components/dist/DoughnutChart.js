"use client";
"use strict";
exports.__esModule = true;
var chart_js_1 = require("chart.js");
var react_chartjs_2_1 = require("react-chartjs-2");
chart_js_1.Chart.register(chart_js_1.ArcElement, chart_js_1.Tooltip, chart_js_1.Legend);
var DoughnutChart = function (_a) {
    var accounts = _a.accounts;
    var data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3750],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    };
    return React.createElement(react_chartjs_2_1.Doughnut, { data: data, options: {
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        } });
};
exports["default"] = DoughnutChart;
