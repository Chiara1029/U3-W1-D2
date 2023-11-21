//Crea una classe con metodi comuni alle 2 nuove da creare
class Account {
    balanceInit: number;

    constructor(balanceInit: number){
        this.balanceInit = balanceInit;
    }

    oneDeposit(amount: number): number {
        return (this.balanceInit += amount);
    }

    oneWithDraw(amount: number): number {
        if (this.balanceInit >= amount) {
            return (this.balanceInit -= amount)
        } else {
            console.log("Fondi insufficienti")
            return this.balanceInit;
        }
    }
    addInterest(): number {
        return this.balanceInit;
    } //su MotherAccount è 10%
}

//Crea la classe SonAccount estendendo Account
class SonAccount extends Account {
    constructor(balanceInit: number) {
        super(balanceInit);
    }
    addInterest(): number {
        console.log("SonAccount non ha tassi di interesse")
        return this.balanceInit
    }
}

let sonAccount = new SonAccount(0)
console.log("Saldo di Partenza di SonAccount: ", sonAccount.balanceInit + "€")
//Versamento
sonAccount.oneDeposit(1000)
console.log("Versamento (1000)", sonAccount.balanceInit + "€")
//Prelievo
sonAccount.oneWithDraw(200)
console.log("Prelievo (200)", sonAccount.balanceInit + "€")
//Interesse
sonAccount.addInterest()
//Saldo Attuale
console.log("Saldo attuale: ", sonAccount.balanceInit + "€")

//Crea la classe MotherAccount estendendo Account
class MotherAccount extends Account {
    constructor(balanceInit: number) {
        super(balanceInit);
    }
    addInterest(): number {
        this.balanceInit = this.balanceInit *0.9;
        return this.balanceInit;
    }
}

let motherAccount = new MotherAccount(0)
console.log("Saldo di Partenza di MotherAccount: ", motherAccount.balanceInit + "€")
//Versamento
motherAccount.oneDeposit(1000)
console.log("Versamento (1000)", motherAccount.balanceInit + "€")
//Prelievo
motherAccount.oneWithDraw(150)
console.log("Prelievo (150)", motherAccount.balanceInit + "€")
//Interesse
motherAccount.addInterest()
console.log("Con tasso del 10%: ", motherAccount.balanceInit + "€")
//Saldo Attuale
console.log("Saldo attuale: ", motherAccount.balanceInit + "€")