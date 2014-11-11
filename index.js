var project = require('./project');
var teams = project.teams;
var startDate = new Date(project.schedule.startDate);
var debug = require('debug')('iterforc');

debug(startDate);
debug(teams[0].name);


