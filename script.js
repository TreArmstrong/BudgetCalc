class Budget { // creating budget object to hold the properties needed to make budget calc
    constructor() {
        this.income = []; // using array to store entries
        this.expenses = [];
        this.totalIncome = 0;// used to calculate cumulative amounts
        this.totalExpenses = 0;
        this.totalBudget = 0;
    }
// created below to make sure input is valid and to accept income input
    addIncome(description, amount) {
        if (description && !isNaN(amount) && amount > 0) {
            this.income.push({ description, amount });
            this.totalIncome += amount;
            this.calculateBudget();
        } else {
            alert('Please enter a valid income description and amount.');
        }
    }
// used to add expenses and make sure input is valid number
    addExpense(description, amount) {
        if (description && !isNaN(amount) && amount > 0) {
            this.expenses.push({ description, amount });
            this.totalExpenses += amount;
            this.calculateBudget();
        } else {
            alert('Please enter a valid expense description and amount.');
        }
    }
// calculates total budget by subtracting expenses from income, grabbing it from budget class
    calculateBudget() {
        this.totalBudget = this.totalIncome - this.totalExpenses;
        this.updateSummary();
    }
// updates what is displayed
    updateSummary() {
        document.getElementById('total-income').textContent = this.totalIncome;
        document.getElementById('total-expenses').textContent = this.totalExpenses;
        document.getElementById('total-budget').textContent = this.totalBudget;
    }
}
// created a instance of the budget class, with event listeners to trigger the functions
const budgetTracker = new Budget();

document.getElementById('add-income-btn').addEventListener('click', () => {
    const description = document.getElementById('income-description').value;
    const amount = parseFloat(document.getElementById('income-amount').value);
    budgetTracker.addIncome(description, amount);
});

document.getElementById('add-expense-btn').addEventListener('click', () => {
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    budgetTracker.addExpense(description, amount);
});
