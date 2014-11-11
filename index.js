var debug = require('debug')('iterforc');
var moment = require('moment');

var project = require('./project');
var teams = project.teams;
var startDate = moment(project.schedule.startDate, 'YYYY-MM-DD');

debug(startDate.format('YYYY-MM-DD'));
debug(teams[0].name);


