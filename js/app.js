var app = angular.module('delux', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize', 'ngStorage', 'ui.bootstrap','textAngular','angularSpectrumColorpicker','ui.bootstrap.dropdownToggle','ngFileUpload']);

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
    .when("/gameplay", {
        templateUrl : "Gameplay/index.html",
        controller : "loadPageCtrl"
    })
    .when("/notification", {
        templateUrl : "notification.html",
        controller : "loadPageCtrl"
    }).otherwise({
        redirectTo: "/"
    });

    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions){

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
        $resource(languageFilePath).get(function (data) {
            $scope.translation = data.toJSON();
            $rootScope.translation = $scope.translation;
            
            if($rootScope.is_logged == false)
                $rootScope.login_title = $rootScope.translation.TOP_MENU_LOGIN;
            if($rootScope.userInfo.displaybalanceflag == 1)
                $rootScope.profileMoneyBtn = $rootScope.translation.PROFILE_POPUP_BTN_SHOW;
            else
                $rootScope.profileMoneyBtn = $rootScope.translation.PROFILE_POPUP_BTN_HIDE;
            if($rootScope.isShowPhoto == 0)
                $rootScope.isShowPhotoBtn = $rootScope.translation.PROFILE_POPUP_BTN_HIDE;
            else
                $rootScope.isShowPhotoBtn = $rootScope.translation.PROFILE_POPUP_BTN_SHOW;
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
        translationService.getTranslation($scope, lang);
        $location.path( '/' );
    };

    //Init
    $scope.translateLanguage('cn');
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
            socket = io.connect('http://39.104.79.22:8081');
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
            socket = io.connect('http://39.104.79.22:8081',{'forceNew': true });
            socket.emit('CLIENT_LOGGED_IN', {u_id: id });
            },
        disconnect: function () {
            $rootScope.is_socket = true;
            socket.io.disconnect();
        },
        socket: socket
    };
});

app.controller('loadPageCtrl', function($uibModal, $log, $document, $scope, $rootScope, $location, $http, socket, $localStorage, $window) {

    $scope.billBoard_portNumber = 10006;
    $rootScope.billBoard_Url = 'http://39.104.79.22:' + $scope.billBoard_portNumber;

    $scope.portNumber = 8081;
    $rootScope.serverUrl = 'http://39.104.79.22:' + $scope.portNumber;

    $scope.resource_portNumber = 10008;
    $rootScope.resource_Url = 'http://39.104.79.22:' + $scope.resource_portNumber;

    $scope.gameLists = {}
    $http.post($rootScope.serverUrl + '/sessioncheck').then(function(success) {
        if(success.data.result == 'success')
        {
            $scope.temp_userInfo = {}
            $scope.temp_userInfo.u_id = success.data.u_id;

            $http.post($rootScope.serverUrl + '/requestuserinfo', $scope.temp_userInfo).then(function(success) {
                if(success.data.result == "success")
                {
                    $rootScope.userInfo = success.data;
                    $rootScope.login_title = $rootScope.userInfo.user_nickname;
                    $rootScope.is_logged = true;
                    $localStorage.is_logged = 'in';
                    $rootScope.userInfo.userKey = $scope.temp_userInfo.u_id;

                    $scope.tempData = {}
                    $scope.tempData.u_id = $rootScope.userInfo.userKey;
                    if($rootScope.is_socket == null)
                    {
                        socket.init();
                        socket.emit('CLIENT_LOGGED_IN', $scope.tempData);
                    }
                    else
                        socket.reconnect($rootScope.userInfo.userKey);
                }
                else
                {
                }
            });
        }

    });


    $rootScope.$on("logout_", function(){
        $scope.logout();
    });

    $scope.logout = function()
    {
        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.userKey;

        $http.post($rootScope.serverUrl + '/userlogout', $scope.temp_myID).then(function(success) {
            if(success.data.result == 'success')
            {
                $rootScope.is_logged = false;

                $localStorage.is_logged = 'out';
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
        if($rootScope.game_search == '')
            $scope.show_searchResults = false;
        else
            $scope.show_searchResults = true;

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
                else if($rootScope.currentLanguage == 'cn')
                {
                    if($scope.gameLists[i].gamename.ga_ch.indexOf($scope.game_search) !== -1)
                        $scope.searched_gameLists.push($scope.gameLists[i]);
                }
            }
        }
    }

    $scope.openGamePlayTab = function()
    {
    	$window.open('116.255.149.50:8081');
    }
    
    $scope.loadPages = function(path)
    {
        if($rootScope.is_logged == true || path == '/' || path == '/help' || path == '/notice' || path =='/billboard' || path =='/gameplay')
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
        });
    }

    if($rootScope.isShowPhoto == 0)
        $rootScope.isShowPhotoBtn = $rootScope.translation.PROFILE_POPUP_BTN_HIDE;
    $scope.showhideUserPhoto = function()
    {
        if($rootScope.isShowPhoto == 0)
        {
            $rootScope.isShowPhotoBtn = $rootScope.translation.PROFILE_POPUP_BTN_SHOW;
            $rootScope.isShowPhoto = 1;
        }
        else
        {
            $rootScope.isShowPhotoBtn = $rootScope.translation.PROFILE_POPUP_BTN_HIDE;
            $rootScope.isShowPhoto = 0;
        }
    }

    $scope.showhideMoney = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.userKey;
        if($rootScope.userInfo.displaybalanceflag == 1)
            $scope.tempData.displaybalanceflag = 0;
        else
            $scope.tempData.displaybalanceflag = 1;

        $http.post($rootScope.serverUrl + '/changebalancestatus', $scope.tempData).then(function(success) {
            if(success.data.result == 'success')
            {
                if($scope.tempData.displaybalanceflag == 0)
                    $rootScope.userInfo.displaybalanceflag = 0;
                else
                    $rootScope.userInfo.displaybalanceflag = 1;
                if($rootScope.userInfo.displaybalanceflag == 1)
                    $rootScope.profileMoneyBtn = $rootScope.translation.PROFILE_POPUP_BTN_SHOW;
                else
                    $rootScope.profileMoneyBtn = $rootScope.translation.PROFILE_POPUP_BTN_HIDE;
            }
        });
    }

    $scope.showNoticeDetails = function()
    {
        if($rootScope.showNotices.length != 0)
        {
            $scope.tempData = {}
            $scope.tempData.u_id = $rootScope.userInfo.userKey;

            $http.post($rootScope.serverUrl + '/noticecheck', $scope.tempData).then(function(success) {
                if(success.data.result == 'success')
                {
                    $location.path( '/notification' );
                }
            });
        }
    }

    $scope.showNewsDetails = function(one_element)
    {
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
        });
    }
});


app.controller('loginCtrl', function($uibModal, $log, $document, $scope, $rootScope, $location, $localStorage) {

    $scope.$watch(function() {
            return angular.toJson($localStorage.is_logged);
        }, function() {
        //    alert('The name is *** '+$localStorage.is_logged);
            if($localStorage.is_logged == 'out')
                $rootScope.$emit("logout_", {});

    });

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
            });
        }
        else
        {
            $location.path('/profile');
        }
    };
});

app.controller('NoticeDialogCtrl', function ($scope, $rootScope, $uibModalInstance, $uibModal, $log, $document, $window, $localStorage) {

    $scope.noticeRegister = function (size, parentSelector) {
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
        });
    };

    $scope.noticeLogin = function (size, parentSelector) {

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
        });
    };

    $scope.exitMsg = function()
    {
        $uibModalInstance.dismiss('cancel');
    }
});

