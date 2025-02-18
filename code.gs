//ตั้งค่า triggers ทุกนาทีบน scripgoogle
var token = 'GGG'; //ตChannel access token จากline ao
var userId = 'GGG'; //UserId หรือ group id สำหรับส่งข้อความ

//ส่งข้อความ
function Noti1530(){
  let timenow = Utilities.formatDate(new Date(), "GMT+7","HH:mm")
  let msg = 'ขณะนี้เวลา '+timenow+' น. '+'ขอความร่วมมือบุคลากรปิดเครื่องปรับอากาศ ขอบคุณครับ 🙏🏻💚🌱🌍'+'   '+'https://pic.in.th/image/JPaVeL'
  if(timenow == "19:49"){ //กำหนดเวลาส่ง
  sendLineMessage(msg)}
}

//ส่ง Line
function sendLineMessage(message) {
  var url = 'https://api.line.me/v2/bot/message/push';
  
  var payload = {
    to: userId, // แทนที่ด้วย User ID ที่ต้องการส่งข้อความไป
    messages: [
      {
        type: 'text',
        text: message
      }
    ]
  };

  var options = {
    'method': 'post',
    'headers': {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    'payload': JSON.stringify(payload)
  };

  UrlFetchApp.fetch(url, options);
}
