# The Effects of Power Plants on Greenhouse Gas Emission within the US

## Motivations:

It is a highly debated and hot topic (no pun intended), that will ultimately affect everyone globally, if true. We are seeing record world temperatures every month, year after year both locally and globally. Subsequently, the areas in the oceans covered by ice have been decreasing drastically and the resulting warmer ocean water has been seen to damage coral reefs, threaten marine ecosystems, and ultimately disrupt the global fishing industry. 

It would be interesting to see through visualizations and data if there truly is a trend in terms of how our climate is changing both locally and globally. This way, we can provide a more objective approach to answer the question “Is the world getting hotter?” Initially we plan on showcasing how climate is changing throughout the world; we will then narrow down to specifically focus on the United States. Particularly, we want to focus on whether or not there is a connection between Power Plant activity within the United States and temperature change. Although we understand that there are a multitude of factors contributing to the increase in greenhouse gases, we feel that Power Plants are a major contributor. (Main GreenHouse Gases: Carbon Dioxide, Methane, Nitrous Oxide.)

![ice](static/frozen.jpg)

## **Project Proposal**

We would like to provide informative data to showcase how climate is changing by visualizing the effects of power plants on greenhouse gas emission and temperature change specifically within the United States. Particularly, we want to focus on whether there is a connection between Power Plant activity within the United States and temperature change. Further, we will deliberately breakdown this topic by focusing on electric power plants – numbers, types, most popular and least popular type.

## Guidlines for the project**
This document contains requirements, project proposal, technical présentation and conclusion.

## **Team and Contributions**

* Natalia Karimova (my_branch)  - data mining, data cleaning, powerplant map, Chart.js (bar chart; doughnut chart), Power Point Presentation, Readme.md, discussions.

* Enoch Kwon (ekwon) - data mining (NASA data), temperature scatter plots and regression analysis, temperature heating map, Power Point Presentation, discussions.

* Jeremy Jackson (jeremy_jackson_branch) - data mining, web-scripting, Python Flask, Power Point Presentation, discussions.

* Parampreet Khanna (sam) -  data mining, Readme.md, discussions, powerplant map (), Power Point Presentation, discussions.

* William Pryor (william_pryor) - data mining, data cleaning, Mongo DB, powerplant map (legends), web-scripting, discussions.

## **Project requirements**
1. Your visualization must include a Python Flask–powered API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.).
2. Your project should fall into one of the below four tracks: 

* A custom “creative” D3.js project (i.e., a nonstandard graph or chart)

* A combination of web scraping and Leaflet or Plotly.

* A dashboard page with multiple charts that update from the same data.

* A “thick” server that performs multiple manipulations on data in a database prior to visualization (must be approved)

3. Your project should include at least one JS library that we did not cover.
4. Your project must be powered by a data set with at least 100 records.
5. Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).
6. Your final visualization should ideally include at least three views.



## **Technical Approach**

Data visualization including design, web development, database and coding is done with the help of Python Flask, HTML/CSS webpage, JavaScript, MongoDB and chart.js library. 
The dataset is unzipped in the csv format and .json format. The data is stored in MongoDB in JSON (JavaScript Object Notation) format. JSON documents support embedded fields, so related data and lists of data can be stored with the document instead of an external table. JSON is formatted as name/value pairs. In JSON documents, fieldnames and values are separated by a colon, fieldname and value pairs are separated by commas, and sets of fields are encapsulated in “curly braces” ({}). 
The server for the website is built with the help of Python Flask that interact with MongoDB and render the html page that contains our charts and map. We modified test.py folder to include the MongoDB query to retrieve all the records from MongoDB along all attributes.
In the Front-end side preparation, the provided dashboard helped us building the charts with customizing the layout based on JavaScript and CSS libraries. We mainly used d3.js JavaScript library for controlling the data and building charts. We will also be using Bootstrap which is a dependency. Inside index.html we defined all the JavaScript and CSS dependencies, and we referenced the charts from charts.js. In the web scripting, we utilized Flask to power our webpage and imported python libraries such as Render_templates, Url_for and Jinja2. To build the charts and map, we wrote all the code inside the chart.js file. The graphs for non-linear data are represented by regplot by importing seaborn.

## **Conclusions**

By presenting and building blocks for building an interactive data visualization, we came on conclusion that Fossil Fuel Power Plants are the most common in the US. Gas power plants are more efficient and more clean type of the fossil EPP. They provide more energy and less CO2, while coal power plants polluted the most. More solar and wind power plants should slow the rate that the temperature is increasing.
