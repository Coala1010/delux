var app = angular.module('delux', ['ngRoute','ngAnimate', 'ngResource', 'ngSanitize', 'ui.bootstrap','textAngular','angularSpectrumColorpicker','ui.bootstrap.dropdownToggle','ngFileUpload']);


app.config(function($routeProvider, $locationProvider, $provide) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        controller : "loadPageCtrl"
    })
    .when("/download", {
        templateUrl : "download.html",
        controller : "DownloadCtrl"
    })
    .when("/charge", {
        templateUrl : "charge.html",
        controller : "ChargeCtrl"
    })
    .when("/withdrawl", {
        templateUrl : "withdraw.html",
        controller : "WithdrawlCtrl"
    })
    .when("/pocket", {
        templateUrl : "safe.html",
        controller : "PocketCtrl"
    })
    .when("/record", {
        templateUrl : "record.html",
        controller : "RecordCtrl"
    })
    .when("/message", {
        templateUrl : "message.html",
        controller : "MessageCtrl"
    })
    .when("/help", {
        templateUrl : "help.html",
        controller : "HelpPageCtrl"
    })
    .when("/billboard", {
        templateUrl : "liuyan.html",
        controller : "BillBoardCtrl"
    })
    .when("/billcomment", {
        templateUrl : "liuyanDetails.html",
        controller : "BillBoardCtrl"
    })
    .when("/notice", {
        templateUrl : "notice.html",
        controller : "NoticeCtrl"
    })
    .when("/profile", {
        templateUrl : "profile.html",
        controller : "ProfileCtrl"
    })
    .when("/notification", {
        templateUrl : "notification.html",
        controller : "loadPageCtrl"
    }).otherwise({
        redirectTo: "/"
    });

    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions){
        // $delegate is the taOptions we are decorating
        // register the tool with textAngular

        taRegisterTool('backgroundColor', {
            display: "<div spectrum-colorpicker ng-model='color' on-change='!!color && action(color)' format='\"hex\"' options='options'></div>",
            action: function (color) {
                var me = this;
                if (!this.$editor().wrapSelection) {
                    setTimeout(function () {
                        me.action(color);
                    }, 100)
                } else {
                    return this.$editor().wrapSelection('backColor', color);
                }
            },
            options: {
                replacerClassName: 'fa fa-paint-brush', showButtons: false
            },
            color: "#fff"
        });
        taRegisterTool('fontColor', {
            display:"<spectrum-colorpicker trigger-id='{{trigger}}' ng-model='color' on-change='!!color && action(color)' format='\"hex\"' options='options'></spectrum-colorpicker>",
            action: function (color) {
                var me = this;
                if (!this.$editor().wrapSelection) {
                    setTimeout(function () {
                        me.action(color);
                    }, 100)
                } else {
                    return this.$editor().wrapSelection('foreColor', color);
                }
            },
            options: {
                replacerClassName: 'fa fa-font', showButtons: false
            },
            color: "#000"
        });


        taRegisterTool('fontName', {
            display: "<span class='bar-btn-dropdown dropdown'>" +
            "<button class='btn btn-blue dropdown-toggle' type='button' ng-disabled='showHtml()' style='padding-top: 4px'><i class='fa fa-font'></i><i class='fa fa-caret-down'></i></button>" +
            "<ul class='dropdown-menu'><li ng-repeat='o in options'><button class='btn btn-blue checked-dropdown' style='font-family: {{o.css}}; width: 100%' type='button' ng-click='action($event, o.css)'><i ng-if='o.active' class='fa fa-check'></i>{{o.name}}</button></li></ul></span>",
            action: function (event, font) {
                //Ask if event is really an event.
                if (!!event.stopPropagation) {
                    //With this, you stop the event of textAngular.
                    event.stopPropagation();
                    //Then click in the body to close the dropdown.
                    $("body").trigger("click");
                }
                return this.$editor().wrapSelection('fontName', font);
            },
            options: [
                { name: 'Sans-Serif', css: 'Arial, Helvetica, sans-serif' },
                { name: 'Serif', css: "'times new roman', serif" },
                { name: 'Wide', css: "'arial black', sans-serif" },
                { name: 'Narrow', css: "'arial narrow', sans-serif" },
                { name: 'Comic Sans MS', css: "'comic sans ms', sans-serif" },
                { name: 'Courier New', css: "'courier new', monospace" },
                { name: 'Garamond', css: 'garamond, serif' },
                { name: 'Georgia', css: 'georgia, serif' },
                { name: 'Tahoma', css: 'tahoma, sans-serif' },
                { name: 'Trebuchet MS', css: "'trebuchet ms', sans-serif" },
                { name: "Helvetica", css: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
                { name: 'Verdana', css: 'verdana, sans-serif' },
                { name: 'Proxima Nova', css: 'proxima_nova_rgregular' }
            ]
        });


        taRegisterTool('fontSize', {
            display: "<span class='bar-btn-dropdown dropdown'>" +
            "<button class='btn btn-blue dropdown-toggle' type='button' ng-disabled='showHtml()' style='padding-top: 4px'><i class='fa fa-text-height'></i><i class='fa fa-caret-down'></i></button>" +
            "<ul class='dropdown-menu'><li ng-repeat='o in options'><button class='btn btn-blue checked-dropdown' style='font-size: {{o.css}}; width: 100%' type='button' ng-click='action($event, o.value)'><i ng-if='o.active' class='fa fa-check'></i> {{o.name}}</button></li></ul>" +
            "</span>",
            action: function (event, size) {
                //Ask if event is really an event.
                if (!!event.stopPropagation) {
                    //With this, you stop the event of textAngular.
                    event.stopPropagation();
                    //Then click in the body to close the dropdown.
                    $("body").trigger("click");
                }
                return this.$editor().wrapSelection('fontSize', parseInt(size));
            },
            options: [
                { name: 'xx-small', css: 'xx-small', value: 1 },
                { name: 'x-small', css: 'x-small', value: 2 },
                { name: 'small', css: 'small', value: 3 },
                { name: 'medium', css: 'medium', value: 4 },
                { name: 'large', css: 'large', value: 5 },
                { name: 'x-large', css: 'x-large', value: 6 },
                { name: 'xx-large', css: 'xx-large', value: 7 }

            ]
        });


        // add the button to the default toolbar definition
        taOptions.toolbar[1].push('backgroundColor','fontColor','fontName','fontSize');
    taOptions.forceTextAngularSanitize = false;
        return taOptions;
    }]);
});

app.service('translationService', function($resource, $rootScope) {  

    this.getTranslation = function($scope, language) {
        var languageFilePath = 'lang/translation_' + language + '.json';
        console.log(languageFilePath);
        $resource(languageFilePath).get(function (data) {
            $scope.translation = data.toJSON();
            $rootScope.translation = $scope.translation;
            console.log($rootScope.translation);
            
            if($rootScope.is_logged == false)
                $rootScope.login_title = $rootScope.translation.TOP_MENU_LOGIN;
        });
    };
});

app.filter('setDecimal', function ($filter) {
    return function (input, places) {
        if (isNaN(input)) return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
});

app.controller("LanguageCtrl", function ($scope, $rootScope, translationService, $location) {

    //Run translation if selected language changes
    $scope.translateLanguage = function(lang){
        $rootScope.currentLanguage = lang;
        console.log($scope.currentLanguage);
        translationService.getTranslation($scope, lang);
        $location.path( '/' );
    };

    //Init
    $scope.translateLanguage('ko');
});

app.factory('socket', function ($rootScope) {
    var socket;
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {  
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        init: function () {
            socket = io.connect('http://101.102.224.50/');
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        },
        reconnect: function (id) {
            console.log('socket.reconnect()');
            //socket.io.reconnect();
             //   socket = io.connect('http://101.102.224.50/');
            socket = io.connect('http://101.102.224.50/',{'forceNew': true });
            socket.emit('CLIENT_LOGGED_IN', {u_id: id });
             /*   socket.on('connect', function(){
                  socket.emit('authentication', {uid: id, accessToken: accesstoken });
                });*/
            },
        disconnect: function () {
            $rootScope.is_socket = true;
            socket.io.disconnect();
        //    socket.disconnect();
        },
        socket: socket
    };
});

app.controller('loadPageCtrl', function($uibModal, $log, $document, $scope, $rootScope, $location, $http, socket) {

    console.log("loadPageCtrl");


    $scope.billBoard_portNumber = 10006;
    $rootScope.billBoard_Url = 'http://101.102.224.50:' + $scope.billBoard_portNumber;

    $scope.portNumber = 10005;
    $rootScope.serverUrl = 'http://101.102.224.50';// + $scope.portNumber;

    $scope.resource_portNumber = 10008;
    $rootScope.resource_Url = 'http://101.102.224.50:' + $scope.resource_portNumber;

    var json = 'http://ipv4.myexternalip.com/json';
    $http.get(json).then(function(result) {
        console.log(result.data.ip);
        $rootScope.myCurrentIP = result.data.ip;
    }, function(e) {
        console.log("error");
    });

    $scope.gameLists = {}
    $http.post($rootScope.serverUrl + '/sessioncheck').then(function(success) {
        console.log(success);
        if(success.data.result == 'success')
        {
            $rootScope.temp_userInfo = {};
            $rootScope.temp_userInfo.u_id = success.data.u_id;

            $http.post($rootScope.serverUrl + '/requestuserinfo', $scope.temp_userInfo).then(function(success) {
                console.log(success);
                if(success.data.result == "success")
                {
                    $rootScope.userInfo = success.data;
                    $rootScope.login_title = $rootScope.userInfo.user_nickname;
                    $rootScope.is_logged = true;

                    $scope.tempData = {}
                    $scope.tempData.u_id = $rootScope.userInfo.u_id;
                    if($rootScope.is_socket == null)
                    {
                        socket.init();
                        socket.emit('CLIENT_LOGGED_IN', $scope.tempData);
                    }
                    else
                        socket.reconnect($rootScope.userInfo.u_id);
                    $rootScope.$emit("turnAlarm", {});
                }
                else
                {
                    console.log(success.data.reason);
                }
            });
        }

    });

    $scope.logout = function()
    {
        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.u_id;

        $http.post($rootScope.serverUrl + '/userlogout', $scope.temp_myID).then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $rootScope.is_logged = false;
                socket.disconnect();
                $rootScope.login_title = $rootScope.translation.TOP_MENU_LOGIN;
                $rootScope.userInfo = {}
                $scope.loadPages('/');
            }
        });
    }

    $scope.getGameList = function()
    {
        $scope.card_gameLists = []
        $scope.orak_gameLists = []
        $scope.sport_gameLists = []
        $scope.horse_gameLists = []
        $scope.live_gameLists = []

        $scope.my_gameLists = []
        $scope.popular_gameLists = []
        $scope.my_gameLists = []
        $scope.newest_gameLists = []
        $http.post($rootScope.serverUrl + '/sitestart').then(function(success) {
            console.log(success);
            $scope.gameLists = success.data.games;
            for(var i=0; i<$scope.gameLists.length; i++)
            {
                if($scope.gameLists[i].game_category == 1)
                    $scope.card_gameLists.push($scope.gameLists[i]);
                else if($scope.gameLists[i].game_category == 2)
                    $scope.orak_gameLists.push($scope.gameLists[i]);
                else if($scope.gameLists[i].game_category == 3)
                    $scope.sport_gameLists.push($scope.gameLists[i]);
                else if($scope.gameLists[i].game_category == 4)
                    $scope.horse_gameLists.push($scope.gameLists[i]);
                else if($scope.gameLists[i].game_category == 5)
                    $scope.live_gameLists.push($scope.gameLists[i]);

                if($scope.gameLists[i].mygame == 1)
                    $scope.my_gameLists.push($scope.gameLists[i]);
            }
            for(var i=0; i<$scope.gameLists.length; i++)
                for(var j=i+1; j<$scope.gameLists.length; j++)
                {
                    if($scope.gameLists[i].game_popular < $scope.gameLists[j].game_popular)
                    {
                        $scope.tempGame = {}
                        $scope.tempGame = $scope.gameLists[i];
                        $scope.gameLists[i] = $scope.gameLists[j];
                        $scope.gameLists[j] = $scope.tempGame;
                    }
                }
            for(var i=0; i<6; i++)
            {
                if($scope.gameLists[i] != null)
                    $scope.popular_gameLists[i] = $scope.gameLists[i];
            }

            for(var i=0; i<$scope.gameLists.length; i++)
                for(var j=i+1; j<$scope.gameLists.length; j++)
                {
                    if($scope.gameLists[i].game_date < $scope.gameLists[j].game_date)
                    {
                        $scope.tempGame = {}
                        $scope.tempGame = $scope.gameLists[i];
                        $scope.gameLists[i] = $scope.gameLists[j];
                        $scope.gameLists[j] = $scope.tempGame;
                    }
                }
            for(var i=0; i<6; i++)
                if($scope.gameLists[i] != null)
                    $scope.newest_gameLists[i] = $scope.gameLists[i];

        });
    }
    
    $scope.search_Games = function()
    {
        console.log($rootScope.game_search);
        if($rootScope.game_search == '')
            $scope.show_searchResults = false;
        else
            $scope.show_searchResults = true;
        console.log($scope.show_searchResults);

        $location.path( '/' );
        if($scope.show_searchResults == true)
        {
            $scope.searched_gameLists = []
            for(var i=0; i<$scope.gameLists.length; i++)
            {

                if($rootScope.currentLanguage == 'en')
                {
                    if($scope.gameLists[i].gamename.ga_en.indexOf($scope.game_search) !== -1)
                        $scope.searched_gameLists.push($scope.gameLists[i]);
                }
                else if($rootScope.currentLanguage == 'ko')
                {
                    if($scope.gameLists[i].gamename.ga_kr.indexOf($scope.game_search) !== -1)
                        $scope.searched_gameLists.push($scope.gameLists[i]);
                }
            }
        }
    }
    
    $scope.loadPages = function(path)
    {
        if($rootScope.is_logged == true || path == '/' || path == '/help' || path == '/notice' || path =='/billboard')
        {
            if(path == '/')
            {
                $scope.show_searchResults = false;
                $rootScope.game_search = '';
            }
            $location.path( path );
        }
        else
        {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/NoticeDialog.html',
                controller: 'NoticeDialogCtrl',
                windowClass: 'center-modal',
                resolve: {}
            });
            modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
    };
    
    $scope.goPocketPage = function()
    {
        if($rootScope.is_logged == true)
        {
            if($rootScope.userInfo.user_pocketpw == 1)
                $scope.passPocketDialog();
            else
                $scope.setPocketPasswordDialog();
        }
        else
        {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/NoticeDialog.html',
                controller: 'NoticeDialogCtrl',
                resolve: {}
            });
            modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
    };
    
    $scope.passPocketDialog = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/PassPocketDialog.html',
            controller: 'PocketCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    
    $scope.setPocketPasswordDialog = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/setPocketPasswordDialog.html',
            controller: 'PocketCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    
    $scope.goWithdrawlPage = function()
    {
        if($rootScope.is_logged == true)
        {
            if($rootScope.userInfo.user_withdrawlpw == 1)
                $scope.passWithdrawlDialog();
            else
                $scope.setWithdrawlPasswordDialog();
        }
        else
        {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/NoticeDialog.html',
                controller: 'NoticeDialogCtrl',
                resolve: {}
            });
            modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
    };

    $scope.setWithdrawlPasswordDialog = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/SetWithdrawlPasswordDialog.html',
            controller: 'WithdrawlCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    
    $scope.passWithdrawlDialog = function(size, parentSelector)
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/PassWithdrawlDialog.html',
            controller: 'WithdrawlCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.showNoticeDetails = function()
    {
        if($rootScope.showNotices.length != 0)
        {
            $scope.tempData = {}
            $scope.tempData.u_id = $rootScope.userInfo.u_id;

            $http.post($rootScope.serverUrl + '/noticecheck', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                {
                    console.log("Notice checked");
                    $location.path( '/notification' );
                }
            });
        }
    }

    $scope.showNewsDetails = function(one_element)
    {
        console.log(one_element);
        $rootScope.msg = one_element.message;
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/AlertDialog.html',
            controller: 'AlertCtrl',
            size: 'lg',
            resolve: {
            }
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
});


