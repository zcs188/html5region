/**
 * Created by Administrator on 2016/12/5 0005.
 */
<!-- ����������Ļ��С��������js -->
!function(){
    function setFontSize(){
        var _w=document.documentElement.clientWidth;
        _w=_w>768?768:_w;
        document.documentElement.style.fontSize=_w/16+"px";
    }
    var _t=null;
    window.addEventListener("resize",function(){clearTimeout(_t);_t=setTimeout(setFontSize,100);},false);
    setFontSize();
}(window);
<!-- ����������Ļ��С��������js end -->