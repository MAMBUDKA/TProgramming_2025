// Вариант 6: Телефон (получить и установить номер вызываемого абонента)

/**
 * Структура (класс) Телефон
 * Содержит минимум 3 переменных и 3 метода
 */
class Phone {
    private myNumber: string;
    private callingNumber: string;

    constructor(myNumber: string) {
        this.myNumber = myNumber;
        this.callingNumber = "";
    }

    public getCallingNumber(): string {
        return this.callingNumber;
    }

    public setCallingNumber(number: string): void {
        if (number && number.trim().length > 0) {
            this.callingNumber = number;
            console.log(`Номер вызываемого абонента установлен: ${this.callingNumber}`);
        } else {
            console.log("Ошибка: неверный номер абонента");
        }
    }

    public getInfo(): string {
        return `Номер владельца: ${this.myNumber}`;
    }

}
// Пример использования
const myPhone = new Phone("+7-999-123-45-67");
console.log(myPhone.getInfo()); 
myPhone.setCallingNumber("+7-888-765-43-21");