app.controller('loginCtrl', function($uibModal, $log, $document, $scope, $rootScope, $location) {

    console.log("loginCtrl");

    $scope.showLoginModal = function()
    {
        if($rootScope.is_logged == false)
        {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/LoginDialog.html',
                controller: 'LoginDialogCtrl',
                resolve: {}
            });
            modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Notice Modal dismissed at: ' + new Date());
            });
        }
        else
        {
            $location.path('/profile');
        }
    };
});

app.controller('NoticeDialogCtrl', function ($scope, $rootScope, $uibModalInstance, $uibModal, $log, $document) {

    $scope.noticeRegister = function (size, parentSelector) {
        console.log("Notice Register");
        $uibModalInstance.dismiss('cancel');

        var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/RegisterDialog.html',
            controller: 'LoginDialogCtrl',
            size: size,
            resolve: {}
        });
        modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Notice Modal dismissed at: ' + new Date());
        });
    };

    $scope.noticeLogin = function (size, parentSelector) {

        console.log("Notice Login");
        $uibModalInstance.dismiss('cancel');

        var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/LoginDialog.html',
            controller: 'LoginDialogCtrl',
            windowClass: 'center-modal',
            size: size,
            resolve: {}
        });
        modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Notice Modal dismissed at: ' + new Date());
        });
    };

    $scope.exitMsg = function()
    {
        console.log("exitMsg");
    //    $rootScope.modalInstance.close('cancel');
        $uibModalInstance.dismiss('cancel');
    }
});

app.controller('LoginDialogCtrl', function ($scope, $rootScope, $http, $uibModalInstance, $uibModal, $log, $document, socket) {

    $scope.exitMsg = function() {
        console.log("Login exitMsg");
        $uibModalInstance.dismiss('cancel');
    }

   /* if(!$scope.loginForm.$invalid) {
        console.log("valid");
     }*/

    $scope.sendLoginInfo = function () {
        console.log("Send Login Info...");
        console.log($scope.logininfo);
        $http.post($rootScope.serverUrl + '/userlogin', $scope.logininfo).then(function(success) {
            // return genericSuccess(success);
            console.log(success);
            if(success.data.result == "success")
            {
                $rootScope.temp_userInfo = {};
                $rootScope.temp_userInfo.u_id = success.data.u_id;
                $uibModalInstance.dismiss('cancel');

                $http.post($rootScope.serverUrl + '/requestuserinfo', $scope.temp_userInfo).then(function(success) {
                    // return genericSuccess(success);
                    console.log(success);
                    if(success.data.result == "success")
                    {
                        $rootScope.userInfo = success.data;
/*
                        $uibModalInstance.dismiss('cancel');
                        $rootScope.login_title = $rootScope.userInfo.user_nickname;
                        $rootScope.is_logged = true;

                        $scope.tempData = {}
                        $scope.tempData.u_id = $rootScope.userInfo.u_id;
                        socket.emit('CLIENT_LOGGED_IN', $scope.tempData);
                        $scope.turnOnNotify();

                        console.log($rootScope.userInfo);

                        $scope.getLatestNews();
                        $scope.getLatestNotice();
*/

                        if($rootScope.myCurrentIP == $rootScope.userInfo.last_login_ip)
                        {
                            $uibModalInstance.dismiss('cancel');
                            $rootScope.login_title = $rootScope.userInfo.user_nickname;

                            console.log($rootScope.is_logged);

                            $scope.tempData = {}
                            $scope.tempData.u_id = $rootScope.userInfo.u_id;

                            console.log("init socket");
                            console.log($rootScope.is_socket);
                            if($rootScope.is_socket == null)
                            {
                                socket.init();
                                socket.emit('CLIENT_LOGGED_IN', $scope.tempData);
                            }
                            else
                                socket.reconnect($rootScope.userInfo.u_id);
                            $scope.turnOnNotify();

                            $rootScope.is_logged = true;


                            $scope.getLatestNews();
                            $scope.getLatestNotice();

                            console.log($rootScope.userInfo);
                        }
                        else
                        {
                            $rootScope.modalInstance = $uibModal.open({
                                animation: true,
                                templateUrl: 'dialogs/LoginVerify.html',
                                controller: 'LoginVerifyCtrl',
                                resolve: {}
                            });
                            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                                $log.info('Modal dismissed at: ' + new Date());
                            });
                        }

                    }
                    else
                    {
                        console.log(success.data.reason);
                        $scope.logininfo.u_id = "";
                        $scope.logininfo.u_pw = "";
                    }
                });
            }
            else
            {
                console.log(success.data.reason);
                if(success.data.reason == 1)
                    alert($rootScope.translation.LOGIN_ERROR_TEXT1);
                else if(success.data.reason == 2)
                    alert($rootScope.translation.LOGIN_ERROR_TEXT2);
                else if(success.data.reason == 3)
                    alert($rootScope.translation.LOGIN_ERROR_TEXT3);
            }
        });
    };

    $rootScope.$on("turnAlarm", function(){
        $scope.turnOnNotify();
    });

    $scope.turnOnNotify = function()
    {
        socket.on('PUSH_RW_RESULT', function (data) {
            console.log(data);
            var snd = new Audio('audio/alarm.mp3');
            snd.play();
            if(data.rw_flag == 1)
                $scope.rw = "충전";
            else if(data.rw_flag == 2)
                $scope.rw = "환전";
            if(data.type == 1)
                $scope.reply_type = "승인";
            else if(data.type == 2)
                $scope.reply_type = "취소";
            $rootScope.alarm_time = $rootScope.translation.ALARM_DIALOG_TIME + " : " + data.time;
            $rootScope.alarm_money = $rootScope.translation.CHARGE_GAMEMONEY + " : " + data.money;
            $rootScope.msg = data.bank+"을 통해서 " + "ID : " + data.ID + "의 " + $scope.rw + "요청이 " + $scope.reply_type + "되였습니다.";
            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/AlarmDialog.html',
                controller: 'AlertCtrl',
                resolve: {
                }
            });
            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        });

        socket.on('PUSH_OP_RESULT', function (data) {
            console.log(data);
            var snd = new Audio('audio/alarm.mp3');
            snd.play();
            $rootScope.q_time = $rootScope.translation.ALARM_QUESTION_UPLOAD_CONTENT + " " + data.time;
            $rootScope.q_content = data.message;
            $rootScope.qr_time = $rootScope.translation.ALARM_QUESTION_REPLY_CONTENT + " " + data.f_time;
            $rootScope.qr_content = data.f_content;

            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/AlarmQuestion.html',
                controller: 'AlertCtrl',
                resolve: {
                }
            });
            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        });

    }

    $rootScope.$on("GetLeftSideInfo", function(){
        $scope.getLatestNews();
        $scope.getLatestNotice();
    });

    $scope.getLatestNews = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;

        $http.post($rootScope.serverUrl + '/requestnews', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $rootScope.showNews = success.data.messages;
                for(var i=0; i<$rootScope.showNews.length; i++)
                {
                    if($rootScope.showNews[i].message.length > 20)
                    {
                        $scope.tempString = $rootScope.showNews[i].message.substring(0, 20);
                        $rootScope.showNews[i].show_m = $scope.tempString + "...";
                    }
                    else
                        $rootScope.showNews[i].show_m = $rootScope.showNews[i].message;
                }
                console.log($rootScope.showNews);
            }
        });        
    }

    $scope.getLatestNotice = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;

        $http.post($rootScope.serverUrl + '/latestnotice', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $rootScope.showNotices = success.data.messages;
                for(var i=0; i<$rootScope.showNotices.length; i++)
                {
                    if($rootScope.showNotices[i].message.length > 20)
                    {
                        $scope.tempString = $rootScope.showNotices[i].message.substring(0, 20);
                        $rootScope.showNotices[i].show_m = $scope.tempString + "...";
                    }
                    else
                        $rootScope.showNotices[i].show_m = $rootScope.showNotices[i].message;
                }
            }
        });
    }

    $scope.gotoRegister = function (size, parentSelector) {
        console.log("go to Register");
        $uibModalInstance.dismiss('cancel');

        var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/RegisterDialog.html',
            controller: 'LoginDialogCtrl',
            size: size,
            resolve: {}
        });
        modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Notice Modal dismissed at: ' + new Date());
        });
    };


    $scope.gotoLogin = function (size, parentSelector) {
        console.log("go to Login");
        $uibModalInstance.dismiss('cancel');

        var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/LoginDialog.html',
            controller: 'LoginDialogCtrl',
            windowClass: 'center-modal',
            size: size,
            resolve: {}
        });
        modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Notice Modal dismissed at: ' + new Date());
        });
    };

    $scope.btn_name = $rootScope.translation.REGISTER_DIALOG_SEND_CODE;

    $scope.register_sendVerify = function()
    {
        if($scope.btn_name == $rootScope.translation.REGISTER_DIALOG_SEND_CODE)
        {
            console.log("Register Send Verify");
            $scope.reg_sendVerfy = {}
            $scope.reg_sendVerfy.u_id = $scope.register_username;
            $scope.reg_sendVerfy.verify_way = $scope.register_check-1;
            if($scope.reg_sendVerfy.verify_way == 0)
                $scope.reg_sendVerfy.address = $scope.register_email;
            else
                $scope.reg_sendVerfy.address = $scope.register_mobile;
            console.log($scope.reg_sendVerfy);

            $http.post($rootScope.serverUrl + '/sendverifycode', $scope.reg_sendVerfy).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                {
                    $scope.btn_name = $rootScope.translation.REGISTER_DIALOG_SENT;
                    $scope.send_Btn = true;
                    $scope.is_verified = true;
                }
            });
        }
        else
        {

        }
    }

    $scope.register_sendRequest = function()
    {
        $scope.is_code = true;

        $scope.tempData = {}
        $scope.tempData.u_id = $scope.reg_sendVerfy.u_id;
        $scope.tempData.verify_code = $scope.register_code;
        $scope.tempData.v_flag = 1;
        console.log($scope.tempData);

        if($scope.tempData.verify_code != null)
        {
            $http.post($rootScope.serverUrl + '/verifycode', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                {
                    $scope.reg_sendRequest = {}
                    $scope.reg_sendRequest.u_id = $scope.register_username;
                    $scope.reg_sendRequest.u_nickname = $scope.register_nickname;
                    $scope.reg_sendRequest.email = $scope.register_email;
                    $scope.reg_sendRequest.phone = $scope.register_mobile;
                    $scope.reg_sendRequest.photoindex = $rootScope.photo_value;
                    if($rootScope.photo_value == null)
                        $scope.reg_sendRequest.photoindex = 1;

                    $scope.reg_sendRequest.password = $scope.register_password;
                    console.log($scope.reg_sendRequest);

                    $http.post($rootScope.serverUrl + '/userregister', $scope.reg_sendRequest).then(function(success) {
                        // return genericSuccess(success);
                        console.log(success);
                        $scope.path_code = "img/img_check.png";
                        if(success.data.result == "success")
                        {
                            console.log("successfully sent");
                            $uibModalInstance.dismiss('cancel');
                            alert($rootScope.translation.USER_REGISTERED_SUCCESS);
                        }
                        else
                        {
                            console.log(success.data.reason);
                            alert($rootScope.translation.USER_REGISTERED_FAILED);
                        }
                    });
                }
                else
                    $scope.path_code = "img/img_cross.png";
            });
        }
        else
            $scope.path_code = "img/img_cross.png";

    }

    $scope.select_userphoto = function()
    {
        console.log("select_userphoto");
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetUserPhoto.html',
            controller: 'LoginDialogCtrl',
            size: 'lg',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.getAllPhotos = function()
    {
        console.log("getAllPhotos");
        $http.post($rootScope.resource_Url + '/requestphotos').then(function(success) {
            $scope.photoAvatar = {}
            $scope.photoAvatar = success.data.photos;
            console.log($scope.photoAvatar);
        });
    }

    $scope.selectPhoto = function(photo_value)
    {
        $rootScope.photo_value　= photo_value;
        console.log(photo_value);
    }


    $scope.resetUserPhotoFunc = function()
    {
        console.log($scope.photo_value);
        $rootScope.modalInstance.close('cancel');
      /*  if($scope.photo_value　!= null)
        {
            $scope.tempData = {}
            $scope.tempData.u_id = $rootScope.userInfo.u_id;
            $scope.tempData.u_photoindex = $scope.photo_value;
            console.log($scope.tempData);

            $http.post($rootScope.serverUrl + '/updateuserphoto', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                {
                    $rootScope.userInfo.user_photo = success.data.photourl;
                    $rootScope.modalInstance.close('cancel');
                }
            });

        }*/
    }

    $scope.initRegisterForm = function()
    {
        $scope.is_verified = false;
        $scope.is_username = false;
        $scope.is_nickname = false;
        $scope.is_password = false;
        $scope.is_email = false;
        $scope.is_mobile = false;
        $scope.is_code = false;
        $scope.send_Btn = true;
        $scope.register_check = 0;
    }

    $scope.loseFocusUsername = function()
    {
        $scope.is_username = true;
        if($scope.register_username != null)
        {
            $scope.tempData = {}
            $scope.tempData.u_id = $scope.register_username;
            console.log($scope.tempData);

            $http.post($rootScope.serverUrl + '/useridcheck', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                    $scope.path_username = "img/img_check.png";
                else
                    $scope.path_username = "img/img_cross.png";
                $scope.enableSendCode_Btn();
            });
        }
        else
        {
            $scope.path_username = "img/img_cross.png";
            $scope.enableSendCode_Btn();
        }
    }

    $scope.loseFocusNickname = function()
    {
        $scope.is_nickname = true;
        if($scope.register_nickname != null)
        {
            $scope.tempData = {}
            $scope.tempData.u_nickname = $scope.register_nickname;
            console.log($scope.tempData);

            $http.post($rootScope.serverUrl + '/usernicknamecheck', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                    $scope.path_nickname = "img/img_check.png";
                else
                    $scope.path_nickname = "img/img_cross.png";
                $scope.enableSendCode_Btn();
            });
        }
        else
            $scope.path_nickname = "img/img_cross.png";
        $scope.enableSendCode_Btn();
    }

    $scope.loseFocusConfirmPass = function()
    {
        $scope.is_password = true;
        if($scope.register_password == $scope.register_confirm_password && $scope.register_password != null && $scope.register_confirm_password != null)
            $scope.path_password = "img/img_check.png";
        else
            $scope.path_password = "img/img_cross.png";
        if($scope.register_password != null && $scope.register_confirm_password == null)
            $scope.is_password = false;
        $scope.enableSendCode_Btn();
    }

    $scope.loseFocusEmail = function()
    {
        $scope.is_email = true;
        if($scope.register_email != null)
        {
            $scope.tempData = {}
            $scope.tempData.u_email = $scope.register_email;
            console.log($scope.tempData);

            $http.post($rootScope.serverUrl + '/useremailcheck', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                    $scope.path_email = "img/img_check.png";
                else
                    $scope.path_email = "img/img_cross.png";
                $scope.enableSendCode_Btn();
            });
        }
        else
        {
            $scope.path_email = "img/img_cross.png";
            $scope.enableSendCode_Btn();   
        }
    }

    $scope.loseFocusMobile = function()
    {
        $scope.is_mobile = true;
        if($scope.register_mobile != null)
        {
            $scope.tempData = {}
            $scope.tempData.u_phone = $scope.register_mobile;
            console.log($scope.tempData);

            $http.post($rootScope.serverUrl + '/userphonecheck', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                    $scope.path_mobile = "img/img_check.png";
                else
                    $scope.path_mobile = "img/img_cross.png";
                $scope.enableSendCode_Btn();
            });
        }
        else
        {
            $scope.path_mobile = "img/img_cross.png";
            $scope.enableSendCode_Btn();
        }
    }

    $scope.select_Checkway = function()
    {
        console.log($scope.register_check);
        $scope.enableSendCode_Btn();
    }

    $scope.enableSendCode_Btn = function()
    {
        if($scope.register_check != 0 && $scope.is_username == true && $scope.is_nickname == true && $scope.is_password == true && $scope.is_email == true && $scope.is_mobile == true && $scope.path_username == "img/img_check.png" && $scope.path_nickname == "img/img_check.png" && $scope.path_password == "img/img_check.png" && $scope.path_email == "img/img_check.png" && $scope.path_mobile == 'img/img_check.png')
            $scope.send_Btn = false;
        else
            $scope.send_Btn = true;
    }
});

