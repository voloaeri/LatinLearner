var declenList = [ 'nom','gen', 'dat', 'acc', 'abl', 'voc'];
var randomNoun;
var randomDecl;

$(document).ready(function() {
    setNewQuestion();
});

window.onload = function() {
    document.getElementById("input").focus();
}

$('input').bind('keypress', function(e) {
    if(e.keyCode==13){
        var name = $("input").val();
        console.log(randomNoun + " " + randomDecl + " " + name);
        if ($.trim(name) != '') {
            $.post('name.php', {
                nom: randomNoun,
                type: randomDecl
            }, function(data) {
                var result = $.trim(data);
                $.trim(data);
                if (name == result) {
                    $('input').css('color','green');
                    setTimeout(function(){
                      setNewQuestion();
                      $('input').css('color','black');
                    }, 700);
                } else {
                      $('input').css('color','red');
                      setTimeout(function(){
                      $('input').val('');
                      $('input').css('color','black');
                    }, 800);
                }

            })
        }
    }
});

function setNewQuestion() {
    var number = Math.floor(Math.random() * 6);
    console.log(number);
    randomDecl = declenList[number];
    console.log(randomDecl);
    $.post('getNom.php', {}, function(data) {
        $('#noun').text(data);
        $('#subject').text(switchSubject(randomDecl));
        randomNoun = $.trim(data);
    });
    $('input').val('');

}

function switchSubject(name){
  switch(name){
    case 'nom': name = "nominative or Ego"; break;
    case 'gen': name = "dative or Tu"; break;
    case 'dat': name = "genitive or Is/Ea/Id"; break;
    case 'acc': name = "accusative or Nos"; break;
    case 'abl': name = "abliative or Vos"; break;
    case 'voc': name = "vocative or Ei/Ii/Eae/Ea"; break;
  }

  return name;

}
