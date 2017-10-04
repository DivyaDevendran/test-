const apps = [
  {
    "id": 1,
    "App_name": "Gmail"
  },
  {
    "id": 2,
    "App_name": "Twitter"
  }
];

let maxId = 2;

module.exports = {
  getApps: function() {
    return apps;
  },
  getApp: function(id) {
    return apps.find(app => app.id === parseInt(id) || app.id === id);
  },
  postApp: function(app) {
    maxId++;
    app.id = maxId;
    apps.push(app);
    return this.getApp(maxId);
  }
}
