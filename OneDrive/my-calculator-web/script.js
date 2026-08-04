const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');  
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'C') {
            display.textContent = '';
        } else if (value === '⌫') {
            display.textContent = display.textContent.slice(0, -1);
        } else if (value === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else {
            display.textContent += value;
        }
    });
});
document.addEventListener('keydown', (event) => {
    const allowed = "0123456789+-*/().";
    if (allowed.includes(event.key)) {
        display.textContent += event.key;
    }
    if (event.key === 'Enter') {
        try {
            display.textContent = eval(display.textContent);
        } catch (error) {
            display.textContent = 'Error';
        }
    }
    if (event.key === 'Backspace') {
        display.textContent = display.textContent.slice(0, -1);
    }
    if (event.key === 'Escape') {
        display.textContent = '';
    }
});