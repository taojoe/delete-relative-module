#!/usr/bin/env node

var del = require('del');

var data=require('./package.json');
var dependencies=data.dependencies;
var to_del=[];
for(var i in dependencies){
    var version=dependencies[i];
    if(version.startsWith('../')){
        to_del.push(i);
    }
}

if(to_del.length>0){
    del(to_del).then(function(paths){
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
}
