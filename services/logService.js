const logs = [
  {
    "id": 1,
    "description": "started the process",
    "date": new Date() - 60000 * 50
  },
  {
    "id": 2,
    "description": "completed the process",
    "date": new Date
  }
];

let maxId = 2;

module.exports = {
  getLogs: function() {
    return logs;
  }
}
