# Notify My Android transport for Winston

**winston-nma** is a log transport for [Winston](https://github.com/flatiron/winston), **independently** developed. It allows you to send messages to your Android phone by using the [Notify My Android](http://www.notifymyandroid.com/) service. As of this moment, it's a simple transport without a whole lot of functionality, but it'll do the trick.

## How to use

Right now, winston-nma is not yet available on npm, so you need another way to get the files in your app. A simple way is to download the files and drop them in your app's `node_modules` directory.

## Use the transport

You can use winston-nma like any other transport.

```javascript
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.NotifyMyAndroid)({ 'level': 'error', appName: 'My app', apiKey: 'your-api-key-here' })
    ]
  });
```

* `level`: the level you want to log (e.g. 'error', 'warn'). Defaults to `error`.
* `appName`: The name of your app. This name shows up in the notifications.
* `apiKey`: Your Notify My Android API key, which you can get on your control panel.

## To do

This is an incomplete list.

* Publish on mpm
* Build in support for NMA's `remaining` rate-limiting setting

## Changelog

### v0.0.2 - 30 September 2014

* Built-in support for winston's metadata

### v0.0.1 - 28 September 2014

* Initial commit

## License

winston-nma is available under the MIT license.