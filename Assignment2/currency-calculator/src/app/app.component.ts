import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'currency-calculator';

  rupee: number = 1;
  dollar: number = 74.75;
  yen: number = 0.65;
  pound: number = 100.80;
  euro: number = 84.20;

  from: string = "";
  to: string = "";


  ngOnInit(): void {
    (document.getElementById("result") as HTMLLabelElement).innerHTML = "";

    let btn = document.getElementById("convertBtn");

    btn?.addEventListener("click", this.convert);
  }
 
  convertToRupee(type: string, amount: number): number{
    if(type === "Rupee"){
      return amount;
    }
    else if(type === "Dollar"){
      return amount * this.dollar;
    }
    else if(type === "Yen"){
      return amount * this.yen;
    }
    else if(type === "Pound"){
      return amount * this.pound;
    }
    else if(type === "Euro"){
      return amount * this.euro;
    }
    return 0;
  }

  convertFromRupeeToCurrency(type: string, amount: number): number{
    if(type === "Rupee"){
      return amount;
    }
    else if(type === "Dollar"){
      return amount / this.dollar;
    }
    else if(type === "Yen"){
      return amount / this.yen;
    }
    else if(type === "Pound"){
      return amount / this.pound;
    }
    else if(type === "Euro"){
      return amount / this.euro;
    }

    return 0;
  }

  convert(): void{

    this.from = ((document.getElementById("currencyFrom")) as HTMLSelectElement).value;

    this.to = ((document.getElementById("currencyTo")) as HTMLSelectElement).value;

    (document.getElementById("log") as HTMLTextAreaElement).innerHTML = (this.to + " " + this.from);

    let amount = (document.getElementById("amount") as HTMLInputElement).value;
    let ans = amount;

    if(this.from === this.to){
      ans += " " + this.to;
    }

    else{
      let inRupee = this.convertToRupee(this.from, parseInt(amount));

      let inCurrency = this.convertFromRupeeToCurrency(this.to, inRupee);

      ans += inCurrency;
    }

    (document.getElementById("result") as HTMLLabelElement).innerHTML = ans;
  }

}
