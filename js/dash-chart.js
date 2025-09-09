const ctx = document.getElementById("chart").getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Block1', 'Block2', 'Block3', 'Block4'],
        datasets: [
            {
                label: 'Goed',
                data: [12.5, 22.5, 22.5, 60],
                borderColor: '#333333',
                fill: false,
            },
            {
                label: 'NBSA',
                data: [10, 20, 20, 45],
                borderColor: 'red',
                fill: false,
            },
            {
                label: 'Mijn voortgang',
                data: [],
                borderColor: 'green',
                fill: true,
            }
        ]
    }
})