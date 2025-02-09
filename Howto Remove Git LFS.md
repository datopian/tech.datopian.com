---
created: 2024-12-15
authors: [ "rufuspollock" ]
---

# Howto Remove Git LFS

Best reference so far is https://stackoverflow.com/questions/48699293/how-do-i-disable-git-lfs

In summary:

```bash
git lfs migrate export --include="*" --everything
git lfs uninstall
```

Then you need to force push over current repo or push to a new one ... (you'll have rewritten git history this way)
