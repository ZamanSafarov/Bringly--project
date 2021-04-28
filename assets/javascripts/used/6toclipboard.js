$('.js--itemToClipboard').click(function (e) {
    e.preventDefault();
    $txt = window.location.href;
    copyClipboard($txt,true, 'Link copied');
})

$('.js--listItemToClipboard').click(function (e) {
    e.preventDefault();
    $txt = window.location.hostname + $('.js--itemListLink').attr('href');
    copyClipboard($txt,true, 'Link copied');
})
function copyClipboard(value, notify, notifyText) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    if (typeof notify === 'undefined') {
        notify = true;
    }
    if (typeof notifyText === 'undefined') {
        notifyText = "Copied to clipboard";
    }

    var notificationTag = $("div.copy-notification");

    if (notify && notificationTag.length == 0) {

        notificationTag = $("<div/>", { "class": "copy-notification", text: notifyText });

        $("body").append(notificationTag);

        notificationTag.fadeIn("slow", function () {
            setTimeout(function () {
                notificationTag.fadeOut("slow", function () {
                    notificationTag.remove();
                });
            }, 1000);
        });
    }
}
