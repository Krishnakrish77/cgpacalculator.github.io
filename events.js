AFRAME.registerComponent('markerhandler', {

    init: function() {
        var clicks = false;
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#WebPress");
        document.querySelector("#animated-marker").addEventListener('markerFound', (evt) => {
                clicks = true
            })
        document.querySelector("#animated-marker").addEventListener('markerLost', (evt) => {
                clicks = false
            }) 
        
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Site:"+clicks);
                if(clicks) {
                    window.location.href="https://voiceofsk.blogspot.com/";
                }
            }
        });
}});


AFRAME.registerComponent('clickhandler', {

    init: function() {
        var lclicks = false;
        const animatedMarker = document.querySelector("#in-marker");
        const aEntity = document.querySelector("#LinkedInPress");
        document.querySelector("#in-marker").addEventListener('markerFound', (evt) => {
                lclicks = true
            })
        document.querySelector("#in-marker").addEventListener('markerLost', (evt) => {
                lclicks = false
            }) 
        
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Ln:"+lclicks);
                if(lclicks) {
                    window.location.href="https://www.linkedin.com/in/sarukrishna-a-119a5681/";
                }
            }
        });
}});


AFRAME.registerComponent('mailhandler', {

    init: function() {
        var mclicks = false;
        const animatedMarker = document.querySelector("#mail-marker");
        const aEntity = document.querySelector("#MailPress");
        document.querySelector("#mail-marker").addEventListener('markerFound', (evt) => {
                mclicks = true
            })
        document.querySelector("#mail-marker").addEventListener('markerLost', (evt) => {
                mclicks = false
            }) 
        
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Mail:"+mclicks);
                if(mclicks) {
                    window.location.href="mailto:a.sarukrishna@gmail.com";
                }
            }
        });
}});


AFRAME.registerComponent('phhandler', {

    init: function() {
        var tclicks = false;
        const animatedMarker = document.querySelector("#ph-marker");
        const aEntity = document.querySelector("#PhonePress");
        document.querySelector("#ph-marker").addEventListener('markerFound', (evt) => {
                tclicks = true
            })
        document.querySelector("#ph-marker").addEventListener('markerLost', (evt) => {
                tclicks = false
            }) 
        
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Tel:"+tclicks);
                if(tclicks) {
                    window.location.href="tel:8903587247";
                }
            }
        });
}});


AFRAME.registerComponent('pichandler', {

    init: function() {
        var pclicks = false;
        const animatedMarker = document.querySelector("#pic-marker");
        const aEntity = document.querySelector("#PhotoPress");
        document.querySelector("#pic-marker").addEventListener('markerFound', (evt) => {
                pclicks = true
            })
        document.querySelector("#pic-marker").addEventListener('markerLost', (evt) => {
                pclicks = false
            }) 
        
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Pic:"+pclicks);
                if(pclicks) {
                    window.location.href="https://drive.google.com/file/d/1I6JGCXRRGq6RlCwDjdNPDFHJIYOlK_L6/view?usp=sharing";
                }
            }
        });
}});
