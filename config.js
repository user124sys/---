const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SADIYA-MD=jE9EEIBT#1BF8GdVOdnanF6orVPo7jYEGl7Z2FQ4szW8mMQqT9Bg", //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || "user124sys", //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "nzYd3nZNwkBNI24buTS7Ec1ygNJn0E2WykiK", //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || "SADIYA-MD-DATABASE", //Bot Database Repo Name
SESSION_NAME: process.env.SESSION_NAME || "session"
};
