var project = require('./project');
var teams = project.teams;
var startDate = new Date(project.schedule.startDate);

console.log(startDate);
console.log(teams[0].name);


