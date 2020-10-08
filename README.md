# Media-Menu
## Using the Media Menu
This resource was created as a reference for people interested in finding out about the choices that they have when creating a course with CGPS using media outside of the LMS. Here is the link to the [active page](https://uneids.github.io/Media-Menu/)

## Updating the Media Menu
This menu is meant to be updated with more resources. To do so, you have to create content in 2 places within the repository: [index.html](https://github.com/uneIDS/Media-Menu/blob/main/index.html), and [findTools.js](https://github.com/uneIDS/Media-Menu/blob/main/findTools.js). Click on the pencil icon at the top of the text box to edit the file.

First, at index.html, go to the end and find the comment: 
```html
<!--<div id="resource name" style="display:none">
        <div class="inner-content">
          <div class="resource-name">
            <h2><a href="resource website" target="_blank">Name of Resource<a></h2>
          </div>
        <div class="description">
          <div class="image or video">image or video using html formatting</div>
          <hr>
          <h5>What is it and what does it do?</h5>
          <p>Content</p>
          <h5>Examples:</h5>
          <ul>
            <li>List item, copy and paste within "<ul>" to add more</li>
          </ul>
          <h5>Planning Considerations:</h5>
        </div>
    </div>-->
```
Copy and paste everything and delete the "<!--" and "-->" at the front and end of the passage in the place where you want to put the new content. Follow the template to add it in the same style as the other ones on the list.  Make sure to change the id in the first line from "resource name" to the name of the new resource (and anything else that feels like it should be updated...eg. "resource website", "image or video", etc.

Once you've added your resource, scroll down to the bottom of the page where there is a green button that says "Commit changes" and has a few text boxes on top of it. Fill out any information you want, and then press the button to commit. 

**Then go to the findTools.js file linked above.** 

Click the same "edit" icon (the pencil) to edit the javascript. ***IMPORTANT: The only thing you want to edit here is in the first section of the array.***

```javascript
var tools = [
  {
    name: "Hypothes.is",
    type: "Writing/Editing",
    spice: "Easy"
  },
  {
    name: "Hemmingway",
    type: "Writing/Editing",
    spice: "Easy"
  },
  {
    name: "Padlet",
    type: "Project Planning, Writing/Editing",
    spice: "Easy"
  },
  {
    name: "Vyond",
    type: "Animation, Video",
    spice: "Medium"
  },
  {
    name: "H5P",
    type: "Video",
    spice: "Medium"
  },
  {
    name: "Screencast-o-matic",
    type: "Video",
    spice: "Easy"
  },
  {
    name: "Twine",
    type: "Storytelling",
    spice: "Hard"
  },
  {
    name: "Rise",
    type: "Writing/Editing",
    spice: "Medium"
  } <- add next element here
];
```
Follow the same formatting to add the new resource using this template below the last "}" element:
```javascript
,
{
  name: "Resource name" -- must be the same as the id from HTML,
  type: at least one of "Animation", "Video", "Storytelling", "Writing/Editing", "Project Planning",
  spice: one of "Easy", "Medium", "Hard"
}
```
Once you've added the element, scroll to the bottom and press "Commit changes" just like you did with the HTML page. 

That's it! You've updated the media menu.

*That being said, if you have any issues or are overwhelmed, reach out to Caroline please before editing.*
