CmdUtils.CreateCommand({
    name: "multi-search",
    takes: {"search_string": noun_arb_text},

    description: "Searches Google, Yahoo, MSN Live and Ask.com in new tabs.",

    author: { name: "Axel Boldt", email: "axelboldt@yahoo.com"},
    homepage: "http://math-www.uni-paderborn.de/~axel/",
    license: "Public domain",

    preview: "Searches Google, Yahoo, MSN Live and Ask.com in new tabs.",
    execute: function( directObj ) {
       var search_string = encodeURIComponent(directObj.text);

       //Utils.openUrlInBrowser("http://www.google.com/search?hl=en&q=" + search_string);
       //Utils.openUrlInBrowser("http://search.yahoo.com/search?ei=UTF-8&p=" + search_string);
       //Utils.openUrlInBrowser("http://search.msn.com/results.aspx?q=" + search_string);
       //Utils.openUrlInBrowser("http://www.ask.com/web?search=search&qsrc=0&o=0&l=dir&q=" + search_string);
       //The above doesn't work ( http://labs.toolness.com/trac/ticket/230 ).
       //In irc://irc.mozilla.org/ubiquity dims suggested this hack:
       var windowManager = Components.classes["@mozilla.org/appshell/window-mediator;1"]
         .getService(Components.interfaces.nsIWindowMediator);
       var browserWindow = windowManager.getMostRecentWindow("navigator:browser");
       var browser = browserWindow.getBrowser();
  
       browser.loadOneTab("http://www.google.com/search?hl=en&q=" + search_string, null, null, null, false, false);
       browser.loadOneTab("http://search.yahoo.com/search?ei=UTF-8&p=" + search_string, null, null, null, false, false);
       browser.loadOneTab("http://search.msn.com/results.aspx?q=" + search_string, null, null, null, false, false);
       browser.loadOneTab("http://www.ask.com/web?search=search&qsrc=0&o=0&l=dir&q=" + search_string, null, null, null, false, false);
     }
   })
