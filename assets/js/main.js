const debugFlag = true;

function debugPrint(msg) {
    if (debugFlag) {
        console.log("debug :: " + msg);
    }
}

// $(document).ready(function() {

//     constructionBanner();
    
//     function constructionBanner() {
//         let themeStored = localStorage.getItem('theme') === "true";
//         debugPrint("changing banner");
//         if (themeStored) {
//             $("#top").css("opacity", 0);
//         } else {
//             $("#top").css("opacity", 100);
//         }
//     }
    
//     $("#darkModeSwitch").change(constructionBanner);
// });
