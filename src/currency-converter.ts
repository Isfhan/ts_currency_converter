// Import Custom modules
import { rates } from "./exchange-rates.js";


// Import types
import { type ICurrency, type IRates } from "./types/index.js";



export class CurrencyConverter {

    // Load rates when class initialized
    constructor(private _exchangeRates: IRates = rates) { }


    public convert(amount: number, fromCurrency: ICurrency, toCurrency: ICurrency): number {

        // Get the rate by key
        const rateFrom = this._exchangeRates[fromCurrency];
        const rateTo = this._exchangeRates[toCurrency];

        if (!rateFrom || !rateTo) {

            // Throw error if any parameter is not set  
            throw new Error('Invalid currency codes.');

        }

        // Convert an amount from one currency to another
        const convertedAmount = (amount / rateFrom) * rateTo;

        // Return convertedAmount
        return convertedAmount;

    }
}