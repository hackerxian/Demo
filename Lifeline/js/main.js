module.exports = function() {
    var data = [{
        id: 0,
        texts: ['1', '2', '3', '4', '5'],
        options: [{
            text: '这是一个测试yes',
            redirect: 1
        }, {
            text: '测试什么',
            redirect: 2
        }]
    }, {
        id: 1,
        texts: ['11', '12', '13', '14', '15'],
        options: [{
            text: 'yes',
            redirect: 1
        }, {
            text: 'no',
            redirect: 2
        }]
    }, {
        id: 2,
        texts: ['21', '22', '23', '24', '游戏结束']
        //options: [{
        //    text: 'yes',
        //    redirect: 1
        //}, {
        //    text: 'no',
        //    redirect: 2
        //}]
    }];
    var $loading  = $('.loading');

    doTimeTask(data[0]);

    function showText(text) {
        var html = '<div class="card">'+ text +'</div>';
        $('.container').append(html);
    }

    function scrollCard() {
        var top = $loading.offset().top;
        var screenTop = $(window).height() - $('.card').height() - $('.card:first-child').offset().top;
        if (top > screenTop) {
            $(window).scrollTop(top - screenTop);
            //$('.card:last-child').animate({scrollTop: top - screenTop}, '500');
        }
    }

    function showOptions(options) {
        var html = '<div class="card button-wrapper"> <button type="button" class="button" data-id="'+ options[0].redirect +'">'+ options[0].text +'</button> <button type="button" class="button" data-id="'+ options[1].redirect +'">' + options[1].text +'</button></div>';
        $('.container').append(html);
    }

    $(document).on('click', '.card .button', function(e){
        var $this = $(e.target);
        //set current active button disabled
        $this.addClass('button-active-disabled').prop('disabled', true);
        //set siblings button disabled
        $this.siblings('.button').addClass('button-disabled').prop('disabled', true);

        var id = $this.data('id');
        var content = data[id];
        doTimeTask(content);
    });

    function doTimeTask(content) {
        $loading.show();
        for(var i = 0; i < content.texts.length; i++) {
            (function(index){
                var texts = content.texts;
                var timer = setTimeout(function() {
                    var text = texts[index];
                    showText(text);
                    scrollCard();
                    if (index === texts.length - 1) {
                        clearTimeout(timer);
                        content.options && showOptions(content.options);
                        $loading.hide();
                    }
                }, 1500*index);
            })(i);
        }
    }
};
