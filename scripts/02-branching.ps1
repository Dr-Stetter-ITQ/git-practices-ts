Write-Host "Setting back exercise 02-branching"

# Navigate to root repo
Set-Location -Path (Split-Path -Parent $MyInvocation.MyCommand.Definition)
cd ..

# Reset files
git checkout main
git reset --hard HEAD
git clean -fd

# Delete branch if exist
$branchExists = git branch --list "feature/greet"
if ($branchExists) {
    git branch -D feature/greet
}

if (-Not (Test-Path "02-branching")) {
    New-Item -ItemType Directory -Path "02-branching" | Out-Null
}


Set-Content -Path "02-branching\salute.ts" -Value 'console.log("Hello from main branch!");'

# Commit and push changes
git add 02-branching/salute.ts
git commit -m "reset exercise 02"
git push 

Write-Host "Done!"
