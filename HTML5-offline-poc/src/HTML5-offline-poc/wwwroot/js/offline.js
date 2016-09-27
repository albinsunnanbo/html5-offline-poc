// Write your Javascript code.
$(function () {
    "use strict";
    var storageKey = "offlineContent";

    if (!localStorage[storageKey]) {
        localStorage[storageKey] = JSON.stringify([]);
    }

    var fillListFromLocalStorage = function () {
        var notes = JSON.parse(localStorage[storageKey]);

        var list = $("#offline-items");
        list.empty();
        notes.forEach(function (value, idx) {
            list.append("<li>" + value + "</li>");
        });
    };
    fillListFromLocalStorage();

    $("#btn-add").click(function () {
        var field = $("#txt-new-data");
        var value = field.val();

        var notes = JSON.parse(localStorage[storageKey]);
        notes.push(value);
        localStorage[storageKey] = JSON.stringify(notes);

        fillListFromLocalStorage();

        field.val("");
    })
});