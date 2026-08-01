// ==========================
// BESTFLIX - JavaScript
// ==========================

// Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

        setTimeout(() => {
                loader.style.opacity = "0";
                        loader.style.transition = "1s";

                                setTimeout(() => {
                                            loader.style.display = "none";
                                                    }, 1000);

                                                        }, 2500);

                                                        });

                                                        // Smooth Fade Animation

                                                        const observer = new IntersectionObserver((entries)=>{

                                                        entries.forEach(entry=>{

                                                        if(entry.isIntersecting){

                                                        entry.target.style.opacity="1";
                                                        entry.target.style.transform="translateY(0px)";

                                                        }

                                                        });

                                                        });

                                                        document.querySelectorAll("section,.card").forEach(el=>{

                                                        el.style.opacity="0";

                                                        el.style.transform="translateY(60px)";

                                                        el.style.transition="1s";

                                                        observer.observe(el);

                                                        });

                                                        // Floating Hearts ❤️

                                                        setInterval(()=>{

                                                        const heart=document.createElement("div");

                                                        heart.innerHTML="❤️";

                                                        heart.style.position="fixed";

                                                        heart.style.left=Math.random()*100+"vw";

                                                        heart.style.top="100vh";

                                                        heart.style.fontSize=(20+Math.random()*20)+"px";

                                                        heart.style.opacity=".8";

                                                        heart.style.pointerEvents="none";

                                                        heart.style.animation="floatUp 6s linear forwards";

                                                        document.body.appendChild(heart);

                                                        setTimeout(()=>{

                                                        heart.remove();

                                                        },6000);

                                                        },900);

                                                        // Sparkles ✨

                                                        setInterval(()=>{

                                                        const star=document.createElement("div");

                                                        star.innerHTML="✨";

                                                        star.style.position="fixed";

                                                        star.style.left=Math.random()*100+"vw";

                                                        star.style.top=Math.random()*100+"vh";

                                                        star.style.fontSize="18px";

                                                        star.style.opacity=".9";

                                                        star.style.pointerEvents="none";

                                                        star.style.animation="twinkle 2s linear forwards";

                                                        document.body.appendChild(star);

                                                        setTimeout(()=>{

                                                        star.remove();

                                                        },2000);

                                                        },700);

                                                        // Console Message ❤️

                                                        console.log("%cHappy Friendship Day Himanshi ❤️ Arjun",
                                                        "color:red;font-size:22px;font-weight:bold;");// ======================
                                                        // Journey Counter
                                                        // ======================

                                                        // 👇 Yahan apni friendship ki date likhna
                                                        const startDate = new Date("2025-01-01");

                                                        function updateCounter(){

                                                        const now = new Date();

                                                        const diff = now - startDate;

                                                        const days = Math.floor(diff/(1000*60*60*24));

                                                        document.getElementById("loveCounter").innerHTML=

                                                        days+" Days Together ❤️";

                                                        }

                                                        updateCounter();

                                                        setInterval(updateCounter,1000);


                                                        // ======================
                                                        // Surprise Button
                                                        // ======================

                                                        function showLove(){

                                                        document.getElementById("hiddenMessage").style.display="block";

                                                        confetti();

                                                        }



                                                        // ======================
                                                        // Confetti
                                                        // ======================

                                                        function confetti(){

                                                        for(let i=0;i<120;i++){

                                                        let c=document.createElement("div");

                                                        c.innerHTML="❤️";

                                                        c.style.position="fixed";

                                                        c.style.left=Math.random()*100+"vw";

                                                        c.style.top="-20px";

                                                        c.style.fontSize=(18+Math.random()*20)+"px";

                                                        c.style.animation="fall 5s linear forwards";

                                                        document.body.appendChild(c);

                                                        setTimeout(()=>{

                                                        c.remove();

                                                        },5000);

                                                        }

                                                        }