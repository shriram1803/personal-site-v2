const subs = [
    ["An Aspiring Software Developer ", "sh1"],
    ["Backend Developer", "sh2"],
    ["DSA Lover", "sh3"],
    ["Competitive Programmer", "sh4"]
];

function fillSubheading() {
    subs.forEach(ele => 
        {
            const text = ele[0];
            const id = ele[1];
            const delay = 110; // milliseconds
    
            let index = 0;
    
            function type() {
            if (index < text.length) {
                $("#" + id).append(text.charAt(index));
                index++;
                setTimeout(type, delay);
            }
            }
    
            type();
        }
    );
}


$(document).ready(function(){
    fillSubheading();
});