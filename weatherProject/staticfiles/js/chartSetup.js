document.addEventListener('DOMContentLoaded', () => {
    const chartElement = document.getElementById('chart');
    if (!chartElement) {
        console.error('Chart element not found');
        return;
    }

    const ctx = chartElement.getContext('2d');
    const gradient = ctx.createLinearGradient(0, -10, 0, 100);
    gradient.addColorStop(0, 'rgba(250, 0, 0, 1)');
    gradient.addColorStop(1, 'rgba(136, 225, 0, 1)');

    const forecastItems = document.querySelectorAll('.forecast-item');

    const temps = [];
    const times = [];

    forecastItems.forEach(item => {
        const timeElement = item.querySelector('.forecast-time');
        const tempElement = item.querySelector('.forecast-temperatureValue');
        const humElement = item.querySelector('.forecast-humidityValue');

        if (timeElement && tempElement && humElement) {
            const time = timeElement.textContent;
            const temp = tempElement.textContent;
            const hum = humElement.textContent;

            times.push(time);
            temps.push(temp);
        } else {
            console.warn('Missing forecast data in one of the items');
        }
    });

    // Ensure we have data to plot
    if (temps.length === 0 || times.length === 0) {
        console.error('No temperature or time data found');
        return;
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: times,
            datasets: [
            {
                label: 'Celsius Degrees',
                data: temps,
                borderColor: gradient,
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 2,
            }]
        },
        options: {
           plugins: {
                legend: {
                    display: false
                },
            },
            scales: {
                x: {
                    display: false,
                    grid: {
                        drawOnChartArea: false,                        
                    }
                },
                y: {
                    display: false,
                    grid: {
                        drawOnChartArea: false,                        
                    }
                }
            },
            animation: {
                duration: 750 // Animation duration in milliseconds
            },
        }
    });
});