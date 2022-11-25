import express from "express";

/**
 * @typedef {Object} shrotAccess
 * @property {(path: Urlpath, type:("page" | "method"))Promise.<(true | false | undefined)>} otherAccess
 * @property {(data: JSON) void} s
 * @property {(data: JSON) void} e
 * @property {(data: url) void} r
 * @property {(info: String) {s:(data: JSON)void, e:(data: JSON)void}} msg
 */

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {shrotAccess} short
 * @return {(true | false | undefined)}
 */
export default function(req, res, short){
    console.log("req to app1");
    return true;
}