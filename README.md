# SpendWise

SpendWise is a simple interactive budgeting application that helps users enter their monthly budget and track different types of expenses.

## Improvements Made This Week

This week, SpendWise was improved by adding JavaScript decision making, arrays, loops, DOM manipulation, and event listeners. The application now responds to user input and displays the budgeting results directly on the webpage. Users can enter their budget and expenses and receive feedback about whether they are within or over their budget.

## Conditionals

Conditionals are used to evaluate the user's remaining balance. The application uses `if`, `else if`, and `else` statements to determine whether the user is within their budget, has used their entire budget, or has exceeded their budget.

## Arrays

An array is used to store multiple expense records. Each expense contains a category and an amount. This makes it easier to manage several expenses instead of using separate variables for every record.

## Loops

A `for...of` loop is used to process the expense records in the array. The loop calculates the total expenses and another loop displays each expense on the webpage.

## DOM Manipulation

DOM manipulation is used to update the webpage dynamically. JavaScript changes the text of dashboard elements and creates list items to display the user's expense records directly on the page.

## Events

An event listener is attached to the budget form. When the user submits the form, the event listener runs the JavaScript calculations and updates the dashboard without refreshing the page.

## Challenges

One challenge was connecting the user's form input to the JavaScript calculations. This was resolved by using `Number()` to convert the input values into numbers. Another challenge was storing multiple expenses in an array and processing them with a loop. I solved this by creating expense objects inside an array and using a `for...of` loop to calculate the total. Updating the webpage was another challenge, which I solved using DOM methods such as `getElementById()` and `textContent`. I also used `preventDefault()` so that submitting the form would not reload the page. Testing different budget amounts helped me make sure the conditional statements worked correctly. The final application now connects user actions, JavaScript logic, stored data, and the webpage.