app.controller('LoginVerifyCtrl', function ($scope, $rootScope, $http, $uibModalInstance, socket) {

    console.log("Login Verify Dialog");

    $scope.sendLoginVerificationCode = function () {
        console.log("Send Login Verification Code");

        $scope.verifyinfo = {}
        $scope.verifyinfo.verify_code = $scope.loginVerify.code;
        $scope.verifyinfo.u_id = $rootScope.userInfo.u_id;
        $scope.verifyinfo.v_flag = 0;
        console.log($scope.verifyinfo);

    /*    
        $uibModalInstance.dismiss('cancel');
        $rootScope.is_logged = true;
        $rootScope.login_title = $rootScope.userInfo.user_nickname;

        console.log($rootScope.userInfo);*/

        $http.post($rootScope.serverUrl + '/verifycode', $scope.verifyinfo).then(function(success) {
            // return genericSuccess(success);
            console.log(success);
            if(success.data.result == "success")
            {
            //    $rootScope.userInfo = $rootScope.temp_userInfo;
                $rootScope.is_logged = true;

                $scope.tempData = {}
                $scope.tempData.u_id = $rootScope.userInfo.u_id;
                if($rootScope.is_socket == null)
                {
                    socket.emit('CLIENT_LOGGED_IN', $scope.tempData);
                    $rootScope.$emit("turnAlarm", {});
                }
                else
                    socket.reconnect($rootScope.userInfo.u_id);

                $rootScope.login_title = $rootScope.userInfo.user_nickname;
                console.log("Login Verified Matched!!!");
                console.log($rootScope.userInfo);

                $rootScope.$emit("GetLeftSideInfo", {});

                $rootScope.modalInstance.close('cancel');
            }
            else
                console.log(success.data.reason);
        });
    };

    $scope.cancelLoginVerify = function () {
        $rootScope.modalInstance.close('cancel');
    };
});

