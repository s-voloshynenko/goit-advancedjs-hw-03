# goit-advancedjs-hw-03

Image search app built with Vite. Type a keyword, the app requests photos from
the [Pixabay API](https://pixabay.com/api/docs/) with Axios and renders them as
a gallery. Click a card to open the large image in SimpleLightbox. Notifications
use iziToast, the loading indicator is a css-loader spinner.

## Setup

Create a `.env` file in the project root (see `.env.example`):

```
VITE_PIXABAY_KEY=your_pixabay_key
```

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # build into dist/
```

## Deploy

The GitHub Actions workflow builds the project and publishes `dist` to the
`gh-pages` branch. Add a repository secret named `PIXABAY_KEY` (Settings >
Secrets and variables > Actions) so the build receives the API key.
