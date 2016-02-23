/**
 * Created by Administrator on 2016/2/21.
 */
app.LoadFile({key: 'BulletModel', fileList: ['custom/GameModel/moveModel/MoveModel.js']
}, function (MoveModel) {
    function BulletModel(point , position) {
        MoveModel.call(this, point[0]-1, point[1]-1, 2, 2 , position||10);
    }
    BulletModel.extend(MoveModel);
    BulletModel.prototype.draw = function(ctx){
        this.move();
        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.beginPath(this.point[1]);
        ctx.arc(this.point[0],this.point[1], this.size[1],0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    };

    /**
     * 是否达到移动最大值
     * @returns {boolean}
     */
    BulletModel.prototype.moveMaxMove = function(){
        return this.point[0] < 0 || this.point[0] > this.maxMove[0] || this.point[1] < 0 || this.point[1] > this.maxMove[1];
    };
    /**
     * 移动函数
     * @returns {BulletModel}
     */
    BulletModel.prototype.move = function(){
        this.point[0]+=this.distance[0];
        this.point[1]+=this.distance[1];
        if(this.moveMaxMove()) this.putClearModel(this);
        return this;
    };
    /**
     * 移除缓存
     * @returns {BulletModel}
     */
    BulletModel.prototype.removeGameDraw = function(){
        this.removeModel().removeTackCache(null);
        return this;
    };
    /**
     * 将子弹从坦克缓存中移除
     * @param Tack
     * @returns {BulletModel}
     */
    BulletModel.prototype.removeTackCache = function(Tack){
        this.removeTackCache = function(){
            if(!Tack || Tack.BulletCache.length == 0) return;
            for(var i = Tack.BulletCache.length-1; i >= 0 ; i--){
                if(Tack.BulletCache[i] == this){
                    Tack.BulletCache.splice(i, 1);
                    break;
                }
            }
            return this;
        };
        return this;
    };
    /**
     * 从写设置相对值
     * @returns {BulletModel}
     */
    BulletModel.prototype.setSize = function(){
        return this;
    };
    return BulletModel;
});