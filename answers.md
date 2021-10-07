# Answers

## Javascript

1) I do not have a new favourite javascript feature, but I can see myself using Logical Assignment Operators a lot in the future.

2) I have not had the chance yet to use the new feature in a production code, just played around with some of them to get a sense of how to apply them when the time comes.

3) Yes there is a difference in my opinion between the regular function syntax and arrow function syntax. For one, arrow functions syntax are shorter and lets the developer write fewer lines of code especially if there is one one expression or statement present.
    
    For example:
       
        Regular funtion 
          const add = function(x, y) {
            return x + y;
          };

        Arrow Funtion 
          const add = (x, y) => x + y;

  And if only one argument is present, we can just pass the argument without including the paranthesis.

4) I don't think there is a difference based on the calls as both will result in an error. I don't think it is possible to increment the value of a parameter like that in a function.

5) A javascript class to me is just a fancy funtion mold for creating objects. Honestly I have never really understood the difference between a class and a function in a way I can confidently explain it to someone else. 


## CSS

6) CSS specificity to me is just the way browsers decide which styles or properties to display for a particular element.

7) The "!important" property in CSS is a way to force or ensure the browser uses a particular style or property to override another one. It works by overriding the specificity and making what ever property that has the "!important" keyword on it more important.

8) I prefer using flex in my layouts as it allows or gives me flexibility to play around with the way elements are displayed, but I also use grid a lot especially if the layout is simpler and just requires specific rows and columns. There are special occasions where I will use all though.

9) Negative margins are legal in CSS. They help move elements closer to their neighbors.

10) First of, if the div has no other styling how are we to know that the margin-top of the p tag shows up on the div? Also I ran into a similar situation once, while building a web page, to overcome this I used the "overflow" property and set it to "hidden" or "auto" and it worked for me. The reason I read at the time had to do with the margins collapsing because the was no styling to seperate the parent element from the child element.


## Unit Tests

11) I use Jest for unit tests in my React applications. I also tried Enzyme when I was just starting, testing components not connected to the Redux store using Enzyme was easy, but components connected to the Redux store, well they gave me some sleepless nights.

12) Like with learning anything, writing tests at the begining can be tricky and a bit difficult, I found that out, espcially when using Enzyme to test components connected to Redux, but with practise and consistency you eventually get better at it. In my career, professionally, unit test are covered using Jest while integration tests are covered with Cypress.

13) I have not thought of this before, but my guess is to test if a Parent component is passing props correctly to the child component we will have to test the parent component and create mock props to test and see if our assertions  that the child component receives those props are true or not. 



## `NB:`
I really did not understand the Test 3(Question 16) of the React section so I just did my best to implement something functional.
