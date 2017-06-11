declare const H: any;

const platform = new H.service.Platform({
  app_id: process.env.HERE_APP_ID,
  app_code: process.env.HERE_APP_CODE,
  useHTTPS: true
});

export default platform;
