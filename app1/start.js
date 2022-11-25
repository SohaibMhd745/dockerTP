const fs = require("fs");
const { execSync } = require("child_process");

execSync("chmod -R 777 /app", {stdio: "ignore"});

if(!fs.existsSync("/app") || fs.readdirSync("/app").length === 0){
    console.log("Starting installation...");
    if(!fs.existsSync("/app")){
        console.log("Creating the app folder.");
        fs.mkdirSync("/app");
    }
    console.log("Init npm project.");
    execSync("npm init -y", {cwd: "/app", stdio: "ignore", uid: 1000});
    console.log("Install ehpadjs.");
    execSync("npm install ehpadjs", {cwd: "/app", stdio: "ignore"});
    console.log("Create ehpadjs config file.");
    execSync("ehpadjs config", {cwd: "/app", stdio: "inherit", uid: 1000});
}

if(!fs.existsSync("/app/node_modules") || process.env.EHPADJS_NPM_INSTALL === "true"){
    console.log("Install all package.");
    execSync("npm install", {cwd: "/app", stdio: "ignore"});
}

console.log("Starting ehpadjs app...");
let cmd = "ehpadjs start";
if(process.env.EHPADJS_COMMAND !== "false")cmd += " -cmd " + process.env.EHPADJS_COMMAND;
if(process.env.EHPADJS_PORT !== "false")cmd += " -p " + process.env.EHPADJS_PORT;
if(process.env.EHPADJS_NODEMON === "true")cmd += " -nm";

execSync(cmd, {cwd: "/app", stdio: "inherit", uid: 1000});