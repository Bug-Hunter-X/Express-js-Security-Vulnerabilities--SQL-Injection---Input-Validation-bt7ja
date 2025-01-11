# Express.js Security Vulnerabilities

This repository demonstrates common security vulnerabilities in Express.js applications, specifically focusing on SQL injection and the lack of proper input validation.  The `bug.js` file contains vulnerable code, while `bugSolution.js` provides the corrected implementation.

**Vulnerabilities:**

* **SQL Injection:** The `/users/:id` route is vulnerable to SQL injection because user-supplied input (`req.params.id`) is directly incorporated into the database query.  A malicious user could craft an input to manipulate the query and potentially access sensitive data or modify the database.
* **Missing Input Validation:** The `/users` route lacks validation of user input, making it susceptible to various attacks such as cross-site scripting (XSS) or data manipulation.

**Solution:**

The `bugSolution.js` file demonstrates how to address these vulnerabilities:

* **Parameterized Queries:** Using parameterized queries prevents SQL injection by treating user input as data rather than code.
* **Input Validation:** Implementing robust input validation helps to sanitize user input and prevent malicious data from affecting the application.

**How to Run:**

1. Clone the repository.
2. Install dependencies: `npm install express pg`
3. Run `node bug.js` (to see vulnerable code)
4. Run `node bugSolution.js` (to see fixed code)