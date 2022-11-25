import { Config } from "ehpadjs";

export default new Config({
    port: 80,
    callback: () => {
        console.log("ready");
    },
    webStore: false,
    import: ["./imports/mongo.mjs"],
    watcher: false,
    nodemon: false,
    ignoreFiles: [],
    detached: false,
    commands: [],
    sockets: false,
    psons: false,
    gsons: false,
    scss: false,
});
