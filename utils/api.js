var remote_url = "https://api.goprac.com/index.php";

function isEmpty(object) {
  for (var key in object) {
    if (object.hasOwnProperty(key))
      return false;
  }
  return true;
};

function commonApi(context = "/", queryObject = {}, body = {}, method = "post") {
  var url = context;
  url += !isEmpty(queryObject) ? '?' : "";
  for (var variable in queryObject) {
    if (typeof queryObject[variable] !== 'undefined') {
      url += '&' + variable + '=' + queryObject[variable];
    }
  }
  switch (method) {
    case "get":
      try {
        return $.ajax({
          // type: "GET",
          url: remote_url + url,
          async: false
        }).responseText;
      } catch (e) {
        throw new Error(e);
      }
    case "post":
      try {
        return $.ajax({
          dataType : "json",
          contentType: "text/plain",
          type: "POST",
          url: remote_url + url,
          data: JSON.stringify(body),
          async: false
        }).responseText;
      } catch (e) {
        throw new Error(e);
      }
    default:
      return;
  }
}
