//var title=$("#searchTerm").val();
var title="trump";
var yearStart=$("#startYear").val();
var record=$("#numRecords").val();
var yearEnd=$("#endYear").val();
var pages= Math.ceil(yearEnd/10);



// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


url += '?' + $.param({
  'api-key': "242f8eebfd46494b956b11700c9ca617",
   q: title,
   begin_date:yearStart,
   end_date: yearEnd,
   page: pages
   
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});


