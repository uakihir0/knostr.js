import {
  Unit_instancev9v8hjid95df as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  split2bvyvnrlcifjv as split,
  lastOrNull1aq5oz189qoe1 as lastOrNull,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  ArrayList3it5z8td81qkl as ArrayList,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  copyToArray2j022khrow2yi as copyToArray,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  first58ocm7j58k3q as first,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isByteArray4nnzfn1x4o3w as isByteArray,
  decodeToString1x4faah2liw2p as decodeToString,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  isBlank1dvkhjjvox3p0 as isBlank,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  Companion_getInstancevdtg3uvqmv7f as Companion_getInstance,
  DurationUnit_MILLISECONDS_getInstancen5e0rps4ljgd as DurationUnit_MILLISECONDS_getInstance,
  toDuration7gy6v749ektt as toDuration,
  _Duration___get_inWholeMilliseconds__impl__msfiryaqt4g7dl3tjf as _Duration___get_inWholeMilliseconds__impl__msfiry,
  Duration5ynfiptaqcrg as Duration,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Text_getInstancereo9eglzqyxz as Text_getInstance,
  Image_getInstance1w2artusivcl3 as Image_getInstance,
  Video_getInstance3ujok3n0zpspf as Video_getInstance,
  ContentType1svlpabm9v7iz as ContentType,
  Application_getInstance2wn6cl3kv21f0 as Application_getInstance,
  URLBuilder1nlnzfhn643pn as URLBuilder,
  takeFromkqlcz7c6dx2r as takeFrom,
  MultiPart_getInstance1qrv90sa9uvz5 as MultiPart_getInstance,
  contentType1lwcfjsjo0z8g as contentType,
  Companion_getInstance1fjhglsqufscv as Companion_getInstance_0,
  HeadersBuilder3h7sn3kkvu98m as HeadersBuilder,
  append2z8giuo6jcxrf as append,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  NullBody_instance3jaj4elqoxne0 as NullBody_instance,
  Companion_getInstance3p89xrm3wsm6m as Companion_getInstance_1,
  ParametersBuilder1ry9ntvvg567r as ParametersBuilder,
  Companion_getInstance13wwf84j92s7c as Companion_getInstance_2,
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  Urlowwyg1lanrqp as Url,
} from './ktor-ktor-http.mjs';
import {
  HttpClient3584jcajl7sef as HttpClient,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  url1ln4fngdmzeq5 as url,
  headers24pki7ce1busg as headers,
  timeout39ggydbhmf7b9 as timeout,
  FormBuilder2h86ly8mj760k as FormBuilder,
  formData16t43gxqji6d8 as formData,
  MultiPartFormDataContent67pixgga9hu4 as MultiPartFormDataContent,
  FormDataContent25s3w8cik3m7q as FormDataContent,
  HttpStatement3zxb33q8lku as HttpStatement,
  ProxyBuilder_instancelz60mntltz3k as ProxyBuilder_instance,
  Plugin_getInstance3c2cbcxt5w9x2 as Plugin_getInstance,
  DefaultClientWebSocketSession1n8ok3lng45wy as DefaultClientWebSocketSession,
  webSocket1o6hkyb7h15pm as webSocket,
} from './ktor-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  toMap1agg4casweo9p as toMap,
} from './ktor-ktor-utils.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  readText30p9xkeoodw49 as readText,
  readBytes28s4uf7ekyufa as readBytes,
  Binary3tlzyfojm51s4 as Binary,
  Text3e6ukp9joohql as Text,
  send2p4921vjl50zd as send,
} from './ktor-ktor-websockets.mjs';
import {
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  launch1c91vkjzdi9sd as launch,
  cancel2en0dn4yvpufo as cancel,
  get_isActivehakov5bm97hw as get_isActive,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Type extends Enum {}
class Companion {
  o44(key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  }
  p44(key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  }
}
class HttpParameter {
  constructor(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.q44_1 = type;
    this.r44_1 = key;
    this.s44_1 = value;
    this.t44_1 = fileName;
    this.u44_1 = fileBody;
  }
  v44() {
    var tmp0_safe_receiver = this.t44_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  }
  w44() {
    switch (this.v44()) {
      case 'txt':
        return Text_getInstance().f2x_1;
      case 'html':
        return Text_getInstance().i2x_1;
      case 'css':
        return Text_getInstance().g2x_1;
      case 'csv':
        return Text_getInstance().h2x_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().m2w_1;
      case 'png':
        return Image_getInstance().o2w_1;
      case 'gif':
        return Image_getInstance().j2w_1;
      case 'svg':
        return Image_getInstance().p2w_1;
      case 'mpeg':
        return Video_getInstance().p2x_1;
      case 'mp4':
        return Video_getInstance().q2x_1;
      case 'mov':
        return Video_getInstance().s2x_1;
      case 'webm':
        return ContentType.c2v('video', 'webm');
      case 'json':
        return Application_getInstance().k2v_1;
      case 'xml':
        return Application_getInstance().q2v_1;
      case 'zip':
        return Application_getInstance().t2v_1;
      case 'pdf':
        return Application_getInstance().w2v_1;
    }
    return Application_getInstance().n2v_1;
  }
}
class HttpRequest {
  constructor() {
    this.x44_1 = 'https';
    this.y44_1 = null;
    this.z44_1 = null;
    this.a45_1 = null;
    this.b45_1 = null;
    this.c45_1 = null;
    this.d45_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.e45_1 = ArrayList.l2();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.f45_1 = LinkedHashMap.nb();
    this.g45_1 = false;
    this.h45_1 = false;
    this.i45_1 = true;
    this.j45_1 = false;
    this.k45_1 = null;
    this.l45_1 = null;
    this.m45_1 = null;
  }
  p45(url) {
    // Inline function 'kotlin.also' call
    this.b45_1 = url;
    return this;
  }
  q45(accept) {
    // Inline function 'kotlin.also' call
    this.c45_1 = accept;
    return this;
  }
  r45(key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.f45_1.f4(key, value);
    return this;
  }
  s45(key, value) {
    // Inline function 'kotlin.also' call
    this.e45_1.d2(Companion_instance.o44(key, toString(value)));
    return this;
  }
  p44(key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.e45_1.d2(Companion_instance.p44(key, fileName, fileBody));
    return this;
  }
  *t45($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_2().x32_1, $completion);
  }
  *u45($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_2().y32_1, $completion);
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.n45_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  *o45(response, $completion) {
    var tmp = response.x3l().u35_1;
    var tmp_0 = toMap(response.w32());
    // Inline function 'io.ktor.client.call.body' call
    var tmp_1 = response.o3l();
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_2 = PrimitiveClasses_getInstance().if();
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_3;
    try {
      tmp_3 = createKType(PrimitiveClasses_getInstance().if(), arrayOf([]), false);
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_4 = null;
      } else {
        throw $p;
      }
      tmp_3 = tmp_4;
    }
    var tmp$ret$2 = tmp_3;
    var tmp$ret$1 = new TypeInfo(tmp_2, tmp$ret$2);
    var tmp_5 = yield* tmp_1.l3l(tmp$ret$1, $completion);
    var tmp$ret$0 = (!(tmp_5 == null) ? isByteArray(tmp_5) : false) ? tmp_5 : THROW_CCE();
    return new HttpResponse(tmp, tmp_0, tmp$ret$0);
  }
}
class HttpResponse {
  constructor(status, headers, body) {
    Companion_getInstance_4();
    this.v45_1 = status;
    this.w45_1 = headers;
    this.x45_1 = body;
    var tmp = this;
    tmp.y45_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  z45() {
    var tmp0 = this.y45_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.v2();
  }
}
class WebsocketRequest$start$slambda$slambda {
  constructor(this$0, $frame) {
    this.a46_1 = this$0;
    this.b46_1 = $frame;
  }
  *k2l($this$launch, $completion) {
    yield* this.a46_1.k46_1(readText(this.b46_1), $completion);
    return Unit_instance;
  }
  qc(p1, $completion) {
    return this.k2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$start$slambda$slambda_0 {
  constructor(this$0, $frame) {
    this.r46_1 = this$0;
    this.s46_1 = $frame;
  }
  *k2l($this$launch, $completion) {
    yield* this.r46_1.l46_1(readBytes(this.s46_1), $completion);
    return Unit_instance;
  }
  qc(p1, $completion) {
    return this.k2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$textListener$slambda {
  *t46(it, $completion) {
    return Unit_instance;
  }
  qc(p1, $completion) {
    return this.t46((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$bytesListener$slambda {
  *u46(it, $completion) {
    return Unit_instance;
  }
  qc(p1, $completion) {
    return this.u46((!(p1 == null) ? isByteArray(p1) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$start$slambda {
  constructor(this$0, $req) {
    this.v46_1 = this$0;
    this.w46_1 = $req;
  }
  *x46($this$webSocket, $completion) {
    try {
      this.v46_1.q46_1 = $this$webSocket;
      this.w46_1.m46_1(this.w46_1);
      var _iterator__ex2g4s = $this$webSocket.n3d().l1();
      while (yield* _iterator__ex2g4s.s24($completion)) {
        var frame = _iterator__ex2g4s.n1();
        if (frame instanceof Text) {
          launch($this$webSocket, VOID, VOID, WebsocketRequest$start$slambda$slambda_1(this.v46_1, frame));
        } else {
          if (frame instanceof Binary) {
            launch($this$webSocket, VOID, VOID, WebsocketRequest$start$slambda$slambda_2(this.v46_1, frame));
          }
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.w46_1.o46_1(e);
      } else {
        throw $p;
      }
    }
    finally {
      this.w46_1.n46_1(this.w46_1);
    }
    return Unit_instance;
  }
  qc(p1, $completion) {
    return this.x46(p1 instanceof DefaultClientWebSocketSession ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest {
  constructor() {
    this.c46_1 = 'ws';
    this.d46_1 = null;
    this.e46_1 = null;
    this.f46_1 = null;
    this.g46_1 = null;
    this.h46_1 = null;
    this.i46_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.j46_1 = LinkedHashMap.nb();
    var tmp_0 = this;
    tmp_0.k46_1 = WebsocketRequest$textListener$slambda_0();
    var tmp_1 = this;
    tmp_1.l46_1 = WebsocketRequest$bytesListener$slambda_0();
    var tmp_2 = this;
    tmp_2.m46_1 = WebsocketRequest$onOpenListener$lambda;
    var tmp_3 = this;
    tmp_3.n46_1 = WebsocketRequest$onCloseListener$lambda;
    var tmp_4 = this;
    tmp_4.o46_1 = WebsocketRequest$onErrorListener$lambda;
    var tmp_5 = this;
    tmp_5.p46_1 = HttpClient(WebsocketRequest$client$lambda);
    this.q46_1 = null;
  }
  y46(url) {
    // Inline function 'kotlin.also' call
    this.g46_1 = url;
    return this;
  }
  *z46($completion) {
    return yield* this.a47(Companion_getInstance_2().x32_1, $completion);
  }
  *a47(method, $completion) {
    // Inline function 'kotlin.also' call
    var req = this;
    var tmp0_safe_receiver = this.h46_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.j46_1.f4('Accept', tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.i46_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0 = this.j46_1;
      // Inline function 'kotlin.collections.set' call
      var key = 'User-Agent';
      tmp0.f4(key, tmp1_safe_receiver);
    }
    var tmp = WebsocketRequest$start$lambda(method, req);
    yield* webSocket(this.p46_1, tmp, WebsocketRequest$start$slambda_0(this, req), $completion);
    return this;
  }
  v5() {
    this.n46_1(this);
    cancel(this.p46_1.x3i_1);
    this.p46_1.v5();
    this.q46_1 = null;
  }
  *b47(text, $completion) {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.q46_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$1;
    if (get_isActive(it)) {
      yield* send(it, text, $completion);
    }
    return Unit_instance;
  }
}
//endregion
var Type_QUERY_instance;
var Type_PARAM_instance;
var Type_FILE_instance;
var Type_JSON_instance;
var Type_entriesInitialized;
function Type_initEntries() {
  if (Type_entriesInitialized)
    return Unit_instance;
  Type_entriesInitialized = true;
  Type_QUERY_instance = new Type('QUERY', 0);
  Type_PARAM_instance = new Type('PARAM', 1);
  Type_FILE_instance = new Type('FILE', 2);
  Type_JSON_instance = new Type('JSON', 3);
}
var Companion_instance;
function Companion_getInstance_3() {
  return Companion_instance;
}
function Type_QUERY_getInstance() {
  Type_initEntries();
  return Type_QUERY_instance;
}
function Type_PARAM_getInstance() {
  Type_initEntries();
  return Type_PARAM_instance;
}
function Type_FILE_getInstance() {
  Type_initEntries();
  return Type_FILE_instance;
}
function Type_JSON_getInstance() {
  Type_initEntries();
  return Type_JSON_instance;
}
function *proceed($this, method, $completion) {
  var req = $this;
  var client = HttpClient(HttpRequest$proceed$lambda(req));
  var tmp0_safe_receiver = $this.c45_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.set' call
    $this.f45_1.f4('Accept', tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = $this.d45_1;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    var tmp0 = $this.f45_1;
    // Inline function 'kotlin.collections.set' call
    var key = 'User-Agent';
    tmp0.f4(key, tmp1_safe_receiver);
  }
  var tmp = Companion_getInstance_4();
  // Inline function 'io.ktor.client.request.request' call
  // Inline function 'kotlin.apply' call
  var this_0 = new HttpRequestBuilder();
  this_0.q3k_1 = method;
  if (!(req.b45_1 == null)) {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_0 = req.b45_1;
    var tmp$ret$10;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0_0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$10 = tmp0_0;
        break $l$block;
      }
    }
    var tmp_0 = tmp$ret$10;
    takeFrom(this_0.p3k_1, URLBuilder(tmp_0));
  } else {
    url(this_0, req.x44_1, req.y44_1, req.a45_1, req.z44_1);
  }
  headers(this_0, HttpRequest$proceed$lambda_0(req));
  timeout(this_0, HttpRequest$proceed$lambda_1(req));
  if (!$this.g45_1 && !$this.h45_1 && req.e45_1.m2() === 1 && canSendOnly($this, first(req.e45_1))) {
    var param = first(req.e45_1);
    // Inline function 'io.ktor.client.request.setBody' call
    var body = new ByteArrayContent(ensureNotNull(param.u44_1), param.w44());
    if (body == null) {
      this_0.s3k_1 = NullBody_instance;
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_1 = getKClass(ByteArrayContent);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_3 = null;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var tmp$ret$14 = tmp_2;
      var tmp$ret$13 = new TypeInfo(tmp_1, tmp$ret$14);
      this_0.m3o(tmp$ret$13);
    } else {
      if (body instanceof OutgoingContent) {
        this_0.s3k_1 = body;
        this_0.m3o(null);
      } else {
        this_0.s3k_1 = body;
        // Inline function 'io.ktor.util.reflect.typeInfo' call
        var tmp_4 = getKClass(ByteArrayContent);
        // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
        var tmp_5;
        try {
          tmp_5 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
        } catch ($p) {
          var tmp_6;
          if ($p instanceof Error) {
            var _unused_var__etf5q3_0 = $p;
            tmp_6 = null;
          } else {
            throw $p;
          }
          tmp_5 = tmp_6;
        }
        var tmp$ret$16 = tmp_5;
        var tmp$ret$15 = new TypeInfo(tmp_4, tmp$ret$16);
        this_0.m3o(tmp$ret$15);
      }
    }
  } else {
    if (method.equals(Companion_getInstance_2().x32_1)) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = req.e45_1.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element.q44_1.s1_1 === 0) {
          this_0.p3k_1.j36_1.v2p(element.r44_1, ensureNotNull(element.s44_1));
        } else {
          throw IllegalStateException.o('Request Body is not supported in the GET method.');
        }
      }
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0_1 = req.e45_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList.l2();
      var _iterator__ex2g4s_0 = tmp0_1.l1();
      while (_iterator__ex2g4s_0.m1()) {
        var element_0 = _iterator__ex2g4s_0.n1();
        if (element_0.q44_1.equals(Type_QUERY_getInstance())) {
          destination.d2(element_0);
        }
      }
      var queries = destination;
      // Inline function 'kotlin.collections.filter' call
      var tmp0_2 = req.e45_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList.l2();
      var _iterator__ex2g4s_1 = tmp0_2.l1();
      while (_iterator__ex2g4s_1.m1()) {
        var element_1 = _iterator__ex2g4s_1.n1();
        if (element_1.q44_1.equals(Type_PARAM_getInstance())) {
          destination_0.d2(element_1);
        }
      }
      var params = destination_0;
      // Inline function 'kotlin.collections.filter' call
      var tmp0_3 = req.e45_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList.l2();
      var _iterator__ex2g4s_2 = tmp0_3.l1();
      while (_iterator__ex2g4s_2.m1()) {
        var element_2 = _iterator__ex2g4s_2.n1();
        if (element_2.q44_1.equals(Type_FILE_getInstance())) {
          destination_1.d2(element_2);
        }
      }
      var files = destination_1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!queries.j1()) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_3 = queries.l1();
        while (_iterator__ex2g4s_3.m1()) {
          var element_3 = _iterator__ex2g4s_3.n1();
          this_0.p3k_1.j36_1.v2p(element_3.r44_1, ensureNotNull(element_3.s44_1));
        }
      }
      var tmp_7;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!params.j1()) {
        tmp_7 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_7 = !files.j1();
      }
      if (tmp_7) {
        if ($this.h45_1) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!files.j1()) {
            throw IllegalStateException.o('ApplicationFormUrlEncoded cannot send files.');
          }
          contentType(this_0, Application_getInstance().v2v_1);
          // Inline function 'io.ktor.http.Companion.build' call
          Companion_getInstance_1();
          // Inline function 'kotlin.apply' call
          var this_1 = ParametersBuilder();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_4 = params.l1();
          while (_iterator__ex2g4s_4.m1()) {
            var element_4 = _iterator__ex2g4s_4.n1();
            this_1.v2p(element_4.r44_1, ensureNotNull(element_4.s44_1));
          }
          var tmp$ret$34 = this_1.z2x();
          // Inline function 'io.ktor.client.request.setBody' call
          var body_0 = new FormDataContent(tmp$ret$34);
          if (body_0 == null) {
            this_0.s3k_1 = NullBody_instance;
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_8 = getKClass(FormDataContent);
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_9;
            try {
              tmp_9 = createKType(getKClass(FormDataContent), arrayOf([]), false);
            } catch ($p) {
              var tmp_10;
              if ($p instanceof Error) {
                var _unused_var__etf5q3_1 = $p;
                tmp_10 = null;
              } else {
                throw $p;
              }
              tmp_9 = tmp_10;
            }
            var tmp$ret$41 = tmp_9;
            var tmp$ret$40 = new TypeInfo(tmp_8, tmp$ret$41);
            this_0.m3o(tmp$ret$40);
          } else {
            if (body_0 instanceof OutgoingContent) {
              this_0.s3k_1 = body_0;
              this_0.m3o(null);
            } else {
              this_0.s3k_1 = body_0;
              // Inline function 'io.ktor.util.reflect.typeInfo' call
              var tmp_11 = getKClass(FormDataContent);
              // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
              var tmp_12;
              try {
                tmp_12 = createKType(getKClass(FormDataContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_13;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3_2 = $p;
                  tmp_13 = null;
                } else {
                  throw $p;
                }
                tmp_12 = tmp_13;
              }
              var tmp$ret$43 = tmp_12;
              var tmp$ret$42 = new TypeInfo(tmp_11, tmp$ret$43);
              this_0.m3o(tmp$ret$42);
            }
          }
        } else {
          contentType(this_0, MultiPart_getInstance().y2w_1);
          // Inline function 'io.ktor.client.request.forms.formData' call
          // Inline function 'kotlin.apply' call
          var this_2 = new FormBuilder();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_5 = params.l1();
          while (_iterator__ex2g4s_5.m1()) {
            var element_5 = _iterator__ex2g4s_5.n1();
            this_2.n41(element_5.r44_1, ensureNotNull(element_5.s44_1));
          }
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_6 = files.l1();
          while (_iterator__ex2g4s_6.m1()) {
            var element_6 = _iterator__ex2g4s_6.n1();
            var tmp_14 = ensureNotNull(element_6.u44_1);
            // Inline function 'io.ktor.http.Companion.build' call
            Companion_getInstance_0();
            // Inline function 'kotlin.apply' call
            var this_3 = new HeadersBuilder();
            append(this_3, 'Content-Type', element_6.w44());
            this_3.v2p('Content-Disposition', 'filename=' + element_6.t44_1);
            var tmp$ret$51 = this_3.z2x();
            this_2.o41(element_6.r44_1, tmp_14, tmp$ret$51);
          }
          // Inline function 'kotlin.collections.toTypedArray' call
          var this_4 = this_2.p41();
          var tmp$ret$54 = copyToArray(this_4);
          var tmp$ret$44 = formData(tmp$ret$54.slice());
          // Inline function 'io.ktor.client.request.setBody' call
          var body_1 = new MultiPartFormDataContent(tmp$ret$44);
          if (body_1 == null) {
            this_0.s3k_1 = NullBody_instance;
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_15 = getKClass(MultiPartFormDataContent);
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_16;
            try {
              tmp_16 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
            } catch ($p) {
              var tmp_17;
              if ($p instanceof Error) {
                var _unused_var__etf5q3_3 = $p;
                tmp_17 = null;
              } else {
                throw $p;
              }
              tmp_16 = tmp_17;
            }
            var tmp$ret$57 = tmp_16;
            var tmp$ret$56 = new TypeInfo(tmp_15, tmp$ret$57);
            this_0.m3o(tmp$ret$56);
          } else {
            if (body_1 instanceof OutgoingContent) {
              this_0.s3k_1 = body_1;
              this_0.m3o(null);
            } else {
              this_0.s3k_1 = body_1;
              // Inline function 'io.ktor.util.reflect.typeInfo' call
              var tmp_18 = getKClass(MultiPartFormDataContent);
              // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
              var tmp_19;
              try {
                tmp_19 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_20;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3_4 = $p;
                  tmp_20 = null;
                } else {
                  throw $p;
                }
                tmp_19 = tmp_20;
              }
              var tmp$ret$59 = tmp_19;
              var tmp$ret$58 = new TypeInfo(tmp_18, tmp$ret$59);
              this_0.m3o(tmp$ret$58);
            }
          }
        }
      }
    }
  }
  // Inline function 'io.ktor.client.request.request' call
  var tmp$ret$6 = yield* (new HttpStatement(this_0, client)).w42($completion);
  return yield* tmp.o45(tmp$ret$6, $completion);
}
function canSendOnly($this, param) {
  if (param.q44_1.equals(Type_JSON_getInstance()))
    return true;
  var tmp0_subject = param.w44();
  return tmp0_subject.equals(Application_getInstance().k2v_1) ? true : tmp0_subject.equals(Image_getInstance().m2w_1) ? true : tmp0_subject.equals(Image_getInstance().o2w_1) ? true : tmp0_subject.equals(Image_getInstance().j2w_1) ? true : tmp0_subject.equals(Video_getInstance().p2x_1) ? true : tmp0_subject.equals(Video_getInstance().q2x_1) ? true : tmp0_subject.equals(Video_getInstance().s2x_1) ? true : tmp0_subject.equals(ContentType.c2v('video', 'webm')) ? true : false;
}
function HttpRequest$proceed$lambda($req) {
  return ($this$HttpClient) => {
    applySystemProxy($this$HttpClient);
    var tmp;
    if ($req.j45_1) {
      applySkipSSLValidation($this$HttpClient);
      tmp = Unit_instance;
    }
    $this$HttpClient.b3k_1 = $req.i45_1;
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_0($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.f45_1.t2().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.u2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.v2();
      $this$headers.v2p(k, v);
    }
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_1($req) {
  return ($this$timeout) => {
    $this$timeout.e3w($req.k45_1);
    $this$timeout.f3w($req.l45_1);
    $this$timeout.g3w($req.m45_1);
    return Unit_instance;
  };
}
function HttpResponse$Companion$mapper$lambda($this$Json) {
  $this$Json.v1e_1 = true;
  return Unit_instance;
}
var Companion_instance_0;
function Companion_getInstance_4() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function HttpResponse$stringBody$delegate$lambda(this$0) {
  return () => decodeToString(this$0.x45_1);
}
function HttpResponse$_get_stringBody_$ref_nmyr7m() {
  return (p0) => p0.z45();
}
function applySystemProxy(_this__u8e3s4) {
  var proxyUrl = proxyUrlFromEnv();
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(proxyUrl == null || isBlank(proxyUrl))) {
    _this__u8e3s4.y3k(applySystemProxy$lambda(proxyUrl));
  }
}
function applySystemProxy$lambda($proxyUrl) {
  return ($this$engine) => {
    $this$engine.a3p_1 = ProxyBuilder_instance.n44(Url($proxyUrl));
    return Unit_instance;
  };
}
function WebsocketRequest$start$slambda$slambda_1(this$0, $frame) {
  var i = new WebsocketRequest$start$slambda$slambda(this$0, $frame);
  var l = ($this$launch, $completion) => i.k2l($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function WebsocketRequest$start$slambda$slambda_2(this$0, $frame) {
  var i = new WebsocketRequest$start$slambda$slambda_0(this$0, $frame);
  var l = ($this$launch, $completion) => i.k2l($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function WebsocketRequest$textListener$slambda_0() {
  var i = new WebsocketRequest$textListener$slambda();
  var l = (it, $completion) => i.t46(it, $completion);
  l.$arity = 1;
  return l;
}
function WebsocketRequest$bytesListener$slambda_0() {
  var i = new WebsocketRequest$bytesListener$slambda();
  var l = (it, $completion) => i.u46(it, $completion);
  l.$arity = 1;
  return l;
}
function WebsocketRequest$onOpenListener$lambda(it) {
  return Unit_instance;
}
function WebsocketRequest$onCloseListener$lambda(it) {
  return Unit_instance;
}
function WebsocketRequest$onErrorListener$lambda(it) {
  return Unit_instance;
}
function WebsocketRequest$client$lambda($this$HttpClient) {
  applySystemProxy($this$HttpClient);
  var tmp = Plugin_getInstance();
  $this$HttpClient.z3k(tmp, WebsocketRequest$client$lambda$lambda);
  return Unit_instance;
}
function WebsocketRequest$client$lambda$lambda($this$install) {
  // Inline function 'kotlin.time.Companion.milliseconds' call
  Companion_getInstance();
  // Inline function 'io.ktor.client.plugins.websocket.pingInterval' call
  var tmp = $this$install;
  var tmp0_safe_receiver = toDuration(20000, DurationUnit_MILLISECONDS_getInstance());
  var tmp_0;
  var tmp_1 = tmp0_safe_receiver;
  if ((tmp_1 == null ? null : new Duration(tmp_1)) == null) {
    tmp_0 = null;
  } else {
    tmp_0 = _Duration___get_inWholeMilliseconds__impl__msfiry(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp_0;
  tmp.t3y_1 = tmp1_elvis_lhs == null ? 0n : tmp1_elvis_lhs;
  return Unit_instance;
}
function WebsocketRequest$start$lambda$lambda($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.j46_1.t2().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.u2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.v2();
      $this$headers.v2p(k, v);
    }
    return Unit_instance;
  };
}
function WebsocketRequest$start$lambda($method, $req) {
  return ($this$webSocket) => {
    $this$webSocket.q3k_1 = $method;
    if (!($req.g46_1 == null)) {
      // Inline function 'kotlin.checkNotNull' call
      var tmp0 = $req.g46_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          var message = 'Required value was null.';
          throw IllegalStateException.o(toString(message));
        } else {
          tmp$ret$1 = tmp0;
          break $l$block;
        }
      }
      var tmp = tmp$ret$1;
      takeFrom($this$webSocket.p3k_1, URLBuilder(tmp));
    } else {
      url($this$webSocket, $req.c46_1, $req.d46_1, $req.f46_1, $req.e46_1);
    }
    headers($this$webSocket, WebsocketRequest$start$lambda$lambda($req));
    return Unit_instance;
  };
}
function WebsocketRequest$start$slambda_0(this$0, $req) {
  var i = new WebsocketRequest$start$slambda(this$0, $req);
  var l = ($this$webSocket, $completion) => i.x46($this$webSocket, $completion);
  l.$arity = 1;
  return l;
}
function applySkipSSLValidation(_this__u8e3s4) {
  throw IllegalStateException.o('Skip SSL Validation is not supported on JS target.');
}
function proxyUrlFromEnv() {
  return null;
}
//region block: post-declaration
initMetadataForClass(Type, 'Type');
initMetadataForCompanion(Companion);
initMetadataForClass(HttpParameter, 'HttpParameter');
initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
initMetadataForClass(HttpResponse, 'HttpResponse');
initMetadataForLambda(WebsocketRequest$start$slambda$slambda, VOID, VOID, [1]);
initMetadataForLambda(WebsocketRequest$start$slambda$slambda_0, VOID, VOID, [1]);
initMetadataForLambda(WebsocketRequest$textListener$slambda, VOID, VOID, [1]);
initMetadataForLambda(WebsocketRequest$bytesListener$slambda, VOID, VOID, [1]);
initMetadataForLambda(WebsocketRequest$start$slambda, VOID, VOID, [1]);
initMetadataForClass(WebsocketRequest, 'WebsocketRequest', WebsocketRequest, VOID, VOID, [0, 1]);
//endregion
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  WebsocketRequest as WebsocketRequest38pjwt1m63ieg,
  HttpRequest as HttpRequest3gg7t5d9j2hk9,
};
//endregion

//# sourceMappingURL=khttpclient.mjs.map
