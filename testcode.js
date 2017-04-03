/**
 * Created by prasun on 03-Apr-17.
 */

var dateTime= new Date();
console.log(dateTime);
var name = "prasun";
var newName = name + dateTime;
console.log(newName);
var soapMessage = "<?xml version="1.0" encoding="utf-8" ?>" +

"<soap:Envelope xmlns:soap= "http://schemas.xmlsoap.org/soap/envelope/" +
"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" +
"xmlns:xsd="http://www.w3.org/2001/XMLSchema>" +
    "<soap:Header>"+
"<IPC2501MsgInfo=MessageInfo"+
"xmlns:IPC2501MsgInfo="http: www.webstds.ipc.org/2501/MessageInfo.xsd" +
"sender:"+
    "destination:"+
        "dateTime:"+
            "messageschema:"+
                "messageId:"+

                    "</soap:Header>"+
"<soap:Body>"+
"</soap:Body>"+

"</soap:Body>"+
"</soap:Envelope>";