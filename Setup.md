# Bare Bones Reviews

## Setup, Installation, and Execution

---

## Setup

*Note: Before trying to run anything, a few requirements must be installed on your system. It does not matter if you are on Windows, Mac, or Linux. I will be using Windows Commands in Powershell, so commands may vary by Operating System*

First you need to install the latest version of `NodeJS` on your system. If you do not have `NodeJS` installed please check out their website for installation instructions [here](https://nodejs.org/en/).

Secondly you need to install `npm` or the *Node Package Manager*. If you are using a Windows install of NodeJS, you most likely already have it installed. To verify you have it installed type 

```bash
npm -v
```
which should output the version number of npm you have installed. If you are on Mac or Linux please follow the directions found [here](https://www.npmjs.com/get-npm).

---

## Installation

After verifing `NodeJS` and `npm` installation, you need to run the following commands:

---

In the root, the /server, and /client directories
```
npm i
```
You should have run this command 3 times total, and it may take upto 5 minutes to run completely.

---

You also need to edit 3 files for it to work properly on your computer, since the repo available is set for the Cloud hosted server. You need to change the following:

In `client/src/CreateReview.js` on line 24 replace
```diff
- "http://157.230.63.172:3000/reviews/create/"
With This
+ "http://localhost:3000/reviews/create/"
```

In `client/src/Game.js` on line 16 replace
```diff
- `http://157.230.63.172:3000/reviews/${gameName.split(" ").join("")}`
With This 
+ `http://localhost:3000/reviews/${gameName.split(" ").join("")}`
```

Finally in `client/src/Home.js` on line 29 replace
```diff
- `http://157.230.63.172:3000/games/`
With This
+ `http://localhost:3000/games/`
```

---

## Execution

After running `npm i` and changing the IP address to `localhost` you should now be able to run project. It is quite simple to run, type the following command:

```
npm start
```
This will start 2 files, one to start the server, and one to start the client. Wait for it to finish loading and it should pop up the site in a web browser. If you accidently close the web browser you can get back to it by going to `localhost:3001`.

*Note: This is the dev version of the server so you may see output in the console window.*

To stop the server press `Ctrl+C` or `Command+C` and if it asks you to terminate any jobs type `Y` and hit enter.