# For Anjana ♡ — Third Anniversary Website

Everything you personalise lives in two places:

1. `src/data/anniversaryData.js` — all text, captions, letter and the final message.
2. `public/assets/` — your photos, optional videos and music.

You never need to edit any other file.

---

## A. Open the project

1. Extract the ZIP. You get a folder called `jain-anjana-anniversary`.
2. Open that folder in Antigravity (File → Open Folder).
3. Open `src/data/anniversaryData.js` to find the text you want to change.

## B. Add your photos

1. Go to `public/assets/photos/`.
2. Copy your photos in and rename them to `photo-01.jpg` … `photo-12.jpg`
   (replace the existing names, or keep the names and overwrite).
3. To change a caption, edit the `caption:` text for that photo in `anniversaryData.js`.
   Example: `{ src: 'assets/photos/photo-03.jpg', caption: 'Your text here', style: 'landscape' }`
4. To use a photo with a different filename, change the `src:` path in the same line.

Photo mapping:
- photo-01 → first gallery card, also the opening background
- photo-02 to photo-11 → gallery cards in order
- photo-12 → last gallery card and the final section photo

Style options: `polaroid`, `portrait`, `landscape`, `editorial`.
Photos work best at 1600 px or more on the long side, JPG format.

## C. Music and video

- Music: put your file at `public/assets/audio/background.mp3`. Replace the file, keep the name.
  Adjust `volume` in `anniversaryData.js` if it is too loud (0.0 to 1.0).
- Videos: put `.mp4` files in `public/assets/videos/`, then add a line in `videos: [ ... ]` in
  `anniversaryData.js`. Videos play only when she presses play.

## D. Run it on your computer (Windows)

You need Node.js LTS installed (https://nodejs.org). Then open a terminal in the project folder
(in Antigravity: Terminal → New Terminal) and run:

    npm install
    npm run dev

Open the address shown in the terminal, usually http://localhost:5173/.
Press Ctrl + C in the terminal to stop it.

## E. Build the project

    npm run build

A successful build prints "built in ..." and creates a `dist` folder. You can test that with `npm run preview`.

## F. Publish on GitHub Pages

1. Go to https://github.com, sign in, and click **New repository**.
   Name it, for example, `anjana-anniversary`. Keep it **Public**. Click **Create repository**.
2. Upload the whole project folder, **including** `public/assets` (with your photos and music)
   and the hidden `.github` folder. The easiest way is GitHub Desktop or the Git command line.
   Upload everything, not only the `src` folder.
3. In the repository, go to **Settings → Pages**. Under **Build and deployment → Source**,
   choose **GitHub Actions**.
4. Go to the **Actions** tab. The "Deploy to GitHub Pages" workflow runs automatically after each upload.
   Wait for the green tick (1–3 minutes).
5. Go back to **Settings → Pages** to find your link, which looks like:
   `https://<your-username>.github.io/<repository-name>/`
6. Open the link on your Android phone and test the opening button, the photos, music and the letter.

To update the site later, edit the files and upload them again. It republishes automatically.

## G. Troubleshooting

- **Photo shows a pale box with a file name:** the file name does not match the `src:` path, or the file is not in `public/assets/photos/`.
- **No music button:** `background.mp3` is missing from `public/assets/audio/`.
- **Music does not start:** tap the "♪ Music off" button once. Phones allow music only after a tap.
- **Green tick missing on GitHub:** open the Actions tab, click the failed run, and check that the `.github` folder was uploaded.
- **Page looks old after an update:** wait a minute and refresh, or open the link in a private tab.
