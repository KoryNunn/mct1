import { Insulin } from '../Insulin/Insulin';
import { Carbohydrate } from '../Carbs/Carbohydrate';
import { BGL } from '../BGL/BGL';

export class T1Player {
    public BGL: BGL;
    public name: string;

    constructor(mct1) {

        this.BGL = new BGL(mct1);

        this.name = mct1.environment.getName();

    }

    eatFood(food: Carbohydrate, portions = 1) {
        for (let i = 0; i < portions; i++) {
            food.eat(this);
        }
    }

    takeInsulin(insulin: Insulin, amount: number) {
        insulin.take(amount, this);
    }
}