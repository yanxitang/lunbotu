/**
 * Created by Administrator on 2016/12/26.
 */
(function(){
    function carouselMoudle(id){
        this.id = id;
        this.init();
    }
    carouselMoudle.prototype = {
        carouselCon:null,
        current:0,
        length:0,
        left:0, //当前的ul的位置
        speed:20,
        init:function(){
            this.carouselCon = document.getElementById(this.id);
            this.length  = this.carouselCon.getElementsByTagName("li").length;
            console.log(this.length);
            this.bindEvent();
            this.autoplay();
        },
        moveRight:function(index,speed){
            var self = this;
            var timerRight = setInterval(function(){
                //改变ul的left值
                self.left -= speed;
                self.setPosition();//设置ul的位置
                if(self.left <= -(800 * index)){//判断有没有到达目的位置清楚定时器
                    clearInterval(timerRight);
                }
            },20)
        },
        moveLeft:function(index,speed){
            var self = this;
            var timerLeft = setInterval(function(){
                self.left += speed;
                self.setPosition();
                if(self.left >= -(800 * index)){
                    clearInterval(timerLeft);
                }
            },20)
        },
        timer:null,
        autoplay:function(){
            var self=this;
           this.timer=setInterval(function(){
               if(self.current < self.length -1){
                   self.current++;
                   self.speed=10;
                   self.moveRight(self.current,self.speed);
               }else {
                   self.current = 0;
                   self.speed=30;
                   self.moveLeft(self.current,self.speed);}

           },3000)
        },
        setPosition:function(){
            this.carouselCon.style.left =this.left + "px";
        },
        bindEvent:function(){
            var next = document.getElementById("next");
            var span = document.getElementById("span");
            var self = this;
            next.onclick = function(){
                if(self.current < self.length -1){
                    self.current++;
                    self.speed=10;
                    self.moveRight(self.current,self.speed);
                }else {
                    self.current = 0;
                    self.speed=30;
                    self.moveLeft(self.current,self.speed);}
            }
            span.onclick=function(){
                if(self.current<self.length-1){
                    self.current++;
                    self.speed=10;
                    self.moveRight(self.current,self.speed);
                }else{
                    //self.current=0;
                    self.current=self.length-1;
                    self.speed=30;
                    self.moveRight(self.current,self.speed);
                }

            }
            self.carouselCon.onmouseover=function(){
                clearInterval(self.timer);
            }
            self.carouselCon.onmouseout=function(){
                self.autoplay();
            }


        }
    }

    HTMLElement.prototype.carousel = function(){
        var instance = new carouselMoudle(this.id);
    }
    })(window)
