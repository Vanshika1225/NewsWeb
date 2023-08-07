getNews();
function getNews() {
    $(".posts").text("");
    var keyword = $("#keyword").val();
    if (keyword == '') {
        keyword = "latest";
    }
    var url = "https://newsapi.org/v2/everything?q="+keyword+"&apiKey=36672907a37042ae964a0e2f97c6098e";
    $("#load").show();
    $.get(url, (response) => {
        $("#load").hide();
        console.log(response.articles)
        for (i = 0; i < response.articles.length; i++) {
            var html = `
            <div class="card m-3 shadow">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${response.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${response.articles[i].title}</h5>
                <p class="card-text">${response.articles[i].content}</p>
                <p class="card-text"><small class="text-muted">${response.articles[i].publishedAt} | ${response.articles[i].author}</small></p>
                <a href="${response.articles[i].url}" target="_blank" class="btn btn-danger">Read More</a>
                <p></p>
                </div>
            </div>
            </div>
        </div>`;
            $(".posts").append(html);
        }
    });
}
