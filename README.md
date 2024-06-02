# Introduction to TDD using the kata 'Pete the Baker' using JavaScript

## Set up the project

1. Create a new repo in TRW github, making sure to check 'Add a README file' and then in your terminal:
    - `git clone <repo name>` (to clone a local version of the project)
    - `npm init -y` (to generate package.json)
    - `npm install jest` (to install the Jest testing framework)
    - in package.json under "scripts" set "test": "jest"
2. Create the basic files for the project:

    - baker.js
    - baker.test.js

3. If you are completely new to testing (or to Jest) it is a good idea at this point to go to the Jest docs here: [Getting started](https://jestjs.io/docs/getting-started) and use their 'sum' example just to check everything is working as it should and to look at the syntax it uses. (Note you will need to change the require filename in your test file to be 'baker').

4. Run `npm test` and look at the printout in the terminal. If the test passes it will be green. Yeay all set up correctly.

5. Add a .gitignore to the project at this point and and specify `node_modules/` in it.

6. Add a link to the kata in the project's README.md file. This helps for reference when working through the kata.
   [Pete the Baker](https://docs.google.com/document/d/1oCyiPhXUx_eRFSYk36zzGDB3W8lfwMd6pNxHEU5Rm8A/edit#heading=h.eyry7tzh9e8n)

## Write the first test

Use the instructions in the Kata as a set of steps which all require a test.
It is important to name the test well as the name will serve as a description of the functionality that is being tested.
