/**
 * Created by Administrator on 2016/12/27.
 */
(function(){
    function F(id){
        this.init(id);
        return this ;
        console.log(this);
    }
    F.prototype={
        element:null,
        init:function(id){
            this.element=document.getElementById(id);
            return this.element;
        },
        hide:function(){
            this.element.style.display='none';
        },
        toggle:function(){
            if(this.element.style.display=='none'){
                this.element.style.display='block';
            }else{
                this.hide();
            }
        },
        click:function(fn){
            this.element.onclick=function(){
                fn.call(this)
            }

        },
        timer:null,
        slideup:function(){
            var _self=this;
            _self.tall=_self.element.offsetHeight;
            var timer=setInterval(function(){
                _self.tall-=5;
                _self.element.style.height=_self.tall+'px';
                if(_self.tall<=0){
                    clearInterval(timer);
                }

            },20)
        },
        /*slideup:function(){
         var self=this;
         var tall=this.element.offsetHeight;
         this.timer=setInterval(function () {
         tall-=10;
         self.element.style.height=tall+'px';
         if(tall<0){
         clearInterval(self.timer)
         }
         },20)
         },*/
        css:function(obj){
            var keys=[];
            //遍历对象把每个键值放入keys数组中
            for(var key in obj){
                //判断键;
                if(obj.hasOwnProperty(key)){
                    keys.push(key)
                }
            }
            //循环keys数组把每个css样式加上
            for(var i=0;i<keys.length;i++){
                var str=keys[i];
                console.log(str);
                //cssText(针对css)相当于innerHTML
                this.element.style.cssText+=str+":"+obj[str];
            }
        },
        opacitys:1,
        fadeIn:function(op){
            var self=this;
            var time=setInterval(function () {
                self.opacitys-=0.1;
                self.element.style.opacity=self.opacitys;
                if(self.opacitys<=op){
                    clearInterval(time)
                }
            },40)

        },
        slideToggle:function(tall){
            this.tall=this.element.offsetHeight;

          if(this.tall>0){
              this.slideup();
          } else{
              this.slidedown(tall);
          }
        },
        slidedown:function(tall){
            var _self=this;
            _self.tall=_self.element.offsetHeight;
            var timer=setInterval(function(){
                _self.tall+=5;
                _self.element.style.height=_self.tall+'px';
                if(_self.tall>=tall){
                    clearInterval(timer);
                }

            },20)
        }

    }
    window.$=function(id){
        var obj=new F(id);
        return obj;
    }

})(window)