app.controller('ChargeCtrl', function ($scope, $rootScope, $http, $uibModal, $log) {

    console.log("Charge Infomation");

 //   $scope.payMethod_value = 1;
 //   $scope.payment_history = {}
 //   $scope.online = true;
    $scope.chargeForm_disable = true;
    $scope.disable_bankName = true;
    $scope.disable_bankPass = true;
    $scope.disable_bankID = true;
    $scope.disable_bankUser = true;

 //   console.log($scope.online);

    $scope.setAutoPay_Method = function() {

        console.log($scope.payment_history_count);
            $scope.bank_Name = "";
            $scope.bank_ID = "";
            $scope.bank_pass = "";
            $scope.bank_UserName = "";

        if($scope.payment_history_count == 0)
            $scope.autopay = false;
        if($scope.autopay == true)
        {
            console.log("Set Auto Pay Method");
            $scope.disable_bankName = true;
            $scope.disable_bankPass = true;
            $scope.disable_bankID = true;
            $scope.disable_bankUser = true;

            $scope.payMethod_1 = false;
            $scope.payMethod_2 = false;
            $scope.payMethod_3 = false;
            $scope.payMethod_4 = false;
            $scope.payMethod_5 = false;

            if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_CHINA)
                $scope.country_number = 0;
            else if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_KOREA)
                $scope.country_number = 1;
            else
                $scope.country_number = 2;

            $scope.bank_Name = "";
            $scope.bank_ID = "";
            $scope.bank_pass = "";
            $scope.bank_UserName = "";
            for(var i=0; i<$scope.payment_history_count; i++)
            {
                if($scope.payment_history[i].sru_country == $scope.country_number)
                {
                    console.log("country matched");
                    console.log($scope.payment_history[i]);
                    console.log($scope.payment_history[i].sru_paygate);
                    if($scope.payment_history[i].sru_paygate == 10)
                        $scope.payMethod_1 = true;
                    else if($scope.payment_history[i].sru_paygate == 1)
                        $scope.payMethod_5 = true;
                    else if($scope.payment_history[i].sru_paygate == 2)
                        $scope.payMethod_3 = true;
                    else if($scope.payment_history[i].sru_paygate == 3)
                        $scope.payMethod_2 = true;
                    else if($scope.payment_history[i].sru_paygate == 4)
                        $scope.payMethod_4 = true;
                    $scope.bank_Name = $scope.payment_history[i].sru_bank_name;
                    $scope.bank_ID = $scope.payment_history[i].sru_bank_id;
                    $scope.bank_pass = $scope.payment_history[i].sru_bank_pw;
                    $scope.bank_UserName = $scope.payment_history[i].sru_bank_username;
                    if($scope.payment_history[i].sru_paygate == 10)
                        $scope.payMethod_value = 10;
                    else if($scope.payment_history[i].sru_paygate == 1)
                        $scope.payMethod_value = 1;
                    else if($scope.payment_history[i].sru_paygate == 2)
                        $scope.payMethod_value = 2;
                    else if($scope.payment_history[i].sru_paygate == 3)
                        $scope.payMethod_value = 3;
                    else if($scope.payment_history[i].sru_paygate == 4)
                        $scope.payMethod_value = 4;
                }
            }
        }
        else
        {
            if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_CHINA)
            {
                $scope.payMethod_1 = true;
                $scope.payMethod_2 = true;
                $scope.payMethod_3 = true;
                $scope.payMethod_4 = true;
                $scope.payMethod_5 = true;
            }
            else if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_KOREA)
            {
                $scope.payMethod_value = 10;
                $scope.payMethod_1 = true;
                $scope.payMethod_2 = false;
                $scope.payMethod_3 = true;
                $scope.payMethod_4 = false;
                $scope.payMethod_5 = true;
            }
            else
            {
                $scope.payMethod_value = 2;
                $scope.payMethod_1 = false;
                $scope.payMethod_2 = false;
                $scope.payMethod_3 = true;
                $scope.payMethod_4 = false;
                $scope.payMethod_5 = true;
            }
            if($scope.payMethod_value == 10)
            {
                console.log("Set Offline Pay Method");
                $scope.disable_bankName = false;
                $scope.disable_bankPass = true;
                $scope.disable_bankID = false;
                $scope.disable_bankUser = false;
            }
            else
            {
                console.log("Set Online Pay Method");
                $scope.disable_bankName = true;
                $scope.disable_bankPass = false;
                $scope.disable_bankID = false;
                $scope.disable_bankUser = true;
            }
        }
        if($scope.payMethod_1 == false && $scope.payMethod_2 == false && $scope.payMethod_3 == false && $scope.payMethod_4 == false && $scope.payMethod_5 == false)
            $scope.is_hidden = false;
        else
            $scope.is_hidden = true;
    };

    $scope.setUnionPay_Method = function() {

        console.log("Set UnionPay");
        console.log($scope.payMethod_value);
        if($scope.autopay == false)
        {
            if($scope.payMethod_value == 10)
            {
                console.log("Set Offline Pay Method");
                $scope.disable_bankName = false;
                $scope.disable_bankPass = true;
                $scope.disable_bankID = false;
                $scope.disable_bankUser = false;
            }
            else
            {
                console.log("Set Online Pay Method");
                $scope.disable_bankName = true;
                $scope.disable_bankPass = false;
                $scope.disable_bankID = false;
                $scope.disable_bankUser = true;
            }            
        }
        else
        {
            if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_CHINA)
                $scope.country_number = 0;
            else if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_KOREA)
                $scope.country_number = 1;
            else
                $scope.country_number = 2;
            for(var i=$scope.payment_history.length-1; i>=0; i--)
            {
                if($scope.payment_history[i].sru_paygate == $scope.payMethod_value && $scope.payment_history[i].sru_country == $scope.country_number)
                {
                    console.log("pay matched");
                    $scope.bank_Name = $scope.payment_history[i].sru_bank_name;
                    $scope.bank_ID = $scope.payment_history[i].sru_bank_id;
                    $scope.bank_pass = $scope.payment_history[i].sru_bank_pw;
                    $scope.bank_UserName = $scope.payment_history[i].sru_bank_username;
                }
            }
        }
        $scope.showInputForm();
    };

    $scope.onCountryChange = function(country_selected) {
        if(country_selected == $rootScope.translation.CHARGE_COUNTRY_CHINA)
            $scope.country_number = 0;
        else if(country_selected == $rootScope.translation.CHARGE_COUNTRY_KOREA)
            $scope.country_number = 1;
        else
            $scope.country_number = 2;
        $scope.payMethod_1 = false;
        $scope.payMethod_2 = false;
        $scope.payMethod_3 = false;
        $scope.payMethod_4 = false;
        $scope.payMethod_5 = false;
            $scope.bank_Name = "";
            $scope.bank_ID = "";
            $scope.bank_pass = "";
            $scope.bank_UserName = "";
        if($scope.autopay == false)
        {
            if(country_selected == $rootScope.translation.CHARGE_COUNTRY_CHINA)
            {
                $scope.payMethod_value = 10;
                $scope.payMethod_1 = true;
                $scope.payMethod_2 = true;
                $scope.payMethod_3 = true;
                $scope.payMethod_4 = true;
                $scope.payMethod_5 = true;
            }
            else if(country_selected == $rootScope.translation.CHARGE_COUNTRY_KOREA)
            {
                $scope.payMethod_value = 10;
                $scope.payMethod_1 = true;
                $scope.payMethod_2 = false;
                $scope.payMethod_3 = true;
                $scope.payMethod_4 = false;
                $scope.payMethod_5 = true;
            }
            else if(country_selected == $rootScope.translation.CHARGE_COUNTRY_OTHERS)
            {
                $scope.payMethod_value = 2;
                $scope.payMethod_1 = false;
                $scope.payMethod_2 = false;
                $scope.payMethod_3 = true;
                $scope.payMethod_4 = false;
                $scope.payMethod_5 = true;
            }
        }
        else
        {
            for(var i=0; i<$scope.payment_history.length; i++)
            {
                if($scope.payment_history[i].sru_country == $scope.country_number)
                {
                    console.log("country matched");
                    $scope.bank_Name = "";
                    $scope.bank_ID = "";
                    $scope.bank_pass = "";
                    $scope.bank_UserName = "";
                    $scope.bank_Name = $scope.payment_history[i].sru_bank_name;
                    $scope.bank_ID = $scope.payment_history[i].sru_bank_id;
                    $scope.bank_pass = $scope.payment_history[i].sru_bank_pw;
                    $scope.bank_UserName = $scope.payment_history[i].sru_bank_username;

                    if($scope.payment_history[i].sru_paygate == 10)
                        $scope.payMethod_1 = true;
                    else if($scope.payment_history[i].sru_paygate == 1)
                        $scope.payMethod_5 = true;
                    else if($scope.payment_history[i].sru_paygate == 2)
                        $scope.payMethod_3 = true;
                    else if($scope.payment_history[i].sru_paygate == 3)
                        $scope.payMethod_2 = true;
                    else if($scope.payment_history[i].sru_paygate == 4)
                        $scope.payMethod_4 = true;
                    $scope.payMethod_value_temp = $scope.payment_history[i].sru_paygate;
                }
            }
        }
        if($scope.payMethod_value_temp == 10)
            $scope.payMethod_value = 10;
        else if($scope.payMethod_value_temp == 1)
            $scope.payMethod_value = 1;
        else if($scope.payMethod_value_temp == 2)
            $scope.payMethod_value = 2;
        else if($scope.payMethod_value_temp == 3)
            $scope.payMethod_value = 3;
        else if($scope.payMethod_value_temp == 4)
            $scope.payMethod_value = 4;



        if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_CHINA)
        {
            $scope.currentBalance = $scope.balances[0].balance;
            $scope.currency = "¥";
        }
        else if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_KOREA)
        {
            $scope.currentBalance = $scope.balances[1].balance;
            $scope.currency = "원";
        }
        else
        {
            $scope.currentBalance = $scope.balances[2].balance;
            $scope.currency = "$";
        }

        $scope.showInputForm();


        if($scope.payMethod_1 == false && $scope.payMethod_2 == false && $scope.payMethod_3 == false && $scope.payMethod_4 == false && $scope.payMethod_5 == false)
            $scope.is_hidden = false;
        else
            $scope.is_hidden = true;

    };

    $scope.resetPayRequest = function()
    {
        if($scope.autopay == false)
        {
            $scope.bank_Name = "";
            $scope.bank_pass = "";
            $scope.bank_ID = "";
            $scope.bank_UserName = "";
        }
    }

    $scope.onMoneyChange = function()
    {

        if($scope.money_select == '100k')
            $scope.real_money = 100000 / 100000;
        else if($scope.money_select == '200k')
            $scope.real_money = 200000 / 100000;
        else if($scope.money_select == '500k')
            $scope.real_money = 500000 / 100000;
        else if($scope.money_select == '1M')
            $scope.real_money = 1000000 / 100000;
        else if($scope.money_select == '2M')
            $scope.real_money = 2000000 / 100000;
        else if($scope.money_select == '5M')
            $scope.real_money = 5000000 / 100000;
        else if($scope.money_select == '10M')
            $scope.real_money = 10000000 / 100000;
        else if($scope.money_select == '20M')
            $scope.real_money = 20000000 / 100000;
        else if($scope.money_select == '50M')
            $scope.real_money = 50000000 / 100000;
        else if($scope.money_select == '100M')
            $scope.real_money = 100000000 / 100000;
        else if($scope.money_select == '200M')
            $scope.real_money = 200000000 / 100000;
        else if($scope.money_select == '500M')
            $scope.real_money = 500000000 / 100000;
        $scope.real_money = $scope.real_money * 10;


        if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_CHINA)
        {
            $scope.currentBalance = $scope.balances[0].balance;
            $scope.currency = "¥";
        }
        else if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_KOREA)
        {
            $scope.currentBalance = $scope.balances[1].balance;
            $scope.currency = "원";
        }
        else
        {
            $scope.currentBalance = $scope.balances[2].balance;
            $scope.currency = "$";
        }

        $scope.currentMoney = $scope.currentBalance * $scope.real_money;
        console.log($scope.currentMoney);

    }

    $scope.sendPayRequest = function() {

        console.log("Send Pay Request");
        /////////////////////////////////////////////////////////////////
        console.log($scope.country_select);
        $scope.disable_Charge = true;

        $scope.requestPay_Array = {}
        $scope.requestPay_Array.u_id = $rootScope.userInfo.u_id;

        if($scope.money_select == '100k')
            $scope.requestPay_Array.u_game_money = 100000;
        else if($scope.money_select == '200k')
            $scope.requestPay_Array.u_game_money = 200000;
        else if($scope.money_select == '500k')
            $scope.requestPay_Array.u_game_money = 500000;
        else if($scope.money_select == '1M')
            $scope.requestPay_Array.u_game_money = 1000000;
        else if($scope.money_select == '2M')
            $scope.requestPay_Array.u_game_money = 2000000;
        else if($scope.money_select == '5M')
            $scope.requestPay_Array.u_game_money = 5000000;
        else if($scope.money_select == '10M')
            $scope.requestPay_Array.u_game_money = 10000000;
        else if($scope.money_select == '20M')
            $scope.requestPay_Array.u_game_money = 20000000;
        else if($scope.money_select == '50M')
            $scope.requestPay_Array.u_game_money = 50000000;
        else if($scope.money_select == '100M')
            $scope.requestPay_Array.u_game_money = 100000000;
        else if($scope.money_select == '200M')
            $scope.requestPay_Array.u_game_money = 200000000;
        else if($scope.money_select == '500M')
            $scope.requestPay_Array.u_game_money = 500000000;

        if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_CHINA)
        {
            $scope.requestPay_Array.sru_country = 0;
            console.log($scope.balances[0].balance);
            $scope.requestPay_Array.u_money = $scope.requestPay_Array.u_game_money / 10000 * $scope.balances[0].balance;
        }
        else if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_KOREA)
        {
            $scope.requestPay_Array.sru_country = 1;
            console.log($scope.balances[1].balance);
            $scope.requestPay_Array.u_money = $scope.requestPay_Array.u_game_money / 10000 * $scope.balances[1].balance;
        }
        else
        {
            $scope.requestPay_Array.sru_country = 2;
            console.log($scope.balances[2].balance);
            $scope.requestPay_Array.u_money = $scope.requestPay_Array.u_game_money / 10000 * $scope.balances[2].balance;
        }

        /////////////////////////////////////////////////////////////////

        if($scope.autopay == true)
        {     
            $scope.requestPay_Array.sru_paygate = $scope.payMethod_value;

            console.log($scope.requestPay_Array);

            $http.post($rootScope.serverUrl + '/autocharge', $scope.requestPay_Array).then(function(success) {
                // return genericSuccess(success);
                console.log(success);

                console.log("Autopay request sent successfully");
                $scope.disable_Charge = false;
                $rootScope.msg = $rootScope.translation.CHARGE_SUCCESS;
                $rootScope.modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'dialogs/AlertDialog.html',
                    controller: 'ChargeCtrl',
                    resolve: {
                    }
                });
                $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                    $scope.autopay = true;
                    $scope.disable_Charge = false;
                    $scope.money_select = '100k';
                    $scope.getBalanceInfo();
                });
            });
        }
        else
        {
            if($scope.payMethod_value == 10)
            {
                console.log("Offline Pay");
                $scope.requestPay_Array.sru_bank_id = $scope.bank_ID;
                $scope.requestPay_Array.sru_bank_name = $scope.bank_Name;
                $scope.requestPay_Array.sru_bank_username = $scope.bank_UserName;
                console.log($scope.requestPay_Array);
                if($scope.requestPay_Array.sru_bank_id == "" || $scope.requestPay_Array.sru_bank_name == "" || $scope.requestPay_Array.sru_bank_username == "")
                {
                    console.log("Please fill the form");
                    $rootScope.msg = $rootScope.translation.CHARGE_FILL_FORM;
                    $scope.disable_Charge = false;
                    $rootScope.modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'dialogs/AlertDialog.html',
                        controller: 'ChargeCtrl',
                        resolve: {
                        }
                    });
                    $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                        $scope.autopay = true;
                        $scope.chargeForm_disable = true;
                        $scope.disable_bankName = true;
                        $scope.disable_bankPass = true;
                        $scope.disable_bankID = true;
                        $scope.disable_bankUser = true;
                        $scope.disable_Charge = false;
                        $scope.getBalanceInfo();
                    });
                }
                else
                {
                    $http.post($rootScope.serverUrl + '/offlinecharge', $scope.requestPay_Array).then(function(success) {
                        console.log(success);
                        if(success.data.result == "success")
                        {
                            $rootScope.msg = $rootScope.translation.CHARGE_SUCCESS;
                            $scope.disable_Charge = false;
                            $rootScope.modalInstance = $uibModal.open({
                                animation: true,
                                templateUrl: 'dialogs/AlertDialog.html',
                                controller: 'ChargeCtrl',
                                resolve: {
                                }
                            });
                            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                                $log.info('Modal dismissed at: ' + new Date());
                                $scope.autopay = true;
                                $scope.chargeForm_disable = true;
                                $scope.disable_bankName = true;
                                $scope.disable_bankPass = true;
                                $scope.disable_bankID = true;
                                $scope.disable_bankUser = true;
                                $scope.disable_Charge = false;
                                $scope.money_select = '100k';
                                $scope.getBalanceInfo();
                            });

                        }
                    });
                }

            }
            else
            {
                console.log("Online Pay");    
                $scope.requestPay_Array.sru_paygate = $scope.payMethod_value;
                $scope.requestPay_Array.sru_bank_id = $scope.bank_ID;
                $scope.requestPay_Array.sru_bank_pw = $scope.bank_pass;
                console.log($scope.requestPay_Array);
                if($scope.requestPay_Array.sru_bank_id == "" || $scope.requestPay_Array.sru_bank_pw == "")
                {
                    console.log("Please fill the form");
                    $rootScope.msg = $rootScope.translation.CHARGE_FILL_FORM;
                    $scope.disable_Charge = false;
                    $rootScope.modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'dialogs/AlertDialog.html',
                        controller: 'ChargeCtrl',
                        resolve: {
                        }
                    });
                    $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                        $scope.autopay = true;
                        $scope.chargeForm_disable = true;
                        $scope.disable_bankName = true;
                        $scope.disable_bankPass = true;
                        $scope.disable_bankID = true;
                        $scope.disable_bankUser = true;
                        $scope.disable_Charge = false;
                        $scope.getBalanceInfo();
                    });
                }
                else
                {
                    $http.post($rootScope.serverUrl + '/onlinecharge', $scope.requestPay_Array).then(function(success) {
                        console.log(success);
                        if(success.data.result == "success")
                        {
                            $rootScope.msg = $rootScope.translation.CHARGE_SUCCESS;
                            $scope.disable_Charge = false;
                            $rootScope.modalInstance = $uibModal.open({
                                animation: true,
                                templateUrl: 'dialogs/AlertDialog.html',
                                controller: 'ChargeCtrl',
                                resolve: {
                                }
                            });
                            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                                $log.info('Modal dismissed at: ' + new Date());
                                $scope.autopay = true;
                                $scope.chargeForm_disable = true;
                                $scope.disable_bankName = true;
                                $scope.disable_bankPass = true;
                                $scope.disable_bankID = true;
                                $scope.disable_bankUser = true;
                                $scope.disable_Charge = false;
                                $scope.money_select = '100k';
                                $scope.getBalanceInfo();
                            });
                        }
                    });            
                }
            }
        }
    };

    $rootScope.$on("ReGet_UserInfo", function(){
        $scope.Reget_userinfo();
    });

    $scope.Reget_userinfo = function()
    {
        $scope.temp_userInfo = {}
        $scope.temp_userInfo.u_id = $rootScope.userInfo.u_id;
        $http.post($rootScope.serverUrl + '/requestuserinfo', $scope.temp_userInfo).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $rootScope.userInfo = success.data;
                $rootScope.is_logged = true;
                console.log("Reget_userinfo");
                console.log($rootScope.userInfo);
            }
            else
                console.log(success.data.reason);
        });
    }


    $scope.show_bankname = false;
    $scope.show_pass = false;
    $scope.show_bankid = false;
    $scope.show_username = false;
    $scope.getBalanceInfo = function() {
        $scope.is_hidden = true;


        $scope.Reget_userinfo();

        $scope.myUserID = {}
        $scope.myUserID.u_id = $rootScope.userInfo.u_id;
        console.log("Get Balance Info");

        $scope.payMethod_1 = false;
        $scope.payMethod_2 = false;
        $scope.payMethod_3 = false;
        $scope.payMethod_4 = false;
        $scope.payMethod_5 = false;
        $http.post($rootScope.serverUrl + '/requestbalanceinfo', $scope.myUserID).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                console.log("Enable Form");
                $scope.balances = success.data.balances;
                $scope.chargeForm_disable = false;
                $scope.payment_history_count = success.data.infocount;

                if(success.data.infocount != 0)
                {
                    $scope.pay_way = true;
                    $scope.payment_history = {}
                    $scope.infos = success.data.infos;
                    $scope.payment_history = success.data.infos;
                    console.log("Payment history");
                    console.log($scope.payment_history);


                    for(var i=0; i<$scope.infos.length; i++)
                    {
                        if($scope.infos[i].sru_country == 0)
                        {
                            if($scope.infos[i].sru_paygate == 10)
                                $scope.payMethod_1 = true;
                            else if($scope.infos[i].sru_paygate == 1)
                                $scope.payMethod_5 = true;
                            else if($scope.infos[i].sru_paygate == 2)
                                $scope.payMethod_3 = true;
                            else if($scope.infos[i].sru_paygate == 3)
                                $scope.payMethod_2 = true;
                            else if($scope.infos[i].sru_paygate == 4)
                                $scope.payMethod_4 = true;

                            $scope.bank_Name = $scope.infos[i].sru_bank_name;
                            $scope.bank_ID = $scope.infos[i].sru_bank_id;
                            $scope.bank_pass = $scope.infos[i].sru_bank_pw;
                            $scope.bank_UserName = $scope.infos[i].sru_bank_username;
                            if($scope.infos[i].sru_country == 0)
                                $scope.country_select = $rootScope.translation.CHARGE_COUNTRY_CHINA;
                            else if($scope.infos[i].sru_country == 1)
                                $scope.country_select = $rootScope.translation.CHARGE_COUNTRY_KOREA;
                            else
                                $scope.country_select = $rootScope.translation.CHARGE_COUNTRY_OTHERS;

                            if($scope.infos[i].sru_paygate == 10)
                                $scope.payMethod_value = 10;
                            else if($scope.infos[i].sru_paygate == 1)
                                $scope.payMethod_value = 1;
                            else if($scope.infos[i].sru_paygate == 2)
                                $scope.payMethod_value = 2;
                            else if($scope.infos[i].sru_paygate == 3)
                                $scope.payMethod_value = 3;
                            else if($scope.infos[i].sru_paygate == 4)
                                $scope.payMethod_value = 4;

                        }
                    }

                    console.log($scope.payMethod_value);
                }
                else
                {
                    $scope.payMethod_value = 10;
                    $scope.autopay = false;
                    $scope.setAutoPay_Method();
                }


                if($scope.money_select == '100k')
                    $scope.real_money = 100000 / 100000;
                else if($scope.money_select == '200k')
                    $scope.real_money = 200000 / 100000;
                else if($scope.money_select == '500k')
                    $scope.real_money = 500000 / 100000;
                else if($scope.money_select == '1M')
                    $scope.real_money = 1000000 / 100000;
                else if($scope.money_select == '2M')
                    $scope.real_money = 2000000 / 100000;
                else if($scope.money_select == '5M')
                    $scope.real_money = 5000000 / 100000;
                else if($scope.money_select == '10M')
                    $scope.real_money = 10000000 / 100000;
                else if($scope.money_select == '20M')
                    $scope.real_money = 20000000 / 100000;
                else if($scope.money_select == '50M')
                    $scope.real_money = 50000000 / 100000;
                else if($scope.money_select == '100M')
                    $scope.real_money = 100000000 / 100000;
                else if($scope.money_select == '200M')
                    $scope.real_money = 200000000 / 100000;
                else if($scope.money_select == '500M')
                    $scope.real_money = 500000000 / 100000;
                $scope.real_money = $scope.real_money * 10;


                if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_CHINA)
                {
                    $scope.currentBalance = $scope.balances[0].balance;
                    $scope.currency = "¥";
                }
                else if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_KOREA)
                {
                    $scope.currentBalance = $scope.balances[1].balance;
                    $scope.currency = "원";
                }
                else
                {
                    $scope.currentBalance = $scope.balances[2].balance;
                    $scope.currency = "$";
                }

                $scope.currentMoney = $scope.currentBalance * $scope.real_money;
                console.log($scope.currentMoney);

                $scope.showInputForm();


            }
        });
    };

    $scope.showInputForm = function()
    {
        if($scope.payMethod_value == 10)
        {
            $scope.show_bankname = true;
            $scope.show_pass = false;
            $scope.show_bankid = true;
            $scope.show_username = true;

            $scope.title_bankname = "은행이름";
            $scope.title_bankid = "카드번호";
            $scope.title_bankpass = "암호";
            $scope.title_username = "소유자이름";
        }
        else
        {
            $scope.show_bankname = false;
            $scope.show_pass = true;
            $scope.show_bankid = true;
            $scope.show_username = false;

            $scope.title_bankname = "은행이름";
            $scope.title_bankid = "ID";
            $scope.title_bankpass = "암호";
            $scope.title_username = "소유자이름";
        }
    }

    $scope.getChargeRecord = function()
    {
        $scope.num_record = 10;
        $scope.maxSize = 3;
        $scope.bigTotalItems = 10;
        $scope.bigCurrentPage = 1;

        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;

        $http.post($rootScope.serverUrl + '/rechargeinfo', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $rootScope.chargeRecords = success.data.record;
                $scope.bigTotalItems = 10*($rootScope.chargeRecords.length / $scope.num_record);
                for(var i=0; i<$rootScope.chargeRecords.length; i++)
                {
                    $rootScope.chargeRecords[i].showNumber = i+1;
                    $rootScope.chargeRecords[i].money = $scope.moneyFromIntToStr($rootScope.chargeRecords[i].money);

                    if($rootScope.chargeRecords[i].country == 0)
                    {
                        $rootScope.chargeRecords[i].country = 'China';
                        $rootScope.chargeRecords[i].currency = '¥';
                    }
                    else if($rootScope.chargeRecords[i].country == 1)
                    {
                        $rootScope.chargeRecords[i].country = 'Korea';
                        $rootScope.chargeRecords[i].currency = '원';
                    }
                    else if($rootScope.chargeRecords[i].country == 2)
                    {
                        $rootScope.chargeRecords[i].country = 'Others';
                        $rootScope.chargeRecords[i].currency = '$';
                    }

                    var date1 = new Date();
                    var tempDate = Date.parse($rootScope.chargeRecords[i].time, "yyyy-MM-dd HH:mm:ss");
                    var date2 = new Date(tempDate);
                    var diff = (date1.getTime() - date2.getTime()) / 60000;
                //    console.log(diff);

                    if(diff > 5 || $rootScope.chargeRecords[i].type != 3)
                        $rootScope.chargeRecords[i].is_cancel = true;
                    else
                        $rootScope.chargeRecords[i].is_cancel = false;

                    if($rootScope.chargeRecords[i].type == 1)
                        $rootScope.chargeRecords[i].status = $rootScope.translation.REQUEST_STATUS_ACCEPT;
                    else if($rootScope.chargeRecords[i].type == 2)
                        $rootScope.chargeRecords[i].status = $rootScope.translation.REQUEST_STATUS_DECLINE;
                    else if($scope.chargeRecords[i].type == 3)
                        $rootScope.chargeRecords[i].status = $rootScope.translation.REQUEST_STATUS_WORKING;
                }
                $scope.onChangeRecord_Number();
            }
            else
                console.log(success.data.reason);
        });
    }

    $scope.onChangeRecord_Number = function()
    {
        console.log("sub charge records");
        $rootScope.sub_chargeRecords = []
        $scope.bigTotalItems = 10*($rootScope.chargeRecords.length / $scope.num_record);
        for(var j = ($scope.bigCurrentPage - 1) * $scope.num_record; j < $scope.bigCurrentPage * $scope.num_record; j ++)
        {
            if(j < $rootScope.chargeRecords.length)
                $rootScope.sub_chargeRecords.push($rootScope.chargeRecords[j]);
        }
    }

    $scope.moneyFromIntToStr = function(moneyInt)
    {
        if(moneyInt == '100000')
            return '100k';
        else if(moneyInt == '200000')
            return '200k';
        else if(moneyInt == '500000')
            return '500k';
        else if(moneyInt == '1000000')
            return '1M';
        else if(moneyInt == '2000000')
            return '2M';
        else if(moneyInt == '5000000')
            return '5M';
        else if(moneyInt == '10000000')
            return '10M';
        else if(moneyInt == '20000000')
            return '20M';
        else if(moneyInt == '50000000')
            return '50M';
        else if(moneyInt == '100000000')
            return '100M';
        else if(moneyInt == '200000000')
            return '200M';
        else if(moneyInt == '500000000')
            return '500M';
    }

    $scope.cancelCharge = function(record)
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;
        $scope.tempData.record_id = record.id;
        console.log($scope.tempData);

        $http.post($rootScope.serverUrl + '/cancelrequest', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {                           
                $rootScope.msg = $rootScope.translation.CHARGE_CANCEL;
                $scope.disable_Charge = false;
                $rootScope.modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'dialogs/AlertDialog.html',
                    controller: 'ChargeCtrl',
                    resolve: {
                    }
                });
                $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                    $scope.getChargeRecord();
                });
            }
            else
                alert($rootScope.translation.CHARGE_CANCEL_ERROR);
        });
    }

    $scope.exitMsg = function()
    {
        console.log("exit charge notice");

        $scope.autopay = true;
        $scope.chargeForm_disable = true;
        $scope.disable_bankName = true;
        $scope.disable_bankPass = true;
        $scope.disable_bankID = true;
        $scope.disable_bankUser = true;
        $scope.disable_Charge = false;
        $scope.money_select = '100k';
        $scope.getBalanceInfo();
        $scope.getChargeRecord();
        $rootScope.modalInstance.close('cancel');
    }
});



