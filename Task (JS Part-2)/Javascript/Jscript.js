    $(document).ready(() => {
        $("#btn1").click(() => {
            $("#text1").toggle();
            $("#text2").hide();
            $("#text3").hide();
            $("#text4").hide();
        });
    });
    
    $(document).ready(() => {
        $("#btn2").click(() => {
            $("#text2").toggle();
            $("#text1").hide();
            $("#text3").hide();
            $("#text4").hide();
        });
    });
    $(document).ready(() => {
        $("#btn3").click(() => {
            $("#text3").toggle();
            $("#text1").hide();
            $("#text2").hide();
            $("#text4").hide();
        });
    });
    $(document).ready(() => {
        $("#btn4").click(() => {
            $("#text4").toggle();
            $("#text1").hide();
            $("#text2").hide();
            $("#text3").hide();
        });
    });
