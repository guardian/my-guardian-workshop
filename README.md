# My Guardian workshop
## Goal
The aim of this workshop is to introduce you to the basic components of a webpage: HTML, CSS and JavaScript. You can find out more information from [Mozilla's Developer Network's Getting started with the Web
 tutorials](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web). 
 
 ## Setup
 To get started, first create an api-key.js file using the provided setup-key.sh script:

`./setup-key.sh <YOUR-CONTENT-API-KEY-GOES-HERE>`

Websites are a collection of files. We can have these files on our laptops and open them in a browser to create our own website: you should be able to open `home.html` in a browser and get a sample page. This project uses handlebars.js, bootstrap 3 and jquery.

You might find the [slides](https://docs.google.com/presentation/d/1esH3pREGDiS3xLx8xm_J4n8zcXloLTg-HWBwvhxLSLc/edit#slide=id.g179782eb9d_1_8) and [script](https://docs.google.com/document/d/1HyrYoc9qoLna6t6dQIsWrNmYZWq8_rl7ZN3IMeVSu9Y/edit) we used to introuduce the tasks when we ran ada lovelace day this year useful. 

## Steps
Things to do during the workshop:
 - Start off by opening `home.html` in a web browser (recommended google chrome or firefox) - you should get to a page showing 6 headlines. If you don't get this, for example if the page is blank, there's likely a problem with your content api key.
 - Next, modify `home.html` so that instead of saying phil's guardian, it says 'yourname's guardian' or something similar
 - Next, get the trail text to show underneath the headlines - there's a marked place to add this in `home.html`. You can work out how to do this by looking at how it's done for headline, then looking in `script.js` at `getInterestingFields` in `script.js` to see what fields you have available. (Note: to get rid of 
 strange HTML code in the trail use three curly brackets instead of two: {{{your-code}}} )
 - Next, add images to the page. There is a marked place to do this in `home.html`, you might find the html in 'useful code snippets' useful.
- You should now have a page with 6 stories in it with a headline, image and summary.

 - A fun thing to do now might be to change the types of stories that are appearing on the page. You can do this by modifying `script.js` - you should be able to find a line which says `addRowOfNews("Harry Potter", 3)` - this means 'add a row of news about harry potter with 3 items in it'. Try changing these values and seeing what happens.
 
 - By uncommenting `addContentItems` (in script.js), you can also add a row of specific Guardian stories.

 - Now you've got the news you want. Let's make it a bit more interesting - most websites have links on them, and yours should be no different. Modify the headline of each article so that it links to that story. To do this you'll need to first modify `getInterestingFields` in `script.js` so that it extracts the url from the content api response. The best way to work out how to do this is to look at a page from the content api, and look for the webURL field, e.g. https://content.guardianapis.com/lifeandstyle/2015/oct/02/are-these-the-10-worst-board-games-of-all-time?show-fields=all&show-elements=all&api-key=test

- You might also want to add who wrote the article. Alternatively, we could make the page a bit more interesting with some CSS!

 - To get started with css, open `style.css`. The first thing I suggest you do is to try change the header background colour  - replace `#F6F6F6` with a new colour, e.g. `red`.
 - To make the images change when the mouse is over them, you could start by changing the opacity of `.fade:hover` to a number between 0 and 1, then see what happens. Make sure the images have the class necessary to apply the styling properties. You could also try adding the styling directly in the HTML - why might this be a bad idea?
 - To introduce more effects to images, you'll need to add extra classes to your image. Try adding the circle class.
 
## Getting your site online
If you've got access to Amazon S3 you could use the `upload-site.sh` script to push the code to an S3 bucket. You'll need to set that bucket up for static website hosting for it to correctly serve your site. 

## Conclusion
 - Hopefully you've learned enough by now to try some things out for yourself. And remember, if you get stuck, just google your problem! (Or get in touch with me - philip.mcmahon [at] guardian.co.uk).
 - Check out [Further Reading](/docs/further-reading.md) to continue learning
 
