/*
Disable / Enable reply ping in discord. 
Simple code

Coded by A68AGaming.
*/
buttonadded = false;
disableReplyPing = true;

function replyPingDisabler() {
    if (document.getElementsByClassName('mentionButton-3710-W').length > 0 && !buttonadded) {
        buttonadded = true
        let butone = document.createElement('button');
        butone.innerText = `Toggle ping (currently ${disableReplyPing ? 'off' : 'on'})`;
        butone.style.zIndex = 999;
        document.getElementsByClassName('mentionButton-3710-W')[0].parentElement.parentElement.parentElement.appendChild(butone);
        butone.click();
        butone.onclick = () => {
            disableReplyPing = !disableReplyPing;
            butone.innerText = `Toggle ping (currently ${disableReplyPing ? 'off' : 'on'})`
        }
    } else if (document.getElementsByClassName('mentionButton-3710-W').length == 0) {
        buttonadded = false
    }
    if (disableReplyPing) {
        document.getElementsByClassName('colorBrand-2tjs5J size14-e6ZScH mentionButton-3710-W').length > 0 ? document.getElementsByClassName('colorBrand-2tjs5J size14-e6ZScH mentionButton-3710-W')[0].click() : false
    } else {
        document.getElementsByClassName('colorMuted-HdFt4q size14-e6ZScH mentionButton-3710-W').length > 0 ? document.getElementsByClassName('colorMuted-HdFt4q size14-e6ZScH mentionButton-3710-W')[0].click() : false
    }
}

if (document.getElementsByClassName('colorBrand-2tjs5J size14-e6ZScH mentionButton-3710-W').length > 0 && disableReplyPing) {
    for (const e of document.getElementsByClassName('colorBrand-2tjs5J size14-e6ZScH mentionButton-3710-W')) {
        e.click()
    }
};
let replyPingObserver = new MutationObserver(replyPingDisabler);
replyPingObserver.observe(document.body, {
    childList: true,
    subtree: true
})