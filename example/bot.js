const PlugApi = require('../dist');
const config = require('./config.json');

const plugApi = new PlugApi();

(async () => {
  try {
    // Login and visit room
    await plugApi.connect(config);

    console.log(`Connected to room: ${config.roomId}`);

    // Handle CHAT events
    plugApi.on('CHAT', data => {
      console.log(data);
    });
  } catch (err) {
    console.log(`Error setting up api: ${err}`);
  }
})();
