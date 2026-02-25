chenk17rpi.eastus.cloudapp.azure.com/iit

For this lab we created a RSS and atom feed using xml. Examples given already had an entry/item which made it easy to replicate.

I also tried to style it using CSS. Initally nothing was working even when I had set every tag to the same thing. The problem was the line linking the xml to CSS was in the wrong place. When the CSS link was moved all the way up top for the rss feed it worked. As for the atom feed it needed to be palce right after the xml version is indicated. I changed the text colors fonts and displays which was the same for both rss and atom feeds.