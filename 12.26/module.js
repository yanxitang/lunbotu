/**
 * Created by Administrator on 2016/12/26.
 */
(function(){

    function module(id,obj){
        this.id=id;
        this.data=obj;
        this.init();//初始化函数
    }
    module.prototype={
        container:null,
        init:function(){
            console.log('这是组件里面的内容')
            this.container=document.getElementById(this.id);
            this.bindEvent();//当对象初始化的时候就绑定事件

        },
        newElement:null,
        bindEvent:function(){
            var self=this;
            //监听事件
            this.container.onmouseover=function(){
                self.newElement=document.createElement('div');
                self.newElement.className='hoverClass';
                //self.newElement.style.position='fixed';
                self.newElement.innerHTML=self.data.content;
                self.container.appendChild(self.newElement);
            }
            this.container.onmouseout=function(){
                self.container.removeChild(self.newElement)
            }
        }
    }
        HTMLElement.prototype.hover=function(obj){
        console.log(obj);
        var moduleObj=new module(this.id,obj);//this.id是hover的
    }

})(window)