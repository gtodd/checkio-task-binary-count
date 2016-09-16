requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var $tryit;

        var io = new extIO({

            animation: function($expl, data){
                var checkioInput = data.in;
                if (!checkioInput){
                    return;
                }

                var explanation = data.ext["explanation"]
                for (var i = 0; i < explanation.length; i++) {
                    var $span = $("<span></span>").text(explanation[i]);
                    if (explanation[i] === "1") {
                        $span.addClass("unity");
                    }
                    $expl.append($span);
                }

            },
            tryit: function (this_e) {
                $tryit = $(this_e.setHtmlTryIt(ext.get_template('tryit'))).find('.tryit-content');
                $tryit.find('.bn-check').click(function (e) {
                    e.preventDefault();
                    var $input = $tryit.find(".tool .input-number");
                    var data = Number($input.val());
                    if (!isNaN(data)) {
                        data = Number(data);
                    }
                    this_e.sendToConsoleCheckiO(data);
                    e.stopPropagation();
                    return false;
                });

                $tryit.find('.bn-random').click(function (e) {
                    e.preventDefault();
                    var numb = Math.floor(Math.random() * 10000);
                    $tryit.find(".tool .input-number").val(numb);
                    return false;
                });
            },
            retConsole: function (ret) {
                $tryit.find(".checkio-result").html("Your Result<br>" + ret);
            }

            functions: {
                js: 'binaryCount',
                python: 'checkio'
            }
        });
        io.start();
    }
);
