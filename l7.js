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
    for (var cat of cats) {
        catsStr += '<div class="itembox" style="float: left;"><span class="namebox">' + cat.name + "</span>" + " " + "(" + cat.age + ')<button style="float:right;" id="delete">Удалить</button><br><img src="' + cat.link + '"></div>';
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

$(document).on('click', '.itembox button', function (e) {
    cats.splice($(this).parent().index(), 1);
    $(this).parent().remove();
    var catsStr = JSON.stringify(cats);
    localStorage.setItem('cats', catsStr);
});

$(document).on('dblclick', '.itembox span', function (e) {
    $(this).html('<input type="text" style ="width:140px;" id="editNameBox"></input>');
});


$(document).on('keydown', '#editNameBox', function (e) {
    if (e.keyCode == 13) {
        cats[$(this).parent().parent().index()].name = $('#editNameBox').val();
        buildCats();
        var catsStr = JSON.stringify(cats);
        localStorage.setItem('cats', catsStr);
    }
});
