/**
 * Created by Administrator on 2016/2/21.
 */
(function () {
    app.LoadFile(['custom/Game.js' , 'custom/GameModel/BgModel.js',
        'custom/GameModel/moveModel/Tack/ComputerTack.js',
        'custom/GameModel/obstacle/SteelPlate.js',
        'custom/GameModel/obstacle/Brick.js',
        'custom/GameModel/obstacle/Boss.js'], function (Game, BgModel, ComputerTack, SteelPlate,Brick,Boss) {
        var panArr = [
            [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0],
            [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 1 , 1 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 1 , 1 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0],
            [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0],
            [2 , 2 , 0 , 0 , 2 , 2 , 2 , 2 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 2 , 2, 2 , 2 , 0 , 0 , 2 , 2],
            [1 , 1 , 0 , 0 , 2 , 2 , 2 , 2 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 2 , 2, 2 , 2 , 0 , 0 , 1 , 1],
            [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0],
            [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 2 , 2 , 2 , 2 , 2 , 2 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 2 , 2 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 2 , 2 , 0 , 0 , 2 , 2 , 0 , 0, 0 , 2 , 2 , 2 , 2 , 0 , 0 , 0 , 2 , 2, 0 , 0 , 2 , 2 , 0 , 0],
            [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 0 , 2 , 9 , 9 , 2 , 0 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0],
            [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 0 , 2 , 9 , 9 , 2 , 0 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0]
        ];
        var cGame , baseUrl = app.getValue('baseUrl');

        function createGameModel(GameType, row, col) {
            var GameModelRealization;
            switch (GameType) {
                case 0:
                    break;
                case 1:
                    GameModelRealization = new SteelPlate(col * 15, row * 15, 15, 15, 2).setImgSrc(baseUrl + 'images/za-001.png');
                    break;
                case 2:
                    GameModelRealization = new Brick(col*15 , row * 15 , 15 , 15 , 2).setImgSrc(baseUrl + 'images/qiang.png');
                    break;
                case 9:
                    GameModelRealization = new Boss(col*15 , row * 15 , 30 , 30 , 2).setImgSrc(baseUrl + 'images/BOSS.png');
                    break;
            }
            return GameModelRealization;
        };
        Game.config({runTime: 30});
        cGame = Game(document.querySelector('#main'), 390, 390);
        cGame.putGameModel(new BgModel(0, 0, 390, 390, 1).drawType('solidColor', {}));
        cGame.putGameModel(new ComputerTack(120, 360, 30, 30, 99).reactImg(23, 302, 38, 38).setDistance(0, 2).setImgSrc(baseUrl + 'images/Tack.png'));
        (function () {
            var arr , GameModelRealization;
            for (var i = 0 , ii = panArr.length; i < ii; i++) {
                arr = panArr[i];
                for (var j = 0 , jj = arr.length; j < jj; j++) {
                    if(arr[j] == 9 && (panArr[i-1][j] == 9 || arr[j-1] == 9)){
                        continue;
                    }
                    GameModelRealization = createGameModel(arr[j], i, j);
                    if (GameModelRealization)cGame.putGameModel(GameModelRealization);
                }
            }
        })();

        Game.Run();
//        setTimeout(Game.stop , 1000);
    });
})();