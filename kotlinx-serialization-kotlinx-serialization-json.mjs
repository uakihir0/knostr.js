import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  SerializableWithd2dap36updxd as SerializableWith,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  SEALED_getInstance2pc3convncp73 as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  STRING_getInstance1ov5zayfui8fl as STRING_getInstance,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  ENUM_getInstance1f3d4zr61j5rk as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  ElementMarker33ojvsajwmzts as ElementMarker,
  CLASS_getInstance3ax1g1upf6nuo as CLASS_getInstance,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  LIST_getInstance2xmlsct1exo3w as LIST_getInstance,
  CONTEXTUAL_getInstance2bsxm25kydylq as CONTEXTUAL_getInstance,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MAP_getInstance173r3f2itu405 as MAP_getInstance,
  ENUMlmq49cvwy4ow as ENUM,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  findPolymorphicSerializer1nm87hvemahcj as findPolymorphicSerializer,
  missingFieldExceptionWithNewMessage2gqddjx5jxge9 as missingFieldExceptionWithNewMessage,
  MissingFieldException24tqif29emcmi as MissingFieldException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  OBJECT_getInstance2hwgzvvdc8p80 as OBJECT_getInstance,
  findPolymorphicSerializerk638ixyjovk5 as findPolymorphicSerializer_0,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
  serializer3ikrxnm8b29d6 as serializer_1,
  serializer36584sjyg5661 as serializer_2,
  serializer1q7c5q67ysppr as serializer_3,
  NamedValueDecoderzk26ztf92xbq as NamedValueDecoder,
  getContextualDescriptor2n1gf3b895yb8 as getContextualDescriptor,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  toString30pk9tzaqopn as toString_0,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  StringBuildermazzzhj6kkai as StringBuilder,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  KtMap140uvy3s5zad8 as KtMap,
  NumberFormatException3bgsm2s9o4t55 as NumberFormatException,
  KtList3hktaavzmj137 as KtList,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  toDouble1kn912gjoizjp as toDouble,
  StringCompanionObject_instance3btc7up7fjjpg as StringCompanionObject_instance,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstancehe6v7kxreu2f as Companion_getInstance,
  _ULong___get_data__impl__fggpzb35t7vg7og3i8u as _ULong___get_data__impl__fggpzb,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  constructCallableReference23y65rf941mch as constructCallableReference,
  lazy2hsh8ze7j6ikd as lazy,
  protoOf180f3jzyo7rfj as protoOf,
  captureStack1fzi4aczwc4hg as captureStack,
  fromInt2ii0rejb1w62w as fromInt,
  _UInt___init__impl__l7qpdl2rn8hu5x5mgv2 as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl21yokvu77tk3i9 as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k3fkiaf1q5xsf7 as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7km926x5dlwl9j as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc430zp6cgd9f0jq as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg7h00k2smi73g as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne1zu56ujvuii2n as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee309dhgco6do74 as UShort__toString_impl_edaoee,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  isBlank1dvkhjjvox3p0 as isBlank,
  Collection1k04j3hzsbod0 as Collection,
  toSet1glep2u1u9tcb as toSet,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  arrayCopytctsywo3h7gj as arrayCopy,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  getKClass3t8tygqu4lcxf as getKClass,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  substringBefore3n7kj60w69hju as substringBefore,
  removeSuffix3d61x5lsuvuho as removeSuffix,
  substringAfter1hku067gwr5ve as substringAfter,
  contains3ue2qo8xhmpf1 as contains,
  plus17rl43at52ays as plus,
  convertToByte2t4hntblnhq2k as convertToByte,
  convertToShortn6n5n7ruahkm as convertToShort,
  convertToInty04h231mmjoh as convertToInt,
  isFinite1tx0gn65nl9tj as isFinite,
  isFinite2t9l5a275mxm6 as isFinite_0,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toUInt21lx0mz8wkp7c as toUInt,
  _UInt___get_data__impl__f0vqqw18g8a2o14g87q as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qryxuf3cmdpzyk as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g02451joe1vsk2vach as _UShort___get_data__impl__g0245,
  toString336ienavfnzn0 as toString_1,
  Companion_getInstance2bqk1h54tdzgh as Companion_getInstance_0,
  Companion_getInstance29en1y99grgx1 as Companion_getInstance_1,
  Companion_getInstancehpp5w6ty1u0b as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  Char__toInt_impl_vasixd1ka89vowck9tn as Char__toInt_impl_vasixd,
  numberToChar93r9buh19yek as numberToChar,
  equals2v6cggk171b6e as equals_0,
  toByte4i43936u611k as toByte,
  startsWith26w8qjqapeeq6 as startsWith,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  contains2c50nlxg7en7o as contains_0,
  single29ec4rh52687r as single,
  Char19o2r8palgjof as Char,
  emptySetcxexqki71qfa as emptySet,
  plus1ogy4liedzq5j as plus_0,
  toInt2q8uldh7sc951 as toInt,
  toList3jhuyej2anx2q as toList,
  enumEntries20mr21zbe3az4 as enumEntries,
  toNumber2e2hj9zugjwi2 as toNumber,
  last1vo29oleiqj36 as last,
  removeLast3759euu1xvfa3 as removeLast,
  lastIndexOf2d52xhix5ymjr as lastIndexOf,
  Char__minus_impl_a2frrh370khreoakmi6 as Char__minus_impl_a2frrh,
  multiply2k9eolhnz1bjv as multiply,
  add2suhfggl4zvkk as add,
  subtract2orl8z9upxd9l as subtract,
  numberToLong2pakxeg38estk as numberToLong,
  negate13xrbakfwasjy as negate,
  charArray2ujmm1qusno00 as charArray,
  indexOfwa4w6635jewi as indexOf,
  indexOf1xbs558u7wr52 as indexOf_0,
  substringiqarkczpya5m as substring,
  HashMap1a0ld5kgwhmhv as HashMap,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Json {
  constructor(configuration, serializersModule) {
    Default_getInstance();
    this.d1g_1 = configuration;
    this.e1g_1 = serializersModule;
    this.f1g_1 = new DescriptorSchemaCache();
  }
  pz() {
    return this.e1g_1;
  }
  g1g(serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.l1g();
    }
  }
  h1g(deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.dv(), null);
    var result = input.zy(deserializer);
    lexer.z1g();
    return result;
  }
  i1g(deserializer, element) {
    return readJson(this, element, deserializer);
  }
  j1g(string) {
    return this.h1g(JsonElementSerializer_getInstance(), string);
  }
}
class Default extends Json {
  constructor() {
    Default_instance = null;
    super(new JsonConfiguration(), EmptySerializersModule());
    Default_instance = this;
  }
}
class JsonBuilder {
  constructor(json) {
    this.a1h_1 = json.d1g_1.u1h_1;
    this.b1h_1 = json.d1g_1.z1h_1;
    this.c1h_1 = json.d1g_1.v1h_1;
    this.d1h_1 = json.d1g_1.w1h_1;
    this.e1h_1 = json.d1g_1.y1h_1;
    this.f1h_1 = json.d1g_1.a1i_1;
    this.g1h_1 = json.d1g_1.b1i_1;
    this.h1h_1 = json.d1g_1.d1i_1;
    this.i1h_1 = json.d1g_1.k1i_1;
    this.j1h_1 = json.d1g_1.f1i_1;
    this.k1h_1 = json.d1g_1.g1i_1;
    this.l1h_1 = json.d1g_1.h1i_1;
    this.m1h_1 = json.d1g_1.i1i_1;
    this.n1h_1 = json.d1g_1.j1i_1;
    this.o1h_1 = json.d1g_1.e1i_1;
    this.p1h_1 = json.d1g_1.x1h_1;
    this.q1h_1 = json.d1g_1.c1i_1;
    this.r1h_1 = json.pz();
    this.s1h_1 = json.d1g_1.l1i_1;
  }
  t1h() {
    if (this.q1h_1) {
      // Inline function 'kotlin.require' call
      if (!(this.h1h_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException.w1(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.i1h_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException.w1(toString(message_0));
      }
    }
    if (!this.e1h_1) {
      // Inline function 'kotlin.require' call
      if (!(this.f1h_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException.w1(toString(message_1));
      }
    } else if (!(this.f1h_1 === '    ')) {
      var tmp0 = this.f1h_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.f1h_1;
        throw IllegalArgumentException.w1(toString(message_2));
      }
    }
    return new JsonConfiguration(this.a1h_1, this.c1h_1, this.d1h_1, this.p1h_1, this.e1h_1, this.b1h_1, this.f1h_1, this.g1h_1, this.q1h_1, this.h1h_1, this.o1h_1, this.j1h_1, this.k1h_1, this.l1h_1, this.m1h_1, this.n1h_1, this.i1h_1, this.s1h_1);
  }
}
class JsonImpl extends Json {
  constructor(configuration, module_0) {
    super(configuration, module_0);
    validateConfiguration(this);
  }
}
class JsonClassDiscriminator {}
class JsonIgnoreUnknownKeys {}
class JsonNames {}
class JsonConfiguration {
  constructor(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    this.u1h_1 = encodeDefaults;
    this.v1h_1 = ignoreUnknownKeys;
    this.w1h_1 = isLenient;
    this.x1h_1 = allowStructuredMapKeys;
    this.y1h_1 = prettyPrint;
    this.z1h_1 = explicitNulls;
    this.a1i_1 = prettyPrintIndent;
    this.b1i_1 = coerceInputValues;
    this.c1i_1 = useArrayPolymorphism;
    this.d1i_1 = classDiscriminator;
    this.e1i_1 = allowSpecialFloatingPointValues;
    this.f1i_1 = useAlternativeNames;
    this.g1i_1 = namingStrategy;
    this.h1i_1 = decodeEnumsCaseInsensitive;
    this.i1i_1 = allowTrailingComma;
    this.j1i_1 = allowComments;
    this.k1i_1 = classDiscriminatorMode;
    this.l1i_1 = exceptionsWithDebugInfo;
  }
  toString() {
    return 'JsonConfiguration(encodeDefaults=' + this.u1h_1 + ', ignoreUnknownKeys=' + this.v1h_1 + ', isLenient=' + this.w1h_1 + ', ' + ('allowStructuredMapKeys=' + this.x1h_1 + ', prettyPrint=' + this.y1h_1 + ', explicitNulls=' + this.z1h_1 + ', ') + ("prettyPrintIndent='" + this.a1i_1 + "', coerceInputValues=" + this.b1i_1 + ', useArrayPolymorphism=' + this.c1i_1 + ', ') + ("classDiscriminator='" + this.d1i_1 + "', allowSpecialFloatingPointValues=" + this.e1i_1 + ', ') + ('useAlternativeNames=' + this.f1i_1 + ', namingStrategy=' + toString_0(this.g1i_1) + ', decodeEnumsCaseInsensitive=' + this.h1i_1 + ', ') + ('allowTrailingComma=' + this.i1i_1 + ', allowComments=' + this.j1i_1 + ', classDiscriminatorMode=' + this.k1i_1.toString() + ', exceptionsWithDebugInfo=' + this.l1i_1 + ')');
  }
}
class ClassDiscriminatorMode extends Enum {}
class JsonDecoder {}
class Companion {}
class JsonElement {}
class JsonObject extends JsonElement {
  constructor(content) {
    super();
    this.o1i_1 = content;
  }
  equals(other) {
    return equals(this.o1i_1, other);
  }
  hashCode() {
    return hashCode(this.o1i_1);
  }
  toString() {
    var tmp = this.o1i_1.u2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  }
  j1() {
    return this.o1i_1.j1();
  }
  p1i(key) {
    return this.o1i_1.x3(key);
  }
  x3(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.p1i((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  q1i(key) {
    return this.o1i_1.z3(key);
  }
  z3(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.q1i((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  m2() {
    return this.o1i_1.m2();
  }
  a4() {
    return this.o1i_1.a4();
  }
  b4() {
    return this.o1i_1.b4();
  }
  u2() {
    return this.o1i_1.u2();
  }
}
class Companion_0 {}
class Companion_1 {}
class JsonPrimitive extends JsonElement {
  toString() {
    return this.r1i();
  }
}
class Companion_2 {}
class JsonArray extends JsonElement {
  constructor(content) {
    super();
    this.y1i_1 = content;
  }
  equals(other) {
    return equals(this.y1i_1, other);
  }
  hashCode() {
    return hashCode(this.y1i_1);
  }
  toString() {
    return joinToString(this.y1i_1, ',', '[', ']');
  }
  j1() {
    return this.y1i_1.j1();
  }
  z1i(element) {
    return this.y1i_1.r3(element);
  }
  r3(element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.z1i(element instanceof JsonElement ? element : THROW_CCE());
  }
  l1() {
    return this.y1i_1.l1();
  }
  a1j(elements) {
    return this.y1i_1.s3(elements);
  }
  s3(elements) {
    return this.a1j(elements);
  }
  k2(index) {
    return this.y1i_1.k2(index);
  }
  b1j(element) {
    return this.y1i_1.t3(element);
  }
  t3(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.b1j(element instanceof JsonElement ? element : THROW_CCE());
  }
  c1j(element) {
    return this.y1i_1.u3(element);
  }
  u3(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.c1j(element instanceof JsonElement ? element : THROW_CCE());
  }
  v3() {
    return this.y1i_1.v3();
  }
  n2(index) {
    return this.y1i_1.n2(index);
  }
  w3(fromIndex, toIndex) {
    return this.y1i_1.w3(fromIndex, toIndex);
  }
  asJsReadonlyArrayView() {
    return this.y1i_1.asJsReadonlyArrayView();
  }
  m2() {
    return this.y1i_1.m2();
  }
}
class JsonNull extends JsonPrimitive {
  constructor() {
    JsonNull_instance = null;
    super();
    JsonNull_instance = this;
    this.d1j_1 = 'null';
  }
  r1i() {
    return this.d1j_1;
  }
  e1j() {
    return JsonNullSerializer_getInstance();
  }
  s17(typeParamsSerializers) {
    return this.e1j();
  }
}
class JsonLiteral extends JsonPrimitive {
  constructor(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    super();
    this.f1j_1 = isString;
    this.g1j_1 = coerceToInlineType;
    this.h1j_1 = toString(body);
    if (!(this.g1j_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.g1j_1.ix()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException.w1(toString(message));
      }
    }
  }
  r1i() {
    return this.h1j_1;
  }
  toString() {
    var tmp;
    if (this.f1j_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.h1();
      printQuoted(this_0, this.h1j_1);
      tmp = this_0.toString();
    } else {
      tmp = this.h1j_1;
    }
    return tmp;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.f1j_1 === other.f1j_1))
      return false;
    if (!(this.h1j_1 === other.h1j_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.f1j_1);
    result = imul(31, result) + getStringHashCode(this.h1j_1) | 0;
    return result;
  }
}
class JsonObjectBuilder {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.j1j_1 = LinkedHashMap.ob();
  }
  k1j(key, element) {
    return this.j1j_1.g4(key, element);
  }
  t1h() {
    return new JsonObject(this.j1j_1);
  }
}
class JsonArrayBuilder {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.l1j_1 = ArrayList.l2();
  }
  m1j(element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.l1j_1.d2(element);
    return true;
  }
  t1h() {
    return new JsonArray(this.l1j_1);
  }
}
class JsonObjectDescriptor {
  constructor() {
    JsonObjectDescriptor_instance = this;
    this.n1j_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).dv();
    this.o1j_1 = 'kotlinx.serialization.json.JsonObject';
  }
  gx() {
    return this.o1j_1;
  }
  lx(index) {
    return this.n1j_1.lx(index);
  }
  mx(name) {
    return this.n1j_1.mx(name);
  }
  nx(index) {
    return this.n1j_1.nx(index);
  }
  ox(index) {
    return this.n1j_1.ox(index);
  }
  px(index) {
    return this.n1j_1.px(index);
  }
  hx() {
    return this.n1j_1.hx();
  }
  zw() {
    return this.n1j_1.zw();
  }
  ix() {
    return this.n1j_1.ix();
  }
  jx() {
    return this.n1j_1.jx();
  }
  kx() {
    return this.n1j_1.kx();
  }
}
class JsonObjectSerializer {
  constructor() {
    JsonObjectSerializer_instance = this;
    this.p1j_1 = JsonObjectDescriptor_getInstance();
  }
  dv() {
    return this.p1j_1;
  }
  q1j(encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ev(encoder, value);
  }
  ev(encoder, value) {
    return this.q1j(encoder, value instanceof JsonObject ? value : THROW_CCE());
  }
  fv(decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).fv(decoder));
  }
}
class JsonElementSerializer {
  constructor() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.v1j_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  dv() {
    return this.v1j_1;
  }
  w1j(encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.t10(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.t10(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.t10(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  ev(encoder, value) {
    return this.w1j(encoder, value instanceof JsonElement ? value : THROW_CCE());
  }
  fv(decoder) {
    var input = asJsonDecoder(decoder);
    return input.n1i();
  }
}
class JsonPrimitiveSerializer {
  constructor() {
    JsonPrimitiveSerializer_instance = this;
    this.r1j_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  dv() {
    return this.r1j_1;
  }
  x1j(encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.t10(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.t10(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  }
  ev(encoder, value) {
    return this.x1j(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  }
  fv(decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.n1i();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.m1i().d1g_1.l1i_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  }
}
class JsonArrayDescriptor {
  constructor() {
    JsonArrayDescriptor_instance = this;
    this.l1k_1 = ListSerializer(JsonElementSerializer_getInstance()).dv();
    this.m1k_1 = 'kotlinx.serialization.json.JsonArray';
  }
  gx() {
    return this.m1k_1;
  }
  lx(index) {
    return this.l1k_1.lx(index);
  }
  mx(name) {
    return this.l1k_1.mx(name);
  }
  nx(index) {
    return this.l1k_1.nx(index);
  }
  ox(index) {
    return this.l1k_1.ox(index);
  }
  px(index) {
    return this.l1k_1.px(index);
  }
  hx() {
    return this.l1k_1.hx();
  }
  zw() {
    return this.l1k_1.zw();
  }
  ix() {
    return this.l1k_1.ix();
  }
  jx() {
    return this.l1k_1.jx();
  }
  kx() {
    return this.l1k_1.kx();
  }
}
class JsonArraySerializer {
  constructor() {
    JsonArraySerializer_instance = this;
    this.u1j_1 = JsonArrayDescriptor_getInstance();
  }
  dv() {
    return this.u1j_1;
  }
  n1k(encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).ev(encoder, value);
  }
  ev(encoder, value) {
    return this.n1k(encoder, value instanceof JsonArray ? value : THROW_CCE());
  }
  fv(decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).fv(decoder));
  }
}
class JsonNullSerializer {
  constructor() {
    JsonNullSerializer_instance = this;
    this.s1j_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  dv() {
    return this.s1j_1;
  }
  o1k(encoder, value) {
    verify(encoder);
    encoder.wz();
  }
  ev(encoder, value) {
    return this.o1k(encoder, value instanceof JsonNull ? value : THROW_CCE());
  }
  fv(decoder) {
    verify_0(decoder);
    if (decoder.ly()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.my();
    return JsonNull_getInstance();
  }
}
class JsonLiteralSerializer {
  constructor() {
    JsonLiteralSerializer_instance = this;
    this.t1j_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  dv() {
    return this.t1j_1;
  }
  p1k(encoder, value) {
    verify(encoder);
    if (value.f1j_1) {
      return encoder.f10(value.h1j_1);
    }
    if (!(value.g1j_1 == null)) {
      return encoder.h10(value.g1j_1).f10(value.h1j_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.h1j_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.b10(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.h1j_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).nu_1;
      var tmp_1 = encoder.h10(serializer_0(Companion_getInstance()).dv());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.b10(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.h1j_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.d10(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.h1j_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.xz(tmp3_safe_receiver);
    }
    encoder.f10(value.h1j_1);
  }
  ev(encoder, value) {
    return this.p1k(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  }
  fv(decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.n1i();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.m1i().d1g_1.l1i_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  }
}
class defer$1 {
  constructor($deferred) {
    this.q1k_1 = lazy($deferred);
  }
  gx() {
    return _get_original__l7ku1m(this).gx();
  }
  hx() {
    return _get_original__l7ku1m(this).hx();
  }
  jx() {
    return _get_original__l7ku1m(this).jx();
  }
  lx(index) {
    return _get_original__l7ku1m(this).lx(index);
  }
  mx(name) {
    return _get_original__l7ku1m(this).mx(name);
  }
  nx(index) {
    return _get_original__l7ku1m(this).nx(index);
  }
  ox(index) {
    return _get_original__l7ku1m(this).ox(index);
  }
  px(index) {
    return _get_original__l7ku1m(this).px(index);
  }
}
class JsonEncoder {}
class JsonException extends SerializationException {
  static r1k(message) {
    var $this = this.gw(message);
    captureStack($this, $this.x1i_1);
    $this.w1i_1 = message;
    delete $this.message;
    return $this;
  }
  r() {
    return this.w1i_1;
  }
  get message() {
    return this.r();
  }
}
class JsonDecodingException extends JsonException {
  constructor(fullMessage, shortMessage, offset, path, input, hint) {
    return new.target.k1k(fullMessage, shortMessage, offset, path, input, hint);
  }
  static k1k(fullMessage, shortMessage, offset, path, input, hint) {
    var $this = this.r1k(fullMessage);
    captureStack($this, $this.j1k_1);
    $this.e1k_1 = shortMessage;
    $this.f1k_1 = offset;
    $this.g1k_1 = path;
    $this.h1k_1 = input;
    $this.i1k_1 = hint;
    return $this;
  }
}
class JsonEncodingException extends JsonException {
  constructor(shortMessage, classSerialName, hint) {
    return new.target.c1l(shortMessage, classSerialName, hint);
  }
  static c1l(shortMessage, classSerialName, hint) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    var $this = this.r1k(formatEncodingException(shortMessage, hint));
    captureStack($this, $this.b1l_1);
    $this.y1k_1 = shortMessage;
    $this.z1k_1 = classSerialName;
    $this.a1l_1 = hint;
    return $this;
  }
}
class Composer {
  constructor(writer) {
    this.d1l_1 = writer;
    this.e1l_1 = true;
  }
  f1l() {
    this.e1l_1 = true;
  }
  g1l() {
    return Unit_instance;
  }
  h1l() {
    this.e1l_1 = false;
  }
  i1l() {
    this.e1l_1 = false;
  }
  j1l() {
    return Unit_instance;
  }
  k1l(v) {
    return this.d1l_1.l1l(v);
  }
  m1l(v) {
    return this.d1l_1.n1l(v);
  }
  o1l(v) {
    return this.d1l_1.n1l(v.toString());
  }
  p1l(v) {
    return this.d1l_1.n1l(v.toString());
  }
  q1l(v) {
    return this.d1l_1.r1l(fromInt(v));
  }
  s1l(v) {
    return this.d1l_1.r1l(fromInt(v));
  }
  t1l(v) {
    return this.d1l_1.r1l(fromInt(v));
  }
  u1l(v) {
    return this.d1l_1.r1l(v);
  }
  v1l(v) {
    return this.d1l_1.n1l(v.toString());
  }
  w1l(value) {
    return this.d1l_1.x1l(value);
  }
}
class ComposerForUnsignedNumbers extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.a1m_1 = forceQuoting;
  }
  t1l(v) {
    if (this.a1m_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.w1l(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.m1l(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  }
  u1l(v) {
    if (this.a1m_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.w1l(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.m1l(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  }
  q1l(v) {
    if (this.a1m_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.w1l(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.m1l(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  }
  s1l(v) {
    if (this.a1m_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.w1l(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.m1l(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  }
}
class ComposerForUnquotedLiterals extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.d1m_1 = forceQuoting;
  }
  w1l(value) {
    if (this.d1m_1) {
      super.w1l(value);
    } else {
      super.m1l(value);
    }
  }
}
class ComposerWithPrettyPrint extends Composer {
  constructor(writer, json) {
    super(writer);
    this.g1m_1 = json;
    this.h1m_1 = 0;
  }
  f1l() {
    this.e1l_1 = true;
    this.h1m_1 = this.h1m_1 + 1 | 0;
  }
  g1l() {
    this.h1m_1 = this.h1m_1 - 1 | 0;
  }
  h1l() {
    this.e1l_1 = false;
    this.m1l('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.h1m_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.m1l(this.g1m_1.d1g_1.a1i_1);
      }
       while (inductionVariable < times);
  }
  i1l() {
    if (this.e1l_1)
      this.e1l_1 = false;
    else {
      this.h1l();
    }
  }
  j1l() {
    this.k1l(_Char___init__impl__6a9atx(32));
  }
}
class JsonElementMarker {
  constructor(descriptor) {
    var tmp = this;
    tmp.i1m_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.j1m_1 = false;
  }
  k1m(index) {
    this.i1m_1.j15(index);
  }
  l1m() {
    return this.i1m_1.k15();
  }
}
class Tombstone {}
class RedactedKey {}
class JsonPath {
  constructor(configuration) {
    this.s1m_1 = configuration;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.t1m_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.u1m_1 = tmp_2;
    this.v1m_1 = -1;
  }
  w1m(sd) {
    this.v1m_1 = this.v1m_1 + 1 | 0;
    var depth = this.v1m_1;
    if (depth === this.t1m_1.length) {
      resize(this);
    }
    this.t1m_1[depth] = sd;
  }
  x1m(index) {
    this.u1m_1[this.v1m_1] = index;
  }
  y1m(key) {
    var tmp;
    if (!(this.u1m_1[this.v1m_1] === -2)) {
      this.v1m_1 = this.v1m_1 + 1 | 0;
      tmp = this.v1m_1 === this.t1m_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.t1m_1[this.v1m_1] = this.s1m_1.l1i_1 ? key : RedactedKey_instance;
    this.u1m_1[this.v1m_1] = -2;
  }
  z1m() {
    if (this.u1m_1[this.v1m_1] === -2) {
      this.t1m_1[this.v1m_1] = Tombstone_instance;
    }
  }
  a1n() {
    var depth = this.v1m_1;
    if (this.u1m_1[depth] === -2) {
      this.u1m_1[depth] = -1;
      this.v1m_1 = this.v1m_1 - 1 | 0;
    }
    if (!(this.v1m_1 === -1)) {
      this.v1m_1 = this.v1m_1 - 1 | 0;
    }
  }
  b1n() {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.h1();
    this_0.i1('$');
    // Inline function 'kotlin.repeat' call
    var times = this.v1m_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.t1m_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.hx(), LIST_getInstance())) {
            if (!(this.u1m_1[index] === -1)) {
              this_0.i1('[');
              this_0.zf(this.u1m_1[index]);
              this_0.i1(']');
            }
          } else {
            var idx = this.u1m_1[index];
            if (idx >= 0) {
              this_0.i1('.');
              this_0.i1(element.lx(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.i1('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.i1('[');
              this_0.i1("'");
              this_0.o1(element);
              this_0.i1("'");
              this_0.i1(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  }
  toString() {
    return this.b1n();
  }
}
class JsonSerializersModuleValidator {
  constructor(configuration) {
    this.c1n_1 = configuration.c1i_1;
    this.d1n_1 = !configuration.k1i_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  u1f(kClass, provider) {
  }
  x1f(baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.dv();
    checkKind(this, descriptor, actualClass);
  }
  y1f(baseClass, defaultSerializerProvider) {
  }
  z1f(baseClass, defaultDeserializerProvider) {
  }
}
class JsonTreeReader {
  constructor(configuration, lexer) {
    this.o1n_1 = lexer;
    this.p1n_1 = configuration.w1h_1;
    this.q1n_1 = configuration.i1i_1;
    this.r1n_1 = 0;
  }
  x1n() {
    var token = this.o1n_1.t1n();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.r1n_1 = this.r1n_1 + 1 | 0;
      if (this.r1n_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.r1n_1 = this.r1n_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.o1n_1.n1m('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  }
}
class Key {}
class DescriptorSchemaCache {
  constructor() {
    this.o1m_1 = createMapForCache(16);
  }
  a1o(descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.o1m_1;
    var value_0 = this_0.z3(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.g4(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.g4(tmp2, value_1);
  }
  p1m(descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.b1o(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.a1o(descriptor, key, value);
    return value;
  }
  b1o(descriptor, key) {
    var tmp0_safe_receiver = this.o1m_1.z3(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.z3(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  }
}
class DiscriminatorHolder {
  constructor(discriminatorToSkip) {
    this.c1o_1 = discriminatorToSkip;
  }
}
class StreamingJsonDecoder extends AbstractDecoder {
  constructor(json, mode, lexer, descriptor, discriminatorHolder) {
    super();
    this.m1g_1 = json;
    this.n1g_1 = mode;
    this.o1g_1 = lexer;
    this.p1g_1 = this.m1g_1.pz();
    this.q1g_1 = -1;
    this.r1g_1 = discriminatorHolder;
    this.s1g_1 = this.m1g_1.d1g_1;
    this.t1g_1 = this.s1g_1.z1h_1 ? null : new JsonElementMarker(descriptor);
  }
  m1i() {
    return this.m1g_1;
  }
  pz() {
    return this.p1g_1;
  }
  n1i() {
    return (new JsonTreeReader(this.m1g_1.d1g_1, this.o1g_1)).x1n();
  }
  zy(deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.m1g_1.d1g_1.c1i_1;
      }
      if (tmp) {
        return deserializer.fv(this);
      }
      var discriminator = classDiscriminator(deserializer.dv(), this.m1g_1);
      var tmp0_elvis_lhs = this.o1g_1.l1o(discriminator, this.s1g_1.w1h_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.m1i().d1g_1.c1i_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.fv(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.dv(), this.m1i());
          var tmp2_0 = this.n1i();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.dv().gx();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2_0).f1() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.o1g_1.w1g_1.b1n();
            var tmp_2;
            if (this.m1i().d1g_1.l1i_1) {
              var tmp$ret$6 = toString(tmp2_0);
              tmp_2 = toString(minify(tmp$ret$6));
            } else {
              tmp_2 = null;
            }
            var inputValue = tmp_2;
            throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.q1i(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_3;
          try {
            tmp_3 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_4;
            if ($p instanceof SerializationException) {
              var it = $p;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var shortMessage = ensureNotNull(it.message);
              var tmp_5;
              if (this.m1i().d1g_1.l1i_1) {
                var tmp$ret$10 = jsonTree.toString();
                tmp_5 = toString(minify(tmp$ret$10));
              } else {
                tmp_5 = null;
              }
              var inputValue_0 = tmp_5;
              throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_3;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.m1i(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p_0) {
        var tmp_8;
        if ($p_0 instanceof SerializationException) {
          var it_0 = $p_0;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.o1g_1.n1m(message, VOID, hint);
        } else {
          throw $p_0;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.r1g_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.fv(this);
    } catch ($p_1) {
      if ($p_1 instanceof MissingFieldException) {
        var e = $p_1;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.o1g_1.w1g_1.b1n());
      } else {
        throw $p_1;
      }
    }
  }
  az(descriptor) {
    var newMode = switchMode(this.m1g_1, descriptor);
    this.o1g_1.w1g_1.w1m(descriptor);
    this.o1g_1.d1o(newMode.o1o_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.s1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.m1g_1, newMode, this.o1g_1, descriptor, this.r1g_1);
        break;
      default:
        var tmp_0;
        if (this.n1g_1.equals(newMode) && this.m1g_1.d1g_1.z1h_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.m1g_1, newMode, this.o1g_1, descriptor, this.r1g_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  }
  bz(descriptor) {
    if (descriptor.jx() === 0 && ignoreUnknownKeys(descriptor, this.m1g_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.o1g_1.e1o() && !this.m1g_1.d1g_1.i1i_1) {
      invalidTrailingComma(this.o1g_1, '');
    }
    this.o1g_1.d1o(this.n1g_1.p1o_1);
    this.o1g_1.w1g_1.a1n();
  }
  ly() {
    var tmp;
    var tmp0_safe_receiver = this.t1g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1m_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.o1g_1.q1o();
    } else {
      tmp = false;
    }
    return tmp;
  }
  my() {
    return null;
  }
  mz(descriptor, index, deserializer, previousValue) {
    var isMapKey = this.n1g_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.o1g_1.w1g_1.z1m();
    }
    var value = super.mz(descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.o1g_1.w1g_1.y1m(value);
    }
    return value;
  }
  rz(descriptor) {
    var index;
    switch (this.n1g_1.s1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.n1g_1.equals(WriteMode_MAP_getInstance())) {
      this.o1g_1.w1g_1.x1m(index);
    }
    return index;
  }
  ny() {
    return this.o1g_1.r1o();
  }
  oy() {
    var value = this.o1g_1.s1o();
    if (!(value === fromInt(convertToByte(value)))) {
      this.o1g_1.n1m("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  }
  py() {
    var value = this.o1g_1.s1o();
    if (!(value === fromInt(convertToShort(value)))) {
      this.o1g_1.n1m("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  }
  qy() {
    var value = this.o1g_1.s1o();
    if (!(value === fromInt(convertToInt(value)))) {
      this.o1g_1.n1m("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  }
  ry() {
    return this.o1g_1.s1o();
  }
  sy() {
    var tmp0 = this.o1g_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1n();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.n1m("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.m1g_1.d1g_1.e1i_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.o1g_1, result);
  }
  ty() {
    var tmp0 = this.o1g_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1n();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.n1m("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.m1g_1.d1g_1.e1i_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.o1g_1, result);
  }
  uy() {
    var string = this.o1g_1.w1n();
    if (!(string.length === 1)) {
      this.o1g_1.n1m("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  }
  vy() {
    var tmp;
    if (this.s1g_1.w1h_1) {
      tmp = this.o1g_1.k1o();
    } else {
      tmp = this.o1g_1.v1n();
    }
    return tmp;
  }
  xy(descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.o1g_1, this.m1g_1) : super.xy(descriptor);
  }
  wy(enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.m1g_1, this.vy(), ' at path ' + this.o1g_1.w1g_1.b1n());
  }
}
class JsonDecoderForUnsignedTypes extends AbstractDecoder {
  constructor(lexer, json) {
    super();
    this.t1o_1 = lexer;
    this.u1o_1 = json.pz();
  }
  pz() {
    return this.u1o_1;
  }
  rz(descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException.o(toString(message));
  }
  qy() {
    var tmp0 = this.t1o_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1n();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.n1m("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  ry() {
    var tmp0 = this.t1o_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1n();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.n1m("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  oy() {
    var tmp0 = this.t1o_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1n();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.n1m("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  py() {
    var tmp0 = this.t1o_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1n();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.n1m("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
}
class StreamingJsonEncoder extends AbstractEncoder {
  constructor(composer, json, mode, modeReuseCache) {
    return new.target.v1o(composer, json, mode, modeReuseCache);
  }
  static v1o(composer, json, mode, modeReuseCache) {
    var $this = this.tz();
    $this.e1n_1 = composer;
    $this.f1n_1 = json;
    $this.g1n_1 = mode;
    $this.h1n_1 = modeReuseCache;
    $this.i1n_1 = $this.f1n_1.pz();
    $this.j1n_1 = $this.f1n_1.d1g_1;
    $this.k1n_1 = false;
    $this.l1n_1 = null;
    $this.m1n_1 = null;
    var i = $this.g1n_1.s1_1;
    if (!($this.h1n_1 == null)) {
      if (!($this.h1n_1[i] === null) || !($this.h1n_1[i] === $this)) {
        $this.h1n_1[i] = $this;
      }
    }
    return $this;
  }
  m1i() {
    return this.f1n_1;
  }
  static n1n(output, json, mode, modeReuseCache) {
    return this.v1o(Composer_0(output, json), json, mode, modeReuseCache);
  }
  pz() {
    return this.i1n_1;
  }
  y10(descriptor, index) {
    return this.j1n_1.u1h_1;
  }
  t10(serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.m1i().d1g_1.c1i_1) {
        serializer.ev(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.m1i().d1g_1.k1i_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.m1i().d1g_1.k1i_1.s1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.dv().hx();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.dv(), this.m1i()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.dv()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException.w1(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        access$checkEncodingConflicts$tPolymorphicKt(this.m1i(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.dv().hx());
        var serialName = actualSerializer.dv().gx();
        this.l1n_1 = baseClassDiscriminator;
        this.m1n_1 = serialName;
      }
      actualSerializer.ev(this, value);
    }
  }
  az(descriptor) {
    var newMode = switchMode(this.f1n_1, descriptor);
    if (!(newMode.o1o_1 === _Char___init__impl__6a9atx(0))) {
      this.e1n_1.k1l(newMode.o1o_1);
      this.e1n_1.f1l();
    }
    var discriminator = this.l1n_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.m1n_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.gx() : tmp0_elvis_lhs);
      this.l1n_1 = null;
      this.m1n_1 = null;
    }
    if (this.g1n_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.h1n_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.s1_1];
    return tmp2_elvis_lhs == null ? StreamingJsonEncoder.v1o(this.e1n_1, this.f1n_1, newMode, this.h1n_1) : tmp2_elvis_lhs;
  }
  bz(descriptor) {
    if (!(this.g1n_1.p1o_1 === _Char___init__impl__6a9atx(0))) {
      this.e1n_1.g1l();
      this.e1n_1.i1l();
      this.e1n_1.k1l(this.g1n_1.p1o_1);
    }
  }
  uz(descriptor, index) {
    switch (this.g1n_1.s1_1) {
      case 1:
        if (!this.e1n_1.e1l_1) {
          this.e1n_1.k1l(_Char___init__impl__6a9atx(44));
        }

        this.e1n_1.h1l();
        break;
      case 2:
        if (!this.e1n_1.e1l_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.e1n_1.k1l(_Char___init__impl__6a9atx(44));
            this.e1n_1.h1l();
            tmp_0 = true;
          } else {
            this.e1n_1.k1l(_Char___init__impl__6a9atx(58));
            this.e1n_1.j1l();
            tmp_0 = false;
          }
          tmp.k1n_1 = tmp_0;
        } else {
          this.k1n_1 = true;
          this.e1n_1.h1l();
        }

        break;
      case 3:
        if (index === 0)
          this.k1n_1 = true;
        if (index === 1) {
          this.e1n_1.k1l(_Char___init__impl__6a9atx(44));
          this.e1n_1.j1l();
          this.k1n_1 = false;
        }

        break;
      default:
        if (!this.e1n_1.e1l_1) {
          this.e1n_1.k1l(_Char___init__impl__6a9atx(44));
        }

        this.e1n_1.h1l();
        this.f10(getJsonElementName(descriptor, this.f1n_1, index));
        this.e1n_1.k1l(_Char___init__impl__6a9atx(58));
        this.e1n_1.j1l();
        break;
    }
    return true;
  }
  u10(descriptor, index, serializer, value) {
    if (!(value == null) || this.j1n_1.z1h_1) {
      super.u10(descriptor, index, serializer, value);
    }
  }
  h10(descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.e1n_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.e1n_1;
      } else {
        var tmp0 = this.e1n_1.d1l_1;
        var p1 = this.k1n_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = StreamingJsonEncoder.v1o(tmp$ret$0, this.f1n_1, this.g1n_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.e1n_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.e1n_1;
      } else {
        var tmp0_0 = this.e1n_1.d1l_1;
        var p1_0 = this.k1n_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = StreamingJsonEncoder.v1o(tmp$ret$2, this.f1n_1, this.g1n_1, null);
    } else if (!(this.l1n_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.m1n_1 = descriptor.gx();
      tmp = this;
    } else {
      tmp = super.h10(descriptor);
    }
    return tmp;
  }
  wz() {
    this.e1n_1.m1l('null');
  }
  xz(value) {
    if (this.k1n_1) {
      this.f10(value.toString());
    } else {
      this.e1n_1.v1l(value);
    }
  }
  yz(value) {
    if (this.k1n_1) {
      this.f10(value.toString());
    } else {
      this.e1n_1.q1l(value);
    }
  }
  zz(value) {
    if (this.k1n_1) {
      this.f10(value.toString());
    } else {
      this.e1n_1.s1l(value);
    }
  }
  a10(value) {
    if (this.k1n_1) {
      this.f10(value.toString());
    } else {
      this.e1n_1.t1l(value);
    }
  }
  b10(value) {
    if (this.k1n_1) {
      this.f10(value.toString());
    } else {
      this.e1n_1.u1l(value);
    }
  }
  c10(value) {
    if (this.k1n_1) {
      this.f10(value.toString());
    } else {
      this.e1n_1.o1l(value);
    }
    if (!this.j1n_1.e1i_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  }
  d10(value) {
    if (this.k1n_1) {
      this.f10(value.toString());
    } else {
      this.e1n_1.p1l(value);
    }
    if (!this.j1n_1.e1i_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  }
  e10(value) {
    this.f10(toString_1(value));
  }
  f10(value) {
    return this.e1n_1.w1l(value);
  }
  g10(enumDescriptor, index) {
    this.f10(enumDescriptor.lx(index));
  }
}
class AbstractJsonTreeDecoder extends NamedValueDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super();
    this.y1o_1 = json;
    this.z1o_1 = value;
    this.a1p_1 = polymorphicDiscriminator;
    this.b1p_1 = this.m1i().d1g_1;
  }
  m1i() {
    return this.y1o_1;
  }
  w2() {
    return this.z1o_1;
  }
  pz() {
    return this.m1i().pz();
  }
  d1p() {
    var tmp0_safe_receiver = this.k1d();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.e1p(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.w2() : tmp1_elvis_lhs;
  }
  c1p(currentTag) {
    return this.m1d() + ('.' + currentTag);
  }
  n1i() {
    return this.d1p();
  }
  zy(deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.m1i().d1g_1.c1i_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.fv(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.dv(), this.m1i());
      var tmp2 = this.n1i();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.dv().gx();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.m1d();
        var tmp_0;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var jsonTree = tmp2;
      var tmp0_safe_receiver = jsonTree.q1i(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var shortMessage = ensureNotNull(it.message);
          var tmp_3;
          if (this.m1i().d1g_1.l1i_1) {
            var tmp$ret$10 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$10));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_1;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.m1i(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  }
  l1d(parentName, childName) {
    return childName;
  }
  az(descriptor) {
    var currentObject = this.d1p();
    var tmp0_subject = descriptor.hx();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.m1i();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.gx();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.m1d();
        var tmp_2;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.m1i();
        var keyDescriptor = carrierDescriptor(descriptor.ox(0), this_0.pz());
        var keyKind = keyDescriptor.hx();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.m1i();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.gx();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.m1d();
            var tmp_6;
            if (this.m1i().d1g_1.l1i_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject);
        } else {
          if (this_0.d1g_1.x1h_1) {
            var tmp_7 = this.m1i();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.gx();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.m1d();
              var tmp_8;
              if (this.m1i().d1g_1.l1i_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.m1i();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.gx();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.m1d();
          var tmp_10;
          if (this.m1i().d1g_1.l1i_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, this.a1p_1);
      }
    }
    return tmp;
  }
  bz(descriptor) {
  }
  ly() {
    var tmp = this.d1p();
    return !(tmp instanceof JsonNull);
  }
  f1p(tag, enumDescriptor) {
    var tmp = this.m1i();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.e1p(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.gx();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.c1p(tag);
      var tmp_0;
      if (this.m1i().d1g_1.l1i_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.r1i());
  }
  y1d(tag, enumDescriptor) {
    return this.f1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  }
  g1p(tag) {
    return !(this.e1p(tag) === JsonNull_getInstance());
  }
  o1d(tag) {
    return this.g1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  h1p(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1p(tag);
        var tmp;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  p1d(tag) {
    return this.h1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  i1p(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1p(tag);
        var tmp;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  q1d(tag) {
    return this.i1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  j1p(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1p(tag);
        var tmp;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  r1d(tag) {
    return this.j1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  k1p(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1p(tag);
        var tmp;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  s1d(tag) {
    return this.k1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  l1p(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1p(tag);
        var tmp;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  t1d(tag) {
    return this.l1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  m1p(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1p(tag);
        var tmp;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.m1i().d1g_1.e1i_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.m1i().d1g_1.l1i_1) {
      var tmp$ret$13 = toString(this.d1p());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  }
  u1d(tag) {
    return this.m1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  n1p(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1p(tag);
        var tmp;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.m1i().d1g_1.e1i_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.m1i().d1g_1.l1i_1) {
      var tmp$ret$13 = toString(this.d1p());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  }
  v1d(tag) {
    return this.n1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  o1p(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1p(tag);
        var tmp;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.r1i()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.e3_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  w1d(tag) {
    return this.o1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  p1p(tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.e1p(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.c1p(tag);
      var tmp;
      if (this.m1i().d1g_1.l1i_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.c1p(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.m1i().d1g_1.l1i_1) {
        var tmp$ret$10 = toString(this.d1p());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.f1j_1 && !this.m1i().d1g_1.w1h_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.c1p(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.m1i().d1g_1.l1i_1) {
        var tmp$ret$14 = toString(this.d1p());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.h1j_1;
  }
  x1d(tag) {
    return this.p1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  q1p(tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.m1i();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.e1p(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.gx();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1p(tag);
        var tmp_1;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.r1i());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.m1i());
    } else {
      tmp = super.z1d(tag, inlineDescriptor);
    }
    return tmp;
  }
  z1d(tag, inlineDescriptor) {
    return this.q1p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  xy(descriptor) {
    return !(this.k1d() == null) ? super.xy(descriptor) : (new JsonPrimitiveDecoder(this.m1i(), this.w2(), this.a1p_1)).xy(descriptor);
  }
}
class JsonTreeDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    super(json, value, polymorphicDiscriminator);
    this.x1p_1 = value;
    this.y1p_1 = polyDescriptor;
    this.z1p_1 = 0;
    this.a1q_1 = false;
  }
  w2() {
    return this.x1p_1;
  }
  rz(descriptor) {
    $l$loop: while (this.z1p_1 < descriptor.jx()) {
      var _unary__edvuaz = this.z1p_1;
      this.z1p_1 = _unary__edvuaz + 1 | 0;
      var name = this.f1d(descriptor, _unary__edvuaz);
      var index = this.z1p_1 - 1 | 0;
      this.a1q_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.w2();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).x3(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.b1p_1.b1i_1)
          return index;
        var tmp0 = this.m1i();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.px(index);
          var elementDescriptor = descriptor.ox(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.zw()) {
            var tmp_1 = this.b1q(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.hx(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.zw()) {
              var tmp_3 = this.b1q(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.b1q(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$2 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.d1g_1.z1h_1 && elementDescriptor.zw();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$2 = true;
              break $l$block_2;
            }
          }
          tmp$ret$2 = false;
        }
        if (tmp$ret$2)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  }
  ly() {
    return !this.a1q_1 && super.ly();
  }
  g1d(descriptor, index) {
    var strategy = namingStrategy(descriptor, this.m1i());
    var baseName = descriptor.lx(index);
    if (strategy == null) {
      if (!this.b1p_1.f1i_1)
        return baseName;
      if (this.w2().a4().r3(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.m1i(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.w2().a4();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (deserializationNamesMap_0.z3(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.r1m(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  }
  e1p(tag) {
    return getValue(this.w2(), tag);
  }
  b1q(tag) {
    return this.w2().q1i(tag);
  }
  az(descriptor) {
    if (descriptor === this.y1p_1) {
      var tmp = this.m1i();
      var tmp2 = this.d1p();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.y1p_1.gx();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.m1d();
        var tmp_0;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, this.a1p_1, this.y1p_1);
    }
    return super.az(descriptor);
  }
  bz(descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.m1i())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.hx();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.m1i());
    var tmp_1;
    if (strategy == null && !this.b1p_1.f1i_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.m1i(), descriptor).a4();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.m1i()).b1o(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a4();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.w2().a4().l1();
    while (_iterator__ex2g4s.m1()) {
      var key = _iterator__ex2g4s.n1();
      if (!names.r3(key) && !(key === this.a1p_1)) {
        var tmp2 = "Encountered an unknown key '" + key + "'";
        var tmp4 = this.m1d();
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
        var tmp_3;
        if (this.m1i().d1g_1.l1i_1) {
          var tmp$ret$4 = this.w2().toString();
          tmp_3 = toString(minify(tmp$ret$4));
        } else {
          tmp_3 = null;
        }
        var inputValue = tmp_3;
        throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
      }
    }
  }
}
class JsonTreeListDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.i1q_1 = value;
    this.j1q_1 = this.i1q_1.m2();
    this.k1q_1 = -1;
  }
  w2() {
    return this.i1q_1;
  }
  g1d(descriptor, index) {
    return index.toString();
  }
  e1p(tag) {
    return this.i1q_1.k2(toInt(tag));
  }
  rz(descriptor) {
    while (this.k1q_1 < (this.j1q_1 - 1 | 0)) {
      this.k1q_1 = this.k1q_1 + 1 | 0;
      return this.k1q_1;
    }
    return -1;
  }
}
class JsonPrimitiveDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super(json, value, polymorphicDiscriminator);
    this.r1q_1 = value;
    this.a1e('primitive');
  }
  w2() {
    return this.r1q_1;
  }
  rz(descriptor) {
    return 0;
  }
  e1p(tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException.w1(toString(message));
    }
    return this.r1q_1;
  }
}
class JsonTreeMapDecoder extends JsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.c1r_1 = value;
    this.d1r_1 = toList(this.c1r_1.a4());
    this.e1r_1 = imul(this.d1r_1.m2(), 2);
    this.f1r_1 = -1;
  }
  w2() {
    return this.c1r_1;
  }
  g1d(descriptor, index) {
    var i = index / 2 | 0;
    return this.d1r_1.k2(i);
  }
  rz(descriptor) {
    while (this.f1r_1 < (this.e1r_1 - 1 | 0)) {
      this.f1r_1 = this.f1r_1 + 1 | 0;
      return this.f1r_1;
    }
    return -1;
  }
  e1p(tag) {
    return (this.f1r_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.c1r_1, tag);
  }
  bz(descriptor) {
  }
}
class WriteMode extends Enum {
  constructor(name, ordinal, begin, end) {
    super(name, ordinal);
    this.o1o_1 = begin;
    this.p1o_1 = end;
  }
}
class AbstractJsonLexer {
  constructor(configuration) {
    this.u1g_1 = configuration;
    this.v1g_1 = 0;
    this.w1g_1 = new JsonPath(this.u1g_1);
    this.x1g_1 = null;
    this.y1g_1 = StringBuilder.h1();
  }
  j1r() {
  }
  e1o() {
    var current = this.k1r();
    var source = this.h1r();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.v1g_1 = this.v1g_1 + 1 | 0;
      return true;
    }
    return false;
  }
  l1r(c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  }
  z1g() {
    var nextToken = this.y1n();
    if (!(nextToken === 10)) {
      this.n1m('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.h1r(), this.v1g_1 - 1 | 0)) + ' instead');
    }
  }
  s1n(expected) {
    var token = this.y1n();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.v1g_1 > 0 ? this.v1g_1 - 1 | 0 : this.v1g_1;
      var s = this.v1g_1 === charSequenceLength(this.h1r()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.h1r(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.n1m(tmp$ret$1, position);
    }
    return token;
  }
  m1r(expected) {
    if (this.v1g_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.v1g_1;
        try {
          this.v1g_1 = this.v1g_1 - 1 | 0;
          tmp$ret$0 = this.w1n();
          break $l$block;
        }finally {
          this.v1g_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.m1m("Expected string literal but 'null' literal was found", this.v1g_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.v1g_1 > 0 ? this.v1g_1 - 1 | 0 : this.v1g_1;
    var s = this.v1g_1 === charSequenceLength(this.h1r()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.h1r(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.n1m(tmp$ret$3, position);
  }
  t1n() {
    var source = this.h1r();
    var cpos = this.v1g_1;
    $l$loop_0: while (true) {
      cpos = this.i1r(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.v1g_1 = cpos;
      return charToTokenClass(ch);
    }
    this.v1g_1 = cpos;
    return 10;
  }
  f1o(doConsume) {
    var current = this.k1r();
    current = this.i1r(current);
    var len = charSequenceLength(this.h1r()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.h1r(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.h1r(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.v1g_1 = current + 4 | 0;
    }
    return true;
  }
  q1o(doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.f1o(doConsume) : $super.f1o.call(this, doConsume);
  }
  g1o(isLenient) {
    var token = this.t1n();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.w1n();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.v1n();
    }
    var string = tmp;
    this.x1g_1 = string;
    return string;
  }
  n1r() {
    this.x1g_1 = null;
  }
  o1r(startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.h1r();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  }
  v1n() {
    if (!(this.x1g_1 == null)) {
      return takePeeked(this);
    }
    return this.j1o();
  }
  consumeString2(source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.i1r(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.n1m('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.g1r(lastPosition, currentPosition);
          currentPosition = this.i1r(currentPosition);
          if (currentPosition === -1) {
            this.n1m('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.o1r(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.v1g_1 = currentPosition + 1 | 0;
    return string;
  }
  k1o() {
    var result = this.w1n();
    if (result === 'null' && wasUnquotedString(this)) {
      this.n1m("Unexpected 'null' value instead of string literal");
    }
    return result;
  }
  w1n() {
    if (!(this.x1g_1 == null)) {
      return takePeeked(this);
    }
    var current = this.k1r();
    if (current >= charSequenceLength(this.h1r()) || current === -1) {
      this.n1m('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.h1r(), current));
    if (token === 1) {
      return this.v1n();
    }
    if (!(token === 0)) {
      this.n1m('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.h1r(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.h1r(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.h1r())) {
        usedAppend = true;
        this.g1r(this.v1g_1, current);
        var eof = this.i1r(current);
        if (eof === -1) {
          this.v1g_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.o1r(this.v1g_1, current);
    } else {
      tmp = decodedString(this, this.v1g_1, current);
    }
    var result = tmp;
    this.v1g_1 = current;
    return result;
  }
  g1r(fromIndex, toIndex) {
    this.y1g_1.wf(this.h1r(), fromIndex, toIndex);
  }
  i1o(allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList.l2();
    var lastToken = this.t1n();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.w1n();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.t1n();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.w1n();
        else
          this.j1o();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.d2(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.n1m('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.n1m('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.n1m('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.y1n();
      if (tokenStack.m2() === 0)
        return Unit_instance;
    }
  }
  toString() {
    return "JsonReader(source='" + toString(this.h1r()) + "', currentPosition=" + this.v1g_1 + ')';
  }
  h1o(key) {
    var processed = this.o1r(0, this.v1g_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.m1m("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  }
  m1m(message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.w1g_1.b1n(), hint, this.h1r());
  }
  n1m(message, position, hint, $super) {
    position = position === VOID ? this.v1g_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.m1m(message, position, hint) : $super.m1m.call(this, message, position, hint);
  }
  s1o() {
    var current = this.k1r();
    current = this.i1r(current);
    if (current >= charSequenceLength(this.h1r()) || current === -1) {
      this.n1m('EOF');
    }
    var tmp;
    if (charSequenceGet(this.h1r(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.h1r())) {
        this.n1m('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = 0n;
    var exponentAccumulator = 0n;
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.h1r()))) {
      var ch = charSequenceGet(this.h1r(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.n1m("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.n1m("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.n1m("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.n1m("Unexpected symbol '-' in numeric literal", current);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.n1m("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (accumulator > 0n) {
        this.n1m('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.n1m('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.n1m('EOF');
      }
      if (!(charSequenceGet(this.h1r(), current) === _Char___init__impl__6a9atx(34))) {
        this.n1m('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.v1g_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.n1m('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.n1m("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.n1m('Numeric value overflow');
    }
    return tmp_0;
  }
  i1j() {
    var result = this.s1o();
    var next = this.y1n();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.v1g_1 > 0 ? this.v1g_1 - 1 | 0 : this.v1g_1;
      var s = this.v1g_1 === charSequenceLength(this.h1r()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.h1r(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.n1m(tmp$ret$1, position);
    }
    return result;
  }
  r1o() {
    var current = this.k1r();
    if (current === charSequenceLength(this.h1r())) {
      this.n1m('EOF');
    }
    var tmp;
    if (charSequenceGet(this.h1r(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.v1g_1 === charSequenceLength(this.h1r())) {
        this.n1m('EOF');
      }
      if (!(charSequenceGet(this.h1r(), this.v1g_1) === _Char___init__impl__6a9atx(34))) {
        this.n1m('Expected closing quotation mark');
      }
      this.v1g_1 = this.v1g_1 + 1 | 0;
    }
    return result;
  }
}
class CharMappings {
  constructor() {
    CharMappings_instance = this;
    this.p1r_1 = charArray(117);
    this.q1r_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
}
class StringJsonLexer extends AbstractJsonLexer {
  constructor(source, configuration) {
    super(configuration);
    this.c1s_1 = source;
  }
  h1r() {
    return this.c1s_1;
  }
  i1r(position) {
    return position < this.h1r().length ? position : -1;
  }
  y1n() {
    var source = this.h1r();
    var cpos = this.v1g_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.v1g_1 = cpos;
      return charToTokenClass(c);
    }
    this.v1g_1 = source.length;
    return 10;
  }
  u1n() {
    var current = this.v1g_1;
    if (current === -1)
      return false;
    var source = this.h1r();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.v1g_1 = current;
      return this.l1r(c);
    }
    this.v1g_1 = current;
    return false;
  }
  k1r() {
    var current = this.v1g_1;
    if (current === -1)
      return current;
    var source = this.h1r();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.v1g_1 = current;
    return current;
  }
  d1o(expected) {
    if (this.v1g_1 === -1) {
      this.m1r(expected);
    }
    var source = this.h1r();
    var cpos = this.v1g_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.v1g_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.m1r(expected);
    }
    this.v1g_1 = -1;
    this.m1r(expected);
  }
  j1o() {
    this.d1o(_Char___init__impl__6a9atx(34));
    var current = this.v1g_1;
    var closingQuote = indexOf_0(this.h1r(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.w1n();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.v1g_1 > 0 ? this.v1g_1 - 1 | 0 : this.v1g_1;
      var s = this.v1g_1 === charSequenceLength(this.h1r()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.h1r(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.n1m(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.h1r(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.h1r(), this.v1g_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.v1g_1 = closingQuote + 1 | 0;
    return substring(this.h1r(), current, closingQuote);
  }
  l1o(keyToMatch, isLenient) {
    var positionSnapshot = this.v1g_1;
    try {
      if (!(this.y1n() === 6))
        return null;
      var firstKey = this.g1o(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.n1r();
      if (!(this.y1n() === 5))
        return null;
      return this.g1o(isLenient);
    }finally {
      this.v1g_1 = positionSnapshot;
      this.n1r();
    }
  }
}
class StringJsonLexerWithComments extends StringJsonLexer {
  y1n() {
    var source = this.h1r();
    var cpos = this.k1r();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.v1g_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  u1n() {
    var current = this.k1r();
    if (current >= this.h1r().length || current === -1)
      return false;
    return this.l1r(charCodeAt(this.h1r(), current));
  }
  d1o(expected) {
    var source = this.h1r();
    var current = this.k1r();
    if (current >= source.length || current === -1) {
      this.v1g_1 = -1;
      this.m1r(expected);
    }
    var c = charCodeAt(source, current);
    this.v1g_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.m1r(expected);
    }
  }
  t1n() {
    var source = this.h1r();
    var cpos = this.k1r();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.v1g_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  k1r() {
    var current = this.v1g_1;
    if (current === -1)
      return current;
    var source = this.h1r();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.v1g_1 = source.length;
            this.n1m('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.v1g_1 = current;
    return current;
  }
}
class JsonToStringWriter {
  constructor() {
    this.k1g_1 = StringBuilder.gb(128);
  }
  r1l(value) {
    this.k1g_1.ag(value);
  }
  l1l(char) {
    this.k1g_1.k1(char);
  }
  n1l(text) {
    this.k1g_1.i1(text);
  }
  x1l(text) {
    printQuoted(this.k1g_1, text);
  }
  l1g() {
    this.k1g_1.dg();
  }
  toString() {
    return this.k1g_1.toString();
  }
}
//endregion
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    new Default();
  return Default_instance;
}
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.t1h();
  return new JsonImpl(conf, builder.r1h_1);
}
function validateConfiguration($this) {
  if (equals($this.pz(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new JsonSerializersModuleValidator($this.d1g_1);
  $this.pz().l1f(collector);
}
var ClassDiscriminatorMode_NONE_instance;
var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
var ClassDiscriminatorMode_POLYMORPHIC_instance;
var ClassDiscriminatorMode_entriesInitialized;
function ClassDiscriminatorMode_initEntries() {
  if (ClassDiscriminatorMode_entriesInitialized)
    return Unit_instance;
  ClassDiscriminatorMode_entriesInitialized = true;
  ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
  ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
  ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
}
function ClassDiscriminatorMode_NONE_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_NONE_instance;
}
function ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
}
function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_POLYMORPHIC_instance;
}
function get_jsonUnquotedLiteralDescriptor() {
  _init_properties_JsonElement_kt__7cbdc2();
  return jsonUnquotedLiteralDescriptor;
}
var jsonUnquotedLiteralDescriptor;
var Companion_instance;
function Companion_getInstance_3() {
  return Companion_instance;
}
function JsonObject$toString$lambda(_destruct__k2r9zo) {
  // Inline function 'kotlin.collections.component1' call
  var k = _destruct__k2r9zo.v2();
  // Inline function 'kotlin.collections.component2' call
  var v = _destruct__k2r9zo.w2();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.h1();
  printQuoted(this_0, k);
  this_0.k1(_Char___init__impl__6a9atx(58));
  this_0.o1(v);
  return this_0.toString();
}
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
}
function get_jsonObject(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonObject');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
function get_jsonPrimitive(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonPrimitive');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
}
function JsonPrimitive_1(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
function get_long(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
  var tmp;
  try {
    tmp = parseLongImpl(_this__u8e3s4);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      throw NumberFormatException.vd(e.r());
    } else {
      throw $p;
    }
  }
  return tmp;
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function get_jsonArray(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonArray ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonArray');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function error(_this__u8e3s4, element) {
  _init_properties_JsonElement_kt__7cbdc2();
  throw IllegalArgumentException.w1('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
}
var JsonNull_instance;
function JsonNull_getInstance() {
  if (JsonNull_instance === VOID)
    new JsonNull();
  return JsonNull_instance;
}
function parseLongImpl(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.r1i()).i1j();
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.r1i();
  }
  return tmp;
}
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.r1i());
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.r1i();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.r1i());
}
var properties_initialized_JsonElement_kt_abxy8s;
function _init_properties_JsonElement_kt__7cbdc2() {
  if (!properties_initialized_JsonElement_kt_abxy8s) {
    properties_initialized_JsonElement_kt_abxy8s = true;
    jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
  }
}
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance === VOID)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance === VOID)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.rv('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.rv('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.rv('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.rv('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.rv('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().r1j_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().s1j_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().t1j_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().p1j_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().u1j_1;
}
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance === VOID)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
var JsonPrimitiveSerializer_instance;
function JsonPrimitiveSerializer_getInstance() {
  if (JsonPrimitiveSerializer_instance === VOID)
    new JsonPrimitiveSerializer();
  return JsonPrimitiveSerializer_instance;
}
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance === VOID)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance === VOID)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
var JsonNullSerializer_instance;
function JsonNullSerializer_getInstance() {
  if (JsonNullSerializer_instance === VOID)
    new JsonNullSerializer();
  return JsonNullSerializer_instance;
}
function verify(encoder) {
  asJsonEncoder(encoder);
}
function verify_0(decoder) {
  asJsonDecoder(decoder);
}
function defer(deferred) {
  return new defer$1(deferred);
}
var JsonLiteralSerializer_instance;
function JsonLiteralSerializer_getInstance() {
  if (JsonLiteralSerializer_instance === VOID)
    new JsonLiteralSerializer();
  return JsonLiteralSerializer_instance;
}
function asJsonDecoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function asJsonEncoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function _get_original__l7ku1m($this) {
  var tmp0 = $this.q1k_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.w2();
}
function defer$o$_get_original_$ref_3cje7k() {
  return constructCallableReference((p0) => _get_original__l7ku1m(p0), 1, 0, 9);
}
function Composer_0(sb, json) {
  return json.d1g_1.y1h_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function readIfAbsent($this, descriptor, index) {
  $this.j1m_1 = (!descriptor.px(index) && descriptor.ox(index).zw());
  return $this.j1m_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  return constructCallableReference((p0_0, p1) => {
    var tmp0 = p0;
    return readIfAbsent(tmp0, p0_0, p1);
  }, 2, 0, 10, 'readIfAbsent', [p0]);
}
function minify(_this__u8e3s4, offset) {
  offset = offset === VOID ? -1 : offset;
  if (charSequenceLength(_this__u8e3s4) < 200)
    return _this__u8e3s4;
  if (offset === -1) {
    var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
    if (start <= 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var endIndex = charSequenceLength(_this__u8e3s4);
    return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
  }
  var start_0 = offset - 30 | 0;
  var end = offset + 30 | 0;
  var prefix = start_0 <= 0 ? '' : '.....';
  var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
  var tmp2 = coerceAtLeast(start_0, 0);
  // Inline function 'kotlin.text.substring' call
  var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
  return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
}
function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
  return formatDecodingException(offset, shortMessage, path, hint, input);
}
function decodingExceptionOf(shortMessage) {
  return JsonDecodingException.k1k(formatDecodingException(-1, shortMessage, null, null, null), shortMessage, -1, null, null, null);
}
function formatDecodingException(offset, shortMessage, path, hint, input) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.h1();
  if (offset >= 0) {
    this_0.i1('Unexpected JSON token at offset ' + offset + ': ');
  }
  this_0.i1(shortMessage);
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(path == null || isBlank(path))) {
    this_0.i1(' at path: ');
    this_0.i1(path);
  }
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(hint == null || isBlank(hint))) {
    this_0.i1('\n' + hint);
  }
  if (!(input == null)) {
    this_0.i1('\nJSON input: ');
    this_0.i1(input);
  }
  return this_0.toString();
}
function invalidTrailingComma(_this__u8e3s4, entity) {
  entity = entity === VOID ? 'object' : entity;
  _this__u8e3s4.m1m('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.v1g_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.n1m(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidFloatingPointEncoded(value, key) {
  key = key === VOID ? null : key;
  return JsonEncodingException.c1l(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidKeyKindException(keyDescriptor) {
  return JsonEncodingException.c1l("Value of type '" + keyDescriptor.gx() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.hx().toString() + "'"), keyDescriptor.gx(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
  return nonFiniteFpMessage(value, key);
}
function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input) {
  // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
  var tmp;
  if (_this__u8e3s4.u1g_1.l1i_1) {
    tmp = toString(minify(input, offset));
  } else {
    tmp = null;
  }
  var inputValue = tmp;
  return JsonDecodingException.k1k(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint);
}
function formatEncodingException(shortMessage, hint) {
  var tmp;
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (hint == null || isBlank(hint)) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  return shortMessage + tmp;
}
function nonFiniteFpMessage(value, key) {
  return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
}
function get_JsonDeserializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonDeserializationNamesKey;
}
var JsonDeserializationNamesKey;
function get_JsonSerializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonSerializationNamesKey;
}
var JsonSerializationNamesKey;
function ignoreUnknownKeys(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp;
  if (json.d1g_1.v1h_1) {
    tmp = true;
  } else {
    var tmp0 = _this__u8e3s4.kx();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.j1();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element instanceof JsonIgnoreUnknownKeys) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp = tmp$ret$0;
  }
  return tmp;
}
function getJsonNameIndex(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  if (decodeCaseInsensitive(json, _this__u8e3s4)) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = name.toLowerCase();
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
  }
  var strategy = namingStrategy(_this__u8e3s4, json);
  if (!(strategy == null))
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  var index = _this__u8e3s4.mx(name);
  if (!(index === -3))
    return index;
  if (!json.d1g_1.f1i_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException.gw(_this__u8e3s4.gx() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.lx(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.hx(), CLASS_getInstance()) ? json.d1g_1.g1i_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.p1m(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function getJsonEncodedNames(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.d1g_1.h1i_1 && equals(descriptor.hx(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).z3(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.p1m(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap.ob();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.jx();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.nx(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList.l2();
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element instanceof JsonNames) {
          destination.d2(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1m_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_0 = 0;
        var last_0 = tmp1_safe_receiver.length;
        while (inductionVariable_0 < last_0) {
          var element_0 = tmp1_safe_receiver[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp;
          if (useLowercaseEnums) {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = element_0.toLowerCase();
          } else {
            tmp = element_0;
          }
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
        }
      }
      var tmp_0;
      if (useLowercaseEnums) {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = _this__u8e3s4.lx(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.r1m(_this__u8e3s4, i, _this__u8e3s4.lx(i));
      } else {
        tmp_0 = null;
      }
      var nameToPut = tmp_0;
      if (nameToPut == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
      }
    }
     while (inductionVariable < last);
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp_1;
  if (builder.j1()) {
    tmp_1 = emptyMap();
  } else {
    tmp_1 = builder;
  }
  return tmp_1;
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return () => buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return () => {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var trackingSet = LinkedHashSet.p2();
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.jx();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.lx(tmp_2);
      var name = $strategy.r1m($this_serializationNamesIndices, tmp_2, baseName);
      if (!trackingSet.d2(name))
        throw JsonEncodingException.c1l("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.gx());
      tmp_1[tmp_2] = name;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.hx(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).x3(name)) {
    throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.lx(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.lx(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.g4(name, index);
}
var properties_initialized_JsonNamesMap_kt_ljpf42;
function _init_properties_JsonNamesMap_kt__cbbp0k() {
  if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
    properties_initialized_JsonNamesMap_kt_ljpf42 = true;
    JsonDeserializationNamesKey = new Key();
    JsonSerializationNamesKey = new Key();
  }
}
var Tombstone_instance;
function Tombstone_getInstance() {
  return Tombstone_instance;
}
var RedactedKey_instance;
function RedactedKey_getInstance() {
  return RedactedKey_instance;
}
function resize($this) {
  var newSize = imul($this.v1m_1, 2);
  $this.t1m_1 = copyOf($this.t1m_1, newSize);
  var tmp = 0;
  var tmp_0 = new Int32Array(newSize);
  while (tmp < newSize) {
    tmp_0[tmp] = -1;
    tmp = tmp + 1 | 0;
  }
  var newIndices = tmp_0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.u1m_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
  $this.u1m_1 = newIndices;
}
function checkKind($this, descriptor, actualClass) {
  var kind = descriptor.hx();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException.w1('Serializer for ' + actualClass.f1() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.c1n_1)
    return Unit_instance;
  if (!$this.d1n_1)
    return Unit_instance;
  var tmp_0;
  var tmp_1;
  if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
    tmp_1 = true;
  } else {
    tmp_1 = kind instanceof PrimitiveKind;
  }
  if (tmp_1) {
    tmp_0 = true;
  } else {
    tmp_0 = kind instanceof ENUM;
  }
  if (tmp_0) {
    throw IllegalArgumentException.w1('Serializer for ' + actualClass.f1() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().m2();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder.n1n(writer, json, tmp, tmp$ret$0);
  encoder.t10(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.o1n_1.s1n(6);
  if ($this.o1n_1.t1n() === 4) {
    $this.o1n_1.n1m('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.ob();
  $l$loop: while ($this.o1n_1.u1n()) {
    var key = $this.p1n_1 ? $this.o1n_1.w1n() : $this.o1n_1.v1n();
    $this.o1n_1.s1n(5);
    var element = $this.x1n();
    // Inline function 'kotlin.collections.set' call
    result.g4(key, element);
    lastToken = $this.o1n_1.y1n();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.o1n_1.n1m('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.o1n_1.s1n(7);
  } else if (lastToken === 4) {
    if (!$this.q1n_1) {
      invalidTrailingComma($this.o1n_1);
    }
    $this.o1n_1.s1n(7);
  }
  return new JsonObject(result);
}
function *readObject_0($this, $receiver, $completion) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.o1n_1.s1n(6);
  if ($this.o1n_1.t1n() === 4) {
    $this.o1n_1.n1m('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.ob();
  $l$loop: while ($this.o1n_1.u1n()) {
    var key = $this.p1n_1 ? $this.o1n_1.w1n() : $this.o1n_1.v1n();
    $this.o1n_1.s1n(5);
    var element = yield* $receiver.ss(Unit_instance, $completion);
    // Inline function 'kotlin.collections.set' call
    result.g4(key, element);
    lastToken = $this.o1n_1.y1n();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.o1n_1.n1m('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.o1n_1.s1n(7);
  } else if (lastToken === 4) {
    if (!$this.q1n_1) {
      invalidTrailingComma($this.o1n_1);
    }
    $this.o1n_1.s1n(7);
  }
  return new JsonObject(result);
}
function readArray($this) {
  var lastToken = $this.o1n_1.y1n();
  if ($this.o1n_1.t1n() === 4) {
    $this.o1n_1.n1m('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList.l2();
  while ($this.o1n_1.u1n()) {
    var element = $this.x1n();
    result.d2(element);
    lastToken = $this.o1n_1.y1n();
    if (!(lastToken === 4)) {
      var tmp0 = $this.o1n_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.v1g_1;
      if (!condition) {
        var tmp$ret$2 = 'Expected end of the array or comma';
        tmp0.n1m(tmp$ret$2, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.o1n_1.s1n(9);
  } else if (lastToken === 4) {
    if (!$this.q1n_1) {
      invalidTrailingComma($this.o1n_1, 'array');
    }
    $this.o1n_1.s1n(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.p1n_1 || !isString) {
    tmp = $this.o1n_1.w1n();
  } else {
    tmp = $this.o1n_1.v1n();
  }
  var string = tmp;
  if (!isString && string === 'null')
    return JsonNull_getInstance();
  return new JsonLiteral(string, isString);
}
function readDeepRecursive($this) {
  return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda($this)), Unit_instance);
}
function JsonTreeReader$readDeepRecursive$slambda(this$0) {
  return constructCallableReference(function *($this$DeepRecursiveFunction, it, $completion) {
    var tmp0_subject = this$0.o1n_1.t1n();
    var tmp;
    if (tmp0_subject === 1) {
      tmp = readValue(this$0, true);
    } else if (tmp0_subject === 0) {
      tmp = readValue(this$0, false);
    } else if (tmp0_subject === 6) {
      tmp = yield* /*#__NOINLINE__*/readObject_0(this$0, $this$DeepRecursiveFunction, $completion);
    } else if (tmp0_subject === 8) {
      tmp = readArray(this$0);
    } else {
      this$0.o1n_1.n1m("Can't begin reading element, unexpected token");
    }
    return tmp;
  }, 2);
}
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.kx().l1();
  while (_iterator__ex2g4s.m1()) {
    var annotation = _iterator__ex2g4s.n1();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.z1n_1;
  }
  return json.d1g_1.d1i_1;
}
function access$checkEncodingConflicts$tPolymorphicKt($receiver, serializer, actualSerializer, classDiscriminator) {
  return checkEncodingConflicts($receiver, serializer, actualSerializer, classDiscriminator);
}
function checkKind_0(kind) {
  if (kind instanceof ENUM) {
    // Inline function 'kotlin.error' call
    var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException.o(toString(message));
  }
  if (kind instanceof PrimitiveKind) {
    // Inline function 'kotlin.error' call
    var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException.o(toString(message_0));
  }
  if (kind instanceof PolymorphicKind) {
    // Inline function 'kotlin.error' call
    var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
    throw IllegalStateException.o(toString(message_1));
  }
}
function checkEncodingConflicts(_this__u8e3s4, serializer, actualSerializer, classDiscriminator) {
  if (getJsonEncodedNames(actualSerializer.dv(), _this__u8e3s4).r3(classDiscriminator)) {
    var baseName = serializer.dv().gx();
    var actualName = actualSerializer.dv().gx();
    var text = _this__u8e3s4.d1g_1.k1i_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
    var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
    var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
    throw JsonEncodingException.c1l(tmp0_shortMessage, actualName, tmp1_hint);
  }
}
function trySkip($this, $receiver, unknownKey) {
  if ($receiver == null)
    return false;
  if ($receiver.c1o_1 === unknownKey) {
    $receiver.c1o_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.rz(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.o1g_1.t1n() === 4) {
    $this.o1g_1.n1m('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.q1g_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.q1g_1 === -1)) {
      hasComma = $this.o1g_1.e1o();
    }
  } else {
    $this.o1g_1.d1o(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.o1g_1.u1n()) {
    if (decodingKey) {
      if ($this.q1g_1 === -1) {
        var tmp0 = $this.o1g_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.v1g_1;
        if (!condition) {
          var tmp$ret$1 = 'Unexpected leading comma';
          tmp0.n1m(tmp$ret$1, position);
        }
      } else {
        var tmp0_0 = $this.o1g_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.v1g_1;
        if (!condition_0) {
          var tmp$ret$3 = 'Expected comma after the key-value pair';
          tmp0_0.n1m(tmp$ret$3, position_0);
        }
      }
    }
    $this.q1g_1 = $this.q1g_1 + 1 | 0;
    tmp = $this.q1g_1;
  } else {
    if (hasComma && !$this.m1g_1.d1g_1.i1i_1) {
      invalidTrailingComma($this.o1g_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.m1g_1;
  var tmp$ret$0;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.px(index);
    var elementDescriptor = descriptor.ox(index);
    var tmp;
    if (isOptional && !elementDescriptor.zw()) {
      tmp = $this.o1g_1.f1o(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.hx(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.zw()) {
        tmp_0 = $this.o1g_1.f1o(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.o1g_1.g1o($this.s1g_1.w1h_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.d1g_1.z1h_1 && elementDescriptor.zw();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.o1g_1.v1n();
        tmp$ret$0 = true;
        break $l$block_2;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.o1g_1.e1o();
  while ($this.o1g_1.u1n()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.o1g_1.d1o(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.m1g_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.s1g_1.b1i_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.o1g_1.e1o();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.t1g_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.k1m(index);
        }
        return index;
      }
      tmp = tmp_0;
    } else {
      tmp = true;
    }
    var isUnknown = tmp;
    if (isUnknown) {
      hasComma = handleUnknown($this, descriptor, key);
    }
  }
  if (hasComma && !$this.m1g_1.d1g_1.i1i_1) {
    invalidTrailingComma($this.o1g_1);
  }
  var tmp1_safe_receiver = $this.t1g_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l1m();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, descriptor, key) {
  if (ignoreUnknownKeys(descriptor, $this.m1g_1) || trySkip($this, $this.r1g_1, key)) {
    $this.o1g_1.i1o($this.s1g_1.w1h_1);
  } else {
    $this.o1g_1.w1g_1.a1n();
    $this.o1g_1.h1o(key);
  }
  return $this.o1g_1.e1o();
}
function decodeListIndex($this) {
  var hasComma = $this.o1g_1.e1o();
  var tmp;
  if ($this.o1g_1.u1n()) {
    if (!($this.q1g_1 === -1) && !hasComma) {
      $this.o1g_1.n1m('Expected end of the array or comma');
    }
    $this.q1g_1 = $this.q1g_1 + 1 | 0;
    tmp = $this.q1g_1;
  } else {
    if (hasComma && !$this.m1g_1.d1g_1.i1i_1) {
      invalidTrailingComma($this.o1g_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.s1g_1.w1h_1) {
    tmp = $this.o1g_1.k1o();
  } else {
    tmp = $this.o1g_1.j1o();
  }
  return tmp;
}
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function encodeTypeInfo($this, discriminator, serialName) {
  $this.e1n_1.h1l();
  $this.f10(discriminator);
  $this.e1n_1.k1l(_Char___init__impl__6a9atx(58));
  $this.e1n_1.j1l();
  $this.f10(serialName);
}
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.ix() && get_unsignedNumberDescriptors().r3(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.ix() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).dv(), serializer_0(Companion_getInstance()).dv(), serializer_2(Companion_getInstance_1()).dv(), serializer_3(Companion_getInstance_2()).dv()]);
  }
}
function get_ESCAPE_STRINGS() {
  _init_properties_StringOps_kt__fcy1db();
  return ESCAPE_STRINGS;
}
var ESCAPE_STRINGS;
var ESCAPE_MARKERS;
function printQuoted(_this__u8e3s4, value) {
  _init_properties_StringOps_kt__fcy1db();
  _this__u8e3s4.k1(_Char___init__impl__6a9atx(34));
  var lastPos = 0;
  var inductionVariable = 0;
  var last = charSequenceLength(value) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(value, i);
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
        _this__u8e3s4.wf(value, lastPos, i);
        _this__u8e3s4.i1(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0))
    _this__u8e3s4.wf(value, lastPos, value.length);
  else
    _this__u8e3s4.i1(value);
  _this__u8e3s4.k1(_Char___init__impl__6a9atx(34));
}
function toHexChar(i) {
  _init_properties_StringOps_kt__fcy1db();
  var d = i & 15;
  var tmp;
  if (d < 10) {
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp = numberToChar(d + tmp$ret$0 | 0);
  } else {
    var tmp_0 = d - 10 | 0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
  }
  return tmp;
}
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
}
var properties_initialized_StringOps_kt_wzaea7;
function _init_properties_StringOps_kt__fcy1db() {
  if (!properties_initialized_StringOps_kt_wzaea7) {
    properties_initialized_StringOps_kt_wzaea7 = true;
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.apply' call
    var this_0 = Array(93);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c1 = toHexChar(c >> 12);
        var c2 = toHexChar(c >> 8);
        var c3 = toHexChar(c >> 4);
        var c4 = toHexChar(c);
        this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
      }
       while (inductionVariable <= 31);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(34);
    this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(92);
    this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(9);
    this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(8);
    this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
    // Inline function 'kotlin.code' call
    var this_5 = _Char___init__impl__6a9atx(10);
    this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
    // Inline function 'kotlin.code' call
    var this_6 = _Char___init__impl__6a9atx(13);
    this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
    this_0[12] = '\\f';
    ESCAPE_STRINGS = this_0;
    // Inline function 'kotlin.apply' call
    var this_7 = new Int8Array(93);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 31)
      do {
        var c_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_7[c_0] = 1;
      }
       while (inductionVariable_0 <= 31);
    // Inline function 'kotlin.code' call
    var this_8 = _Char___init__impl__6a9atx(34);
    var tmp = Char__toInt_impl_vasixd(this_8);
    // Inline function 'kotlin.code' call
    var this_9 = _Char___init__impl__6a9atx(34);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
    this_7[tmp] = toByte(tmp$ret$3);
    // Inline function 'kotlin.code' call
    var this_10 = _Char___init__impl__6a9atx(92);
    var tmp_0 = Char__toInt_impl_vasixd(this_10);
    // Inline function 'kotlin.code' call
    var this_11 = _Char___init__impl__6a9atx(92);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
    this_7[tmp_0] = toByte(tmp$ret$5);
    // Inline function 'kotlin.code' call
    var this_12 = _Char___init__impl__6a9atx(9);
    var tmp_1 = Char__toInt_impl_vasixd(this_12);
    // Inline function 'kotlin.code' call
    var this_13 = _Char___init__impl__6a9atx(116);
    var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
    this_7[tmp_1] = toByte(tmp$ret$7);
    // Inline function 'kotlin.code' call
    var this_14 = _Char___init__impl__6a9atx(8);
    var tmp_2 = Char__toInt_impl_vasixd(this_14);
    // Inline function 'kotlin.code' call
    var this_15 = _Char___init__impl__6a9atx(98);
    var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
    this_7[tmp_2] = toByte(tmp$ret$9);
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(10);
    var tmp_3 = Char__toInt_impl_vasixd(this_16);
    // Inline function 'kotlin.code' call
    var this_17 = _Char___init__impl__6a9atx(110);
    var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
    this_7[tmp_3] = toByte(tmp$ret$11);
    // Inline function 'kotlin.code' call
    var this_18 = _Char___init__impl__6a9atx(13);
    var tmp_4 = Char__toInt_impl_vasixd(this_18);
    // Inline function 'kotlin.code' call
    var this_19 = _Char___init__impl__6a9atx(114);
    var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
    this_7[tmp_4] = toByte(tmp$ret$13);
    // Inline function 'kotlin.code' call
    var this_20 = _Char___init__impl__6a9atx(102);
    var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
    this_7[12] = toByte(tmp$ret$14);
    ESCAPE_MARKERS = this_7;
  }
}
function readJson(json, element, deserializer) {
  var tmp;
  if (element instanceof JsonObject) {
    tmp = new JsonTreeDecoder(json, element);
  } else {
    if (element instanceof JsonArray) {
      tmp = new JsonTreeListDecoder(json, element);
    } else {
      var tmp_0;
      if (element instanceof JsonLiteral) {
        tmp_0 = true;
      } else {
        tmp_0 = equals(element, JsonNull_getInstance());
      }
      if (tmp_0) {
        tmp = new JsonPrimitiveDecoder(json, element instanceof JsonPrimitive ? element : THROW_CCE());
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
  var input = tmp;
  return input.zy(deserializer);
}
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.dv())).zy(deserializer);
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
  // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
  var path = $this.c1p(tag);
  var tmp;
  if ($this.m1i().d1g_1.l1i_1) {
    var tmp$ret$3 = toString($this.d1p());
    tmp = toString(minify(tmp$ret$3));
  } else {
    tmp = null;
  }
  var inputValue = tmp;
  throw JsonDecodingException.k1k(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
}
function setForceNull($this, descriptor, index) {
  $this.a1q_1 = (!$this.m1i().d1g_1.z1h_1 && !descriptor.px(index) && descriptor.ox(index).zw());
  return $this.a1q_1;
}
var WriteMode_OBJ_instance;
var WriteMode_LIST_instance;
var WriteMode_MAP_instance;
var WriteMode_POLY_OBJ_instance;
function values() {
  return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var WriteMode_entriesInitialized;
function WriteMode_initEntries() {
  if (WriteMode_entriesInitialized)
    return Unit_instance;
  WriteMode_entriesInitialized = true;
  WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
}
var $ENTRIES;
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.hx();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.ox(0), _this__u8e3s4.pz());
        var keyKind = keyDescriptor.hx();
        var tmp_0;
        var tmp_1;
        if (keyKind instanceof PrimitiveKind) {
          tmp_1 = true;
        } else {
          tmp_1 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_1) {
          tmp_0 = WriteMode_MAP_getInstance();
        } else {
          if (_this__u8e3s4.d1g_1.x1h_1) {
            tmp_0 = WriteMode_LIST_getInstance();
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_0;
      } else {
        tmp = WriteMode_OBJ_getInstance();
      }
    }
  }
  return tmp;
}
function carrierDescriptor(_this__u8e3s4, module_0) {
  var tmp;
  if (equals(_this__u8e3s4.hx(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.ix()) {
    tmp = carrierDescriptor(_this__u8e3s4.ox(0), module_0);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function WriteMode_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_OBJ_instance;
}
function WriteMode_LIST_getInstance() {
  WriteMode_initEntries();
  return WriteMode_LIST_instance;
}
function WriteMode_MAP_getInstance() {
  WriteMode_initEntries();
  return WriteMode_MAP_instance;
}
function WriteMode_POLY_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_POLY_OBJ_instance;
}
function appendEscape($this, lastPosition, current) {
  $this.g1r(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.g1r(lastPosition, currentPosition);
  var result = $this.y1g_1.toString();
  $this.y1g_1.cg(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.x1g_1);
  $this.x1g_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.h1r(), $this.v1g_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.i1r(currentPosition);
  if (currentPosition === -1) {
    $this.n1m('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.h1r();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.h1r(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.n1m("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.y1g_1.k1(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.v1g_1 = startPos;
    $this.j1r();
    if (($this.v1g_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.n1m('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.v1g_1);
  }
  $this.y1g_1.k1(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
  return startPos + 4 | 0;
}
function fromHexChar($this, source, currentPosition) {
  var character = charSequenceGet(source, currentPosition);
  var tmp;
  if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
    // Inline function 'kotlin.code' call
    var tmp_0 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
  } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
    // Inline function 'kotlin.code' call
    var tmp_1 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
  } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
    // Inline function 'kotlin.code' call
    var tmp_2 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(65);
    tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
  } else {
    $this.n1m("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.i1r(start);
  if (current >= charSequenceLength($this.h1r()) || current === -1) {
    $this.n1m('EOF');
  }
  var tmp = $this.h1r();
  var _unary__edvuaz = current;
  current = _unary__edvuaz + 1 | 0;
  // Inline function 'kotlin.code' call
  var this_0 = charSequenceGet(tmp, _unary__edvuaz);
  var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
  var tmp_0;
  // Inline function 'kotlin.code' call
  var this_1 = _Char___init__impl__6a9atx(116);
  if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
    consumeBooleanLiteral($this, 'rue', current);
    tmp_0 = true;
  } else {
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(102);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
      consumeBooleanLiteral($this, 'alse', current);
      tmp_0 = false;
    } else {
      $this.n1m("Expected valid boolean literal prefix, but had '" + $this.w1n() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.h1r()) - current | 0) < literalSuffix.length) {
    $this.n1m('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.h1r(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.n1m("Expected valid boolean literal prefix, but had '" + $this.w1n() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.v1g_1 = current + literalSuffix.length | 0;
}
function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
  var tmp;
  switch (isExponentPositive) {
    case false:
      // Inline function 'kotlin.math.pow' call

      var x = -toNumber(exponentAccumulator);
      tmp = Math.pow(10.0, x);
      break;
    case true:
      // Inline function 'kotlin.math.pow' call

      var x_0 = toNumber(exponentAccumulator);
      tmp = Math.pow(10.0, x_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function tokenDescription(token) {
  return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
}
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().q1r_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().p1r_1[c] : _Char___init__impl__6a9atx(0);
}
function initEscape($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 31)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2ESC($this, i, _Char___init__impl__6a9atx(117));
    }
     while (inductionVariable <= 31);
  initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
  initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
  initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
  initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
  initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
  initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
  initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
  initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
}
function initCharToToken($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 32)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2TC($this, i, 127);
    }
     while (inductionVariable <= 32);
  initC2TC($this, 9, 3);
  initC2TC($this, 10, 3);
  initC2TC($this, 13, 3);
  initC2TC($this, 32, 3);
  initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
  initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
  initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
  initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
  initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
  initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
  initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
  initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
}
function initC2ESC($this, c, esc) {
  if (!(esc === _Char___init__impl__6a9atx(117))) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
    $this.p1r_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.q1r_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
var CharMappings_instance;
function CharMappings_getInstance() {
  if (CharMappings_instance === VOID)
    new CharMappings();
  return CharMappings_instance;
}
function StringJsonLexer_0(json, source) {
  return !json.d1g_1.j1i_1 ? new StringJsonLexer(source, json.d1g_1) : new StringJsonLexerWithComments(source, json.d1g_1);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.f1g_1;
}
function createMapForCache(initialCapacity) {
  return HashMap.p8(initialCapacity);
}
//region block: post-declaration
initMetadataForClass(Json, 'Json');
initMetadataForObject(Default, 'Default');
initMetadataForClass(JsonBuilder, 'JsonBuilder');
initMetadataForClass(JsonImpl, 'JsonImpl');
initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
initMetadataForClass(JsonNames, 'JsonNames');
initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode');
initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForCompanion(Companion);
initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
initMetadataForClass(JsonObject, 'JsonObject', VOID, VOID, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, VOID, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonArray, 'JsonArray', VOID, VOID, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, VOID, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
initMetadataForClass(JsonLiteral, 'JsonLiteral');
initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
initMetadataForClass(JsonArrayBuilder, 'JsonArrayBuilder');
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
protoOf(defer$1).zw = get_isNullable;
protoOf(defer$1).ix = get_isInline;
protoOf(defer$1).kx = get_annotations;
initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(JsonException, 'JsonException');
initMetadataForClass(JsonDecodingException, 'JsonDecodingException');
initMetadataForClass(JsonEncodingException, 'JsonEncodingException');
initMetadataForClass(Composer, 'Composer');
initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers');
initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals');
initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint');
initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
initMetadataForObject(Tombstone, 'Tombstone');
initMetadataForObject(RedactedKey, 'RedactedKey');
initMetadataForClass(JsonPath, 'JsonPath');
protoOf(JsonSerializersModuleValidator).w1f = contextual;
initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, VOID, [JsonDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes');
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, VOID, [JsonEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, VOID, [JsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder');
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder');
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder');
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder');
initMetadataForClass(WriteMode, 'WriteMode');
initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
initMetadataForObject(CharMappings, 'CharMappings');
initMetadataForClass(StringJsonLexer, 'StringJsonLexer');
initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments');
initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Tombstone_instance = new Tombstone();
RedactedKey_instance = new RedactedKey();
//endregion
//region block: exports
export {
  JsonObjectSerializer_getInstance as JsonObjectSerializer_getInstance3a6q39sxcezxs,
  JsonArrayBuilder as JsonArrayBuilderu8edol6ui3pj,
  JsonArray as JsonArray2urf8ey7u44sd,
  JsonObjectBuilder as JsonObjectBuilder2nl6rv6vdayuk,
  JsonObject as JsonObjectee06ihoeeiqj,
  JsonPrimitive_0 as JsonPrimitiveolttw629wj53,
  JsonPrimitive_1 as JsonPrimitive2fp8648nd60dn,
  Json_0 as Jsonsmkyu9xjl7fv,
  get_jsonArray as get_jsonArray18sglwhl4pclz,
  get_jsonObject as get_jsonObject2u4z2ch1uuca9,
  get_jsonPrimitive as get_jsonPrimitivez17tyd5rw1ql,
  get_long as get_long3gjrkvy7fxjbp,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
