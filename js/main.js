jQuery(function(f){
    var element = f('#stick');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 760 ? 'In': 'Out')](500);           
    });
});
$(document).ready(function(){ 
    $('.nav li a').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top-1}, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
    $('#footer-nav li a').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top-1}, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

    $('.logo').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $("header").offset().top-0}, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

    $('#more').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $("#services").offset().top-0}, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });


    /*        $('.scrollup').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });*/
});

$(document).ready(function(){
    $('#services').viewportChecker({
        callbackFunction: function(elem, action){
        $('#services .vert-line').css('height','90px');
        },
    });

    $('#about').viewportChecker({
        callbackFunction: function(elem, action){
        $('#about .vert-line').css('height','90px');
        },
    });
    $('#advantage').viewportChecker({
        callbackFunction: function(elem, action){
        $('#advantage .vert-line').css('height','90px');
        },
    });
    $('#shcema').viewportChecker({
        callbackFunction: function(elem, action){
        $('#shcema .vert-line').css('height','90px');
        },
    });
    $('#delivery').viewportChecker({
        callbackFunction: function(elem, action){
        $('#delivery .vert-line').css('height','90px');
        },
    });
    $('#faq').viewportChecker({
        callbackFunction: function(elem, action){
        $('#faq .vert-line').css('height','90px');
        },
    });
    $('#contact').viewportChecker({
        callbackFunction: function(elem, action){
        $('#contact .vert-line').css('height','90px');
        },
    });

      $('#num1').viewportChecker({
          callbackFunction: function(elem, action){
        var percent_number_step = $.animateNumber.numberStepFactories.append('+')
        $('#num1').animateNumber(
          {
            number: 100,
            easing: 'easeInQuad',
            numberStep: percent_number_step
          },
          2000
        );
        $('#num2').animateNumber(
          {
            number: 8000,
            easing: 'easeInQuad',
            numberStep: percent_number_step
          },
          2000
        );
        $('#num3').animateNumber(
          {
            number: 5000,
            easing: 'easeInQuad',
            numberStep: percent_number_step
          },
          2000
        );
      }, 
    });
});

 jQuery(function($) {
    $(".phone-field").inputmask("+7 (999) 999-99-99");
  });


 jQuery(function($) {
    //$('#to_step_2').on('click', function() {
    //    $('#step-modal-1').removeClass('active');
    //    $('#step-modal-2').addClass('active');
//
    //});
    $('#to_step_3').on('click', function() {
        $('#step-modal-2').removeClass('active');
        $('#step-modal-3').addClass('active');
    });
    $('.steps .step:nth-child(1)').on('click', function() {
        $('#step-modal-1').addClass('active');
        $('#step-modal-2').removeClass('active');
        $('#step-modal-3').removeClass('active');
    });

    $('.steps .step:nth-child(2)').on('click', function() {
        $('#step-modal-1').removeClass('active');
        $('#step-modal-2').addClass('active');
        $('#step-modal-3').removeClass('active');
    });
    $('.steps .step:nth-child(3)').on('click', function() {
        $('#step-modal-1').removeClass('active');
        $('#step-modal-2').removeClass('active');
        $('#step-modal-3').addClass('active');
    });

 });

$("#form1__send").click(function() {
    // console.log("click");
    var n = $("#form1__name").val(),
        p = $("#form1__phone").val(),
        t = $("#form1__time").val();
    if(p < 18) {
        $("#form1__phone").addClass("not_phone");
        $("#form1__phone").prop("placeholder", "Введите номер телефона");
        setTimeout(function() {
            $("#form1__phone").removeClass("not_phone");
            $("#form1__phone").prop("placeholder", "Номер телефона");
        }, 2000);
        
    } else {
        $("#form1__phone").css("border-bottom", "1px solid #6b6b6b");
        $.ajax({
            url: "form1.php",
            type: "post",
            dataType: "json",
            data: {
                form1__name: n,
                form1__phone: p,
                form1__time: t
            },
            beforeSend: function(n,p,t) {
                $('#form1__send').attr('data-hover','Идет отправка...');
                $('#form1__send').attr('disabled', 'disabled').html('Идет отправка...');
            },
            success: function(n,p,t) {
                $('#form1__send').attr('data-hover','Заявка отправлена!');
                $('#form1__send').attr('disabled', 'disabled').html('Заявка отправлена!');
                $('#form1 .form_complite').addClass('fadeIn');
                /*alert(t.result),*/
               //$('#download_price_list').attr('disabled', 'disabled').css('background','#e02f29').val('Заявка успешно отправлена!');
               //setTimeout(function() {
               //    $( ".close2" ).trigger( "click" );
               //}, 750);
               //yaCounter45880929.reachGoal('dwnprice');
    //           gtag('event', 'lead', { 'event_category': 'form', 'event_label' : 'Предложение'});
	//		   yaCounter47071917.reachGoal('sendform');
            }
        })
    }
});

