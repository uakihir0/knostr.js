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
  SEALED_getInstance19i1cdv1u9v1e as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  STRING_getInstance7xungxdjbzv as STRING_getInstance,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  ENUM_getInstance25239ht7oag6o as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  ElementMarker33ojvsajwmzts as ElementMarker,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  CLASS_getInstance3jy3ydw5832xx as CLASS_getInstance,
  LIST_getInstance2vniy0f7mmb29 as LIST_getInstance,
  ENUMlmq49cvwy4ow as ENUM,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  CONTEXTUAL_getInstance20l1ap7hne5we as CONTEXTUAL_getInstance,
  MAP_getInstance3e78m6vf98i66 as MAP_getInstance,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  getContextualDescriptor2n1gf3b895yb8 as getContextualDescriptor,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  missingFieldExceptionWithNewMessage2gqddjx5jxge9 as missingFieldExceptionWithNewMessage,
  MissingFieldException24tqif29emcmi as MissingFieldException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  OBJECT_getInstancerq52wx6ymebx as OBJECT_getInstance,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
  serializer3ikrxnm8b29d6 as serializer_1,
  serializer36584sjyg5661 as serializer_2,
  serializer1q7c5q67ysppr as serializer_3,
  NamedValueDecoderzk26ztf92xbq as NamedValueDecoder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
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
  StringCompanionObject_instance2dx16b5pp3v3z as StringCompanionObject_instance,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstance11ies3wlxhmd7 as Companion_getInstance,
  _ULong___get_data__impl__fggpzbbo8lz7f8fnfy as _ULong___get_data__impl__fggpzb,
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
  _UInt___init__impl__l7qpdl5ip6p2ldulrs as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl212c25g5qzedjl1 as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k1vasxel72m2l4 as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7k36l427nkiqphd as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc49zztd2brjj2m as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg3k7aad61xjb4o as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne1e3nphhrejdd8 as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee2vx1is7vlchpz as UShort__toString_impl_edaoee,
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
  to2cs3ny02qtbcb as to,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  orPromise1iucc2to2udt2 as orPromise,
  enumEntries20mr21zbe3az4 as enumEntries,
  getKClass3t8tygqu4lcxf as getKClass,
  Exceptiondt2hlxn7j7vw as Exception,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  contains3ue2qo8xhmpf1 as contains,
  plus17rl43at52ays as plus,
  convertToByte2t4hntblnhq2k as convertToByte,
  convertToShortn6n5n7ruahkm as convertToShort,
  convertToInty04h231mmjoh as convertToInt,
  isFinite1tx0gn65nl9tj as isFinite,
  isFinite2t9l5a275mxm6 as isFinite_0,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toUInt21lx0mz8wkp7c as toUInt,
  _UInt___get_data__impl__f0vqqw30ojw38w2y6td as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qr100nrznmlnqj as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g02451raj6q6epxg1b as _UShort___get_data__impl__g0245,
  toString1n9qg6fb0b5i8 as toString_1,
  Companion_getInstance1crempiiqys0g as Companion_getInstance_0,
  Companion_getInstanceb1xi7131i8df as Companion_getInstance_1,
  Companion_getInstance1foc7f9q9rk1s as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  Char__toInt_impl_vasixd28v1p2u6jau5g as Char__toInt_impl_vasixd,
  numberToChar93r9buh19yek as numberToChar,
  equals2v6cggk171b6e as equals_0,
  toByte4i43936u611k as toByte,
  startsWith26w8qjqapeeq6 as startsWith,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  contains2c50nlxg7en7o as contains_0,
  single29ec4rh52687r as single,
  Char19o2r8palgjof as Char,
  toInt2q8uldh7sc951 as toInt,
  toList3jhuyej2anx2q as toList,
  toNumber2e2hj9zugjwi2 as toNumber,
  last1vo29oleiqj36 as last,
  removeLast3759euu1xvfa3 as removeLast,
  lastIndexOf2d52xhix5ymjr as lastIndexOf,
  Char__minus_impl_a2frrhw2puetaduxyd as Char__minus_impl_a2frrh,
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
    this.s23_1 = configuration;
    this.t23_1 = serializersModule;
    this.u23_1 = new DescriptorSchemaCache();
  }
  s1l() {
    return this.t23_1;
  }
  v23(serializer, value) {
    var result = new StringJsonWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.x1e();
    }
  }
  w23(deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, LexerMode_OBJ_getInstance(), lexer, deserializer.g1h(), null);
    var result = input.c1l(deserializer);
    lexer.n24();
    return result;
  }
  x23(deserializer, element) {
    return readJson(this, element, deserializer);
  }
  y23(string) {
    return this.w23(JsonElementSerializer_getInstance(), string);
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
    this.o24_1 = json.s23_1.j25_1;
    this.p24_1 = json.s23_1.o25_1;
    this.q24_1 = json.s23_1.k25_1;
    this.r24_1 = json.s23_1.l25_1;
    this.s24_1 = json.s23_1.n25_1;
    this.t24_1 = json.s23_1.p25_1;
    this.u24_1 = json.s23_1.q25_1;
    this.v24_1 = json.s23_1.s25_1;
    this.w24_1 = json.s23_1.z25_1;
    this.x24_1 = json.s23_1.u25_1;
    this.y24_1 = json.s23_1.v25_1;
    this.z24_1 = json.s23_1.w25_1;
    this.a25_1 = json.s23_1.x25_1;
    this.b25_1 = json.s23_1.y25_1;
    this.c25_1 = json.s23_1.t25_1;
    this.d25_1 = json.s23_1.m25_1;
    this.e25_1 = json.s23_1.r25_1;
    this.f25_1 = json.s1l();
    this.g25_1 = json.s23_1.a26_1;
    this.h25_1 = json.s23_1.b26_1;
  }
  i25() {
    if (this.e25_1) {
      // Inline function 'kotlin.require' call
      if (!(this.v24_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException.x1(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.w24_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException.x1(toString(message_0));
      }
    }
    if (!this.s24_1) {
      // Inline function 'kotlin.require' call
      if (!(this.t24_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException.x1(toString(message_1));
      }
    } else if (!(this.t24_1 === '    ')) {
      var tmp0 = this.t24_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.t24_1;
        throw IllegalArgumentException.x1(toString(message_2));
      }
    }
    return new JsonConfiguration(this.o24_1, this.q24_1, this.r24_1, this.d25_1, this.s24_1, this.p24_1, this.t24_1, this.u24_1, this.e25_1, this.v24_1, this.c25_1, this.x24_1, this.y24_1, this.z24_1, this.a25_1, this.b25_1, this.w24_1, this.g25_1, this.h25_1);
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
  constructor(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo, maxNestingDepth) {
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
    maxNestingDepth = maxNestingDepth === VOID ? 400 : maxNestingDepth;
    this.j25_1 = encodeDefaults;
    this.k25_1 = ignoreUnknownKeys;
    this.l25_1 = isLenient;
    this.m25_1 = allowStructuredMapKeys;
    this.n25_1 = prettyPrint;
    this.o25_1 = explicitNulls;
    this.p25_1 = prettyPrintIndent;
    this.q25_1 = coerceInputValues;
    this.r25_1 = useArrayPolymorphism;
    this.s25_1 = classDiscriminator;
    this.t25_1 = allowSpecialFloatingPointValues;
    this.u25_1 = useAlternativeNames;
    this.v25_1 = namingStrategy;
    this.w25_1 = decodeEnumsCaseInsensitive;
    this.x25_1 = allowTrailingComma;
    this.y25_1 = allowComments;
    this.z25_1 = classDiscriminatorMode;
    this.a26_1 = exceptionsWithDebugInfo;
    this.b26_1 = maxNestingDepth;
  }
  toString() {
    return 'JsonConfiguration(encodeDefaults=' + this.j25_1 + ', ignoreUnknownKeys=' + this.k25_1 + ', isLenient=' + this.l25_1 + ', ' + ('allowStructuredMapKeys=' + this.m25_1 + ', prettyPrint=' + this.n25_1 + ', explicitNulls=' + this.o25_1 + ', ') + ("prettyPrintIndent='" + this.p25_1 + "', coerceInputValues=" + this.q25_1 + ', useArrayPolymorphism=' + this.r25_1 + ', ') + ("classDiscriminator='" + this.s25_1 + "', allowSpecialFloatingPointValues=" + this.t25_1 + ', ') + ('useAlternativeNames=' + this.u25_1 + ', namingStrategy=' + toString_0(this.v25_1) + ', decodeEnumsCaseInsensitive=' + this.w25_1 + ', ') + ('allowTrailingComma=' + this.x25_1 + ', allowComments=' + this.y25_1 + ', classDiscriminatorMode=' + this.z25_1.toString() + ', ') + ('exceptionsWithDebugInfo=' + this.a26_1 + ', maxNestingDepth=' + this.b26_1 + ')');
  }
}
class ClassDiscriminatorMode extends Enum {}
class JsonDecoder {}
class Companion {}
class JsonElement {}
class JsonObject extends JsonElement {
  constructor(content) {
    super();
    this.e26_1 = content;
  }
  equals(other) {
    return equals(this.e26_1, other);
  }
  hashCode() {
    return hashCode(this.e26_1);
  }
  toString() {
    var tmp = this.e26_1.u2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  }
  j1() {
    return this.e26_1.j1();
  }
  f26(key) {
    return this.e26_1.y3(key);
  }
  y3(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.f26((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  g26(key) {
    return this.e26_1.a4(key);
  }
  a4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.g26((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  m2() {
    return this.e26_1.m2();
  }
  b4() {
    return this.e26_1.b4();
  }
  c4() {
    return this.e26_1.c4();
  }
  u2() {
    return this.e26_1.u2();
  }
}
class Companion_0 {}
class Companion_1 {}
class JsonPrimitive extends JsonElement {
  toString() {
    return this.h26();
  }
}
class Companion_2 {}
class JsonArray extends JsonElement {
  constructor(content) {
    super();
    this.o26_1 = content;
  }
  equals(other) {
    return equals(this.o26_1, other);
  }
  hashCode() {
    return hashCode(this.o26_1);
  }
  toString() {
    return joinToString(this.o26_1, ',', '[', ']');
  }
  j1() {
    return this.o26_1.j1();
  }
  p26(element) {
    return this.o26_1.r3(element);
  }
  r3(element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.p26(element instanceof JsonElement ? element : THROW_CCE());
  }
  l1() {
    return this.o26_1.l1();
  }
  q26(elements) {
    return this.o26_1.s3(elements);
  }
  s3(elements) {
    return this.q26(elements);
  }
  k2(index) {
    return this.o26_1.k2(index);
  }
  r26(element) {
    return this.o26_1.u3(element);
  }
  u3(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.r26(element instanceof JsonElement ? element : THROW_CCE());
  }
  s26(element) {
    return this.o26_1.v3(element);
  }
  v3(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.s26(element instanceof JsonElement ? element : THROW_CCE());
  }
  w3() {
    return this.o26_1.w3();
  }
  n2(index) {
    return this.o26_1.n2(index);
  }
  x3(fromIndex, toIndex) {
    return this.o26_1.x3(fromIndex, toIndex);
  }
  asJsReadonlyArrayView() {
    return this.o26_1.asJsReadonlyArrayView();
  }
  m2() {
    return this.o26_1.m2();
  }
}
class JsonNull extends JsonPrimitive {
  constructor() {
    JsonNull_instance = null;
    super();
    JsonNull_instance = this;
    this.t26_1 = 'null';
  }
  h26() {
    return this.t26_1;
  }
  u26() {
    return JsonNullSerializer_getInstance();
  }
  p1t(typeParamsSerializers) {
    return this.u26();
  }
}
class JsonLiteral extends JsonPrimitive {
  constructor(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    super();
    this.v26_1 = isString;
    this.w26_1 = coerceToInlineType;
    this.x26_1 = toString(body);
    if (!(this.w26_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.w26_1.l1j()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException.x1(toString(message));
      }
    }
  }
  h26() {
    return this.x26_1;
  }
  toString() {
    var tmp;
    if (this.v26_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.h1();
      printQuoted(this_0, this.x26_1);
      tmp = this_0.toString();
    } else {
      tmp = this.x26_1;
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
    if (!(this.v26_1 === other.v26_1))
      return false;
    if (!(this.x26_1 === other.x26_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.v26_1);
    result = imul(31, result) + getStringHashCode(this.x26_1) | 0;
    return result;
  }
}
class JsonObjectBuilder {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.z26_1 = LinkedHashMap.ub();
  }
  a27(key, element) {
    return this.z26_1.j4(key, element);
  }
  i25() {
    return new JsonObject(this.z26_1);
  }
}
class JsonArrayBuilder {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.b27_1 = ArrayList.l2();
  }
  c27(element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.b27_1.e2(element);
    return true;
  }
  i25() {
    return new JsonArray(this.b27_1);
  }
}
class JsonObjectDescriptor {
  constructor() {
    JsonObjectDescriptor_instance = this;
    this.d27_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).g1h();
    this.e27_1 = 'kotlinx.serialization.json.JsonObject';
  }
  j1j() {
    return this.e27_1;
  }
  o1j(index) {
    return this.d27_1.o1j(index);
  }
  p1j(name) {
    return this.d27_1.p1j(name);
  }
  q1j(index) {
    return this.d27_1.q1j(index);
  }
  r1j(index) {
    return this.d27_1.r1j(index);
  }
  s1j(index) {
    return this.d27_1.s1j(index);
  }
  k1j() {
    return this.d27_1.k1j();
  }
  c1j() {
    return this.d27_1.c1j();
  }
  l1j() {
    return this.d27_1.l1j();
  }
  m1j() {
    return this.d27_1.m1j();
  }
  n1j() {
    return this.d27_1.n1j();
  }
}
class JsonObjectSerializer {
  constructor() {
    JsonObjectSerializer_instance = this;
    this.f27_1 = JsonObjectDescriptor_getInstance();
  }
  g1h() {
    return this.f27_1;
  }
  g27(encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).h1h(encoder, value);
  }
  h1h(encoder, value) {
    return this.g27(encoder, value instanceof JsonObject ? value : THROW_CCE());
  }
  i1h(decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).i1h(decoder));
  }
}
class JsonElementSerializer {
  constructor() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.l27_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  g1h() {
    return this.l27_1;
  }
  m27(encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.w1m(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.w1m(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.w1m(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  h1h(encoder, value) {
    return this.m27(encoder, value instanceof JsonElement ? value : THROW_CCE());
  }
  i1h(decoder) {
    var input = asJsonDecoder(decoder);
    return input.d26();
  }
}
class JsonPrimitiveSerializer {
  constructor() {
    JsonPrimitiveSerializer_instance = this;
    this.h27_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  g1h() {
    return this.h27_1;
  }
  n27(encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.w1m(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.w1m(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  }
  h1h(encoder, value) {
    return this.n27(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  }
  i1h(decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.d26();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.c26().s23_1.a26_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  }
}
class JsonArrayDescriptor {
  constructor() {
    JsonArrayDescriptor_instance = this;
    this.b28_1 = ListSerializer(JsonElementSerializer_getInstance()).g1h();
    this.c28_1 = 'kotlinx.serialization.json.JsonArray';
  }
  j1j() {
    return this.c28_1;
  }
  o1j(index) {
    return this.b28_1.o1j(index);
  }
  p1j(name) {
    return this.b28_1.p1j(name);
  }
  q1j(index) {
    return this.b28_1.q1j(index);
  }
  r1j(index) {
    return this.b28_1.r1j(index);
  }
  s1j(index) {
    return this.b28_1.s1j(index);
  }
  k1j() {
    return this.b28_1.k1j();
  }
  c1j() {
    return this.b28_1.c1j();
  }
  l1j() {
    return this.b28_1.l1j();
  }
  m1j() {
    return this.b28_1.m1j();
  }
  n1j() {
    return this.b28_1.n1j();
  }
}
class JsonArraySerializer {
  constructor() {
    JsonArraySerializer_instance = this;
    this.k27_1 = JsonArrayDescriptor_getInstance();
  }
  g1h() {
    return this.k27_1;
  }
  d28(encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).h1h(encoder, value);
  }
  h1h(encoder, value) {
    return this.d28(encoder, value instanceof JsonArray ? value : THROW_CCE());
  }
  i1h(decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).i1h(decoder));
  }
}
class JsonNullSerializer {
  constructor() {
    JsonNullSerializer_instance = this;
    this.i27_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  g1h() {
    return this.i27_1;
  }
  e28(encoder, value) {
    verify(encoder);
    encoder.z1l();
  }
  h1h(encoder, value) {
    return this.e28(encoder, value instanceof JsonNull ? value : THROW_CCE());
  }
  i1h(decoder) {
    verify_0(decoder);
    if (decoder.o1k()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.p1k();
    return JsonNull_getInstance();
  }
}
class JsonLiteralSerializer {
  constructor() {
    JsonLiteralSerializer_instance = this;
    this.j27_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  g1h() {
    return this.j27_1;
  }
  f28(encoder, value) {
    verify(encoder);
    if (value.v26_1) {
      return encoder.i1m(value.x26_1);
    }
    if (!(value.w26_1 == null)) {
      return encoder.k1m(value.w26_1).i1m(value.x26_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.x26_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.e1m(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.x26_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).ev_1;
      var tmp_1 = encoder.k1m(serializer_0(Companion_getInstance()).g1h());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.e1m(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.x26_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.g1m(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.x26_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.a1m(tmp3_safe_receiver);
    }
    encoder.i1m(value.x26_1);
  }
  h1h(encoder, value) {
    return this.f28(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  }
  i1h(decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.d26();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.c26().s23_1.a26_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  }
}
class defer$1 {
  constructor($deferred) {
    this.g28_1 = lazy($deferred);
  }
  j1j() {
    return _get_original__l7ku1m(this).j1j();
  }
  k1j() {
    return _get_original__l7ku1m(this).k1j();
  }
  m1j() {
    return _get_original__l7ku1m(this).m1j();
  }
  o1j(index) {
    return _get_original__l7ku1m(this).o1j(index);
  }
  p1j(name) {
    return _get_original__l7ku1m(this).p1j(name);
  }
  q1j(index) {
    return _get_original__l7ku1m(this).q1j(index);
  }
  r1j(index) {
    return _get_original__l7ku1m(this).r1j(index);
  }
  s1j(index) {
    return _get_original__l7ku1m(this).s1j(index);
  }
}
class JsonEncoder {}
class JsonException extends SerializationException {
  static h28(message, cause) {
    var $this = this.m1i(message, cause);
    captureStack($this, $this.n26_1);
    $this.m26_1 = message;
    delete $this.message;
    return $this;
  }
  r() {
    return this.m26_1;
  }
  get message() {
    return this.r();
  }
}
class JsonDecodingException extends JsonException {
  constructor(fullMessage, shortMessage, offset, path, input, hint, cause) {
    return new.target.a28(fullMessage, shortMessage, offset, path, input, hint, cause);
  }
  static a28(fullMessage, shortMessage, offset, path, input, hint, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.h28(fullMessage, cause);
    captureStack($this, $this.z27_1);
    $this.u27_1 = shortMessage;
    $this.v27_1 = offset;
    $this.w27_1 = path;
    $this.x27_1 = input;
    $this.y27_1 = hint;
    return $this;
  }
}
class JsonEncodingException extends JsonException {
  constructor(shortMessage, classSerialName, hint, cause) {
    return new.target.s28(shortMessage, classSerialName, hint, cause);
  }
  static s28(shortMessage, classSerialName, hint, cause) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    cause = cause === VOID ? null : cause;
    var $this = this.h28(formatEncodingException(shortMessage, hint), cause);
    captureStack($this, $this.r28_1);
    $this.o28_1 = shortMessage;
    $this.p28_1 = classSerialName;
    $this.q28_1 = hint;
    return $this;
  }
}
class Composer {
  constructor(writer) {
    this.t28_1 = writer;
    this.u28_1 = true;
  }
  v28() {
    this.u28_1 = true;
  }
  w28() {
    return Unit_instance;
  }
  x28() {
    this.u28_1 = false;
  }
  y28() {
    this.u28_1 = false;
  }
  z28() {
    return Unit_instance;
  }
  a29(v) {
    return this.t28_1.b29(v);
  }
  c29(v) {
    return this.t28_1.d29(v);
  }
  e29(v) {
    return this.t28_1.d29(v.toString());
  }
  f29(v) {
    return this.t28_1.d29(v.toString());
  }
  g29(v) {
    return this.t28_1.h29(fromInt(v));
  }
  i29(v) {
    return this.t28_1.h29(fromInt(v));
  }
  j29(v) {
    return this.t28_1.h29(fromInt(v));
  }
  k29(v) {
    return this.t28_1.h29(v);
  }
  l29(v) {
    return this.t28_1.d29(v.toString());
  }
  m29(value) {
    return this.t28_1.n29(value);
  }
}
class ComposerForUnsignedNumbers extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.q29_1 = forceQuoting;
  }
  j29(v) {
    if (this.q29_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.m29(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.c29(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  }
  k29(v) {
    if (this.q29_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.m29(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.c29(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  }
  g29(v) {
    if (this.q29_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.m29(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.c29(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  }
  i29(v) {
    if (this.q29_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.m29(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.c29(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  }
}
class ComposerForUnquotedLiterals extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.t29_1 = forceQuoting;
  }
  m29(value) {
    if (this.t29_1) {
      super.m29(value);
    } else {
      super.c29(value);
    }
  }
}
class ComposerWithPrettyPrint extends Composer {
  constructor(writer, json) {
    super(writer);
    this.w29_1 = json;
    this.x29_1 = 0;
  }
  v28() {
    this.u28_1 = true;
    this.x29_1 = this.x29_1 + 1 | 0;
  }
  w28() {
    this.x29_1 = this.x29_1 - 1 | 0;
  }
  x28() {
    this.u28_1 = false;
    this.c29('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.x29_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.c29(this.w29_1.s23_1.p25_1);
      }
       while (inductionVariable < times);
  }
  y28() {
    if (this.u28_1)
      this.u28_1 = false;
    else {
      this.x28();
    }
  }
  z28() {
    this.a29(_Char___init__impl__6a9atx(32));
  }
}
class JsonElementMarker {
  constructor(descriptor) {
    var tmp = this;
    tmp.y29_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.z29_1 = false;
  }
  a2a(index) {
    this.y29_1.g1r(index);
  }
  b2a() {
    return this.y29_1.h1r();
  }
}
class Tombstone {}
class RedactedKey {}
class JsonPath {
  constructor(configuration) {
    this.i2a_1 = configuration.b26_1;
    this.j2a_1 = configuration.a26_1;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.k2a_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.l2a_1 = tmp_2;
    this.m2a_1 = -1;
  }
  n2a(sd) {
    this.m2a_1 = this.m2a_1 + 1 | 0;
    var depth = this.m2a_1;
    if (depth >= this.i2a_1) {
      jsonTooNested(this.i2a_1);
    }
    if (depth === this.k2a_1.length) {
      resize(this);
    }
    this.k2a_1[depth] = sd;
  }
  o2a(index) {
    this.l2a_1[this.m2a_1] = index;
  }
  p2a(key) {
    var tmp;
    if (!(this.l2a_1[this.m2a_1] === -2)) {
      this.m2a_1 = this.m2a_1 + 1 | 0;
      tmp = this.m2a_1 === this.k2a_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.k2a_1[this.m2a_1] = this.j2a_1 ? key : RedactedKey_instance;
    this.l2a_1[this.m2a_1] = -2;
  }
  q2a() {
    if (this.l2a_1[this.m2a_1] === -2) {
      this.k2a_1[this.m2a_1] = Tombstone_instance;
    }
  }
  r2a() {
    var depth = this.m2a_1;
    if (this.l2a_1[depth] === -2) {
      this.l2a_1[depth] = -1;
      this.m2a_1 = this.m2a_1 - 1 | 0;
    }
    if (!(this.m2a_1 === -1)) {
      this.m2a_1 = this.m2a_1 - 1 | 0;
    }
  }
  s2a() {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.h1();
    this_0.i1('$');
    // Inline function 'kotlin.repeat' call
    var times = this.m2a_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.k2a_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.k1j(), LIST_getInstance())) {
            if (!(this.l2a_1[index] === -1)) {
              this_0.i1('[');
              this_0.mg(this.l2a_1[index]);
              this_0.i1(']');
            }
          } else {
            var idx = this.l2a_1[index];
            if (idx >= 0) {
              this_0.i1('.');
              this_0.i1(element.o1j(idx));
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
    return this.s2a();
  }
}
class JsonSerializersModuleValidator {
  constructor(configuration) {
    this.u2a_1 = configuration.r25_1;
    this.v2a_1 = !configuration.z25_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  j23(kClass, provider) {
  }
  m23(baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.g1h();
    checkKind_0(this, descriptor, actualClass);
  }
  n23(baseClass, defaultSerializerProvider) {
  }
  o23(baseClass, defaultDeserializerProvider) {
  }
}
class JsonTreeReader {
  constructor(configuration, lexer) {
    this.g2b_1 = lexer;
    this.h2b_1 = configuration.l25_1;
    this.i2b_1 = configuration.x25_1;
    this.j2b_1 = configuration.b26_1;
    this.k2b_1 = this.g2b_1.k24_1.m2a_1;
  }
  q2b() {
    var token = this.g2b_1.m2b();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      this.k2b_1 = this.k2b_1 + 1 | 0;
      if (this.k2b_1 >= this.j2b_1) {
        jsonTooNested(this.j2b_1);
      }
      var result;
      if (this.k2b_1 === 200) {
        this.k2b_1 = this.k2b_1 - 1 | 0;
        result = readDeepRecursive(this);
      } else {
        result = readObject(this);
        this.k2b_1 = this.k2b_1 - 1 | 0;
      }
      tmp = result;
    } else if (token === 8) {
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.withDepthControl' call
      this.k2b_1 = this.k2b_1 + 1 | 0;
      if (this.k2b_1 >= this.j2b_1) {
        jsonTooNested(this.j2b_1);
      }
      var result_0 = readArray(this);
      this.k2b_1 = this.k2b_1 - 1 | 0;
      tmp = result_0;
    } else {
      this.g2b_1.d2a('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  }
}
class LexerMode extends Enum {
  constructor(name, ordinal, begin, end) {
    super(name, ordinal);
    this.u2b_1 = begin;
    this.v2b_1 = end;
  }
}
class PolymorphicJsonDecoder {}
class Key {}
class DescriptorSchemaCache {
  constructor() {
    this.e2a_1 = createMapForCache(16);
  }
  x2b(descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.e2a_1;
    var value_0 = this_0.a4(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.j4(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.j4(tmp2, value_1);
  }
  f2a(descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.y2b(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.x2b(descriptor, key, value);
    return value;
  }
  y2b(descriptor, key) {
    var tmp0_safe_receiver = this.e2a_1.a4(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.a4(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  }
}
class DiscriminatorHolder {
  constructor(discriminatorToSkip) {
    this.z2b_1 = discriminatorToSkip;
  }
}
class StreamingJsonDecoder extends AbstractDecoder {
  constructor(json, mode, lexer, descriptor, discriminatorHolder) {
    super();
    this.a24_1 = json;
    this.b24_1 = mode;
    this.c24_1 = lexer;
    this.d24_1 = this.a24_1.s1l();
    this.e24_1 = -1;
    this.f24_1 = discriminatorHolder;
    this.g24_1 = this.a24_1.s23_1;
    this.h24_1 = this.g24_1.o25_1 ? null : new JsonElementMarker(descriptor);
  }
  c26() {
    return this.a24_1;
  }
  s1l() {
    return this.d24_1;
  }
  w2b() {
    var tmp0_safe_receiver = this.f24_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z2b_1;
  }
  d26() {
    return (new JsonTreeReader(this.a24_1.s23_1, this.c24_1)).q2b();
  }
  c1l(deserializer) {
    var tmp2_withExceptionHandling_this = this.c24_1.k24_1;
    var tmp3_withExceptionHandling_this = this.c24_1;
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      var tmp_0;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp_0 = true;
      } else {
        tmp_0 = this.a24_1.s23_1.r25_1;
      }
      if (tmp_0) {
        return deserializer.i1h(this);
      }
      var discriminator = classDiscriminator(deserializer.g1h(), this.a24_1);
      var tmp0_elvis_lhs = this.c24_1.i2c(discriminator, this.g24_1.l25_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_2;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_2 = true;
          } else {
            tmp_2 = this.c26().s23_1.r25_1;
          }
          if (tmp_2) {
            tmp$ret$2 = tmp2.i1h(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.g1h(), this.c26());
          var tmp2_0 = this.d26();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.g1h().j1j();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2_0).f1() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.c24_1.k24_1.s2a();
            var tmp_3;
            if (this.c26().s23_1.a26_1) {
              var tmp$ret$8 = toString(tmp2_0);
              tmp_3 = toString(minify(tmp$ret$8));
            } else {
              tmp_3 = null;
            }
            var inputValue = tmp_3;
            throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.g26(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4 = tmp2.x1h(this, type);
          var actualSerializer = (!(tmp_4 == null) ? isInterface(tmp_4, DeserializationStrategy) : false) ? tmp_4 : null;
          if (actualSerializer == null) {
            var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(type, tmp2.v1h());
            var message = _destruct__k2r9zo.uk();
            var hint = _destruct__k2r9zo.vk();
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.c24_1.k24_1.s2a();
            var tmp_5;
            if (this.c26().s23_1.a26_1) {
              var tmp$ret$13 = jsonTree.toString();
              tmp_5 = toString(minify(tmp$ret$13));
            } else {
              tmp_5 = null;
            }
            var inputValue_0 = tmp_5;
            throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, message, path_0, hint, inputValue_0), message, -1, path_0, inputValue_0, hint);
          }
          tmp$ret$2 = readPolymorphicJson(this.c26(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_1;
      var tmp_6 = deserializer.x1h(this, type_0);
      var actualSerializer_0 = (!(tmp_6 == null) ? isInterface(tmp_6, DeserializationStrategy) : false) ? tmp_6 : null;
      if (actualSerializer_0 == null) {
        var _destruct__k2r9zo_0 = subtypeNotRegisteredMessageJson(type_0, deserializer.v1h());
        var message_0 = _destruct__k2r9zo_0.uk();
        var hint_0 = _destruct__k2r9zo_0.vk();
        this.c24_1.d2a(message_0, VOID, hint_0);
      }
      this.f24_1 = new DiscriminatorHolder(discriminator);
      tmp = actualSerializer_0.i1h(this);
    } catch ($p) {
      var tmp_7;
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        var tmp_8 = plus(e.message, ' at path: ');
        var tmp$ret$14 = tmp2_withExceptionHandling_this.s2a();
        throw missingFieldExceptionWithNewMessage(e, tmp_8 + tmp$ret$14);
      } else {
        if ($p instanceof SerializationException) {
          var e_0 = $p;
          throw e_0;
        } else {
          if ($p instanceof Exception) {
            var e_1 = $p;
            // Inline function 'kotlinx.serialization.json.internal.errorFromDeserializer' call
            var path_1 = tmp2_withExceptionHandling_this.s2a();
            var causeMessage = e_1.message;
            var shortMessage = 'Deserialization failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the decoder';
            var tmp_9;
            if (this.c26().s23_1.a26_1) {
              var tmp$ret$19 = tmp3_withExceptionHandling_this.j2c();
              tmp_9 = toString(minify(tmp$ret$19));
            } else {
              tmp_9 = null;
            }
            var inputValue_1 = tmp_9;
            throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, path_1, null, inputValue_1), shortMessage, -1, path_1, inputValue_1, null, e_1);
          } else {
            throw $p;
          }
        }
      }
    }
    return tmp;
  }
  d1l(descriptor) {
    var newMode = modeFor(this.a24_1, descriptor);
    this.c24_1.k24_1.n2a(descriptor);
    this.c24_1.a2c(newMode.u2b_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.s1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.a24_1, newMode, this.c24_1, descriptor, this.f24_1);
        break;
      default:
        var tmp_0;
        if (this.b24_1.equals(newMode) && this.a24_1.s23_1.o25_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.a24_1, newMode, this.c24_1, descriptor, this.f24_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  }
  e1l(descriptor) {
    if (descriptor.m1j() === 0 && ignoreUnknownKeys(descriptor, this.a24_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.c24_1.b2c() && !this.a24_1.s23_1.x25_1) {
      invalidTrailingComma(this.c24_1, '');
    }
    this.c24_1.a2c(this.b24_1.v2b_1);
    this.c24_1.k24_1.r2a();
  }
  o1k() {
    var tmp;
    var tmp0_safe_receiver = this.h24_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z29_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.c24_1.k2c();
    } else {
      tmp = false;
    }
    return tmp;
  }
  p1k() {
    return null;
  }
  p1l(descriptor, index, deserializer, previousValue) {
    var isMapKey = this.b24_1.equals(LexerMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.c24_1.k24_1.q2a();
    }
    var value = super.p1l(descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.c24_1.k24_1.p2a(value);
    }
    return value;
  }
  u1l(descriptor) {
    var index;
    switch (this.b24_1.s1_1) {
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
    if (!this.b24_1.equals(LexerMode_MAP_getInstance())) {
      this.c24_1.k24_1.o2a(index);
    }
    return index;
  }
  q1k() {
    return this.c24_1.l2c();
  }
  r1k() {
    var value = this.c24_1.m2c();
    if (!(value === fromInt(convertToByte(value)))) {
      this.c24_1.d2a("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  }
  s1k() {
    var value = this.c24_1.m2c();
    if (!(value === fromInt(convertToShort(value)))) {
      this.c24_1.d2a("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  }
  t1k() {
    var value = this.c24_1.m2c();
    if (!(value === fromInt(convertToInt(value)))) {
      this.c24_1.d2a("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  }
  u1k() {
    return this.c24_1.m2c();
  }
  v1k() {
    var tmp0 = this.c24_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p2b();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.d2a("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.a24_1.s23_1.t25_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.c24_1, result);
  }
  w1k() {
    var tmp0 = this.c24_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p2b();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.d2a("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.a24_1.s23_1.t25_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.c24_1, result);
  }
  x1k() {
    var string = this.c24_1.p2b();
    if (!(string.length === 1)) {
      this.c24_1.d2a("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  }
  y1k() {
    var tmp;
    if (this.g24_1.l25_1) {
      tmp = this.c24_1.h2c();
    } else {
      tmp = this.c24_1.o2b();
    }
    return tmp;
  }
  a1l(descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.c24_1, this.a24_1) : super.a1l(descriptor);
  }
  z1k(enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.a24_1, this.y1k(), ' at path ' + this.c24_1.k24_1.s2a());
  }
}
class JsonDecoderForUnsignedTypes extends AbstractDecoder {
  constructor(lexer, json) {
    super();
    this.n2c_1 = lexer;
    this.o2c_1 = json.s1l();
  }
  s1l() {
    return this.o2c_1;
  }
  u1l(descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException.o(toString(message));
  }
  t1k() {
    var tmp0 = this.n2c_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p2b();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.d2a("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  u1k() {
    var tmp0 = this.n2c_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p2b();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.d2a("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  r1k() {
    var tmp0 = this.n2c_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p2b();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.d2a("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  s1k() {
    var tmp0 = this.n2c_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p2b();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.d2a("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
    return new.target.p2c(composer, json, mode, modeReuseCache);
  }
  static p2c(composer, json, mode, modeReuseCache) {
    var $this = this.w1l();
    $this.w2a_1 = composer;
    $this.x2a_1 = json;
    $this.y2a_1 = mode;
    $this.z2a_1 = modeReuseCache;
    $this.a2b_1 = $this.x2a_1.s1l();
    $this.b2b_1 = $this.x2a_1.s23_1;
    $this.c2b_1 = false;
    $this.d2b_1 = null;
    $this.e2b_1 = null;
    var i = $this.y2a_1.s1_1;
    if (!($this.z2a_1 == null)) {
      if (!($this.z2a_1[i] === null) || !($this.z2a_1[i] === $this)) {
        $this.z2a_1[i] = $this;
      }
    }
    return $this;
  }
  c26() {
    return this.x2a_1;
  }
  static f2b(output, json, mode, modeReuseCache) {
    return this.p2c(Composer_0(output, json), json, mode, modeReuseCache);
  }
  s1l() {
    return this.a2b_1;
  }
  b1n(descriptor, index) {
    return this.b2b_1.j25_1;
  }
  w1m(serializer, value) {
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.c26().s23_1.r25_1) {
          serializer.h1h(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp_0;
        if (isPolymorphicSerializer) {
          tmp_0 = !this.c26().s23_1.z25_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_1;
          switch (this.c26().s23_1.z25_1.s1_1) {
            case 0:
            case 2:
              tmp_1 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.g1h().k1j();
              tmp_1 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp_0 = tmp_1;
        }
        var needDiscriminator = tmp_0;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.g1h(), this.c26()) : null;
        var tmp_2;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.g1h()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException.x1(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var tmp1_elvis_lhs = casted.y1h(this, value);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            // Inline function 'kotlin.run' call
            var tmp0_elvis_lhs = getKClassFromExpression(value).f1();
            var subClassName = tmp0_elvis_lhs == null ? toString(getKClassFromExpression(value)) : tmp0_elvis_lhs;
            var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(subClassName, casted.v1h());
            var message_0 = _destruct__k2r9zo.uk();
            var hint = _destruct__k2r9zo.vk();
            throw JsonEncodingException.s28(message_0, subClassName, hint);
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var actual = tmp_3;
          tmp_2 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_2 = serializer;
        }
        var actualSerializer = tmp_2;
        if (!(baseClassDiscriminator == null)) {
          access$checkEncodingConflicts$tJsonPolymorphicHelpersKt(this.c26(), serializer, actualSerializer, baseClassDiscriminator);
          checkKind(actualSerializer.g1h().k1j());
          var serialName = actualSerializer.g1h().j1j();
          this.d2b_1 = baseClassDiscriminator;
          this.e2b_1 = serialName;
        }
        actualSerializer.h1h(this, value);
      }
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof SerializationException) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var e_0 = $p;
          var causeMessage = e_0.message;
          var classSerialName = serializer.g1h().j1j();
          var message_1 = 'Serialization ' + (isBlank(classSerialName) ? '' : "of '" + classSerialName + "' ") + 'failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the encoder';
          throw JsonEncodingException.s28(message_1, classSerialName, VOID, e_0);
        } else {
          throw $p;
        }
      }
    }
    return tmp;
  }
  d1l(descriptor) {
    var newMode = modeFor(this.x2a_1, descriptor);
    if (!(newMode.u2b_1 === _Char___init__impl__6a9atx(0))) {
      this.w2a_1.a29(newMode.u2b_1);
      this.w2a_1.v28();
    }
    var discriminator = this.d2b_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.e2b_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.j1j() : tmp0_elvis_lhs);
      this.d2b_1 = null;
      this.e2b_1 = null;
    }
    if (this.y2a_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.z2a_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.s1_1];
    return tmp2_elvis_lhs == null ? StreamingJsonEncoder.p2c(this.w2a_1, this.x2a_1, newMode, this.z2a_1) : tmp2_elvis_lhs;
  }
  e1l(descriptor) {
    if (!(this.y2a_1.v2b_1 === _Char___init__impl__6a9atx(0))) {
      this.w2a_1.w28();
      this.w2a_1.y28();
      this.w2a_1.a29(this.y2a_1.v2b_1);
    }
  }
  x1l(descriptor, index) {
    switch (this.y2a_1.s1_1) {
      case 1:
        if (!this.w2a_1.u28_1) {
          this.w2a_1.a29(_Char___init__impl__6a9atx(44));
        }

        this.w2a_1.x28();
        break;
      case 2:
        if (!this.w2a_1.u28_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.w2a_1.a29(_Char___init__impl__6a9atx(44));
            this.w2a_1.x28();
            tmp_0 = true;
          } else {
            this.w2a_1.a29(_Char___init__impl__6a9atx(58));
            this.w2a_1.z28();
            tmp_0 = false;
          }
          tmp.c2b_1 = tmp_0;
        } else {
          this.c2b_1 = true;
          this.w2a_1.x28();
        }

        break;
      case 3:
        if (index === 0)
          this.c2b_1 = true;
        if (index === 1) {
          this.w2a_1.a29(_Char___init__impl__6a9atx(44));
          this.w2a_1.z28();
          this.c2b_1 = false;
        }

        break;
      default:
        if (!this.w2a_1.u28_1) {
          this.w2a_1.a29(_Char___init__impl__6a9atx(44));
        }

        this.w2a_1.x28();
        this.i1m(getJsonElementName(descriptor, this.x2a_1, index));
        this.w2a_1.a29(_Char___init__impl__6a9atx(58));
        this.w2a_1.z28();
        break;
    }
    return true;
  }
  x1m(descriptor, index, serializer, value) {
    if (!(value == null) || this.b2b_1.o25_1) {
      super.x1m(descriptor, index, serializer, value);
    }
  }
  k1m(descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.w2a_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.w2a_1;
      } else {
        var tmp0 = this.w2a_1.t28_1;
        var p1 = this.c2b_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = StreamingJsonEncoder.p2c(tmp$ret$0, this.x2a_1, this.y2a_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.w2a_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.w2a_1;
      } else {
        var tmp0_0 = this.w2a_1.t28_1;
        var p1_0 = this.c2b_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = StreamingJsonEncoder.p2c(tmp$ret$2, this.x2a_1, this.y2a_1, null);
    } else if (!(this.d2b_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.e2b_1 = descriptor.j1j();
      tmp = this;
    } else {
      tmp = super.k1m(descriptor);
    }
    return tmp;
  }
  z1l() {
    this.w2a_1.c29('null');
  }
  a1m(value) {
    if (this.c2b_1) {
      this.i1m(value.toString());
    } else {
      this.w2a_1.l29(value);
    }
  }
  b1m(value) {
    if (this.c2b_1) {
      this.i1m(value.toString());
    } else {
      this.w2a_1.g29(value);
    }
  }
  c1m(value) {
    if (this.c2b_1) {
      this.i1m(value.toString());
    } else {
      this.w2a_1.i29(value);
    }
  }
  d1m(value) {
    if (this.c2b_1) {
      this.i1m(value.toString());
    } else {
      this.w2a_1.j29(value);
    }
  }
  e1m(value) {
    if (this.c2b_1) {
      this.i1m(value.toString());
    } else {
      this.w2a_1.k29(value);
    }
  }
  f1m(value) {
    if (this.c2b_1) {
      this.i1m(value.toString());
    } else {
      this.w2a_1.e29(value);
    }
    if (!this.b2b_1.t25_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  }
  g1m(value) {
    if (this.c2b_1) {
      this.i1m(value.toString());
    } else {
      this.w2a_1.f29(value);
    }
    if (!this.b2b_1.t25_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  }
  h1m(value) {
    this.i1m(toString_1(value));
  }
  i1m(value) {
    return this.w2a_1.m29(value);
  }
  j1m(enumDescriptor, index) {
    this.i1m(enumDescriptor.o1j(index));
  }
}
class AbstractJsonTreeDecoder extends NamedValueDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super();
    this.s2c_1 = json;
    this.t2c_1 = value;
    this.u2c_1 = polymorphicDiscriminator;
    this.v2c_1 = this.c26().s23_1;
  }
  c26() {
    return this.s2c_1;
  }
  w2() {
    return this.t2c_1;
  }
  s1l() {
    return this.c26().s1l();
  }
  w2b() {
    return this.u2c_1;
  }
  x2c() {
    var tmp0_safe_receiver = this.z20();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.y2c(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.w2() : tmp1_elvis_lhs;
  }
  w2c(currentTag) {
    return this.b21() + ('.' + currentTag);
  }
  d26() {
    return this.x2c();
  }
  c1l(deserializer) {
    var tmp2_withExceptionHandling_this = this.x2c();
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
        var tmp_0;
        if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
          tmp_0 = true;
        } else {
          tmp_0 = this.c26().s23_1.r25_1;
        }
        if (tmp_0) {
          tmp$ret$2 = deserializer.i1h(this);
          break $l$block;
        }
        var discriminator = classDiscriminator(deserializer.g1h(), this.c26());
        var tmp2 = this.d26();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = deserializer.g1h().j1j();
        if (!(tmp2 instanceof JsonObject)) {
          var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path = this.b21();
          var tmp_1;
          if (this.c26().s23_1.a26_1) {
            var tmp$ret$8 = toString(tmp2);
            tmp_1 = toString(minify(tmp$ret$8));
          } else {
            tmp_1 = null;
          }
          var inputValue = tmp_1;
          throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
        }
        var jsonTree = tmp2;
        var tmp0_safe_receiver = jsonTree.g26(discriminator);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
        var tmp_2 = deserializer.x1h(this, type);
        var actualSerializer = (!(tmp_2 == null) ? isInterface(tmp_2, DeserializationStrategy) : false) ? tmp_2 : null;
        if (actualSerializer == null) {
          var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(type, deserializer.v1h());
          var message = _destruct__k2r9zo.uk();
          var hint = _destruct__k2r9zo.vk();
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_0 = this.b21();
          var tmp_3;
          if (this.c26().s23_1.a26_1) {
            var tmp$ret$13 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$13));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, message, path_0, hint, inputValue_0), message, -1, path_0, inputValue_0, hint);
        }
        tmp$ret$2 = readPolymorphicJson(this.c26(), discriminator, jsonTree, actualSerializer);
      }
      tmp = tmp$ret$2;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        var tmp_5 = plus(e.message, ' at path: ');
        var tmp$ret$14 = this.b21();
        throw missingFieldExceptionWithNewMessage(e, tmp_5 + tmp$ret$14);
      } else {
        if ($p instanceof SerializationException) {
          var e_0 = $p;
          throw e_0;
        } else {
          if ($p instanceof Exception) {
            var e_1 = $p;
            // Inline function 'kotlinx.serialization.json.internal.errorFromDeserializer' call
            var path_1 = this.b21();
            var causeMessage = e_1.message;
            var shortMessage = 'Deserialization failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the decoder';
            var tmp_6;
            if (this.c26().s23_1.a26_1) {
              var tmp$ret$19 = toString(tmp2_withExceptionHandling_this);
              tmp_6 = toString(minify(tmp$ret$19));
            } else {
              tmp_6 = null;
            }
            var inputValue_1 = tmp_6;
            throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, path_1, null, inputValue_1), shortMessage, -1, path_1, inputValue_1, null, e_1);
          } else {
            throw $p;
          }
        }
      }
    }
    return tmp;
  }
  a21(parentName, childName) {
    return childName;
  }
  d1l(descriptor) {
    var currentObject = this.x2c();
    var tmp0_subject = descriptor.k1j();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.c26();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.j1j();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b21();
        var tmp_2;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.c26();
        var keyDescriptor = carrierDescriptor(descriptor.r1j(0), this_0.s1l());
        var keyKind = keyDescriptor.k1j();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.c26();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.j1j();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.b21();
            var tmp_6;
            if (this.c26().s23_1.a26_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject, descriptor);
        } else {
          if (this_0.s23_1.m25_1) {
            var tmp_7 = this.c26();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.j1j();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.b21();
              var tmp_8;
              if (this.c26().s23_1.a26_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.c26();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.j1j();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.b21();
          var tmp_10;
          if (this.c26().s23_1.a26_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, descriptor, this.u2c_1);
      }
    }
    return tmp;
  }
  e1l(descriptor) {
  }
  o1k() {
    var tmp = this.x2c();
    return !(tmp instanceof JsonNull);
  }
  z2c(tag, enumDescriptor) {
    var tmp = this.c26();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.y2c(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.j1j();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.w2c(tag);
      var tmp_0;
      if (this.c26().s23_1.a26_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.h26());
  }
  n21(tag, enumDescriptor) {
    return this.z2c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  }
  a2d(tag) {
    return !(this.y2c(tag) === JsonNull_getInstance());
  }
  d21(tag) {
    return this.a2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  b2d(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y2c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w2c(tag);
        var tmp;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
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
  e21(tag) {
    return this.b2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  c2d(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y2c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w2c(tag);
        var tmp;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
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
  f21(tag) {
    return this.c2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  d2d(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y2c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w2c(tag);
        var tmp;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
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
  g21(tag) {
    return this.d2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  e2d(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y2c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w2c(tag);
        var tmp;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
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
  h21(tag) {
    return this.e2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  f2d(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y2c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w2c(tag);
        var tmp;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
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
  i21(tag) {
    return this.f2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  g2d(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y2c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w2c(tag);
        var tmp;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
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
    var specialFp = this.c26().s23_1.t25_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.c26().s23_1.a26_1) {
      var tmp$ret$13 = toString(this.x2c());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  }
  j21(tag) {
    return this.g2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  h2d(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y2c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w2c(tag);
        var tmp;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
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
    var specialFp = this.c26().s23_1.t25_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.c26().s23_1.a26_1) {
      var tmp$ret$13 = toString(this.x2c());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  }
  k21(tag) {
    return this.h2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  i2d(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y2c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w2c(tag);
        var tmp;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.h26()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.f3_1;
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
  l21(tag) {
    return this.i2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  j2d(tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.y2c(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.w2c(tag);
      var tmp;
      if (this.c26().s23_1.a26_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.w2c(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.c26().s23_1.a26_1) {
        var tmp$ret$10 = toString(this.x2c());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.v26_1 && !this.c26().s23_1.l25_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.w2c(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.c26().s23_1.a26_1) {
        var tmp$ret$14 = toString(this.x2c());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.x26_1;
  }
  m21(tag) {
    return this.j2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  k2d(tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.c26();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.y2c(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.j1j();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.w2c(tag);
        var tmp_1;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.h26());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.c26());
    } else {
      tmp = super.o21(tag, inlineDescriptor);
    }
    return tmp;
  }
  o21(tag, inlineDescriptor) {
    return this.k2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  a1l(descriptor) {
    return !(this.z20() == null) ? super.a1l(descriptor) : (new JsonPrimitiveDecoder(this.c26(), this.w2(), this.u2c_1)).a1l(descriptor);
  }
}
class JsonTreeDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, descriptor, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    super(json, value, polymorphicDiscriminator);
    this.r2d_1 = value;
    this.s2d_1 = polyDescriptor;
    this.t2d_1 = this.w2().u2().l1();
    this.u2d_1 = this.v2c_1.o25_1 ? null : new JsonElementMarker(descriptor);
    this.v2d_1 = null;
    this.w2d_1 = null;
  }
  w2() {
    return this.r2d_1;
  }
  u1l(descriptor) {
    var entries = this.t2d_1;
    $l$loop: while (entries.m1()) {
      var entry = entries.n1();
      var key = entry.v2();
      var index = getJsonNameIndex(descriptor, this.c26(), key);
      if (!(index === -3)) {
        if (this.v2c_1.q25_1 && coerceInputValue_0(this, descriptor, index, entry.w2())) {
          continue $l$loop;
        }
        var tmp0_safe_receiver = this.u2d_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.a2a(index);
        }
        this.v2d_1 = key;
        this.w2d_1 = entry.w2();
        return index;
      }
      if (!(key === this.u2c_1) && !ignoreUnknownKeys(descriptor, this.c26())) {
        throwUnknownKey(this, key);
      }
    }
    var tmp1_safe_receiver = this.u2d_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b2a();
    var markerIndex = tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
    if (!(markerIndex === -1)) {
      this.v2d_1 = descriptor.o1j(markerIndex);
      this.w2d_1 = null;
    }
    return markerIndex;
  }
  o1k() {
    var tmp;
    var tmp0_safe_receiver = this.u2d_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z29_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = super.o1k();
    } else {
      tmp = false;
    }
    return tmp;
  }
  v20(descriptor, index) {
    var tmp0_elvis_lhs = this.v2d_1;
    return tmp0_elvis_lhs == null ? descriptor.o1j(index) : tmp0_elvis_lhs;
  }
  y2c(tag) {
    var tmp0_elvis_lhs = this.w2d_1;
    return tmp0_elvis_lhs == null ? getValue(this.w2(), tag) : tmp0_elvis_lhs;
  }
  d1l(descriptor) {
    if (descriptor === this.s2d_1) {
      var tmp = this.c26();
      var tmp2 = this.x2c();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.s2d_1.j1j();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b21();
        var tmp_0;
        if (this.c26().s23_1.a26_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, descriptor, this.u2c_1, this.s2d_1);
    }
    return super.d1l(descriptor);
  }
}
class JsonTreeListDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.d2e_1 = value;
    this.e2e_1 = this.d2e_1.m2();
    this.f2e_1 = -1;
  }
  w2() {
    return this.d2e_1;
  }
  v20(descriptor, index) {
    return index.toString();
  }
  y2c(tag) {
    return this.d2e_1.k2(toInt(tag));
  }
  u1l(descriptor) {
    while (this.f2e_1 < (this.e2e_1 - 1 | 0)) {
      this.f2e_1 = this.f2e_1 + 1 | 0;
      return this.f2e_1;
    }
    return -1;
  }
}
class JsonPrimitiveDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super(json, value, polymorphicDiscriminator);
    this.m2e_1 = value;
    this.p21('primitive');
  }
  w2() {
    return this.m2e_1;
  }
  u1l(descriptor) {
    return 0;
  }
  y2c(tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException.x1(toString(message));
    }
    return this.m2e_1;
  }
}
class JsonTreeMapDecoder extends JsonTreeDecoder {
  constructor(json, value, descriptor) {
    super(json, value, descriptor);
    this.z2e_1 = toList(value.b4());
    this.a2f_1 = imul(this.z2e_1.m2(), 2);
    this.b2f_1 = -1;
  }
  v20(descriptor, index) {
    var i = index / 2 | 0;
    return this.z2e_1.k2(i);
  }
  u1l(descriptor) {
    while (this.b2f_1 < (this.a2f_1 - 1 | 0)) {
      this.b2f_1 = this.b2f_1 + 1 | 0;
      return this.b2f_1;
    }
    return -1;
  }
  y2c(tag) {
    return (this.b2f_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.w2(), tag);
  }
  e1l(descriptor) {
  }
}
class AbstractJsonLexer {
  constructor(configuration) {
    this.i24_1 = configuration;
    this.j24_1 = 0;
    this.k24_1 = new JsonPath(this.i24_1);
    this.l24_1 = null;
    this.m24_1 = StringBuilder.h1();
  }
  e2f() {
  }
  b2c() {
    var current = this.f2f();
    var source = this.j2c();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.j24_1 = this.j24_1 + 1 | 0;
      return true;
    }
    return false;
  }
  g2f(c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  }
  n24() {
    var nextToken = this.r2b();
    if (!(nextToken === 10)) {
      this.d2a('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.j2c(), this.j24_1 - 1 | 0)) + ' instead');
    }
  }
  l2b(expected) {
    var token = this.r2b();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.j24_1 > 0 ? this.j24_1 - 1 | 0 : this.j24_1;
      var s = this.j24_1 === charSequenceLength(this.j2c()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j2c(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.d2a(tmp$ret$1, position);
    }
    return token;
  }
  h2f(expected) {
    if (this.j24_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.j24_1;
        try {
          this.j24_1 = this.j24_1 - 1 | 0;
          tmp$ret$0 = this.p2b();
          break $l$block;
        }finally {
          this.j24_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.c2a("Expected string literal but 'null' literal was found", this.j24_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.j24_1 > 0 ? this.j24_1 - 1 | 0 : this.j24_1;
    var s = this.j24_1 === charSequenceLength(this.j2c()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j2c(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.d2a(tmp$ret$3, position);
  }
  m2b() {
    var source = this.j2c();
    var cpos = this.j24_1;
    $l$loop_0: while (true) {
      cpos = this.d2f(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.j24_1 = cpos;
      return charToTokenClass(ch);
    }
    this.j24_1 = cpos;
    return 10;
  }
  c2c(doConsume) {
    var current = this.f2f();
    current = this.d2f(current);
    var len = charSequenceLength(this.j2c()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.j2c(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.j2c(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.j24_1 = current + 4 | 0;
    }
    return true;
  }
  k2c(doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.c2c(doConsume) : $super.c2c.call(this, doConsume);
  }
  d2c(isLenient) {
    var token = this.m2b();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.p2b();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.o2b();
    }
    var string = tmp;
    this.l24_1 = string;
    return string;
  }
  i2f() {
    this.l24_1 = null;
  }
  j2f(startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.j2c();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  }
  o2b() {
    if (!(this.l24_1 == null)) {
      return takePeeked(this);
    }
    return this.g2c();
  }
  consumeString2(source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.d2f(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.d2a('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.c2f(lastPosition, currentPosition);
          currentPosition = this.d2f(currentPosition);
          if (currentPosition === -1) {
            this.d2a('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.j2f(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.j24_1 = currentPosition + 1 | 0;
    return string;
  }
  h2c() {
    var result = this.p2b();
    if (result === 'null' && wasUnquotedString(this)) {
      this.d2a("Unexpected 'null' value instead of string literal");
    }
    return result;
  }
  p2b() {
    if (!(this.l24_1 == null)) {
      return takePeeked(this);
    }
    var current = this.f2f();
    if (current >= charSequenceLength(this.j2c()) || current === -1) {
      this.d2a('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.j2c(), current));
    if (token === 1) {
      return this.o2b();
    }
    if (!(token === 0)) {
      this.d2a('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.j2c(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.j2c(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.j2c())) {
        usedAppend = true;
        this.c2f(this.j24_1, current);
        var eof = this.d2f(current);
        if (eof === -1) {
          this.j24_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.j2f(this.j24_1, current);
    } else {
      tmp = decodedString(this, this.j24_1, current);
    }
    var result = tmp;
    this.j24_1 = current;
    return result;
  }
  c2f(fromIndex, toIndex) {
    this.m24_1.jg(this.j2c(), fromIndex, toIndex);
  }
  f2c(allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList.l2();
    var lastToken = this.m2b();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.p2b();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.m2b();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.p2b();
        else
          this.g2c();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e2(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.d2a('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.d2a('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.d2a('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.r2b();
      if (tokenStack.m2() === 0)
        return Unit_instance;
    }
  }
  toString() {
    return "JsonReader(source='" + toString(this.j2c()) + "', currentPosition=" + this.j24_1 + ')';
  }
  e2c(key) {
    var processed = this.j2f(0, this.j24_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.c2a("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  }
  c2a(message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.k24_1.s2a(), hint, this.j2c());
  }
  d2a(message, position, hint, $super) {
    position = position === VOID ? this.j24_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.c2a(message, position, hint) : $super.c2a.call(this, message, position, hint);
  }
  m2c() {
    var current = this.f2f();
    current = this.d2f(current);
    if (current >= charSequenceLength(this.j2c()) || current === -1) {
      this.d2a('EOF');
    }
    var tmp;
    if (charSequenceGet(this.j2c(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.j2c())) {
        this.d2a('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.j2c()))) {
      var ch = charSequenceGet(this.j2c(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.d2a("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.d2a("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.d2a("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.d2a("Unexpected symbol '-' in numeric literal", current);
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
        this.d2a("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
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
        this.d2a('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.d2a('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.d2a('EOF');
      }
      if (!(charSequenceGet(this.j2c(), current) === _Char___init__impl__6a9atx(34))) {
        this.d2a('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.j24_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.d2a('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.d2a("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.d2a('Numeric value overflow');
    }
    return tmp_0;
  }
  y26() {
    var result = this.m2c();
    var next = this.r2b();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.j24_1 > 0 ? this.j24_1 - 1 | 0 : this.j24_1;
      var s = this.j24_1 === charSequenceLength(this.j2c()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j2c(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.d2a(tmp$ret$1, position);
    }
    return result;
  }
  l2c() {
    var current = this.f2f();
    if (current === charSequenceLength(this.j2c())) {
      this.d2a('EOF');
    }
    var tmp;
    if (charSequenceGet(this.j2c(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.j24_1 === charSequenceLength(this.j2c())) {
        this.d2a('EOF');
      }
      if (!(charSequenceGet(this.j2c(), this.j24_1) === _Char___init__impl__6a9atx(34))) {
        this.d2a('Expected closing quotation mark');
      }
      this.j24_1 = this.j24_1 + 1 | 0;
    }
    return result;
  }
}
class CharMappings {
  constructor() {
    CharMappings_instance = this;
    this.k2f_1 = charArray(117);
    this.l2f_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
}
class StringJsonLexer extends AbstractJsonLexer {
  constructor(source, configuration) {
    super(configuration);
    this.x2f_1 = source;
  }
  j2c() {
    return this.x2f_1;
  }
  d2f(position) {
    return position < this.j2c().length ? position : -1;
  }
  r2b() {
    var source = this.j2c();
    var cpos = this.j24_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.j24_1 = cpos;
      return charToTokenClass(c);
    }
    this.j24_1 = source.length;
    return 10;
  }
  n2b() {
    var current = this.j24_1;
    if (current === -1)
      return false;
    var source = this.j2c();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.j24_1 = current;
      return this.g2f(c);
    }
    this.j24_1 = current;
    return false;
  }
  f2f() {
    var current = this.j24_1;
    if (current === -1)
      return current;
    var source = this.j2c();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.j24_1 = current;
    return current;
  }
  a2c(expected) {
    if (this.j24_1 === -1) {
      this.h2f(expected);
    }
    var source = this.j2c();
    var cpos = this.j24_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.j24_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.h2f(expected);
    }
    this.j24_1 = -1;
    this.h2f(expected);
  }
  g2c() {
    this.a2c(_Char___init__impl__6a9atx(34));
    var current = this.j24_1;
    var closingQuote = indexOf_0(this.j2c(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.p2b();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.j24_1 > 0 ? this.j24_1 - 1 | 0 : this.j24_1;
      var s = this.j24_1 === charSequenceLength(this.j2c()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j2c(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.d2a(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.j2c(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.j2c(), this.j24_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.j24_1 = closingQuote + 1 | 0;
    return substring(this.j2c(), current, closingQuote);
  }
  i2c(keyToMatch, isLenient) {
    var positionSnapshot = this.j24_1;
    try {
      if (!(this.r2b() === 6))
        return null;
      var firstKey = this.d2c(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.i2f();
      if (!(this.r2b() === 5))
        return null;
      return this.d2c(isLenient);
    }finally {
      this.j24_1 = positionSnapshot;
      this.i2f();
    }
  }
}
class StringJsonLexerWithComments extends StringJsonLexer {
  r2b() {
    var source = this.j2c();
    var cpos = this.f2f();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.j24_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  n2b() {
    var current = this.f2f();
    if (current >= this.j2c().length || current === -1)
      return false;
    return this.g2f(charCodeAt(this.j2c(), current));
  }
  a2c(expected) {
    var source = this.j2c();
    var current = this.f2f();
    if (current >= source.length || current === -1) {
      this.j24_1 = -1;
      this.h2f(expected);
    }
    var c = charCodeAt(source, current);
    this.j24_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.h2f(expected);
    }
  }
  m2b() {
    var source = this.j2c();
    var cpos = this.f2f();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.j24_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  f2f() {
    var current = this.j24_1;
    if (current === -1)
      return current;
    var source = this.j2c();
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
            this.j24_1 = source.length;
            this.d2a('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.j24_1 = current;
    return current;
  }
}
class StringJsonWriter {
  constructor() {
    this.z23_1 = StringBuilder.mb(128);
  }
  h29(value) {
    this.z23_1.ng(value);
  }
  b29(char) {
    this.z23_1.k1(char);
  }
  d29(text) {
    this.z23_1.i1(text);
  }
  n29(text) {
    printQuoted(this.z23_1, text);
  }
  x1e() {
    this.z23_1.qg();
  }
  toString() {
    return this.z23_1.toString();
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
  var conf = builder.i25();
  return new JsonImpl(conf, builder.f25_1);
}
function validateConfiguration($this) {
  if (equals($this.s1l(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new JsonSerializersModuleValidator($this.s23_1);
  $this.s1l().a23(collector);
}
var static_init_called;
function static_init() {
  if (static_init_called)
    return Unit_instance;
  static_init_called = true;
  ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
  ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
  ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
}
var ClassDiscriminatorMode_NONE_instance;
var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
var ClassDiscriminatorMode_POLYMORPHIC_instance;
function ClassDiscriminatorMode_NONE_getInstance() {
  static_init();
  return ClassDiscriminatorMode_NONE_instance;
}
function ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance() {
  static_init();
  return ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
}
function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
  static_init();
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
      throw NumberFormatException.me(e.r());
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
  throw IllegalArgumentException.x1('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
}
var JsonNull_instance;
function JsonNull_getInstance() {
  if (JsonNull_instance === VOID)
    new JsonNull();
  return JsonNull_instance;
}
function parseLongImpl(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.h26()).y26();
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.h26();
  }
  return tmp;
}
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.h26());
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.h26();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.h26());
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
  $this$buildSerialDescriptor.r1h('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.r1h('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.r1h('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.r1h('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.r1h('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().h27_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().i27_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().j27_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().f27_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().k27_1;
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
  var tmp0 = $this.g28_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.w2();
}
function defer$o$_get_original_$ref_3cje7k() {
  return constructCallableReference((p0) => _get_original__l7ku1m(p0), 1, 0, 15);
}
function Composer_0(sb, json) {
  return json.s23_1.n25_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function readIfAbsent($this, descriptor, index) {
  $this.z29_1 = (!descriptor.s1j(index) && descriptor.r1j(index).c1j());
  return $this.z29_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  return constructCallableReference((p0_0, p1) => {
    var tmp0 = p0;
    return readIfAbsent(tmp0, p0_0, p1);
  }, 2, 0, 16, 'readIfAbsent', [p0]);
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
function decodingExceptionOf(shortMessage, hint) {
  hint = hint === VOID ? null : hint;
  return JsonDecodingException.a28(formatDecodingException(-1, shortMessage, null, hint, null), shortMessage, -1, null, null, hint);
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
  _this__u8e3s4.c2a('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.j24_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.d2a(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidFloatingPointEncoded(value, key) {
  key = key === VOID ? null : key;
  return JsonEncodingException.s28(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidKeyKindException(keyDescriptor) {
  return JsonEncodingException.s28("Value of type '" + keyDescriptor.j1j() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.k1j().toString() + "'"), keyDescriptor.j1j(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
  return nonFiniteFpMessage(value, key);
}
function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input, cause) {
  cause = cause === VOID ? null : cause;
  // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
  var tmp;
  if (_this__u8e3s4.i24_1.a26_1) {
    tmp = toString(minify(input, offset));
  } else {
    tmp = null;
  }
  var inputValue = tmp;
  return JsonDecodingException.a28(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint, cause);
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
  if (json.s23_1.k25_1) {
    tmp = true;
  } else {
    var tmp0 = _this__u8e3s4.n1j();
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
  var index = _this__u8e3s4.p1j(name);
  if (!(index === -3))
    return index;
  if (!json.s23_1.u25_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException.j1i(_this__u8e3s4.j1j() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.o1j(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function getJsonEncodedNames(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.s23_1.w25_1 && equals(descriptor.k1j(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).a4(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.k1j(), CLASS_getInstance()) ? json.s23_1.v25_1 : null;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.f2a(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.f2a(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap.ub();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.m1j();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.q1j(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList.l2();
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element instanceof JsonNames) {
          destination.e2(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g2a_1;
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
        tmp_0 = _this__u8e3s4.o1j(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.h2a(_this__u8e3s4, i, _this__u8e3s4.o1j(i));
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
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return () => {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var trackingSet = LinkedHashSet.p2();
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.m1j();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.o1j(tmp_2);
      var name = $strategy.h2a($this_serializationNamesIndices, tmp_2, baseName);
      if (!trackingSet.e2(name))
        throw JsonEncodingException.s28("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.j1j());
      tmp_1[tmp_2] = name;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return () => buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.k1j(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).y3(name)) {
    throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.o1j(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.o1j(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.j4(name, index);
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
  var newSize = imul($this.m2a_1, 2);
  $this.k2a_1 = copyOf($this.k2a_1, newSize);
  var tmp = 0;
  var tmp_0 = new Int32Array(newSize);
  while (tmp < newSize) {
    tmp_0[tmp] = -1;
    tmp = tmp + 1 | 0;
  }
  var newIndices = tmp_0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.l2a_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
  $this.l2a_1 = newIndices;
}
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.n1j().l1();
  while (_iterator__ex2g4s.m1()) {
    var annotation = _iterator__ex2g4s.n1();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.t2a_1;
  }
  return json.s23_1.s25_1;
}
function subtypeNotRegisteredMessageJson(subClassName, baseClass) {
  var scope = "in the polymorphic scope of '" + baseClass.f1() + "'";
  var tmp;
  if (subClassName == null) {
    tmp = to('Class discriminator was missing and no default serializers were registered ' + scope, null);
  } else {
    tmp = to("Serializer for subclass '" + subClassName + "' is not found " + scope, "Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n" + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.f1() + "' has to be sealed and '@Serializable'."));
  }
  return tmp;
}
function access$checkEncodingConflicts$tJsonPolymorphicHelpersKt($receiver, serializer, actualSerializer, classDiscriminator) {
  return checkEncodingConflicts($receiver, serializer, actualSerializer, classDiscriminator);
}
function checkKind(kind) {
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
  if (getJsonEncodedNames(actualSerializer.g1h(), _this__u8e3s4).r3(classDiscriminator)) {
    var baseName = serializer.g1h().j1j();
    var actualName = actualSerializer.g1h().j1j();
    var text = _this__u8e3s4.s23_1.z25_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
    var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
    var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
    throw JsonEncodingException.s28(tmp0_shortMessage, actualName, tmp1_hint);
  }
}
function checkKind_0($this, descriptor, actualClass) {
  var kind = descriptor.k1j();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException.x1('Serializer for ' + actualClass.f1() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.u2a_1)
    return Unit_instance;
  if (!$this.v2a_1)
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
    throw IllegalArgumentException.x1('Serializer for ' + actualClass.f1() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function encodeByWriter(json, writer, serializer, value) {
  var tmp = LexerMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().m2();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder.f2b(writer, json, tmp, tmp$ret$0);
  encoder.w1m(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.g2b_1.l2b(6);
  if ($this.g2b_1.m2b() === 4) {
    $this.g2b_1.d2a('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.ub();
  $l$loop: while ($this.g2b_1.n2b()) {
    var key = $this.h2b_1 ? $this.g2b_1.p2b() : $this.g2b_1.o2b();
    $this.g2b_1.l2b(5);
    var element = $this.q2b();
    // Inline function 'kotlin.collections.set' call
    result.j4(key, element);
    lastToken = $this.g2b_1.r2b();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.g2b_1.d2a('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.g2b_1.l2b(7);
  } else if (lastToken === 4) {
    if (!$this.i2b_1) {
      invalidTrailingComma($this.g2b_1);
    }
    $this.g2b_1.l2b(7);
  }
  return new JsonObject(result);
}
function *readObject_0($this, $receiver, $completion) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.g2b_1.l2b(6);
  if ($this.g2b_1.m2b() === 4) {
    $this.g2b_1.d2a('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.ub();
  $l$loop: while ($this.g2b_1.n2b()) {
    var key = $this.h2b_1 ? $this.g2b_1.p2b() : $this.g2b_1.o2b();
    $this.g2b_1.l2b(5);
    var element = yield* $receiver.ht(Unit_instance, $completion);
    // Inline function 'kotlin.collections.set' call
    result.j4(key, element);
    lastToken = $this.g2b_1.r2b();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.g2b_1.d2a('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.g2b_1.l2b(7);
  } else if (lastToken === 4) {
    if (!$this.i2b_1) {
      invalidTrailingComma($this.g2b_1);
    }
    $this.g2b_1.l2b(7);
  }
  return new JsonObject(result);
}
function readArray($this) {
  var lastToken = $this.g2b_1.r2b();
  if ($this.g2b_1.m2b() === 4) {
    $this.g2b_1.d2a('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList.l2();
  while ($this.g2b_1.n2b()) {
    var element = $this.q2b();
    result.e2(element);
    lastToken = $this.g2b_1.r2b();
    if (!(lastToken === 4)) {
      var tmp0 = $this.g2b_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.j24_1;
      if (!condition) {
        var tmp$ret$2 = 'Expected end of the array or comma';
        tmp0.d2a(tmp$ret$2, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.g2b_1.l2b(9);
  } else if (lastToken === 4) {
    if (!$this.i2b_1) {
      invalidTrailingComma($this.g2b_1, 'array');
    }
    $this.g2b_1.l2b(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.h2b_1 || !isString) {
    tmp = $this.g2b_1.p2b();
  } else {
    tmp = $this.g2b_1.o2b();
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
  return constructCallableReference(($this$DeepRecursiveFunction, it, $completion) => orPromise($completion, function *($completion) {
    var tmp0_subject = this$0.g2b_1.m2b();
    var tmp;
    if (tmp0_subject === 1) {
      tmp = readValue(this$0, true);
    } else if (tmp0_subject === 0) {
      tmp = readValue(this$0, false);
    } else if (tmp0_subject === 6) {
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.withDepthControl' call
      var this_0 = this$0;
      this_0.k2b_1 = this_0.k2b_1 + 1 | 0;
      if (this_0.k2b_1 >= this_0.j2b_1) {
        jsonTooNested(this_0.j2b_1);
      }
      var result = yield* /*#__NOINLINE__*/readObject_0(this$0, $this$DeepRecursiveFunction, $completion);
      this_0.k2b_1 = this_0.k2b_1 - 1 | 0;
      tmp = result;
    } else if (tmp0_subject === 8) {
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.withDepthControl' call
      var this_1 = this$0;
      this_1.k2b_1 = this_1.k2b_1 + 1 | 0;
      if (this_1.k2b_1 >= this_1.j2b_1) {
        jsonTooNested(this_1.j2b_1);
      }
      var result_0 = readArray(this$0);
      this_1.k2b_1 = this_1.k2b_1 - 1 | 0;
      tmp = result_0;
    } else {
      this$0.g2b_1.d2a("Can't begin reading element, unexpected token");
    }
    return tmp;
  }), 2);
}
function jsonTooNested(maxStackDepth) {
  throw decodingExceptionOf('Json input is too nested and may be impossible to parse without stack overflow.', 'Current nesting limit is ' + maxStackDepth + ". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.");
}
var static_init_called_0;
function static_init_0() {
  if (static_init_called_0)
    return Unit_instance;
  static_init_called_0 = true;
  LexerMode_OBJ_instance = new LexerMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  LexerMode_LIST_instance = new LexerMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  LexerMode_MAP_instance = new LexerMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  LexerMode_POLY_OBJ_instance = new LexerMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
}
var LexerMode_OBJ_instance;
var LexerMode_LIST_instance;
var LexerMode_MAP_instance;
var LexerMode_POLY_OBJ_instance;
function values() {
  static_init_0();
  return [LexerMode_OBJ_getInstance(), LexerMode_LIST_getInstance(), LexerMode_MAP_getInstance(), LexerMode_POLY_OBJ_getInstance()];
}
function get_entries() {
  static_init_0();
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var $ENTRIES;
function modeFor(_this__u8e3s4, desc) {
  var tmp0_subject = desc.k1j();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = LexerMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = LexerMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.r1j(0), _this__u8e3s4.s1l());
        var keyKind = keyDescriptor.k1j();
        var tmp_0;
        var tmp_1;
        if (keyKind instanceof PrimitiveKind) {
          tmp_1 = true;
        } else {
          tmp_1 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_1) {
          tmp_0 = LexerMode_MAP_getInstance();
        } else {
          if (_this__u8e3s4.s23_1.m25_1) {
            tmp_0 = LexerMode_LIST_getInstance();
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_0;
      } else {
        tmp = LexerMode_OBJ_getInstance();
      }
    }
  }
  return tmp;
}
function carrierDescriptor(_this__u8e3s4, module_0) {
  var tmp;
  if (equals(_this__u8e3s4.k1j(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.l1j()) {
    tmp = carrierDescriptor(_this__u8e3s4.r1j(0), module_0);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function LexerMode_OBJ_getInstance() {
  static_init_0();
  return LexerMode_OBJ_instance;
}
function LexerMode_LIST_getInstance() {
  static_init_0();
  return LexerMode_LIST_instance;
}
function LexerMode_MAP_getInstance() {
  static_init_0();
  return LexerMode_MAP_instance;
}
function LexerMode_POLY_OBJ_getInstance() {
  static_init_0();
  return LexerMode_POLY_OBJ_instance;
}
function trySkip($this, $receiver, unknownKey) {
  if ($receiver == null)
    return false;
  if ($receiver.z2b_1 === unknownKey) {
    $receiver.z2b_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.u1l(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.c24_1.m2b() === 4) {
    $this.c24_1.d2a('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.e24_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.e24_1 === -1)) {
      hasComma = $this.c24_1.b2c();
    }
  } else {
    $this.c24_1.a2c(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.c24_1.n2b()) {
    if (decodingKey) {
      if ($this.e24_1 === -1) {
        var tmp0 = $this.c24_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.j24_1;
        if (!condition) {
          var tmp$ret$1 = 'Unexpected leading comma';
          tmp0.d2a(tmp$ret$1, position);
        }
      } else {
        var tmp0_0 = $this.c24_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.j24_1;
        if (!condition_0) {
          var tmp$ret$3 = 'Expected comma after the key-value pair';
          tmp0_0.d2a(tmp$ret$3, position_0);
        }
      }
    }
    $this.e24_1 = $this.e24_1 + 1 | 0;
    tmp = $this.e24_1;
  } else {
    if (hasComma && !$this.a24_1.s23_1.x25_1) {
      invalidTrailingComma($this.c24_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.a24_1;
  var tmp$ret$0;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.s1j(index);
    var elementDescriptor = descriptor.r1j(index);
    var tmp;
    if (isOptional && !elementDescriptor.c1j()) {
      tmp = $this.c24_1.c2c(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.k1j(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.c1j()) {
        tmp_0 = $this.c24_1.c2c(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.c24_1.d2c($this.g24_1.l25_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.s23_1.o25_1 && elementDescriptor.c1j();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.c24_1.o2b();
        tmp$ret$0 = true;
        break $l$block_2;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.c24_1.b2c();
  while ($this.c24_1.n2b()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.c24_1.a2c(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.a24_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.g24_1.q25_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.c24_1.b2c();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.h24_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.a2a(index);
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
  if (hasComma && !$this.a24_1.s23_1.x25_1) {
    invalidTrailingComma($this.c24_1);
  }
  var tmp1_safe_receiver = $this.h24_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b2a();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, descriptor, key) {
  if (ignoreUnknownKeys(descriptor, $this.a24_1) || trySkip($this, $this.f24_1, key)) {
    $this.c24_1.f2c($this.g24_1.l25_1);
  } else {
    $this.c24_1.k24_1.r2a();
    $this.c24_1.e2c(key);
  }
  return $this.c24_1.b2c();
}
function decodeListIndex($this) {
  var hasComma = $this.c24_1.b2c();
  var tmp;
  if ($this.c24_1.n2b()) {
    if (!($this.e24_1 === -1) && !hasComma) {
      $this.c24_1.d2a('Expected end of the array or comma');
    }
    $this.e24_1 = $this.e24_1 + 1 | 0;
    tmp = $this.e24_1;
  } else {
    if (hasComma && !$this.a24_1.s23_1.x25_1) {
      invalidTrailingComma($this.c24_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.g24_1.l25_1) {
    tmp = $this.c24_1.h2c();
  } else {
    tmp = $this.c24_1.g2c();
  }
  return tmp;
}
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function encodeTypeInfo($this, discriminator, serialName) {
  $this.w2a_1.x28();
  $this.i1m(discriminator);
  $this.w2a_1.a29(_Char___init__impl__6a9atx(58));
  $this.w2a_1.z28();
  $this.i1m(serialName);
}
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.l1j() && get_unsignedNumberDescriptors().r3(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.l1j() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).g1h(), serializer_0(Companion_getInstance()).g1h(), serializer_2(Companion_getInstance_1()).g1h(), serializer_3(Companion_getInstance_2()).g1h()]);
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
        _this__u8e3s4.jg(value, lastPos, i);
        _this__u8e3s4.i1(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0))
    _this__u8e3s4.jg(value, lastPos, value.length);
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
    var this_7 = new Int8Array(128);
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
function readJson(json, element, deserializer, previousDecoder) {
  previousDecoder = previousDecoder === VOID ? null : previousDecoder;
  var tmp0_safe_receiver = (!(previousDecoder == null) ? isInterface(previousDecoder, PolymorphicJsonDecoder) : false) ? previousDecoder : null;
  var discriminator = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w2b();
  var tmp;
  if (element instanceof JsonObject) {
    tmp = new JsonTreeDecoder(json, element, deserializer.g1h(), discriminator);
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
  return input.c1l(deserializer);
}
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  var descriptor = deserializer.g1h();
  return (new JsonTreeDecoder(_this__u8e3s4, element, descriptor, discriminator, descriptor)).c1l(deserializer);
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
  // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
  var path = $this.w2c(tag);
  var tmp;
  if ($this.c26().s23_1.a26_1) {
    var tmp$ret$3 = toString($this.x2c());
    tmp = toString(minify(tmp$ret$3));
  } else {
    tmp = null;
  }
  var inputValue = tmp;
  throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
}
function coerceInputValue_0($this, descriptor, index, element) {
  var tmp0 = $this.c26();
  var tmp$ret$0;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.s1j(index);
    var elementDescriptor = descriptor.r1j(index);
    var tmp;
    if (isOptional && !elementDescriptor.c1j()) {
      tmp = element instanceof JsonNull;
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.k1j(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.c1j()) {
        tmp_0 = element instanceof JsonNull;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_2;
      }
      var tmp0_safe_receiver = element instanceof JsonPrimitive ? element : null;
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.s23_1.o25_1 && elementDescriptor.c1j();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function throwUnknownKey($this, key) {
  var tmp2 = "Encountered an unknown key '" + key + "'";
  var tmp4 = $this.b21();
  // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
  var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
  var tmp;
  if ($this.c26().s23_1.a26_1) {
    var tmp$ret$3 = $this.w2().toString();
    tmp = toString(minify(tmp$ret$3));
  } else {
    tmp = null;
  }
  var inputValue = tmp;
  throw JsonDecodingException.a28(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
}
function appendEscape($this, lastPosition, current) {
  $this.c2f(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.c2f(lastPosition, currentPosition);
  var result = $this.m24_1.toString();
  $this.m24_1.pg(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.l24_1);
  $this.l24_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.j2c(), $this.j24_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.d2f(currentPosition);
  if (currentPosition === -1) {
    $this.d2a('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.j2c();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.j2c(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.d2a("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.m24_1.k1(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.j24_1 = startPos;
    $this.e2f();
    if (($this.j24_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.d2a('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.j24_1);
  }
  $this.m24_1.k1(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
    $this.d2a("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.d2f(start);
  if (current >= charSequenceLength($this.j2c()) || current === -1) {
    $this.d2a('EOF');
  }
  var tmp = $this.j2c();
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
      $this.d2a("Expected valid boolean literal prefix, but had '" + $this.p2b() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.j2c()) - current | 0) < literalSuffix.length) {
    $this.d2a('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.j2c(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.d2a("Expected valid boolean literal prefix, but had '" + $this.p2b() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.j24_1 = current + literalSuffix.length | 0;
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
    var tmp_0 = CharMappings_getInstance().l2f_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().k2f_1[c] : _Char___init__impl__6a9atx(0);
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
    $this.k2f_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.l2f_1[c] = cl;
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
  return !json.s23_1.y25_1 ? new StringJsonLexer(source, json.s23_1) : new StringJsonLexerWithComments(source, json.s23_1);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.u23_1;
}
function createMapForCache(initialCapacity) {
  return HashMap.s8(initialCapacity);
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
protoOf(defer$1).c1j = get_isNullable;
protoOf(defer$1).l1j = get_isInline;
protoOf(defer$1).n1j = get_annotations;
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
protoOf(JsonSerializersModuleValidator).l23 = contextual;
initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(LexerMode, 'LexerMode');
initMetadataForInterface(PolymorphicJsonDecoder, 'PolymorphicJsonDecoder', VOID, VOID, [JsonDecoder]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, VOID, [PolymorphicJsonDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes');
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, VOID, [JsonEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, VOID, [PolymorphicJsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder');
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder');
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder');
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder');
initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
initMetadataForObject(CharMappings, 'CharMappings');
initMetadataForClass(StringJsonLexer, 'StringJsonLexer');
initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments');
initMetadataForClass(StringJsonWriter, 'StringJsonWriter', StringJsonWriter);
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
  JsonObjectSerializer_getInstance as JsonObjectSerializer_getInstance15ehqyi55oo4q,
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
