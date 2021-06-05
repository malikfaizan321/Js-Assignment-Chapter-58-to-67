// 1. Consider you have following code snippet:
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

var mainContent = document.getElementById("main-content");
var mainContentInner = mainContent.cloneNode(true);

document.getElementsByTagName("body")[0].append(mainContentInner);

var renderByClassName = document.getElementsByClassName("render");

for (var i = 0; i < renderByClassName.length; i++) {
    document.write(renderByClassName[i].innerHTML, "<br>");
}

var firstName = document.getElementById("first-name");
firstName.value = "Malik Faizan";

var lastName = document.getElementById("last-name");
lastName.value = "Hassan";

var email = document.getElementById("email");
email.value = "mfhdeveloper@gmail.com";

// _________________________________________________________________________________________________

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

var formContent = document.getElementById("form-content");
var lastName = document.getElementById("lastName");
var lastNameChild = lastName.childNodes[0];
var mainContent = document.getElementById("main-content");
var mainContentFirst = mainContent.firstElementChild;
var mainContentLast = mainContent.lastElementChild;
var lastNameNext = lastName.nextElementSibling;
var lastNamePrevious = lastName.previousElementSibling;
var emailParent = email.parentElement;
var emailNodeType = email.nodeType;