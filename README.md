# Team 1991 Website

This is the website for UHSSE 4-H Robotics Team 1991 The Dragons. It was built with [React](https://reactjs.org/), [next.js](https://nextjs.org/), [Grommet](https://v2.grommet.io/), [Netlify CMS](https://www.netlifycms.org/), and is hosted on [Vercel](https://vercel.com/).

**Make sure you are signed into GitHub as the `frcteam1991` account.** Alternatively, if your personal GitHub account has write access to the repository, simply sign in with that.

**All changes may take up to 2 minutes to be visible as the server redeploys the website**

## I want to change...

- [The images in the carousel on the home page](#home-page-images)
- [The YouTube video featured on the front page](#home-page-youtube-video)
- [The images in the media page](#media-page-images)
- [The list of sponsors](#sponsors-list)
- [The list of robots](#robot-list)
- [The list of awards](#awards-list)
- [News Feed](#news-feed)

 ### Home page images
 Replace the images in `public/indexImages/` with the images you would like to display in the carousel at the bottom of the page. In order to change the large header picture at the top of the page, replace `team.jpg` with another file named exactly `team.jpg`. Note that this file will also be displayed in the carousel at the bottom of the page. You can remove images by selecting the image and clicking the trash can icon at the top right of the page (delete file). Upload a new picture by dragging and dropping a picture onto the webpage once you are in the correct folder (like in Google Drive).

 Save your changes by clicking the green `commit changes` button, with `commit directly to the master branch` selected above (this should be the default).

 ### Home page YouTube Video
 This one is a little bit tricky. Be very careful when editing the file here, as any extra changes to the file can take down the website. If you not confident in your ability to make these changes, ask an experienced member of the programming team to help you. 
 
 First, navigate to the YouTube video you want to embed in another tab. Click the share button below the YouTube video, and then click embed. Locate the part of the text where it says `src="..."` where the `...` has a URL in the quotes. Copy the URL **without** the quotes. Now, open `/pages/index.js` on GitHub and click the pencil icon (edit file) in the top right. Scroll to line 246 (there are line numbers on the side of the file editor) and replace the URL in the file with the URL you copied.
 
 Save your changes by clicking the green `commit changes` button, with `commit directly to the master branch` selected above (this should be the default).

 ### Media page images
 Replace the images in `public/mediaPage/[year]` with the images you would like to display. Make a new folder each year. Access `[year]` folder you would like to change. Remove or add images as desired. Do this by selecting the image and pressing delete this file on the top right click the trashcan icon. Upload a new picture by dragging and dropping a picture onto the webpage once you are in the correct folder (like in Google Drive).

  Save your changes by clicking the green `commit changes` button, with `commit directly to the master branch` selected above (this should be the default).

 ### Robot List
 Scroll to the bottom of any page on the team website and click the `The Dragons` hyperlink. This will take you to the (kind of) hidden content management interface. You will need to authenticate with GitHub to ensure you are allowed to make changes to the website. Click the `continue with GitHub` button. Once again, **make sure you are logged in as the `frcteam1991` account**. From here choose `Robots` on the left side of the screen. You can now add or remove things as required. Try to fill out posts as labeled. Press `Publish` on the top right to finalize the post. Keep things in `Rich text` to allow for easy editing.

 ### Awards List
 Add awards in `public/awards.yml` using the commented out sample data as refrence. All directions are in the github file. Which can be edited in github by pressing the `Edit this file` button represented by the pencil icon in the top right of the file.

  Save your changes by clicking the green `commit changes` button, with `commit directly to the master branch` selected above (this should be the default).

### Sponsors List
In order to add/change sponsors, the files in the `public/sponsors/` directory must be changed. Inside `public/sponsors/` there is a directory for each tier of sponor, with image files for each sponsor's logo in the respective folder. Simply place more images or delete images in the respective tier's folder to update the relevant section on the website. The procedure for this is similar to the Home Page images. Do this by selecting the image and pressing delete this file on the top right. Upload a new picture by dragging and dropping a picture onto the webpage once you are in the correct folder (like in Google Drive.)

 Save your changes by clicking the green `commit changes` button, with `commit directly to the master branch` selected above (this should be the default).

### News Feed
 Scroll to the bottom of the page click the `The Dragons` hyperlink. This will grant you access to the hidden content management interface. Click the `continue with GitHub` button, and once again make sure you are logged in as the `frcteam1991` account. From here choose `News Feed` on the left side of the screen. You can now add or remove things as required. Try to fill out posts as labeled. Press `Publish` on the top right to finalize the post. Keep things in `Rich text`. *The content management interface will not show `new lines/line breaks` (pressing enter/return) in the preview of a post but they will appear when published*