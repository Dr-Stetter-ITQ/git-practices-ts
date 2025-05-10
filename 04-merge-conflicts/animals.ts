enum Species {
    Dog = "dog",
    Cat = "cat",
    Bird = "bird",
}

abstract class Animal {
    protected name: string;
    protected age: number;
    private readonly specie: Species;

    constructor(specie: Species, name: string, age: number) {
        this.specie = specie;
        this.name = name;
        this.age = age;

        if (age < 0) {
            throw new Error("Age must be a non-negative number.");
        }
    }

    public getSpecie(): string {
        return this.specie;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }


    public toString(): object {
        return {
            specie: this.getSpecie(),
            name: this.name,
            age: this.age,
        };
    }

    public abstract makeSound(): string;
    public abstract calculateHumanAge(): number;
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(Species.Dog, name, age);
    }

    public makeSound(): string {
        return "Woof!";
    }

    public calculateHumanAge(): number {
        return 7 * this.getAge();
    }
}

class Cat extends Animal {
    constructor(name: string, age: number) {
        super(Species.Cat, name, age);
    }

    public makeSound(): string {
        return "Woof Sorry I Mean Meow!";
    }

    public calculateHumanAge(): number {
        return 7 * this.getAge();
    }
}

class Bird extends Animal {
    constructor(name: string, age: number) {
        super(Species.Bird, name, age);
    }

    public makeSound(): string {
        return "Tweet!";
    }

    public calculateHumanAge(): number {
        return 4 * this.getAge();
    }
}
