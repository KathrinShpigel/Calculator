$(document).ready(function () {

    var calculator = $('.calculator');
    var calcDisplay = calculator.find('.calculator-display'),
		calcKeys = calculator.find('.calculator-key'),
		calcButton = calculator.find('.calculator-btn'),
		calcClear = calculator.find('.calculator-clear'),
		calcZnak = calculator.find('.calculator-znak'),
		calcSqrt = calculator.find('.calculator-sqrt'),
		calcSpace = calculator.find('.calculator-space'),
		calcEqual = calculator.find('.calculator-key--equal');

    // Инициализация значений кнопок
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // Считывание нажатий на кнопки и добавление их значений на вывод
    calcButton.on('click', function () {
        calcDisplay.val(calcDisplay.val() + $(this).attr('value')).toFixed(2);
    });

    // Очистка экрана
    calcClear.on('click', function () {
        calcDisplay.val('');
    });
	
	// Смена знака числа
	calcZnak.on('click', function () {
        calcDisplay.val((-1) * calcDisplay.val());
    });
    
    // Считает кадратный корень числа
    calcSqrt.on('click', function () {
        calcDisplay.val(Math.sqrt(calcDisplay.val()).toFixed(2));
    });
    
    // Удаляет последнее число
    calcSpace.on('click', function () {
        calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length-1));
    });
	
    // Показывает результат на дисплэй
    calcEqual.on('click', function () {
        calcDisplay.val(eval(calcDisplay.val()).toFixed(2));
    });
});