app.controller('WithdrawlCtrl', function ($scope, $rootScope, $http, $location, $uibModal, $log, $document) {

    console.log("WithdrawlCtrl");
    $scope.withdrawMethod_value = 10;

    $scope.onMoneyChange = function()
    {
        if($scope.money_select == '100k')
            $scope.real_money = 100000 / 100000;
        else if($scope.money_select == '200k')
            $scope.real_money = 200000 / 100000;
        else if($scope.money_select == '500k')
            $scope.real_money = 500000 / 100000;
        else if($scope.money_select == '1M')
            $scope.real_money = 1000000 / 100000;
        else if($scope.money_select == '2M')
            $scope.real_money = 2000000 / 100000;
        else if($scope.money_select == '5M')
            $scope.real_money = 5000000 / 100000;
        else if($scope.money_select == '10M')
            $scope.real_money = 10000000 / 100000;
        else if($scope.money_select == '20M')
            $scope.real_money = 20000000 / 100000;
        else if($scope.money_select == '50M')
            $scope.real_money = 50000000 / 100000;
        else if($scope.money_select == '100M')
            $scope.real_money = 100000000 / 100000;
        else if($scope.money_select == '200M')
            $scope.real_money = 200000000 / 100000;
        else if($scope.money_select == '500M')
            $scope.real_money = 500000000 / 100000;
        $scope.real_money = $scope.real_money * 10;


        if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_CHINA)
        {
            $scope.currentBalance = $scope.balances[0].balance;
            $scope.currency = "¥";
        }
        else if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_KOREA)
        {
            $scope.currentBalance = $scope.balances[1].balance;
            $scope.currency = "원";
        }
        else
        {
            $scope.currentBalance = $scope.balances[2].balance;
            $scope.currency = "$";
        }

        $scope.currentMoney = $scope.currentBalance * $scope.real_money;
        console.log($scope.currentMoney);
    }

    $scope.setWithdrawlPass = function()
    {
        console.log($scope.pass);
        if($scope.pass.first == $scope.pass.second)
        {
            $scope.tempPassword = {}
            $scope.tempPassword.u_id = $rootScope.userInfo.u_id;
            $scope.tempPassword.u_withdrawlpw = $scope.pass.first;

            $http.post($rootScope.serverUrl + '/setwithdrawlpass', $scope.tempPassword).then(function(success) {
                console.log(success);
                if(success.data.result == "success")
                {
                    $rootScope.userInfo.user_withdrawlpw = 1;
                    $rootScope.modalInstance.close('cancel');
                }
                else
                    console.log(success.data.reason);
            });
        }
    }

    $scope.loginWithdrawPass = function()
    {
        $scope.tempPassword = {}
        $scope.tempPassword.u_id = $rootScope.userInfo.u_id;
        $scope.tempPassword.u_withdrawlpw = $scope.withdrawl_pass;
        console.log($scope.tempPassword);

        $http.post($rootScope.serverUrl + '/withdrawlpasscode', $scope.tempPassword).then(function(success) {
            // return genericSuccess(success);
            if(success.data.result == "success")
            {
                $rootScope.loginWithdrawResult = success.data;
                console.log($rootScope.loginWithdrawResult);
                $rootScope.modalInstance.close('cancel');
                console.log("load withdrawl page");

                $scope.disable_Withdraw = false;
                $scope.Fill_Form_Info();
                $location.path( '/withdrawl' );
            }
            else
            {
                console.log(success.data.reason);
                alert("암호를 다시 입력하십시오.");
            }
        });

    }
    $scope.resetWithdrawlPassword = function()
    {
        console.log("reset withdraw password");
        $rootScope.modalInstance.close('cancel');
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetWithdrawlPasswordDialog.html',
            controller: 'WithdrawlCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    $scope.resetWithdrawlPass = function()
    {
        if($scope.resetpass.first == $scope.resetpass.second && $scope.resetpass.first != $scope.resetpass.old)
        {
            $scope.tempPassword = {}
            $scope.tempPassword.u_id = $rootScope.userInfo.u_id;
            $scope.tempPassword.u_withdrawlpwafter = $scope.resetpass.first;
            $scope.tempPassword.u_withdrawlpwbefore = $scope.resetpass.old;

            $http.post($rootScope.serverUrl + '/updatewithdrawlpass', $scope.tempPassword).then(function(success) {
                // return genericSuccess(success);
                console.log(success);
                if(success.data.result == "success")
                {
                //    $uibModalInstance.dismiss('cancel');
                    $rootScope.modalInstance.close('cancel');

                }
                else
                    console.log(success.data.reason);
            });
        }
    }

    $scope.show_bankname = false;
    $scope.show_bankid = false;
    $scope.show_username = false;
    $scope.Fill_Form_Info = function()
    {
        console.log("init Withdrawl Form");
        $scope.disable_Withdraw = false;
        console.log($rootScope.loginWithdrawResult);

        if($rootScope.loginWithdrawResult.is_withdrawl == 0)
        {
            $scope.withdrawMethod_1 = true;
            $scope.withdrawMethod_2 = true;
            $scope.withdrawMethod_3 = true;
            $scope.withdrawMethod_4 = true;
            $scope.withdrawMethod_5 = true;
            $scope.offline_withdraw = false;
            $scope.is_saved = false;
            $scope.country_sel = $rootScope.translation.CHARGE_COUNTRY_CHINA;
        }
        else
        {
            $scope.is_saved = true;
            $scope.offline_withdraw = true;
            $scope.withdrawMethod_value = $rootScope.loginWithdrawResult.u_withdrawlmethod;
            if($scope.withdrawMethod_value == 10)
                $scope.withdrawMethod_1 = true;
            else if($scope.withdrawMethod_value == 3)
                $scope.withdrawMethod_2 = true;
            else if($scope.withdrawMethod_value == 2)
                $scope.withdrawMethod_3 = true;
            else if($scope.withdrawMethod_value == 4)
                $scope.withdrawMethod_4 = true;
            else if($scope.withdrawMethod_value == 1)
                $scope.withdrawMethod_5 = true;
            $scope.withdrawMethod_value = $rootScope.loginWithdrawResult.u_withdrawlmethod;

            if($rootScope.loginWithdrawResult.u_withdrawlcountry == 0)
                $scope.country_sel = $rootScope.translation.CHARGE_COUNTRY_CHINA;
            else if($rootScope.loginWithdrawResult.u_withdrawlcountry == 1)
                $scope.country_sel = $rootScope.translation.CHARGE_COUNTRY_KOREA;
            else
                $scope.country_sel = $rootScope.translation.CHARGE_COUNTRY_OTHERS;
            console.log($scope.country_sel);
            $scope.bank_Name = $rootScope.loginWithdrawResult.u_withdrawlbank;
            $scope.bank_UserName = $rootScope.loginWithdrawResult.u_withdrawlbankname;
            $scope.bank_ID = $rootScope.loginWithdrawResult.u_withdrawlid;
        }

        $rootScope.$emit("ReGet_UserInfo", {});

        $scope.requestBalance = {}
        $scope.requestBalance.u_id = $rootScope.userInfo.u_id;
        $http.post($rootScope.serverUrl + '/onlybalance', $scope.requestBalance).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.balances = success.data.balances;

                if($scope.money_select == '100k')
                    $scope.real_money = 100000 / 100000;
                else if($scope.money_select == '200k')
                    $scope.real_money = 200000 / 100000;
                else if($scope.money_select == '500k')
                    $scope.real_money = 500000 / 100000;
                else if($scope.money_select == '1M')
                    $scope.real_money = 1000000 / 100000;
                else if($scope.money_select == '2M')
                    $scope.real_money = 2000000 / 100000;
                else if($scope.money_select == '5M')
                    $scope.real_money = 5000000 / 100000;
                else if($scope.money_select == '10M')
                    $scope.real_money = 10000000 / 100000;
                else if($scope.money_select == '20M')
                    $scope.real_money = 20000000 / 100000;
                else if($scope.money_select == '50M')
                    $scope.real_money = 50000000 / 100000;
                else if($scope.money_select == '100M')
                    $scope.real_money = 100000000 / 100000;
                else if($scope.money_select == '200M')
                    $scope.real_money = 200000000 / 100000;
                else if($scope.money_select == '500M')
                    $scope.real_money = 500000000 / 100000;
                $scope.real_money = $scope.real_money * 10;

                if($scope.country_sel == $rootScope.translation.CHARGE_COUNTRY_CHINA)
                {
                    $scope.currentBalance = $scope.balances[0].balance;
                    $scope.currency = "¥";
                }
                else if($scope.country_sel == $rootScope.translation.CHARGE_COUNTRY_KOREA)
                {
                    $scope.currentBalance = $scope.balances[1].balance;
                    $scope.currency = "원";
                }
                else
                {
                    $scope.currentBalance = $scope.balances[2].balance;
                    $scope.currency = "$";
                }

                $scope.currentMoney = $scope.currentBalance * $scope.real_money;
                console.log($scope.currentMoney);
            }
            else
                console.log(success.data.reason);
        });
        $scope.showInputForm();
    }

    $scope.onCountryChange_w = function(country_sel)
    {
        console.log($scope.country_sel);
        $scope.withdrawMethod_1 = false;
        $scope.withdrawMethod_2 = false;
        $scope.withdrawMethod_3 = false;
        $scope.withdrawMethod_4 = false;
        $scope.withdrawMethod_5 = false;
        if($scope.country_sel == $rootScope.translation.CHARGE_COUNTRY_CHINA)
        {
            $scope.withdrawMethod_value = 10;
            $scope.withdrawMethod_1 = true;
            $scope.withdrawMethod_2 = true;
            $scope.withdrawMethod_3 = true;
            $scope.withdrawMethod_4 = true;
            $scope.withdrawMethod_5 = true;
        }
        else if($scope.country_sel == $rootScope.translation.CHARGE_COUNTRY_KOREA)
        {
            $scope.withdrawMethod_value = 10;
            $scope.withdrawMethod_1 = true;
            $scope.withdrawMethod_2 = false;
            $scope.withdrawMethod_3 = true;
            $scope.withdrawMethod_4 = false;
            $scope.withdrawMethod_5 = true;
        }
        else if($scope.country_sel == $rootScope.translation.CHARGE_COUNTRY_OTHERS)
        {
            $scope.withdrawMethod_value = 2;
            $scope.withdrawMethod_1 = false;
            $scope.withdrawMethod_2 = false;
            $scope.withdrawMethod_3 = true;
            $scope.withdrawMethod_4 = false;
            $scope.withdrawMethod_5 = true;
        }

        if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_CHINA)
        {
            $scope.currentBalance = $scope.balances[0].balance;
            $scope.currency = "¥";
        }
        else if($scope.country_select == $rootScope.translation.CHARGE_COUNTRY_KOREA)
        {
            $scope.currentBalance = $scope.balances[1].balance;
            $scope.currency = "원";
        }
        else
        {
            $scope.currentBalance = $scope.balances[2].balance;
            $scope.currency = "$";
        }

    }

    $scope.setOfflineWithdraw = function()
    {
        $scope.offline_withdraw = false;
        if($rootScope.loginWithdrawResult.is_withdrawl == 1)
            $scope.offline_withdraw = true;
    }

    $scope.setOnlineWithdraw = function()
    {
        $scope.offline_withdraw = true;
        if($rootScope.loginWithdrawResult.is_withdrawl == 1)
            $scope.offline_withdraw = true;
    }
    $scope.sendWithdrawRequest = function()
    {
        $scope.disable_Withdraw = true;
        $scope.requestWithdraw_Array = {}
        $scope.requestWithdraw_Array.u_id = $rootScope.userInfo.u_id;

        if($scope.money_select == '100k')
            $scope.requestWithdraw_Array.u_game_money = 100000;
        else if($scope.money_select == '200k')
            $scope.requestWithdraw_Array.u_game_money = 200000;
        else if($scope.money_select == '500k')
            $scope.requestWithdraw_Array.u_game_money = 500000;
        else if($scope.money_select == '1M')
            $scope.requestWithdraw_Array.u_game_money = 1000000;
        else if($scope.money_select == '2M')
            $scope.requestWithdraw_Array.u_game_money = 2000000;
        else if($scope.money_select == '5M')
            $scope.requestWithdraw_Array.u_game_money = 5000000;
        else if($scope.money_select == '10M')
            $scope.requestWithdraw_Array.u_game_money = 10000000;
        else if($scope.money_select == '20M')
            $scope.requestWithdraw_Array.u_game_money = 20000000;
        else if($scope.money_select == '50M')
            $scope.requestWithdraw_Array.u_game_money = 50000000;
        else if($scope.money_select == '100M')
            $scope.requestWithdraw_Array.u_game_money = 100000000;
        else if($scope.money_select == '200M')
            $scope.requestWithdraw_Array.u_game_money = 200000000;
        else if($scope.money_select == '500M')
            $scope.requestWithdraw_Array.u_game_money = 500000000;
        $scope.requestWithdraw_Array.is_withdrawl = $rootScope.loginWithdrawResult.is_withdrawl;  
        $scope.requestWithdraw_Array.u_withdrawlmethod = $scope.withdrawMethod_value;  
        $scope.requestWithdraw_Array.u_withdrawlid = $scope.bank_ID;  

        if($scope.country_sel == $rootScope.translation.CHARGE_COUNTRY_CHINA)
        {
            $scope.requestWithdraw_Array.u_withdrawlcountry = 0;
            console.log($scope.balances[0].balance);
            $scope.requestWithdraw_Array.u_money = $scope.requestWithdraw_Array.u_game_money / 10000 * $scope.balances[0].balance;
        }
        else if($scope.country_sel == $rootScope.translation.CHARGE_COUNTRY_KOREA)
        {
            $scope.requestWithdraw_Array.u_withdrawlcountry = 1;
            console.log($scope.balances[1].balance);
            $scope.requestWithdraw_Array.u_money = $scope.requestWithdraw_Array.u_game_money / 10000 * $scope.balances[1].balance;
        }
        else
        {
            $scope.requestWithdraw_Array.u_withdrawlcountry = 2;
            console.log($scope.balances[2].balance);
            $scope.requestWithdraw_Array.u_money = $scope.requestWithdraw_Array.u_game_money / 10000 * $scope.balances[2].balance;
        }

        if($rootScope.userInfo.user_balance > $scope.requestWithdraw_Array.u_game_money)
        {
            if($scope.requestWithdraw_Array.u_withdrawlmethod == 10)
            {
                console.log("Offline Withdraw");
                $scope.requestWithdraw_Array.u_withdrawlbank = $scope.bank_Name;  
                $scope.requestWithdraw_Array.u_withdrawlbankname = $scope.bank_UserName;  
                if($scope.requestWithdraw_Array.u_withdrawlid != null && $scope.requestWithdraw_Array.u_withdrawlbank != null && $scope.requestWithdraw_Array.u_withdrawlbankname != null)
                {
                    $http.post($rootScope.serverUrl + '/requestwithdrawl', $scope.requestWithdraw_Array).then(function(success) {
                        console.log(success);
                        if(success.data.result == "success")
                        {
                            console.log($rootScope.userInfo);
                            $rootScope.userInfo.user_balance = success.data.balance;
                            $rootScope.loginWithdrawResult.is_withdrawl = 1;
                            $scope.disable_Withdraw = false;

                            $rootScope.msg = $rootScope.translation.WITHDRAW_SUCCESS;
                            $rootScope.modalInstance = $uibModal.open({
                                animation: true,
                                templateUrl: 'dialogs/AlertDialog.html',
                                controller: 'WithdrawlCtrl',
                                resolve: {
                                }
                            });
                            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                                $log.info('Modal dismissed at: ' + new Date());
                                $scope.disable_Withdraw = false;
                                $scope.Fill_Form_Info();
                                $scope.getWithdrawRecord();
                            });
                        }
                        else
                            console.log(success.data.reason);
                    });
                }
            }
            else
            {
                console.log("Online Withdraw"); 
                if($scope.requestWithdraw_Array.u_withdrawlid != null)
                {
                    $http.post($rootScope.serverUrl + '/requestwithdrawl', $scope.requestWithdraw_Array).then(function(success) {
                        console.log(success);
                        if(success.data.result == "success")
                        {
                            console.log($rootScope.userInfo);
                            $rootScope.userInfo.user_balance = success.data.balance;
                            $rootScope.loginWithdrawResult.is_withdrawl = 1;
                            $scope.disable_Withdraw = false;

                            $rootScope.msg = $rootScope.translation.WITHDRAW_SUCCESS;
                            $rootScope.modalInstance = $uibModal.open({
                                animation: true,
                                templateUrl: 'dialogs/AlertDialog.html',
                                controller: 'WithdrawlCtrl',
                                resolve: {
                                }
                            });
                            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                                $log.info('Modal dismissed at: ' + new Date());
                                $scope.disable_Withdraw = false;
                                $scope.Fill_Form_Info();
                                $scope.getWithdrawRecord();
                            });
                        }
                        else
                            console.log(success.data.reason);
                    });
                }
            }
        }
        else
        {
            console.log("Your balance is not enough.");
            $scope.disable_Withdraw = false;

            $rootScope.msg = $rootScope.translation.WITHDRAW_ERORR_BALANCE;
            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/AlertDialog.html',
                controller: 'WithdrawlCtrl',
                resolve: {
                }
            });
            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
                $scope.disable_Withdraw = false;
                $scope.Fill_Form_Info();
                $scope.getWithdrawRecord();
            });
        }
        console.log($scope.requestWithdraw_Array);
    }

    $scope.showInputForm = function()
    {
        if($scope.payMethod_value == 10)
        {
            $scope.show_bankname = true;
            $scope.show_bankid = true;
            $scope.show_username = true;

            $scope.title_bankname = "은행이름";
            $scope.title_bankid = "카드번호";
            $scope.title_bankpass = "암호";
            $scope.title_username = "소유자이름";
        }
        else
        {
            $scope.show_bankname = false;
            $scope.show_bankid = true;
            $scope.show_username = false;

            $scope.title_bankname = "은행이름";
            $scope.title_bankid = "ID";
            $scope.title_bankpass = "암호";
            $scope.title_username = "소유자이름";
        }
    }

    $scope.getWithdrawRecord = function()
    {
        $scope.num_record = 10;
        $scope.maxSize = 3;
        $scope.bigTotalItems = 10;
        $scope.bigCurrentPage = 1;

        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;

        $http.post($rootScope.serverUrl + '/withdrawlinfo', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $rootScope.withdrawRecords = success.data.record;
                $scope.bigTotalItems = 10*($rootScope.withdrawRecords.length / $scope.num_record);
                for(var i=0; i<$rootScope.withdrawRecords.length; i++)
                {
                    $rootScope.withdrawRecords[i].showNumber = i+1;
                    $rootScope.withdrawRecords[i].money = $scope.moneyFromIntToStr($rootScope.withdrawRecords[i].money);

                    if($rootScope.withdrawRecords[i].country == 0)
                    {
                        $rootScope.withdrawRecords[i].currency = "¥";
                    }
                    else if($rootScope.withdrawRecords[i].country == 1)
                    {
                        $rootScope.withdrawRecords[i].currency = "원";
                    }
                    else
                    {
                        $rootScope.withdrawRecords[i].currency = "$";
                    }

                    var date1 = new Date();
                    var tempDate = Date.parse($rootScope.withdrawRecords[i].time, "yyyy-MM-dd HH:mm:ss");
                    var date2 = new Date(tempDate);
                    var diff = (date1.getTime() - date2.getTime()) / 60000;
                //    console.log(diff);

                    if(diff > 5 || $rootScope.withdrawRecords[i].type != 3)
                        $rootScope.withdrawRecords[i].is_cancel = true;
                    else
                        $rootScope.withdrawRecords[i].is_cancel = false;

                    if($rootScope.withdrawRecords[i].type == 1)
                        $rootScope.withdrawRecords[i].status = $rootScope.translation.REQUEST_STATUS_ACCEPT;
                    else if($rootScope.withdrawRecords[i].type == 2)
                        $rootScope.withdrawRecords[i].status = $rootScope.translation.REQUEST_STATUS_DECLINE;
                    else if($rootScope.withdrawRecords[i].type == 3)
                        $rootScope.withdrawRecords[i].status = $rootScope.translation.REQUEST_STATUS_WORKING;
                }
                $scope.onChangeWithdraw_Number();
            }
            else
                console.log(success.data.reason);
        });
    }

    $scope.onChangeWithdraw_Number = function()
    {
        $rootScope.sub_withdrawRecords = []
        $rootScope.bigTotalItems = 10*($scope.withdrawRecords.length / $scope.num_record);
        for(var j = ($scope.bigCurrentPage - 1) * $scope.num_record; j < $scope.bigCurrentPage * $scope.num_record; j ++)
        {
            if(j < $scope.withdrawRecords.length)
                $rootScope.sub_withdrawRecords.push($scope.withdrawRecords[j]);
        }
    }

    $scope.moneyFromIntToStr = function(moneyInt)
    {
        if(moneyInt == '100000')
            return '100k';
        else if(moneyInt == '200000')
            return '200k';
        else if(moneyInt == '500000')
            return '500k';
        else if(moneyInt == '1000000')
            return '1M';
        else if(moneyInt == '2000000')
            return '2M';
        else if(moneyInt == '5000000')
            return '5M';
        else if(moneyInt == '10000000')
            return '10M';
        else if(moneyInt == '20000000')
            return '20M';
        else if(moneyInt == '50000000')
            return '50M';
        else if(moneyInt == '100000000')
            return '100M';
        else if(moneyInt == '200000000')
            return '200M';
        else if(moneyInt == '500000000')
            return '500M';
    }

    $scope.cancelWithdraw = function(record)
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;
        $scope.tempData.record_id = record.id;
        console.log($scope.tempData);

        $http.post($rootScope.serverUrl + '/cancelrequest', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            { 
                $rootScope.msg = $rootScope.translation.WITHDRAW_CANCEL;
                $rootScope.modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'dialogs/AlertDialog.html',
                    controller: 'WithdrawlCtrl',
                    resolve: {
                    }
                });
                $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                    $scope.disable_Withdraw = false;
                    $scope.Fill_Form_Info();
                    $scope.getWithdrawRecord();
                });
            }
            else
                alert($rootScope.translation.WITHDRAW_CANCEL_ERROR);
        });
    }

    $scope.exitMsg = function()
    {
        console.log("exit notice message");
        if($rootScope.loginWithdrawResult != null)
            $scope.Fill_Form_Info();
        $scope.getWithdrawRecord();
        $rootScope.modalInstance.close('cancel');

        //$uibModalInstance.dismiss('cancel');
    }
});


