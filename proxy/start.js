const { execSync } = require("child_process");
const fs = require("fs");

if(!fs.existsSync("/proxy/node_modules")){
    console.log("Install all package.");
    execSync("npm install", {cwd: "/proxy", stdio: "ignore"});
}

execSync("node main.js", {cwd: "/proxy", stdio: "inherit", uid: 1000});