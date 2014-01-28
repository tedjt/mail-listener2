var MailListener = require("./");

var mailListener = new MailListener({
  username: "xxx",
  password: "xxx",
  host: "imap.gmail.com",
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX",
  markSeen: true,
  fetchUnreadOnStart: { sinceDate: new Date((new Date()).getTime() - 60 * 1000) },
  mailParserOptions: {streamAttachments: true}
});

mailListener.start();

mailListener.on("server:connected", function(){
  console.log("imapConnected");
});

mailListener.on("server:disconnected", function(){
  console.log("imapDisconnected");
});

mailListener.on("error", function(err){
  console.log(err);
});

mailListener.on("mail", function(mail){
  console.log(mail);
});
