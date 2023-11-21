var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Crea una classe con metodi comuni alle 2 nuove da creare
var Account = /** @class */ (function () {
    function Account(balanceInit) {
        this.balanceInit = balanceInit;
    }
    Account.prototype.oneDeposit = function (amount) {
        return (this.balanceInit += amount);
    };
    Account.prototype.oneWithDraw = function (amount) {
        if (this.balanceInit >= amount) {
            return (this.balanceInit -= amount);
        }
        else {
            console.log("Fondi insufficienti");
            return this.balanceInit;
        }
    };
    Account.prototype.addInterest = function () {
        return this.balanceInit;
    }; //su MotherAccount è 10%
    return Account;
}());
//Crea la classe SonAccount estendendo Account
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    SonAccount.prototype.addInterest = function () {
        console.log("SonAccount non ha tassi di interesse");
        return this.balanceInit;
    };
    return SonAccount;
}(Account));
var sonAccount = new SonAccount(0);
console.log("Saldo di Partenza di SonAccount: ", sonAccount.balanceInit + "€");
//Versamento
sonAccount.oneDeposit(1000);
console.log("Versamento (1000)", sonAccount.balanceInit + "€");
//Prelievo
sonAccount.oneWithDraw(200);
console.log("Prelievo (200)", sonAccount.balanceInit + "€");
//Interesse
sonAccount.addInterest();
//Saldo Attuale
console.log("Saldo attuale: ", sonAccount.balanceInit + "€");
//Crea la classe MotherAccount estendendo Account
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        this.balanceInit = this.balanceInit * 0.9;
        return this.balanceInit;
    };
    return MotherAccount;
}(Account));
var motherAccount = new MotherAccount(0);
console.log("Saldo di Partenza di MotherAccount: ", motherAccount.balanceInit + "€");
//Versamento
motherAccount.oneDeposit(1000);
console.log("Versamento (1000)", motherAccount.balanceInit + "€");
//Prelievo
motherAccount.oneWithDraw(150);
console.log("Prelievo (150)", motherAccount.balanceInit + "€");
//Interesse
motherAccount.addInterest();
console.log("Con tasso del 10%: ", motherAccount.balanceInit + "€");
//Saldo Attuale
console.log("Saldo attuale: ", motherAccount.balanceInit + "€");
