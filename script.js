

// Task 5: Try changing "Harry Potter" to something else, experiment with different queries and check the results 
addRowOfNews("Harry Potter ", 3);


function putContentInPage(sectionName, articleList) {

  var sectionNameBox = document.querySelector(".section-name-box");
  sectionNameBox.textContent = sectionName;

  // Extension Task: we will try and make this code shorter and cleaner

  // Select the boxes 
  var box1 = document.querySelector("#box1");
  var box2 = document.querySelector("#box2");
  var box3 = document.querySelector("#box3");


  // Add article headlines 
  var box1Headline = box1.querySelector('.headline');
  var box2Headline = box2.querySelector('.headline');
  var box3Headline = box3.querySelector('.headline');

  box1Headline.textContent = articleList[0].headline;
  box2Headline.textContent = articleList[1].headline;
  box3Headline.textContent = articleList[2].headline;


  // Add article trail text 
  // Task 8: Can you add the trail text content for boxes 2 and 3?
  var box1Trail = box1.querySelector('.trail');
  var box2Trail = box2.querySelector('.trail');
  var box3Trail = box3.querySelector('.trail');
 
  box1Trail.innerHTML = articleList[0].trailText;
  box2Trail.innerHTML = ""


  // Task 9: Can you figure out how to add images,
  // Task 9A: Grab the img element from the html


  // Task 9B: Set the 'src' of the img element to mainImage from the article list

}


function getInterestingFields(contentItem){
    var mainImage = getImage(contentItem);
    var articleInfo = {
        headline: contentItem.fields.headline,
        trailText: contentItem.fields.trailText,
        mainImage: mainImage ? mainImage : contentItem.fields.thumbnail
    }
    console.log(articleInfo);
    return articleInfo;
}

function addRowOfNews(rowSubject, numberOfItems){
    var contentApiQuery = encodeURIComponent(rowSubject);
    return addContentList(rowSubject, "http://content.guardianapis.com/search?q="+contentApiQuery, numberOfItems);
}


// You could use the block above to add specific stories rather than just the top 3 from a certain topic
// addContentItems("Selected News", [
//     "https://content.guardianapis.com/lifeandstyle/2015/oct/02/are-these-the-10-worst-board-games-of-all-time",
//     "https://content.guardianapis.com/education/2016/mar/27/tom-bennett-behaviour-schools-teaching-hunger-games",
//     "https://content.guardianapis.com/lifeandstyle/womens-blog/2016/mar/03/my-great-grandmother-emmeline-pankhurst-would-still-be-fighting-for-equality-today"
//     ])




