    const header = document.querySelector("nav");
    const awal=document.querySelector("#utama");
    console.log("INI Header", header);
    console.log("INI Awal ", awal);
    const ngebug={
        rootMargin:"-150px 0px 0px 0px"
    };

    // const obs=new IntersectionObserver(function(entries, obs){
    //     entries.forEach(entry =>{
    //         if(!entry.isIntersecting){
    //             header.classList.add("stroke");
    //         }
    //         else{
    //             header.classList.remove("stroke");
    //         }
    //     });

    // }, ngebug);

    // obs.observe(awal);