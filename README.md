# zask8052-tracker

My name is Zander, and in this README file, I will document my process in creating my Web Design Prototype, based on the Design Prompt of 'Media Consumption'. For this prompt, I chose to create a 'Video Game Review' data tracking application.

Firstly, I went through the process of creating a repository, utilising GitHub to set it up. I followed the in-class instructions, only coming across one issue, being that the local server was not connecting, which was swiftly fixed once I asked the tutor for assistance.

After this I began building the website's structure using HTML. I first looked at my Design Concept created for my previous assessment task, in which I was tasked in designing the possible layout for this tracking site, seen here:

![High-Fidelity Site Design](/doc-images/High%20Fidelity.png)

In this design, I chose to utilise a number of various data models, which I aimed to include in this website. These data models are shown in this table:

![Data Model](/doc-images/data-model.png)

After my repository was created, I then looked back at the work I had done in-class, namely the task tracker we each created. I based my beginning code off of this project, and began adding and changing things to better suit the form I wanted to create. Due to my original code being in replit, I edited a lot of the beginning code in that program, before sending it over to VSCode. During this process however, I left the 'star rating' component of my form out for now, in order to edit it in VSCode, to record my progress in figuring out how to create it as I commit my changes.

After transferring my code to VSCode, I then had to research how to create a star rating, as seen in my initial design, in a way that could be integrated into a form so that users could pick a rating, and see it displayed next to their other data once submitted. I first tried utilising code from 'https://dev.to/grahamthedevrel/5-star-rating-system-actually-accessible-no-js-no-wai-aria-3idl', to create the stars, and this ended up functioning and looking fine, however, since it was not my own code, it would be more difficult for me to control the parameters, and therefore customise it to be were I want it to be, and act how I want it to act. Instead, I chose to then research how to change the appearance of radio input options in order for them to look like stars, making it easier for my workflow, and a better fit within my code.

After many different tries, with varying applications, ideas and problems, I ended up creating the star rating system in the form, which can be interacted with like a regular star rating UI. However, I came across some issues when creating this, as first, an extra star would appear next to the "Rating" title, that was hoverable, but not clickable. I debugged for quite a while before realising it was a problem with the CSS styling an extra star next to the title, due to the placement of the div command. I fixed this by giving the label its own div, seperating it from the starRating div, and getting rid of the extra star. One element of this that I could not figure out however, and something that could be improved on if future developers were to try improving the tracker, was the transferring of the "star-rating" visually from the form to the tracking list. I could only figure out how to display the number of stars given, but not the stars themselves.

After this, I then set my focus on CSS styling, changing the layout to fit more with my original site design proposal.