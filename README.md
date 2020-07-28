# Static Website Hosting

[staticwebsitehosting.org](http://staticwebsitehosting.org), a leaderboard of top static website hosting providers for Jamstack sites.

[![Netlify Status](https://api.netlify.com/api/v1/badges/388637c1-8040-4b2d-84b4-1cfa38cd62bb/deploy-status)](https://app.netlify.com/sites/staticwebsitehosting/deploys)

## Contributing

Missing a static website hosting provider here? Just fork the repo and add the provider with an `index.md` file in the `content/sites/<name>/` folder.

Make sure to follow the following rules:

- **Static Website Hosting:** No server-side website hosting options. This means it needs to serve static content directly without involving PHP, Ruby, Node.js, Java, etc. The hosting provider must have the option to enable a CDN for optimized global static asset distribution which is one of the benefits of the Jamstack approach.
- **Stick to the format:** Fill out all the same fields as the other static website hosting providers in `content/sites`.
- **Short description:** Keep all the details for the body text, keep the description for the overview page short and sweet.

## Usage

Be sure that you have the latest node and npm installed, then clone this repository and run:

```bash
npm install
npm start
```

Then visit http://localhost:8000/ - Gatsby will automatically reload when changes occur.

To test a production build locally, do:

```bash
npm run build
npm run serve
```

To run a production build for deployment:

```bash
npm run build
```

## Cosmic

staticwebsitehosting.org is built and maintained by [Cosmic](https://www.cosmicjs.com), a headless CMS to manage content for static websites and apps.

## License

staticwebsitehosting.org is released under the [MIT License](LICENSE).
Please make sure you understand its [implications and guarantees](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).
