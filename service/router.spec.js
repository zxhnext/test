// const superagent = require("superagent");
// const app = require("./app");
// function request(){
//     return superagent(app.listen())
// }
// request()
// .get("/test")
// .expect("Content-Type",/json/)
// .expect(200)
// .end(function(err,res){
//     if(res.data == "Hello World"){
//         done();
//     }else{
//         done(err);
//     }
// })
const axios = require("axios");
describe("node接口", function () {
  it("test接口测试", function (done) {
    axios.get('http://localhost:3000/test')
      .then(function (response) {
        if (response.data.result == "Hello World") {
          done();
        } else {
          done(new Error("数据请求格式错误"));
        }
      })
      .catch(function (error) {
        done(error);
      });
  });
});