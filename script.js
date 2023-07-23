let max = 0;
let maxday = "";
fetch('./data.json')
    .then(data => data.json())
    .then(res => {
        for(let gun of res){
            let dayname = gun.day;
            let bar = document.getElementById(dayname).firstElementChild;
            let h =gun.amount *2;
            let s = h.toString();
            bar.style.height = s + "px";
            bar.setAttribute("money", "$" + gun.amount);

            if(h > max){
                maxday = dayname;
                max = h;   
            }
        }
    document.getElementById(maxday).firstElementChild.style.background = "hsl(186, 34%, 60%)";
});

