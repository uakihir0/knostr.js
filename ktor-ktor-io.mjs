import {
  Companion_instance1xjg859pd52fi as Companion_instance,
  Unit_instancev9v8hjid95df as Unit_instance,
  _Result___init__impl__xyqfz823vatsdepqb9n as _Result___init__impl__xyqfz8,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString30pk9tzaqopn as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  createFailure8paxfkfa5dc7 as createFailure,
  Result3t1vadv16kmzk as Result,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  toString1h6jjoch8cjt8 as toString_0,
  newThrowablezl37abp36p5f as newThrowable,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
  protoOf180f3jzyo7rfj as protoOf,
  isInterface3d6p8outrmvmk as isInterface,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  CancellationException3b36o9qz53rgr as CancellationException,
  fromInt2ii0rejb1w62w as fromInt,
  numberToLong2pakxeg38estk as numberToLong,
  add2suhfggl4zvkk as add,
  intercepted2ogpsikxxj4u0 as intercepted,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  convertToInty04h231mmjoh as convertToInt,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString_1,
  captureStack1fzi4aczwc4hg as captureStack,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_ONEazvfdh9ju3d4 as get_ONE,
  replace3le3ie7l9k8aq as replace,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  subtract2orl8z9upxd9l as subtract,
  EmptyCoroutineContext_instance101eax45qp7ot as EmptyCoroutineContext_instance,
  Continuation1aa2oekvx7jm7 as Continuation,
  initMetadataForFunctionReferencen3g5fpj34t8u as initMetadataForFunctionReference,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  Enum3alwj03lh1n41 as Enum,
  ArrayList3it5z8td81qkl as ArrayList,
  listOf1jh22dvmctj1r as listOf,
  StringBuildermazzzhj6kkai as StringBuilder,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  encodeToByteArray22651fhg4p67t as encodeToByteArray,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
  replaceqbix900hl8kl as replace_0,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toByte4i43936u611k as toByte,
  decodeToString1x4faah2liw2p as decodeToString,
  setOf45ia9pnfhe90 as setOf,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixdnyockrdnmht5 as Char__toInt_impl_vasixd,
} from './kotlin-kotlin-stdlib.mjs';
import {
  DisposableHandle1uzxt8frdchxn as DisposableHandle,
  CopyableThrowable1mvc99jcyvivf as CopyableThrowable,
  CancellableContinuationImpl1cx201opicavg as CancellableContinuationImpl,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  launch1c91vkjzdi9sd as launch,
  startCoroutineCancellable18shtfwdieib as startCoroutineCancellable,
  get_job2zvlvce9o9a29 as get_job,
  Job13y4jkazwjho0 as Job,
  cancel1xim2hrvjmwpn as cancel,
  Dispatchers_getInstance2p2r3ndn98nn as Dispatchers_getInstance,
} from './kotlinx-coroutines-core.mjs';
import {
  Buffergs925ekssbch as Buffer,
  indexOf29nspdgx2e3ap as indexOf,
  IOException1wyutdmfe71nu as IOException,
  EOFExceptionh831u25jcq9n as EOFException,
  readByteString2hnsbql6t4ads as readByteString,
  readString3v6duspiz33tv as readString,
  readString2nvggcfaijfhd as readString_0,
  readByteArray1fhzfwi2j014k as readByteArray,
  writeString33ca4btrgctw7 as writeString,
  readByteArray1ri21h2rciakw as readByteArray_0,
} from './kotlinx-io-kotlinx-io-core.mjs';
import { atomic$ref$130aurmcwdfdf1 as atomic$ref$1 } from './kotlinx-atomicfu.mjs';
import { decodeToString2ede220pr5xir as decodeToString_0 } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance_0 = this;
    this.g2i_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.h2i_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
}
class Empty {
  toString() {
    return 'Empty';
  }
  hashCode() {
    return -231472095;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  }
}
class Closed {
  constructor(cause) {
    this.i2i_1 = cause;
  }
  toString() {
    return 'Closed(cause=' + toString(this.i2i_1) + ')';
  }
  hashCode() {
    return this.i2i_1 == null ? 0 : hashCode(this.i2i_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.i2i_1, other.i2i_1))
      return false;
    return true;
  }
}
class Task {}
function resume() {
  return this.k2i().tb(Companion_getInstance().h2i_1);
}
function resume_0(throwable) {
  var tmp = this.k2i();
  var tmp_0;
  if (throwable == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(throwable));
    tmp_0 = new Result(tmp$ret$0);
  }
  var tmp1_elvis_lhs = tmp_0;
  return tmp.tb(tmp1_elvis_lhs == null ? Companion_getInstance().h2i_1 : tmp1_elvis_lhs.wq_1);
}
class Read {
  constructor(continuation) {
    this.o2i_1 = continuation;
    this.p2i_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.o2i_1), 16));
      stackTraceToString(this_0);
      tmp.p2i_1 = this_0;
    }
  }
  k2i() {
    return this.o2i_1;
  }
  j2i() {
    return this.p2i_1;
  }
  l2i() {
    return 'read';
  }
}
class Write {
  constructor(continuation) {
    this.q2i_1 = continuation;
    this.r2i_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.q2i_1), 16));
      stackTraceToString(this_0);
      tmp.r2i_1 = this_0;
    }
  }
  k2i() {
    return this.q2i_1;
  }
  j2i() {
    return this.r2i_1;
  }
  l2i() {
    return 'write';
  }
}
class sam$kotlinx_coroutines_DisposableHandle$0 {
  constructor(function_0) {
    this.b2j_1 = function_0;
  }
  z1t() {
    return this.b2j_1();
  }
  n4() {
    return this.b2j_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n4(), other.n4());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.n4());
  }
}
class ByteReadChannel {}
function awaitContent$default(min, $completion, $super) {
  min = min === VOID ? 1 : min;
  return $super === VOID ? this.x2j(min, $completion) : $super.x2j.call(this, min, $completion);
}
class ByteWriteChannel {}
function get_autoFlush() {
  return false;
}
class ByteChannel {
  constructor(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.s2i_1 = autoFlush;
    this.t2i_1 = new Buffer();
    this.u2i_1 = 0;
    this.v2i_1 = new Object();
    this.w2i_1 = atomic$ref$1(Empty_instance);
    this.x2i_1 = new Buffer();
    this.y2i_1 = new Buffer();
    this.z2i_1 = atomic$ref$1(null);
    this.a2j_1 = atomic$ref$1(null);
  }
  c2j() {
    return this.s2i_1;
  }
  d2j() {
    return this.u2i_1 < 1048576;
  }
  e2j() {
    var tmp0_safe_receiver = this.z2i_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(tmp0_safe_receiver).l1x();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException.p(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp = ClosedReadChannelException.j2j(p0);
          }
        }
      }
      var tmp0_safe_receiver_0 = tmp;
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        throw tmp0_safe_receiver_0;
      }
    }
    if (this.x2i_1.a2f()) {
      moveFlushToReadBuffer(this);
    }
    return this.x2i_1;
  }
  k2j() {
    if (this.q2j()) {
      var tmp0_safe_receiver = this.z2i_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
        // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
        var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
        var tmp_0;
        if (tmp0_subject == null) {
          tmp_0 = null;
        } else {
          if (isInterface(tmp0_subject, CopyableThrowable)) {
            tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).l1x();
          } else {
            if (tmp0_subject instanceof CancellationException) {
              tmp_0 = CancellationException.p(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
            } else {
              var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
              tmp_0 = ClosedWriteChannelException.p2j(p0);
            }
          }
        }
        var tmp0_safe_receiver_0 = tmp_0;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          throw tmp0_safe_receiver_0;
        }
        tmp = tmp_1;
      }
      if (tmp == null)
        throw ClosedWriteChannelException.p2j();
    }
    return this.y2i_1;
  }
  r2j() {
    var tmp0_safe_receiver = this.z2i_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).l1x();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException.p(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = ClosedByteChannelException.v2j(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  q2j() {
    return !(this.z2i_1.kotlinx$atomicfu$value == null);
  }
  w2j() {
    return !(this.r2j() == null) || (this.q2j() && this.u2i_1 === 0 && this.x2i_1.a2f());
  }
  *x2j(min, $completion) {
    rethrowCloseCauseIfNeeded_0(this);
    if (this.x2i_1.m2() >= fromInt(min))
      return true;
    // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
    var this_0 = this;
    $l$loop: while (add(numberToLong(this.u2i_1), this.x2i_1.m2()) < fromInt(min) && this.z2i_1.kotlinx$atomicfu$value == null) {
      // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
      // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
      (yield () => {
        var uCont = $completion;
        var cancellable = new CancellableContinuationImpl(intercepted(uCont), 1);
        cancellable.g1v();
        var tmp0 = this_0;
        var tmp2 = new Read(cancellable);
        $l$block_0: {
          // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
          var previous = tmp0.w2i_1.kotlinx$atomicfu$value;
          if (!(previous instanceof Closed)) {
            if (!tmp0.w2i_1.atomicfu$compareAndSet(previous, tmp2)) {
              tmp2.m2i();
              break $l$block_0;
            }
          }
          if (previous instanceof Read) {
            previous.n2i(ConcurrentIOException.c2k(tmp2.l2i(), previous.j2i()));
          } else {
            if (isInterface(previous, Task)) {
              previous.m2i();
            } else {
              if (previous instanceof Closed) {
                tmp2.n2i(previous.i2i_1);
                break $l$block_0;
              } else {
                if (!equals(previous, Empty_instance)) {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
          if (!(add(numberToLong(this.u2i_1), this.x2i_1.m2()) < fromInt(min) && this.z2i_1.kotlinx$atomicfu$value == null)) {
            // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
            var current = tmp0.w2i_1.kotlinx$atomicfu$value;
            var tmp;
            if (current instanceof Read) {
              tmp = tmp0.w2i_1.atomicfu$compareAndSet(current, Empty_instance);
            } else {
              tmp = false;
            }
            if (tmp) {
              current.m2i();
            }
          }
        }
        return cancellable.q1s();
      });
    }
    if (this.x2i_1.m2() < 1048576n) {
      moveFlushToReadBuffer(this);
    }
    return this.x2i_1.m2() >= fromInt(min);
  }
  *e2k($completion) {
    rethrowCloseCauseIfNeeded_0(this);
    this.f2k();
    if (this.d2j())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
    var this_0 = this;
    $l$loop: while (!this.d2j() && this.z2i_1.kotlinx$atomicfu$value == null) {
      // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
      // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
      (yield () => {
        var uCont = $completion;
        var cancellable = new CancellableContinuationImpl(intercepted(uCont), 1);
        cancellable.g1v();
        var tmp0 = this_0;
        var tmp2 = new Write(cancellable);
        $l$block_0: {
          // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
          var previous = tmp0.w2i_1.kotlinx$atomicfu$value;
          if (!(previous instanceof Closed)) {
            if (!tmp0.w2i_1.atomicfu$compareAndSet(previous, tmp2)) {
              tmp2.m2i();
              break $l$block_0;
            }
          }
          if (previous instanceof Write) {
            previous.n2i(ConcurrentIOException.c2k(tmp2.l2i(), previous.j2i()));
          } else {
            if (isInterface(previous, Task)) {
              previous.m2i();
            } else {
              if (previous instanceof Closed) {
                tmp2.n2i(previous.i2i_1);
                break $l$block_0;
              } else {
                if (!equals(previous, Empty_instance)) {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
          if (!(!this.d2j() && this.z2i_1.kotlinx$atomicfu$value == null)) {
            // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
            var current = tmp0.w2i_1.kotlinx$atomicfu$value;
            var tmp;
            if (current instanceof Write) {
              tmp = tmp0.w2i_1.atomicfu$compareAndSet(current, Empty_instance);
            } else {
              tmp = false;
            }
            if (tmp) {
              current.m2i();
            }
          }
        }
        return cancellable.q1s();
      });
    }
    return Unit_instance;
  }
  f2k() {
    if (this.y2i_1.a2f())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.v2i_1;
    var count = convertToInt(this.y2i_1.m2());
    this.t2i_1.s2g(this.y2i_1);
    this.u2i_1 = this.u2i_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.w2i_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.w2i_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.m2i();
    }
  }
  v5() {
    this.f2k();
    if (!this.z2i_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  }
  *g2k($completion) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      yield* this.e2k($completion);
      // Inline function 'kotlin.Companion.success' call
      tmp = _Result___init__impl__xyqfz8(Unit_instance);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    if (!this.z2i_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
    return Unit_instance;
  }
  h2k(cause) {
    if (!(this.z2i_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.z2i_1.atomicfu$compareAndSet(null, closedToken);
    // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
    var tmp0_subject = access$_get_origin__hdh1qz(closedToken);
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = access$_get_origin__hdh1qz(closedToken).l1x();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException.p(access$_get_origin__hdh1qz(closedToken).message, access$_get_origin__hdh1qz(closedToken));
        } else {
          var p0 = access$_get_origin__hdh1qz(closedToken);
          tmp = ClosedByteChannelException.v2j(p0);
        }
      }
    }
    var wrappedCause = tmp;
    closeSlot(this, wrappedCause);
  }
  i2k(handler) {
    var existingCause = this.z2i_1.kotlinx$atomicfu$value;
    if (!(existingCause == null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(existingCause);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(existingCause).l1x();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException.p(access$_get_origin__hdh1qz(existingCause).message, access$_get_origin__hdh1qz(existingCause));
          } else {
            var p0 = access$_get_origin__hdh1qz(existingCause);
            tmp = ClosedByteChannelException.v2j(p0);
          }
        }
      }
      handler(tmp);
      var tmp_0 = ByteChannel$invokeOnClose$lambda;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_0);
    }
    if (!this.a2j_1.atomicfu$compareAndSet(null, handler)) {
      // Inline function 'kotlin.error' call
      var message = 'Only one invokeOnClose handler is supported per channel';
      throw IllegalStateException.o(toString_1(message));
    }
    var cause = this.z2i_1.kotlinx$atomicfu$value;
    if (!(cause == null) && this.a2j_1.atomicfu$compareAndSet(handler, null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject_0 = access$_get_origin__hdh1qz(cause);
      var tmp_1;
      if (tmp0_subject_0 == null) {
        tmp_1 = null;
      } else {
        if (isInterface(tmp0_subject_0, CopyableThrowable)) {
          tmp_1 = access$_get_origin__hdh1qz(cause).l1x();
        } else {
          if (tmp0_subject_0 instanceof CancellationException) {
            tmp_1 = CancellationException.p(access$_get_origin__hdh1qz(cause).message, access$_get_origin__hdh1qz(cause));
          } else {
            var p0_0 = access$_get_origin__hdh1qz(cause);
            tmp_1 = ClosedByteChannelException.v2j(p0_0);
          }
        }
      }
      handler(tmp_1);
      var tmp_2 = ByteChannel$invokeOnClose$lambda_0;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_2);
    }
    var tmp_3 = ByteChannel$invokeOnClose$lambda_1(this, handler);
    return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_3);
  }
  toString() {
    return 'ByteChannel[' + hashCode(this) + ']';
  }
}
class ConcurrentIOException extends IllegalStateException {
  static c2k(taskName, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.q('Concurrent ' + taskName + ' attempts', cause);
    captureStack($this, $this.b2k_1);
    return $this;
  }
}
class ByteChannelScanner {
  constructor(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    this.j2k_1 = channel;
    this.k2k_1 = matchString;
    this.l2k_1 = writeChannel;
    this.m2k_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.k2k_1.m2() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException.w1(toString_1(message));
    }
    this.n2k_1 = this.j2k_1.e2j();
    this.o2k_1 = buildPartialMatchTable(this);
    this.p2k_1 = new Buffer();
    this.q2k_1 = 0n;
    this.r2k_1 = 0;
  }
  *s2k(ignoreMissing, $completion) {
    this.q2k_1 = 0n;
    while (!this.n2k_1.a2f() || (yield* this.j2k_1.d2k(VOID, $completion))) {
      yield* /*#__NOINLINE__*/advanceToNextPotentialMatch(this, $completion);
      if (yield* /*#__NOINLINE__*/checkFullMatch(this, $completion)) {
        return this.q2k_1;
      }
    }
    if (!ignoreMissing) {
      throw IOException.d2i('Expected "' + toSingleLineString(this, this.k2k_1) + '" but encountered end of input');
    }
    this.q2k_1 = add(this.q2k_1, this.p2k_1.d2g(this.l2k_1.k2j()));
    yield* this.l2k_1.e2k($completion);
    return this.q2k_1;
  }
}
class ByteReadChannel$Companion$Empty$1 {
  constructor() {
    this.v2k_1 = null;
    this.w2k_1 = new Buffer();
  }
  r2j() {
    return this.v2k_1;
  }
  w2j() {
    return true;
  }
  e2j() {
    return this.w2k_1;
  }
  *x2j(min, $completion) {
    return false;
  }
  h2k(cause) {
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.x2k_1 = new ByteReadChannel$Companion$Empty$1();
  }
}
class WriterJob {
  constructor(channel, job) {
    this.t2k_1 = channel;
    this.u2k_1 = job;
  }
  o1w() {
    return this.u2k_1;
  }
}
class WriterScope {
  constructor(channel, coroutineContext) {
    this.d2l_1 = channel;
    this.e2l_1 = coroutineContext;
  }
  l1q() {
    return this.e2l_1;
  }
}
class NO_CALLBACK$1 {
  constructor() {
    this.f2l_1 = EmptyCoroutineContext_instance;
  }
  rb() {
    return this.f2l_1;
  }
  sb(result) {
    return Unit_instance;
  }
  tb(result) {
    return this.sb(result);
  }
}
class ByteWriteChannel$flushAndClose$ref {
  constructor(p0) {
    this.g2l_1 = p0;
  }
  *h2l($completion) {
    return yield* this.g2l_1.g2k($completion);
  }
  pc($completion) {
    return this.h2l($completion);
  }
}
class writer$slambda {
  constructor($block, $channel) {
    this.i2l_1 = $block;
    this.j2l_1 = $channel;
  }
  *k2l($this$launch, $completion) {
    var nested = Job(get_job($this$launch.l1q()));
    try {
      yield* this.i2l_1(new WriterScope(this.j2l_1, $this$launch.l1q().uj(nested)), $completion);
      nested.a1x();
      if (get_job($this$launch.l1q()).h1r()) {
        this.j2l_1.h2k(get_job($this$launch.l1q()).k1r());
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var cause = $p;
        cancel(nested, 'Exception thrown while writing to channel', cause);
        this.j2l_1.h2k(cause);
      } else {
        throw $p;
      }
    }
    finally {
      yield* nested.r1r($completion);
      // Inline function 'kotlin.runCatching' call
      var tmp;
      try {
        yield* this.j2l_1.g2k($completion);
        // Inline function 'kotlin.Companion.success' call
        tmp = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
    }
    return Unit_instance;
  }
  qc(p1, $completion) {
    return this.k2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class Companion_1 {}
class CloseToken {
  constructor(origin) {
    this.l2l_1 = origin;
  }
}
class CountedByteReadChannel {
  constructor(delegate) {
    this.m2l_1 = delegate;
    this.n2l_1 = new Buffer();
    this.o2l_1 = 0n;
    this.p2l_1 = 0n;
  }
  q2l() {
    updateConsumed(this);
    return this.p2l_1;
  }
  r2j() {
    return this.m2l_1.r2j();
  }
  w2j() {
    return this.n2l_1.a2f() && this.m2l_1.w2j();
  }
  e2j() {
    transferFromDelegate(this);
    return this.n2l_1;
  }
  *x2j(min, $completion) {
    if (this.e2j().m2() >= fromInt(min)) {
      return true;
    }
    if (yield* this.m2l_1.x2j(min, $completion)) {
      transferFromDelegate(this);
      return true;
    }
    return false;
  }
  h2k(cause) {
    this.m2l_1.h2k(cause);
    this.n2l_1.v5();
  }
}
class ClosedByteChannelException extends IOException {
  static v2j(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.e2i(cause == null ? null : cause.message, cause);
    captureStack($this, $this.u2j_1);
    return $this;
  }
}
class ClosedReadChannelException extends ClosedByteChannelException {
  static j2j(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.v2j(cause);
    captureStack($this, $this.i2j_1);
    return $this;
  }
}
class ClosedWriteChannelException extends ClosedByteChannelException {
  static p2j(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.v2j(cause);
    captureStack($this, $this.o2j_1);
    return $this;
  }
}
class LineEnding extends Enum {}
class Companion_2 {
  constructor() {
    Companion_instance_3 = this;
    this.r2l_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.s2l_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.t2l_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.u2l_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.v2l_1 = listOf([new LineEndingMode(this.r2l_1), new LineEndingMode(this.s2l_1), new LineEndingMode(this.t2l_1)]);
  }
}
class LineEndingMode {
  constructor(mode) {
    Companion_getInstance_2();
    this.w2l_1 = mode;
  }
  toString() {
    return LineEndingMode__toString_impl_j4h76r(this.w2l_1);
  }
  hashCode() {
    return LineEndingMode__hashCode_impl_2mopm4(this.w2l_1);
  }
  equals(other) {
    return LineEndingMode__equals_impl_qyr4nk(this.w2l_1, other);
  }
}
class SourceByteReadChannel {
  constructor(source) {
    this.x2l_1 = source;
    this.y2l_1 = null;
  }
  r2j() {
    var tmp0_safe_receiver = this.y2l_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).l1x();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException.p(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = ClosedByteChannelException.v2j(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  w2j() {
    return this.x2l_1.a2f();
  }
  e2j() {
    var tmp0_safe_receiver = this.r2j();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.x2l_1.z2e();
  }
  *x2j(min, $completion) {
    var tmp0_safe_receiver = this.r2j();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.x2l_1.c2f(fromInt(min));
  }
  h2k(cause) {
    if (!(this.y2l_1 == null))
      return Unit_instance;
    this.x2l_1.v5();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.y2l_1 = new CloseToken(IOException.e2i(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  }
}
class MalformedInputException extends IOException {
  static c2m(message) {
    var $this = this.d2i(message);
    captureStack($this, $this.b2m_1);
    return $this;
  }
}
class TooLongLineException extends MalformedInputException {
  static c2l(message) {
    var $this = this.c2m(message);
    captureStack($this, $this.b2l_1);
    return $this;
  }
}
class ObjectPool {}
function close() {
  this.z1t();
}
class DefaultPool {
  constructor(capacity) {
    this.m2m_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.m2m_1;
    tmp.n2m_1 = Array(size);
    this.o2m_1 = 0;
  }
  p2m(instance) {
  }
  q2m(instance) {
    return instance;
  }
  r2m(instance) {
  }
  s2m() {
    if (this.o2m_1 === 0)
      return this.l2m();
    this.o2m_1 = this.o2m_1 - 1 | 0;
    var idx = this.o2m_1;
    var tmp = this.n2m_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.n2m_1[idx] = null;
    return this.q2m(instance);
  }
  t2m(instance) {
    this.r2m(instance);
    if (this.o2m_1 === this.m2m_1) {
      this.p2m(instance);
    } else {
      var _unary__edvuaz = this.o2m_1;
      this.o2m_1 = _unary__edvuaz + 1 | 0;
      this.n2m_1[_unary__edvuaz] = instance;
    }
  }
  z1t() {
    var inductionVariable = 0;
    var last = this.o2m_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.n2m_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.n2m_1[i] = null;
        this.p2m(instance);
      }
       while (inductionVariable < last);
    this.o2m_1 = 0;
  }
}
class ByteArrayPool$1 extends DefaultPool {
  constructor() {
    super(128);
  }
  l2m() {
    return new Int8Array(4096);
  }
}
class NoPoolImpl {
  t2m(instance) {
    return Unit_instance;
  }
  z1t() {
    return Unit_instance;
  }
}
class Companion_3 {
  u2m(name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().d2m_1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().e2m_1;
    }
    throw IllegalArgumentException.w1('Charset ' + name + ' is not supported');
  }
}
class Charset {
  constructor(_name) {
    this.f2m_1 = _name;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.f2m_1 === other.f2m_1;
  }
  hashCode() {
    return getStringHashCode(this.f2m_1);
  }
  toString() {
    return this.f2m_1;
  }
}
class Charsets {
  constructor() {
    Charsets_instance = this;
    this.d2m_1 = new CharsetImpl('UTF-8');
    this.e2m_1 = new CharsetImpl('ISO-8859-1');
  }
}
class CharsetDecoder {
  constructor(_charset) {
    this.v2m_1 = _charset;
  }
}
class CharsetEncoder {
  constructor(_charset) {
    this.w2m_1 = _charset;
  }
}
class CharsetImpl extends Charset {
  g2m() {
    return new CharsetEncoderImpl(this);
  }
  h2m() {
    return new CharsetDecoderImpl(this);
  }
}
class CharsetEncoderImpl extends CharsetEncoder {
  constructor(charset) {
    super(charset);
    this.a2n_1 = charset;
  }
  toString() {
    return 'CharsetEncoderImpl(charset=' + this.a2n_1.toString() + ')';
  }
  hashCode() {
    return this.a2n_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.a2n_1.equals(other.a2n_1))
      return false;
    return true;
  }
}
class CharsetDecoderImpl extends CharsetDecoder {
  constructor(charset) {
    super(charset);
    this.c2n_1 = charset;
  }
  toString() {
    return 'CharsetDecoderImpl(charset=' + this.c2n_1.toString() + ')';
  }
  hashCode() {
    return this.c2n_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.c2n_1.equals(other.c2n_1))
      return false;
    return true;
  }
}
class toKtor$1 {
  constructor($this_toKtor) {
    this.d2n_1 = $this_toKtor;
  }
  x2m(buffer) {
    return this.d2n_1.decode(buffer);
  }
}
class TextDecoderFallback {
  constructor(encoding, fatal) {
    this.e2n_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().q3(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException.o(toString_1(message));
    }
  }
  x2m(buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.e2n_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException.o(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.t2g(toByte(point >> 8));
        }
        builder.t2g(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString(readByteArray_0(builder));
  }
}
//endregion
var Companion_instance_0;
function Companion_getInstance() {
  if (Companion_instance_0 === VOID)
    new Companion();
  return Companion_instance_0;
}
var Empty_instance;
function Empty_getInstance() {
  return Empty_instance;
}
function moveFlushToReadBuffer($this) {
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  $this.v2i_1;
  $this.t2i_1.d2g($this.x2i_1);
  $this.u2i_1 = 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = $this.w2i_1.kotlinx$atomicfu$value;
  var tmp;
  if (current instanceof Write) {
    tmp = $this.w2i_1.atomicfu$compareAndSet(current, Empty_instance);
  } else {
    tmp = false;
  }
  if (tmp) {
    current.m2i();
  }
}
function closeSlot($this, cause) {
  var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().g2i_1;
  var continuation = $this.w2i_1.atomicfu$getAndSet(closeContinuation);
  if (isInterface(continuation, Task)) {
    continuation.n2i(cause);
  }
  var tmp0_safe_receiver = $this.a2j_1.atomicfu$getAndSet(null);
  if (tmp0_safe_receiver == null)
    null;
  else
    tmp0_safe_receiver(cause);
}
function ByteChannel$invokeOnClose$lambda() {
  return Unit_instance;
}
function ByteChannel$invokeOnClose$lambda_0() {
  return Unit_instance;
}
function ByteChannel$invokeOnClose$lambda_1(this$0, $handler) {
  return () => {
    this$0.a2j_1.atomicfu$compareAndSet($handler, null);
    return Unit_instance;
  };
}
function ByteReadChannel_0(content, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? content.length : length;
  // Inline function 'kotlin.also' call
  var this_0 = new Buffer();
  this_0.j2g(content, offset, offset + length | 0);
  var source = this_0;
  return ByteReadChannel_1(source);
}
function ByteReadChannel_1(source) {
  return new SourceByteReadChannel(source);
}
function buildPartialMatchTable($this) {
  var table = new Int32Array($this.k2k_1.m2());
  var j = 0;
  var inductionVariable = 1;
  var last = $this.k2k_1.m2();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      while (j > 0 && !($this.k2k_1.k2(i) === $this.k2k_1.k2(j))) {
        j = table[j - 1 | 0];
      }
      if ($this.k2k_1.k2(i) === $this.k2k_1.k2(j)) {
        j = j + 1 | 0;
      }
      table[i] = j;
    }
     while (inductionVariable < last);
  return table;
}
function *advanceToNextPotentialMatch($this, $completion) {
  while (!$this.n2k_1.a2f() || (yield* $this.j2k_1.d2k(VOID, $completion))) {
    var nextMatch = indexOf($this.n2k_1, $this.k2k_1.k2(0));
    if (nextMatch === -1n) {
      var tmp = $this.n2k_1;
      checkBounds($this, (tmp instanceof Buffer ? tmp : THROW_CCE()).m2());
      $this.q2k_1 = add($this.q2k_1, $this.n2k_1.d2g($this.l2k_1.k2j()));
      yield* flushIfNeeded($this.l2k_1, $completion);
    } else {
      checkBounds($this, nextMatch);
      var tmp_0 = $this;
      var tmp_1 = $this.q2k_1;
      var tmp_2 = $this.l2k_1.k2j();
      tmp_0.q2k_1 = add(tmp_1, $this.n2k_1.a2g(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), nextMatch));
      yield* flushIfNeeded($this.l2k_1, $completion);
      return Unit_instance;
    }
  }
  return Unit_instance;
}
function *checkFullMatch($this, $completion) {
  while (!$this.n2k_1.a2f() || (yield* $this.j2k_1.d2k(VOID, $completion))) {
    var byte = $this.n2k_1.d2f();
    if ($this.r2k_1 > 0 && !(byte === $this.k2k_1.k2($this.r2k_1))) {
      var oldMatchIndex = $this.r2k_1;
      while ($this.r2k_1 > 0 && !(byte === $this.k2k_1.k2($this.r2k_1))) {
        $this.r2k_1 = $this.o2k_1[$this.r2k_1 - 1 | 0];
      }
      var retained = fromInt(oldMatchIndex - $this.r2k_1 | 0);
      checkBounds($this, retained);
      var tmp = $this;
      var tmp_0 = $this.q2k_1;
      var tmp_1 = $this.l2k_1.k2j();
      tmp.q2k_1 = add(tmp_0, $this.p2k_1.a2g(tmp_1 instanceof Buffer ? tmp_1 : THROW_CCE(), retained));
      if ($this.r2k_1 === 0 && !(byte === $this.k2k_1.k2($this.r2k_1))) {
        yield* writeByte($this.l2k_1, byte, $completion);
        var _unary__edvuaz = $this.q2k_1;
        $this.q2k_1 = add(_unary__edvuaz, get_ONE());
        return false;
      }
    }
    $this.r2k_1 = $this.r2k_1 + 1 | 0;
    if ($this.r2k_1 === $this.k2k_1.m2()) {
      return true;
    }
    $this.p2k_1.t2g(byte);
  }
  return false;
}
function checkBounds($this, extra) {
  if (add($this.q2k_1, extra) > $this.m2k_1) {
    throw IOException.d2i('Limit of ' + $this.m2k_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.k2k_1) + '"'));
  }
}
function toSingleLineString($this, $receiver) {
  return replace(decodeToString_0($receiver), '\n', '\\n');
}
function attachWriterJob(_this__u8e3s4, writerJob) {
  var tmp = writerJob.t2k_1;
  var tmp0_safe_receiver = tmp instanceof ByteChannel ? tmp : null;
  if (tmp0_safe_receiver == null)
    null;
  else {
    tmp0_safe_receiver.i2k(attachWriterJob$lambda(_this__u8e3s4));
  }
}
function attachWriterJob$lambda($this_attachWriterJob) {
  return (cause) => {
    var tmp;
    if (!(cause == null)) {
      $this_attachWriterJob.h2k(cause);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var Companion_instance_1;
function Companion_getInstance_0() {
  if (Companion_instance_1 === VOID)
    new Companion_0();
  return Companion_instance_1;
}
function cancel_0(_this__u8e3s4) {
  _this__u8e3s4.h2k(IOException.d2i('Channel was cancelled'));
}
function *readRemaining(_this__u8e3s4, $completion) {
  var result = BytePacketBuilder();
  while (!_this__u8e3s4.w2j()) {
    result.s2g(_this__u8e3s4.e2j());
    yield* _this__u8e3s4.d2k(VOID, $completion);
  }
  rethrowCloseCauseIfNeeded(_this__u8e3s4);
  return result.z2e();
}
function *toByteArray(_this__u8e3s4, $completion) {
  return readBytes(yield* readBuffer(_this__u8e3s4, $completion));
}
function *copyTo(_this__u8e3s4, channel, limit, $completion) {
  var remaining = limit;
  try {
    while (!_this__u8e3s4.w2j() && remaining > 0n) {
      if (_this__u8e3s4.e2j().a2f()) {
        yield* _this__u8e3s4.d2k(VOID, $completion);
      }
      var tmp0 = remaining;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = get_remaining(_this__u8e3s4.e2j());
      var count = tmp0 <= b ? tmp0 : b;
      _this__u8e3s4.e2j().c2g(channel.k2j(), count);
      remaining = subtract(remaining, count);
      yield* channel.e2k($completion);
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.h2k(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    yield* channel.e2k($completion);
  }
  return subtract(limit, remaining);
}
function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.r2j();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function *discard(_this__u8e3s4, max, $completion) {
  max = max === VOID ? 9223372036854775807n : max;
  var remaining = max;
  while (remaining > 0n && !_this__u8e3s4.w2j()) {
    if (get_availableForRead(_this__u8e3s4) === 0) {
      yield* _this__u8e3s4.d2k(VOID, $completion);
    }
    var tmp0 = remaining;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4.e2j());
    var count = tmp0 <= b ? tmp0 : b;
    discard_0(_this__u8e3s4.e2j(), count);
    remaining = subtract(remaining, count);
  }
  return subtract(max, remaining);
}
function *copyTo_0(_this__u8e3s4, channel, $completion) {
  var result = 0n;
  try {
    while (!_this__u8e3s4.w2j()) {
      result = add(result, _this__u8e3s4.e2j().d2g(channel.k2j()));
      yield* channel.e2k($completion);
      yield* _this__u8e3s4.d2k(VOID, $completion);
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.h2k(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    yield* channel.e2k($completion);
  }
  return result;
}
function *readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  if (_this__u8e3s4.w2j())
    return -1;
  if (_this__u8e3s4.e2j().a2f()) {
    yield* _this__u8e3s4.d2k(VOID, $completion);
  }
  if (_this__u8e3s4.w2j())
    return -1;
  return readAvailable_0(_this__u8e3s4.e2j(), buffer, offset, length);
}
function *skipIfFound(_this__u8e3s4, byteString, $completion) {
  if (equals(yield* peek(_this__u8e3s4, byteString.m2(), $completion), byteString)) {
    yield* /*#__NOINLINE__*/discard(_this__u8e3s4, fromInt(byteString.m2()), $completion);
    return true;
  }
  return false;
}
function *readPacket(_this__u8e3s4, packet, $completion) {
  var result = new Buffer();
  $l$loop: while (result.m2() < fromInt(packet)) {
    if (_this__u8e3s4.e2j().a2f()) {
      yield* _this__u8e3s4.d2k(VOID, $completion);
    }
    if (_this__u8e3s4.w2j())
      break $l$loop;
    if (get_remaining(_this__u8e3s4.e2j()) > subtract(numberToLong(packet), result.m2())) {
      _this__u8e3s4.e2j().c2g(result, subtract(numberToLong(packet), result.m2()));
    } else {
      _this__u8e3s4.e2j().d2g(result);
    }
  }
  if (result.m2() < fromInt(packet)) {
    throw EOFException.y2e('Not enough data available, required ' + packet + ' bytes but only ' + result.m2().toString() + ' available');
  }
  return result;
}
function *readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
  return yield* (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).s2k(ignoreMissing, $completion);
}
function *readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
  // Inline function 'kotlin.require' call
  if (!(limit >= 0n)) {
    var message = 'Limit (' + limit.toString() + ') should be non-negative';
    throw IllegalArgumentException.w1(toString_1(message));
  }
  return yield* internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
}
function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.r2j();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function *readBuffer(_this__u8e3s4, $completion) {
  var result = new Buffer();
  while (!_this__u8e3s4.w2j()) {
    result.s2g(_this__u8e3s4.e2j());
    yield* _this__u8e3s4.d2k(VOID, $completion);
  }
  var tmp0_safe_receiver = _this__u8e3s4.r2j();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
  return result;
}
function get_availableForRead(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.e2j().z2e().m2());
}
function *peek(_this__u8e3s4, count, $completion) {
  if (_this__u8e3s4.w2j())
    return null;
  if (!(yield* _this__u8e3s4.x2j(count, $completion)))
    return null;
  return readByteString(_this__u8e3s4.e2j().e2g(), count);
}
function *internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
  var readBuffer = _this__u8e3s4.e2j();
  if (readBuffer.a2f()) {
    yield* _this__u8e3s4.d2k(VOID, $completion);
  }
  if (_this__u8e3s4.w2j())
    return -1n;
  var consumed = {_v: 0n};
  $l$loop: while (consumed._v < limit && !_this__u8e3s4.w2j()) {
    var limitLeft = subtract(limit, consumed._v);
    var lfIndex = indexOf(readBuffer, 10, VOID, limitLeft);
    var crIndex = internalReadLineTo$scanForSoleCr(readBuffer, lenientLineEnding, lfIndex, limitLeft);
    if (crIndex >= 0n) {
      internalReadLineTo$transferString(readBuffer, out, consumed, crIndex);
      discard_0(readBuffer, 1n);
      return consumed._v;
    }
    if (lfIndex === 0n) {
      discard_0(readBuffer, 1n);
      return consumed._v;
    }
    if (lfIndex > 0n) {
      var tmp;
      var tmp_0 = readBuffer.z2e();
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0 = subtract(lfIndex, fromInt(1));
      if (tmp_0.v2f(tmp$ret$0) === 13) {
        tmp = 1n;
      } else {
        tmp = 0n;
      }
      var isCrlf = tmp;
      internalReadLineTo$transferString(readBuffer, out, consumed, subtract(lfIndex, isCrlf));
      discard_0(readBuffer, add(numberToLong(1), isCrlf));
      return consumed._v;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(readBuffer);
    var count = limitLeft <= b ? limitLeft : b;
    var tmp_1 = readBuffer.z2e();
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$2 = subtract(count, fromInt(1));
    if (tmp_1.v2f(tmp$ret$2) === 13) {
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$3 = subtract(count, fromInt(1));
      internalReadLineTo$transferString(readBuffer, out, consumed, tmp$ret$3);
      if (yield* internalReadLineTo$discardCrlfOrCr(readBuffer, _this__u8e3s4, lenientLineEnding, $completion))
        return consumed._v;
      internalReadLineTo$transferString(readBuffer, out, consumed, 1n);
    } else {
      internalReadLineTo$transferString(readBuffer, out, consumed, count);
    }
    if (consumed._v < limit && get_remaining(readBuffer) === 0n && !(yield* _this__u8e3s4.d2k(VOID, $completion)))
      break $l$loop;
  }
  if (consumed._v === 0n && _this__u8e3s4.w2j())
    return -1n;
  // Inline function 'kotlin.check' call
  if (!(consumed._v <= limit)) {
    var message = 'Consumed bytes exceed the limit: ' + consumed._v.toString() + ' > ' + limit.toString() + ". It's an implementation bug, please report it.";
    throw IllegalStateException.o(toString_1(message));
  }
  if (consumed._v === limit) {
    if (limit === 9223372036854775807n)
      throw TooLongLineException.c2l('Max line length exceeded');
    if (get_remaining(readBuffer) === 0n && !(yield* _this__u8e3s4.d2k(VOID, $completion))) {
      throwEndOfStreamException(consumed._v);
    }
    var tmp0_subject = readBuffer.z2e().v2f(0n);
    if (tmp0_subject === 10) {
      discard_0(readBuffer, 1n);
      return consumed._v;
    } else if (tmp0_subject === 13)
      if (yield* internalReadLineTo$discardCrlfOrCr(readBuffer, _this__u8e3s4, lenientLineEnding, $completion))
        return consumed._v;
    throwTooLongLineException(limit);
  }
  if (throwOnIncompleteLine) {
    throwEndOfStreamException(consumed._v);
  }
  return consumed._v;
}
function throwEndOfStreamException(consumed) {
  throw EOFException.y2e('Unexpected end of stream after reading ' + consumed.toString() + ' characters');
}
function throwTooLongLineException(limit) {
  throw TooLongLineException.c2l('Line exceeds limit of ' + limit.toString() + ' characters');
}
function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.r2j();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function internalReadLineTo$transferString(readBuffer, $out, consumed, count) {
  if (count > 0n) {
    var string = readString(readBuffer, count);
    $out.i2(string);
    var tmp0 = consumed._v;
    // Inline function 'kotlin.Long.plus' call
    var other = string.length;
    consumed._v = add(tmp0, fromInt(other));
  }
}
function internalReadLineTo$scanForSoleCr(_this__u8e3s4, $lenientLineEnding, lfIndex, limitLeft) {
  if (!$lenientLineEnding)
    return -1n;
  var tmp;
  if (lfIndex === -1n) {
    // Inline function 'kotlin.Long.minus' call
    var this_0 = get_remaining(_this__u8e3s4);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this_0, fromInt(1));
    tmp = limitLeft <= b ? limitLeft : b;
  } else if (lfIndex === 0n) {
    tmp = 0n;
  } else {
    // Inline function 'kotlin.Long.minus' call
    tmp = subtract(lfIndex, fromInt(1));
  }
  var endIndex = tmp;
  return indexOf(_this__u8e3s4, 13, VOID, endIndex);
}
function *internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
  if ((get_remaining(_this__u8e3s4) >= 2n || (yield* $this_internalReadLineTo.x2j(2, $completion))) && _this__u8e3s4.z2e().v2f(1n) === 10) {
    discard_0(_this__u8e3s4, 2n);
    return true;
  }
  if ($lenientLineEnding) {
    discard_0(_this__u8e3s4, 1n);
    return true;
  }
  return false;
}
function *flushIfNeeded(_this__u8e3s4, $completion) {
  rethrowCloseCauseIfNeeded_1(_this__u8e3s4);
  if (_this__u8e3s4.c2j() || get_size(_this__u8e3s4.k2j()) >= 1048576)
    yield* _this__u8e3s4.e2k($completion);
  return Unit_instance;
}
function get_NO_CALLBACK() {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return NO_CALLBACK;
}
var NO_CALLBACK;
function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
  autoFlush = autoFlush === VOID ? false : autoFlush;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
}
function invokeOnCompletion(_this__u8e3s4, block) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return _this__u8e3s4.o1w().n1r(block);
}
function *writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? value.length : endIndex;
  _this__u8e3s4.k2j().j2g(value, startIndex, endIndex);
  yield* flushIfNeeded(_this__u8e3s4, $completion);
  return Unit_instance;
}
function close_0(_this__u8e3s4, cause) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  if (cause == null) {
    fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
  } else {
    _this__u8e3s4.h2k(cause);
  }
}
function *writePacket(_this__u8e3s4, source, $completion) {
  while (!source.a2f()) {
    _this__u8e3s4.k2j().n2g(source, get_remaining(source));
    yield* flushIfNeeded(_this__u8e3s4, $completion);
  }
  return Unit_instance;
}
function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  // Inline function 'kotlin.apply' call
  var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel));
  this_0.n1r(writer$lambda(channel));
  var job = this_0;
  return new WriterJob(channel, job);
}
function fireAndForget(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
}
function *writeByte(_this__u8e3s4, value, $completion) {
  _this__u8e3s4.k2j().t2g(value);
  yield* flushIfNeeded(_this__u8e3s4, $completion);
  return Unit_instance;
}
function ByteWriteChannel$flushAndClose$ref_0(p0) {
  var i = new ByteWriteChannel$flushAndClose$ref(p0);
  var l = ($completion) => i.h2l($completion);
  l.callableName = 'flushAndClose';
  l.$arity = 0;
  return l;
}
function writer$slambda_0($block, $channel) {
  var i = new writer$slambda($block, $channel);
  var l = ($this$launch, $completion) => i.k2l($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function writer$lambda($channel) {
  return (it) => {
    var tmp;
    if (!(it == null) && !$channel.q2j()) {
      $channel.h2k(it);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
  if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
    properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
    NO_CALLBACK = new NO_CALLBACK$1();
  }
}
function get_CLOSED() {
  _init_properties_CloseToken_kt__9ucr41();
  return CLOSED;
}
var CLOSED;
var Companion_instance_2;
function Companion_getInstance_1() {
  return Companion_instance_2;
}
function access$_get_origin__hdh1qz($this) {
  return $this.l2l_1;
}
var properties_initialized_CloseToken_kt_lgg8zn;
function _init_properties_CloseToken_kt__9ucr41() {
  if (!properties_initialized_CloseToken_kt_lgg8zn) {
    properties_initialized_CloseToken_kt_lgg8zn = true;
    CLOSED = new CloseToken(null);
  }
}
function transferFromDelegate($this) {
  updateConsumed($this);
  var appended = $this.n2l_1.s2g($this.m2l_1.e2j());
  $this.o2l_1 = add($this.o2l_1, appended);
}
function updateConsumed($this) {
  $this.p2l_1 = add($this.p2l_1, subtract($this.o2l_1, $this.n2l_1.m2()));
  $this.o2l_1 = $this.n2l_1.m2();
}
function counted(_this__u8e3s4) {
  return new CountedByteReadChannel(_this__u8e3s4);
}
function readText(_this__u8e3s4) {
  return readString_0(_this__u8e3s4);
}
var LineEnding_Default_instance;
var LineEnding_Lenient_instance;
var LineEnding_entriesInitialized;
function LineEnding_initEntries() {
  if (LineEnding_entriesInitialized)
    return Unit_instance;
  LineEnding_entriesInitialized = true;
  LineEnding_Default_instance = new LineEnding('Default', 0);
  LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
}
function LineEnding_Default_getInstance() {
  LineEnding_initEntries();
  return LineEnding_Default_instance;
}
function LineEnding_Lenient_getInstance() {
  LineEnding_initEntries();
  return LineEnding_Lenient_instance;
}
function _LineEndingMode___init__impl__jo5bul(mode) {
  return mode;
}
function _get_mode__dah3bc($this) {
  return $this;
}
function LineEndingMode__contains_impl_q5pr68($this, other) {
  return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
}
function LineEndingMode__plus_impl_ttpz2j($this, other) {
  return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
}
function LineEndingMode__toString_impl_j4h76r($this) {
  var tmp;
  if ($this === Companion_getInstance_2().r2l_1) {
    tmp = 'CR';
  } else if ($this === Companion_getInstance_2().s2l_1) {
    tmp = 'LF';
  } else if ($this === Companion_getInstance_2().t2l_1) {
    tmp = 'CRLF';
  } else {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = Companion_getInstance_2().v2l_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.l2();
    var _iterator__ex2g4s = tmp0.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      var it = element.w2l_1;
      if (LineEndingMode__contains_impl_q5pr68($this, it)) {
        destination.d2(element);
      }
    }
    tmp = toString_1(destination);
  }
  return tmp;
}
var Companion_instance_3;
function Companion_getInstance_2() {
  if (Companion_instance_3 === VOID)
    new Companion_2();
  return Companion_instance_3;
}
function LineEndingMode__hashCode_impl_2mopm4($this) {
  return $this;
}
function LineEndingMode__equals_impl_qyr4nk($this, other) {
  if (!(other instanceof LineEndingMode))
    return false;
  if (!($this === other.w2l_1))
    return false;
  return true;
}
function decode(_this__u8e3s4, input, max) {
  max = max === VOID ? 2147483647 : max;
  var tmp0 = fromInt(max);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = input.z2e().m2();
  var tmp$ret$0 = tmp0 <= b ? tmp0 : b;
  // Inline function 'kotlin.text.buildString' call
  var capacity = convertToInt(tmp$ret$0);
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.fb(capacity);
  decode_0(_this__u8e3s4, input, this_0, max);
  return this_0.toString();
}
function encode(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
  return builder;
}
function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
  var start = fromIndex;
  if (start >= toIndex)
    return Unit_instance;
  $l$loop: while (true) {
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
    // Inline function 'kotlin.check' call
    if (!(rc >= 0)) {
      throw IllegalStateException.o('Check failed.');
    }
    start = start + rc | 0;
    if (start >= toIndex)
      break $l$loop;
  }
}
function canRead(_this__u8e3s4) {
  return !_this__u8e3s4.a2f();
}
function readBytes(_this__u8e3s4, count) {
  count = count === VOID ? convertToInt(_this__u8e3s4.m2()) : count;
  return readByteArray(_this__u8e3s4, count);
}
function BytePacketBuilder() {
  return new Buffer();
}
function writeFully_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  _this__u8e3s4.j2g(buffer, offset, offset + length | 0);
}
function build(_this__u8e3s4) {
  return _this__u8e3s4.z2e();
}
function get_size(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.z2e().m2());
}
var ByteReadPacketEmpty;
function ByteReadPacket(array, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? array.length : length;
  _init_properties_ByteReadPacket_kt__28475y();
  // Inline function 'kotlin.apply' call
  var this_0 = new Buffer();
  this_0.j2g(array, offset, offset + length | 0);
  return this_0;
}
function get_remaining(_this__u8e3s4) {
  _init_properties_ByteReadPacket_kt__28475y();
  return _this__u8e3s4.z2e().m2();
}
function takeWhile(_this__u8e3s4, block) {
  _init_properties_ByteReadPacket_kt__28475y();
  while (!_this__u8e3s4.a2f() && block(_this__u8e3s4.z2e())) {
  }
}
function discard_0(_this__u8e3s4, count) {
  count = count === VOID ? 9223372036854775807n : count;
  _init_properties_ByteReadPacket_kt__28475y();
  _this__u8e3s4.c2f(count);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = get_remaining(_this__u8e3s4);
  var countToDiscard = count <= b ? count : b;
  _this__u8e3s4.z2e().x2f(countToDiscard);
  return countToDiscard;
}
var properties_initialized_ByteReadPacket_kt_hw4st4;
function _init_properties_ByteReadPacket_kt__28475y() {
  if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
    properties_initialized_ByteReadPacket_kt_hw4st4 = true;
    ByteReadPacketEmpty = new Buffer();
  }
}
function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  var result = _this__u8e3s4.y2f(buffer, offset, offset + length | 0);
  return result === -1 ? 0 : result;
}
function toByteArray_0(_this__u8e3s4, charset) {
  charset = charset === VOID ? Charsets_getInstance().d2m_1 : charset;
  if (charset.equals(Charsets_getInstance().d2m_1))
    return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
  return encodeToByteArray_0(charset.g2m(), _this__u8e3s4, 0, _this__u8e3s4.length);
}
function readText_0(_this__u8e3s4, charset, max) {
  charset = charset === VOID ? Charsets_getInstance().d2m_1 : charset;
  max = max === VOID ? 2147483647 : max;
  if (charset.equals(Charsets_getInstance().d2m_1)) {
    if (max === 2147483647)
      return readString_0(_this__u8e3s4);
    var tmp0 = _this__u8e3s4.z2e().m2();
    // Inline function 'kotlin.math.min' call
    var b = fromInt(max);
    var count = tmp0 <= b ? tmp0 : b;
    return readString(_this__u8e3s4, count);
  }
  return decode(charset.h2m(), _this__u8e3s4, max);
}
function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
  charset = charset === VOID ? Charsets_getInstance().d2m_1 : charset;
  if (charset === Charsets_getInstance().d2m_1) {
    return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
  }
  encodeToImpl(charset.g2m(), _this__u8e3s4, text, fromIndex, toIndex);
}
function get_ByteArrayPool() {
  _init_properties_ByteArrayPool_kt__kfi3uj();
  return ByteArrayPool;
}
var ByteArrayPool;
var properties_initialized_ByteArrayPool_kt_td6pfh;
function _init_properties_ByteArrayPool_kt__kfi3uj() {
  if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
    properties_initialized_ByteArrayPool_kt_td6pfh = true;
    ByteArrayPool = new ByteArrayPool$1();
  }
}
var Companion_instance_4;
function Companion_getInstance_3() {
  return Companion_instance_4;
}
function get_name(_this__u8e3s4) {
  return _this__u8e3s4.f2m_1;
}
var Charsets_instance;
function Charsets_getInstance() {
  if (Charsets_instance === VOID)
    new Charsets();
  return Charsets_instance;
}
function forName(_this__u8e3s4, name) {
  return Companion_instance_4.u2m(name);
}
function decode_0(_this__u8e3s4, input, dst, max) {
  var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
  var tmp0 = input.z2e().m2();
  // Inline function 'kotlin.comparisons.minOf' call
  var b = fromInt(max);
  var count = tmp0 <= b ? tmp0 : b;
  var array = readByteArray(input, convertToInt(count));
  var tmp;
  try {
    // Inline function 'org.khronos.webgl.toInt8Array' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = decoder.x2m(array);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      var tmp0_elvis_lhs = cause.message;
      throw MalformedInputException.c2m('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
    } else {
      throw $p;
    }
  }
  var result = tmp;
  dst.i2(result);
  return result.length;
}
function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(fromIndex <= toIndex)) {
    var message = 'Failed requirement.';
    throw IllegalArgumentException.w1(toString_1(message));
  }
  if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().e2m_1)) {
    return encodeISO88591(input, fromIndex, toIndex, dst);
  }
  // Inline function 'kotlin.require' call
  if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().d2m_1)) {
    var message_0 = 'Only UTF-8 encoding is supported in JS';
    throw IllegalArgumentException.w1(toString_1(message_0));
  }
  var encoder = new TextEncoder();
  // Inline function 'kotlin.text.substring' call
  var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
  var result = encoder.encode(tmp$ret$5);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  dst.m2g(result);
  return result.length;
}
function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
}
function get_charset(_this__u8e3s4) {
  return _this__u8e3s4.v2m_1;
}
function get_charset_0(_this__u8e3s4) {
  return _this__u8e3s4.w2m_1;
}
function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  var start = fromIndex;
  if (start >= toIndex)
    return new Int8Array(0);
  var dst = new Buffer();
  var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
  start = start + rc | 0;
  if (start === toIndex) {
    return readByteArray_0(dst);
  }
  encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
  return readByteArray_0(dst);
}
function Decoder(encoding, fatal) {
  fatal = fatal === VOID ? true : fatal;
  var tmp;
  try {
    tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      tmp_0 = new TextDecoderFallback(encoding, fatal);
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function toKtor(_this__u8e3s4) {
  return new toKtor$1(_this__u8e3s4);
}
function textDecoderOptions(fatal) {
  fatal = fatal === VOID ? false : fatal;
  // Inline function 'kotlin.apply' call
  var this_0 = new Object();
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.with' call
  this_0.fatal = fatal;
  return this_0;
}
function get_ENCODING_ALIASES() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return ENCODING_ALIASES;
}
var ENCODING_ALIASES;
function get_REPLACEMENT() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return REPLACEMENT;
}
var REPLACEMENT;
function toCodePoint(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  var value = _this__u8e3s4 & 255;
  if (isASCII(value)) {
    return value;
  }
  return get_WIN1252_TABLE()[value - 128 | 0];
}
function isASCII(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
}
var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
  if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
    properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
    ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
    // Inline function 'kotlin.byteArrayOf' call
    REPLACEMENT = new Int8Array([-17, -65, -67]);
  }
}
function get_DEVELOPMENT_MODE() {
  return false;
}
function ioDispatcher() {
  return Dispatchers_getInstance().j21_1;
}
function encodeISO88591(input, fromIndex, toIndex, dst) {
  if (fromIndex >= toIndex)
    return 0;
  var inductionVariable = fromIndex;
  if (inductionVariable < toIndex)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(input, index);
      var character = Char__toInt_impl_vasixd(this_0);
      if (character > 255) {
        failedToMapError(character);
      }
      dst.t2g(toByte(character));
    }
     while (inductionVariable < toIndex);
  return toIndex - fromIndex | 0;
}
function failedToMapError(ch) {
  throw MalformedInputException.c2m('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
}
function get_WIN1252_TABLE() {
  _init_properties_Win1252Table_kt__tl0v64();
  return WIN1252_TABLE;
}
var WIN1252_TABLE;
var properties_initialized_Win1252Table_kt_pkmjoq;
function _init_properties_Win1252Table_kt__tl0v64() {
  if (!properties_initialized_Win1252Table_kt_pkmjoq) {
    properties_initialized_Win1252Table_kt_pkmjoq = true;
    // Inline function 'kotlin.intArrayOf' call
    WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
  }
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForObject(Empty, 'Empty');
initMetadataForClass(Closed, 'Closed');
initMetadataForInterface(Task, 'Task');
protoOf(Read).m2i = resume;
protoOf(Read).n2i = resume_0;
initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
protoOf(Write).m2i = resume;
protoOf(Write).n2i = resume_0;
initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
initMetadataForInterface(ByteReadChannel, 'ByteReadChannel', VOID, VOID, VOID, [1]);
initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
protoOf(ByteChannel).d2k = awaitContent$default;
initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel, ByteWriteChannel], [1, 0]);
initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException');
initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
protoOf(ByteReadChannel$Companion$Empty$1).d2k = awaitContent$default;
initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel], [1]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(WriterJob, 'WriterJob');
initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
initMetadataForLambda(writer$slambda, VOID, VOID, [1]);
initMetadataForCompanion(Companion_1);
initMetadataForClass(CloseToken, 'CloseToken');
protoOf(CountedByteReadChannel).d2k = awaitContent$default;
initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException.v2j);
initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException.j2j);
initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException.p2j);
initMetadataForClass(LineEnding, 'LineEnding');
initMetadataForCompanion(Companion_2);
initMetadataForClass(LineEndingMode, 'LineEndingMode');
protoOf(SourceByteReadChannel).d2k = awaitContent$default;
initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(MalformedInputException, 'MalformedInputException');
initMetadataForClass(TooLongLineException, 'TooLongLineException');
initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
protoOf(DefaultPool).v5 = close;
initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
initMetadataForClass(ByteArrayPool$1);
protoOf(NoPoolImpl).v5 = close;
initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
initMetadataForCompanion(Companion_3);
initMetadataForClass(Charset, 'Charset');
initMetadataForObject(Charsets, 'Charsets');
initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
initMetadataForClass(CharsetImpl, 'CharsetImpl');
initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl');
initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl');
initMetadataForClass(toKtor$1);
initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
//endregion
//region block: init
Empty_instance = new Empty();
Companion_instance_2 = new Companion_1();
Companion_instance_4 = new Companion_3();
//endregion
//region block: exports
export {
  Charsets_getInstance as Charsets_getInstanceqkyjyusuh1b0,
  Companion_getInstance_0 as Companion_getInstance16dzvgcii8pc4,
  Companion_getInstance_2 as Companion_getInstanceu6i25dezdn6m,
  copyTo as copyTo2si6ixg3c5rjz,
  copyTo_0 as copyTo3d5z1yutz1t4g,
  readAvailable as readAvailable2v9sgy82btrhn,
  readLineStrictTo as readLineStrictTo1xxmy01uq4bp,
  readPacket as readPacket1qzyfym3sry67,
  readRemaining as readRemaining1u8soafhjma7y,
  readUntil as readUntil3qqal0dj72fys,
  skipIfFound as skipIfFound34xzbgurmhd09,
  toByteArray as toByteArray39hw81iegcnuw,
  writeFully as writeFully1yd4favg5iwxl,
  writePacket as writePacket2srkw4h0yhov0,
  LineEndingMode__plus_impl_ttpz2j as LineEndingMode__plus_impl_ttpz2jpqrbpe81vmkf,
  MalformedInputException as MalformedInputExceptionbvc6h5ij0ias,
  decode as decode1t43jmuxrxpmo,
  encode as encode35e4rpnc94tb5,
  forName as forName2faodmskqnoz5,
  get_name as get_name2f11g4r0d5pxp,
  BytePacketBuilder as BytePacketBuilder2biodf4wxvlba,
  ByteReadPacket as ByteReadPacket24tdckgvuvatn,
  build as buildjygoh729rhy8,
  canRead as canRead1guo8vbveth0f,
  readText_0 as readText27783kyxjxi1g,
  get_remaining as get_remaining1lapv95kcmm0y,
  get_size as get_size2imoy2jq11jxl,
  takeWhile as takeWhile34751tcfg6owx,
  toByteArray_0 as toByteArray1i3ns5jnoqlv6,
  writeFully_0 as writeFully359t6q8kam2g5,
  writeText as writeText19qfzm98fbm4l,
  get_ByteArrayPool as get_ByteArrayPool3f7yrgvqxz9ct,
  DefaultPool as DefaultPool2gb1fm4epwgu9,
  NoPoolImpl as NoPoolImplgos9n8jphzjp,
  ByteChannel as ByteChannel3cxdguezl3lu7,
  ByteReadChannel_0 as ByteReadChannel1cb89sbyipkce,
  ByteReadChannel as ByteReadChannel2wzou76jce72d,
  ClosedByteChannelException as ClosedByteChannelException3il8gfpye60w,
  WriterScope as WriterScope3b0bo1enaee6b,
  attachWriterJob as attachWriterJob2dr3tee7atoa9,
  cancel_0 as canceldn4b3cdqcfny,
  close_0 as close3semq7pafb42g,
  counted as counted3iniv3aql3f9n,
  invokeOnCompletion as invokeOnCompletion1ziuxzoag0iwj,
  ioDispatcher as ioDispatcher3b9pa3x0duop,
  readText as readText3frapgncbqrcg,
  rethrowCloseCauseIfNeeded as rethrowCloseCauseIfNeeded3ixo8wl4o3bz4,
  writer as writer1eia5its2a1fh,
};
//endregion

//# sourceMappingURL=ktor-ktor-io.mjs.map
