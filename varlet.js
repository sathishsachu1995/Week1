
const browserName = `chrome`

function getBrowserVersion()
{
    var browserVersion = 24.6

    if(browserName===`chrome`)
    {
        console.log(`The browser name is ${browserName}`);
    }
    else{
        console.log(`${browserName} is not a chrome`);
    }

    console.log(`The browser version is `+browserVersion);
}
getBrowserVersion()
console.log(browserVersion);
