'use strict';function _0x41aa(_0xcb22a4,_0x308172){const _0x351fbd=_0x351f();return _0x41aa=function(_0x41aa16,_0x34252a){_0x41aa16=_0x41aa16-0x79;let _0x358ea2=_0x351fbd[_0x41aa16];return _0x358ea2;},_0x41aa(_0xcb22a4,_0x308172);}const _0x59ce70=_0x41aa;(function(_0x50930f,_0x276b0f){const _0x57ff06=_0x41aa,_0x292392=_0x50930f();while(!![]){try{const _0x34064d=parseInt(_0x57ff06(0x105))/0x1*(parseInt(_0x57ff06(0xd2))/0x2)+-parseInt(_0x57ff06(0x7a))/0x3+-parseInt(_0x57ff06(0xec))/0x4*(-parseInt(_0x57ff06(0xa1))/0x5)+parseInt(_0x57ff06(0xd8))/0x6+parseInt(_0x57ff06(0xfb))/0x7+parseInt(_0x57ff06(0xa9))/0x8*(parseInt(_0x57ff06(0x9d))/0x9)+-parseInt(_0x57ff06(0xc8))/0xa;if(_0x34064d===_0x276b0f)break;else _0x292392['push'](_0x292392['shift']());}catch(_0x3a146f){_0x292392['push'](_0x292392['shift']());}}}(_0x351f,0xa3293));const utils=require(_0x59ce70(0xa3)),fs=require('fs');let checkVerified=null,ctx=null,_defaultFuncs=null,api=null,region;const errorRetrieving=_0x59ce70(0xb5);async function setOptions(_0x3f46b0,_0x5d6e24={}){const _0xb47e63=_0x59ce70;Object[_0xb47e63(0xb9)](_0x5d6e24)[_0xb47e63(0xa4)](_0xcd998b=>{const _0x2ff480=_0xb47e63;switch(_0xcd998b){case'online':_0x3f46b0['online']=Boolean(_0x5d6e24[_0x2ff480(0x7c)]);break;case _0x2ff480(0xc0):_0x3f46b0[_0x2ff480(0xc0)]=Boolean(_0x5d6e24[_0x2ff480(0xc0)]);break;case _0x2ff480(0xf4):_0x3f46b0[_0x2ff480(0xf4)]=_0x5d6e24['selfListenEvent'];break;case _0x2ff480(0xe6):_0x3f46b0[_0x2ff480(0xe6)]=Boolean(_0x5d6e24['listenEvents']);break;case _0x2ff480(0x9f):_0x3f46b0[_0x2ff480(0x9f)]=_0x5d6e24[_0x2ff480(0x9f)]['toString']();break;case _0x2ff480(0xf8):_0x3f46b0['updatePresence']=Boolean(_0x5d6e24['updatePresence']);break;case'forceLogin':_0x3f46b0[_0x2ff480(0x95)]=Boolean(_0x5d6e24['forceLogin']);break;case _0x2ff480(0x8a):_0x3f46b0[_0x2ff480(0x8a)]=_0x5d6e24[_0x2ff480(0x8a)];break;case _0x2ff480(0xd1):_0x3f46b0[_0x2ff480(0xd1)]=Boolean(_0x5d6e24[_0x2ff480(0xd1)]);break;case _0x2ff480(0xfe):_0x3f46b0[_0x2ff480(0xfe)]=Boolean(_0x5d6e24[_0x2ff480(0xfe)]);break;case _0x2ff480(0xee):_0x3f46b0['listenTyping']=Boolean(_0x5d6e24[_0x2ff480(0xee)]);break;case _0x2ff480(0xad):typeof _0x5d6e24[_0x2ff480(0xad)]!=_0x2ff480(0xc3)?(delete _0x3f46b0[_0x2ff480(0xad)],utils['setProxy']()):(_0x3f46b0[_0x2ff480(0xad)]=_0x5d6e24[_0x2ff480(0xad)],utils['setProxy'](_0x3f46b0[_0x2ff480(0xad)]));break;case _0x2ff480(0xba):_0x3f46b0[_0x2ff480(0xba)]=Boolean(_0x5d6e24[_0x2ff480(0xba)]);break;case _0x2ff480(0x92):_0x3f46b0[_0x2ff480(0x92)]=Boolean(_0x5d6e24[_0x2ff480(0x92)]);break;case _0x2ff480(0xfa):_0x3f46b0[_0x2ff480(0xfa)]=Boolean(_0x5d6e24[_0x2ff480(0xfa)]);break;default:break;}});}let isBehavior=![];async function bypassAutoBehavior(_0x403f92,_0xe11f6f,_0x2c81e9,_0x1f1f86,_0x3d03cd){const _0x3b2e88=_0x59ce70;try{const _0x12622f=_0x1f1f86[_0x3b2e88(0x99)](_0x525816=>_0x525816[_0x3b2e88(0x83)]==_0x3b2e88(0x106))||_0x1f1f86['find'](_0x2b61a3=>_0x2b61a3[_0x3b2e88(0x83)]==_0x3b2e88(0xbd)),_0x3c9adc=_0x3d03cd||_0x12622f['value'],_0x243222={'av':_0x3c9adc,'fb_api_caller_class':_0x3b2e88(0xe4),'fb_api_req_friendly_name':_0x3b2e88(0x101),'variables':JSON[_0x3b2e88(0xb8)]({}),'server_timestamps':!![],'doc_id':0x1685bc3359782a},_0x1cd494=()=>{const _0x356b47=_0x3b2e88;console[_0x356b47(0xe2)](_0x356b47(0xf3)+_0x3c9adc,_0x356b47(0x8f));if(!isBehavior)isBehavior=!![];};if(_0x403f92){if(_0x403f92[_0x3b2e88(0xdb)][_0x3b2e88(0xbb)]&&_0x403f92[_0x3b2e88(0xdb)][_0x3b2e88(0xbb)]['href'][_0x3b2e88(0x97)](_0x3b2e88(0xf5))){if(_0x403f92[_0x3b2e88(0xdb)][_0x3b2e88(0xbb)]['href'][_0x3b2e88(0x97)](_0x3b2e88(0x9e))){const _0x2cef74=utils['getFrom'](_0x403f92[_0x3b2e88(0xa5)],_0x3b2e88(0xf7),'\x22,\x22'),_0x8d6614=utils[_0x3b2e88(0xaf)](_0x403f92['body'],'jazoest=','\x22,'),_0x20a117=utils[_0x3b2e88(0xaf)](_0x403f92[_0x3b2e88(0xa5)],_0x3b2e88(0x8b),'\x22}');return utils[_0x3b2e88(0xde)](_0x3b2e88(0xb2),_0xe11f6f,{..._0x243222,'fb_dtsg':_0x2cef74,'jazoest':_0x8d6614,'lsd':_0x20a117},_0x2c81e9)['then'](utils[_0x3b2e88(0x8c)](_0xe11f6f))['then'](_0x37272b=>{return _0x1cd494(),_0x37272b;});}else return _0x403f92;}else return _0x403f92;}}catch(_0x37b8cf){console[_0x3b2e88(0x86)](_0x3b2e88(0x86),_0x37b8cf);}}function _0x351f(){const _0xc10b3=['2916805DmSbIh','indexOf','./utils','map','body','name','Done\x20logging\x20in.','forEach','8312rMPEnb','String','Failed\x20after\x20dismiss\x20behavior,\x20will\x20relogin\x20automatically...','match','proxy','ftw','getFrom','hkg','wss://edge-chat.facebook.com/chat?region=','https://www.facebook.com/api/graphql/','5.0.1','pnb','Error\x20retrieving\x20userID.\x20This\x20can\x20be\x20caused\x20by\x20a\x20lot\x20of\x20things,\x20including\x20getting\x20blocked\x20by\x20Facebook\x20for\x20logging\x20in\x20from\x20an\x20unknown\x20location.\x20Try\x20logging\x20in\x20with\x20a\x20browser\x20to\x20verify.','href','getType','stringify','keys','autoReconnect','uri','expires','i_user','window.location.replace(\x22https:\x5c/\x5c/www.facebook.com\x5c','join','selfListen','xxx-xxx','split','string','floor','sin','length','random','12444250wfjvid','replace',';\x20path=','durationInfo','nrt','http://','Array','longReason','Something\x20went\x20wrong','autoMarkDelivery','144350luNuxd','findIndex',';\x20expires=','log','getAppState','5.1.1','3318372CLKinv','catch','setCookie','request','getJar','value','post','toLowerCase','domain','Why\x20suspended:','warn','endsWith','RelayModern','100029573642160','listenEvents','828281030927956','makeDefaults','get','Function','8.0.0','8AMEeYe','ash','listenTyping','substring','Reason\x20on\x20suspension:','Mozilla/5.0\x20(Android\x20','Connected\x20to\x20server\x20region\x20[\x20','login\x20|\x20','selfListenEvent','https://www.facebook.com/checkpoint/','your\x20account,\x20or\x20activity\x20on\x20it,\x20doesn\x27t\x20follow\x20our\x20community\x20standards\x20on\x20','[\x22DTSGInitData\x22,[],{\x22token\x22:\x22','updatePresence','https://www.facebook.com/','randomUserAgent','8694609REbbQU','8.1.0','ws3-fca','autoMarkRead','/checkpoint/block/?next','NONE','FBScrapingWarningMutation','push','then','prn','1EdutFl','c_user','isArray','searchParams','getCookies','by\x20ClankDev','Random\x20user\x20agent\x20enabled.\x20This\x20is\x20an\x20EXPERIMENTAL\x20feature,\x20turn\x20it\x20on\x20at\x20your\x20own\x20risk.\x20Contact\x20the\x20owner\x20for\x20more\x20information\x20about\x20experimental\x20features.','path','addFunctions','.js','3379527yKEpFI','api','online','filter','exports','trim','globalOptions','login','Alert\x20on\x20','key','some','getTime','error','Fixed','7.0.1','/src','userAgent','[\x22LSD\x22,[],{\x22token\x22:\x22','saveCookies','https://www.facebook.com/home.php','email','We\x20suspect\x20automated\x20behavior\x20on\x20your\x20account.','Logging\x20in...','toUpperCase','emitReady','follow','reason','forceLogin','listen','includes','Checkpoint\x20detected.\x20Please\x20log\x20in\x20with\x20a\x20browser\x20to\x20verify.','find','toString','region','shortReason','45dpHtNh','601051028565049','pageID','cookieString'];_0x351f=function(){return _0xc10b3;};return _0x351f();}async function checkIfSuspended(_0x6cc084,_0x381344){const _0x3396bd=_0x59ce70;try{const _0x5a317e=_0x381344[_0x3396bd(0x99)](_0x3ae326=>_0x3ae326[_0x3396bd(0x83)]=='c_user')||_0x381344[_0x3396bd(0x99)](_0x2c5f93=>_0x2c5f93[_0x3396bd(0x83)]==_0x3396bd(0xbd)),_0x432c3d=_0x5a317e?.[_0x3396bd(0xdd)],_0x2a94f0={};if(_0x6cc084){if(_0x6cc084['request'][_0x3396bd(0xbb)]&&_0x6cc084[_0x3396bd(0xdb)][_0x3396bd(0xbb)][_0x3396bd(0xb6)]['includes'](_0x3396bd(0xf5))){if(_0x6cc084['request']['uri'][_0x3396bd(0xb6)][_0x3396bd(0x97)]('1501092823525282')){const _0x49ddcb=_0x6cc084[_0x3396bd(0xa5)]?.['match'](/"log_out_uri":"(.*?)","title":"(.*?)"/);_0x49ddcb&&_0x49ddcb[0x2]&&(_0x2a94f0[_0x3396bd(0xcb)]=_0x49ddcb[0x2],console[_0x3396bd(0x86)]('Suspension\x20time\x20remaining:',_0x2a94f0['durationInfo']));const _0x33bb8e=_0x6cc084['body']?.[_0x3396bd(0xac)](/"reason_section_body":"(.*?)"/);if(_0x33bb8e&&_0x33bb8e[0x1]){_0x2a94f0['longReason']=_0x33bb8e?.[0x1];const _0x4dac38=_0x2a94f0?.[_0x3396bd(0xcf)]?.[_0x3396bd(0xdf)]()?.[_0x3396bd(0xc9)](_0x3396bd(0xf6),'');_0x2a94f0[_0x3396bd(0x9c)]=_0x4dac38?.[_0x3396bd(0xef)](0x0,0x1)[_0x3396bd(0x91)]()+_0x4dac38?.[_0x3396bd(0xef)](0x1),console[_0x3396bd(0x86)](_0x3396bd(0x82)+_0x432c3d+':','Account\x20has\x20been\x20suspended!'),console['error'](_0x3396bd(0xe1),_0x2a94f0[_0x3396bd(0xcf)]),console[_0x3396bd(0x86)](_0x3396bd(0xf0),_0x2a94f0['shortReason']);}return ctx=null,{'suspended':!![],'suspendReasons':_0x2a94f0};}}else return;}}catch(_0x1b9954){return;}}async function checkIfLocked(_0x20d37e,_0x4a60f2){const _0x195f64=_0x59ce70;try{const _0x2529b0=_0x4a60f2[_0x195f64(0x99)](_0x55e538=>_0x55e538['key']==_0x195f64(0x106))||_0x4a60f2[_0x195f64(0x99)](_0x3ab3f6=>_0x3ab3f6[_0x195f64(0x83)]=='i_user'),_0x56da44=_0x2529b0?.[_0x195f64(0xdd)],_0x28a5a1={};if(_0x20d37e){if(_0x20d37e[_0x195f64(0xdb)][_0x195f64(0xbb)]&&_0x20d37e[_0x195f64(0xdb)][_0x195f64(0xbb)][_0x195f64(0xb6)][_0x195f64(0x97)](_0x195f64(0xf5))){if(_0x20d37e['request']['uri']['href'][_0x195f64(0x97)](_0x195f64(0xe7))){const _0x395323=_0x20d37e['body']['match'](/"is_unvetted_flow":true,"title":"(.*?)"/);return _0x395323&&_0x395323[0x1]&&(_0x28a5a1[_0x195f64(0x94)]=_0x395323[0x1],console[_0x195f64(0x86)](_0x195f64(0x82)+_0x56da44+':',_0x28a5a1['reason'])),ctx=null,{'locked':!![],'lockedReasons':_0x28a5a1};}}else return;}}catch(_0x61c568){console[_0x195f64(0x86)](_0x195f64(0x86),_0x61c568);}}function buildAPI(_0x48b351,_0x3c13e4,_0x21c03c){const _0x4eff6e=_0x59ce70;let _0x379742,_0x108f35;const _0x58c623=_0x3c13e4[_0x4eff6e(0xac)](/DTSGInitialData.*?token":"(.*?)"/);_0x58c623&&(_0x379742=_0x58c623[0x1]);let _0x38ea37=_0x21c03c[_0x4eff6e(0x109)]('https://www.facebook.com'),_0x1455b9=_0x38ea37['filter'](function(_0x52b9e9){const _0x51406c=_0x4eff6e;return _0x52b9e9['cookieString']()[_0x51406c(0xc2)]('=')[0x0]==='c_user';}),_0x243aa7=_0x38ea37[_0x4eff6e(0x7d)](function(_0x288d02){const _0x2b1b49=_0x4eff6e;return _0x288d02[_0x2b1b49(0xa0)]()[_0x2b1b49(0xc2)]('=')[0x0]==='i_user';});if(_0x1455b9[_0x4eff6e(0xc6)]===0x0&&_0x243aa7[_0x4eff6e(0xc6)]===0x0)throw{'error':errorRetrieving};else{if(_0x3c13e4[_0x4eff6e(0xa2)](_0x4eff6e(0xff))>-0x1)return console[_0x4eff6e(0xe2)](_0x4eff6e(0x81),_0x4eff6e(0x98));_0x243aa7[0x0]&&_0x243aa7[0x0][_0x4eff6e(0xa0)]()['includes'](_0x4eff6e(0xbd))?_0x108f35=_0x243aa7[0x0]['cookieString']()[_0x4eff6e(0xc2)]('=')[0x1][_0x4eff6e(0x9a)]():_0x108f35=_0x1455b9[0x0][_0x4eff6e(0xa0)]()[_0x4eff6e(0xc2)]('=')[0x1][_0x4eff6e(0x9a)]();}console[_0x4eff6e(0xd5)]('login','Logged\x20in\x20as\x20'+_0x108f35);try{clearInterval(checkVerified);}catch(_0x40ddc4){}const _0x17f6d3=(Math[_0x4eff6e(0xc7)]()*0x80000000|0x0)['toString'](0x10),_0x655486={'oldFBMQTTMatch':_0x3c13e4[_0x4eff6e(0xac)](/irisSeqID:"(.+?)",appID:219994525426954,endpoint:"(.+?)"/),'newFBMQTTMatch':_0x3c13e4[_0x4eff6e(0xac)](/{"app_id":"219994525426954","endpoint":"(.+?)","iris_seq_id":"(.+?)"}/),'legacyFBMQTTMatch':_0x3c13e4['match'](/\["MqttWebConfig",\[\],{"fbid":"(.*?)","appID":219994525426954,"endpoint":"(.*?)","pollingEndpoint":"(.*?)"/)};let _0x9687fd=Object[_0x4eff6e(0xb9)](_0x655486),_0x389e60,_0x346b1d;Object['keys'](_0x655486)[_0x4eff6e(0xa4)](_0x19f793=>{const _0x3407e5=_0x4eff6e;if(_0x655486[_0x19f793]&&!region){switch(_0x9687fd[_0x3407e5(0xa2)](_0x19f793)){case 0x0:{_0x346b1d=_0x655486[_0x19f793][0x1],_0x389e60=_0x655486[_0x19f793][0x2][_0x3407e5(0xc9)](/\\\//g,'/'),region=new URL(_0x389e60)[_0x3407e5(0x108)][_0x3407e5(0xe9)](_0x3407e5(0x9b))[_0x3407e5(0x91)]();break;}case 0x1:{_0x346b1d=_0x655486[_0x19f793][0x2],_0x389e60=_0x655486[_0x19f793][0x1][_0x3407e5(0xc9)](/\\\//g,'/'),region=new URL(_0x389e60)['searchParams'][_0x3407e5(0xe9)](_0x3407e5(0x9b))[_0x3407e5(0x91)]();break;}case 0x2:{_0x389e60=_0x655486[_0x19f793][0x2][_0x3407e5(0xc9)](/\\\//g,'/'),region=new URL(_0x389e60)['searchParams'][_0x3407e5(0xe9)]('region')[_0x3407e5(0x91)]();break;}}return;}});if(!region)region=[_0x4eff6e(0x104),_0x4eff6e(0xb4),'vll',_0x4eff6e(0xb0),_0x4eff6e(0xc5),_0x4eff6e(0xae),_0x4eff6e(0xed),_0x4eff6e(0xcc)][Math[_0x4eff6e(0xc7)]()*0x5|0x0];if(!_0x389e60)_0x389e60=_0x4eff6e(0xb1)+region;console['log'](_0x4eff6e(0x81),_0x4eff6e(0xf2)+region+'\x20]');const _0x420368={'userID':_0x108f35,'jar':_0x21c03c,'clientID':_0x17f6d3,'globalOptions':_0x48b351,'loggedIn':!![],'access_token':_0x4eff6e(0x100),'clientMutationId':0x0,'mqttClient':undefined,'lastSeqId':_0x346b1d,'syncToken':undefined,'mqttEndpoint':_0x389e60,'wsReqNumber':0x0,'wsTaskNumber':0x0,'reqCallbacks':{},'region':region,'firstListen':!![],'fb_dtsg':_0x379742,'fcaUsed':_0x4eff6e(0xfd)},_0x3f1390=utils[_0x4eff6e(0xe8)](_0x3c13e4,_0x108f35,_0x420368);return[_0x420368,_0x3f1390];}async function loginHelper(_0x5a97bb,_0x2daa78,_0x131cfe,_0x4b4979,_0x3f9d67={},_0x4c6e1a){const _0x13f184=_0x59ce70;let _0x235ff1=null;const _0x459b7a=utils[_0x13f184(0xdc)]();console['log'](_0x13f184(0x81),_0x13f184(0x90));if(_0x5a97bb){if(utils[_0x13f184(0xb7)](_0x5a97bb)===_0x13f184(0xce)&&_0x5a97bb[_0x13f184(0x84)](_0x1e4930=>_0x1e4930[_0x13f184(0xa6)]))_0x5a97bb=_0x5a97bb[_0x13f184(0xa4)](_0x3211a6=>{const _0x23e50a=_0x13f184;return _0x3211a6[_0x23e50a(0x83)]=_0x3211a6[_0x23e50a(0xa6)],delete _0x3211a6[_0x23e50a(0xa6)],_0x3211a6;});else{if(utils[_0x13f184(0xb7)](_0x5a97bb)===_0x13f184(0xaa)){const _0x2d83ce=[];_0x5a97bb[_0x13f184(0xc2)](';')[_0x13f184(0xa8)](_0x5c2a73=>{const _0x3501a5=_0x13f184,[_0x1bbfdc,_0x2f9bb8]=_0x5c2a73['split']('=');_0x2d83ce[_0x3501a5(0x102)]({'key':(_0x1bbfdc||'')[_0x3501a5(0x7f)](),'value':(_0x2f9bb8||'')[_0x3501a5(0x7f)](),'domain':'.facebook.com','path':'/','expires':new Date()[_0x3501a5(0x85)]()+0x3e8*0x3c*0x3c*0x18*0x16d});}),_0x5a97bb=_0x2d83ce;}}_0x5a97bb[_0x13f184(0xa4)](_0x470d69=>{const _0x12284e=_0x13f184,_0x2a44b9=_0x470d69[_0x12284e(0x83)]+'='+_0x470d69[_0x12284e(0xdd)]+_0x12284e(0xd4)+_0x470d69[_0x12284e(0xbc)]+';\x20domain='+_0x470d69[_0x12284e(0xe0)]+_0x12284e(0xca)+_0x470d69[_0x12284e(0x10c)]+';';_0x459b7a[_0x12284e(0xda)](_0x2a44b9,_0x12284e(0xcd)+_0x470d69[_0x12284e(0xe0)]);}),_0x235ff1=utils[_0x13f184(0xe9)](_0x13f184(0xf9),_0x459b7a,null,_0x4b4979,{'noRef':!![]})['then'](utils[_0x13f184(0x8c)](_0x459b7a));}else{if(_0x2daa78)throw'Currently,\x20the\x20login\x20method\x20by\x20email\x20and\x20password\x20is\x20no\x20longer\x20supported,\x20please\x20use\x20the\x20login\x20method\x20by\x20appState';else throw'No\x20appState\x20given.';}api={'setOptions':setOptions['bind'](null,_0x4b4979),'getAppState'(){const _0x493e9e=_0x13f184,_0x22ee11=utils[_0x493e9e(0xd6)](_0x459b7a);if(!Array[_0x493e9e(0x107)](_0x22ee11))return[];const _0x1d271d=_0x22ee11[_0x493e9e(0x7d)]((_0x58637b,_0x14c373,_0x1aee60)=>{const _0xf9bc5f=_0x493e9e;return _0x1aee60[_0xf9bc5f(0xd3)](_0x3f8133=>_0x3f8133[_0xf9bc5f(0x83)]===_0x58637b['key'])===_0x14c373;});return _0x1d271d[_0x493e9e(0xc6)]>0x0?_0x1d271d:_0x22ee11;}},_0x235ff1=_0x235ff1[_0x13f184(0x103)](_0x3dcc95=>bypassAutoBehavior(_0x3dcc95,_0x459b7a,_0x4b4979,_0x5a97bb))[_0x13f184(0x103)](async _0x4d4ecd=>{const _0x2fe95e=_0x13f184,_0x1facc8=_0x2fe95e(0x8d),_0x2d9cda=await utils[_0x2fe95e(0xe9)](_0x1facc8,_0x459b7a,null,_0x4b4979);return _0x2d9cda;})[_0x13f184(0x103)](async _0x3cc971=>{const _0x311620=_0x13f184,_0x4bf5aa=_0x3cc971?.['body'],_0xc89c=buildAPI(_0x4b4979,_0x4bf5aa,_0x459b7a);return ctx=_0xc89c[0x0],_defaultFuncs=_0xc89c[0x1],api[_0x311620(0x10d)]=_0x4fab6e=>{const _0x54705d=_0x311620,_0x2126ec=_0x4fab6e[_0x54705d(0xe3)]('/')?_0x4fab6e:_0x4fab6e+'/';fs['readdirSync'](_0x2126ec)[_0x54705d(0x7d)](_0x349188=>_0x349188[_0x54705d(0xe3)](_0x54705d(0x79)))[_0x54705d(0xa4)](_0x18f5a7=>{api[_0x18f5a7['replace']('.js','')]=require(_0x2126ec+_0x18f5a7)(_defaultFuncs,api,ctx);});},api['addFunctions'](__dirname+_0x311620(0x89)),api[_0x311620(0x96)]=api['listenMqtt'],api['ws3']={..._0x3f9d67},_0x3cc971;}),_0x4b4979[_0x13f184(0x9f)]&&(_0x235ff1=_0x235ff1[_0x13f184(0x103)](function(){const _0x128fd3=_0x13f184;return utils[_0x128fd3(0xe9)](_0x128fd3(0xf9)+ctx[_0x128fd3(0x80)]['pageID']+'/messages/?section=messages&subsection=inbox',ctx['jar'],null,_0x4b4979);})[_0x13f184(0x103)](function(_0x433895){const _0x17d37d=_0x13f184;let _0x204cae=utils[_0x17d37d(0xaf)](_0x433895[_0x17d37d(0xa5)],_0x17d37d(0xbe),'\x22);')[_0x17d37d(0xc2)]('\x5c')[_0x17d37d(0xbf)]('');return _0x204cae=_0x204cae[_0x17d37d(0xef)](0x0,_0x204cae[_0x17d37d(0xc6)]-0x1),utils[_0x17d37d(0xe9)]('https://www.facebook.com'+_0x204cae,ctx['jar'],null,_0x4b4979);})),_0x235ff1[_0x13f184(0x103)](async _0x1fe3ce=>{const _0x5cbb24=_0x13f184,_0x2295fd=await checkIfLocked(_0x1fe3ce,_0x5a97bb);if(_0x2295fd)throw _0x2295fd;const _0x2efbf6=await checkIfSuspended(_0x1fe3ce,_0x5a97bb);if(_0x2efbf6)throw _0x2efbf6;console['log']('login',_0x5cbb24(0xa7)),console[_0x5cbb24(0xd5)](_0x5cbb24(0x87),_0x5cbb24(0x10a));try{api[_0x5cbb24(0x93)](_0x5cbb24(0xe5),!![]);}catch(_0x5e9d6f){console[_0x5cbb24(0x86)](_0x5cbb24(0x7b),_0x5cbb24(0xd0));}return _0x4c6e1a(null,api);})[_0x13f184(0xd9)](_0x22a004=>_0x4c6e1a(_0x22a004));}function randomize(_0x45de65){const _0x3a6605=_0x59ce70;let _0x143914=Math[_0x3a6605(0xc7)]()*0xb7bf27;return _0x45de65[_0x3a6605(0xc9)](/[xy]/g,_0x4f2fb7=>{const _0x8383e1=_0x3a6605;let _0x5d6bcc=Math[_0x8383e1(0xc7)]()*0x10;return _0x5d6bcc=(_0x5d6bcc+_0x143914)%0x10|0x0,_0x143914=Math['floor'](_0x143914/0x10),[(_0x4f2fb7==='x'?_0x5d6bcc:_0x5d6bcc&0x3|0x8)[_0x8383e1(0x9a)](0x10)]['map'](_0x10f254=>Math['random']()<0.6?_0x10f254:_0x10f254['toUpperCase']())['join']('');});}function userAgent(){const _0x4d6f9e=_0x59ce70,_0x2feb41=()=>{const _0x81e64e=_0x41aa,_0x7a636f=Math['floor'](Math[_0x81e64e(0xc7)]()*0xf)+0x1;if(_0x7a636f<=0x4)return'10';if(_0x7a636f===0x5){const _0x3acfe5=['5.0',_0x81e64e(0xb3),_0x81e64e(0xd7)];return _0x3acfe5[Math[_0x81e64e(0xc4)](Math['random']()*_0x3acfe5[_0x81e64e(0xc6)])];}else{if(_0x7a636f===0x6){const _0x45fac5=['6.0','6.0.1'];return _0x45fac5[Math['floor'](Math[_0x81e64e(0xc7)]()*_0x45fac5[_0x81e64e(0xc6)])];}else{if(_0x7a636f===0x7){const _0x3c2385=[_0x81e64e(0x88),'7.1.1','7.1.2'];return _0x3c2385[Math[_0x81e64e(0xc4)](Math[_0x81e64e(0xc7)]()*_0x3c2385[_0x81e64e(0xc6)])];}else{if(_0x7a636f===0x8){const _0x57ff02=[_0x81e64e(0xeb),_0x81e64e(0xfc)];return _0x57ff02[Math[_0x81e64e(0xc4)](Math[_0x81e64e(0xc7)]()*_0x57ff02[_0x81e64e(0xc6)])];}else return _0x7a636f;}}}},_0x141a27=_0x4d6f9e(0xf1)+_0x2feb41()+';\x20'+randomize(_0x4d6f9e(0xc1))[_0x4d6f9e(0x91)]()+';\x20Mobile;\x20rv:61.0)\x20Gecko/61.0\x20Firefox/68.0';return _0x141a27;}async function login(_0x184859,_0x1dd793,_0x20b05d){const _0x5dff6a=_0x59ce70;(utils[_0x5dff6a(0xb7)](_0x1dd793)===_0x5dff6a(0xea)||utils[_0x5dff6a(0xb7)](_0x1dd793)==='AsyncFunction')&&(_0x20b05d=_0x1dd793,_0x1dd793={});const _0x4292e5={'selfListen':![],'selfListenEvent':![],'listenEvents':!![],'listenTyping':![],'updatePresence':![],'forceLogin':![],'autoMarkDelivery':![],'autoMarkRead':!![],'autoReconnect':!![],'online':!![],'emitReady':![],'randomUserAgent':![]};if(_0x1dd793?.[_0x5dff6a(0xfa)]){console[_0x5dff6a(0xe2)](_0x5dff6a(0x81),_0x5dff6a(0x10b)),_0x4292e5['randomUserAgent']=!![];const _0x13183d=_0x13183d();_0x4292e5[_0x5dff6a(0x8a)]=_0x13183d;}else _0x4292e5['userAgent']='Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2014.7;\x20rv:132.0)\x20Gecko/20100101\x20Firefox/132.0';setOptions(_0x4292e5,_0x1dd793);const _0x1a3c6b={'relogin'(){_0x13f7fc();}};async function _0x13f7fc(){const _0x16d097=_0x5dff6a;loginHelper(_0x184859?.['appState'],_0x184859?.[_0x16d097(0x8e)],_0x184859?.['password'],_0x4292e5,_0x1a3c6b,(_0x1cf980,_0x187c7)=>{const _0x4df33c=_0x16d097;if(_0x1cf980)return isBehavior&&(console[_0x4df33c(0xe2)](_0x4df33c(0x81),_0x4df33c(0xab)),isBehavior=![],_0x13f7fc()),console[_0x4df33c(0x86)](_0x4df33c(0x81),_0x1cf980),_0x20b05d(_0x1cf980);_0x20b05d(null,_0x187c7);});}const _0x526c10=await _0x13f7fc();return _0x526c10;}module[_0x59ce70(0x7e)]=login;
