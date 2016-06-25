function Drinkingredients () {
    this.strong= ["a glug of rum", "a slug of whisky", "a splash of gin"];
    this.salty= ["an olive on a stick", "a salt-dusted rim", "a rasher of bacon"];
    this.bitter= ["a shake of bitters", "a splash of tonic", "a twist of lemon peel"];
    this.sweet= ["a sugar cube", "a spoonful of honey", "a splash of cola"];
    this.fruityFinish = ["a slice of orange", "a dash of cassis", "a cherry on top"];
}

function Questions () {
    this.strong = "Do ye like yer drinks strong?";
    this.salty = "Do ye like it with a salty tang?";
    this.bitter = "Are ye a lubber who likes it bitter?";
    this.sweet = "Would ye like a bit of sweetness with yer poison?";
    this.fruityFinish = "Are ye one for a fruity finish?";
}

//Methods
function createButton(text, classes) {
    return "<button class='" + classes + " waves-effect waves-light btn red'>" + text + "</button>";
}

//App
$("document").ready(function (){
    $("#string").hide();
    $(".choiceNo").click(function () {
        alert("Then get out of my cantina, ya bum!");
    });
    $(".choiceYes").click(function () {
        $(".app").append("<div><h3>What's yer name, pirate?</h3></div>");
        $(".app").append("<input type='text' class='name' />" + createButton("Tell name", "nameButton"));
        $(".app").append("<div><h3>Alrighty! Now let me ask ya a few questions about what ya like to drink.</h3></div>");
        var questions = new Questions();
        for (question in questions){
            var text = questions[question];
            $(".app").append("<div><h3>" + text + "</h3></div>");
            $(".app").append("<input id=" + question + " type='checkbox'></input>");
        }
        $(".app").append("<button class='makeDrink'>Make My Drink!</button>");
        $(".makeDrink").click(function () {
            var myDrink = "";
            for (question in questions) {
                if ($("#" + question + ":checked").length > 0 ) {
                    var ingredients = new Drinkingredients();
                    var ingredientList = ingredients[question];
                    var arr = Math.floor(Math.random() * (3 - 0)) + 0;
                    if (myDrink !== "") {
                        myDrink = myDrink + " and " + ingredientList[arr];
                    } else {
                        myDrink = myDrink + ingredientList[arr];
                    }

                }
            }
            $("#string").show()
            $("#ingredients").html(myDrink);

        })
    });
});