$("#form2__send").click(function() {
    // console.log("click");
    var n = $("#form2__name").val(),
        p = $("#form2__phone").val()
    if(p < 18) {
        $("#form2__phone").addClass("not_phone");
        $("#form2__phone").attr("placeholder", "Введите номер телефона");
        setTimeout(function() {
            $("#form2__phone").removeClass("not_phone");
            $("#form2__phone").attr("placeholder", "Номер телефона");
        }, 2000);
    } else {
        $("#form2__phone").css("border-bottom", "1px solid #6b6b6b");
        $.ajax({
            url: "form2.php",
            type: "post",
            dataType: "json",
            data: {
                form2__name: n,
                form2__phone: p
            },
            beforeSend: function(n,p) {
                $('#form2__send').attr('data-hover','Идет отправка...');
                $('#form2__send').attr('disabled', 'disabled').html('Идет отправка...');
            },
            success: function(n,p) {
                $('#form2__send').attr('data-hover','Заявка отправлена!');
                $('#form2__send').attr('disabled', 'disabled').html('Заявка отправлена!');
                $('#form2 .form_complite').addClass('fadeIn');
                /*alert(t.result),*/
               //$('#download_price_list').attr('disabled', 'disabled').css('background','#e02f29').val('Заявка успешно отправлена!');
               //setTimeout(function() {
               //    $( ".close2" ).trigger( "click" );
               //}, 750);
               //yaCounter45880929.reachGoal('dwnprice');
                gtag('event', 'lead', { 'event_category': 'form', 'event_label' : 'как-сэкономить'});
                yaCounter47071917.reachGoal('sendform');  
            }
        })
    }
});

$("#form3__send").click(function() {
    // console.log("click");
    var n = $("#form3__name").val(),
        p = $("#form3__phone").val()
    if(p < 18) {
        $("#form3__phone").addClass("not_phone");
        $("#form3__phone").attr("placeholder", "Введите номер телефона");
        setTimeout(function() {
            $("#form3__phone").removeClass("not_phone");
            $("#form3__phone").attr("placeholder", "Номер телефона");
        }, 2000);
    } else {
        $("#form3__phone").css("border-bottom", "1px solid #6b6b6b");
        $.ajax({
            url: "form3.php",
            type: "post",
            dataType: "json",
            data: {
                form3__name: n,
                form3__phone: p
            },
            beforeSend: function(n,p) {
                $('#form3__send').attr('data-hover','Идет отправка...');
                $('#form3__send').attr('disabled', 'disabled').html('Идет отправка...');
            },
            success: function(n,p) {
                $('#form3__send').attr('data-hover','Заявка отправлена!');
                $('#form3__send').attr('disabled', 'disabled').html('Заявка отправлена!');
                $('#form3 .form_complite').addClass('fadeIn');
                /*alert(t.result),*/
               //$('#download_price_list').attr('disabled', 'disabled').css('background','#e02f29').val('Заявка успешно отправлена!');
               //setTimeout(function() {
               //    $( ".close2" ).trigger( "click" );
               //}, 750);
               //yaCounter45880929.reachGoal('dwnprice');
                gtag('event', 'lead', { 'event_category': 'form', 'event_label' : 'узнать-стоимость'});
                yaCounter47071917.reachGoal('sendform');
			}
        })
    }
});

