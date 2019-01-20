var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};
var univs = [];
for (i in data)
  univs.push(data[i]["complete"]);


$('#university-search .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'univs',
  source: substringMatcher(univs)
});



var professors = [];
for (i in data)
  if(!professors.includes(data[i]["prof"]))
    professors.push(data[i]["prof"]);

var courses = [];
for (i in data)
  if(!courses.includes(data[i]["course"]))
    courses.push(data[i]["course"]);

$('#professor-course-search .typeahead').typeahead({
  highlight: true
},
{
  name: 'professors',
  source: substringMatcher(professors),
  templates: {
    header: '<h3 class="names">Professors</h3>'
  }
},
{
  name: 'professors',
  source: substringMatcher(courses),
  templates: {
    header: '<h3 class="names">Courses</h3>'
  }
});
