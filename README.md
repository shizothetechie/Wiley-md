# Wiley-md
WhatsApp Multi-device Bot Script made using baileys. This script is under development will be available soon. Thank You Regards TE DEVELOPERS 🔥⚡

```sh
This Source code is made by TE Developers

• Gariox 3D

• Shizo The Techie

Mention this Wiley-md repository wherever you use any of our code.

Put the link: https://github.com/shizothetechie/Wiley-md

Thank You 

Team ERROR 

Regards

Wiley-md,

 TE Developers 


```
### FOR TERMUX USER
1. Type mentioned below given commands one by one in Termux.
```sh
$ pkg upgrade && pkg update 
$ pkg install yarn
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ git clone https://github.com/Shizothetechie/Wiley-md 
$ cd Wiley-md 
$ yarn
```
If error try using yarn instead of npm, see [here](https://github.com/BochilGaming/games-wabot/tree/multi-device#if-npm-install-failed--try--using-yarn-instead-of-npm)
```sh
$ node .
```
2. Wait for bot starting...
3. Scan QR code from 2nd device. (Go to whatsapp > Linked Devices > Click on `link device`)
4. Now your bot is ready to rock n roll.

#### If npm install failed, try using yarn instead of npm
```sh
$ pkg install yarn -y
$ yarn install
```
---------


---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--pconly`

If that chat not from private bot, bot will ignore

### `--gconly`

If that chat not from group, bot will ignore

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--autocleartmp`

If enabled, **tmp* folder contain files will be auto delete

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--db`

pass mongodb url or cloud url to connect to database, by the default it will connect to database.json

### `--singleauth`

you can convert single file auth to multiple file auth using this argument, it will convert if you have single file auth and folder multi auth is empty (creds.json is not exist)

---------



### How to change owner number?
> You can change in `config.js`, on global.owner. make sure you use correct syntax.
```js
global.owner = [
  ['919172389527', 'shizo', true]
]
```


---------

### want to contribute to Wiley-md??
1. fork this repository
2. Change/edit/create what you want. for example you can add features, fix bug, etc
3. **test** before making a pull req!!
4. make a pull req!
5. if your pull req is already in **acc/merge**, you can delete your branch or you can create pull req again :)

---------


### Thanks To 
**GOD 🙏**,

**Gariox 3D**,

**Everyone who always supports**
