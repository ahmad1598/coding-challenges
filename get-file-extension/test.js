const getExtension = require('./index.js')

test("getExtension([project1.jpg, project1.pdf, project1.mp3] ➞ [jpg, pdf, mp3])" , () => {
    expect(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])).toEqual(["jpg", "pdf", "mp3"])
})
test("getExtension([ruby.rb, cplusplus.cpp, python.py,javascript.js] ➞ [rb, cpp, py,js])" , () => {
    expect(getExtension(["ruby.rb", "cplusplus.cpp", "python.py" , "javascript.js"])).toEqual(["rb", "cpp", "py","js"])
})
test("getExtension([code.html, code.css] ➞ [html, css])" , () => {
    expect(getExtension(["code.html", "code.css"])).toEqual(["html", "css"])
})
test("getExtension([minesweeper.java, game.java, my_project.js] ➞ [java, java, java])" , () => {
    expect(getExtension(["minesweeper.java", "game.java" , "my_project.java"])).toEqual(["java", "java" , "java"])
})
