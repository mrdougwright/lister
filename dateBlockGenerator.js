const moment = require('moment');

function weekCount(start_date, end_date) {
  var start = moment(start_date);
  var end   = moment(end_date);
  return end.diff(start, 'weeks');
}

function listBlockGenerator(start_date, end_date) {
  let dates = [];
  let beginning = moment(start_date);
  let numWeeks = weekCount(start_date, end_date);

  Array(numWeeks).fill().forEach( function() {
    dates.push(
      {
        date: beginning.format("dddd MMM Do"),
        person: null,
      }
    );
    beginning.add(1, 'week');
  });
  return dates;
}

module.exports = listBlockGenerator;
