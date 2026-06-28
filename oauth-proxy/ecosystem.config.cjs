module.exports = {
  apps: [
    {
      name: 'iraivi-decap-oauth-proxy',
      script: './server.js',
      cwd: '/var/www/iraivi-oauth-proxy',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3456,
        HOST: '127.0.0.1',
      },
    },
  ],
};