app.controller('LoginDialogCtrl', function ($scope, $rootScope, $http, $uibModalInstance, $uibModal, $log, $document, socket, $localStorage) {

    $scope.exitMsg = function() {
        $uibModalInstance.dismiss('cancel');
    }

    $scope.sendLoginInfo = function () {
        $http.post($rootScope.serverUrl + '/userlogin', $scope.logininfo).then(function(success) {
            if(success.data.result == "success")
            {
                $scope.temp_userInfo = {};
                $scope.temp_userInfo.u_id = success.data.u_id;
                $uibModalInstance.dismiss('cancel');

                if(success.data.send_email == "0")
                {
                    $http.post($rootScope.serverUrl + '/requestuserinfo', $scope.temp_userInfo).then(function(success) {
                        console.log(success);
                        if(success.data.result == "success")
                        {
                            $rootScope.userInfo = success.data;
                            $rootScope.userInfo.userKey = $scope.temp_userInfo.u_id;

                            $rootScope.login_title = $rootScope.userInfo.user_nickname;
                            if($rootScope.userInfo.displaybalanceflag == 1)
                                $rootScope.profileMoneyBtn = $rootScope.translation.PROFILE_POPUP_BTN_SHOW;
                            else
                                $rootScope.profileMoneyBtn = $rootScope.translation.PROFILE_POPUP_BTN_HIDE;

                            $scope.tempData = {}
                            $scope.tempData.u_id = $rootScope.userInfo.userKey;

                            if($rootScope.is_socket == null)
                            {
                                socket.init();
                                socket.emit('CLIENT_LOGGED_IN', $scope.tempData);
                            }
                            else
                                socket.reconnect($rootScope.userInfo.userKey);
                            $scope.turnOnNotify();

                            $rootScope.is_logged = true;
                            $localStorage.is_logged = 'in';

                            $scope.getLatestNews();
                            $scope.getLatestNotice();
                        }
                    });
                }
                else if(success.data.send_email == 1)
                {
                    $rootScope.userInfo = {}
                    $rootScope.userInfo.userKey = success.data.u_id;
                    $rootScope.modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'dialogs/LoginVerify.html',
                        controller: 'LoginVerifyCtrl',
                        resolve: {}
                    });
                    $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                    });
                }
            }
            else
            {
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
            if(data.rw_flag == 1)
                $scope.rw = $rootScope.translation.CHARGE_TITLE;
            else if(data.rw_flag == 2)
                $scope.rw = $rootScope.translation.WITHDRAW_TITLE;
            $rootScope.alarm_time = $rootScope.translation.ALARM_DIALOG_TIME + " : " + data.time;
            $rootScope.alarm_money = $rootScope.translation.CHARGE_GAMEMONEY + " : " + data.money;
            if($rootScope.currentLanguage == 'ko')
            {
                if(data.type == 1)
                    $scope.reply_type = "승인";
                else if(data.type == 2)
                    $scope.reply_type = "취소";
                $rootScope.msg = data.bank+"을 통해서 " + "ID : " + data.ID + "의 " + $scope.rw + "요청이 " + $scope.reply_type + "되였습니다.";
            }
            else if($rootScope.currentLanguage == 'en')
            {
                if(data.type == 1)
                    $scope.reply_type = "Accepted to ";
                else if(data.type == 2)
                    $scope.reply_type = "Canceled to ";
                $rootScope.msg = $scope.reply_type + $scope.rw + " to " + data.ID + " through " + data.bank;
            }
            else if($rootScope.currentLanguage == 'cn')
            {
                if(data.type == 1)
                    $scope.reply_type = "已通过.";
                else if(data.type == 2)
                    $scope.reply_type = "已取消.";
                $rootScope.msg = "ID: " + data.ID + "通过" + data.bank + "申请的" + $scope.rw + $scope.reply_type;
            }

            var parentSelector;
            var size;
            var parentElem = parentSelector ? 
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'dialogs/AlarmDialog.html',
                controller: 'LoginDialogCtrl',
                size: size,
                resolve: {}
            });
            modalInstance.result.then(function (selectedItem) {}, function () {
                $rootScope.$emit("ReGetRechargeInfo", {});
            });

            var snd = new Audio('audio/alarm.mp3');
            snd.play();
        });

        socket.on('PUSH_OP_RESULT', function (data) {
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
            });
            var snd = new Audio('audio/alarm.mp3');
            snd.play();
        });

    }

    $rootScope.$on("GetLeftSideInfo", function(){
        $scope.getLatestNews();
        $scope.getLatestNotice();
    });

    $scope.getLatestNews = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.userKey;

        $http.post($rootScope.serverUrl + '/requestnews', $scope.tempData).then(function(success) {
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
            }
        });        
    }

    $scope.getLatestNotice = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.userKey;

        $http.post($rootScope.serverUrl + '/latestnotice', $scope.tempData).then(function(success) {
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
        });
    };


    $scope.gotoLogin = function (size, parentSelector) {
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
        });
    };

    $scope.btn_name = $rootScope.translation.REGISTER_DIALOG_SEND_CODE;

    $scope.register_sendVerify = function()
    {
        if($scope.btn_name == $rootScope.translation.REGISTER_DIALOG_SEND_CODE)
        {
            $scope.reg_sendVerfy = {}
            $scope.reg_sendVerfy.u_id = $scope.register_username;
            $scope.reg_sendVerfy.verify_way = $scope.register_check-1;
            if($scope.reg_sendVerfy.verify_way == 0)
                $scope.reg_sendVerfy.address = $scope.register_email;
            else
                $scope.reg_sendVerfy.address = $scope.register_mobile;

            $http.post($rootScope.serverUrl + '/sendverifycode', $scope.reg_sendVerfy).then(function(success) {
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

        if($scope.tempData.verify_code != null)
        {
            $http.post($rootScope.serverUrl + '/verifycode', $scope.tempData).then(function(success) {
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

                    $http.post($rootScope.serverUrl + '/userregister', $scope.reg_sendRequest).then(function(success) {
                        $scope.path_code = "img/img_check.png";
                        if(success.data.result == "success")
                        {
                            $uibModalInstance.dismiss('cancel');
                            alert($rootScope.translation.USER_REGISTERED_SUCCESS);
                        }
                        else
                        {
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
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetUserPhoto.html',
            controller: 'LoginDialogCtrl',
            size: 'lg',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
        });
    }

    $scope.getAllPhotos = function()
    {
        $http.post($rootScope.resource_Url + '/requestphotos').then(function(success) {
            $scope.photoAvatar = {}
            $scope.photoAvatar = success.data.photos;
        });
    }

    $scope.selectPhoto = function(photo_value)
    {
        $rootScope.photo_value　= photo_value;
    }

    $scope.resetUserPhotoFunc = function()
    {
        $rootScope.modalInstance.close('cancel');
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

            $http.post($rootScope.serverUrl + '/useridcheck', $scope.tempData).then(function(success) {
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

            $http.post($rootScope.serverUrl + '/usernicknamecheck', $scope.tempData).then(function(success) {
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

            $http.post($rootScope.serverUrl + '/useremailcheck', $scope.tempData).then(function(success) {
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

            $http.post($rootScope.serverUrl + '/userphonecheck', $scope.tempData).then(function(success) {
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

app.controller('LoginVerifyCtrl', function ($scope, $rootScope, $http, $uibModalInstance, socket, $localStorage) {

    $scope.sendLoginVerificationCode = function () {

        $scope.verifyinfo = {}
        $scope.verifyinfo.verify_code = $scope.loginVerify.code;
        $scope.verifyinfo.u_id = $rootScope.userInfo.userKey;
        $scope.verifyinfo.v_flag = 0;

        $http.post($rootScope.serverUrl + '/verifycode', $scope.verifyinfo).then(function(success) {
            // return genericSuccess(success);
            if(success.data.result == "success")
            {
                $scope.temp_userInfo = {};
                $scope.temp_userInfo.u_id = $rootScope.userInfo.userKey;
                $http.post($rootScope.serverUrl + '/requestuserinfo', $scope.temp_userInfo).then(function(success) {
                    if(success.data.result == "success")
                    {
                        $rootScope.userInfo = success.data;
                        $rootScope.userInfo.userKey = $scope.temp_userInfo.u_id;

                        $uibModalInstance.dismiss('cancel');
                        $rootScope.login_title = $rootScope.userInfo.user_nickname;

                        $scope.tempData = {}
                        $scope.tempData.u_id = $rootScope.userInfo.userKey;

                        if($rootScope.is_socket == null)
                        {
                            socket.init();
                            socket.emit('CLIENT_LOGGED_IN', $scope.tempData);
                        }
                        else
                            socket.reconnect($rootScope.userInfo.userKey);
                        $rootScope.$emit("turnAlarm", {});

                        $rootScope.is_logged = true;
                        $localStorage.is_logged = 'in';

                        $rootScope.$emit("GetLeftSideInfo", {});
                    }
                });
            }
        });
    };

    $scope.cancelLoginVerify = function () {
        $rootScope.modalInstance.close('cancel');
    };
});

app.controller('ChargeCtrl', function ($scope, $rootScope, $http, $uibModal, $log, $localStorage) {

    if($rootScope.is_logged != true)
        $location.path('/');

    $scope.payType = 'auto';
    $scope.chargeForm_disable = true;

    $scope.disable_bankName = false;
    $scope.disable_bankPass = false;
    $scope.disable_bankID = false;
    $scope.disable_bankUser = false;

    $scope.setAutoPay_Method = function() {
        $scope.payType = 'auto';
        $scope.updateCountryList();
        $scope.FillAutoPayForm();
        $scope.updatePayWaySelection();
    };

    $scope.FillAutoPayForm = function()
    {
        $scope.payMethod_1 = false;
        $scope.payMethod_2 = false;
        $scope.payMethod_3 = false;
        $scope.payMethod_4 = false;
        $scope.payMethod_5 = false;
        if($scope.country_select == null)
            return;
        for(var i=0; i<$scope.payment_history.length; i++)
        {
            if($scope.payment_history[i].sru_country == $scope.country_select.value)
            {
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
            }
        }
        $scope.selectFirstItem();
        $scope.showInputForm();
        for(var i=0; i<$scope.payment_history.length; i++)
        {
            if($scope.payment_history[i].sru_country == $scope.country_select.value && $scope.payment_history[i].sru_paygate == $scope.payMethod_value)
            {
                $scope.bank_Name = $scope.payment_history[i].sru_bank_name;
                $scope.bank_ID = $scope.payment_history[i].sru_bank_id;
                $scope.bank_pass = $scope.payment_history[i].sru_bank_pw;
                $scope.bank_UserName = $scope.payment_history[i].sru_bank_username;
            }
        }
    }

    $scope.setManualPay_Method = function() {
        $scope.payType = 'manual';
        $scope.resetPayRequest();
        $scope.updateCountryList();
        $scope.updatePayWaySelection();
        $scope.selectFirstItem();
        $scope.showInputForm();
    }

    $scope.selectFirstItem = function() {
        if($scope.payMethod_1 == true)
            $scope.payMethod_value = 10;
        else if($scope.payMethod_2 == true)
            $scope.payMethod_value = 3;
        else if($scope.payMethod_3 == true)
            $scope.payMethod_value = 2;
        else if($scope.payMethod_4 == true)
            $scope.payMethod_value = 4;
        else if($scope.payMethod_5 == true)
            $scope.payMethod_value = 1;
    }

    $scope.updatePayWaySelection = function()
    {
        $scope.payMethod_1 = false;
        $scope.payMethod_2 = false;
        $scope.payMethod_3 = false;
        $scope.payMethod_4 = false;
        $scope.payMethod_5 = false;
        for(var i=0; i<$rootScope.userInfo.availablepayment.length; i++)
        {
            if($rootScope.userInfo.availablepayment[i] == 10)
                $scope.payMethod_1 = true;
            else if($rootScope.userInfo.availablepayment[i] == 1)
                $scope.payMethod_5 = true;
            else if($rootScope.userInfo.availablepayment[i] == 2)
                $scope.payMethod_3 = true;
            else if($rootScope.userInfo.availablepayment[i] == 3)
                $scope.payMethod_2 = true;
            else if($rootScope.userInfo.availablepayment[i] == 4)
                $scope.payMethod_4 = true;
        }
        if($scope.country_select != null)
        {
            if($scope.country_select.value == 1)
            {
                $scope.payMethod_2 = false;
                $scope.payMethod_4 = false;
            }
            else if($scope.country_select.value == 2)
            {
                $scope.payMethod_1 = false;
                $scope.payMethod_2 = false;
                $scope.payMethod_4 = false;
            }
        }
        if($scope.payMethod_1 == false && $scope.payMethod_2 == false && $scope.payMethod_3 == false && $scope.payMethod_4 == false && $scope.payMethod_5 == false)
            $scope.is_hidden = false;
        else
            $scope.is_hidden = true;
    }

    $scope.setUnionPay_Method = function()
    {
        if($scope.payType =='auto')
        {
            for(var i=$scope.payment_history.length-1; i>=0; i--)
            {
                if($scope.payment_history[i].sru_paygate == $scope.payMethod_value && $scope.payment_history[i].sru_country == $scope.country_select.value)
                {
                    $scope.bank_Name = $scope.payment_history[i].sru_bank_name;
                    $scope.bank_ID = $scope.payment_history[i].sru_bank_id;
                    $scope.bank_pass = $scope.payment_history[i].sru_bank_pw;
                    $scope.bank_UserName = $scope.payment_history[i].sru_bank_username;
                }
            }
        }
        $scope.showInputForm();
    };

    $scope.onCountryChange = function()
    {
        if($scope.payType == 'auto')
        {
            $scope.FillAutoPayForm();
            $scope.updatePayWaySelection();
        }
        else
        {
            $scope.updatePayWaySelection();
            $scope.selectFirstItem();
            $scope.showInputForm();
        }
        $scope.getCurrentBalanceInfo();
    };

    $scope.resetPayRequest = function()
    {
        $scope.bank_Name = "";
        $scope.bank_pass = "";
        $scope.bank_ID = "";
        $scope.bank_UserName = "";
    }

    $scope.onMoneyChange = function()
    {
        $scope.real_money = $scope.moneyFromStrToInt($scope.money_select) / 10000;
        $scope.getCurrentBalanceInfo();
        $scope.currentMoney = $scope.currentBalance * $scope.real_money;
    }

    $scope.getAdminInfoForCharge = function()
    {
        for(var i=0; i<$rootScope.userInfo.paymentsetting.length; i++)
        {
            if($scope.payMethod_value == $rootScope.userInfo.paymentsetting[i].index)
                return $rootScope.userInfo.paymentsetting[i];
        }
    }

    $scope.showDialogForFillForm = function()
    {
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
            $scope.chargeForm_disable = true;
            $scope.disable_Charge = false;
            $scope.getBalanceInfo();
        });
    }

    $scope.showDialogForPayRequest = function()
    {
        $scope.disable_Charge = true;

        $rootScope.requestPay_Array = {}
        $rootScope.requestPay_Array.u_id = $rootScope.userInfo.userKey;
        $rootScope.requestPay_Array.u_game_money = $scope.moneyFromStrToInt($scope.money_select);
        $rootScope.requestPay_Array.sru_paygate = $scope.payMethod_value;
        if($scope.country_select == null)
        {
            $scope.showDialogForFillForm();
            return;
        }
        else
        {
            $rootScope.requestPay_Array.sru_country = $scope.country_select.value;
            $rootScope.requestPay_Array.u_money = Math.round($rootScope.requestPay_Array.u_game_money / 10000 * $scope.balances[parseInt($rootScope.requestPay_Array.sru_country)].balance);
        }

        if($scope.payType == 'auto')
        {
            $scope.sendPayRequest();
        }
        else
        {
            $scope.adminInfo = $scope.getAdminInfoForCharge();
            if($scope.payMethod_value == 10)
            {
                $rootScope.requestPay_Array.sru_bank_id = $scope.bank_ID;
                $rootScope.requestPay_Array.sru_bank_name = $scope.bank_Name;
                $rootScope.requestPay_Array.sru_bank_username = $scope.bank_UserName;
                if($rootScope.requestPay_Array.sru_bank_id == "" || $rootScope.requestPay_Array.sru_bank_name == "" || $rootScope.requestPay_Array.sru_bank_username == ""
                    || $rootScope.requestPay_Array.sru_bank_id == null || $rootScope.requestPay_Array.sru_bank_name == null || $rootScope.requestPay_Array.sru_bank_username == null)
                {
                    $scope.showDialogForFillForm();
                    return;
                }
                else
                {
                    $scope.disable_Charge = false;
                    $rootScope.chargesuccess = {}
                    $rootScope.chargesuccess.comment1 = $scope.adminInfo.bankname;
                    $rootScope.chargesuccess.comment2 = $scope.adminInfo.id;
                    $rootScope.chargesuccess.comment3 = $rootScope.requestPay_Array.u_game_money;
                    $rootScope.chargesuccess.comment4 = $rootScope.requestPay_Array.u_money;
                    $rootScope.chargesuccess.currency = $scope.currency;
                    $rootScope.chargesuccess.isuser = 1;
                    $rootScope.chargesuccess.comment5 = $scope.adminInfo.username;

                    $rootScope.modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'dialogs/ChargeSuccess.html',
                        controller: 'ChargeCtrl',
                        resolve: {
                        }
                    });
                    $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                        $scope.chargeForm_disable = true;
                        $scope.disable_Charge = false;
                        $scope.money_select = '100k';
                        $scope.getBalanceInfo();
                    });
                }

            }
            else
            {  
                $rootScope.requestPay_Array.sru_bank_id = $scope.bank_ID;
                $rootScope.requestPay_Array.sru_bank_pw = $scope.bank_pass;
                if($rootScope.requestPay_Array.sru_bank_id == "" || $rootScope.requestPay_Array.sru_bank_pw == "" || $rootScope.requestPay_Array.sru_bank_id == null || $rootScope.requestPay_Array.sru_bank_pw == null)
                {
                    $scope.showDialogForFillForm();
                    return;
                }
                else
                {
                    $scope.disable_Charge = false;
                    $rootScope.chargesuccess = {}
                    $rootScope.chargesuccess.comment1 = $scope.adminInfo.username;
                    $rootScope.chargesuccess.comment2 = $scope.adminInfo.id;
                    $rootScope.chargesuccess.comment3 = $rootScope.requestPay_Array.u_game_money;
                    $rootScope.chargesuccess.comment4 = $rootScope.requestPay_Array.u_money;
                    $rootScope.chargesuccess.currency = $scope.currency;
                    $rootScope.chargesuccess.isuser = 0;
                    $rootScope.chargesuccess.comment5 = "";

                    $rootScope.modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'dialogs/ChargeSuccess.html',
                        controller: 'ChargeCtrl',
                        resolve: {
                        }
                    });
                    $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
                        $scope.chargeForm_disable = true;
                        $scope.disable_Charge = false;
                        $scope.money_select = '100k';
                        $scope.getBalanceInfo();
                    });
                }
            }
        }
    }

    $scope.sendPayRequest = function()
    {
        if($scope.payType == 'auto')
        {
            $http.post($rootScope.serverUrl + '/autocharge', $rootScope.requestPay_Array).then(function(success) {
                if(success.data.result == "success")
                {
                    $scope.showChargeSuccessDialog();
                }
            });
        }
        else
        {
            $rootScope.modalInstance.close('cancel');
            if($rootScope.requestPay_Array.sru_paygate == 10)
            {
                console.log($rootScope.requestPay_Array);
                $http.post($rootScope.serverUrl + '/offlinecharge', $rootScope.requestPay_Array).then(function(success) {
                    if(success.data.result == "success")
                    {
                        $scope.showChargeSuccessDialog();
                    }
                });
            }
            else
            {  
                $http.post($rootScope.serverUrl + '/onlinecharge', $rootScope.requestPay_Array).then(function(success) {
                    if(success.data.result == "success")
                    {
                        $scope.showChargeSuccessDialog();
                    }
                });
            }
        }
    };

    $scope.showChargeSuccessDialog = function()
    {
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
            $scope.disable_Charge = false;
            $scope.money_select = '100k';
            $scope.getBalanceInfo();
        });
    }

    $rootScope.$on("ReGet_UserInfo", function(){
        $scope.Reget_userinfo();
    });

    $scope.Reget_userinfo = function()
    {
        $scope.temp_userInfo = {}
        $scope.temp_userInfo.u_id = $rootScope.userInfo.userKey;
        $http.post($rootScope.serverUrl + '/requestuserinfo', $scope.temp_userInfo).then(function(success) {
            if(success.data.result == "success")
            {
                $rootScope.userInfo = success.data;
                $rootScope.userInfo.userKey = $scope.temp_userInfo.u_id;
                $rootScope.is_logged = true;
                $localStorage.is_logged = 'in';
            }
        });
    }

    $scope.updateCountryList = function()
    {
        $scope.options = []
        $scope.payMethod_1 = false;
        $scope.payMethod_2 = false;
        $scope.payMethod_3 = false;
        $scope.payMethod_4 = false;
        $scope.payMethod_5 = false;
        for(var i=0; i<$rootScope.userInfo.availablepayment.length; i++)
        {
            if($rootScope.userInfo.availablepayment[i] == 10)
                $scope.payMethod_1 = true;
            else if($rootScope.userInfo.availablepayment[i] == 1)
                $scope.payMethod_5 = true;
            else if($rootScope.userInfo.availablepayment[i] == 2)
                $scope.payMethod_3 = true;
            else if($rootScope.userInfo.availablepayment[i] == 3)
                $scope.payMethod_2 = true;
            else if($rootScope.userInfo.availablepayment[i] == 4)
                $scope.payMethod_4 = true;
        }
        if($scope.payMethod_1 == true || $scope.payMethod_2 == true || $scope.payMethod_3 == true || $scope.payMethod_4 == true || $scope.payMethod_5 == true)
            $scope.options.push({label:$rootScope.translation.CHARGE_COUNTRY_CHINA,value:"0"});
        if($scope.payMethod_2 == true || $scope.payMethod_4 == true)
            $scope.options.push({label:$rootScope.translation.CHARGE_COUNTRY_KOREA,value:"1"});
        if($scope.payMethod_1 == true || $scope.payMethod_2 == true || $scope.payMethod_4 == true)
            $scope.options.push({label:$rootScope.translation.CHARGE_COUNTRY_OTHERS,value:"2"});

        if($scope.payMethod_1 == false && $scope.payMethod_2 == false && $scope.payMethod_3 == false && $scope.payMethod_4 == false && $scope.payMethod_5 == false)
            $scope.is_hidden = false;
        else
            $scope.is_hidden = true;
        $scope.country_select = $scope.options[0];
    }

    $scope.getCurrentBalanceInfo = function()
    {
        if($scope.country_select == null)
            return;
        if($scope.country_select.value == 0)
        {
            $scope.currentBalance = $scope.balances[0].balance;
            $scope.currency = "¥";
        }
        else if($scope.country_select.value == 1)
        {
            $scope.currentBalance = $scope.balances[1].balance;
            $scope.currency = "원";
        }
        else if($scope.country_select.value == 2)
        {
            $scope.currentBalance = $scope.balances[2].balance;
            $scope.currency = "$";
        }
    }

    $scope.show_bankname = false;
    $scope.show_pass = false;
    $scope.show_bankid = false;
    $scope.show_username = false;
    $scope.getBalanceInfo = function() {
        $scope.is_hidden = true;

        $scope.Reget_userinfo();

        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.userKey;

        $http.post($rootScope.serverUrl + '/requestbalanceinfo', $scope.tempData).then(function(success) {
            console.log(success);
            if(success.data.result == "success")
            {
                $scope.balances = success.data.balances;
                $scope.chargeForm_disable = false;
                $scope.payment_history = success.data.infos;

                $scope.updateCountryList();
                if($scope.payType == 'auto')
                {
                    $scope.FillAutoPayForm();
                    $scope.updatePayWaySelection();
                }
                else
                {
                    $scope.updatePayWaySelection();
                    $scope.selectFirstItem();
                    $scope.showInputForm();
                }

                $scope.getCurrentBalanceInfo();

                $scope.real_money = $scope.moneyFromStrToInt($scope.money_select) / 10000;
                $scope.currentMoney = $scope.currentBalance * $scope.real_money;
            }
        });
    };

    $scope.title_bankname = $rootScope.translation.CHARGE_BANKNAME;
    $scope.title_bankpass = $rootScope.translation.SET_WITHDRAW_DIALOG_PASSWORD;
    $scope.title_username = $rootScope.translation.CHARGE_USERNAME;

    $scope.showInputForm = function()
    {
        if($scope.payMethod_value == 10)
        {
            $scope.show_bankname = true;
            $scope.show_pass = false;
            $scope.show_bankid = true;
            $scope.show_username = true;

            $scope.title_bankid = $rootScope.translation.WITHDRAW_CARDNUMBER;
        }
        else
        {
            $scope.show_bankname = false;
            $scope.show_pass = true;
            $scope.show_bankid = true;
            $scope.show_username = false;

            $scope.title_bankid = $rootScope.translation.CHARGE_BANKID;
        }
    }

    $rootScope.$on("ReGetRechargeInfo", function(){
        $scope.getChargeRecord();
    });

    $scope.getChargeRecord = function()
    {
        $scope.num_record = 10;
        $scope.maxSize = 3;
        $scope.bigTotalItems = 10;
        $scope.bigCurrentPage = 1;

        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.userKey;

        $http.post($rootScope.serverUrl + '/rechargeinfo', $scope.tempData).then(function(success) {
            if(success.data.result == "success")
            {
                $rootScope.chargeRecords = success.data.record;
                $scope.bigTotalItems = 10*($rootScope.chargeRecords.length / $scope.num_record);
                $rootScope.totalChargeAmount = 0;
                for(var i=0; i<$rootScope.chargeRecords.length; i++)
                {
                    if($rootScope.chargeRecords[i].type == 1)
                        $rootScope.totalChargeAmount = parseInt($rootScope.totalChargeAmount) + parseInt($rootScope.chargeRecords[i].money);
                }
                for(var i=0; i<$rootScope.chargeRecords.length; i++)
                {
                    $rootScope.chargeRecords[i].showNumber = i+1;
                    $rootScope.chargeRecords[i].money = $scope.moneyFromIntToStr($rootScope.chargeRecords[i].money);

                    if($rootScope.chargeRecords[i].country == 0)
                    {
                        $rootScope.chargeRecords[i].country = $rootScope.translation.CHARGE_COUNTRY_CHINA;
                        $rootScope.chargeRecords[i].currency = '¥';
                    }
                    else if($rootScope.chargeRecords[i].country == 1)
                    {
                        $rootScope.chargeRecords[i].country = $rootScope.translation.CHARGE_COUNTRY_KOREA;
                        $rootScope.chargeRecords[i].currency = '원';
                    }
                    else if($rootScope.chargeRecords[i].country == 2)
                    {
                        $rootScope.chargeRecords[i].country = $rootScope.translation.CHARGE_COUNTRY_OTHERS;
                        $rootScope.chargeRecords[i].currency = '$';
                    }

                    var date1 = new Date();
                    var tempDate = Date.parse($rootScope.chargeRecords[i].time, "yyyy-MM-dd HH:mm:ss");
                    var date2 = new Date(tempDate);
                    var diff = (date1.getTime() - date2.getTime()) / 60000;

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
        });
    }

    $scope.onChangeRecord_Number = function()
    {
        $rootScope.sub_chargeRecords = []
        $scope.bigTotalItems = 10*($rootScope.chargeRecords.length / $scope.num_record);
        for(var j = ($scope.bigCurrentPage - 1) * $scope.num_record; j < $scope.bigCurrentPage * $scope.num_record; j ++)
        {
            if(j < $rootScope.chargeRecords.length)
                $rootScope.sub_chargeRecords.push($rootScope.chargeRecords[j]);
        }
    }

    $rootScope.$on("GetMoneyFromIntToStr", function(moneyInt){
        $scope.moneyFromIntToStr(moneyInt);
    });
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

    $rootScope.$on("GetMoneyFromStrToInt", function(moneyStr){
        console.log(moneyStr);
        $scope.moneyFromIntToStr(moneyStr);
    });
    $scope.moneyFromStrToInt = function(moneyStr)
    {
        if(moneyStr == '100k')
            return '100000';
        else if(moneyStr == '200k')
            return '200000';
        else if(moneyStr == '500k')
            return '500000';
        else if(moneyStr == '1M')
            return '1000000';
        else if(moneyStr == '2M')
            return '2000000';
        else if(moneyStr == '5M')
            return '5000000';
        else if(moneyStr == '10M')
            return '10000000';
        else if(moneyStr == '20M')
            return '20000000';
        else if(moneyStr == '50M')
            return '50000000';
        else if(moneyStr == '100M')
            return '100000000';
        else if(moneyStr == '200M')
            return '200000000';
        else if(moneyStr == '500M')
            return '500000000';
    }

    $scope.cancelCharge = function(record)
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.userKey;
        $scope.tempData.record_id = record.id;

        $http.post($rootScope.serverUrl + '/cancelrequest', $scope.tempData).then(function(success) {
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
                    $scope.getChargeRecord();
                });
            }
            else
                alert($rootScope.translation.CHARGE_CANCEL_ERROR);
        });
    }

    $scope.exitMsg = function()
    {
        $scope.chargeForm_disable = true;
        $scope.disable_Charge = false;
        $scope.money_select = '100k';
        $scope.getBalanceInfo();
        $scope.getChargeRecord();
        $rootScope.modalInstance.close('cancel');
    }
});



app.controller('WithdrawlCtrl', function ($scope, $rootScope, $http, $location, $uibModal, $log, $document) {

    if($rootScope.is_logged != true)
        $location.path('/');

    $scope.withdrawMethod_value = 10;

    $scope.onMoneyChange = function()
    {
        $rootScope.$emit("GetMoneyFromStrToInt", $scope.money_select);
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
    }

    $scope.setWithdrawlPass = function()
    {
        if($scope.pass.first == $scope.pass.second)
        {
            $scope.tempPassword = {}
            $scope.tempPassword.u_id = $rootScope.userInfo.userKey;
            $scope.tempPassword.u_withdrawlpw = $scope.pass.first;

            $http.post($rootScope.serverUrl + '/setwithdrawlpass', $scope.tempPassword).then(function(success) {
                if(success.data.result == "success")
                {
                    $rootScope.userInfo.user_withdrawlpw = 1;
                    $rootScope.modalInstance.close('cancel');
                }
            });
        }
        else
            alert($rootScope.translation.WITHDRAW_PASS_ERROR);
    }

    $scope.loginWithdrawPass = function()
    {
        $scope.tempPassword = {}
        $scope.tempPassword.u_id = $rootScope.userInfo.userKey;
        $scope.tempPassword.u_withdrawlpw = $scope.withdrawl_pass;

        $http.post($rootScope.serverUrl + '/withdrawlpasscode', $scope.tempPassword).then(function(success) {
            if(success.data.result == "success")
            {
                $rootScope.loginWithdrawResult = success.data;
                $rootScope.modalInstance.close('cancel');

                $scope.disable_Withdraw = false;
                $scope.Fill_Form_Info();
                $location.path( '/withdrawl' );
            }
            else
            {
                alert($rootScope.translation.WITHDRAW_PASS_ERROR);
            }
        });

    }
    $scope.resetWithdrawlPassword = function()
    {
        $rootScope.modalInstance.close('cancel');
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetWithdrawlPasswordDialog.html',
            controller: 'WithdrawlCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
        });
    }
    $scope.resetWithdrawlPass = function()
    {
        if($scope.resetpass.first == $scope.resetpass.second && $scope.resetpass.first != $scope.resetpass.old)
        {
            $scope.tempPassword = {}
            $scope.tempPassword.u_id = $rootScope.userInfo.userKey;
            $scope.tempPassword.u_withdrawlpwafter = $scope.resetpass.first;
            $scope.tempPassword.u_withdrawlpwbefore = $scope.resetpass.old;

            $http.post($rootScope.serverUrl + '/updatewithdrawlpass', $scope.tempPassword).then(function(success) {
                if(success.data.result == "success")
                {
                    $rootScope.modalInstance.close('cancel');
                }
            });
        }
    }

    $scope.Fill_Form_Info = function()
    {
        $scope.disable_Withdraw = false;

        if($rootScope.loginWithdrawResult.is_withdrawl == 0)
        {
            $scope.show_bankname = true;
            $scope.show_bankid = true;
            $scope.show_username = true;
            $scope.withdrawMethod_1 = true;
            $scope.withdrawMethod_2 = true;
            $scope.withdrawMethod_3 = true;
            $scope.withdrawMethod_4 = true;
            $scope.withdrawMethod_5 = true;
            $scope.offline_withdraw = false;
            $scope.is_saved = false;
            $scope.country_sel = $rootScope.translation.CHARGE_COUNTRY_CHINA;
            $scope.withdrawMethod_value = 10;
        }
        else
        {
            $scope.is_saved = true;
            $scope.offline_withdraw = true;
            if($rootScope.loginWithdrawResult.u_withdrawlmethod == 10)
            {
                $scope.withdrawMethod_1 = true;
                $scope.withdrawMethod_value = 10;
            }
            else if($rootScope.loginWithdrawResult.u_withdrawlmethod == 3)
            {
                $scope.withdrawMethod_2 = true;
                $scope.withdrawMethod_value = 3;
            }
            else if($rootScope.loginWithdrawResult.u_withdrawlmethod == 2)
            {
                $scope.withdrawMethod_3 = true;
                $scope.withdrawMethod_value = 2;
            }
            else if($rootScope.loginWithdrawResult.u_withdrawlmethod == 4)
            {
                $scope.withdrawMethod_4 = true;
                $scope.withdrawMethod_value = 4;
            }
            else if($rootScope.loginWithdrawResult.u_withdrawlmethod == 1)
            {
                $scope.withdrawMethod_5 = true;
                $scope.withdrawMethod_value = 1;
            }

            if($rootScope.loginWithdrawResult.u_withdrawlcountry == 0)
                $scope.country_sel = $rootScope.translation.CHARGE_COUNTRY_CHINA;
            else if($rootScope.loginWithdrawResult.u_withdrawlcountry == 1)
                $scope.country_sel = $rootScope.translation.CHARGE_COUNTRY_KOREA;
            else
                $scope.country_sel = $rootScope.translation.CHARGE_COUNTRY_OTHERS;
            $scope.bank_Name = $rootScope.loginWithdrawResult.u_withdrawlbank;
            $scope.bank_UserName = $rootScope.loginWithdrawResult.u_withdrawlbankname;
            $scope.bank_ID = $rootScope.loginWithdrawResult.u_withdrawlid;
        }

        $rootScope.$emit("ReGet_UserInfo", {});

        $scope.requestBalance = {}
        $scope.requestBalance.u_id = $rootScope.userInfo.userKey;
        $http.post($rootScope.serverUrl + '/onlybalance', $scope.requestBalance).then(function(success) {
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
            }
        });
        $scope.showInputForm();
    }

    $scope.onCountryChange_w = function(country_sel)
    {
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
            $scope.currentBalance = $scope.balances[0].balance;
            $scope.currency = "¥";
        }
        else if($scope.country_sel == $rootScope.translation.CHARGE_COUNTRY_KOREA)
        {
            $scope.withdrawMethod_value = 10;
            $scope.withdrawMethod_1 = true;
            $scope.withdrawMethod_2 = false;
            $scope.withdrawMethod_3 = true;
            $scope.withdrawMethod_4 = false;
            $scope.withdrawMethod_5 = true;
            $scope.currentBalance = $scope.balances[1].balance;
            $scope.currency = "원";
        }
        else if($scope.country_sel == $rootScope.translation.CHARGE_COUNTRY_OTHERS)
        {
            $scope.withdrawMethod_value = 2;
            $scope.withdrawMethod_1 = false;
            $scope.withdrawMethod_2 = false;
            $scope.withdrawMethod_3 = true;
            $scope.withdrawMethod_4 = false;
            $scope.withdrawMethod_5 = true;
            $scope.currentBalance = $scope.balances[2].balance;
            $scope.currency = "$";
        }
        $scope.showInputForm();
    }

    $scope.sendWithdrawRequest = function()
    {
        $scope.disable_Withdraw = true;
        $scope.requestWithdraw_Array = {}
        $scope.requestWithdraw_Array.u_id = $rootScope.userInfo.userKey;

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
            $scope.requestWithdraw_Array.u_money = $scope.requestWithdraw_Array.u_game_money / 10000 * $scope.balances[0].balance;
        }
        else if($scope.country_sel == $rootScope.translation.CHARGE_COUNTRY_KOREA)
        {
            $scope.requestWithdraw_Array.u_withdrawlcountry = 1;
            $scope.requestWithdraw_Array.u_money = $scope.requestWithdraw_Array.u_game_money / 10000 * $scope.balances[1].balance;
        }
        else
        {
            $scope.requestWithdraw_Array.u_withdrawlcountry = 2;
            $scope.requestWithdraw_Array.u_money = $scope.requestWithdraw_Array.u_game_money / 10000 * $scope.balances[2].balance;
        }

        if($rootScope.userInfo.user_balance > $scope.requestWithdraw_Array.u_game_money)
        {
            if($scope.requestWithdraw_Array.u_withdrawlmethod == 10)
            {
                $scope.requestWithdraw_Array.u_withdrawlbank = $scope.bank_Name;  
                $scope.requestWithdraw_Array.u_withdrawlbankname = $scope.bank_UserName; 
                if($scope.requestWithdraw_Array.u_withdrawlid != "" && $scope.requestWithdraw_Array.u_withdrawlbank != "" && $scope.requestWithdraw_Array.u_withdrawlbankname != "")
                {
                    $http.post($rootScope.serverUrl + '/requestwithdrawl', $scope.requestWithdraw_Array).then(function(success) {
                        if(success.data.result == "success")
                        {
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
                                $scope.disable_Withdraw = false;
                                $scope.Fill_Form_Info();
                                $scope.getWithdrawRecord();
                            });
                        }
                    });
                }
            }
            else
            {
                if($scope.requestWithdraw_Array.u_withdrawlid != null)
                {
                    $http.post($rootScope.serverUrl + '/requestwithdrawl', $scope.requestWithdraw_Array).then(function(success) {
                        if(success.data.result == "success")
                        {
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
                                $scope.disable_Withdraw = false;
                                $scope.Fill_Form_Info();
                                $scope.getWithdrawRecord();
                            });
                        }
                    });
                }
            }
        }
        else
        {
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
                $scope.disable_Withdraw = false;
                $scope.Fill_Form_Info();
                $scope.getWithdrawRecord();
            });
        }
    }

    $scope.showInputForm = function()
    {
        if($scope.withdrawMethod_value == 10)
        {
            $scope.show_bankname = true;
            $scope.show_bankid = true;
            $scope.show_username = true;

            $scope.title_bankname = $rootScope.translation.CHARGE_BANKNAME;
            $scope.title_bankid = $rootScope.translation.WITHDRAW_CARDNUMBER;
            $scope.title_bankpass = $rootScope.translation.SET_WITHDRAW_DIALOG_PASSWORD;
            $scope.title_username = $rootScope.translation.CHARGE_USERNAME;
        }
        else
        {
            $scope.show_bankname = false;
            $scope.show_bankid = true;
            $scope.show_username = false;

            $scope.title_bankid = "ID";
        }
    }

    $scope.getWithdrawRecord = function()
    {
        $scope.num_record = 10;
        $scope.maxSize = 3;
        $scope.bigTotalItems = 10;
        $scope.bigCurrentPage = 1;

        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.userKey;

        $http.post($rootScope.serverUrl + '/withdrawlinfo', $scope.tempData).then(function(success) {
            if(success.data.result == "success")
            {
                $rootScope.withdrawRecords = success.data.record;
                $scope.bigTotalItems = 10*($rootScope.withdrawRecords.length / $scope.num_record);
                $rootScope.totalWithdrawAmount = 0;
                for(var i=0; i<$rootScope.withdrawRecords.length; i++)
                {
                    if($rootScope.withdrawRecords[i].type == 1)
                        $rootScope.totalWithdrawAmount = parseInt($rootScope.totalWithdrawAmount) + parseInt($rootScope.withdrawRecords[i].money);
                }
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
        $scope.tempData.u_id = $rootScope.userInfo.userKey;
        $scope.tempData.record_id = record.id;

        $http.post($rootScope.serverUrl + '/cancelrequest', $scope.tempData).then(function(success) {
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
        if($rootScope.loginWithdrawResult != null)
            $scope.Fill_Form_Info();
        $scope.getWithdrawRecord();
        $rootScope.modalInstance.close('cancel');
    }
});

app.controller("AlertCtrl", function ($scope, $rootScope) {
    $scope.exitMsg = function()
    {
        $rootScope.modalInstance.close('cancel');
    }
});

app.controller("PocketCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    if($rootScope.is_logged != true)
        $location.path('/');

    $scope.loginPocketPass = function()
    {
        $scope.tempPassword = {}
        $scope.tempPassword.u_id = $rootScope.userInfo.userKey;
        $scope.tempPassword.u_pocketpw = $scope.pocket_pass;

       $http.post($rootScope.serverUrl + '/pocketpasscode', $scope.tempPassword).then(function(success) {
            if(success.data.result == "success")
            {
                $rootScope.modalInstance.close('cancel');
                $location.path( '/pocket' );
            }
            else
                alert($rootScope.translation.WITHDRAW_PASS_ERROR);
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
        });
    }

    $scope.resetPocketPassFunc = function()
    {
        if($scope.reset_pocketpass_first == $scope.reset_pocketpass_second && $scope.reset_pocketpass_first != $scope.reset_pocketpass_old)
        {
            $scope.tempPassword = {}
            $scope.tempPassword.u_id = $rootScope.userInfo.userKey;
            $scope.tempPassword.u_pocketpw = $scope.reset_pocketpass_first;
            $scope.tempPassword.passbefore = $scope.reset_pocketpass_old;

            $http.post($rootScope.serverUrl + '/updatepocketpass', $scope.tempPassword).then(function(success) {
                if(success.data.result == "success")
                {
                    $rootScope.modalInstance.close('cancel');
                }
            });
        }
        else
            alert($rootScope.translation.WITHDRAW_PASS_ERROR);
    }

    $scope.setPocketPassFunc = function()
    {
        if($scope.pocketpass.first == $scope.pocketpass.second && $scope.pocketpass.first != null && $scope.pocketpass.first != "")
        {
            $scope.tempPassword = {}
            $scope.tempPassword.u_id = $rootScope.userInfo.userKey;
            $scope.tempPassword.u_pocketpw = $scope.pocketpass.first;

            $http.post($rootScope.serverUrl + '/setpocketpass', $scope.tempPassword).then(function(success) {
                if(success.data.result == "success")
                {
                    $rootScope.userInfo.user_pocketpw = 1;
                    $rootScope.modalInstance.close('cancel');
                }
            });
        }
        else
            alert($rootScope.translation.WITHDRAW_PASS_ERROR);
    }

    $scope.sendPocketDraw = function()
    {
        $scope.depositPocket = {}
        $scope.depositPocket.u_id = $rootScope.userInfo.userKey;
        $scope.depositPocket.money_change = $scope.pocket_money;
        $scope.depositPocket.change_way = 1;

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
            });
        }
        else
        {
            $http.post($rootScope.serverUrl + '/requestpocketchange', $scope.depositPocket).then(function(success) {
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
                    });
                }
            });
        }
    }

    $scope.sendPocketDeposit = function()
    {
        $scope.depositPocket = {}
        $scope.depositPocket.u_id = $rootScope.userInfo.userKey;
        $scope.depositPocket.money_change = $scope.pocket_money;
        $scope.depositPocket.change_way = 0;

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
            });
        }
        else
        {
            $http.post($rootScope.serverUrl + '/requestpocketchange', $scope.depositPocket).then(function(success) {
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
                    });
                }
            });
        }

        
    }

    $scope.exitMsg = function()
    {
        $rootScope.modalInstance.close('cancel');
    }

});

