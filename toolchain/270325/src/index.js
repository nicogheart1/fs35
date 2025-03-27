const moment = require("moment");

// we use moment to format the date
const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(formattedDate);