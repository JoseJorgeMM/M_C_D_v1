function generateProblem() {
    const num1 = Math.floor(Math.random() * 50) + 10;
    const num2 = Math.floor(Math.random() * 50) + 10;
    document.getElementById('problem').textContent = `Calcular el MCD de ${num1} y ${num2}`;
    document.getElementById('solution').textContent = '';
    document.getElementById('explanation').innerHTML = '';
    explainMCD(num1, num2);
}

function explainMCD(num1, num2) {
    const explanation = document.getElementById('explanation');
    const steps = [];

    steps.push(`<span class="step-number">Paso 1:</span> Identificar los divisores de ${num1} y ${num2}.`);
    const divisors1 = getDivisors(num1);
    const divisors2 = getDivisors(num2);
    steps.push(`Divisores de ${num1}: ${divisors1.join(', ')}`);
    steps.push(`Divisores de ${num2}: ${divisors2.join(', ')}`);

    steps.push(`<span class="step-number">Paso 2:</span> Identificar los divisores comunes.`);
    const commonDivisors = divisors1.filter(value => divisors2.includes(value));
    steps.push(`Divisores comunes: ${commonDivisors.join(', ')}`);

    steps.push(`<span class="step-number">Paso 3:</span> Identificar el mayor divisor común.`);
    const mcd = Math.max(...commonDivisors);
    steps.push(`El mayor divisor común es ${mcd}.`);

    steps.push(`<span class="step-number">Paso 4:</span> Verificar que ${mcd} divide a ambos números sin dejar residuo.`);
    steps.push(`${num1} ÷ ${mcd} = ${num1/mcd} (sin residuo)`);
    steps.push(`${num2} ÷ ${mcd} = ${num2/mcd} (sin residuo)`);

    steps.push(`Por lo tanto, el MCD de ${num1} y ${num2} es ${mcd}.`);

    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step';
        stepElement.innerHTML = step;
        explanation.appendChild(stepElement);
        setTimeout(() => stepElement.classList.add('visible'), index * 2000);
    });

    setTimeout(() => {
        document.getElementById('solution').textContent = `MCD(${num1}, ${num2}) = ${mcd}`;
    }, steps.length * 2000);
}

function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

// Generar el primer problema al cargar la página
generateProblem();