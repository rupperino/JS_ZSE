var txt = "Hello World!";
document.write("ZSE najlepszą szkoła w kodowaniu" + txt);
document.write("<p>Big: " + txt.big() + "</p>");
document.write("<p>Small: " + txt.small() + "</p>");
document.write("<p>Bold: " + txt.bold() + "</p>");
document.write("<p>Italic: " + txt.italics() + "</p>");
document.write("<p>Fixed: " + txt.fixed() + "</p>");
document.write("<p>Strike: " + txt.strike() + "</p>");
document.write("<p>Fontcolor: " + txt.fontcolor("green") + "</p>");
document.write("<p>Fontsize: " + txt.fontsize(6) + "</p>");
document.write("<p>Subscript: " + txt.sub() + "</p>");
document.write("<p>Superscript: " + txt.sup() + "</p>");
document.write("<p>Link: " + txt.link("http://www.w3ii.com") + "</p>");
document.write("<p>Blink: " + txt.blink() + " (works only in Opera)</p>");

document.write("ostatnia modyfikacja strony".fontcolor("olive").bold().strike().fontsize(5)+"<br>");
document.write(document.lastModified);
