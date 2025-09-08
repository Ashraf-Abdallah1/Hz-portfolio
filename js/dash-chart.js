const  ctx = document.getElementById("chart").getContext('2d');
new Chart(ctx,{
    type: 'line',
    data: {
        labels:['Block1', 'Block2', 'Block3', 'Block4'],
        datasets: [
            {
            label:'Goed',
            data: [12.5,22.5,33.5,60],
            borderColor: '#333333',
            fill: false,
            },
            {
                label:'Mijn voortgang',
                data: [8,15,33,60],
                borderColor: 'green',
                fill: true,
            }
        ]
    }
})