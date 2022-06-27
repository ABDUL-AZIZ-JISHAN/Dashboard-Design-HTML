// add hover in every list item

let list = document.querySelectorAll(".navigation li")

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
        this.classList.add("hovered")
    })
}

list.forEach(item =>
    item.addEventListener('mouseover', activeLink
    ))

// menu toggle

let navigation = document.querySelector('.navigation'),
    toggle = document.querySelector(".toggle")
main = document.querySelector(".main")

toggle.onclick = function () {
    navigation.classList.toggle("active")
    main.classList.toggle('active')
}

// chart js integration

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon', 'Google', 'Netflix', 'Tesla'],
        datasets: [{
            label: 'Traffic of social medias',
            data: [1466, 6646, 4545, 4541],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});


const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Earnings of 2022 in Million $',
            data: [15442, 14549, 34454, 44455, 25454, 54543, 14545],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

