    // Можно добавить функционал для перехода по блокам
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', function() {
            // Здесь можно реализовать переход на конкретную страницу калькулятора
            alert('Переход на страницу калькулятора: ' + this.querySelector('h3').textContent);
        });
    });