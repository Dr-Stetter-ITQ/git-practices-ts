# Excesice 03 - Merging

## Goal
Learn how to merge branches.

## Context
I (@Reyes) have created a calculator class on the `master` branch, this is located in `calculator.ts`. However, it contains several issues:
- Some operation methods (`substract`, `multiplication`, `division`) return incorrect results.
- There's no generic method to perform a calculation based on an operation type.

Your job is to **fix the class in a feature branch** and **merge it back into `master`**.

## Steps
1. Create a new branch from `master` called `feature/fix-calculator`.
2. Switch to your new branch and apply the following changes:

    - Fix all operation methods: `add`, `substract`, `multiplication`, and `division`.
    -  Handle division by zero by throwing an error with a message.
    - Introduce a public method called `calculate(a: number, b: number, op: Operation)` that performs the correct operation based on the `op` value.
        - The individual operation methods should remain `private`.
    - Refactor the "test" calls to use `calculate` instead of calling each method directly.
3. Commit and push your changes with a meaningful message.
4. Merge your branch into `master` and resolve any conflicts if necessary.


### You made something wrong?
You can restart this exercise by running `.\scripts\03-branching.ps1`.