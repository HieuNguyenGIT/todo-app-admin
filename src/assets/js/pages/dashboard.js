var realtime = "on";
function initRealTimeChart() {
    "use strict";
    var plot = $.plot("#real_time_chart", [getRandomData()], {
        series: { shadowSize: 0, color: "rgb(0, 188, 212)" },
        grid: { borderColor: "#f3f3f3", borderWidth: 1, tickColor: "#f3f3f3" },
        lines: { fill: true },
        yaxis: { min: 0, max: 100 },
        xaxis: { min: 0, max: 100 },
    });
    function updateRealTime() {
        plot.setData([getRandomData()]);
        plot.draw();
        var timeout;
        if (realtime === "on") {
            timeout = setTimeout(updateRealTime, 320);
        } else {
            clearTimeout(timeout);
        }
    }
    updateRealTime();
    $("#realtime").on("change", function () {
        realtime = this.checked ? "on" : "off";
        updateRealTime();
    });
}
function initSparkline() {
    $(".sparkline").each(function () {
        var $this = $(this);
        $this.sparkline("html", $this.data());
    });
}
function initDonutChart() {
    "use strict";
    Morris.Donut({
        element: "donut_chart",
        data: [
            { label: "Chrome", value: 37 },
            { label: "Firefox", value: 30 },
            { label: "Safari", value: 18 },
            { label: "Opera", value: 12 },
            { label: "Other", value: 3 },
        ],
        colors: [
            "rgb(233, 30, 99)",
            "rgb(0, 188, 212)",
            "rgb(255, 152, 0)",
            "rgb(0, 150, 136)",
            "rgb(96, 125, 139)",
        ],
        formatter: function (y) {
            return y + "%";
        },
    });
}
var data = [],
    totalPoints = 110;
function getRandomData() {
    if (data.length > 0) data = data.slice(1);
    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;
        if (y < 0) {
            y = 0;
        } else if (y > 100) {
            y = 100;
        }
        data.push(y);
    }
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
    }
    return res;
}

if (!sessionStorage.getItem("token")) {
    window.location.href = "/admin/logout";
} else {
    $.ajax({
        url: "/api/users",
        type: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Bearer " +
                JSON.parse(sessionStorage.getItem("token")).access_token,
        },
        success: function (data) {
            new Chart(
                document.getElementById("line_chart").getContext("2d"),
                (config = {
                    type: "line",
                    data: {
                        labels: data.months,
                        datasets: [
                            {
                                label: "Appointments",
                                data: data.appointments_count_by_month,
                                borderColor: "rgba(0, 188, 212, 0.75)",
                                backgroundColor: "rgba(0, 188, 212, 0.3)",
                                pointBorderColor: "rgba(0, 188, 212, 0)",
                                pointBackgroundColor: "rgba(0, 188, 212, 0.9)",
                                pointBorderWidth: 1,
                            },
                            {
                                label: "Patients",
                                data: data.users_count_by_month,
                                borderColor: "rgba(233, 30, 99, 0.75)",
                                backgroundColor: "rgba(233, 30, 99, 0.3)",
                                pointBorderColor: "rgba(233, 30, 99, 0)",
                                pointBackgroundColor: "rgba(233, 30, 99, 0.9)",
                                pointBorderWidth: 1,
                            },
                        ],
                    },
                    options: { responsive: true, legend: false },
                })
            );
        },
    });
}
