# Introduction to TDD using the kata 'Pete the Baker' using JavaScript

## The Kata: [Pete the Baker](https://docs.google.com/document/d/1oCyiPhXUx_eRFSYk36zzGDB3W8lfwMd6pNxHEU5Rm8A/edit#heading=h.eyry7tzh9e8n)

Pete likes to bake cakes. He has some recipes and ingredients. Unfortunately he is not good at maths. Can you help him to find out how many cakes he could bake considering his recipes?
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
Examples:

-   must return 0 if ingredients in recipe are not available:
    cakes({flour: 500},{sugar: 500});

-   must return 1 if enough of recipe ingredients:
    cakes({flour: 500},{flour: 500});

-   must return 2 if at least twice the amount of recipe ingredients
    cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});

-   must return 0
    cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

## How to set up the project

-   Note only one group member needs to set up the project.

1. Clone this repo from the TRW github into a new project with a name of your choice

    - `git clone <this-repo-url> <your-project-name>`

2. Run npm install (you will need to have node installed on your machine)

3. If you are completely new to testing (or to Jest) it is a good idea at this point to go to the Jest docs here: [Getting started](https://jestjs.io/docs/getting-started) and use their 'sum' example just to check everything is working as it should and to look at the syntax it uses. (This example is shown in these starter files).

4. Run `npm test` and look at the printout in the terminal. (Note that the tests will be detected automatically if the files are named with the test.js extension). Using this starter code, if everything has been set up correctly the set up 'sum' test should pass - with a green printout, but the first 'baker' test will fail with red printout. Update the code in baker.js so the test passes. Run `npm test` again and both tests should show a green printout.

5. In green phase add, commit and push the code to github. At this stage the next person can take over as driver (they will need to clone the new project and run npm install)

6. Uncomment the second test, which will fail, and update the cake function so it passes. Repeat writing tests which fail and then write code to make them pass until all facets of the functionality you are trying to achieve have passing tests.

## The stages of testing

1. **Red phase**

    Use the instructions in the Kata as a set of steps which all require a test, implemented one at a time.
    It is important to name the test well as it will serve as a description of the functionality that is being tested. The first test in our example is: _cakes function 'should return 0 if any ingredients in recipe are not available'_. This will appear in the terminal printout when the tests are run alongside the result of the test. If the test has been name well it will explain what the production code actually does.

    Now run `npm test` . The test will fail, the 'red' phase.

2. **Green phase**

    Add the minimum code to achieve the desired outcome (for example in this case cakes could simply return 0). Run `npm test` again. Test will pass, the 'green' phase.

3. **Refactor phase**

    This is where you improve the code and also neaten it up.
    Always run npm test after refactoring and check it is still green.

4. **Commit code**

5. **Repeat steps 1-4 with the next test**
