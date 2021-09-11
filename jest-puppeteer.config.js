module.exports = {
  launch: {
    headless: false,
    devtools: true,
    args: ['--enable-features=SharedArrayBuffer', '--disable-web-security'],
  },
  server: {
    command: `cd ${__dirname} && yarn start`,
    port: 6744,
    launchTimeout: 60000,
  },
};