app.controller("RecordCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    if($rootScope.is_logged != true)
        $location.path('/');

    $scope.maxSize = 3;
    $scope.bigTotalItems = 10;
    $scope.bigCurrentPage = 1;
    $scope.flag_page = 1;
    $scope.num_per_page = 10;

    $scope.pageChanged = function() {
        $scope.onChangeNum_perPage($scope.bigCurrentPage);
    };

    $scope.onChangeNum_perPage = function(nowPage) {
        if($scope.flag_page == 1)
            $scope.getGameRecord(nowPage, $scope.num_per_page);
        else if($scope.flag_page == 2)
            $scope.getRechargeRecord(nowPage, $scope.num_per_page);
        else if($scope.flag_page == 3)
            $scope.getWithdrawalsRecord(nowPage, $scope.num_per_page);
    };

    $scope.getRechargeRecord = function(page_number, page_limit)
    {
        $scope.bigCurrentPage = page_number;
        $scope.tempRecharge = {}
        $scope.tempRecharge.u_id = $rootScope.userInfo.userKey;
        $scope.tempRecharge.page_number = page_number - 1;
        $scope.tempRecharge.page_limit = page_limit;
        $scope.chargeRecords = {}

        $http.post($rootScope.serverUrl + '/rechargerecord', $scope.tempRecharge).then(function(success) {
            if(success.data.result == "success")
            {
                $scope.chargeRecords = success.data.record;
                for(var i=0; i<$scope.chargeRecords.length; i++)
                {
                    if($rootScope.currentLanguage == 'ko')
                    {
                        if($scope.chargeRecords[i].type == 1)
                            $scope.chargeRecords[i].type = "요청";
                        else if($scope.chargeRecords[i].type == 2)
                            $scope.chargeRecords[i].type = "승인";
                        else
                            $scope.chargeRecords[i].type = "취소";
                        $scope.chargeRecords[i].comments = $scope.chargeRecords[i].bank + "를 통해서 ID : " + $scope.chargeRecords[i].ID + "로 " + $scope.formatNumbers($scope.chargeRecords[i].money) + "를 충전" + $scope.chargeRecords[i].type + "하였습니다.";
                    }
                    else if($rootScope.currentLanguage == 'en')
                    {
                        if($scope.chargeRecords[i].type == 1)
                            $scope.chargeRecords[i].type = "Requested to charge ";
                        else if($scope.chargeRecords[i].type == 2)
                            $scope.chargeRecords[i].type = "Accepted to charge ";
                        else
                            $scope.chargeRecords[i].type = "Canceled to charge ";
                        $scope.chargeRecords[i].comments = $scope.chargeRecords[i].type + $scope.formatNumbers($scope.chargeRecords[i].money) + " with ID: " + $scope.chargeRecords[i].ID + " through " + $scope.chargeRecords[i].bank + ".";
                    }
                    else if($rootScope.currentLanguage == 'cn')
                    {
                        if($scope.chargeRecords[i].type == 1)
                        {
                            $scope.chargeRecords[i].type1 = ".";
                            $scope.chargeRecords[i].type2 = " 申请 充值 ";
                        }
                        else if($scope.chargeRecords[i].type == 2)
                        {
                            $scope.chargeRecords[i].type1 = " 提现成功.";
                            $scope.chargeRecords[i].type2 = " 申请的充值 ";
                        }
                        else
                        {
                            $scope.chargeRecords[i].type1 = " 提现已取消.";
                            $scope.chargeRecords[i].type2 = " 申请的充值 ";
                        }
                        $scope.chargeRecords[i].comments = "ID: " + $scope.chargeRecords[i].ID + " 用" + $scope.chargeRecords[i].bank + $scope.chargeRecords[i].type2 + $scope.formatNumbers($scope.chargeRecords[i].money) + $scope.chargeRecords[i].type1;
                    }
                }
                $scope.bigTotalItems = success.data.totalcount * (10 / $scope.num_per_page);
                $scope.flag_page = 2;
            }
        });
    }

    $scope.getWithdrawalsRecord = function(page_number, page_limit)
    {
        $scope.bigCurrentPage = page_number;
        $scope.tempRecharge = {}
        $scope.tempRecharge.u_id = $rootScope.userInfo.userKey;
        $scope.tempRecharge.page_number = page_number - 1;
        $scope.tempRecharge.page_limit = page_limit;
        $scope.withdrawRecords = {}

        $http.post($rootScope.serverUrl + '/withdrawlrecord', $scope.tempRecharge).then(function(success) {
            if(success.data.result == "success")
            {
                $scope.withdrawRecords = success.data.record;
                for(var i=0; i<$scope.withdrawRecords.length; i++)
                {
                    if($rootScope.currentLanguage == 'ko')
                    {
                        if($scope.withdrawRecords[i].type == 1)
                            $scope.withdrawRecords[i].type = "요청";
                        else if($scope.withdrawRecords[i].type == 2)
                            $scope.withdrawRecords[i].type = "승인";
                        else
                            $scope.withdrawRecords[i].type = "취소";
                        $scope.withdrawRecords[i].comments = $scope.withdrawRecords[i].bank + "를 통해서 ID : " + $scope.withdrawRecords[i].ID + "로 " + $scope.formatNumbers($scope.withdrawRecords[i].money) + "를 환전" + $scope.withdrawRecords[i].type + "하였습니다.";
                    }
                    else if($rootScope.currentLanguage == 'en')
                    {
                        if($scope.withdrawRecords[i].type == 1)
                            $scope.withdrawRecords[i].type = "Requested to withdraw ";
                        else if($scope.withdrawRecords[i].type == 2)
                            $scope.withdrawRecords[i].type = "Accepted to withdraw ";
                        else
                            $scope.withdrawRecords[i].type = "Canceled to withdraw ";
                        $scope.withdrawRecords[i].comments = $scope.withdrawRecords[i].type + $scope.formatNumbers($scope.withdrawRecords[i].money) + " with ID: " + $scope.withdrawRecords[i].ID + " through " + $scope.withdrawRecords[i].bank + ".";
                    }
                    else if($rootScope.currentLanguage == 'cn')
                    {
                        if($scope.withdrawRecords[i].type == 1)
                        {
                            $scope.withdrawRecords[i].type1 = ".";
                            $scope.withdrawRecords[i].type2 = " 申请 充值 ";
                        }
                        else if($scope.withdrawRecords[i].type == 2)
                        {
                            $scope.withdrawRecords[i].type1 = " 充值成功.";
                            $scope.withdrawRecords[i].type2 = " 申请的充值 ";
                        }
                        else
                        {
                            $scope.withdrawRecords[i].type1 = " 充值已取消.";
                            $scope.withdrawRecords[i].type2 = " 申请的充值 ";
                        }
                        $scope.withdrawRecords[i].comments = "ID: " + $scope.withdrawRecords[i].ID + " 用" + $scope.withdrawRecords[i].bank + $scope.withdrawRecords[i].type2 + $scope.formatNumbers($scope.withdrawRecords[i].money) + $scope.withdrawRecords[i].type1;
                    }
                }
                $scope.bigTotalItems = success.data.totalcount * (10 / $scope.num_per_page);
                $scope.flag_page = 3;
            }
        });
    }

    $scope.formatNumbers = function(num){
        var n = num.toString(), p = n.indexOf('.');
        return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
            return p<0 || i<p ? ($0+',') : $0;
        });
    }

    $scope.getGameRecord = function(page_number, page_limit)
    {
        $scope.bigCurrentPage = page_number;
        $scope.tempRecharge = {}
        $scope.tempRecharge.u_id = $rootScope.userInfo.userKey;
        $scope.tempRecharge.page_number = page_number - 1;
        $scope.tempRecharge.page_limit = page_limit;
        $scope.gameRecords = []

        $http.post($rootScope.serverUrl + '/gamerecord', $scope.tempRecharge).then(function(success) {
            if(success.data.result == "success")
            {
                $scope.gameRecords = success.data.record;
                for(var i=0; i<$scope.gameRecords.length; i++)
                {
                    if($rootScope.currentLanguage == 'ko')
                    {
                        if($scope.gameRecords[i].type == 1)
                            $scope.gameRecords[i].type = "이겼";
                        else
                            $scope.gameRecords[i].type = "졌";
                        $scope.gameRecords[i].comments = "당신이 " + $scope.gameRecords[i].gamename + "에서 " + $scope.formatNumbers($scope.gameRecords[i].money) + " " + $scope.gameRecords[i].type + "습니다.";
                    }
                    else if($rootScope.currentLanguage == 'en')
                    {
                        if($scope.gameRecords[i].type == 1)
                            $scope.gameRecords[i].type = "win ";
                        else
                            $scope.gameRecords[i].type = "lose ";
                        $scope.gameRecords[i].comments = "You " + $scope.gameRecords[i].type + $scope.formatNumbers($scope.gameRecords[i].money) + " in " + $scope.gameRecords[i].gamename + ".";
                    }
                    else if($rootScope.currentLanguage == 'cn')
                    {
                        if($scope.gameRecords[i].type == 1)
                            $scope.gameRecords[i].type = "이겼";
                        else
                            $scope.gameRecords[i].type = "졌";
                        $scope.gameRecords[i].comments = "당신이 " + $scope.gameRecords[i].gamename + "에서 " + $scope.formatNumbers($scope.gameRecords[i].money) + " " + $scope.gameRecords[i].type + "습니다.";
                    }
                }
                $scope.bigTotalItems = success.data.totalcount * (10 / $scope.num_per_page);
                $scope.flag_page = 1;
            }
        });
    }
});

