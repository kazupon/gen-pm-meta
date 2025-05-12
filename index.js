#!/usr/bin/env node
const agent = {
  npm_execpath: process.env.npm_execpath,
  npm_config_user_agent: process.env.npm_config_user_agent,
}
console.log(JSON.stringify(agent))
