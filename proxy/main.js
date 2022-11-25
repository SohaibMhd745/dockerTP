import Fastify from "fastify";
import cors from "@fastify/cors";
import proxy from "@fastify/http-proxy";

const app = Fastify();
const pathList = {
    "app1": "http://app1:80",
    "app2": "http://app2:80"
};

for(const key in pathList){
    app.register(proxy, {
        upstream:  pathList[key],
        prefix: "/" + key,
    });
};

app.register(cors, {
    origin: "*",
    methods: ["GET"],
});

app.listen({ port: 80, host: "0.0.0.0" }, (err, address) => {
    if (err) throw err;
    console.log("ready", address);
});
  