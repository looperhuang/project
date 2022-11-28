
$("body").append(`<meta name="google-signin-client_id"
content="367900249153-9ej6s5cfj111a1cv579lgtfc9qda2s6r.apps.googleusercontent.com">

<script src="https://apis.google.com/js/platform.js" async defer></script>`);



// $("body").append(`<div class="bg-balck text-white text-center p-5" style=" font-family:Microsoft JhengHei; font-weight:1000;">
// <dialog id="infoModal1" >
// <form>
// <legend>登入會員</legend>
//     <div>
//         <label for="idmemberID"style="margin: 1%;" >帳號:</label>
//         <input type="text" id="idName" required>
//         <span class="validity"></span>
//     </div>
//     <div>
//         <label for="idPwd"style="margin: 1%;" >密碼:</label>
//         <input type="password" id="idPwd" required>
//         <span class="validity"></span>
//     </div>
//     <div>
//         <a id="passOn" class="btn btn-dark "style="margin: 1%"  >忘記密碼</a>
//         <a id="memberOn" class="btn btn-dark "style="margin: 1%;" >加入會員</a>
//         <a class="g-signin2" data-onsuccess="onSignIn"style="margin: 1%;" ></a>
//         <br>
//         <button input type="submit" class="btn btn-dark"  >送出</button>
//         <button  input type="submit" class="btn btn-dark" id="cancel">取消</button>
//     </div>
// </form>
// </dialog> 
// </div>

// <div class="sbg-balck text-white text-center p-5" style=" font-family:Microsoft JhengHei; font-weight:1000;">  
//     <dialog  id="infoModal2">
//         <form>
//             <legend>忘記密碼</legend>
//             <div>
//                 <div>
//                     <label style="margin: 1%;">信箱:</label>
//                     <input type="email" required><br>
//                 </div>
//                 <div style="margin-right:18px ;">
//                     <label  style="margin: 1%;">驗證碼:</label>
//                     <input type="text" required/><br>
//                 </div> 
//                 <div>
//                     <button  input type="submit" class="btn btn-dark" style="margin: 1%;">送出</button>
//                     <button id="passCancel"class="btn btn-dark" style="margin: 1%;">取消</button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     </dialog>    
// </div>
  
// <div class="bg-balck text-white text-center p-5 " style=" font-family:Microsoft JhengHei; font-weight:1000 ">
//         <dialog id="infoModal3">
//             <form>
//             <legend>加入會員</legend>
//             <div>
//                 <div>
//                     <label>帳號:</label>
//                     <input type="text" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"><br>
//                     <span>(1.不可空白2.至少6個字且包含大小寫及英數字)</span>
//                 </div>
//                 <div>
//                     <label for="idPwd" >密碼:</label>
//                     <input type="text"  required pattern="(?=.*\d)(?=.*[a-z]).{6,}"/><br>
//                     <span class="validity">(1.不可空白2.至少6個字且包含英數字)</span>
//                 </div>
//                 <div>
//                     <label>姓名:</label>
//                     <input type="text" required pattern="^[\u4e00-\u9fff]{2,}$"><br>
//                     <span class="validity">(1.不可空白2.至少2個字以上3.必須全部為中文字)</span>
//                 </div>
//                 <div>
//                     <label >電話:</label>
//                     <input type="text" required pattern="(09)(?=.*\d).{8,}"><br>
//                     <span>格式:09XXXXXXXX</span>
//                 </div>
//                 <div>
//                     <label>信箱:</label>
//                     <input type="email" required><br>
//                     <span>格式:xxx@xxx.com</span>
//                 </div>
//                 <div>
//                     <label>生日:
//                         <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" />
//                         <span class="validity"></span><br>
//                     </label>
//                 </div>
//                 <br>
//                 <div>
//                     <label>性別:</label>
//                     <select name="gender" required>
//                         <option selected value="">請選擇你的性別</option>
//                         <option value="male">男性</option>
//                         <option value="female" >女性</option>
//                     </select>
//                 </div>
//                 <br>
//                 <div>
//                     <button input type="submit" class="btn btn-dark">送出</button>
//                      <button  class="btn btn-dark" id="memCancel">取消</button>
//                 </div>
//             </form>
//     </dialog>
// </div> `);

document.getElementById("member").addEventListener("click", out);
function out() {
    infoModal1.showModal();
}
document.getElementById("cancel").addEventListener("click", close);
function close() {
    infoModal1.close();
}
document.getElementById("passOn").addEventListener("click", passout);
function passout() {
    infoModal1.close();
    infoModal2.showModal();
}
document.getElementById("passCancel").addEventListener("click", passclose);
function passclose() {
    infoModal2.close();
}
document.getElementById("memberOn").addEventListener("click", memout);
function memout() {
    infoModal1.close();
    infoModal3.showModal();
}
document.getElementById("memCancel").addEventListener("click", memclose);
function memclose() {
    infoModal3.close();
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}