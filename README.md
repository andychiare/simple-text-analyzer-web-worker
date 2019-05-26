# A simple real-time text analyzer using Web workers

This repository contains two implementation examples of a simple Web-based real-time text analyzer. Both implementations use Web workers, but the [first one](./dedicated-worker) uses a *dedicated worker* while the [second one](./shared-worker) uses a *shared worker*.

In order to run each example, the folders' content must be served by a web server.

If you have *Node.js* installed on your machine, you could install [http-server](https://www.npmjs.com/package/http-server) by typing the following command:

```shell
npm install http-server -g
```

Then, change your current directory to the `dedicated-worker` or the `shared-worker` directory and type

```shell
http-server
```

This command launches a web server and shows a list of URLs like in the following:

```shell
> http-server
Starting up http-server, serving ./
Available on:
  http://172.24.164.161:8080
  http://10.0.75.1:8080
  http://10.0.0.3:8080
  http://127.0.0.1:8080
  http://172.22.32.1:8080
Hit CTRL-C to stop the server
```

Point your browser to one of these URLs in order to run the application.

