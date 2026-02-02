module.exports = {
  apps: [
    {
      name: "shop-backend-server",
      script: "npm",
      args: "start",
      env: {
        WORKER_MODE: "server",
        PORT: 9886,
      },
    },
    {
      name: "shop-backend-worker",
      script: "npm",
      args: "start",
      env: {
        WORKER_MODE: "worker",
        PORT: 9887,
      },
    },
  ],
};
