Highcharts.chart('chart-container', {
  "title": {
    "text": ""
  },
  "subtitle": {
    "text": ""
  },
  "exporting": {},
  "chart": {
    "type": "pie",
    "polar": false
  },
  "plotOptions": {
    "pie": {
      "allowPointSelect": true,
      "cursor": true,
      "innerSize": "60%",
      "dataLabels": {
        "enabled": true
      },
      "shadow": false,
      "center": [
        "50%",
        "50%"
      ]
    },
    "series": {
      "animation": false,
      "dataLabels": {
        "style": {
          "color": "contrast",
          "fontSize": "11px",
          "fontWeight": "bold",
          "textOutline": "1px 1px contrast"
        },
        "enabled": false
      }
    }
  },
  "tooltip": {
    "valueSuffix": "%"
  },
  "series": [
    {
      "name": "Column 2",
      "turboThreshold": 0,
      "size": "60%",
      "dataLabels": {
        "color": "#ffffff",
        "distance": -30
      },
      "marker": {}
    }
  ],
  "responsive": {
    "rules": [
      {
        "condition": {
          "maxWidth": 400
        },
        "chartOptions": {
          "series": [
            {
              "id": "versions",
              "dataLabels": {
                "enabled": false
              }
            }
          ]
        },
        "_id": "highcharts-8d16cfs-55"
      }
    ]
  },
  "yAxis": {
    "title": {
      "text": "",
      "style": {
        "fontFamily": "\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
        "color": "#666666",
        "fontSize": "18px",
        "fontWeight": "normal",
        "fontStyle": "normal"
      }
    },
    "labels": {}
  },
  "xAxis": {
    "title": {},
    "labels": {}
  },
  "legend": {
    "enabled": true,
    "itemStyle": {
      "fontFamily": "\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
      "color": "#333333",
      "fontSize": "12px",
      "fontWeight": "bold",
      "fontStyle": "normal",
      "cursor": "pointer"
    },
    "floating": false
  },
  "lang": {},
  "credits": {},
  "data": {
    "csv": "\"Column 1\";\"Column 2\"\n\"A\";100\n\"B\";300\n\"C\";500\n\"D\";200\n\"F\";50",
    "googleSpreadsheetKey": false,
    "googleSpreadsheetWorksheet": false
  }
});
