// Import types
import { type ICurrency } from "./types/index.js";



export const currencies: ICurrency[] = ['PKR', 'USD', 'EUR'];


export const questions = [
    {
        type: 'input',
        name: 'amount',
        message: 'Enter the amount to convert:',
        validate(input: number): string | boolean | Promise<string | boolean> {

            if (!isNaN(input)) {
                return true;
            }
            return "Please enter amount in numbers";
        },
    },
    {
        type: 'rawlist',
        name: 'fromCurrency',
        message: 'Select the source currency:',
        choices: currencies
    },
    {
        type: 'rawlist',
        name: 'toCurrency',
        message: 'Select the target currency:',
        choices: currencies
    }
];