const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

// DATA is the object that contains
// all data provided to Mustache
let DATA = {
    name: 'Robert',
    date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day:'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        timeZone: 'America/Chicago'
    })
};

const generateReadMe = () => {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
};

generateReadMe();