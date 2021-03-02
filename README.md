Create a web page in your public_html/week08 directory named assign08.html. In the web page, create an HTML form. You will use JavaScript to allow users on the internet to purchase several items that you want to sell.
Your code must include event handlers for validating appropriate fields.
All validation is done on the client. Convenient error messages should be shown to the user. Alert boxes are not considered convenient and should not be used. Another example of inconvenience is to fail to show the user that he/she made a mistake until after the form is submitted.
This program does not require server side validation, so the action attribute of your <form> element is still undefined.
Your form must include at minimum the following fields.
First Name - text field. Give this field the name first_name.
Last Name - text field. Give this field the name last_name.
Address - text area field (street address, city, state, and zip). Give this field the name address.
Phone - text field - requires validation (Must be of the format "208-555-5555". Give this field the name phone.
Display four or more items to purchase along with their corresponding purchase price (use check boxes to allow selection of the items you wish to purchase). Give the checkboxes the name item_0, item_1, etc. You may alternatively allow the user to specify a quantity instead of using a checkbox for each item.
Include a Total field which automatically totals your purchases as each item is checked/unchecked or the specified quantity changes. Give this field the name total.
Credit Card Type - radio button group (visa, mastercard, american express). Give the radio buttons the name card.
Credit Card # - text field - requires validation (must be 16 digits). Give this field the name credit_card. Must use this format: 1111 1111 1111 1111
Credit Card Expiration Date - text field - requires validation of data entered (i.e. valid month (1-12) and valid year (> 2020). Give this field the name exp_date. It must use this format: 01/2020.
Reset Button - clear all text fields and set focus to First Name - text field. Give this button the name reset.
Submit Button - When this button is clicked, you should validate that the first name, last name, address, phone, credit card, and expiration date fields all have been filled out. If any field is missing text, prevent the form from submitting and set the focus to the first missing text field. Give this button the name validate. (Hint: There are several ways to keep the browser from submitting the form:
You can use type=button for the submit button. 
You can use type=submit for the submit button and use return false with the form's onsubmit event.
You could use the addEventListener method to register the submit event, then use the preventDefault method
Note: Use a different technique besides alerts to indicate invalid input into a field. For example, you can use JavaScript to show/hide a custom error message or use the browser's Constraint Validation API.
You must include at a minimum the following JavaScript features and events.
Core JavaScript:
Must use functions
Must use at least one pattern match using regular expressions.
Must use JavaScript to set the focus.
Events—use at least three of these six events:
Click
Change
Input
Submit
Reset
Load
Element Access:
DOM addressing by element Id (e.g., document.getElementById("address"))
