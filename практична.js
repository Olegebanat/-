
function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            resolve(randomNumber);
        }, 1000);
    });
}


async function processNumber() {
    try {
        const number = await getRandomNumber();
        console.log(`Отримане число: ${number}`);

        if (number < 50) {
            return Promise.resolve(number + 20);
        } else {
            throw new Error("Занадто велике число!");
        }
    } catch (error) {
        return "Оброблено помилку";
    }
}


processNumber().then((result) => console.log(`Результат: ${result}`));