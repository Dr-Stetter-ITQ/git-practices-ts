# Excesice 04 - Merge Conflicts

## Goal
Learn how to deal with conflicts when two branches modify the same part of a file.

## Context
I (@Reyes) have created an animals class on the `master` branch, this is located in `animals.ts`. However, **it is not completed** and can **have wrong changes**. Your task is to:
- Complete the class with all logic you consider necessary (e.g., age tracking, species validation, custom behaviors, etc.)
- Once your work is done, commit and push it to your branch, and then merge it into `master`
- Switch to my branch: `feature/animals-solution-by-reyes`.
- Try to merge this branch into `master`.
    - You will face conflicts in `animals.ts`

## Objetive
- Resolve the merge conflict by combining the best parts of both implementations (yours and @Reyes').
- You must manually edit the file to build a final Animal class that makes sense technically and semanticall

## Considerations
Everything that Reyes have done is not perfect. This is so that you can choose changes.
Consider creating `calculateAge` and `calculateHumanAge` to provoke merge conflicts!
Somo conflicts can not be auto resolved, you will probably need to resolved manually.

## Steps
1. Create a new branch from `master` called `feature/animals-solution-by-yourname`.
2. Switch to your new branch and complete `animals.ts`:
3. Commit and push your changes with a meaningful message.
4. Merge your branch into `master`.
5. Switch to Reyes' branch `feature/animals-solution-by-reyes`.
6. Merge Reyes' branch into `master`
7. Get rid of conflicts.


### You made something wrong?
You can restart this exercise by running `.\scripts\04-merge-conflicts.ps1`.