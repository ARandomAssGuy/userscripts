/*
How to use:
Open devtools in your browser
Go to console
Paste the script in
---
you need to put in a custom 'font' to use first. The fontDefiner function defines a font object automatically. Eg.:
fontdef = fontDefiner('abc','x,y,z')
will convert 'a' to 'x', 'b' to 'y', and 'c' to 'z'.
IMPORTANT: the first string should only have the characters to replace.
IMPORTANT: the second string must have commas between each character.
---
i will soon improve the scirpt to use an object instead.
*/
window.$x=$x
setInterval(()=>{function fontDefiner(original, target) {
var original = original.split('');
var target = target.split(',');
definedFont={};
for (e in original) {
definedFont[original[e]]=target[e];
}
return definedFont;
};
function convert(input) {
var outputarr=[]
inputsplit=input.split('')
inputsplit.forEach(function(txt) {
if (fontdef[txt]!=undefined) {
outputarr.push(txt.replace(txt, fontdef[txt]))
} else {
outputarr.push(txt)
}
})
return outputarr.join('')
}
window.$x('//*[@id="app-mount"]/div[2]/div/div[2]/div/div/div/div[2]/div[2]/div/main/form/div/div/div/div/div[3]/div[2]')[0].onkeyup=function(evt) {
if (evt.key.split('').length>1) return;
var text = evt.key

var textelem = document.evaluate('/html/body/div/div[2]/div/div[2]/div/div/div/div[2]/div[2]/div/main/form/div/div/div/div/div[3]/div/div/span/span/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue
textelem.innerText=textelem.innerText.replace(text,'');
textelem.innerText+=convert(text)
};}, 500)
