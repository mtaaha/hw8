/*
   Name: Mohammad Taaha
   91.61 Assignment:  Using the jQuery UI Slider and Tab Widgets
   Mohammad Taaha, UMass Lowell Computer Science Student,mohammad_taaha@student.uml.edu
   Copyright (c) 2018 by Mohammad Taaha.  All rights reserved.  May be
freely copied or excerpted for educational purposes with credit to the
author.
Created on 12/04/2018
Description:This webpage will ask the user to enter th einput to create
a multiplication table. It will then create that table in a new tab. The user will
be able to select the values of the multiplication table using a slider. In this
assignment a slider and tabs were implemented. When the slider is moved, it adjusts
the value in the text box.
*/


function multiplier(horizontal_1, horizontal_2, vertical_1, vertical_2) {


	if (vertical_2 < vertical_1) {
		var temp = vertical_1;
		vertical_1 = vertical_2;
		vertical_2 = temp;
	}

	if (horizontal_2 < horizontal_1) {
		var temp_2 = horizontal_1;
		horizontal_1 = horizontal_2;
		horizontal_2 = temp_2;
	}


	//displays output back to html


	var result = '';
	result = "<table border='2px'>";

	var background_color = "#FFFAFA";
	var calc_color = "#008000";
	result += "<th style='width:30px;background-color:" + background_color + "'>" + "</th>";

	for (var k = horizontal_1; k <= horizontal_2; k++) { //sets up the header
		result += "<th style='width:30px;background-color:" + background_color + "'>" + k + "</th>";
	}
	result += ("</tr>");

	//displays output back to html

	for (var i = vertical_1; i <= vertical_2; i++) { //goes through a for loop of horizonal and vertical numbers
		result += "<th style='width:30px;background-color:" + background_color + "'>" + i + "</th>"; //sets up the header
		for (var j = horizontal_1; j <= horizontal_2; j++) {
			result += "<td style='width:30px;background-color:" + calc_color + "'>" + i * j + "</td>";
		}
		result += ("</tr>");
	}

	result += ("</table>");

	$("#tabs-1").tabs();
	var num_tabs = $("#tabs-1 ul li").length + 1;

	$("#tabs-1 ul").append(
		"<li><a href='#tab" + num_tabs + "'>" + "(" + horizontal_1 + "," + horizontal_2 + ")" + "," + "(" + vertical_1 + "," + vertical_2 + ")" + "</a></li>"
	);
	$("#tabs-1").append(
		"<div id='tab" + num_tabs + "'>" + result + "</div>"
	);
	$("#tabs-1").tabs("refresh")
	// document.getElementById('table').innerHTML = result; //displays output back to html
}
