
$(document).ready(function () {
	$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#ScrollToTop').fadeIn();
        } else {
            $('#ScrollToTop').fadeOut();
        }
		
		if ($(window).width() > 991.98) {
			 if ($(document).scrollTop() > 50) {
				$('#Header').addClass('fixed-top');
				$('#Header').addClass('shrink');
			}
			else {
				$('#Header').removeClass('fixed-top');
				$('#Header').removeClass('shrink');
			}
		}
    });

    $('#ScrollToTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });  
	
	 
	  
});


   

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("body").addClass("scroll");
  } else {
    $("body").removeClass("scroll");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const isPercent = counter.classList.contains("percent");
    const isPlus = !isPercent && target >= 20;

    let current = 0;
    const duration = 2000;
    const stepTime = Math.max(10, duration / target);

    const updateCounter = () => {
      if (current < target) {
        current++;
        counter.innerText = current + (isPercent ? "%" : isPlus ? "+" : "");
        setTimeout(updateCounter, stepTime);
      } else {
        counter.innerText = target + (isPercent ? "%" : isPlus ? "+" : "");
      }
    };

    updateCounter(); // 🔥 Trigger animation immediately
  });
});
