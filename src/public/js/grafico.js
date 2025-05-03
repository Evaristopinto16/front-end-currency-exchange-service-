let chartConfig = {
    globals: {
      color: '#666',
    },
    backgroundColor: '#fff',
    graphset: [
      
      {
        type: 'line',
        width: '100%',
        height: '55%',
        x: '0px',
        y: '45%',
        title: {
          text: 'Cotaçoes passadas',
          adjustLayout: true,
          mediaRules: [
            {
              fontSize: '14px',
              maxWidth: '650px',
            },
          ],
        },
        plot: {
          tooltip: {
            visible: false,
          },
        },
        plotarea: {
          margin: 'dynamic',
          marginRight: '4%',
        },
        scaleX: {
          minValue:[1,2,1,2,2],
           
          
        },
        scaleY: {
          values: '0:100:25',
          item: {
            bold: true,
            fontColor: '#FB301E',
          },
          lineColor: '#FB301E',
          placement: 'default',
          tick: {
            lineColor: '#FB301E',
          },
        },
        scaleY2: {
          values: '0:20:5',
          item: {
            bold: true,
            fontColor: '#E2D51A',
          },
          lineColor: '#E2D51A',
          placement: 'default',
          tick: {
            lineColor: '#E2D51A',
          },
        },
        scaleY3: {
          values: '0:40:10',
          item: {
            bold: true,
            fontColor: '#00AE4D',
          },
          lineColor: '#00AE4D',
          placement: 'default',
          tick: {
            lineColor: '#00AE4D',
          },
        },
        crosshairX: {
          lineColor: '#23211E',
          plotLabel: {
            backgroundColor: '#f0ece8',
            borderColor: '#000',
            borderWidth: '1px',
            fontColor: '#414042',
          },
          scaleLabel: {
            backgroundColor: '#E3DEDA',
            fontColor: '#414042',
          },
        },
        mediaRules: [
          {
            maxWidth: '650px',
            width: '100%',
            height: '40%%',
            x: '0px',
            y: '60%',
          },
        ],
        series: [
          {
            text: 'Energy Output',
            values: [95, 38, 40, 35, 38, 40, 35, 38, 40],
            lineColor: '#00AE4D',
            marker: {
              type: 'circle',
              backgroundColor: '#fff',
              borderColor: '#00AE4D',
              borderWidth: '2px',
            },
            scales: 'scale-x, scale-y-3',
          },
          {
            text: 'Energy Recycled',
            values: [11, 15, 19, 11, 15, 19, 91, 15, 19],
            lineColor: '#E2D51A',
            marker: {
              type: 'triangle',
              backgroundColor: '#fff',
              borderColor: '#E2D51A',
              borderWidth: '2px',
              size: '5px',
            },
            scales: 'scale-x, scale-y-2',
          },
          {
            text: 'Energy Consumed',
            values: [28, 21, 30, 28, 21, 30, 28, 21, 90],
            lineColor: '#FB301E',
            marker: {
              type: 'square',
              backgroundColor: '#fff',
              borderColor: '#FB301E',
              borderWidth: '2px',
            },
            scales: 'scale-x, scale-y',
          },
        ],
      },
    ],
  };
  
  zingchart.render({
    id: 'myChart',
    data: chartConfig,
    height: '100%',
    width: '100%',
  });
  
  /*
   * SetInterval is used to simulate live input. We also have
   * a feed attribute that takes in http requests, websockets,
   * and return value from a JS function.
   */
  setInterval(() => {
    let colors = ['#00AE4D', '#E2D51A', '#FB301E'];
    let Marker = (bgColor, ceiling) => {
      return {
        type: 'area',
        range: [0, ceiling],
        backgroundColor: bgColor,
        alpha: 0.95,
      };
    };
 
  
  
    // batch update all chart modifications
    zingchart.exec('myChart', 'update');
  }, 1500);