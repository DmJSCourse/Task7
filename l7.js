$("#add").click(addCat);

var cats = [];
var backupCats = localStorage.getItem('cats');
backupCats = JSON.parse(backupCats);

if (backupCats && backupCats.length) {
    cats = backupCats;
    buildCats();
}

function buildCats() {
    var catsStr = '';
    for(var cat of cats) {
        catsStr += '<div class="itembox" style="float: left;">' + cat.name + " " + "(" + cat.age + ')<button style="float:right;" id="delete">Удалить</button><br><img src="' + cat.link + '"></div>';
    }
    $('#cats').html(catsStr);
    $('input').val('');
    $('#age').val(1);
};

function addCat() {

    var cat = {
        name: $("#name").val(),
        age: $("#age").val(),
        link: $("#link").val()
    };

    cats.push(cat);
    buildCats();
    var catsStr = JSON.stringify(cats);
    localStorage.setItem('cats', catsStr);
}

// $('.itembox button').on('click', function(e){
//     console.log($(this).parent().index());
//     cats.splice($(this).parent().index(), 1);
//     $(this).parent().remove();
//     console.log(cats);
//     var catsStr = JSON.stringify(cats);
//     console.log(catsStr);
//     localStorage.setItem('cats', catsStr);
// });

$(document).on('click', '.itembox button', function (e) {
    cats.splice($(this).parent().index(), 1);
    $(this).parent().remove();
    var catsStr = JSON.stringify(cats);
    localStorage.setItem('cats', catsStr);
});