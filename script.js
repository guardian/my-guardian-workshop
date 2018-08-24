function getInterestingFields(contentItem){
    var mainImage = getImage(contentItem);
    return {
        headline: contentItem.fields.headline,
        trailText: contentItem.fields.trailText,
        mainImage: mainImage ? mainImage : contentItem.fields.thumbnail
    }
}

function addRowOfNews(rowSubject, numberOfItems){
    var contentApiQuery = encodeURIComponent(rowSubject);
    return addContentList(rowSubject, "http://content.guardianapis.com/search?q="+contentApiQuery, numberOfItems);
}

// This adds the top 3 articles from a content api search.
// Task: Try changing "Harry Potter" to something else.
addRowOfNews("Harry Potter ", 3);

// You could use the block below to add specific stories rather than just the top 3 from a certain topic
// addContentItems("Selected News", [
//     "https://content.guardianapis.com/lifeandstyle/2015/oct/02/are-these-the-10-worst-board-games-of-all-time",
//     "https://content.guardianapis.com/education/2016/mar/27/tom-bennett-behaviour-schools-teaching-hunger-games",
//     "https://content.guardianapis.com/lifeandstyle/womens-blog/2016/mar/03/my-great-grandmother-emmeline-pankhurst-would-still-be-fighting-for-equality-today"
//     ])


function putContentInPage(sectionName, articleList) {

  var sectionNameBox = document.querySelector(".section-name-box");

  sectionNameBox.textContent = sectionName;

  // Task 3: we will try and make this shorter using the line below
  // var allBoxes = document.querySelectorAll(".box");

  var box1 = document.querySelector("#box1");
  var box2 = document.querySelector("#box2");
  var box3 = document.querySelector("#box3");

  var box1Headline = box1.querySelector('.headline');
  var box2Headline = box2.querySelector('.headline');
  var box3Headline = box3.querySelector('.headline');

  box1Headline.textContent = articleList[0].headline;
  box2Headline.textContent = articleList[1].headline;
  box3Headline.textContent = articleList[2].headline;

  var box1Trail = box1.querySelector('.trail');
  var box2Trail = box2.querySelector('.trail');
  var box3Trail = box3.querySelector('.trail');


  // Task 1: Can you add the trail text content for boxes 2 and 3?

  box1Trail.innerHTML = articleList[0].trailText;


  // Task 2: Can you figure out how to add images


}
