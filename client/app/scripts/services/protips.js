app.service('$protips', function() {
  var protips = [];
  // Move protips into the server.
  protips = [
    {
        "user": "Zagnaut",
        "upvotes": "9999",
        "description": "Mundo goes where he pleases",
        "content": "He's a meat stick of course.",
        "comments": []
    }, {
        "user": "Dyrus",
        "upvotes": "768",
        "description": "That's so DARIUS.",
        "content": "IF DEY BLEED, IMMA CLICK THEM AND THEY DIE. lol",
        "comments": []
    }, {
        "user": "Scarra",
        "upvotes": "400",
        "description": "PRESS R TO KATARINA",
        "content": "Spin 2 win brosef.",
        "comments": []
    }, {
        "user": "Froggen",
        "upvotes": "3",
        "description": "Spin to win to win to win to win lorem ipsum supercow aristcote meow meomw meow",
        "content": "Also works with, Garen, Darius, Karthus, and Kat.",
        "comments": []
    }
  ];

  this.findProtips = function () {
    return protips;
    // Make XHR for protips...?
  };

  this.findByPlayerName = function (champion) {
    // Make XHR for protips based on champion name in player=X query string.
  };

  this.findVersusProtips = function (player, opponent) {
    var protips = [];

    protips.append();
    return protips;
    // Make XHR for protips based on champion name in player=X and opponent=X query string.
  };

});