$("#form4__send").click(function() {
    // console.log("click");
    var n = $("#form4__name").val(),
        p = $("#form4__phone").val(),
        m = $("#form4__mail").val(),
        q = $("#form4__quest").val()
    if(p < 18) {
        $("#form4__phone").addClass("not_phone");
        $("#form4__phone").attr("placeholder", "Введите номер телефона");
        setTimeout(function() {
            $("#form4__phone").removeClass("not_phone");
            $("#form4__phone").attr("placeholder", "Номер телефона");
        }, 2000);
    } else {
        $("#form4__phone").css("border-bottom", "1px solid #6b6b6b");
        $.ajax({
            url: "form4.php",
            type: "post",
            dataType: "json",
            data: {
                form4__name: n,
                form4__phone: p,
                form4__mail: m,
                form4__quest: q
            },
            beforeSend: function(n,p,m,q) {
                $('#form4__send').attr('data-hover','Идет отправка...');
                $('#form4__send').attr('disabled', 'disabled').html('Идет отправка...');
            },
            success: function(n,p,m,q) {
                $('#form4__send').attr('data-hover','Заявка отправлена!');
                $('#form4__send').attr('disabled', 'disabled').html('Заявка отправлена!');
                $('#form4 .form_complite').addClass('fadeIn');
                /*alert(t.result),*/
               //$('#download_price_list').attr('disabled', 'disabled').css('background','#e02f29').val('Заявка успешно отправлена!');
               //setTimeout(function() {
               //    $( ".close2" ).trigger( "click" );
               //}, 750);
               //yaCounter45880929.reachGoal('dwnprice');
			    gtag('event', 'lead', { 'event_category': 'form', 'event_label' : 'вопрос'});
                yaCounter47071917.reachGoal('sendform');
            }
        })
    }
});

$(".send-modal").click(function() {
    //console.log("click");
    var n = $(".modal.show .name-modal").val(),
        p = $(".modal.show .phone-modal").val(),
        f = $(".modal.show h3").html();
    if(p < 18) {
        $(".modal.show .phone-modal").addClass("not_phone");
        $(".modal.show .phone-modal").attr("placeholder", "Введите номер телефона");
        setTimeout(function() {
            $(".modal.show .phone-modal").removeClass("not_phone");
            $(".modal.show .phone-modal").attr("placeholder", "Номер телефона");
        }, 2000);
    } else {
        $(".modal.show .phone-modal").css("border-bottom", "1px solid #6b6b6b");
        $.ajax({
            url: "form_modal.php",
            type: "post",
            dataType: "json",
            data: {
                modal_name: n,
                modal_phone: p,
                modal_title: f
            },
            beforeSend: function(n,p,m,q) {
                $('.modal.show .send-modal').attr('data-hover','Идет отправка...');
                $('.modal.show .send-modal').attr('disabled', 'disabled').html('Идет отправка...');
            },
            success: function(n,p,m,q) {
                $('.modal.show .send-modal').attr('data-hover','Заявка отправлена!');
                $('.modal.show .send-modal').attr('disabled', 'disabled').html('Заявка отправлена!');
             // $('#form4 .form_complite').addClass('fadeIn');
                /*alert(t.result),*/
               //$('#download_price_list').attr('disabled', 'disabled').css('background','#e02f29').val('Заявка успешно отправлена!');
               //setTimeout(function() {
               //    $( ".close2" ).trigger( "click" );
               //}, 750);
               //yaCounter45880929.reachGoal('dwnprice');
               gtag('event', 'lead', { 'event_category': 'form', 'event_label' : 'доставка-грузов'});

            }
        })
    }
});


