// Flot Charts sample data for SB Admin template

// Flot Line Chart with Tooltips
$(document).ready( 


// Flot Pie Chart with Tooltips
$(function() {
   
      Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "RequirementGathering",
            value: 100
        }, {
            label: "Design & Configuration",
            value: 20
        }      
               
         ],
        resize: true
    });


    
    Morris.Donut({
        element: 'orm-donut-chart',
        data: [{
            label: "Data Requirement",
            value: 83
        }, {
            label: "Reequirement Configuration",
            value: 45
        }
        
        
    ],
        resize: true
    });

}));
    
   /* 

    var data = [{
        label: "Requirement Gathering",
        data: 100
    }, {
        label: "Senario Module",
        data: 20
    }, {
        label: "Issue & Action",
        data: 9
    }, {
        label: "RCSA Module",
        data: 10
    },
{
        label: "KRI Module",
        data: 10
    }
];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

}));


// Flot Line Charts - Multiple Axes - With Data
/*$(function() {
});*/
    