
export class LoanParams {
    // Public attributes 
    public principal: number;
    public term_years: number;
    public rate_percent: number;

    constructor(principal: number, term_years: number, rate_percent: number) {
        this.principal = principal;
        this.term_years = term_years;
        this.rate_percent = rate_percent;
    }
}

export class LoanResults {
    // Public attributes 
    public monthly_payment: number;
    public total_payment : number;
    public total_interest : number;

    constructor(monthly_payment: number, total_payment : number, total_interest : number) {
        this.monthly_payment = monthly_payment;
        this.total_payment  = total_payment ;
        this.total_interest  = total_interest ;
    }
}

export class LoanCalc {

    public params: LoanParams;

    constructor(params: LoanParams) {
        // Defaults
        this.params = params;
    }

    calc(): LoanResults {
        // from wikipedia
        // P = Li / (1 - e -nln(1+i))
        // L = amount of loan
        // i = monthly interest
        // n = term in months
        const i = (this.params.rate_percent / 100.0) / 12.0;
        const n = this.params.term_years*12;
        const c = this.params.principal;
        const payment = (c * i) / (1.0 - Math.exp(-n * Math.log(1.0+i)));
        const total_payment = payment * n;
        return  new LoanResults(payment, total_payment, total_payment - c);
    }
}
