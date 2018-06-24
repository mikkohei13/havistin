
/*
Methods for accessing the database.
*/

const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

// -----------------------------------------------------------
// Setup

const adapter = new FileSync("./storage/db/db.json"); // Relative to where app is started
const db = lowdb(adapter);

// -----------------------------------------------------------
// Functions

// TODO: create another function that returns userfiles by status, calling getuserfiles.
// ?? Should these be sync instead of async?

const organizeUserFilesByStatus = function organizeUserFilesByStatus(userFiles) {
  const userFilesByStatus = {
    valid: [],
    invalid: [],
    sent: [],
  };

  userFiles.forEach((file) => {
    userFilesByStatus[file.status].push(file);
  });

  return userFilesByStatus;
};

const getUserFiles = function getUserFiles(userId, callback) {
  // TODO: error handling

  const userFiles = db.get("files")
    .filter({ userId: userId })
    .sortBy("filename")
    .take(100)
    .value();

  const userFilesByStatus = organizeUserFilesByStatus(userFiles);
  callback(null, userFilesByStatus);
};

const setFileAsSent = function setFileAsSent(fileId, vihkoFileId) {
  // TODO: error handling

  db.get("files")
    .find({ id: fileId })
    .assign({
      status: "sent",
      vihkoFileId: vihkoFileId,
    })
    .write();

  return true;
};

module.exports = {
  getUserFiles: getUserFiles,
  setFileAsSent: setFileAsSent,
};
