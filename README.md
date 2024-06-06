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

1. Create a new repo in TRW github, making sure to check 'Add a README file' and then in your terminal:
    - `git clone <repo name>` (to clone a local version of the project)
    - `npm init -y` (to generate package.json)
    - `npm install jest` (to install the Jest testing framework)
    - in package.json under "scripts" set "test": "jest"
1. Create the basic files for the project:

    - baker.js
    - baker.test.js

1. If you are completely new to testing (or to Jest) it is a good idea at this point to go to the Jest docs here: [Getting started](https://jestjs.io/docs/getting-started) and use their 'sum' example just to check everything is working as it should and to look at the syntax it uses. (Note you will need to change the require filename in your test file to be 'baker').

1. Run `npm test` and look at the printout in the terminal. If the test passes it will be green. Yeay all set up correctly.

1. Add a .gitignore to the project at this point and and specify `node_modules/` in it.

1. Add a link to the kata in the project's README.md file. This helps for reference when working through the kata.

## The stages of testing

1. **Red phase**

    Use the instructions in the Kata as a set of steps which all require a test.
    It is important to name the test well as it will serve as a description of the functionality that is being tested. For example the cakes function 'should return 0 if any ingredients in recipe are not available'. This will appear in the terminal printout when the tests are run and will explain what the production code actually does.

    Now run `npm test` . The test will fail, the 'red' phase. This is because we have not yet defined the function cakes.

2. **Green phase**

    Define the function in baker.js and export it. At this stage you can hard code the required outcome or the simplest way to achieve the desired outcome. Run `npm test` again. Test will pass, the 'green' phase.

3. **Refactor phase**

    This is where you improve the code and also neaten it up.
    Always run npm test after refactoring and check it is still green.

4. **Commit code**

5. **Repeat steps 1-4 with the next test**
