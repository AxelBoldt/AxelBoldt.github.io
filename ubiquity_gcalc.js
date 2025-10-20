CmdUtils.CreateCommand({
    name: "gcalc",
    takes: {"expression": noun_arb_text},

    description: "Google's calculator: knows many functions, constants, units, currencies, etc.",
    help: "Try 5% of 700,  sin( sqrt( ln(pi))),  (1+i)^3,  15 mod 9, (5 choose 2) / 3!,  speed of light in miles per hour,  3 dollars in euros,  242 in hex, MCMXVI in decimal.",

    icon: "chrome://ubiquity/content/icons/calculator.png",

    author: { name: "Axel Boldt", email: "axelboldt@yahoo.com"},
    homepage: "http://math-www.uni-paderborn.de/~axel/",
    license: "Public domain",

    // URL of Google page to which expression is to be appended. We want only 1 result.
    _google_url: "http://www.google.com/search?hl=en&num=1&q=",

    // Regular expression that matches a Google result page iff it is a calculator result;
    // first subexpression matches the actual result
    _calc_regexp: /\/calc_img\.gif.*?<b>(.*?)<\/b>/i,

    // Link to calculator command help:
    _calc_help: "Examples: 3^4/sqrt(2)-pi,&nbsp;&nbsp;3 inch in cm,&nbsp;&nbsp; speed of light,&nbsp;&nbsp; 0xAF in decimal<br><u><a href=\"http://www.googleguide.com/calculator.html\">(Google calculator command list)</a></u>",

    execute: function( directObj ) {
      var expression = directObj.text;
      var url = this._google_url + encodeURIComponent(expression);
      Utils.openUrlInBrowser( url );
    },

    preview: function( pblock, directObj ) {

      var expression = directObj.text;
      var cmd = this;

      pblock.innerHTML = this._calc_help;

      jQuery.get( this._google_url + encodeURIComponent(expression), {}, 
         function( result_page ) {
           var matchresult = result_page.match(cmd._calc_regexp);
           if (matchresult) {
              pblock.innerHTML = "<h2>" + matchresult[1] + "</h2>" + cmd._calc_help;
           } else {
              pblock.innerHTML = cmd._calc_help;
           }
       });
      }
  })