$("#to_step_2").click(function() {
    // console.log("click");
    var n = $("#calc_name").val(),
        p = $("#calc_phone").val(),
        c = $("#calc_company").val()
    if(p < 18) {
        $("#calc_phone").addClass("not_phone");
        $("#calc_phone").attr("placeholder", "Введите номер телефона");
        $('.stars').hide();
        setTimeout(function() {
            $("#calc_phone").removeClass("not_phone");
            $("#calc_phone").attr("placeholder", "Номер телефона");
            $('.stars').fadeIn();
        }, 2000);
    } else {
        $("#calc_phone").css("border-bottom", "1px solid #6b6b6b");
        $.ajax({
            url: "calc1.php",
            type: "post",
            dataType: "json",
            data: {
                calc_name: n,
                calc_phone: p,
                calc_company: c,
            },
            beforeSend: function() {
                //$('#calc__send').attr('data-hover','Идет отправка...');
                //$('#calc__send').attr('disabled', 'disabled').html('Идет отправка...');
            },
            success: function() {
               //$('#calc__send').attr('data-hover','Заявка отправлена!');
               //$('#calc__send').attr('disabled', 'disabled').html('Заявка отправлена!');
                /*alert(t.result),*/
               //$('#download_price_list').attr('disabled', 'disabled').css('background','#e02f29').val('Заявка успешно отправлена!');
               //setTimeout(function() {
               //    $( ".close2" ).trigger( "click" );
               //}, 750);
               //yaCounter45880929.reachGoal('dwnprice');
               $('#step-modal-1').removeClass('active');
               $('#step-modal-2').addClass('active');
               gtag('event', 'lead', { 'event_category': 'form', 'event_label' : 'Калькулятор'});
            }
        })
    }
});


$("#calc_send").click(function() {
    // console.log("click");
    var n = $("#calc_name").val(),
        p = $("#calc_phone").val(),
        c = $("#calc_company").val(),
        t = $("#calc_tovar").val(),
        f = $("#calc_from").val(),
        to = $("#calc_to").val(),
        wb = $("#calc_weight_b").val(),
        v = $("#calc_v").val(),
        wn = $("#calc_weight_n").val()

        $("#calc_phone").css("border-bottom", "1px solid #6b6b6b");

    $.ajax({
        url: "calc2.php",
        type: "post",
        dataType: "json",
        data: {
            calc_name: n,
            calc_phone: p,
            calc_company: c,
            calc_tovar: t,
            calc_from: f,
            calc_to: to,
            calc_weight_b: wb,
            calc_v: v,
            calc_weight_n: wn
        },
        beforeSend: function() {
            //$('#calc__send').attr('data-hover','Идет отправка...');
            //$('#calc__send').attr('disabled', 'disabled').html('Идет отправка...');
        },
        success: function() {
           $('#calc_send').hide();

           $('#calc_send').after('<p class="sended">Ваша заявка на расчет отправлена!</p>');
            /*alert(t.result),*/
           //$('#download_price_list').attr('disabled', 'disabled').css('background','#e02f29').val('Заявка успешно отправлена!');
           //setTimeout(function() {
           //    $( ".close2" ).trigger( "click" );
           //}, 750);
           //yaCounter45880929.reachGoal('dwnprice');
		   	gtag('event', 'send', { 'event_category': 'form', 'event_label' : 'sendform'});
            yaCounter47071917.reachGoal('sendform');
        }
    })
});

$("#calc_phone").click(function() {
    $('.stars').hide();
});
$.fn.setCursorPosition = function(pos) {
    this.each(function(index, elem) {
    if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
    });
    return this;
};

$('#calc_weight_b').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
    };
    var val = this.value;
    var val_len = $(this).val().length;
    console.log(val_len);
    if (val > 0){
        $(this).val(val + ' кг');
    }
    $(this).focus().setCursorPosition(val_len);
});

$('#calc_weight_n').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
    };
    var val = this.value;
    var val_len = $(this).val().length;
    console.log(val_len);
    if (val > 0){
        $(this).val(val + ' кг');
    }
    $(this).focus().setCursorPosition(val_len);
});

$('#calc_v').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
    };
    var val = this.value;
    var val_len = $(this).val().length;
    console.log(val_len);
    if (val > 0){
        $(this).val(val + ' м³');
    }
    $(this).focus().setCursorPosition(val_len);
});

/*$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $(window).scroll(function() {
            var yPos = -($(document).scrollTop() / $bgobj.data('speed'));
            var coords = 'center '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});*/