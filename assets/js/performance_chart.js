
                <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
                <script>
                
                    

                var options = {
                    
                    
                    
          series: [{
            name: "Cumulative return in %",
            data: [0.91, 2.90, 5.73, 7.21, 9.61, 12.00, 17.58, 23.43, 32.32, 35.60, 38.30, 39.52, 40.54, 42.02, 43.15, 44.20, 45.52, 47.22]
              
        }],
                    
          chart: {
              height: 350,

              type: 'area',
              opacity: 0,
              zoom: {
                enabled: false
              },
              
              toolbar: {
                show: true,
                tools: {
                  download: false
                }
              }
              
        },
                    
        dataLabels: {
          enabled: false,
           background: {
            enabled: true,
            foreColor: '#fff',
            padding: 1,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#fff',
            opacity: 0.9,
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: '#000',
              opacity: 0.45
            }
  },
        },
        stroke: {
          curve: 'smooth',
            colors: '#FFFFFF'
        },
        title: {
          text: 'Cumulative return in %',
          align: 'left',
            style: {
      color:  '#FFFFFF',
                fontFamily: 'Helvetica',
                
    },
        },
        grid: {
            show: false,
          row: {
            colors: ['#transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0
          },
        },
            
        yaxis: {
            
         axisBorder: {
          show: true,
        fontSize:  '14px',
          color: '#FFFFFF',
          offsetX: 0,
          offsetY: 0
      },
            
        labels: {
          show: true,
          style: {
              colors: ['#FFFFFF'],
          },
      },
  },
                    
        xaxis: {
          categories: ['Jul 22', 'Aug 22', 'Sep 22', 'Oct 22', 'Nov 22', 'Dec 22', 'Jan 23', 'Feb 23', 'Mar 23', 'Apr 23', 'May 23', 'Jun 23', 'Jul 23', 
                       'Aug 23', 'Sep 23', 'Oct 23', 'Nov 23', 'Dec 23'],
            
             axisBorder: {
          show: true,
          color: '#FFFFFF',
          fontSize:  '14px',
          offsetX: 0,
          offsetY: 0
      },
            
        labels: {
          show: true,
          style: {
              colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF','#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF' , '#FFFFFF', '#FFFFFF'],
          },
      },
        }
             
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      
                </script>