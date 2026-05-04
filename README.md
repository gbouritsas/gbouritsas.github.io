# Giorgos Bouritsas – Hugo site

## Preview locally
```sh
hugo server
```
Then open http://localhost:1313

## Add a new publication
Edit `data/publications.yaml` and add a new entry at the top:
```yaml
- title: "Your Paper Title"
  authors: "Author One, Giorgos Bouritsas, Author Two"
  venue: "Conference Name Year"
  link: "https://link-to-paper.com"
  code: "https://github.com/..."   # optional, remove if no code
  bibtex: |
    @inproceedings{yourkey2025,
      title={Your Paper Title},
      ...
    }
```

## Update bio
Edit `content/_index.md` — plain text with HTML links allowed.

## Update news
Edit the news section in `layouts/index.html`.

## Deploy to GitHub Pages
```sh
hugo
# then push the /public folder, or use the GitHub Actions workflow
```
