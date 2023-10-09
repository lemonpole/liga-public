# LIGA Esports Manager

<img src="./src/icons/logo.svg" alt="LIGA Esports Manager" width="300" height="300" />

## Commands

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`           |
| `npm run preview`      | Preview your build locally, before deploying      |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro --help` | Get help using the Astro CLI                      |
| `npm run format`       | Format code with [Prettier](https://prettier.io/) |
| `npm run clean`        | Remove `node_modules` and build output            |

## Converting PNG to SVG

SVGs are great for responsive websites so if it's feasible, consider converting that PNG to an SVG using [ImageMagick](http://www.imagemagick.org/Usage/draw/#svg_output) and [AutoTrace](https://github.com/autotrace/autotrace).

```bash
convert autotrace:src/assets/logo.png src/icons/logo.svg
```

## Credits

- TBD