app.controller("AlertCtrl", function ($scope, $rootScope) {
    $scope.exitMsg = function()
    {
        console.log("exit alert message");
        $rootScope.modalInstance.close('cancel');
    }
});


app.controller("PocketCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    $scope.loginPocketPass = function()
    {
        console.log("loginPocketPass");
        $scope.tempPassword = {}
        $scope.tempPassword.u_id = $rootScope.userInfo.u_id;
        $scope.tempPassword.u_pocketpw = $scope.pocket_pass;
        console.log($scope.tempPassword);

       $http.post($rootScope.serverUrl + '/pocketpasscode', $scope.tempPassword).then(function(success) {
            // return genericSuccess(success);
            if(success.data.result == "success")
            {
                $rootScope.modalInstance.close('cancel');
                console.log("Load Pocket Page");
                $location.path( '/pocket' );
            }
            else
                console.log(success.data.reason);
        });
    }


    $scope.resetPocketPassword = function()
    {
        $rootScope.modalInstance.close('cancel');
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetPocketPasswordDialog.html',
            controller: 'PocketCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.resetPocketPassFunc = function()
    {
        console.log("resetPocketPassFunc");
        if($scope.reset_pocketpass_first == $scope.reset_pocketpass_second && $scope.reset_pocketpass_first != $scope.reset_pocketpass_old)
        {
            $scope.tempPassword = {}
            $scope.tempPassword.u_id = $rootScope.userInfo.u_id;
            $scope.tempPassword.u_pocketpw = $scope.reset_pocketpass_first;
            $scope.tempPassword.passbefore = $scope.reset_pocketpass_old;
            console.log($scope.tempPassword);

            $http.post($rootScope.serverUrl + '/updatepocketpass', $scope.tempPassword).then(function(success) {
                console.log(success);
                if(success.data.result == "success")
                {
                    $rootScope.modalInstance.close('cancel');

                }
                else
                    console.log(success.data.reason);
            });
        }
    }

    $scope.setPocketPassFunc = function()
    {
        console.log("setPocketPass");
        if($scope.pocketpass.first == $scope.pocketpass.second)
        {
            $scope.tempPassword = {}
            $scope.tempPassword.u_id = $rootScope.userInfo.u_id;
            $scope.tempPassword.u_pocketpw = $scope.pocketpass.first;
            console.log($scope.tempPassword.u_pocketpw);

            $http.post($rootScope.serverUrl + '/setpocketpass', $scope.tempPassword).then(function(success) {
                console.log(success);
                if(success.data.result == "success")
                {
                    $rootScope.userInfo.user_pocketpw = 1;
                    $rootScope.modalInstance.close('cancel');
                }
                else
                    console.log(success.data.reason);
            });
        }
    }

    $scope.sendPocketDraw = function()
    {
        console.log("sendPocketDraw");
        $scope.depositPocket = {}
        $scope.depositPocket.u_id = $rootScope.userInfo.u_id;
        $scope.depositPocket.money_change = $scope.pocket_money;
        $scope.depositPocket.change_way = 1;

        console.log($scope.depositPocket);

        if($scope.pocket_money > $rootScope.userInfo.user_pocketmoney || $scope.pocket_money <= 0)
        {
            $scope.pocket_money = 0;
            $rootScope.msg = "Please check your pocket again.";
            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/AlertDialog.html',
                controller: 'AlertCtrl',
                resolve: {
                }
            });
            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
        else
        {
            $http.post($rootScope.serverUrl + '/requestpocketchange', $scope.depositPocket).then(function(success) {
                // return genericSuccess(success);
                console.log(success);
                if(success.data.result == "success")
                {
                    $scope.pocket_money = 0;
                    $rootScope.$emit("ReGet_UserInfo", {});

                    $rootScope.msg = "Draw has been done successfully.";
                    $rootScope.modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'dialogs/AlertDialog.html',
                        controller: 'AlertCtrl',
                        resolve: {
                        }
                    });
                    $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                }
                else
                    console.log(success.data.reason);
            });
        }
    }

    $scope.sendPocketDeposit = function()
    {
        console.log("sendPocketDeposit");
        $scope.depositPocket = {}
        $scope.depositPocket.u_id = $rootScope.userInfo.u_id;
        $scope.depositPocket.money_change = $scope.pocket_money;
        $scope.depositPocket.change_way = 0;

        console.log($scope.depositPocket);
        if($scope.pocket_money > $rootScope.userInfo.user_balance || $scope.pocket_money <= 0)
        {
            $scope.pocket_money = 0;
            $rootScope.msg = "Please check your balance again.";
            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/AlertDialog.html',
                controller: 'AlertCtrl',
                resolve: {
                }
            });
            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
        else
        {
            $http.post($rootScope.serverUrl + '/requestpocketchange', $scope.depositPocket).then(function(success) {
                // return genericSuccess(success);
                console.log(success);
                if(success.data.result == "success")
                {
                    $scope.pocket_money = 0;
                    $rootScope.$emit("ReGet_UserInfo", {});

                    $rootScope.msg = "Deposit has been done successfully.";
                    $rootScope.modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'dialogs/AlertDialog.html',
                        controller: 'AlertCtrl',
                        resolve: {
                        }
                    });
                    $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                }
                else
                    console.log(success.data.reason);
            });
        }

        
    }

    $scope.exitMsg = function()
    {
        $rootScope.modalInstance.close('cancel');
    }

});

