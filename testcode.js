/**
 * Created by prasun on 03-Apr-17.
 */

var dateTime= new Date();
console.log(dateTime);
// var name = "prasun biswas is" +dateTime+
//     "\n studing at TUT";
// var newName = name + dateTime;
// console.log(name);

// var soapMessage = '<?xml version=\"1.0\" encoding=\"utf-8\"?> \n\
//  <soap:Envelope xmlns:soap= \"http://schemas.xmlsoap.org/soap/envelope/\"';
// console.log(soapMessage);

//console.log(newName);
var soapMessage = '<?xml version=\"1.0\" encoding=\"utf-8\" ?>'+
    '\n<soap:Envelope xmlns:soap= \"http://schemas.xmlsoap.org/soap/envelope/\"'+
'\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" '+
'\nxmlns:xsd=\"http://www.w3.org/2001/XMLSchema>\" '+
   '\n<soap:Header>'+
'\n<IPC2501MsgInfo=MessageInfo'+
'\nxmlns:IPC2501MsgInfo=\"http: www.webstds.ipc.org/2501/MessageInfo.xsd\"'+
'\nsender:'+
'\ndestination:'+
'\ndateTime: '+ dateTime+
'\nmessageschema:'+
'\nmessageId:'+
'\n</soap:Header>'+
'\n<soap:Body>'+
'\n</soap:Body>'+
'\n</soap:Envelope>';
console.log(soapMessage);
// var concatanate = newName +soapMessage;
// console.log(concatanate);