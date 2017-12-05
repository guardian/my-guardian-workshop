function getInterestingFields(contentItem){
    //console.log(contentItem);
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

// This adds the top 3 articles from a content api search. Try changing "Harry Potter" to something else.
addRowOfNews("Harry Potter", 3)

addRowOfNews("Coding", 3)


// You could use the block below to add specific stories rather than just the top 3 from a certain topic
// addContentItems("Selected News", [
//     "https://content.guardianapis.com/lifeandstyle/2015/oct/02/are-these-the-10-worst-board-games-of-all-time",
//     "https://content.guardianapis.com/education/2016/mar/27/tom-bennett-behaviour-schools-teaching-hunger-games",
//     "https://content.guardianapis.com/lifeandstyle/womens-blog/2016/mar/03/my-great-grandmother-emmeline-pankhurst-would-still-be-fighting-for-equality-today"
//     ])
