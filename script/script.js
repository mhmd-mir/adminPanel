
        // topBox charts
        const topBoxChart1 = document.getElementById('topBoxChart1');
        const topBoxChart2 = document.getElementById('topBoxChart2');
        const topBoxChart3 = document.getElementById('topBoxChart3');
        const myChart1 = new Chart(topBoxChart1 , {
            type : 'line' ,
            data : {
                    labels: ['Jan.', 'Feb.', 'Mar.', 'apr.', 'May.', 'jun.'],
                    datasets: [{
                        label : 'Customers' ,
                        data: [55, 45, 85, 30, 55, 65],
                        fill: false,
                        borderColor: '#ffffff',
                        tension: 0.1 ,
                    }]
            } ,
            options : {
                plugins:{
                    legend: {
                        display: false
                        }
                },
                scales :{
                    y : {
                        ticks : {
                            color : '#e3dcdc'
                        }
                    }, 
                    x : {
                        ticks : {
                            color : '#e3dcdc'
                        }
                    }
                }
            }
        })
        const myChart2 = new Chart(topBoxChart2 , {
            type : 'line' ,
            data : {
                    labels: ['Jan.', 'Feb.', 'Mar.', 'apr.', 'May.', 'jun.'],
                    datasets: [{
                        label : 'Customers' ,
                        data: [85, 70, 55, 80, 65, 70],
                        fill: false,
                        borderColor: '#ffffff',
                        tension: 0.1 ,
                    }]
            } ,
            options : {
                plugins:{
                    legend: {
                        display: false
                        }
                },
                scales :{
                    y : {
                        ticks : {
                            color : '#e3dcdc'
                        }
                    }, 
                    x : {
                        ticks : {
                            color : '#e3dcdc'
                        }
                    }
                }
            }
        })
        const myChart3 = new Chart(topBoxChart3 , {
            type : 'line' ,
            data : {
                    labels: ['Jan.', 'Feb.', 'Mar.', 'apr.', 'May.', 'jun.'],
                    datasets: [{
                        label : 'Customers' ,
                        data: [55, 85, 70, 80, 60, 65],
                        fill: false,
                        borderColor: '#ffffff',
                        tension: 0.1 ,
                    }]
            } ,
            options : {
                plugins:{
                    legend: {
                        display: false
                        }
                },
                scales :{
                    y : {
                        ticks : {
                            color : '#e3dcdc'
                        }
                    }, 
                    x : {
                        ticks : {
                            color : '#e3dcdc'
                        }
                    }
                }
            }
        })
        //metricsChart
        const metricsChart = document.getElementById('metricsChart');
        const myChart4 = new Chart(metricsChart , {
            type : 'bar' ,
            data : {
                labels : ['Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct'] ,
                datasets : [
                    {
                        label : 'Total Sales' ,
                        data : [40,60,20,40,65,55,30,50,60,55] ,
                        backgroundColor : 'rgba(255, 255, 255, 0.60)' ,
                    } ,
                    {
                        label : 'Customers' ,
                        data : [50 ,65 ,75 ,20 ,45 ,75 ,65 ,35 ,80] ,
                        backgroundColor : 'rgba(255, 255, 255, 1)'
                    } ,
                    {
                        label : 'store visitores' , 
                        data : [20,25,55,35,30,15,65,25,20] ,
                        backgroundColor : 'rgba(255, 255, 255, 0.25)'
                    }
                ]
            },
            options :{
                plugins :{
                    legend :{
                        labels :{
                            color : '#fff'
                        }
                    }
                }
            }
        }) 
        // product charts 
        const productChart1 = document.getElementById('productChart1');
        const product1 = new Chart(productChart1 , {
            type : 'line' ,
            data : {
                labels : ['','','','','',''] ,
                datasets : [
                    {   
                        label : 'sales' ,
                        borderColor : '#ffffff' ,
                        backgroundColor : '#969b9e' ,
                        data : [250,150,700,400,500,250] ,
                        fill : true  ,
                        tension: 0.3
                    }
                ]
            } ,
            options : {
                responsive : true ,
                maintainAspectRatio: false ,
                plugins : {
                    legend :{
                        display : false ,
                    }
                } ,
                scales : {
                    y : {
                        grid : {
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    } ,
                    x : {
                        grid :{
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    }
                }
            }
        })
        const productChart2 = document.getElementById('productChart2');
        const product2 = new Chart(productChart2 , {
            type : 'line' ,
            data : {
                labels : ['','','','','',''] ,
                datasets : [
                    {   
                        label : 'sales' ,
                        borderColor : '#ffffff' ,
                        backgroundColor : '#969b9e' ,
                        data : [150,700,250 ,400,100,500] ,
                        fill : true  ,
                        tension: 0.3
                    }
                ]
            } ,
            options : {
                responsive : true ,
                maintainAspectRatio: false ,
                plugins : {
                    legend :{
                        display : false ,
                    }
                } ,
                scales : {
                    y : {
                        grid : {
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    } ,
                    x : {
                        grid :{
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    }
                }
            }
        })
        const productChart3 = document.getElementById('productChart3');
        const product3 = new Chart(productChart3 , {
            type : 'line' ,
            data : {
                labels : ['','','','','',''] ,
                datasets : [
                    {   
                        label : 'sales' ,
                        borderColor : '#ffffff' ,
                        backgroundColor : '#969b9e' ,
                        data : [700,150,250,400,300,250] ,
                        fill : true  ,
                        tension: 0.3
                    }
                ]
            } ,
            options : {
                responsive : true ,
                maintainAspectRatio: false ,
                plugins : {
                    legend :{
                        display : false ,
                    }
                } ,
                scales : {
                    y : {
                        grid : {
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    } ,
                    x : {
                        grid :{
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    }
                }
            }
        })
        const productChart4 = document.getElementById('productChart4');
        const product4 = new Chart(productChart4 , {
            type : 'line' ,
            data : {
                labels : ['','','','','',''] ,
                datasets : [
                    {   
                        label : 'sales' ,
                        borderColor : '#ffffff' ,
                        backgroundColor : '#969b9e' ,
                        data : [100,150,400,700,300,450] ,
                        fill : true  ,
                        tension: 0.3
                    }
                ]
            } ,
            options : {
                responsive : true ,
                maintainAspectRatio: false ,
                plugins : {
                    legend :{
                        display : false ,
                    }
                } ,
                scales : {
                    y : {
                        grid : {
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    } ,
                    x : {
                        grid :{
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    }
                }
            }
        })
        const productChart5 = document.getElementById('productChart5');
        const product5 = new Chart(productChart5 , {
            type : 'line' ,
            data : {
                labels : ['','','','','',''] ,
                datasets : [
                    {   
                        label : 'sales' ,
                        borderColor : '#ffffff' ,
                        backgroundColor : '#969b9e' ,
                        data : [100,150,600,700,500,450] ,
                        fill : true  ,
                        tension: 0.3
                    }
                ]
            } ,
            options : {
                responsive : true ,
                maintainAspectRatio: false ,
                plugins : {
                    legend :{
                        display : false ,
                    }
                } ,
                scales : {
                    y : {
                        grid : {
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    } ,
                    x : {
                        grid :{
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    }
                }
            }
        })
        //dataCharts
        const dataChart1 = document.getElementById('dataChart1');
        const data1 = new Chart(dataChart1 , {
            type : 'line' ,
            data : {
                labels : ['','','','','','','','','','','',''] ,
                datasets : [
                    {   
                        label : 'sales' ,
                        borderColor : '#ffffff' ,
                        backgroundColor : '#969b9e' ,
                        data : [350,670,400,550,257,500,332,540,160,240,160,650] ,
                        fill : true  ,
                        tension: 0.5
                    }
                ]
            } ,
            options : {
                responsive : true ,
                maintainAspectRatio: false ,
                plugins : {
                    legend :{
                        display : false ,
                    }
                } ,
                scales : {
                    y : {
                        grid : {
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    } ,
                    x : {
                        grid :{
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    }
                }
            }
        });
        const dataChart2 = document.getElementById('dataChart2');
        const data2 = new Chart(dataChart2 , {
            type : 'line' ,
            data : {
                labels : ['','','','','','','','','','','',''] ,
                datasets : [
                    {   
                        label : 'sales' ,
                        borderColor : '#ffffff' ,
                        backgroundColor : '#969b9e' ,
                        data : [332,540,160,240,160,650,350,670,400,550,257,500] ,
                        fill : true  ,
                        tension: 0.5
                    }
                ]
            } ,
            options : {
                responsive : true ,
                maintainAspectRatio: false ,
                plugins : {
                    legend :{
                        display : false ,
                    }
                } ,
                scales : {
                    y : {
                        grid : {
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    } ,
                    x : {
                        grid :{
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    }
                }
            }
        })
        const dataChart3 = document.getElementById('dataChart3');
        const data3 = new Chart(dataChart3 , {
            type : 'line' ,
            data : {
                labels : ['','','','','','','','','','','',''] ,
                datasets : [
                    {   
                        label : 'sales' ,
                        borderColor : '#ffffff' ,
                        backgroundColor : '#969b9e' ,
                        data : [332,540,160,240,160,650,350,670,400,550,257,500] ,
                        fill : true  ,
                        tension: 0.5
                    }
                ]
            } ,
            options : {
                responsive : true ,
                maintainAspectRatio: false ,
                plugins : {
                    legend :{
                        display : false ,
                    }
                } ,
                scales : {
                    y : {
                        grid : {
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    } ,
                    x : {
                        grid :{
                            display : false
                        } ,
                        ticks :{
                            display : false
                        }
                    }
                }
            }
        });
        // topCategoriesChart
        const topCategoriesChart = document.getElementById('topCategoriesChart')
        const CategoriesChart = new Chart(topCategoriesChart , {
            type: 'doughnut',
            data : {
                labels: ['', '', '', ''],
                datasets : [{
                    data : [50,22,15,13] ,
                    backgroundColor : ['#ffffff' , 'rgba(255, 255, 255, 0.70)' , 'rgba(255, 255, 255, 0.25)' , 'rgba(255, 255, 255, 0.55)'] 
                }]
            } ,
            options :{
                responsive : true ,
                maintainAspectRatio: false ,
                plugins :{
                    legend :{
                        display : false
                    }
                }
            }
        })
        // visitorsChart
        const visitorsChart = document.getElementById('visitorsChart');
        const visitChart = new Chart(visitorsChart,{
            type : 'bar' ,
            data : {
                labels : ['jan' , 'feb' , 'mar' , 'apr' , 'may' , 'jun' , 'jul' , 'aug' , 'sep'] ,
                datasets : [{
                        data : [400,600,800,450,600,400,600,400,500] ,
                        backgroundColor : '#ffffff' ,
                        barThickness : 15
                }]
            } ,
            options : {
                scales :{
                    y :{
                        ticks : {
                            color : '#e3dcdc'
                        },
                        suggestedMax : 1000
                    } ,
                    x : {
                        ticks : {
                            color : '#e3dcdc'
                        }
                    }
                } ,
                responsive : true ,
                maintainAspectRatio: false ,
                plugins : {
                    legend :{
                        display : false
                    }
                }
            }
        })
        //salesOveriewChart
        const salesOveriewChart = document.getElementById('salesOveriewChart');
        const salesChart = new Chart(salesOveriewChart ,{
            type : 'line' ,
            data : {
                    labels: ['Jan.', 'Feb.', 'Mar.', 'apr.', 'May.', 'jun.'],
                    datasets: [{
                        label : 'Customers' ,
                        data: [55, 45, 85, 30, 55, 65],
                        fill: false,
                        borderColor: '#ffffff',
                        tension: 0.1 ,
                    }]
            } ,
            options : {
                maintainAspectRatio: false ,
                plugins:{
                    legend: {
                        display: false
                        }
                },
                scales :{
                    y : {
                        ticks : {
                            color : '#e3dcdc'
                        }
                    }, 
                    x : {
                        ticks : {
                            color : '#e3dcdc'
                        }
                    }
                }
            }
        })
        const summaryChartElem = document.getElementById('summaryChart');
        const summaryChart = new Chart(summaryChartElem , {
            type : 'bar' ,
            data : {
                labels : ['jan' , 'feb' , 'mar' , 'apr' , 'may' , 'jun' , 'jul' , 'aug' , 'sep' ,'Oct' , 'Nov' , 'Dec'] ,
                datasets : [{
                        data : [400,600,800,450,600,400,600,400,500,800 ,300 ,550] ,
                        backgroundColor : '#ffffff' ,
                        barThickness : 15
                }]
            } ,
            options : {
                scales :{
                    y :{
                        ticks : {
                            color : '#e3dcdc'
                        },
                        suggestedMax : 1000
                    } ,
                    x : {
                        ticks : {
                            color : '#e3dcdc'
                        }
                    }
                } ,
                responsive : true ,
                maintainAspectRatio: false ,
                plugins : {
                    legend :{
                        display : false
                    }
                }
            }
        })