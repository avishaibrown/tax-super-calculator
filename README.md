This app was built as an electronic form for new bank staff to fill out. It is a simple form divided into 3 sections contained inside of accordion components. The sections include the following HR and Payroll information:

- Personal Details
  ** Name
  ** Date of Birth
  ** Email
  ** Phone Number

- Employment Details
  ** Employee ID (autogenerated)
  ** Department
  \*\* Job Title

- Payroll Details
  ** Gross Salary
  ** Annual Tax (calculated field)
  ** Annual Superannuation Contribution (calculated field)
  ** Annual Net Salary (calculated field)

The tax, superannuation and net salary calculations are completed on the fly as the user types in the gross salary field. On submit, a payload is prepared for the backend.

The app uses Material UI for all of the components as they are well-designed, accessible, robust, responsive and easy to implement and use out-of-the-box.

Since it is a simple form, no validation has been included and the fields have been hardcoded.

One assumption made is that superannuation is not deducted from the gross salary.

---

Run the following command to start the application:

### `npm start`

Run the following command to run the test cases for the tax and superannuation calculators:

### `npm test`
