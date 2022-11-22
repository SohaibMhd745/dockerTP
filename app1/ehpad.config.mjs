import { Config } from "ehpadjs";

export default new Config({
    port: 80,
    callback: () => {
        console.log("ready");
    },
    webSocket: false,
    webStore: false,
    import: ["./imports/mongo.mjs"],
    watcher: false,
    nodemon: true,
    detached: false,
    commands: [],
    pson: true,
});
