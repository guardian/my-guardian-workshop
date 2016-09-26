var articleBlockSource = $("#article-list").html();
var articleBlockTemplate = Handlebars.compile(articleBlockSource);

// Put somewhere in your scripting environment
if (jQuery.when.all===undefined) {
    jQuery.when.all = function(deferreds) {
        var deferred = new jQuery.Deferred();
        $.when.apply(jQuery, deferreds).then(
            function() {
                deferred.resolve(Array.prototype.slice.call(arguments));
            },
            function() {
                deferred.fail(Array.prototype.slice.call(arguments));
            });

        return deferred;
    }
}

function getImageFromElements(elements) {
    var mainImageElements =  elements.filter(function(element) {
            return element.relation === "main" && element.type === "image";
        })[0]
    if (mainImageElements) {
        var mainImage = mainImageElements.assets.filter(function(asset) {
            // console.log("asset", asset.typeData.width)
            return asset.typeData.width > 600;
        })[0]
        if (mainImage) {
            return mainImage.file
        }
    }
    return null;
}

function addApiParameters(url, key, pageSize) {
    var pageSize = pageSize || 3;
    return url + 'show-elements=image&tag=type/article&api-key=' + key + '&page-size=' + pageSize;
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function apiRequest(url, pageSize) {
    return jQuery.get(addApiParameters(url, API_KEY, pageSize))
}

function addContentList(sectionName, apiUrl, pageSize) {
    return apiRequest(apiUrl+"&", pageSize).then(function(response) {
        articles = response.response.results.map(function (result) {
            return getInterestingFields(result);
        });
        console.log(sectionName + ":", articles);
        $('body').append(articleBlockTemplate({articleList: articles, sectionName: sectionName}));
        return articles;
    })
}

function addContentItems(sectionName, apiUrls) {
    var capiResponses = apiUrls.map(function(url) {
        return apiRequest(url+"&").then(function(response) {
            return getInterestingFields(response.response.content);
        })
    })
    return $.when.all(capiResponses).then(function(articles) {
        console.log(sectionName + ":", articles);
        $('body').append(articleBlockTemplate({articleList: articles, sectionName: sectionName}));
    })
}
