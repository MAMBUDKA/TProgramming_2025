
function computeY(x: number): number {
    if (Math.abs(x) < 1) {
        return NaN;
    }
    return Math.pow(1.2, x) - Math.pow(x, 1.2);
}

const taskA = {
    x1: 0.2,
    xk: 2.2,
    deltaX: 0.4
};

const taskB: (number | undefined)[] = [0.1, 0.9, 1.2, 1.5, 2.3]; // явно допускаем undefined

console.log("=== Задача А ===");
console.log(`Аргументы от ${taskA.x1} до ${taskA.xk} с шагом ${taskA.deltaX}`);

const steps = Math.round((taskA.xk - taskA.x1) / taskA.deltaX);
for (let i = 0; i <= steps; i++) {
    const x = taskA.x1 + i * taskA.deltaX;
    const y = computeY(x);
    if (!isNaN(y)) {
        console.log(`x = ${x.toFixed(4)} -> y = ${y.toFixed(6)}`);
    } else {
        console.log(`x = ${x.toFixed(4)} -> не определено (|x| < 1)`);
    }
}

console.log("\n=== Задача Б ===");
for (let i = 0; i < taskB.length; i++) {
    const x = taskB[i];
    if (x === undefined) {
        console.log(`x${i+1} = отсутствует -> пропуск`);
        continue;
    }
    const y = computeY(x);
    if (!isNaN(y)) {
        console.log(`x${i+1} = ${x.toFixed(4)} -> y = ${y.toFixed(6)}`);
    } else {
        console.log(`x${i+1} = ${x.toFixed(4)} -> не определено (|x| < 1)`);
    }
}