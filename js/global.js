var declenList = ['gen', 'dat', 'acc', 'abl', 'voc'];
var randomNoun;
var randomDecl;

$(document).ready(function() {
    setNewQuestion();
});

window.onload = function() {
    document.getElementById("name").focus();
}

//$('input#name-submit').on("keypress", function() {
//    var name = $("input#name").val();
//    console.log(randomNoun + " " + randomDecl + " " + name);
//    if ($.trim(name) != '') {
//        $.post('name.php', {
//            nom: randomNoun,
//            type: randomDecl
//        }, function(data) {
//            var result = $.trim(data);
//            $.trim(data);
//            console.log("result" + result + "end");
//            if (name == result) {
//                console.log("true");
//                setNewQuestion();
//            } else {
//                alert("WRONG")
//
//            }
//        })
//    }
//});

$('input').bind('keypress', function(e) {
    if(e.keyCode==13){
        var name = $("input#name").val();
        console.log(randomNoun + " " + randomDecl + " " + name);
        if ($.trim(name) != '') {
            $.post('name.php', {
                nom: randomNoun,
                type: randomDecl
            }, function(data) {
                var result = $.trim(data);
                $.trim(data);
                console.log("result" + result + "end");
                if (name == result) {
                    console.log("true");
                    setNewQuestion();
                } else {
                    alert("WRONG")

                }
            })
        }
    }
});

function setNewQuestion() {
    var number = Math.floor(Math.random() * 5);
    console.log(number);
    randomDecl = declenList[number];
    console.log(randomDecl);
    $.post('getNom.php', {}, function(data) {
        $('div#noun').text(data);
        $('#subject').text(randomDecl);
        randomNoun = $.trim(data);
    });
    $('#name').val('');

}
