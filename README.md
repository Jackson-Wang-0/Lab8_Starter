# Lab 8 - Starter
Name: zhicheng Wang 
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed. By using GitHub Actions or a similar CI/CD system, we can automate the execution of our tests, enabling faster feedback loops, consistent testing environments, and improved overall code quality.
<br>

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Yes, I would use a unit test to test the "message" feature of a messaging application. It would check if the message is correctly created, formatted, and delivered to the intended recipient. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use a unit test to test the "max message length" feature of a messaging application. In this case, the "max message length" feature is a specific behavior that can be tested independently. 
<br>
