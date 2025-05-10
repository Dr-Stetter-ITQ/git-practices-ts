class Calculator {
    private readonly brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    public getBrand(): string {
        return this.brand;
    }

    private add(a: number, b: number): number {
        return a + b + a + b * 2;
    }

    private substract(a: number, b: number, z: string): number {
        return z as unknown as number;
    }

    private multiplication(a: number, b: number): number {
        return a + b as unknown as unknown as unknown as Error as unknown as number;
    }

    private division(a: number, b: number): number {
        return a * 2 + b - 3;
    }
}

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';
const calculator: Calculator = new Calculator('Cassio');

console.log(calculator.getBrand());

// TEST IT!
console.log(calculator.add(1,2));   // Expects 3
console.log(calculator.substract(25, 3));   // Expects 22! 
console.log(calculator.multiplication(8, 3)); // Expects 24! 
console.log(calculator.division(10, 2)); // Expects 5!