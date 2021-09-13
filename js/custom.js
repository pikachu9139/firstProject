$(function () {

    //변수 ht에 브라우저의 높이값을 저장
    let ht = $(window).height();
    //브라우저의 높이 값을 section의 높이값으로 지정
    $("section").height(ht);

    //브라우저가 리사이즈될 때마다 브라우저와 section의 높이값 갱신
    $(window).on('resize', function () {
        ht = $(window).height();
        $("section").height(ht);
    });





    /* 메뉴버튼 클릭시 */
    $("#menu li").on("click", function (e) {
        e.preventDefault();

        //변수 ht에 브라우저의 높이값 저장
        ht = $(window).height();

        //변수 i에 현재 클릭한 li의 순서값을 저장
        var i = $(this).index();

        //브라우저의 높이값*박스의 순서 값은 현재 박스의 스크롤 위치값과 동일
        var nowTop = i * ht;

        //해당 스크롤의 위치값으로 문서를 이동
        $("html,body").stop().animate({
            "scrollTop": nowTop
        }, 1400);
    });


    $(window).on("scroll", function () {
        //변수 ht에 현재 브라우저의 높이값 저장
        ht = $(window).height();
        //변수 scroll에 현재 문서가 스크롤된 거리 저장
        var scroll = $(window).scrollTop();



        for (var i = 0; i < 4; i++) {
            if (scroll >= ht * i && scroll < ht * (i + 1)) {
                $("#menu li").removeClass();
                $("#menu li").eq(i).addClass("on");
                $("#wrap section").removeClass("on");
                $("#wrap section").eq(i).addClass("on");
            }
        }
    });


    //section위에서 마우스 휠을 움직이면
    $("section").on("mousewheel", function (e, delta) {

        //마우스 휠을 올렸을때
        if (delta > 0) {
            //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top 위치 저장
            var prev = $(this).prev().offset().top;
            //문서 전체를 prev에 저장된 위치로 이동
            $("html,body").stop().animate({
                "scrollTop": prev
            }, 500);

        } else if (delta < 0) { //마우스 휠을 내렸을때
            //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top 위치 저장
            var next = $(this).next().offset().top;
            //문서 전체를 next에 저장된 위치로 이동
            $("html,body").stop().animate({
                "scrollTop": next
            }, 500);

        }

    });

     /* 포트폴리오 메뉴 클릭시 화면전환 */

    /* 클릭하면 위로 안올라감  */
    $('a.feellink').click(function (e) {
        e.preventDefault();
    });

    var arr=["sky","pupple","red","blue","coffee"];

    $("section:nth-child(2) ul li").click(function (e) {
        e.preventDefault();
        var i=$(this).index();
        $("section:nth-child(2) ul li").removeClass();
        $(this).addClass("on");

        $(".port>div").removeClass("on");
        $(".port>div").eq(i).addClass("on");

        $("section:nth-child(2)").removeClass();
        $("section:nth-child(2)").addClass(arr[i]);
        
    });


    /*  $("section:nth-child(2) ul li").eq(0).click(function () {
        $("section:nth-child(2) ul li").removeClass();
        $(this).addClass("on"),
            $(".everland,.food,.fire,.mega").hide();
        $("section:nth-child(2) .animation").show();
        $("section:nth-child(2)").removeClass();
        $("section:nth-child(2)").addClass("sky");
    });

    $("section:nth-child(2) ul li").eq(1).click(function () {
        $("section:nth-child(2) ul li").removeClass();
        $(this).addClass("on"),
            $(".animation,.food,.fire,.mega").hide();
        $("section:nth-child(2) .everland").show();
        $("section:nth-child(2)").removeClass();
        $("section:nth-child(2)").addClass("pupple");

    });

    $("section:nth-child(2) ul li").eq(2).click(function () {
        $("section:nth-child(2) ul li").removeClass();

        $(this).addClass("on");
        $(".animation,.everland,.fire,.mega").hide();
        $("section:nth-child(2) .food").show();
        $("section:nth-child(2)").removeClass();
        $("section:nth-child(2)").addClass("red");

    });

    $("section:nth-child(2) ul li").eq(3).click(function () {
        $("section:nth-child(2) ul li").removeClass();
        $(this).addClass("on");
        $(".animation,.everland,.food,.mega").hide();
        $("section:nth-child(2) .fire").show();
        $("section:nth-child(2)").removeClass();
        $("section:nth-child(2)").addClass("blue");


    });

    $("section:nth-child(2) ul li").eq(4).click(function () {
        $("section:nth-child(2) ul li").removeClass();
        $(this).addClass("on");
        $(".animation,.everland,.food,.fire").hide();
        $("section:nth-child(2) .mega").show();
        $("section:nth-child(2)").removeClass();
        $("section:nth-child(2)").addClass("coffee");

    }); */


    /* modal */
    $(".banner a").click(function(e){
        var i = $(this).index();
        console.log(i);
        e.preventDefault();
        $(".modal").fadeIn();
        $(".modal").find(".modal_inner").eq(i).show();
    });
 
    $(".modal button").click(function(){
        $(this).parent(".modal_inner").hide();
        $(".modal").fadeOut();
    });
    $("section:nth-child(4) .wordsq .sq .line1").click(function(){
        $(this).css('background-color','#fff');
        $("section:nth-child(4) .wordsq  .over .line2").show();
        $("section:nth-child(4) .wordsq .sq .line1 .hidden").show();
    });

    $("section:nth-child(4) .wordsq  .over .line2").click(function(){
        $(this).hide();
        $("section:nth-child(4) .wordsq .sq .line1").css('background-color','rgba(51, 85, 189, 0.3);');
        $("section:nth-child(4) .wordsq .sq .line1 .hidden").hide();
        
        
    });
});