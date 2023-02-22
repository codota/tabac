import { Command } from "commander";
import clientAutoConf from "./clientAutoConf";
import serverAutoConf from "./serverAutoConf";

const program = new Command();

program
  .name("tabac")
  .description("Tabnine auto configuration script")
  .option("--client", "auto configuration script for clients")
  .option("--server", "auto configuration script for server")
  .option('--url <url>', 'inference service parameter (required for client run)')
  .parse(process.argv);

// program.parse(process.argv);
const opts = program.opts();
if (!opts.client && !opts.server) {
  program.help();
  process.exit(1);
}

if (opts.client && opts.server) {
  console.error("You can't specify both --client and --server");
  process.exit(1);
}

if (opts.client) {
  if (!opts.url){
    program.help();
    process.exit(1);
  }
 clientAutoConf(opts.url);
}

if (opts.server) {
  serverAutoConf();
}
