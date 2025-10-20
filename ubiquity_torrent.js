CmdUtils.CreateCommand({
  name: "torrent-search",
  takes: {"search_string": noun_arb_text},

  description: "Searches PirateBay, Isohunt, and Torrentz in new tabs.",

  author: { name: "Axel Boldt", email: "axelboldt@yahoo.com"},
  homepage: "http://math-www.uni-paderborn.de/~axel/",
  license: "Public domain",

  preview: "Searches for torrent on PirateBay, Isohunt and Torrentz.",
  execute: function( directObj ) {
    var search_string = encodeURIComponent(directObj.text);
    //Utils.openUrlInBrowser( "http://thepiratebay.org/search.php?q=" + search_string);
    //Utils.openUrlInBrowser( "http://isohunt.com/torrents/?ihq=" + search_string);
    //Utils.openUrlInBrowser( "http://www.torrentz.com/search?q=" + search_string);
    //The above doesn't work ( http://labs.toolness.com/trac/ticket/230 ).
    //In irc://irc.mozilla.org/ubiquity dims suggested this hack:
    var windowManager = Components.classes["@mozilla.org/appshell/window-mediator;1"]
       .getService(Components.interfaces.nsIWindowMediator);
    var browserWindow = windowManager.getMostRecentWindow("navigator:browser");
    var browser = browserWindow.getBrowser();
  
    browser.loadOneTab("http://thepiratebay.org/search.php?q=" + search_string, null, null, null, false, false);
    browser.loadOneTab("http://isohunt.com/torrents/?ihq=" + search_string, null, null, null, false, false);
    browser.loadOneTab("http://www.torrentz.com/search?q=" + search_string, null, null, null, false, false);
     }
   })
