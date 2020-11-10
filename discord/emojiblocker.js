/*

blocks certain emojis. paste in your console.
gonna make more media blockers and such soon :)

it finds the emoji using the src attribute
find the emoji's <img> element in inspect element mode in devtools
then copy the src attribute in there to the array of illegalemojis
then run the code
you can update the array at any time and the changes are seen immediately

*/
illegalemojis=["/assets/81a553e7c02c5dd144e40888c4b2faad.svg"]
setInterval(()=>{
illegalemojis.forEach((emoji)=>{
    let lol=document.querySelector('img[src*="'+emoji+'"]') 
    if (lol) {
      lol.remove()
    }
  })
}, 100)
