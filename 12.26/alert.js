/**
 * Created by Administrator on 2016/12/26.
 */
(function(){
function winApp(){
    this.init();

}
    winApp.prototype={
    init:function(){},
        alert:function(str) {
            var container=document.createElement('div');
            container.id='alertId';
            container.innerHTML=str+'<div id="alertBtn">确定</div>';
            document.body.appendChild(container);
             var Btn=document.getElementById('alertBtn');
             Btn.onclick=function(){

                document.body.removeChild(container);
            }
            console.log(this);

    }
        }
  window.alert=function(str){
      var obj=new winApp();
      //改变alert执行的方法
      obj.alert.call(this,str);
      // obj.alert(this);
  }

})(window)