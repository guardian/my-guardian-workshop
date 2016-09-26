function getInterestingFields(contentItem){
    console.log(contentItem); //<<< might be useful to explain how to finish the below block off
    var mainImage = getImageFromElements(contentItem.elements)
    return {
        headline: contentItem.fields.headline,
        trailText: contentItem.fields.trailText,
        mainImage: mainImage ? mainImage : contentItem.fields.thumbnail,
        byline:  contentItem.fields.byline ? contentItem.fields.byline : 'unknown'
    }
}

function addRowOfNews(rowSubject, numberOfItems = 3){
    var contentApiQuery = encodeURIComponent(rowSubject);
    return addContentList(rowSubject, "http://content.guardianapis.com/search?show-fields=all&show-elements=all&q="+contentApiQuery, numberOfItems);
}

function makeContentApiUrlFromGuardianUrl(guardianUrl) {
    var contentApiURL = guardianUrl.replace("www.theguardian", "content.guardianapis")
    return contentApiURL + "?show-fields=all&show-elements=all"
}

// This adds the top 3 articles from a content api search result. Try changing the URL to something else
addRowOfNews("Chocolate", 3)

// we sleep (pause) here to make sure that everything is added in the right order
sleep(500);

// Here, you can choose specific pieces of content to add to your page. 
addContentItems("Selected News", [
    "https://content.guardianapis.com/lifeandstyle/2015/oct/02/are-these-the-10-worst-board-games-of-all-time?show-fields=all&show-elements=all",
    "https://content.guardianapis.com/education/2016/mar/27/tom-bennett-behaviour-schools-teaching-hunger-games?show-fields=all&show-elements=all",
    "https://content.guardianapis.com/lifeandstyle/womens-blog/2016/mar/03/my-great-grandmother-emmeline-pankhurst-would-still-be-fighting-for-equality-today?show-fields=all&show-elements=all"
    ])
