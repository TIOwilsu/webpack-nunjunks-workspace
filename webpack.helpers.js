const path = require('path',);
const glob_entries = require('webpack-glob-folder-entries',);

function returnEntries (globPath,){
  let entries = glob_entries(globPath, true,);
  let folderList = new Array();
  for (let folder in entries){
    folderList.push(path.join(__dirname, entries[folder],),);
  }
  return folderList;
}

module.exports = {
  returnEntries,
};
