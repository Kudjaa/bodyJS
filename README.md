
# bodyJS

bodyJS is a project that aims to bring JavaScript to the HTML body, which is still in development. The whole project is built in JS using jQuery.



## How it works

For the moment, you can only use Javascript in a `<code>` tag meaning it's not that different from using a `<script>`tag except that you can use HTML in it. 

Thanks to jQuery, we detect each `<code>` block on the page, store its content as an array where each item is a line of the `<code>`content. The function creates a temporary div using the `after()` jQuery function. 

The value of each item array that is a DOM is changed this way `$("div).append( the html dom)`. Then we turn the array into a string and use the `eval()` function on the output string.

Then the `<code>` DOM is replaced by the content of the div created. 
## To-do list

- [x]  Make the project work for the body, not a specific block
- [x]  Make reference to variables in the HTML body
- [x]  Display loop index in the content of a DOM when the DOM is declared in a loop.
- [ ]  Make a VS Code extension that highlights JS code in the HTML body
- [ ]  Rewrite it without jQuery
## Why ?
I'm familiar with VueJS which got the possibility to refers to variables in HTML and brings if statements and for loops to the body. For light projects which don't need a server or deep and complex frameworks deserve it too, and the project is fun to develop.
