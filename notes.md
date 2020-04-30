# TESTING

## OBJECTIVES

AAA = Arrange -> Act -> Assert

-Setup Testing from scratch.
-Write unit testing.
-Test Driven Development

function(args) => return value; To test it we invoke function.
component(props) => return UI; To test it we Render a Component.

Endpoint(data) => return HTTP response; To test it we make a request.

Test suite: a group of tests.

Make sure your tests can fail.

## USER STORIES
As a ... role
I want  ... feature
So that  ... value

As an analyst
I want a calculator that can  add two numbers
So that I can write the sales reports

### Scenarios
```txt
Given ...
 and ...
 and ...
When ...
 and ...
 and ...
Then ...
 and ...

 ```

# Example: 
Given two numbers
When the add function is invoked
Then it should return the sum

## TEST Driven Development/Design
Red > Green > Refactor -----> Commit

Red: Write a failing test.

Green: Write enough implementation code to make the test pass.

Refactor: Rewrite the code without changing functionality. Reformatting -
the test and implematation code without breaking test.