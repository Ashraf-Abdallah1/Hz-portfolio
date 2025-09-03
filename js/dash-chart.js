const  ctx = document.getElementById("chart").getContext('2d');
new Chart(ctx,{
    type: 'line',
    data: {
        labels:['Block1', 'Block2', 'Block3', 'Block4', 'Block5', 'Block6'],
        datasets: [
            {
            label:'Goed',
            data: [10,20,30,40,50,60],
            borderColor: '#333333',
            fill: false,
            },
            {
                label:'Mijn voortgang',
                data: [4,7,20,35,45,60],
                borderColor: 'green',
                fill: true,
            }
        ]
    }
})