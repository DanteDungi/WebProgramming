# Calculator Application - Inner Logic Summary

This document summarizes the internal logic and architecture of the React calculator application, which demonstrates the "Lifting State Up" pattern.

## 1. Component Structure

The application is structured into three main components:

*   **`App.tsx` (Parent Component):** This is the central component responsible for managing the application's state, performing calculations, and orchestrating the interaction between its child components.
*   **`InputComponent.tsx` (Child Component):** Responsible for rendering the user interface elements that allow the user to input two numbers and select an arithmetic operation.
*   **`ResultComponent.tsx` (Child Component):** Responsible for displaying the calculated result or any relevant error messages to the user.

## 2. State Management - Lifting State Up

The core principle applied here is "Lifting State Up." All mutable state that is shared between `InputComponent` and `ResultComponent`, or that affects the overall calculation, resides in the common ancestor: `App.tsx`.

The `App` component manages the following state variables using React's `useState` hook:

*   `number1`: Stores the first number entered by the user (as a string).
*   `number2`: Stores the second number entered by the user (as a string).
*   `operation`: Stores the selected arithmetic operation (e.g., `'+'`, `'-'`, `'*'`, `'/'`).

## 3. Data Flow and Component Interaction

*   **`App` to `InputComponent`:**
    *   `App` passes the current values of `number1`, `number2`, and `operation` as `props` to `InputComponent`.
    *   `App` also passes callback functions (`onNumber1Change`, `onNumber2Change`, `onOperationChange`) as `props` to `InputComponent`. These functions are invoked by `InputComponent` when the user interacts with the input fields or the dropdown, allowing `App` to update its state.

*   **`App` to `ResultComponent`:**
    *   `App` calculates the result based on its current state (`number1`, `number2`, `operation`).
    *   This calculated `result` (which can be a number string or an error message string) is then passed as a `prop` to `ResultComponent` for display.

*   **`InputComponent` to `App` (via Callbacks):**
    *   When the user types into a number input, the `onChange` event handler in `InputComponent` calls the `onNumber1Change` or `onNumber2Change` prop with the new input value. This updates the `number1` or `number2` state in `App`.
    *   When the user selects a new operation from the dropdown, the `onChange` event handler in `InputComponent` calls the `onOperationChange` prop with the selected value, updating the `operation` state in `App`.

## 4. Calculation Logic (`App.tsx`)

The `calculateResult` function within `App.tsx` encapsulates the core business logic:

1.  **Input Parsing:** It attempts to convert `number1` and `number2` (which are state variables stored as strings) into floating-point numbers using `parseFloat()`.
2.  **Input Validation:** It checks if `parseFloat()` resulted in `NaN` (Not-a-Number). If so, it returns an error message indicating invalid input.
3.  **Operation Execution:** A `switch` statement is used to perform the chosen arithmetic operation based on the `operation` state.
4.  **Division by Zero Handling:** Specifically for the division (`'/'`) operation, it checks if the second number (`num2`) is `0`. If it is, a custom error message "Грешка: деление на 0 е невъзможно!" is returned.
5.  **Result Formatting:** The calculated numerical result is converted back into a string before being returned, ensuring consistency for the `result` prop passed to `ResultComponent`.
