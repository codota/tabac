import { Command } from "commander";
import clientAutoConf from "./clientAutoConf";
import serverAutoConf from "./serverAutoConf";

const version = '1.0.0';

const program = new Command();

program
  .name("tabac")
  .version(version)
  .description("Tabnine auto configuration script")
  .option("--client", "auto configuration script for clients")
  .option("--server", "auto configuration script for server")
  .option("--port <port>", "server port")
  .option('--url <url>', 'inference service parameter (required for client run)')
  .parse(process.argv);

const opts = program.opts();
if (!opts.client && !opts.server) {
  program.help();
  process.exit(1);
}

if (opts.client && opts.server) {
  console.error("You can't specify both --client and --server");
  process.exit(1);
}
console.log(`Tabnine Auto Configuration V${version}`);

if (opts.client) {
  if (!opts.url){
    program.help();
    process.exit(1);
  }
 clientAutoConf(opts.url);
}

if (opts.server) {
  serverAutoConf({serverPort:opts.port ?? 80});
}
