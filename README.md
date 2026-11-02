# Nehal — Four Months of Magic 💙

A lightweight, responsive baby milestone / birthday website built with HTML, CSS, and vanilla JavaScript.

## Preview locally
1. Extract this ZIP.
2. Open `index.html` in a browser.
3. Click **Choose photos** to preview photos from your device.
   - The first selected photo becomes the hero image.
   - Selected photos are added to the memory gallery.

## Important about photo uploads
The photo picker is a browser preview feature. Selected photos are **not uploaded to GitHub** and will not automatically stay after refresh or on another visitor's device.

To show Nehal's photos permanently on GitHub Pages:
1. Create a folder named `assets` and put your chosen images there (for example `nehal-1.jpg`, `nehal-2.jpg`).
2. In `index.html`, you can replace the hero placeholder with an image such as:
   `<img src="assets/nehal-1.jpg" alt="Nehal" />`
   and adjust the `.hero-photo` section as needed.
3. For the gallery, add image elements inside each `.memory-photo` container, for example:
   `<img src="assets/nehal-2.jpg" alt="Nehal at two months" />`
4. Commit and push the changes. The images will be part of the published website.

**Privacy tip:** Only publish baby photos if the family is comfortable with them being publicly accessible. GitHub Pages websites are generally public unless you use a different private hosting arrangement.

## Publish on GitHub Pages
1. Create a new GitHub repository, e.g. `nehal-four-months`.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then Save.
6. Wait for the published URL shown in Settings → Pages.

No build tools or npm installation are required.


## Included photo files
The seven photos you provided are included as `assets/nehal-01.jpg` through `assets/nehal-07.jpg`, optimized for web display. They will appear permanently when this project is published. Photos selected through the browser's extra photo picker are only a local preview and are not uploaded automatically.

**Privacy reminder:** GitHub Pages sites are public by default. Make sure the family is comfortable with these baby/family photos being publicly viewable before publishing.
