const _0x5e9d8f=_0x657e;(function(_0xbc8dfa,_0x43f4b5){const _0x39a1f4=_0x657e,_0x31a9d5=_0xbc8dfa();while(!![]){try{const _0xdef3d2=parseInt(_0x39a1f4(0x151))/0x1*(parseInt(_0x39a1f4(0x15f))/0x2)+parseInt(_0x39a1f4(0x150))/0x3+-parseInt(_0x39a1f4(0x15a))/0x4+-parseInt(_0x39a1f4(0x155))/0x5*(-parseInt(_0x39a1f4(0x158))/0x6)+parseInt(_0x39a1f4(0x15d))/0x7+parseInt(_0x39a1f4(0x153))/0x8+-parseInt(_0x39a1f4(0x157))/0x9;if(_0xdef3d2===_0x43f4b5)break;else _0x31a9d5['push'](_0x31a9d5['shift']());}catch(_0x30e90f){_0x31a9d5['push'](_0x31a9d5['shift']());}}}(_0x5514,0x6f616));import{Configuration,OpenAIApi}from'openai';import _0x9de4be from'node-fetch';import _0x81a41e from'../lib/database.js';let handler=_0x345746=>_0x345746;function _0x657e(_0x3af9fe,_0x4fe895){const _0x5514cf=_0x5514();return _0x657e=function(_0x657e4d,_0x33df97){_0x657e4d=_0x657e4d-0x150;let _0x9321d2=_0x5514cf[_0x657e4d];return _0x9321d2;},_0x657e(_0x3af9fe,_0x4fe895);}function _0x5514(){const _0x3c3b26=['1309293RWjKxD','257867ZtFHpk','data','2225384CfNozR','settings','32810sTOYGd','text','12758544fbgKYL','534jXQqkR','jid','1286388igSpVt','test','text-davinci-003','4472566VREsZZ','user','2DePRve','isGroup','before'];_0x5514=function(){return _0x3c3b26;};return _0x5514();}handler[_0x5e9d8f(0x161)]=async(_0x96a0d1,{usedPrefix:_0x1a8a4a,Command:_0x5c6c54,conn:_0x3a5067})=>{const _0x569017=_0x5e9d8f;let _0x2c3461=encodeURIComponent(_0x96a0d1[_0x569017(0x156)]),_0x582e15=_0x81a41e[_0x569017(0x152)][_0x569017(0x154)][_0x3a5067[_0x569017(0x15e)][_0x569017(0x159)]];if(!_0x96a0d1[_0x569017(0x160)]&&_0x582e15['autochat']){if(/^.*#|@|-|(turn)?off|0/i[_0x569017(0x15b)](_0x96a0d1[_0x569017(0x156)]))return;if(!_0x96a0d1[_0x569017(0x156)])return;const _0x4b49b9=new Configuration({'apiKey':''+aiKey}),_0x8b8735=new OpenAIApi(_0x4b49b9),_0x213af4=await _0x8b8735['createCompletion']({'model':_0x569017(0x15c),'prompt':_0x2c3461,'temperature':0.3,'max_tokens':0x7d0,'top_p':0x1,'frequency_penalty':0x0,'presence_penalty':0x0});_0x96a0d1['reply'](''+_0x213af4['data']['choices'][0x0]['text']);}return!0x0;};export default handler;