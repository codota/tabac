import { Command } from "commander";
import serverAutoConf from "./serverAutoConf";
import {startMockServer} from "./test-server/MockServer";

const version = '1.0.0';

const program = new Command();

program
  .name("tabac")
  .version(version)
  .description("Tabnine auto configuration script")
  .option("--port <port>", "server port")
  .parse(process.argv);

const opts = program.opts();
console.log(`Tabnine Auto Configuration V${version}`);
serverAutoConf();
startMockServer({serverPort:opts.port ?? 80});