app.controller("RecordCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    $scope.item_perPage = 5;
    $scope.maxSize = 3;
    $scope.bigTotalItems = 10;
    $scope.bigCurrentPage = 1;
    $scope.flag_page = 1;

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
        console.log($scope.bigCurrentPage);
        $scope.onChangeNum_perPage();
    };

    $scope.onChangeNum_perPage = function() {
        $scope.item_perPage = $scope.num_per_page;
        $scope.sub_Records = []
        if($scope.flag_page == 1)
        {
            $scope.bigTotalItems = (Math.floor($scope.gameRecords.length / $scope.item_perPage)) * 10;
            if($scope.gameRecords.length % $scope.item_perPage != 0)
                $scope.bigTotalItems = $scope.bigTotalItems + 10;

            console.log($scope.bigCurrentPage);
            for(var j = ($scope.bigCurrentPage - 1) * $scope.item_perPage; j < $scope.bigCurrentPage * $scope.item_perPage; j ++)
            {
                if(j < $scope.gameRecords.length)
                    $scope.sub_Records.push($scope.gameRecords[j]);
            }
        }
        else if($scope.flag_page == 2)
        {
            $scope.bigTotalItems = (Math.floor($scope.chargeRecords.length / $scope.item_perPage)) * 10;
            if($scope.chargeRecords.length % $scope.item_perPage != 0)
                $scope.bigTotalItems = $scope.bigTotalItems + 10;

            console.log($scope.bigCurrentPage);
            for(var j = ($scope.bigCurrentPage - 1) * $scope.item_perPage; j < $scope.bigCurrentPage * $scope.item_perPage; j ++)
            {
                if(j < $scope.chargeRecords.length)
                    $scope.sub_Records.push($scope.chargeRecords[j]);
            }
        }
        else if($scope.flag_page == 3)
        {
            $scope.bigTotalItems = (Math.floor($scope.withdrawRecords.length / $scope.item_perPage)) * 10;
            if($scope.withdrawRecords.length % $scope.item_perPage != 0)
                $scope.bigTotalItems = $scope.bigTotalItems + 10;

            console.log($scope.bigCurrentPage);
            for(var j = ($scope.bigCurrentPage - 1) * $scope.item_perPage; j < $scope.bigCurrentPage * $scope.item_perPage; j ++)
            {
                if(j < $scope.withdrawRecords.length)
                    $scope.sub_Records.push($scope.withdrawRecords[j]);
            }
        }
    };

    $scope.getRechargeRecord = function()
    {
        console.log("Get Recharge Record");
        $scope.tempRecharge = {}
        $scope.tempRecharge.u_id = $rootScope.userInfo.u_id;
        $scope.chargeRecords = {}

        $http.post($rootScope.serverUrl + '/rechargerecord', $scope.tempRecharge).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.chargeRecords = success.data.record;
                for(var i=0; i<$scope.chargeRecords.length; i++)
                {
                    if($scope.chargeRecords[i].type == 1)
                        $scope.chargeRecords[i].type = "요청";
                    else if($scope.chargeRecords[i].type == 2)
                        $scope.chargeRecords[i].type = "승인";
                    else
                        $scope.chargeRecords[i].type = "취소";
                }
                $scope.flag_page = 2;
                $scope.onChangeNum_perPage();
                console.log($scope.chargeRecords);
            }
            else
                console.log(success.data.reason);
        });
    }

    $scope.getWithdrawalsRecord = function()
    {
        console.log("Get Withdrawl Record");
        $scope.tempRecharge = {}
        $scope.tempRecharge.u_id = $rootScope.userInfo.u_id;
        $scope.withdrawRecords = {}

        $http.post($rootScope.serverUrl + '/withdrawlrecord', $scope.tempRecharge).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.withdrawRecords = success.data.record;
                for(var i=0; i<$scope.withdrawRecords.length; i++)
                {
                    if($scope.withdrawRecords[i].type == 1)
                        $scope.withdrawRecords[i].type = "요청";
                    else if($scope.withdrawRecords[i].type == 2)
                        $scope.withdrawRecords[i].type = "승인";
                    else
                        $scope.withdrawRecords[i].type = "취소";
                }
                $scope.flag_page = 3;
                $scope.onChangeNum_perPage();
                console.log($scope.withdrawRecords);
            }
            else
                console.log(success.data.reason);
        });
    }

    $scope.getGameRecord = function()
    {
        console.log("Get Withdrawl Record");
        $scope.tempRecharge = {}
        $scope.tempRecharge.u_id = $rootScope.userInfo.u_id;
        $scope.gameRecords = {}

        $http.post($rootScope.serverUrl + '/gamerecord', $scope.tempRecharge).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.gameRecords = success.data.record;

                for(var i=0; i<$scope.gameRecords.length; i++)
                {
                    if($scope.gameRecords[i].type == 1)
                        $scope.gameRecords[i].type = "이겼";
                    else
                        $scope.gameRecords[i].type = "졌";
                }
                console.log($scope.gameRecords);
                $scope.flag_page = 1;
                $scope.onChangeNum_perPage();
            }
            else
                console.log(success.data.reason);
        });
    }
});

app.controller("MessageCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    $scope.item_perPage = 5;
    $scope.maxSize = 3;
    $scope.bigTotalItems = 10;
    $scope.bigCurrentPage = 1;
    $scope.flag_page = 1;

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
        console.log($scope.bigCurrentPage);
        $scope.onChangeNum_perPage();
    };

    $scope.onChangeNum_perPage = function() {
        $scope.item_perPage = $scope.num_per_page;
        $scope.sub_Records = []
        if($scope.flag_page == 1)
        {
            $scope.bigTotalItems = (Math.floor($scope.chargeMessage.length / $scope.item_perPage)) * 10;
            if($scope.chargeMessage.length % $scope.item_perPage != 0)
                $scope.bigTotalItems = $scope.bigTotalItems + 10;

            console.log($scope.bigCurrentPage);
            for(var j = ($scope.bigCurrentPage - 1) * $scope.item_perPage; j < $scope.bigCurrentPage * $scope.item_perPage; j ++)
            {
                if(j < $scope.chargeMessage.length)
                    $scope.sub_Records.push($scope.chargeMessage[j]);
            }
        }
        else if($scope.flag_page == 2)
        {
            $scope.bigTotalItems = (Math.floor($scope.withdrawMessage.length / $scope.item_perPage)) * 10;
            if($scope.withdrawMessage.length % $scope.item_perPage != 0)
                $scope.bigTotalItems = $scope.bigTotalItems + 10;

            console.log($scope.bigCurrentPage);
            for(var j = ($scope.bigCurrentPage - 1) * $scope.item_perPage; j < $scope.bigCurrentPage * $scope.item_perPage; j ++)
            {
                if(j < $scope.withdrawMessage.length)
                    $scope.sub_Records.push($scope.withdrawMessage[j]);
            }
        }
        else if($scope.flag_page == 3)
        {
            $scope.bigTotalItems = (Math.floor($scope.systemMessage.length / $scope.item_perPage)) * 10;
            if($scope.systemMessage.length % $scope.item_perPage != 0)
                $scope.bigTotalItems = $scope.bigTotalItems + 10;

            console.log($scope.bigCurrentPage);
            for(var j = ($scope.bigCurrentPage - 1) * $scope.item_perPage; j < $scope.bigCurrentPage * $scope.item_perPage; j ++)
            {
                if(j < $scope.systemMessage.length)
                    $scope.sub_Records.push($scope.systemMessage[j]);
            }
        }
        else if($scope.flag_page == 4)
        {
            $scope.bigTotalItems = (Math.floor($scope.otherMessage.length / $scope.item_perPage)) * 10;
            if($scope.otherMessage.length % $scope.item_perPage != 0)
                $scope.bigTotalItems = $scope.bigTotalItems + 10;

            console.log($scope.bigCurrentPage);
            for(var j = ($scope.bigCurrentPage - 1) * $scope.item_perPage; j < $scope.bigCurrentPage * $scope.item_perPage; j ++)
            {
                if(j < $scope.otherMessage.length)
                    $scope.sub_Records.push($scope.otherMessage[j]);
            }
        }
        else if($scope.flag_page == 5)
        {
            $scope.bigTotalItems = (Math.floor($scope.questionMessage.length / $scope.item_perPage)) * 10;
            if($scope.questionMessage.length % $scope.item_perPage != 0)
                $scope.bigTotalItems = $scope.bigTotalItems + 10;

            console.log($scope.bigCurrentPage);
            for(var j = ($scope.bigCurrentPage - 1) * $scope.item_perPage; j < $scope.bigCurrentPage * $scope.item_perPage; j ++)
            {
                if(j < $scope.questionMessage.length)
                    $scope.sub_Records.push($scope.questionMessage[j]);
            }
        }
    };

    $scope.getRechargeMessage = function()
    {
        console.log("getRechargeMessage");
        $scope.flag_page = 1;

        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.u_id;
        $scope.chargeMessage = {}

        $http.post($rootScope.serverUrl + '/rechargemessage', $scope.temp_myID).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.chargeMessage = success.data.messages;
                $scope.onChangeNum_perPage();
                console.log($scope.chargeMessage);
            }
            else
                console.log(success.data.reason);
        });
    }

    $scope.getWithdrawalsMessage = function()
    {
        console.log("getWithdrawalsRecord");
        $scope.flag_page = 2;
        
        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.u_id;
        $scope.chargeMessage = {}

        $http.post($rootScope.serverUrl + '/withdrawlmessage', $scope.temp_myID).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.withdrawMessage = success.data.messages;
                $scope.onChangeNum_perPage();
                console.log($scope.withdrawMessage);
            }
            else
                console.log(success.data.reason);
        });

    }

    $scope.getSystemMessage = function()
    {
        console.log("getSystemMessage");
        $scope.flag_page = 3;

        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.u_id;
        $scope.systemMessage = {}

        $http.post($rootScope.serverUrl + '/systemmessage', $scope.temp_myID).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.systemMessage = success.data.messages;
                $scope.onChangeNum_perPage();
                console.log($scope.systemMessage);
            }
            else
                console.log(success.data.reason);
        });
    }

    $scope.getOtherMessage = function()
    {
        console.log("getOtherMessage");
        $scope.flag_page = 4;

        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.u_id;
        $scope.otherMessage = {}

        $http.post($rootScope.serverUrl + '/othermessage', $scope.temp_myID).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.otherMessage = success.data.messages;
                $scope.onChangeNum_perPage();
                console.log($scope.otherMessage);
            }
            else
                console.log(success.data.reason);
        });
    }

    $scope.getQuestionMessage = function()
    {
        console.log("getQuestionMessage");
        $scope.flag_page = 5;

        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.u_id;
        $scope.questionMessage = {}

        $http.post($rootScope.serverUrl + '/requestfeedback', $scope.temp_myID).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.questionMessage = success.data.messages;
                $scope.onChangeNum_perPage();
                console.log($scope.questionMessage);
            }
            else
                console.log(success.data.reason);
        });
    }

    $scope.initNewQuestion = function()
    {
        $scope.question_type = $rootScope.translation.NEW_OPINION_TYPE1;
    }

    $scope.newQuestion = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/NewQuestion.html',
            controller: 'MessageCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.sendNewQuestion = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;
        $scope.tempData.m_title = $scope.question_title;
        $scope.tempData.m_content = $scope.question_content;

        if($scope.question_type == $rootScope.translation.NEW_OPINION_TYPE1)
            $scope.tempData.m_category = 0;
        else
            $scope.tempData.m_category = 1;
        console.log($scope.tempData);

        $http.post($rootScope.serverUrl + '/uploadopinion', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $rootScope.modalInstance.close('cancel');
            }
            else
                console.log(success.data.reason);
        });
    }


    $scope.exitMsg = function()
    {
        $rootScope.modalInstance.close('cancel');
        //$uibModalInstance.dismiss('cancel');
    }
});

app.controller("DownloadCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    $scope.flag_gameList = 1;
    $scope.notReady = function()
    {
        alert("준비중입니다.");
    }

    $scope.card_game = function()
    {
        $scope.flag_gameList = 1;
        $scope.getGameList();
    }

    $scope.orak_game = function()
    {
        $scope.flag_gameList = 2;
        $scope.getGameList();
    }

    $scope.sport_game = function()
    {
        $scope.flag_gameList = 3;
        $scope.getGameList();
    }

    $scope.horse_game = function()
    {
        $scope.flag_gameList = 4;
        $scope.getGameList();
    }

    $scope.live_game = function()
    {
        $scope.flag_gameList = 5;
        $scope.getGameList();
    }

    $scope.getPopularGameList = function()
    {
        $scope.popular_gameLists = []
        $http.post($rootScope.serverUrl + '/sitestart').then(function(success) {
            console.log(success);
            $scope.gameLists = success.data.games;
            for(var i=0; i<$scope.gameLists.length; i++)
                for(var j=i+1; j<$scope.gameLists.length; j++)
                {
                    if($scope.gameLists[i].game_popular < $scope.gameLists[j].game_popular)
                    {
                        $scope.tempGame = {}
                        $scope.tempGame = $scope.gameLists[i];
                        $scope.gameLists[i] = $scope.gameLists[j];
                        $scope.gameLists[j] = $scope.tempGame;
                    }
                }
            for(var i=0; i<10; i++)
            {
                if($scope.gameLists[i] != null)
                    $scope.popular_gameLists[i] = $scope.gameLists[i];
            }
 
        });
        $scope.getGameList();

    }

    $scope.getGameList = function()
    {
        $scope.show_gameList = []
        $http.post($rootScope.serverUrl + '/sitestart').then(function(success) {
            console.log(success);
            $scope.gameLists = success.data.games;
            for(var i=0; i<$scope.gameLists.length; i++)
            {
                if($scope.gameLists[i].game_category == $scope.flag_gameList)
                    $scope.show_gameList.push($scope.gameLists[i]);
            }
            console.log($scope.show_gameList);
        });
    }
    
    $scope.search_Games = function()
    {
        console.log($scope.game_search);
        $scope.show_gameList = []

        for(var i=0; i<$scope.gameLists.length; i++)
        {
            if($rootScope.currentLanguage == 'en')
            {
                if($scope.gameLists[i].gamename.ga_en.indexOf($scope.game_search) !== -1)
                    $scope.show_gameList.push($scope.gameLists[i]);
            }
            else if($rootScope.currentLanguage == 'ko')
            {
                if($scope.gameLists[i].gamename.ga_kr.indexOf($scope.game_search) !== -1)
                    $scope.show_gameList.push($scope.gameLists[i]);
            }
        }
        console.log($scope.show_gameList);
    }
});

