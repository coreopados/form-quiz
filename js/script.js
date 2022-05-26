$(document).ready(function () {
  
    $('.next-step').on('click', function(event){
        event.preventDefault();

        if($(this).attr('data-step')==1){
            $('.form-block').removeClass('active')
            $('.ask2').addClass('active')
        }else if($(this).attr('data-step')==2){
            $('.form-block').removeClass('active')
            $('.ask3').addClass('active')
        }

        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
        





    $('input[type=file]').each(function() {
        var $input = $(this),
            $label = $input.next('.js-labelFile'),
            labelVal = $label.html();
  
        $input.hide();
        $input.on('change', function(element) {
            var fileName = '';
            $('.form-control-label').addClass('active')
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
        });
      });

    $("#eventStartDate, #eventEndDate").inputmask("99/99/9999");
    $("#eventStartTime, #eventEndTime").inputmask("99:99 AM");
    

    // $('#summernote').summernote();

 
    $("input[data-date='datepicker']").datepicker({ dateFormat: 'dd-mm-yy' }).val();
     
});