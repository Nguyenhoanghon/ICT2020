// $(function () {
//     $('.lazyload').lazyload();
//     $("#sendComment").click(function () {
//         var cm = $("#cmdata").val();
//         var captcha = $("#captcha").val();
//         if (cm == "") {
//             $("#cmdata").addClass('is-invalid');
//             $("#cmdata").focus();
//         } else if (captcha == "") {
//             $("#cmdata").removeClass('is-invalid');
//             $("#captcha").addClass('is-invalid');
//             $("#captcha").focus();
//         } else {
//             $("#cmdata").removeClass('is-invalid');
//             $("#captcha").removeClass('is-invalid');
//             $.get('/checklogin', function (data) {
//                 cm = cm.replace(/<\/?[^>]+(>|$)/g, "");
//                 if (data == "1") {
//                     $.ajax({
//                         url: '/comment/add',
//                         type: 'post',
//                         dataType: 'text',
//                         data: {
//                             content: cm,
//                             news: $('#news_id').val()
//                         },
//                         success: function (response) {
//                             if (response == '1') {
//                                 $(' <div class="alert alert-success">Bình luận đang được phê duyệt</div>').insertBefore("#form_comment");
//                                 $("#cmdata").val('');
//                                 $("#captcha").val('');
//                             } else if (response == '0') {
//                                 $(' <div class="alert alert-danger">Bình luận thất bại</div>').insertBefore("#form_comment");
//                                 $("#cmdata").val('');
//                                 $("#captcha").val('');
//                             }
//                         }
//                     })
//                 } else {
//                     $('#loginModal').modal('show')
//                 }
//             });
//         }
//         ;
//     });
//     $("#login").click(function () {
//         var username = $('#username').val();
//         var password = $('#password').val();
//         if (username === "") {
//             $("#username").addClass('is-invalid');
//             $("#username").focus();
//         } else if (password === '') {
//             $("#password").addClass('is-invalid');
//             $("#password").focus();
//         } else {
//             $("#username").removeClass('is-invalid');
//             $("#password").removeClass('is-invalid');
//             $.ajax({
//                 url: '/dang-nhap',
//                 type: 'post',
//                 dataType: 'text',
//                 data: {
//                     username: username,
//                     password: password
//                 },
//                 success: function (response) {
//                     if (response != '1') {
//                         $('<div class="alert alert-danger alert-dismissable">' +
//                             '                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
//                             '                            <div class="message"> ' + response + '</div>' +
//                             '                            </div>').insertBefore("#form_login");
//                     } else if (response == '1') {
//                         $('.alert-dismissable').hide();
//                         $(' <div class="alert alert-success"> Đăng nhập thành công</div>').insertBefore("#form_login");
//                         $('#loginModal').hide(2000);
//                         $('.alert-success').hide(2000);
//                         $('.modal-backdrop.show').hide();
//                         $('body').removeClass('modal-open');
//                     }
//                 }
//             })
//         }
//     });
//     $("#register_form").click(function () {
//         $('.modal-backdrop.show').hide();
//         $('#loginModal').hide();
//         $('#registerModal').modal('show');
//     });
//     $("#signup_button").click(function () {
//         var email = $('#email').val();
//         var username = $('#username_signup').val();
//         var re_password = $('#re_password').val();
//         var password = $('#password_signup').val();
//         if (email === "") {
//             $("#email").addClass('is-invalid');
//             $("#email").focus();
//         } else if (username == "") {
//             $("#username_signup").addClass('is-invalid');
//             $("#username_signup").focus();
//         } else if (password === '') {
//             $("#password_signup").addClass('is-invalid');
//             $("#password_signup").focus();
//         } else if (re_password == "") {
//             $("#re_password").addClass('is-invalid');
//             $("#re_password").focus();
//         } else if (password != re_password) {
//             $('<div class="alert alert-danger alert-dismissable">' +
//                 '                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
//                 '                            <div class="message"> Mật khẩu không đúng </div>' +
//                 '                            </div>').insertBefore("#signup_form");
//         } else {
//             $("#username_signup").removeClass('is-invalid');
//             $("#password_signup").removeClass('is-invalid');
//             $("#re_password").removeClass('is-invalid');
//             $("#email").removeClass('is-invalid');
//
//             $.ajax({
//                 url: '/dang-ky',
//                 type: 'post',
//                 dataType: 'text',
//                 data: {
//                     username: username,
//                     password: password,
//                     email: email
//                 },
//                 success: function (response) {
//                     if (response == '1') {
//                         $('.alert-dismissable').hide();
//                         $(' <div class="alert alert-success">Đăng ký thành công</div>').insertBefore("#signup_form");
//                         $('#registerModal').hide(3000);
//                         $('.modal-backdrop.show').hide();
//                     } else if (response == '0') {
//                         $('.alert-dismissable').hide();
//                         $(' <div class="alert alert-success">' + response + '</div>').insertBefore("#signup_form");
//                     } else if (response == 'error') {
//                         $('.alert-danger').hide();
//                         $(' <div class="alert alert-danger">Email hoặc tên tài khoản đã được sử dụng</div>').insertBefore("#signup_form");
//                     }
//                 }
//             })
//         }
//     });
//
// });
//
