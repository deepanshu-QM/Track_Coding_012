
//Entry Point

import { initlogger,log,shutdownlogger } from "./logger.js";

initlogger();

//stimulate fastLogging

setInterval(() => {
    log(`Test Message`)
},10)

process.on("SIGTERM", shutdownlogger)