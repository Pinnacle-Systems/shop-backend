module.exports = {
  apps: [
    {
      name: "shop-backend-server",
      script: "npm",
      args: "start",
      env: {
        WORKER_MODE: "server",
      },
    },
    {
      name: "shop-backend-worker",
      script: "npm",
      args: "start",
      env: {
        WORKER_MODE: "worker",
      },
    },
  ],
};