app.controller("MessageCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    if($rootScope.is_logged != true)
        $location.path('/');

    $scope.maxSize = 3;
    $scope.bigTotalItems = 10;
    $scope.bigCurrentPage = 1;
    $scope.flag_page = 1;
    $scope.num_per_page = 10;

    $scope.pageChanged = function() {
        $scope.onChangeNum_perPage($scope.bigCurrentPage);
    };

    $scope.onChangeNum_perPage = function(nowPage) {
        if($scope.flag_page == 1)
            $scope.getRechargeMessage(nowPage, $scope.num_per_page);
        else if($scope.flag_page == 2)
            $scope.getWithdrawalsMessage(nowPage, $scope.num_per_page);
        else if($scope.flag_page == 3)
            $scope.getSystemMessage(nowPage, $scope.num_per_page);
        else if($scope.flag_page == 4)
            $scope.getOtherMessage(nowPage, $scope.num_per_page);
        else if($scope.flag_page == 5)
            $scope.getQuestionMessage(nowPage, $scope.num_per_page);
    };

    $scope.getRechargeMessage = function(page_number, page_limit)
    {
        $scope.flag_page = 1;
        $scope.bigCurrentPage = page_number;

        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.userKey;
        $scope.temp_myID.page_number = page_number - 1;
        $scope.temp_myID.page_limit = page_limit;
        $scope.messageList = {}

        $http.post($rootScope.serverUrl + '/rechargemessage', $scope.temp_myID).then(function(success) {
            if(success.data.result == "success")
            {
                $scope.messageList = success.data.messages;
                $scope.bigTotalItems = success.data.totalcount * (10 / $scope.num_per_page);
            }
        });
    }

    $scope.getWithdrawalsMessage = function(page_number, page_limit)
    {
        $scope.flag_page = 2;
        $scope.bigCurrentPage = page_number;
        
        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.userKey;
        $scope.temp_myID.page_number = page_number - 1;
        $scope.temp_myID.page_limit = page_limit;
        $scope.messageList = {}

        $http.post($rootScope.serverUrl + '/withdrawlmessage', $scope.temp_myID).then(function(success) {
            if(success.data.result == "success")
            {
                $scope.messageList = success.data.messages;
                $scope.bigTotalItems = success.data.totalcount * (10 / $scope.num_per_page);
            }
        });

    }

    $scope.getSystemMessage = function(page_number, page_limit)
    {
        $scope.flag_page = 3;
        $scope.bigCurrentPage = page_number;

        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.userKey;
        $scope.temp_myID.page_number = page_number - 1;
        $scope.temp_myID.page_limit = page_limit;
        $scope.messageList = {}

        $http.post($rootScope.serverUrl + '/systemmessage', $scope.temp_myID).then(function(success) {
            if(success.data.result == "success")
            {
                $scope.messageList = success.data.messages;
                $scope.bigTotalItems = success.data.totalcount * (10 / $scope.num_per_page);
            }
        });
    }

    $scope.getOtherMessage = function(page_number, page_limit)
    {
        $scope.flag_page = 4;
        $scope.bigCurrentPage = page_number;

        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.userKey;
        $scope.temp_myID.page_number = page_number - 1;
        $scope.temp_myID.page_limit = page_limit;
        $scope.messageList = {}

        $http.post($rootScope.serverUrl + '/othermessage', $scope.temp_myID).then(function(success) {
            if(success.data.result == "success")
            {
                $scope.messageList = success.data.messages;
                $scope.bigTotalItems = success.data.totalcount * (10 / $scope.num_per_page);
            }
        });
    }

    $scope.getQuestionMessage = function(page_number, page_limit)
    {
        $scope.flag_page = 5;
        $scope.bigCurrentPage = page_number;
        $scope.sub_Records = []

        $scope.temp_myID = {}
        $scope.temp_myID.u_id = $rootScope.userInfo.userKey;
        $scope.questionMessage = {}

        $http.post($rootScope.serverUrl + '/requestfeedback', $scope.temp_myID).then(function(success) {
            if(success.data.result == "success")
            {
                $scope.questionMessage = success.data.messages;
                $scope.bigTotalItems = success.data.count * (10 / $scope.num_per_page);

                for(var j = ($scope.bigCurrentPage - 1) * $scope.num_per_page; j < $scope.bigCurrentPage * $scope.num_per_page; j ++)
                {
                    if(j < $scope.questionMessage.length)
                        $scope.sub_Records.push($scope.questionMessage[j]);
                }
            }
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
        });
    }

    $scope.sendNewQuestion = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.userKey;
        $scope.tempData.m_title = $scope.question_title;
        $scope.tempData.m_content = $scope.question_content;

        if($scope.question_type == $rootScope.translation.NEW_OPINION_TYPE1)
            $scope.tempData.m_category = 0;
        else
            $scope.tempData.m_category = 1;

        $http.post($rootScope.serverUrl + '/uploadopinion', $scope.tempData).then(function(success) {
            if(success.data.result == "success")
            {
                $rootScope.modalInstance.close('cancel');
            }
        });
    }

    $scope.exitMsg = function()
    {
        $rootScope.modalInstance.close('cancel');
    }
});

