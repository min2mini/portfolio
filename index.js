$(document).ready(function () {

    // 메뉴이동
    $(document).on('click', '.h_li a', function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
        let o_top = $(href).offset().top;
        $('html, body').animate({
            scrollTop: o_top
        }, 500)
    });



    // 스크롤 움직이면 
    let chk = false;
    let chart_length = $('.chartrow').length;
    let sec3_o_bot = $('#sec3').offset().top + $('#sec3').height();
    let sec5_o_bot = $('#sec5').offset().top + $('#sec5').height();


    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).height();


        //퍼센트 
        if (chk != true) {
            if (sec3_o_bot - 800 <= s_bot) {

                let array = [95, 90, 90, 95, 90, 85, 80, 80];
                for (let i = 0; i < chart_length; i++) {
                    tmp(i, array[i]);

                    $('.row0' + (i + 1)).css({
                        width: array[i] + '%',
                        transition: 'all 1s'
                    })
                    $('.row0' + (i + 1) + ' .row_per').css({
                        right: '10px',
                        transition: 'all 1s'
                    })
                }

                chk = true;

            }
        }

        // contact 나중에 올라오게 하기 
        if(s_bot >= sec5_o_bot - 300){
       
            for(let i=0; i<$('.con').length; i++){
                (function(tmp_i){
                    setTimeout(function(){
                        $('.con').eq(tmp_i).addClass('con_ac')
                    },i * 100)
                })(i)
            }
        }
    })


    // 퍼센트 함수
    function tmp(i, num) {
        let up = 0; let interval;
        interval = setInterval(function () {
            up++;

            $('.chartrow').eq(i).find('.row_per').text(up + "%");
            if (up >= num) {
                clearInterval(interval);
            }
        }, 13)
    }




    // 홈화면 폰트 
    var divs = document.querySelectorAll(".rugrats");

    divs.forEach(function (div) {
        var text = div.textContent;
        div.innerHTML = "";

        for (var i = 0; i < text.length; i++) {
            var span = document.createElement("span");
            span.textContent = text[i];
            div.appendChild(span);
        }

        var spans = div.querySelectorAll('span');

        function shuffle(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }

        spans = shuffle(Array.from(spans));

        function getRandomValue() {
            return Math.random() * 0.4 - 0.24;
        }

        function applyRandomTransform() {
            spans.forEach(function (span) {
                var xOffset = getRandomValue() * 10;
                var yOffset = getRandomValue() * 15;
                var rotation = getRandomValue() * 6;

                span.style.transform = 'translate(' + xOffset + 'px, ' + yOffset + 'px) rotate(' + rotation + 'deg)';
                span.style.textIndent = xOffset + 'px';
            });
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        var currentIndex = 0;

        function changeColorSequentially() {
            spans.forEach(function (span, index) {
                var colorIndex = (index + currentIndex) % spans.length;
                span.style.color = (colorIndex === 0) ? getRandomColor() : spans[colorIndex - 1].style.color;
            });

            currentIndex = (currentIndex + 1) % spans.length;
        }

        setInterval(changeColorSequentially, 250);
        setInterval(applyRandomTransform, 100);
    });




    


})

