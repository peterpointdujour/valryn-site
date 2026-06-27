/*
==========================================================
VALRYN PLATFORM
Main JavaScript
Version 2.0
Author: Edmillard S. Pointdujour
==========================================================
*/

"use strict";

/*
==========================================================
VALRYN CORE
==========================================================
*/

const VALRYN = {

    init() {
        this.header();
        this.smoothScroll();
        this.dailyMission();
    },

    header() {

        const header = document.querySelector(".header");

        if (!header) return;

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    },

    smoothScroll() {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {

            anchor.addEventListener("click", function(e){

                e.preventDefault();

                const target = document.querySelector(this.getAttribute("href"));

                if(target){

                    target.scrollIntoView({

                        behavior:"smooth"

                    });

                }

            });

        });

    },

    dailyMission(){

        const mission=document.getElementById("dailyMission");

        if(!mission) return;

        const hour=new Date().getHours();

        if(hour<12){

            mission.innerHTML="Morning: Build Opportunity.";

        }

        else if(hour<17){

            mission.innerHTML="Afternoon: Connections Grow.";

        }

        else if(hour<21){

            mission.innerHTML="Evening: Momentum Continues.";

        }

        else{

            mission.innerHTML="Night: Learn Today. Build Tomorrow.";

        }

    }

};

document.addEventListener("DOMContentLoaded",function(){

    VALRYN.init();

});

document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.querySelector(".intro-button");

  if (enterButton) {
    enterButton.addEventListener("click", function (event) {
      event.preventDefault();
      document.body.classList.add("entered");

      const home = document.querySelector("#home");
      if (home) {
        home.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
