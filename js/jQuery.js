/*
   Name: Mohammad Taaha
   91.61 Assignment: Using the jQuery UI Slider and Tab Widgets
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
$(function () {
	$("#tabs-1").tabs();

	var horizontal_1 = 45;
	var horizontal_2 = 45;
	var vertical_1 = 45;
	var vertical_2 = 45;
	var sliderElement = $("#slider_1");

	$("#slider_1").slider({
		range: false,
		min: 0,
		max: 40,
		slide: function (event, ui) {
			$("#fh_axis").val(ui.value);
			horizontal_1 = ui.value;
			if (horizontal_2 != 45 && vertical_1 != 45 && vertical_2 != 45) {
				multiplier(horizontal_1, horizontal_2, vertical_1, vertical_2);
			}
		}
	});
	$("#slider_2").slider({
		range: false,
		min: 0,
		max: 40,
		slide: function (event, ui) {
			$("#sh_axis").val(ui.value);
			horizontal_2 = ui.value;
			if (horizontal_1 != 45 && vertical_1 != 45 && vertical_2 != 45) {
				multiplier(horizontal_1, horizontal_2, vertical_1, vertical_2);
			}
		}
	});

	$("#slider_3").slider({
		range: false,
		min: 0,
		max: 40,
		slide: function (event, ui) {
			$("#fv_axis").val(ui.value);
			vertical_1 = ui.value;
			if (horizontal_1 != 45 && horizontal_2 != 45 && vertical_2 != 45) {
				multiplier(horizontal_1, horizontal_2, vertical_1, vertical_2);
			}
		}
	});

	$("#slider_4").slider({
		range: false,
		min: 0,
		max: 40,
		slide: function (event, ui) {
			$("#sv_axis").val(ui.value);
			vertical_2 = ui.value;
			if (horizontal_1 != 45 && horizontal_2 != 45 && vertical_1 != 45) {
				multiplier(horizontal_1, horizontal_2, vertical_1, vertical_2);
			}
		}
	});
	$("#register-form").validate({
		rules: {
			fh_axis: {
				required: true,
				number: true,
			},

			sh_axis: {
				required: true,
				number: true,
			},
			fv_axis: {
				required: true,
				number: true,
			},
			sv_axis: {
				required: true,
				number: true,
			},

		},
		messages: {
			fh_axis: {
				required: 'Please enter an axis.',
				number: 'Please enter a <em>valid</em> number.',
			},
			sh_axis: {
				required: 'Please enter an axis.',
				number: 'Please enter a <em>valid</em> number.',
			},
			fv_axis: {
				required: 'Please enter an axis.',
				number: 'Please enter a <em>valid</em> number.',
			},
			sv_axis: {
				required: 'Please enter an axis.',
				number: 'Please enter a <em>valid</em> number.',
			}
		}
	});

});
