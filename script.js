function getInterestingFields(contentItem){
    var mainImage = getImageFromElements(contentItem.elements)
    return {
        headline: contentItem.fields.headline,
        trailText: contentItem.fields.trailText,
        mainImage: mainImage ? mainImage : contentItem.fields.thumbnail
    }
}

// This adds the top 3 articles from a content api search result. Try changing the URL to something else
addContentList("Harry Potter News", "http://content.guardianapis.com/search?q=harry%20potter&show-fields=all", pageSize=3)

// we sleep here to make sure that everything is added in the right order
sleep(500);

// Here, you can choose specific pieces of content to add to your page. 
addContentItems("Selected News", [
    "https://content.guardianapis.com/lifeandstyle/2015/oct/02/are-these-the-10-worst-board-games-of-all-time?show-fields=all",
    "https://content.guardianapis.com/film/2015/jun/09/hunger-games-mockingjay-2-jennifer-lawrence?show-fields=all",
    "https://content.guardianapis.com/books/2015/sep/19/suffragettes-why-still-matter-abi-morgan-film-writers-reflect?show-fields=all"
    ])