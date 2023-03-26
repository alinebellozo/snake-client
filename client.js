const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Node's net library (specifically, the createConnection function) to create an object named conn.
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AFB");

    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 100)
  });

  // The conn object that Node returned represents the connection with the server.
  return conn;
};

module.exports = { connect };