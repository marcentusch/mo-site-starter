# simple-site-starter

Super simple website starter template with no frameworks

Purpose for this is for me(or anyone who stumbles upon this) to have a easy starting point when working on smaller projects where frameworks and bundlers are not neccesary

Has some basic css normalizer and setup for theming based on system preference

Also uses a simple service worker to cache content so it is available offline

Project is missing a bundler. I have tried both parcel and webpack but had issues with deploying. Will look into it at some point

## Features

- Pure CSS theming based on system/browser color preference
- Caches assets for offline mode with a service worker
- Is set up for Progressive Web App, so users on mobile will be asked if they want to add the site to their home page
- Has 100 points in all Lighthouse categories(at least when deployed on Netlify)
- Uses system font face so we avoid waiting on google fonts and will have familiar font dependent upon which device the user is coming from. Copied from how GitHub does it

# Development

For now I do not use a bundler or anything project specific to setup dev server.
Simple solution is to use Live Server in VSCode

## List of things to replace when starting

- This Readme
- Meta tags and title in index.html
- `name` in package.json
- `name` and `short_name` in manifest.json
- icons in /images, 192x192 px and 512x512 px