app.controller("DownloadCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {
    
    if($rootScope.is_logged != true)
        $location.path('/');

    $scope.flag_gameList = 0;

    $scope.all_game = function()
    {
        $scope.flag_gameList = 0;
        $scope.getGameList();
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
            $scope.gameLists = success.data.games;
            if($scope.flag_gameList == 0)
            {
                $scope.show_gameList = $scope.gameLists;
                $scope.card_games = [];
                $scope.orak_games = [];
                $scope.sport_games = [];
                $scope.horse_games = [];
                $scope.live_games = [];
                for(var i=0; i<$scope.gameLists.length; i++)
                {
                    if($scope.gameLists[i].game_category == 1)
                        $scope.card_games.push($scope.gameLists[i]);
                    else if($scope.gameLists[i].game_category == 2)
                        $scope.orak_games.push($scope.gameLists[i]);
                    else if($scope.gameLists[i].game_category == 3)
                        $scope.sport_games.push($scope.gameLists[i]);
                    else if($scope.gameLists[i].game_category == 4)
                        $scope.horse_games.push($scope.gameLists[i]);
                    else if($scope.gameLists[i].game_category == 5)
                        $scope.live_games.push($scope.gameLists[i]);
                }
            }
            else
            {
                for(var i=0; i<$scope.gameLists.length; i++)
                {
                    if($scope.gameLists[i].game_category == $scope.flag_gameList)
                        $scope.show_gameList.push($scope.gameLists[i]);
                }
            }
        });
    }
    
    $scope.search_Games = function()
    {
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
            else if($rootScope.currentLanguage == 'cn')
            {
                if($scope.gameLists[i].gamename.ga_ch.indexOf($scope.game_search) !== -1)
                    $scope.show_gameList.push($scope.gameLists[i]);
            }
        }
    }
});

