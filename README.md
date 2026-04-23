# light

Static HTML article site for AWS IAM notes.

## Files

- `index.html`
- `styles.css`
- `script.js`

## GitHub Pages

This repo is ready to publish as a static site with GitHub Pages.

### Publish steps

1. Create a new GitHub repo named `light`.
2. Add the remote:

```bash
git -C /Users/waqar/Documents/Codex-Projects/light remote add origin https://github.com/<your-username>/light.git
```

3. Commit and push:

```bash
git -C /Users/waqar/Documents/Codex-Projects/light add .
git -C /Users/waqar/Documents/Codex-Projects/light commit -m "Publish IAM article"
git -C /Users/waqar/Documents/Codex-Projects/light branch -M main
git -C /Users/waqar/Documents/Codex-Projects/light push -u origin main
```

4. In GitHub, go to `Settings > Pages` and select:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`

Your site URL will be:

```txt
https://<your-username>.github.io/light/
```
