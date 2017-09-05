var popup={
    customAlert:function(msg){
        this.addAlert(msg);

        var alertCloseBtn = document.getElementById("alert-close-btn"),
            alertConfirmBtn = document.getElementById("alert-confirm-btn");

        this.addEvent(alertCloseBtn, "click", this.closePopUp);
        this.addEvent(alertConfirmBtn, "click", this.closePopUp);
    },

    customConfirm:function(msg,okCallBack){
        this.addConfirm(msg);

        var alertCloseBtn = document.getElementById("alert-close-btn"),
            alertConfirmBtn = document.getElementById("alert-confirm-btn"),
            alertCancelBtn = document.getElementById("alert-cancel-btn");

        this.addEvent(alertCloseBtn, "click", this.closePopUp);
        this.addEvent(alertCancelBtn, "click", this.closePopUp);
        this.addEvent(alertConfirmBtn, "click", function(){
            popup.closePopUp();
            okCallBack();
        });
    },

    customMsg:function(msg){
        var layer = document.createElement("div");
        layer.setAttribute("class", "alert-layer");
        layer.setAttribute("id", "alert-layer");

        var alert = document.createElement("div");
        alert.setAttribute("class", "msg-blk");
        alert.setAttribute("id", "msg-blk");

        var html = "";
        html += '<div class="alert-msg-fixed">';
        html += '<span class="alert-icon alert-icon-warn"></span>';
        html += '<span class="alert-msg">' + msg + '</span>';
        html += '</div>';
        alert.innerHTML = html;

        document.body.appendChild(layer);
        document.body.appendChild(alert);

        setTimeout(function(){
            document.body.removeChild(layer);
            document.body.removeChild(alert);
        },1000);
    },

    addEvent:function(ele,evtName,callback){
        if (document.addEventListener)
            ele.addEventListener(evtName,callback);
        else
            ele.attachEvent("on"+evtName,callback);
    },

    addAlert:function(msg){
        var layer = document.createElement("div");
        layer.setAttribute("class", "alert-layer");
        layer.setAttribute("id", "alert-layer");

        var alert = document.createElement("div");
        alert.setAttribute("class", "alert-blk");
        alert.setAttribute("id", "alert-blk");

        var html = "";
        html += '<div class="alert-title-fixed">';
        html += '<span class="alert-title">警告</span>';
        html += '<span class="alert-close-btn" id="alert-close-btn"></span>';
        html += '</div>';
        html += '<div class="alert-msg-fixed">';
        html += '<span class="alert-icon alert-icon-warn"></span>';
        html += '<span class="alert-msg">' + msg + '</span>';
        html += '</div>';
        html += '<div class="alert-bottom">';
        html += '<span class="alert-confirm-btn" id="alert-confirm-btn">确定</span>';
        html += '</div>';
        alert.innerHTML = html;

        document.body.appendChild(layer);
        document.body.appendChild(alert);
    },

    addConfirm:function(msg){
        var layer = document.createElement("div");
        layer.setAttribute("class", "alert-layer");
        layer.setAttribute("id", "alert-layer");

        var alert = document.createElement("div");
        alert.setAttribute("class", "alert-blk");
        alert.setAttribute("id", "alert-blk");

        var html = "";

        html += '<div class="alert-title-fixed">';
        html += '<span class="alert-title">系统提示</span>';
        html += '<span class="alert-close-btn" id="alert-close-btn"></span>';
        html += '</div>';
        html += '<div class="alert-msg-fixed">';
        html += '<span class="alert-icon alert-icon-ask"></span>';
        html += '<span class="alert-msg">' + msg + '</span>';
        html += '</div>';
        html += '<div class="alert-bottom">';
        html += '<span class="alert-confirm-btn" id="alert-confirm-btn">确定</span>';
        html += '<span class="alert-cancel-btn" id="alert-cancel-btn">取消</span>';
        html += '</div>';

        alert.innerHTML = html;

        document.body.appendChild(layer);
        document.body.appendChild(alert);
    },

    closePopUp:function(){
        var layer=document.getElementById("alert-layer"),
            alert=document.getElementById("alert-blk");

        document.body.removeChild(layer);
        document.body.removeChild(alert);
    }
};