app.controller("ProfileCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    $scope.resetWithdrawlPassword = function()
    {
        console.log("reset withdraw password");
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetWithdrawlPasswordDialog.html',
            controller: 'WithdrawlCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.resetPocketPassword = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetPocketPasswordDialog.html',
            controller: 'PocketCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.resetUserPassword = function()
    {
        console.log("resetUserPassword");
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetUserPasswordDialog.html',
            controller: 'ProfileCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.resetUserPassFunc = function()
    {
        if($scope.reset_userpass_first == $scope.reset_userpass_second && $scope.reset_userpass_first != $scope.reset_userpass_old)
        {
            $scope.tempPassword = {}
            $scope.tempPassword.u_id = $rootScope.userInfo.u_id;
            $scope.tempPassword.passbefore = $scope.reset_userpass_old;
            $scope.tempPassword.u_pw = $scope.reset_userpass_first;
            console.log($scope.tempPassword);

            $http.post($rootScope.serverUrl + '/updateuserpassword', $scope.tempPassword).then(function(success) {
                console.log(success);
                if(success.data.result == "success")
                {
                    $rootScope.modalInstance.close('cancel');
                }
                else
                    console.log(success.data.reason);
            });
        }
    }

    $scope.resetUserInfo = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetUserInfoDialog.html',
            controller: 'ProfileCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.resetUserInfoFunc = function()
    {
        console.log($scope.reset_loginip);

        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;
        $scope.tempData.u_loginip = $scope.reset_loginip;

        $http.post($rootScope.serverUrl + '/updateuserinfo', $scope.tempData).then(function(success) {
            console.log(success);
            $rootScope.userInfo.login_ip = $scope.tempData.u_loginip;
            $rootScope.modalInstance.close('cancel');
        });
    }

    $scope.resetUserEmail = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetUserEmail.html',
            controller: 'ProfileCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.send_verifyCode = function()
    {
        $scope.is_resetEmail = true;
        if($scope.btn_name == $rootScope.translation.RESET_USER_EMAIL_SEND_CODE)
        {

            $scope.tempData = {}
            $scope.tempData.u_email = $scope.reset_email;
            console.log($scope.tempData);

            $http.post($rootScope.serverUrl + '/useremailcheck', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                {
                    $scope.path_resetEmail = "img/img_check.png";

                    $scope.tempData_ = {}
                    $scope.tempData_.u_id = $rootScope.userInfo.u_id;
                    $scope.tempData_.verify_way = 0;
                    $scope.tempData_.address = $scope.reset_email;
                    console.log($scope.tempData_);

                    $http.post($rootScope.serverUrl + '/sendverifycode', $scope.tempData_).then(function(success) {
                        console.log(success);
                        if(success.data.result == 'success')
                        {
                            $scope.btn_name = $rootScope.translation.RESET_USER_EMAIL_SENT_CODE;
                            $scope.dis_email = true;
                        }
                    });
                }
                else
                    $scope.path_resetEmail = "img/img_cross.png";

            });
        }
        else
        {
            $scope.tempData = {}
            $scope.tempData.u_id = $rootScope.userInfo.u_id;
            $scope.tempData.verify_code = $scope.reset_code;
            $scope.tempData.v_flag = 1;
            console.log($scope.tempData);

            $http.post($rootScope.serverUrl + '/verifycode', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                {
                    $scope.is_verified = true;
                }
            });
        }
    }

    $scope.resetUserEmailFunc = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;
        $scope.tempData.u_email = $scope.reset_email;

        $http.post($rootScope.serverUrl + '/updateuserinfo', $scope.tempData).then(function(success) {
            console.log(success);
            $rootScope.userInfo.user_email = $scope.tempData.u_email;
            $rootScope.modalInstance.close('cancel');
        });
    }

    $scope.initResetUserEmail = function()
    {
        $scope.is_verified = false;
        $scope.is_resetEmail = false;
        $scope.dis_email = false;        $scope.btn_name = $rootScope.translation.RESET_USER_EMAIL_SEND_CODE;

    }

    $scope.resetUserMobile = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetUserMobile.html',
            controller: 'ProfileCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.initResetUserMobile = function()
    {
        $scope.is_verified = false;
        $scope.is_resetMobile = false;
        $scope.dis_mobile = false;
        $scope.btn_name = $rootScope.translation.RESET_USER_EMAIL_SEND_CODE;
    }

    $scope.send_mobileVerifyCode = function()
    {
        $scope.is_resetMobile = true;
        if($scope.btn_name == $rootScope.translation.RESET_USER_EMAIL_SEND_CODE)
        {

            $scope.tempData = {}
            $scope.tempData.u_phone = $scope.reset_mobile;
            console.log($scope.tempData);

            $http.post($rootScope.serverUrl + '/userphonecheck', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                {
                    $scope.path_resetMobile = "img/img_check.png";

                    $scope.tempData_ = {}
                    $scope.tempData_.u_id = $rootScope.userInfo.u_id;
                    $scope.tempData_.verify_way = 1;
                    $scope.tempData_.address = $scope.reset_mobile;
                    console.log($scope.tempData_);

                    $http.post($rootScope.serverUrl + '/sendverifycode', $scope.tempData_).then(function(success) {
                        console.log(success);
                        if(success.data.result == 'success')
                        {
                            $scope.btn_name = $rootScope.translation.RESET_USER_EMAIL_SENT_CODE;
                            $scope.dis_mobile = true;
                        }
                    });
                }
                else
                    $scope.path_resetMobile = "img/img_cross.png";

            });
        }
        else
        {
            $scope.tempData = {}
            $scope.tempData.u_id = $rootScope.userInfo.u_id;
            $scope.tempData.verify_code = $scope.reset_code;
            $scope.tempData.v_flag = 1;
            console.log($scope.tempData);

            $http.post($rootScope.serverUrl + '/verifycode', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                {
                    $scope.is_verified = true;
                }
            });
        }
    }

    $scope.resetUserMobileFunc = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;
        $scope.tempData.u_phone = $scope.reset_mobile;

        $http.post($rootScope.serverUrl + '/updateuserinfo', $scope.tempData).then(function(success) {
            console.log(success);
            $rootScope.userInfo.user_phone = $scope.tempData.u_phone;
            $rootScope.modalInstance.close('cancel');
        });
    }

    $scope.resetUserPhoto = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetUserPhoto.html',
            controller: 'ProfileCtrl',
            size: 'lg',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.getAllPhotos = function()
    {
        console.log("getAllPhotos");
        $http.post($rootScope.resource_Url + '/requestphotos').then(function(success) {
            $scope.photoAvatar = {}
            $scope.photoAvatar = success.data.photos;
            console.log($scope.photoAvatar);
        });
    }

    $scope.selectPhoto = function(photo_value)
    {
        $scope.photo_value　= photo_value;
        console.log(photo_value);

    }

    $scope.resetUserPhotoFunc = function()
    {
        console.log($scope.photo_value);
        if($scope.photo_value　!= null)
        {
            $scope.tempData = {}
            $scope.tempData.u_id = $rootScope.userInfo.u_id;
            $scope.tempData.u_photoindex = $scope.photo_value;
            console.log($scope.tempData);

            $http.post($rootScope.serverUrl + '/updateuserphoto', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                {
                    $rootScope.userInfo.user_photo = success.data.photourl;
                    $rootScope.modalInstance.close('cancel');
                }
            });
        }
    }


    $scope.exitMsg = function()
    {
        $rootScope.modalInstance.close('cancel');
    }
});


app.controller("BillBoardCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document, Upload) {
    
    $scope.getInitBills = function() {
        $scope.num_bill = 10;
        $scope.maxSize = 3;
        $scope.bigTotalItems = 10;
        $scope.bigCurrentPage = 1;
        $scope.cat_bill = $rootScope.translation.BILLBOARD_CATEGORY6;

        $scope.tempData = {}
        $scope.tempData.page_number = $scope.bigCurrentPage - 1;
        $scope.tempData.count = $scope.num_bill;
        $scope.tempData.category = 0;

        $http.post($rootScope.billBoard_Url + '/requestbbslist', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $scope.bigTotalItems = success.data.count;
                $rootScope.showBills = success.data.bbs;
                for(var i=0; i<$scope.num_bill; i++)
                {
                    if($rootScope.showBills[i] != null)
                        $rootScope.showBills[i].showNumber = i+1;
                }
                console.log($rootScope.showBills);
            }
        });
    };


    $scope.onChangeBillBoard_Number = function() {
        console.log($scope.bigCurrentPage);
        $scope.onChangeBillBoard_Category();
    };

    $scope.onChangeBillBoard_Category = function()
    {
        $scope.tempData = {};
        $scope.tempData.page_number = $scope.bigCurrentPage - 1;
        $scope.tempData.count = $scope.num_bill;
        console.log($scope.cat_bill);
        if($scope.cat_bill == $rootScope.translation.BILLBOARD_CATEGORY1)
            $scope.tempData.category = 1;
        else if($scope.cat_bill == $rootScope.translation.BILLBOARD_CATEGORY2)
            $scope.tempData.category = 2;
        else if($scope.cat_bill == $rootScope.translation.BILLBOARD_CATEGORY3)
            $scope.tempData.category = 3;
        else if($scope.cat_bill == $rootScope.translation.BILLBOARD_CATEGORY4)
            $scope.tempData.category = 4;
        else if($scope.cat_bill == $rootScope.translation.BILLBOARD_CATEGORY5)
            $scope.tempData.category = 5;
        else
            $scope.tempData.category = 0;
        $http.post($rootScope.billBoard_Url + '/requestbbslist', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $scope.bigTotalItems = 10 * (success.data.count/$scope.num_bill);
                $rootScope.showBills = success.data.bbs;
                for(var i=0; i<$scope.num_bill; i++)
                {
                    if(i < $rootScope.showBills.length)
                        $rootScope.showBills[i].showNumber = ($scope.bigCurrentPage-1)*$scope.num_bill+i+1;
                }
                console.log($rootScope.showBills);
            }
        });
    }

    $scope.newBill = function()
    {
        if($rootScope.is_logged != true)
        {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/NoticeDialog.html',
                controller: 'NoticeDialogCtrl',
                windowClass: 'center-modal',
                resolve: {}
            });
            modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
        else
        {
            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/NewBill.html',
                controller: 'BillBoardCtrl',
                size: 'lg',
                resolve: {}
            });
            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });            
        }
    }

    $scope.init_BillType = function()
    {
        $scope.bill_type = $rootScope.translation.BILLBOARD_CATEGORY1;
    }

    $scope.sendNewBill = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.u_id;
        $scope.tempData.bbs_title = $scope.bill_title;
        $scope.tempData.bbs_contents = $scope.bill_content;
        if($scope.bill_type == $rootScope.translation.BILLBOARD_CATEGORY1)
            $scope.tempData.bbs_category = 1;
        else if($scope.bill_type == $rootScope.translation.BILLBOARD_CATEGORY2)
            $scope.tempData.bbs_category = 2;
        else if($scope.bill_type == $rootScope.translation.BILLBOARD_CATEGORY3)
            $scope.tempData.bbs_category = 3;
        else if($scope.bill_type == $rootScope.translation.BILLBOARD_CATEGORY4)
            $scope.tempData.bbs_category = 4;
        else if($scope.bill_type == $rootScope.translation.BILLBOARD_CATEGORY5)
            $scope.tempData.bbs_category = 5;
        console.log($scope.tempData);

        $http.post($rootScope.billBoard_Url + '/uploadbbs', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.getInitBills();
                $rootScope.modalInstance.close('cancel');
            }
            else
                console.log(success.data.reason);
        });
    }

    $scope.uploadNewImage = function()
    {
        console.log($scope.tempFile);
        Upload.upload({
            url: $rootScope.resource_Url + '/uploadbbsimage',
            data: {file: $scope.tempFile}            
            }).progress(function(e) {
            }).then(function(data) {
            // file is uploaded successfully
                console.log(data);
                if(data.data.result == 'success')
                {
                    $scope.bill_content = $scope.bill_content + '<img src="' + data.data.img_url +'" >';
                }
        }); 

    }

    $scope.selectNewImage = function($files)
    {
        console.log($files[0]);
        console.log($rootScope.resource_Url + '/uploadbbsimage');
        $scope.tempFile = $files[0];
    /*    for (var i = 0; i < $files.length; i++) {
            Upload.upload({
                url: $rootScope.resource_Url + '/uploadbbsimage',
                data: {file: $files[0]}            
              }).progress(function(e) {
              }).then(function(data) {
                // file is uploaded successfully
                    console.log(data);
                if(data.data.error_code === 0)
                    console.log("asdfasdfasdf");
              }); 
        }*/
    }

    $scope.showBillComments = function(one_bill)
    {
        $rootScope.selected_bill = one_bill;
        $location.path( '/billcomment' );

    }

    $scope.getInitBillComments = function()
    {
        $scope.tempData = {}
        $scope.tempData.bbs_id = $rootScope.selected_bill.id;
        $scope.tempData.category = $rootScope.selected_bill.category;

        console.log($rootScope.selected_bill);

        $http.post($rootScope.billBoard_Url + '/requestbbsdetail', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $scope.details_title = success.data.bbs_contents;
                $scope.showComments = {}
                $scope.showComments = success.data.comments;
                for(var i=0; i<$scope.showComments.length; i++)
                    $scope.showComments[i].showNumber = i+1;
            }
        });
    }

    $scope.newBillComment = function()
    {

        if($rootScope.is_logged != true)
        {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/NoticeDialog.html',
                controller: 'NoticeDialogCtrl',
                windowClass: 'center-modal',
                resolve: {}
            });
            modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
        else
        {
            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/NewBillComment.html',
                controller: 'BillBoardCtrl',
                resolve: {}
            });
            $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });            
        }
    }

    $scope.sendNewBillComment = function()
    {
        if($scope.comment_content != null)
        {
            $scope.tempData = {}
            $scope.tempData.u_id = $rootScope.userInfo.u_id;
            $scope.tempData.bbs_id = $rootScope.selected_bill.id;
            $scope.tempData.com_contents = $scope.comment_content;

            $http.post($rootScope.billBoard_Url + '/uploadcomment', $scope.tempData).then(function(success) {
                console.log(success);
                if(success.data.result == 'success')
                {
                    $scope.comment_content = "";
                    $scope.getInitBillComments();
                }
            });
        }
    }

    $scope.exitMsg = function()
    {
        $rootScope.modalInstance.close('cancel');
    }

});


app.controller("NoticeCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    $scope.num_notice = 10;
    $scope.maxSize = 3;
    $scope.bigTotalItems = 10;
    $scope.bigCurrentPage = 1;

    $scope.getAllNotice = function()
    {
        $scope.allNotice = {}
        $http.post($rootScope.serverUrl + '/requestnotice').then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $scope.allNotice = success.data.messages;
                for(var i=0; i<$scope.allNotice.length; i++)
                    $scope.allNotice[i].showNumber = i+1;
                $scope.onChangeNotice();
                console.log($scope.allNotice);
            }
        });
    }

    $scope.onChangeNotice = function()
    {
        $scope.bigTotalItems = 10 * ($scope.allNotice.length / $scope.num_notice);
        console.log($scope.bigTotalItems);
        $scope.subNotice = []
        for(var i=($scope.bigCurrentPage-1)*$scope.num_notice; i<($scope.bigCurrentPage)*$scope.num_notice; i++)
        {
            if($scope.allNotice[i] != null)
                $scope.subNotice.push($scope.allNotice[i]);
            else
                break;
        }
    }

    $scope.showNoticeDetails = function(one_detail)
    {
        $rootScope.one_notice_details = one_detail;
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/NoticeDetails.html',
            controller: 'NoticeCtrl',
            size: 'lg',
            resolve: {
            }
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.exitMsg = function()
    {
        $rootScope.modalInstance.close('cancel');
    }
});

app.controller("HelpPageCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

 /*   $scope.oneAtATime = true;

    $scope.groups = [
        {
          title: '비밀번호 분실문의/ 변경 요청은 어떻게 하나요?',
          content: '비밀번호 분실문의/변경요청은 1대1 문의를 이용해 주세요.사이트 로그인시 필요한 비밀번호의 분실문의 및 변경요청을 원하실 경우 해당아이디로 1대1게시판으로 문의 및 요청해 주시면 확인즉시 쪽지나 이메일로 발송해드리겠습니다.'
        },
        {
          title: '비밀번호 분실문의/ 변경 요청은 어떻게 하나요?',
          content: '비밀번호 분실문의/변경요청은 1대1 문의를 이용해 주세요.사이트 로그인시 필요한 비밀번호의 분실문의 및 변경요청을 원하실 경우 해당아이디로 1대1게시판으로 문의 및 요청해 주시면 확인즉시 쪽지나 이메일로 발송해드리겠습니다.'
        },
        {
          title: '비밀번호 분실문의/ 변경 요청은 어떻게 하나요?',
          content: '비밀번호 분실문의/변경요청은 1대1 문의를 이용해 주세요.사이트 로그인시 필요한 비밀번호의 분실문의 및 변경요청을 원하실 경우 해당아이디로 1대1게시판으로 문의 및 요청해 주시면 확인즉시 쪽지나 이메일로 발송해드리겠습니다.'
        },
        {
          title: '비밀번호 분실문의/ 변경 요청은 어떻게 하나요?',
          content: '비밀번호 분실문의/변경요청은 1대1 문의를 이용해 주세요.사이트 로그인시 필요한 비밀번호의 분실문의 및 변경요청을 원하실 경우 해당아이디로 1대1게시판으로 문의 및 요청해 주시면 확인즉시 쪽지나 이메일로 발송해드리겠습니다.'
        },
        {
          title: '비밀번호 분실문의/ 변경 요청은 어떻게 하나요?',
          content: '비밀번호 분실문의/변경요청은 1대1 문의를 이용해 주세요.사이트 로그인시 필요한 비밀번호의 분실문의 및 변경요청을 원하실 경우 해당아이디로 1대1게시판으로 문의 및 요청해 주시면 확인즉시 쪽지나 이메일로 발송해드리겠습니다.'
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };*/

    $scope.getFAQHelp = function()
    {
        $scope.tempData = {}
        $scope.tempData.category = 1;

        $http.post($rootScope.serverUrl + '/requestnotice', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $scope.allFAQs = success.data.messages;
                console.log($scope.allFAQs);
            }
        });
    }

    $scope.getSiteRuleHelp = function()
    {
        $scope.tempData = {}
        $scope.tempData.category = 2;

        $http.post($rootScope.serverUrl + '/requestnotice', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $scope.siteHelps = success.data.messages;
                console.log($scope.allFAQs);
            }
        });
    }

    $scope.getUserPolicyHelp = function()
    {
        $scope.tempData = {}
        $scope.tempData.category = 3;

        $http.post($rootScope.serverUrl + '/requestnotice', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $scope.userHelps = success.data.messages;
                console.log($scope.allFAQs);
            }
        });
    }

    $scope.getPokerHelp = function()
    {
        $scope.tempData = {}
        $scope.tempData.category = 4;

        $http.post($rootScope.serverUrl + '/requestnotice', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == 'success')
            {
                $scope.pokerHelps = success.data.messages;
                console.log($scope.allFAQs);
            }
        });
    }
});