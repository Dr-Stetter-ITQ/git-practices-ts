Write-Host "Setting back excersice 01-first-step"

# Navigate to root repo
Set-Location -Path (Split-Path -Parent $MyInvocation.MyCommand.Definition)
cd ..

# Reset files
git checkout main
git reset --hard HEAD
git clean -fd

# Create a the excersice folder
New-Item -ItemType Directory -Path "01-first-steps" | Out-Null
Set-Content -Path "01-first-steps\hello.ts" -Value 'console.log("Hello World!");'

# Commit and push changes
git add 01-first-steps/hello.ts
git commit -m "reset excersice"
git push 

Write-Host "Done!"
