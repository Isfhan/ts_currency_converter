// Import third party packages
import inquirer from "inquirer";
import chalk from "chalk";


// Import custom modules
import { CurrencyConverter } from './currency-converter.js';
import { questions } from "./questions.js";


// Import types
import { type ICurrency } from "./types/index.js";



export class App {

    constructor(private _currencyConverter = new CurrencyConverter()) { }

    
    /**
    * Start App
    */
    public async start() {

        try {

            // Show welcome message to user
            console.log('');
            console.log(chalk.bgBlue.white.bold(' Welcome To Typescript Currency Converter 💲 '));
            console.log('');


            // Prompt Questions and get user input
            const { amount, fromCurrency, toCurrency }: { amount: string, fromCurrency: ICurrency, toCurrency: ICurrency } = await inquirer.prompt(
                questions
            );


            // Convert the amount and display the result
            const convertedAmount: number = this._currencyConverter.convert(
                parseFloat(amount),
                fromCurrency,
                toCurrency
            );

            // Show welcome message to user
            console.log('');
            console.log(chalk.bgGreen.bold(` Your converted amount is : ${convertedAmount.toFixed(2)} ${toCurrency} `));
            console.log('');

        } catch (error) {

            // Log message
            console.log('');
            console.log(chalk.bold.red(' An error occurred:', (error as Error).message));
            console.log('');

        }
    }
}