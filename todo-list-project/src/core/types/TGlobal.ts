import type { FC } from "react";

export class User {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name,
        this.age = age
    };
    showName = (): string => {
        return `hello ${this.name}`
    }
}

const user1 = new User("ali", 24)