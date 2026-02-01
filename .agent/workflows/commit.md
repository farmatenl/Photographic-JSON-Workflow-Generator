---
description: Stage, commit, and push changes with a conventional commit message
---

### Steps

// turbo-all

1. **Stage All Changes**: Automatically stage all modified and new files.

   ```bash
   git add .
   ```

2. **Analyze Changes**: Get the diff of staged changes to understand the context.

   ```bash
   git diff --cached
   ```

3. **Generate & Commit**: Generate a professional message following [Conventional Commits](https://www.conventionalcommits.org/) and execute the commit.

   ```bash
   git commit -m "<ai_generated_message>"
   ```

4. **Push**: Optionally push the changes.

   ```bash
   git push
   ```
