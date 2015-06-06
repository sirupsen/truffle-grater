$(function() {
  $(".recipe").each(function() {
    var names = {}

    $(this).find(".ingredient-name").each(function() {
      var ingredient = $(this).text().split(" ")[0].toLowerCase().match(/[a-z]+/)
      names[ingredient] = true
    })

    var steps = $(this).children(".steps")
    var tokens = steps.html().split(" ")

    console.log(names)

    for (i = 0; i < tokens.length; i++) {
      if (names[tokens[i].toLowerCase().match(/[a-z]+/)]) {
        console.log("FOUND MATCH: " + tokens[i])
        tokens[i] = "<span class=\"step-ingredient\">" + tokens[i] + "</span>"
      }
    }

    steps.html(tokens.join(" "))
  })

  var findStepIngredients = function(that) {
    var name = $(that).text().split(" ")[0].toLowerCase().match(/[a-z]+/)
    return $(that)
      .closest(".recipe")
      .find(".step-ingredient")
      .filter(function() {
        var el = $(this).text().toLowerCase().match(/[a-z]+/)
        console.log(el)
        return el[0] == name
      })
  }

  $(".ingredient-name").on("mouseenter", function() {
    findStepIngredients(this).css("color", "#1EAEDB")
  })

  $(".ingredient-name").on("mouseleave", function() {
    findStepIngredients(this).css("color", "#222")
  })
})
