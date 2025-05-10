class Animal {
    private specie: string;

    constructor(specie: string) {
        this.specie = specie;
    }

    public getSpecie(): string {
        return this.specie;
    }

    public setSpecie(specie: string): void {
        this.specie = specie;
    }
}

class Dog extends Animal {}

class Cat extends Animal {}

class Bird extends Animal {}