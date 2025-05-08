# Dog Years Calculator

A simple JavaScript program that converts a person's age into its equivalent in "dog years," providing a fun estimate of age from a canine perspective.

## Description

This project implements a calculator that takes a human age as input and transforms it into "dog years" based on a commonly used conversion rule. It's a simple exercise for practicing programming logic and variable manipulation in JavaScript.

## How it Works / Formula Used

The dog years calculation is based on the following common approximation, popular in many programming exercises:

* **First Two Years:** The first two years of a human's age are considered equivalent to **10.5 dog years each**.
    * Therefore, if the human age is 2 years or less, the age in dog years is `humanAge * 10.5`.
* **Subsequent Years:** After the first two years, each additional human year is equivalent to **4 dog years**.
    * Therefore, if the human age is greater than 2 years, the age in dog years is calculated as: `(2 * 10.5) + ((humanAge - 2) * 4)`.

**Example:**
* A 1-year-old person would be `1 * 10.5 = 10.5` dog years.
* A 2-year-old person would be `2 * 10.5 = 21` dog years.
* A 7-year-old person would be `(2 * 10.5) + ((7 - 2) * 4) = 21 + (5 * 4) = 21 + 20 = 41` dog years.

## How to Use / Setup

1.  **Runtime Environment:**
    * You will need an environment to run JavaScript. You can use:
        * [Node.js](https://nodejs.org/) to run the script from your terminal.
        * The developer console of any modern web browser.

2.  **Data Input:**
    * In the current version of the script (or the expected one), the human age is typically set by modifying a variable within the code. For example:
        ```javascript
        const myAge = 30; // Change this value to test different ages
        ```

3.  **Running the Script:**
    * **With Node.js:** Save the code in a file (e.g., `dogYears.js`) and run it from your terminal with:
        ```bash
        node dogYears.js
        ```
    * **In a Browser:** You can include the script in an HTML file and open it, or paste the code directly into the developer console.

4.  **Output:**
    * The program will print a message to the console showing the original human age and its calculated equivalent in dog years.

Possible Future Enhancements
[ ] Allow the user to input their age interactively (e.g., via a prompt or a simple web interface).
[ ] Add validation for the entered age (ensure it's a positive and reasonable number).
[ ] Research and implement other conversion formulas, perhaps allowing the user to choose or basing it on the dog's size/breed (as different breeds age at different rates).
[ ] Create a reusable function for the calculation.
[ ] Develop a simple graphical user interface (GUI).
