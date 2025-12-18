STEP BY STEP

```npm init install -y```

- Creates the package.json - ID of the project
- It says to the computer that's a JavaScript file.
- -y snwer yes to all default values
- npm = Node Package Manager

```npm install -D @playwright/test```

- Creates folder node_modules (it has everything playwright needds to run, also the code. NEVER TOUCH IT MANUALLY)
- -D - "--save-dev" - tool used only for dev/test, not used on real application (playwright isn't part of the website.)
- @playwright/test - playwright library
- Now package.json is updated "This project uses playwright".

```npx playwright install```

- Downalod the browsers that playwright needs to control and run automated tests.
- npx = Node Package Execute
- npx install -g playwiright. -g installs playwight in all pc not only in the project.
* avoid it cause can cause 1 - version conflicts 2 - "works on my machine" (?) problems 3 - UI failures

