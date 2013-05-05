Package.describe("Mixpanel metrics");

Package.on_use(function (api) {
  api.add_files(['mixpanel.js'], 'client');
});