app.controller("ProfileCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    if($rootScope.is_logged != true)
        $location.path('/');

    $scope.resetWithdrawlPassword = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetWithdrawlPasswordDialog.html',
            controller: 'WithdrawlCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
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
        });
    }

    $scope.resetUserPassword = function()
    {
        $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dialogs/ResetUserPasswordDialog.html',
            controller: 'ProfileCtrl',
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
        });
    }

    $scope.resetUserPassFunc = function()
    {
        if($scope.reset_userpass_first == $scope.reset_userpass_second && $scope.reset_userpass_first != $scope.reset_userpass_old)
        {
            $scope.tempPassword = {}
            $scope.tempPassword.u_id = $rootScope.userInfo.userKey;
            $scope.tempPassword.passbefore = $scope.reset_userpass_old;
            $scope.tempPassword.u_pw = $scope.reset_userpass_first;

            $http.post($rootScope.serverUrl + '/updateuserpassword', $scope.tempPassword).then(function(success) {
                if(success.data.result == "success")
                {
                    $rootScope.modalInstance.close('cancel');
                }
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
        });
    }

    $scope.resetUserInfoFunc = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.userKey;
        $scope.tempData.u_loginip = $scope.reset_loginip;

        $http.post($rootScope.serverUrl + '/updateuserinfo', $scope.tempData).then(function(success) {
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
        });
    }

    $scope.send_verifyCode = function()
    {
        $scope.is_resetEmail = true;
        if($scope.btn_name == $rootScope.translation.RESET_USER_EMAIL_SEND_CODE)
        {
            $scope.tempData = {}
            $scope.tempData.u_email = $scope.reset_email;

            $http.post($rootScope.serverUrl + '/useremailcheck', $scope.tempData).then(function(success) {
                if(success.data.result == 'success')
                {
                    $scope.path_resetEmail = "img/img_check.png";

                    $scope.tempData_ = {}
                    $scope.tempData_.u_id = $rootScope.userInfo.userKey;
                    $scope.tempData_.verify_way = 0;
                    $scope.tempData_.address = $scope.reset_email;

                    $http.post($rootScope.serverUrl + '/sendverifycode', $scope.tempData_).then(function(success) {
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
            $scope.tempData.u_id = $rootScope.userInfo.userKey;
            $scope.tempData.verify_code = $scope.reset_code;
            $scope.tempData.v_flag = 1;

            $http.post($rootScope.serverUrl + '/verifycode', $scope.tempData).then(function(success) {
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
        $scope.tempData.u_id = $rootScope.userInfo.userKey;
        $scope.tempData.u_email = $scope.reset_email;

        $http.post($rootScope.serverUrl + '/updateuserinfo', $scope.tempData).then(function(success) {
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

            $http.post($rootScope.serverUrl + '/userphonecheck', $scope.tempData).then(function(success) {
                if(success.data.result == 'success')
                {
                    $scope.path_resetMobile = "img/img_check.png";

                    $scope.tempData_ = {}
                    $scope.tempData_.u_id = $rootScope.userInfo.userKey;
                    $scope.tempData_.verify_way = 1;
                    $scope.tempData_.address = $scope.reset_mobile;

                    $http.post($rootScope.serverUrl + '/sendverifycode', $scope.tempData_).then(function(success) {
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
            $scope.tempData.u_id = $rootScope.userInfo.userKey;
            $scope.tempData.verify_code = $scope.reset_code;
            $scope.tempData.v_flag = 1;

            $http.post($rootScope.serverUrl + '/verifycode', $scope.tempData).then(function(success) {
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
        $scope.tempData.u_id = $rootScope.userInfo.userKey;
        $scope.tempData.u_phone = $scope.reset_mobile;

        $http.post($rootScope.serverUrl + '/updateuserinfo', $scope.tempData).then(function(success) {
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
            resolve: {}
        });
        $rootScope.modalInstance.result.then(function (selectedItem) {}, function () {
        });
    }

    $scope.getAllPhotos = function()
    {
        $http.post($rootScope.resource_Url + '/requestphotos').then(function(success) {
            $scope.photoAvatar = {}
            $scope.photoAvatar = success.data.photos;
        });
    }

    $scope.selectPhoto = function(photo_value)
    {
        $scope.photo_value　= photo_value;
    }

    $scope.resetUserPhotoFunc = function()
    {
        if($scope.photo_value　!= null)
        {
            $scope.tempData = {}
            $scope.tempData.u_id = $rootScope.userInfo.userKey;
            $scope.tempData.u_photoindex = $scope.photo_value;

            $http.post($rootScope.serverUrl + '/updateuserphoto', $scope.tempData).then(function(success) {
                if(success.data.result == 'success')
                {
                    $rootScope.userInfo.user_photo = success.data.photourl;
                    $rootScope.modalInstance.close('cancel');
                }
            });
        }
    }

    if($rootScope.userInfo.u_verifyflag == 1)
        $scope.userVerify = true;
    else
        $scope.userVerify = false;
    $scope.changeUserVerification = function()
    {
        $scope.tempData = {}
        $scope.tempData.u_id = $rootScope.userInfo.userKey;
        if($scope.userVerify == true)
            $scope.tempData.verify_status = 1;
        else
            $scope.tempData.verify_status = 0;
        $http.post($rootScope.serverUrl + '/changeverifystatus', $scope.tempData).then(function(success) {
            if(success.data.result == 'success')
            {
                if($scope.userVerify == true)
                    $rootScope.userInfo.u_verifyflag = 1;
                else
                    $rootScope.userInfo.u_verifyflag = 0;
            }
        });

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
            if(success.data.result == 'success')
            {
                $scope.bigTotalItems = success.data.count;
                $rootScope.showBills = success.data.bbs;
                for(var i=0; i<$scope.num_bill; i++)
                {
                    if($rootScope.showBills[i] != null)
                        $rootScope.showBills[i].showNumber = i+1;
                }
            }
        });
    };


    $scope.onChangeBillBoard_Number = function() {
        $scope.onChangeBillBoard_Category();
    };

    $scope.onChangeBillBoard_Category = function()
    {
        $scope.tempData = {};
        $scope.tempData.page_number = $scope.bigCurrentPage - 1;
        $scope.tempData.count = $scope.num_bill;
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
            if(success.data.result == 'success')
            {
                $scope.bigTotalItems = 10 * (success.data.count/$scope.num_bill);
                $rootScope.showBills = success.data.bbs;
                for(var i=0; i<$scope.num_bill; i++)
                {
                    if(i < $rootScope.showBills.length)
                        $rootScope.showBills[i].showNumber = ($scope.bigCurrentPage-1)*$scope.num_bill+i+1;
                }
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
        $scope.tempData.u_id = $rootScope.userInfo.userKey;
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

        $http.post($rootScope.billBoard_Url + '/uploadbbs', $scope.tempData).then(function(success) {
            if(success.data.result == "success")
            {
                $scope.getInitBills();
                $rootScope.modalInstance.close('cancel');
            }
        });
    }

    $scope.uploadNewImage = function()
    {
        Upload.upload({
            url: $rootScope.resource_Url + '/uploadbbsimage',
            data: {file: $scope.tempFile}            
            }).progress(function(e) {
            }).then(function(data) {
                if(data.data.result == 'success')
                {
                    $scope.bill_content = $scope.bill_content + '<img src="' + data.data.img_url +'" >';
                }
        });
    }


    $scope.selectNewImage = function($files)
    {
        $scope.tempFile = $files[0];
    }

    $scope.showBillComments = function(one_bill)
    {
        $rootScope.selected_bill = one_bill;
        $location.path('/billcomment');
    }

    $scope.getInitBillComments = function()
    {
        $scope.tempData = {}
        $scope.tempData.bbs_id = $rootScope.selected_bill.id;
        $scope.tempData.category = $rootScope.selected_bill.category;

        $http.post($rootScope.billBoard_Url + '/requestbbsdetail', $scope.tempData).then(function(success) {
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
            });            
        }
    }

    $scope.sendNewBillComment = function()
    {
        if($scope.comment_content != null)
        {
            $scope.tempData = {}
            $scope.tempData.u_id = $rootScope.userInfo.userKey;
            $scope.tempData.bbs_id = $rootScope.selected_bill.id;
            $scope.tempData.com_contents = $scope.comment_content;

            $http.post($rootScope.billBoard_Url + '/uploadcomment', $scope.tempData).then(function(success) {
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
            if(success.data.result == 'success')
            {
                $scope.allNotice = success.data.messages;
                for(var i=0; i<$scope.allNotice.length; i++)
                    $scope.allNotice[i].showNumber = i+1;
                $scope.onChangeNotice();
            }
        });
    }

    $scope.onChangeNotice = function()
    {
        $scope.bigTotalItems = 10 * ($scope.allNotice.length / $scope.num_notice);
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
        });
    }

    $scope.exitMsg = function()
    {
        $rootScope.modalInstance.close('cancel');
    }
});

app.controller("HelpPageCtrl", function ($scope, $rootScope, $location, $http, $uibModal, $log, $document) {

    $scope.getFAQHelp = function()
    {
        $scope.tempData = {}
        $scope.tempData.category = 1;

        $http.post($rootScope.serverUrl + '/requesthelp', $scope.tempData).then(function(success) {
            if(success.data.result == 'success')
            {
                $scope.allFAQs = success.data.messages;
            }
        });
    }

    $scope.getSiteRuleHelp = function()
    {
        $scope.tempData = {}
        $scope.tempData.category = 2;

        $http.post($rootScope.serverUrl + '/requesthelp', $scope.tempData).then(function(success) {
            if(success.data.result == 'success')
            {
                $scope.siteHelps = success.data.messages;
            }
        });
    }

    $scope.getUserPolicyHelp = function()
    {
        $scope.tempData = {}
        $scope.tempData.category = 3;

        $http.post($rootScope.serverUrl + '/requesthelp', $scope.tempData).then(function(success) {
            if(success.data.result == 'success')
            {
                $scope.userHelps = success.data.messages;
            }
        });
    }

    $scope.getPokerHelp = function()
    {
        $scope.tempData = {}
        $scope.tempData.category = 4;

        $http.post($rootScope.serverUrl + '/requesthelp', $scope.tempData).then(function(success) {
            if(success.data.result == 'success')
            {
                $scope.pokerHelps = success.data.messages;
            }
        });
    }
});