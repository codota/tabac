# tabac

## Usage

```
$ yarn install
$ yarn build
$ bin/tabac
Usage: tabac [options]

Tabnine auto configuration script

Options:
  --client    auto configuration script for clients
  --url       the Tabnine inference service url
  -h, --help  display help for command

```

### Test example

```
$ bin/tabac --client --url "https://some-server-name"

Tabnine Auto Configuration V1.0.0
Connection to Tabnine update server... OK
Connection to Tabnine notifcation server... OK
Connection to Tabnine inference service... OK
Attempting inference request.. OK
Memory size... OK
Cpu cores... OK
```

### Building a docker image
```
$ yarn install
$ yarn build
$ docker build --tag <image name>
```

### Running the docker image
```
$  docker run <image name> --client --url <inderence server URL>
```

### Test suites
- clients
[clientAutoConf.ts](https://github.com/codota/tabac/blob/master/src/clientAutoConf.ts)

- server
[serverAutoConf.ts](https://github.com/codota/tabac/blob/master/src/serverAutoConf.ts)
