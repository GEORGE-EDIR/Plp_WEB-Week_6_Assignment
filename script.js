// SpendWise Interactive JavaScript

// Store all expense records in an array
let expenses = [];

// Calculate the total of all expenses using a loop
function calculateTotalExpenses(expenseRecords) {
    let total = 0;

    for (let expense of expenseRecords) {
        total = total + expense.amount;
    }

    return total;
}

// Display each expense record on the webpage
function displayExpenses(expenseRecords) {
    const expenseList = document.getElementById("expenseList");

    expenseList.innerHTML = "";

    for (let expense of expenseRecords) {
        const listItem = document.createElement("li");

        listItem.textContent =
            `${expense.category}: ${expense.amount.toFixed(2)}`;

        expenseList.appendChild(listItem);
    }
}

// Handle the budget form submission
document.getElementById("budgetForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    const budget = Number(document.getElementById("budget").value);
    const food = Number(document.getElementById("food").value);
    const transport = Number(document.getElementById("transport").value);
    const entertainment = Number(document.getElementById("entertainment").value);

    // Store expense records in an array
    expenses = [
        {
            category: "Food",
            amount: food
        },
        {
            category: "Transport",
            amount: transport
        },
        {
            category: "Entertainment",
            amount: entertainment
        }
    ];

    // Calculate total expenses using the array
    const totalExpenses = calculateTotalExpenses(expenses);

    // Calculate remaining balance
    const remainingBalance = budget - totalExpenses;

    // Update dashboard
    document.getElementById("budgetResult").textContent =
        `Monthly Budget: ${budget.toFixed(2)}`;

    document.getElementById("expensesResult").textContent =
        `Total Expenses: ${totalExpenses.toFixed(2)}`;

    document.getElementById("balanceResult").textContent =
        `Remaining Balance: ${remainingBalance.toFixed(2)}`;

    // Use conditionals to provide feedback
    if (remainingBalance > 0) {
        document.getElementById("statusResult").textContent =
            `Status: You are within your budget with ${remainingBalance.toFixed(2)} remaining.`;
    } else if (remainingBalance === 0) {
        document.getElementById("statusResult").textContent =
            `Status: You have used your entire budget.`;
    } else {
        document.getElementById("statusResult").textContent =
            `Status: You have exceeded your budget by ${Math.abs(remainingBalance).toFixed(2)}.`;
    }

    // Display expenses on the webpage
    displayExpenses(expenses);

    // Show the results section
    document.getElementById("results").style.display = "block";
});