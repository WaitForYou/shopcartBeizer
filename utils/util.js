const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const inArray = (array, value) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return i;
    }
  } return -1;
}

function getLocalTime(now) {
  var now = new Date(parseInt(now));
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  return year + "-" + month + "-" + date + " " + hour + ":" + minute //+ ":" + second; 
}


module.exports = {
  formatTime: formatTime,
  inArray: inArray,
  getLocalTime: getLocalTime
}
