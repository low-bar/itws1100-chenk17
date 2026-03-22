html, js and css files were provided. we were tasked with making click event functions in the js file to add/remove css class, change the element text/color, adding new entries onto an existing list on the page and  hide/show a specific element

chenk17rpi.eastus.cloudapp.azure.com/iit

Problem 5,
after clicking on the new list item it changed colors individually just like any of the original item list. this is because .on() which affects the parent element lablist essentially making a group of effect on the list items and the 2nd args 'li' in the function which treats each list entry as a seperate event allowing each item to be clicked and change colors independently of another. 