#!/usr/bin/env node

var del = require('del');

var fs=require('fs');

var package=fs.readFileSync('package.json', "utf8");
var dependencies=JSON.parse(package).dependencies;
var to_del=[];
for(var i in dependencies){
    var version=dependencies[i];
    if(version.startsWith('../')){
        to_del.push('node_modules/'+i);
    }
}
if(to_del.length>0){
    del(to_del).then(function(paths){
        console.log('Deleted files and folders:\n', paths.join('\n'));
    }).catch(function(e){
        console.log(e);
    });
}
