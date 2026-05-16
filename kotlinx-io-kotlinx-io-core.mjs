import {
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  subtract2orl8z9upxd9l as subtract,
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  toString1pkumu07cwy4m as toString,
  Unit_instancev9v8hjid95df as Unit_instance,
  toShort36kaw0zjdq3ex as toShort,
  add2suhfggl4zvkk as add,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  fromInt2ii0rejb1w62w as fromInt,
  convertToInty04h231mmjoh as convertToInt,
  protoOf180f3jzyo7rfj as protoOf,
  StringBuildermazzzhj6kkai as StringBuilder,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  arrayCopytctsywo3h7gj as arrayCopy,
  toByte4i43936u611k as toByte,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  multiply2k9eolhnz1bjv as multiply,
  charCodeAt1yspne1d8erbm as charCodeAt,
  Char__toInt_impl_vasixdnyockrdnmht5 as Char__toInt_impl_vasixd,
  charArray2ujmm1qusno00 as charArray,
  numberToChar93r9buh19yek as numberToChar,
  concatToString3cxf0c1gqonpo as concatToString,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
import { UnsafeByteStringOperations_instance8alnioa9o8zd as UnsafeByteStringOperations_instance } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Source {}
class Sink {}
function write$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.j2g(source, startIndex, endIndex);
    tmp = Unit_instance;
  } else {
    tmp = $super.j2g.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
class Buffer {
  constructor() {
    this.s2e_1 = null;
    this.t2e_1 = null;
    this.u2e_1 = 0n;
  }
  m2() {
    return this.u2e_1;
  }
  z2e() {
    return this;
  }
  a2f() {
    return this.m2() === 0n;
  }
  b2f(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.w1(toString(message));
    }
    if (this.m2() < byteCount) {
      throw EOFException.y2e("Buffer doesn't contain required number of bytes (size: " + this.m2().toString() + ', required: ' + byteCount.toString() + ')');
    }
  }
  c2f(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException.w1(toString(message));
    }
    return this.m2() >= byteCount;
  }
  d2f() {
    var tmp0_elvis_lhs = this.s2e_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 1n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.m2();
    if (segmentSize === 0) {
      this.l2f();
      return this.d2f();
    }
    var v = segment.m2f();
    this.u2e_1 = subtract(this.u2e_1, 1n);
    if (segmentSize === 1) {
      this.l2f();
    }
    return v;
  }
  n2f() {
    var tmp0_elvis_lhs = this.s2e_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 2n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.m2();
    if (segmentSize < 2) {
      this.b2f(2n);
      if (segmentSize === 0) {
        this.l2f();
        return this.n2f();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.d2f() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.d2f() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.o2f();
    this.u2e_1 = subtract(this.u2e_1, 2n);
    if (segmentSize === 2) {
      this.l2f();
    }
    return v;
  }
  p2f() {
    return Unit_instance;
  }
  q2f(out, startIndex, endIndex) {
    checkBounds(this.m2(), startIndex, endIndex);
    if (startIndex === endIndex)
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = subtract(endIndex, startIndex);
    out.u2e_1 = add(out.u2e_1, remainingByteCount);
    var s = this.s2e_1;
    while (currentOffset >= fromInt(ensureNotNull(s).g2f_1 - s.f2f_1 | 0)) {
      currentOffset = subtract(currentOffset, fromInt(s.g2f_1 - s.f2f_1 | 0));
      s = s.j2f_1;
    }
    while (remainingByteCount > 0n) {
      var copy = ensureNotNull(s).r2f();
      copy.f2f_1 = copy.f2f_1 + convertToInt(currentOffset) | 0;
      var tmp = copy;
      var tmp0 = copy.f2f_1 + convertToInt(remainingByteCount) | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.g2f_1;
      tmp.g2f_1 = Math.min(tmp0, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.s2e_1 == null) {
        out.s2e_1 = copy;
        out.t2e_1 = copy;
      } else if (false) {
        out.t2e_1 = ensureNotNull(out.t2e_1).s2f(copy).t2f();
        if (ensureNotNull(out.t2e_1).k2f_1 == null) {
          out.s2e_1 = out.t2e_1;
        }
      } else {
        out.t2e_1 = ensureNotNull(out.t2e_1).s2f(copy);
      }
      remainingByteCount = subtract(remainingByteCount, fromInt(copy.g2f_1 - copy.f2f_1 | 0));
      currentOffset = 0n;
      s = s.j2f_1;
    }
  }
  u2f() {
    var result = this.m2();
    if (result === 0n)
      return 0n;
    var tail = ensureNotNull(this.t2e_1);
    if (tail.g2f_1 < 8192 && tail.i2f_1) {
      result = subtract(result, fromInt(tail.g2f_1 - tail.f2f_1 | 0));
    }
    return result;
  }
  v2f(position) {
    if (position < 0n || position >= this.m2()) {
      throw IndexOutOfBoundsException.id('position (' + position.toString() + ') is not within the range [0..size(' + this.m2().toString() + '))');
    }
    if (position === 0n) {
      return ensureNotNull(this.s2e_1).w2f(0);
    }
    $l$block_1: {
      // Inline function 'kotlinx.io.seek' call
      if (this.s2e_1 == null) {
        return ensureNotNull(null).w2f(convertToInt(subtract(position, -1n)));
      }
      if (subtract(this.m2(), position) < position) {
        var s = this.t2e_1;
        var offset = this.m2();
        $l$loop: while (!(s == null) && offset > position) {
          offset = subtract(offset, fromInt(s.g2f_1 - s.f2f_1 | 0));
          if (offset <= position)
            break $l$loop;
          s = s.k2f_1;
        }
        var tmp0 = s;
        var offset_0 = offset;
        return ensureNotNull(tmp0).w2f(convertToInt(subtract(position, offset_0)));
      } else {
        var s_0 = this.s2e_1;
        var offset_1 = 0n;
        $l$loop_0: while (!(s_0 == null)) {
          var tmp0_0 = offset_1;
          // Inline function 'kotlin.Long.plus' call
          var other = s_0.g2f_1 - s_0.f2f_1 | 0;
          var nextOffset = add(tmp0_0, fromInt(other));
          if (nextOffset > position)
            break $l$loop_0;
          s_0 = s_0.j2f_1;
          offset_1 = nextOffset;
        }
        var tmp0_1 = s_0;
        var offset_2 = offset_1;
        return ensureNotNull(tmp0_1).w2f(convertToInt(subtract(position, offset_2)));
      }
    }
  }
  b4() {
    return this.x2f(this.m2());
  }
  x2f(byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.w1(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var tmp0_elvis_lhs = this.s2e_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException.y2e('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp0 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.g2f_1 - head.f2f_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = fromInt(b);
      var tmp$ret$3 = tmp0 <= b_0 ? tmp0 : b_0;
      var toSkip = convertToInt(tmp$ret$3);
      this.u2e_1 = subtract(this.u2e_1, fromInt(toSkip));
      remainingByteCount = subtract(remainingByteCount, fromInt(toSkip));
      head.f2f_1 = head.f2f_1 + toSkip | 0;
      if (head.f2f_1 === head.g2f_1) {
        this.l2f();
      }
    }
  }
  y2f(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var tmp0_elvis_lhs = this.s2e_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.m2();
    var toCopy = Math.min(tmp0, b);
    s.z2f(sink, startIndex, startIndex + toCopy | 0);
    this.u2e_1 = subtract(this.u2e_1, fromInt(toCopy));
    if (isEmpty(s)) {
      this.l2f();
    }
    return toCopy;
  }
  a2g(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.w1(toString(message));
    }
    if (this.m2() === 0n)
      return -1n;
    var bytesWritten = byteCount > this.m2() ? this.m2() : byteCount;
    sink.b2g(this, bytesWritten);
    return bytesWritten;
  }
  c2g(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.w1(toString(message));
    }
    if (this.m2() < byteCount) {
      sink.b2g(this, this.m2());
      throw EOFException.y2e('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.m2().toString() + ' bytes were written.');
    }
    sink.b2g(this, byteCount);
  }
  d2g(sink) {
    var byteCount = this.m2();
    if (byteCount > 0n) {
      sink.b2g(this, byteCount);
    }
    return byteCount;
  }
  e2g() {
    return buffered(new PeekSource(this));
  }
  f2g(minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException.w1(toString(message));
    }
    if (this.t2e_1 == null) {
      var result = SegmentPool_instance.i2g();
      this.s2e_1 = result;
      this.t2e_1 = result;
      return result;
    }
    var t = ensureNotNull(this.t2e_1);
    if ((t.g2f_1 + minimumCapacity | 0) > 8192 || !t.i2f_1) {
      var newTail = t.s2f(SegmentPool_instance.i2g());
      this.t2e_1 = newTail;
      return newTail;
    }
    return t;
  }
  j2g(source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.f2g(1);
      var tmp0 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.k2g();
      var toCopy = Math.min(tmp0, b);
      tail.l2g(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp0_0 = this.u2e_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.u2e_1 = add(tmp0_0, fromInt(other));
  }
  n2g(source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.w1(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var read = source.a2g(this, remainingByteCount);
      if (read === -1n) {
        throw EOFException.y2e('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + subtract(byteCount, remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = subtract(remainingByteCount, read);
    }
  }
  b2g(source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException.w1(toString(message));
    }
    checkOffsetAndCount(source.u2e_1, 0n, byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      if (remainingByteCount < fromInt(ensureNotNull(source.s2e_1).m2())) {
        var tail = this.t2e_1;
        var tmp;
        if (!(tail == null) && tail.i2f_1) {
          var tmp0 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.g2f_1;
          var tmp0_0 = add(tmp0, fromInt(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.o2g() ? 0 : tail.f2f_1;
          tmp = subtract(tmp0_0, fromInt(other_0)) <= 8192n;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.s2e_1).q2g(tail, convertToInt(remainingByteCount));
          source.u2e_1 = subtract(source.u2e_1, remainingByteCount);
          this.u2e_1 = add(this.u2e_1, remainingByteCount);
          return Unit_instance;
        } else {
          source.s2e_1 = ensureNotNull(source.s2e_1).p2g(convertToInt(remainingByteCount));
        }
      }
      var segmentToMove = ensureNotNull(source.s2e_1);
      var movedByteCount = fromInt(segmentToMove.m2());
      source.s2e_1 = segmentToMove.r2g();
      if (source.s2e_1 == null) {
        source.t2e_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.s2e_1 == null) {
        this.s2e_1 = segmentToMove;
        this.t2e_1 = segmentToMove;
      } else if (true) {
        this.t2e_1 = ensureNotNull(this.t2e_1).s2f(segmentToMove).t2f();
        if (ensureNotNull(this.t2e_1).k2f_1 == null) {
          this.s2e_1 = this.t2e_1;
        }
      } else {
        this.t2e_1 = ensureNotNull(this.t2e_1).s2f(segmentToMove);
      }
      source.u2e_1 = subtract(source.u2e_1, movedByteCount);
      this.u2e_1 = add(this.u2e_1, movedByteCount);
      remainingByteCount = subtract(remainingByteCount, movedByteCount);
    }
  }
  s2g(source) {
    var totalBytesRead = 0n;
    $l$loop: while (true) {
      var readCount = source.a2g(this, 8192n);
      if (readCount === -1n)
        break $l$loop;
      totalBytesRead = add(totalBytesRead, readCount);
    }
    return totalBytesRead;
  }
  t2g(byte) {
    this.f2g(1).u2g(byte);
    this.u2e_1 = add(this.u2e_1, 1n);
  }
  v2g(short) {
    this.f2g(2).w2g(short);
    this.u2e_1 = add(this.u2e_1, 2n);
  }
  v5() {
    return Unit_instance;
  }
  toString() {
    if (this.m2() === 0n)
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.m2();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(maxPrintableBytes);
    var tmp$ret$0 = a <= b ? a : b;
    var len = convertToInt(tmp$ret$0);
    var builder = StringBuilder.fb(imul(len, 2) + (this.m2() > fromInt(maxPrintableBytes) ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.s2e_1;
    while (!(curr == null)) {
      var tmp0 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.m2()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp0.x2g(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$4 = b_0 >> 4;
        var tmp_0 = builder.k1(tmp[tmp$ret$4 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$5 = b_0 & 15;
        tmp_0.k1(tmp_1[tmp$ret$5]);
      }
      curr = curr.j2f_1;
    }
    if (this.m2() > fromInt(maxPrintableBytes)) {
      builder.k1(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.m2().toString() + ' hex=' + builder.toString() + ')';
  }
  l2f() {
    var oldHead = ensureNotNull(this.s2e_1);
    var nextHead = oldHead.j2f_1;
    this.s2e_1 = nextHead;
    if (nextHead == null) {
      this.t2e_1 = null;
    } else {
      nextHead.k2f_1 = null;
    }
    oldHead.j2f_1 = null;
    SegmentPool_instance.y2g(oldHead);
  }
  z2g() {
    var oldTail = ensureNotNull(this.t2e_1);
    var newTail = oldTail.k2f_1;
    this.t2e_1 = newTail;
    if (newTail == null) {
      this.s2e_1 = null;
    } else {
      newTail.j2f_1 = null;
    }
    oldTail.k2f_1 = null;
    SegmentPool_instance.y2g(oldTail);
  }
}
class PeekSource {
  constructor(upstream) {
    this.a2h_1 = upstream;
    this.b2h_1 = this.a2h_1.z2e();
    this.c2h_1 = this.b2h_1.s2e_1;
    var tmp = this;
    var tmp0_safe_receiver = this.b2h_1.s2e_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f2f_1;
    tmp.d2h_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    this.e2h_1 = false;
    this.f2h_1 = 0n;
  }
  a2g(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.e2h_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.w1(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.c2h_1 == null || (this.c2h_1 === this.b2h_1.s2e_1 && this.d2h_1 === ensureNotNull(this.b2h_1.s2e_1).f2f_1))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException.o(toString(message_1));
    }
    if (byteCount === 0n)
      return 0n;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.f2h_1;
    var tmp$ret$7 = add(this_0, fromInt(1));
    if (!this.a2h_1.c2f(tmp$ret$7))
      return -1n;
    if (this.c2h_1 == null && !(this.b2h_1.s2e_1 == null)) {
      this.c2h_1 = this.b2h_1.s2e_1;
      this.d2h_1 = ensureNotNull(this.b2h_1.s2e_1).f2f_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this.b2h_1.m2(), this.f2h_1);
    var toCopy = byteCount <= b ? byteCount : b;
    this.b2h_1.q2f(sink, this.f2h_1, add(this.f2h_1, toCopy));
    this.f2h_1 = add(this.f2h_1, toCopy);
    return toCopy;
  }
  v5() {
    this.e2h_1 = true;
  }
}
class RealSource {
  constructor(source) {
    this.g2h_1 = source;
    this.h2h_1 = false;
    this.i2h_1 = new Buffer();
  }
  z2e() {
    return this.i2h_1;
  }
  a2g(sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.h2h_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.w1(toString(message_0));
    }
    if (this.i2h_1.m2() === 0n) {
      var read = this.g2h_1.a2g(this.i2h_1, 8192n);
      if (read === -1n)
        return -1n;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.i2h_1.m2();
    var toRead = byteCount <= b ? byteCount : b;
    return this.i2h_1.a2g(sink, toRead);
  }
  a2f() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.h2h_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    return this.i2h_1.a2f() && this.g2h_1.a2g(this.i2h_1, 8192n) === -1n;
  }
  b2f(byteCount) {
    if (!this.c2f(byteCount))
      throw EOFException.y2e("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  }
  c2f(byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.h2h_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.w1(toString(message_0));
    }
    while (this.i2h_1.m2() < byteCount) {
      if (this.g2h_1.a2g(this.i2h_1, 8192n) === -1n)
        return false;
    }
    return true;
  }
  d2f() {
    this.b2f(1n);
    return this.i2h_1.d2f();
  }
  y2f(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    if (this.i2h_1.m2() === 0n) {
      var read = this.g2h_1.a2g(this.i2h_1, 8192n);
      if (read === -1n)
        return -1;
    }
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.i2h_1.m2();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(tmp0);
    var tmp$ret$1 = a <= b ? a : b;
    var toRead = convertToInt(tmp$ret$1);
    return this.i2h_1.y2f(sink, startIndex, startIndex + toRead | 0);
  }
  c2g(sink, byteCount) {
    try {
      this.b2f(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.b2g(this.i2h_1, this.i2h_1.m2());
        throw e;
      } else {
        throw $p;
      }
    }
    this.i2h_1.c2g(sink, byteCount);
  }
  d2g(sink) {
    var totalBytesWritten = 0n;
    while (!(this.g2h_1.a2g(this.i2h_1, 8192n) === -1n)) {
      var emitByteCount = this.i2h_1.u2f();
      if (emitByteCount > 0n) {
        totalBytesWritten = add(totalBytesWritten, emitByteCount);
        sink.b2g(this.i2h_1, emitByteCount);
      }
    }
    if (this.i2h_1.m2() > 0n) {
      totalBytesWritten = add(totalBytesWritten, this.i2h_1.m2());
      sink.b2g(this.i2h_1, this.i2h_1.m2());
    }
    return totalBytesWritten;
  }
  n2f() {
    this.b2f(2n);
    return this.i2h_1.n2f();
  }
  e2g() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.h2h_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    return buffered(new PeekSource(this));
  }
  v5() {
    if (this.h2h_1)
      return Unit_instance;
    this.h2h_1 = true;
    this.g2h_1.v5();
    this.i2h_1.b4();
  }
  toString() {
    return 'buffered(' + toString(this.g2h_1) + ')';
  }
}
class Companion {
  constructor() {
    this.j2h_1 = 8192;
    this.k2h_1 = 1024;
  }
  l2h() {
    return Segment.m2h();
  }
}
class Segment {
  o2g() {
    var tmp0_safe_receiver = this.h2f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2h();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  static m2h() {
    var $this = createThis(this);
    init_kotlinx_io_Segment($this);
    $this.e2f_1 = new Int8Array(8192);
    $this.i2f_1 = true;
    $this.h2f_1 = null;
    return $this;
  }
  static o2h(data, pos, limit, shareToken, owner) {
    var $this = createThis(this);
    init_kotlinx_io_Segment($this);
    $this.e2f_1 = data;
    $this.f2f_1 = pos;
    $this.g2f_1 = limit;
    $this.h2f_1 = shareToken;
    $this.i2f_1 = owner;
    return $this;
  }
  r2f() {
    var tmp0_elvis_lhs = this.h2f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.p2h();
      this.h2f_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.f2f_1;
    var tmp_1 = this.g2f_1;
    // Inline function 'kotlin.also' call
    t.q2h();
    return Segment.o2h(this.e2f_1, tmp_0, tmp_1, t, false);
  }
  r2g() {
    var result = this.j2f_1;
    if (!(this.k2f_1 == null)) {
      ensureNotNull(this.k2f_1).j2f_1 = this.j2f_1;
    }
    if (!(this.j2f_1 == null)) {
      ensureNotNull(this.j2f_1).k2f_1 = this.k2f_1;
    }
    this.j2f_1 = null;
    this.k2f_1 = null;
    return result;
  }
  s2f(segment) {
    segment.k2f_1 = this;
    segment.j2f_1 = this.j2f_1;
    if (!(this.j2f_1 == null)) {
      ensureNotNull(this.j2f_1).k2f_1 = segment;
    }
    this.j2f_1 = segment;
    return segment;
  }
  p2g(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.g2f_1 - this.f2f_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException.w1(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.r2f();
    } else {
      prefix = SegmentPool_instance.i2g();
      var tmp0 = this.e2f_1;
      var tmp2 = prefix.e2f_1;
      var tmp5 = this.f2f_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.f2f_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
    }
    prefix.g2f_1 = prefix.f2f_1 + byteCount | 0;
    this.f2f_1 = this.f2f_1 + byteCount | 0;
    if (!(this.k2f_1 == null)) {
      ensureNotNull(this.k2f_1).s2f(prefix);
    } else {
      prefix.j2f_1 = this;
      this.k2f_1 = prefix;
    }
    return prefix;
  }
  t2f() {
    // Inline function 'kotlin.check' call
    if (!!(this.k2f_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException.o(toString(message));
    }
    if (!ensureNotNull(this.k2f_1).i2f_1)
      return this;
    var byteCount = this.g2f_1 - this.f2f_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.k2f_1).g2f_1 | 0) + (ensureNotNull(this.k2f_1).o2g() ? 0 : ensureNotNull(this.k2f_1).f2f_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.k2f_1;
    this.q2g(ensureNotNull(predecessor), byteCount);
    var successor = this.r2g();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException.o('Check failed.');
    }
    SegmentPool_instance.y2g(this);
    return predecessor;
  }
  u2g(byte) {
    var _unary__edvuaz = this.g2f_1;
    this.g2f_1 = _unary__edvuaz + 1 | 0;
    this.e2f_1[_unary__edvuaz] = byte;
  }
  w2g(short) {
    var data = this.e2f_1;
    var limit = this.g2f_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.g2f_1 = limit;
  }
  m2f() {
    var _unary__edvuaz = this.f2f_1;
    this.f2f_1 = _unary__edvuaz + 1 | 0;
    return this.e2f_1[_unary__edvuaz];
  }
  o2f() {
    var data = this.e2f_1;
    var pos = this.f2f_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.f2f_1 = pos;
    return s;
  }
  q2g(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.i2f_1) {
      var message = 'only owner can write';
      throw IllegalStateException.o(toString(message));
    }
    if ((sink.g2f_1 + byteCount | 0) > 8192) {
      if (sink.o2g())
        throw IllegalArgumentException.xc();
      if (((sink.g2f_1 + byteCount | 0) - sink.f2f_1 | 0) > 8192)
        throw IllegalArgumentException.xc();
      var tmp0 = sink.e2f_1;
      var tmp2 = sink.e2f_1;
      var tmp5 = sink.f2f_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.g2f_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
      sink.g2f_1 = sink.g2f_1 - sink.f2f_1 | 0;
      sink.f2f_1 = 0;
    }
    var tmp0_0 = this.e2f_1;
    var tmp2_0 = sink.e2f_1;
    var tmp4 = sink.g2f_1;
    var tmp6 = this.f2f_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.f2f_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp2_0, tmp4, tmp6, endIndex_0);
    sink.g2f_1 = sink.g2f_1 + byteCount | 0;
    this.f2f_1 = this.f2f_1 + byteCount | 0;
  }
  z2f(dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.e2f_1;
    var tmp6 = this.f2f_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.f2f_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
    this.f2f_1 = this.f2f_1 + len | 0;
  }
  l2g(src, srcStartOffset, srcEndOffset) {
    var tmp2 = this.e2f_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.g2f_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, srcStartOffset, srcEndOffset);
    this.g2f_1 = this.g2f_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  }
  m2() {
    return this.g2f_1 - this.f2f_1 | 0;
  }
  k2g() {
    return this.e2f_1.length - this.g2f_1 | 0;
  }
  r2h(readOnly) {
    return this.e2f_1;
  }
  w2f(index) {
    return this.e2f_1[this.f2f_1 + index | 0];
  }
  s2h(index, value) {
    this.e2f_1[this.g2f_1 + index | 0] = value;
  }
  t2h(index, b0, b1) {
    var d = this.e2f_1;
    var l = this.g2f_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  }
  u2h(index, b0, b1, b2) {
    var d = this.e2f_1;
    var l = this.g2f_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  }
  v2h(index, b0, b1, b2, b3) {
    var d = this.e2f_1;
    var l = this.g2f_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  }
}
class SegmentCopyTracker {}
class AlwaysSharedCopyTracker extends SegmentCopyTracker {
  constructor() {
    AlwaysSharedCopyTracker_instance = null;
    super();
    AlwaysSharedCopyTracker_instance = this;
  }
  n2h() {
    return true;
  }
  q2h() {
    return Unit_instance;
  }
}
class UnsafeBufferOperations {}
class SegmentReadContextImpl$1 {
  x2g(segment, offset) {
    return segment.w2f(offset);
  }
}
class SegmentWriteContextImpl$1 {
  z2h(segment, offset, value) {
    segment.s2h(offset, value);
  }
  y2h(segment, offset, b0, b1) {
    segment.t2h(offset, b0, b1);
  }
  x2h(segment, offset, b0, b1, b2) {
    segment.u2h(offset, b0, b1, b2);
  }
  w2h(segment, offset, b0, b1, b2, b3) {
    segment.v2h(offset, b0, b1, b2, b3);
  }
}
class BufferIterationContextImpl$1 {
  x2g(segment, offset) {
    return get_SegmentReadContextImpl().x2g(segment, offset);
  }
}
class IOException extends Exception {
  static c2i() {
    var $this = this.ad();
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static d2i(message) {
    var $this = this.bd(message);
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static e2i(message, cause) {
    var $this = this.cd(message, cause);
    init_kotlinx_io_IOException($this);
    return $this;
  }
}
class EOFException extends IOException {
  static f2i() {
    var $this = this.c2i();
    init_kotlinx_io_EOFException($this);
    return $this;
  }
  static y2e(message) {
    var $this = this.d2i(message);
    init_kotlinx_io_EOFException($this);
    return $this;
  }
}
class SegmentPool {
  constructor() {
    this.g2g_1 = 0;
    this.h2g_1 = 0;
  }
  i2g() {
    return Companion_instance.l2h();
  }
  y2g(segment) {
  }
  p2h() {
    return AlwaysSharedCopyTracker_getInstance();
  }
}
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (startIndex < 0n || endIndex > size) {
    throw IndexOutOfBoundsException.id('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (startIndex > endIndex) {
    throw IllegalArgumentException.w1('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (offset < 0n || offset > size || subtract(size, offset) < byteCount || byteCount < 0n) {
    throw IllegalArgumentException.w1('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
}
var properties_initialized__Util_kt_67kc5b;
function _init_properties__Util_kt__g8tcl9() {
  if (!properties_initialized__Util_kt_67kc5b) {
    properties_initialized__Util_kt_67kc5b = true;
    // Inline function 'kotlin.charArrayOf' call
    HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
  }
}
function throwEof($this, byteCount) {
  throw EOFException.y2e("Buffer doesn't contain required number of bytes (size: " + $this.m2().toString() + ', required: ' + byteCount.toString() + ')');
}
function indexOf(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0n : startIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.m2() : endIndex;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = _this__u8e3s4.m2();
  var endOffset = endIndex <= b ? endIndex : b;
  checkBounds(_this__u8e3s4.m2(), startIndex, endOffset);
  if (startIndex === endOffset)
    return -1n;
  $l$block_1: {
    // Inline function 'kotlinx.io.seek' call
    if (_this__u8e3s4.s2e_1 == null) {
      if (-1n === -1n) {
        return -1n;
      }
      var segment = null;
      var offset = -1n;
      do {
        // Inline function 'kotlin.check' call
        if (!(endOffset > offset)) {
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment);
        var tmp = segment;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = convertToInt(subtract(startIndex, offset));
        var tmp_0 = Math.max(a, 0);
        var tmp0 = segment.m2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = convertToInt(subtract(endOffset, offset));
        var tmp$ret$5 = Math.min(tmp0, b_0);
        var idx = indexOf_0(tmp, byte, tmp_0, tmp$ret$5);
        if (!(idx === -1)) {
          return add(offset, fromInt(idx));
        }
        var tmp0_0 = offset;
        // Inline function 'kotlin.Long.plus' call
        var other = segment.m2();
        offset = add(tmp0_0, fromInt(other));
        segment = segment.j2f_1;
      }
       while (!(segment == null) && offset < endOffset);
      return -1n;
    }
    if (subtract(_this__u8e3s4.m2(), startIndex) < startIndex) {
      var s = _this__u8e3s4.t2e_1;
      var offset_0 = _this__u8e3s4.m2();
      $l$loop: while (!(s == null) && offset_0 > startIndex) {
        offset_0 = subtract(offset_0, fromInt(s.g2f_1 - s.f2f_1 | 0));
        if (offset_0 <= startIndex)
          break $l$loop;
        s = s.k2f_1;
      }
      var tmp0_1 = s;
      var o = offset_0;
      if (o === -1n) {
        return -1n;
      }
      var segment_0 = tmp0_1;
      var offset_1 = o;
      do {
        // Inline function 'kotlin.check' call
        if (!(endOffset > offset_1)) {
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment_0);
        var tmp_1 = segment_0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_0 = convertToInt(subtract(startIndex, offset_1));
        var tmp_2 = Math.max(a_0, 0);
        var tmp0_2 = segment_0.m2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_1 = convertToInt(subtract(endOffset, offset_1));
        var tmp$ret$10 = Math.min(tmp0_2, b_1);
        var idx_0 = indexOf_0(tmp_1, byte, tmp_2, tmp$ret$10);
        if (!(idx_0 === -1)) {
          return add(offset_1, fromInt(idx_0));
        }
        var tmp0_3 = offset_1;
        // Inline function 'kotlin.Long.plus' call
        var other_0 = segment_0.m2();
        offset_1 = add(tmp0_3, fromInt(other_0));
        segment_0 = segment_0.j2f_1;
      }
       while (!(segment_0 == null) && offset_1 < endOffset);
      return -1n;
    } else {
      var s_0 = _this__u8e3s4.s2e_1;
      var offset_2 = 0n;
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0_4 = offset_2;
        // Inline function 'kotlin.Long.plus' call
        var other_1 = s_0.g2f_1 - s_0.f2f_1 | 0;
        var nextOffset = add(tmp0_4, fromInt(other_1));
        if (nextOffset > startIndex)
          break $l$loop_0;
        s_0 = s_0.j2f_1;
        offset_2 = nextOffset;
      }
      var tmp0_5 = s_0;
      var o_0 = offset_2;
      if (o_0 === -1n) {
        return -1n;
      }
      var segment_1 = tmp0_5;
      var offset_3 = o_0;
      do {
        // Inline function 'kotlin.check' call
        if (!(endOffset > offset_3)) {
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment_1);
        var tmp_3 = segment_1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_1 = convertToInt(subtract(startIndex, offset_3));
        var tmp_4 = Math.max(a_1, 0);
        var tmp0_6 = segment_1.m2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_2 = convertToInt(subtract(endOffset, offset_3));
        var tmp$ret$16 = Math.min(tmp0_6, b_2);
        var idx_1 = indexOf_0(tmp_3, byte, tmp_4, tmp$ret$16);
        if (!(idx_1 === -1)) {
          return add(offset_3, fromInt(idx_1));
        }
        var tmp0_7 = offset_3;
        // Inline function 'kotlin.Long.plus' call
        var other_2 = segment_1.m2();
        offset_3 = add(tmp0_7, fromInt(other_2));
        segment_1 = segment_1.j2f_1;
      }
       while (!(segment_1 == null) && offset_3 < endOffset);
      return -1n;
    }
  }
}
function readByteString(_this__u8e3s4, byteCount) {
  return UnsafeByteStringOperations_instance.r2e(readByteArray_0(_this__u8e3s4, byteCount));
}
function buffered(_this__u8e3s4) {
  return new RealSource(_this__u8e3s4);
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function init_kotlinx_io_Segment(_this__u8e3s4) {
  _this__u8e3s4.f2f_1 = 0;
  _this__u8e3s4.g2f_1 = 0;
  _this__u8e3s4.h2f_1 = null;
  _this__u8e3s4.i2f_1 = false;
  _this__u8e3s4.j2f_1 = null;
  _this__u8e3s4.k2f_1 = null;
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.m2() === 0;
}
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance === VOID)
    new AlwaysSharedCopyTracker();
  return AlwaysSharedCopyTracker_instance;
}
function indexOf_0(_this__u8e3s4, byte, startOffset, endOffset) {
  // Inline function 'kotlin.require' call
  if (!(0 <= startOffset ? startOffset < _this__u8e3s4.m2() : false)) {
    var message = '' + startOffset;
    throw IllegalArgumentException.w1(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(startOffset <= endOffset ? endOffset <= _this__u8e3s4.m2() : false)) {
    var message_0 = '' + endOffset;
    throw IllegalArgumentException.w1(toString(message_0));
  }
  var p = _this__u8e3s4.f2f_1;
  var data = _this__u8e3s4.r2h(true);
  var inductionVariable = startOffset;
  if (inductionVariable < endOffset)
    do {
      var idx = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (data[p + idx | 0] === byte) {
        return idx;
      }
    }
     while (inductionVariable < endOffset);
  return -1;
}
function readByteArray(_this__u8e3s4) {
  return readByteArrayImpl(_this__u8e3s4, -1);
}
function readByteArray_0(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = fromInt(byteCount);
  // Inline function 'kotlin.require' call
  if (!(byteCount_0 >= 0n)) {
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException.w1(toString(message));
  }
  return readByteArrayImpl(_this__u8e3s4, byteCount);
}
function indexOf_1(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0n : startIndex;
  endIndex = endIndex === VOID ? 9223372036854775807n : endIndex;
  // Inline function 'kotlin.require' call
  if (!(0n <= startIndex ? startIndex <= endIndex : false)) {
    var tmp;
    if (endIndex < 0n) {
      tmp = 'startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') should be non negative';
    } else {
      tmp = 'startIndex (' + startIndex.toString() + ') is not within the range [0..endIndex(' + endIndex.toString() + '))';
    }
    var message = tmp;
    throw IllegalArgumentException.w1(toString(message));
  }
  if (startIndex === endIndex)
    return -1n;
  var offset = startIndex;
  $l$loop: while (true) {
    var tmp_0;
    if (offset < endIndex) {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = offset;
      var tmp$ret$2 = add(this_0, fromInt(1));
      tmp_0 = _this__u8e3s4.c2f(tmp$ret$2);
    } else {
      tmp_0 = false;
    }
    if (!tmp_0) {
      break $l$loop;
    }
    var tmp_1 = _this__u8e3s4.z2e();
    var tmp_2 = offset;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = _this__u8e3s4.z2e().m2();
    var tmp$ret$3 = endIndex <= b ? endIndex : b;
    var idx = indexOf(tmp_1, byte, tmp_2, tmp$ret$3);
    if (!(idx === -1n)) {
      return idx;
    }
    offset = _this__u8e3s4.z2e().m2();
  }
  return -1n;
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = 2147483647n;
    while (_this__u8e3s4.z2e().m2() < 2147483647n && _this__u8e3s4.c2f(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      var this_0 = fetchSize;
      fetchSize = multiply(this_0, fromInt(2));
    }
    // Inline function 'kotlin.check' call
    if (!(_this__u8e3s4.z2e().m2() < 2147483647n)) {
      var message = "Can't create an array of size " + _this__u8e3s4.z2e().m2().toString();
      throw IllegalStateException.o(toString(message));
    }
    arraySize = convertToInt(_this__u8e3s4.z2e().m2());
  } else {
    _this__u8e3s4.b2f(fromInt(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.z2e(), array);
  return array;
}
function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  var offset = startIndex;
  while (offset < endIndex) {
    var bytesRead = _this__u8e3s4.y2f(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException.y2e('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readString(_this__u8e3s4, byteCount) {
  _this__u8e3s4.b2f(byteCount);
  return commonReadUtf8(_this__u8e3s4.z2e(), byteCount);
}
function readString_0(_this__u8e3s4) {
  _this__u8e3s4.c2f(9223372036854775807n);
  return commonReadUtf8(_this__u8e3s4.z2e(), _this__u8e3s4.z2e().m2());
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.z2e();
  var i = startIndex;
  while (i < endIndex) {
    var p0 = i;
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.f2g(1);
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.k2g() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.z2h(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          var p0_0 = i;
          // Inline function 'kotlin.code' call
          var this_2 = charCodeAt(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.z2h(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.g2f_1 = tail.g2f_1 + bytesWritten | 0;
          var tmp = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_3 = this_0.u2e_1;
          tmp.u2e_1 = add(this_3, fromInt(bytesWritten));
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.k2g() : false)) {
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.k2g();
          throw IllegalStateException.o(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.g2f_1 = tail.g2f_1 + bytesWritten | 0;
          var tmp_0 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_4 = this_0.u2e_1;
          tmp_0.u2e_1 = add(this_4, fromInt(bytesWritten));
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.z2g();
        }
      }
    } else if (c < 2048) {
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.f2g(2);
        get_SegmentWriteContextImpl().y2h(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.g2f_1 = tail_0.g2f_1 + bytesWritten_0 | 0;
          var tmp_1 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_5 = this_0.u2e_1;
          tmp_1.u2e_1 = add(this_5, fromInt(bytesWritten_0));
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.k2g() : false)) {
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.k2g();
          throw IllegalStateException.o(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.g2f_1 = tail_0.g2f_1 + bytesWritten_0 | 0;
          var tmp_2 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_6 = this_0.u2e_1;
          tmp_2.u2e_1 = add(this_6, fromInt(bytesWritten_0));
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.z2g();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.f2g(3);
        get_SegmentWriteContextImpl().x2h(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.g2f_1 = tail_1.g2f_1 + bytesWritten_1 | 0;
          var tmp_3 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_7 = this_0.u2e_1;
          tmp_3.u2e_1 = add(this_7, fromInt(bytesWritten_1));
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.k2g() : false)) {
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.k2g();
          throw IllegalStateException.o(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.g2f_1 = tail_1.g2f_1 + bytesWritten_1 | 0;
          var tmp_4 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_8 = this_0.u2e_1;
          tmp_4.u2e_1 = add(this_8, fromInt(bytesWritten_1));
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.z2g();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp_5;
      if ((i + 1 | 0) < endIndex) {
        var p0_1 = i + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_9 = charCodeAt(string, p0_1);
        tmp_5 = Char__toInt_impl_vasixd(this_9);
      } else {
        tmp_5 = 0;
      }
      var low = tmp_5;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        // Inline function 'kotlin.code' call
        var this_10 = _Char___init__impl__6a9atx(63);
        var tmp$ret$29 = Char__toInt_impl_vasixd(this_10);
        this_0.t2g(toByte(tmp$ret$29));
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.f2g(4);
          get_SegmentWriteContextImpl().w2h(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.g2f_1 = tail_2.g2f_1 + bytesWritten_2 | 0;
            var tmp_6 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_11 = this_0.u2e_1;
            tmp_6.u2e_1 = add(this_11, fromInt(bytesWritten_2));
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.k2g() : false)) {
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.k2g();
            throw IllegalStateException.o(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.g2f_1 = tail_2.g2f_1 + bytesWritten_2 | 0;
            var tmp_7 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_12 = this_0.u2e_1;
            tmp_7.u2e_1 = add(this_12, fromInt(bytesWritten_2));
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.z2g();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.p2f();
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (byteCount === 0n)
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = _this__u8e3s4.s2e_1;
  while (!(curr == null)) {
    get_SegmentReadContextImpl();
    if (fromInt(curr.m2()) >= byteCount) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      var tmp0 = curr.r2h(true);
      var tmp2 = curr.f2f_1;
      var tmp0_0 = curr.g2f_1;
      // Inline function 'kotlin.math.min' call
      var b = tmp2 + convertToInt(byteCount) | 0;
      var tmp$ret$4 = Math.min(tmp0_0, b);
      result = commonToUtf8String(tmp0, tmp2, tmp$ret$4);
      _this__u8e3s4.x2f(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray_0(_this__u8e3s4, convertToInt(byteCount)));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException.o(toString(message));
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException.id('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
  }
  var chars = charArray(endIndex - beginIndex | 0);
  var length = 0;
  // Inline function 'kotlinx.io.internal.processUtf16Chars' call
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      var c = numberToChar(b0);
      var _unary__edvuaz = length;
      length = _unary__edvuaz + 1 | 0;
      chars[_unary__edvuaz] = c;
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        var _unary__edvuaz_0 = index;
        index = _unary__edvuaz_0 + 1 | 0;
        var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
        var _unary__edvuaz_1 = length;
        length = _unary__edvuaz_1 + 1 | 0;
        chars[_unary__edvuaz_1] = c_0;
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp2 = index;
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          if (endIndex <= (tmp2 + 1 | 0)) {
            var c_1 = numberToChar(65533);
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = c_1;
            tmp$ret$4 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[tmp2];
          var b1 = _this__u8e3s4[tmp2 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            var c_2 = numberToChar(65533);
            var _unary__edvuaz_3 = length;
            length = _unary__edvuaz_3 + 1 | 0;
            chars[_unary__edvuaz_3] = c_2;
            tmp$ret$4 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            var c_3 = numberToChar(65533);
            var _unary__edvuaz_4 = length;
            length = _unary__edvuaz_4 + 1 | 0;
            chars[_unary__edvuaz_4] = c_3;
          } else {
            var c_4 = numberToChar(codePoint);
            var _unary__edvuaz_5 = length;
            length = _unary__edvuaz_5 + 1 | 0;
            chars[_unary__edvuaz_5] = c_4;
          }
          tmp$ret$4 = 2;
        }
        index = tmp + tmp$ret$4 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp2_0 = index;
          var tmp$ret$16;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            if (endIndex <= (tmp2_0 + 2 | 0)) {
              var c_5 = numberToChar(65533);
              var _unary__edvuaz_6 = length;
              length = _unary__edvuaz_6 + 1 | 0;
              chars[_unary__edvuaz_6] = c_5;
              var tmp_1;
              if (endIndex <= (tmp2_0 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$16 = 1;
                break $l$block_4;
              } else {
                tmp$ret$16 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[tmp2_0];
            var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              var c_6 = numberToChar(65533);
              var _unary__edvuaz_7 = length;
              length = _unary__edvuaz_7 + 1 | 0;
              chars[_unary__edvuaz_7] = c_6;
              tmp$ret$16 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              var c_7 = numberToChar(65533);
              var _unary__edvuaz_8 = length;
              length = _unary__edvuaz_8 + 1 | 0;
              chars[_unary__edvuaz_8] = c_7;
              tmp$ret$16 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              var c_8 = numberToChar(65533);
              var _unary__edvuaz_9 = length;
              length = _unary__edvuaz_9 + 1 | 0;
              chars[_unary__edvuaz_9] = c_8;
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              var c_9 = numberToChar(65533);
              var _unary__edvuaz_10 = length;
              length = _unary__edvuaz_10 + 1 | 0;
              chars[_unary__edvuaz_10] = c_9;
            } else {
              var c_10 = numberToChar(codePoint_0);
              var _unary__edvuaz_11 = length;
              length = _unary__edvuaz_11 + 1 | 0;
              chars[_unary__edvuaz_11] = c_10;
            }
            tmp$ret$16 = 3;
          }
          index = tmp_0 + tmp$ret$16 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp2_1 = index;
            var tmp$ret$36;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              if (endIndex <= (tmp2_1 + 3 | 0)) {
                if (!(65533 === 65533)) {
                  var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_12 = length;
                  length = _unary__edvuaz_12 + 1 | 0;
                  chars[_unary__edvuaz_12] = c_11;
                  var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_13 = length;
                  length = _unary__edvuaz_13 + 1 | 0;
                  chars[_unary__edvuaz_13] = c_12;
                } else {
                  var c_13 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_14 = length;
                  length = _unary__edvuaz_14 + 1 | 0;
                  chars[_unary__edvuaz_14] = c_13;
                }
                var tmp_3;
                if (endIndex <= (tmp2_1 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$36 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (tmp2_1 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$36 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$36 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[tmp2_1];
              var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_15 = length;
                  length = _unary__edvuaz_15 + 1 | 0;
                  chars[_unary__edvuaz_15] = c_14;
                  var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_16 = length;
                  length = _unary__edvuaz_16 + 1 | 0;
                  chars[_unary__edvuaz_16] = c_15;
                } else {
                  var c_16 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_17 = length;
                  length = _unary__edvuaz_17 + 1 | 0;
                  chars[_unary__edvuaz_17] = c_16;
                }
                tmp$ret$36 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_18 = length;
                  length = _unary__edvuaz_18 + 1 | 0;
                  chars[_unary__edvuaz_18] = c_17;
                  var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_19 = length;
                  length = _unary__edvuaz_19 + 1 | 0;
                  chars[_unary__edvuaz_19] = c_18;
                } else {
                  var c_19 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_20 = length;
                  length = _unary__edvuaz_20 + 1 | 0;
                  chars[_unary__edvuaz_20] = c_19;
                }
                tmp$ret$36 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_21 = length;
                  length = _unary__edvuaz_21 + 1 | 0;
                  chars[_unary__edvuaz_21] = c_20;
                  var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_22 = length;
                  length = _unary__edvuaz_22 + 1 | 0;
                  chars[_unary__edvuaz_22] = c_21;
                } else {
                  var c_22 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_23 = length;
                  length = _unary__edvuaz_23 + 1 | 0;
                  chars[_unary__edvuaz_23] = c_22;
                }
                tmp$ret$36 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                if (!(65533 === 65533)) {
                  var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_24 = length;
                  length = _unary__edvuaz_24 + 1 | 0;
                  chars[_unary__edvuaz_24] = c_23;
                  var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_25 = length;
                  length = _unary__edvuaz_25 + 1 | 0;
                  chars[_unary__edvuaz_25] = c_24;
                } else {
                  var c_25 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_26 = length;
                  length = _unary__edvuaz_26 + 1 | 0;
                  chars[_unary__edvuaz_26] = c_25;
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                if (!(65533 === 65533)) {
                  var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_27 = length;
                  length = _unary__edvuaz_27 + 1 | 0;
                  chars[_unary__edvuaz_27] = c_26;
                  var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_28 = length;
                  length = _unary__edvuaz_28 + 1 | 0;
                  chars[_unary__edvuaz_28] = c_27;
                } else {
                  var c_28 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_29 = length;
                  length = _unary__edvuaz_29 + 1 | 0;
                  chars[_unary__edvuaz_29] = c_28;
                }
              } else if (codePoint_1 < 65536) {
                if (!(65533 === 65533)) {
                  var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_30 = length;
                  length = _unary__edvuaz_30 + 1 | 0;
                  chars[_unary__edvuaz_30] = c_29;
                  var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_31 = length;
                  length = _unary__edvuaz_31 + 1 | 0;
                  chars[_unary__edvuaz_31] = c_30;
                } else {
                  var c_31 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_32 = length;
                  length = _unary__edvuaz_32 + 1 | 0;
                  chars[_unary__edvuaz_32] = c_31;
                }
              } else {
                if (!(codePoint_1 === 65533)) {
                  var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_33 = length;
                  length = _unary__edvuaz_33 + 1 | 0;
                  chars[_unary__edvuaz_33] = c_32;
                  var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                  var _unary__edvuaz_34 = length;
                  length = _unary__edvuaz_34 + 1 | 0;
                  chars[_unary__edvuaz_34] = c_33;
                } else {
                  var c_34 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_35 = length;
                  length = _unary__edvuaz_35 + 1 | 0;
                  chars[_unary__edvuaz_35] = c_34;
                }
              }
              tmp$ret$36 = 4;
            }
            index = tmp_2 + tmp$ret$36 | 0;
          } else {
            var c_35 = _Char___init__impl__6a9atx(65533);
            var _unary__edvuaz_36 = length;
            length = _unary__edvuaz_36 + 1 | 0;
            chars[_unary__edvuaz_36] = c_35;
            index = index + 1 | 0;
          }
        }
      }
    }
  }
  return concatToString(chars, 0, length);
}
function get_SegmentReadContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentReadContextImpl;
}
var SegmentReadContextImpl;
function get_SegmentWriteContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentWriteContextImpl;
}
var SegmentWriteContextImpl;
var BufferIterationContextImpl;
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  return UnsafeBufferOperations_instance;
}
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = new SegmentReadContextImpl$1();
    SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
    BufferIterationContextImpl = new BufferIterationContextImpl$1();
  }
}
function init_kotlinx_io_IOException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.b2i_1);
}
function init_kotlinx_io_EOFException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.x2e_1);
}
var SegmentPool_instance;
function SegmentPool_getInstance() {
  return SegmentPool_instance;
}
//region block: post-declaration
initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
protoOf(Buffer).m2g = write$default;
initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker');
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForClass(SegmentReadContextImpl$1);
initMetadataForClass(SegmentWriteContextImpl$1);
initMetadataForClass(BufferIterationContextImpl$1);
initMetadataForClass(IOException, 'IOException', IOException.c2i);
initMetadataForClass(EOFException, 'EOFException', EOFException.f2i);
initMetadataForObject(SegmentPool, 'SegmentPool');
//endregion
//region block: init
Companion_instance = new Companion();
UnsafeBufferOperations_instance = new UnsafeBufferOperations();
SegmentPool_instance = new SegmentPool();
//endregion
//region block: exports
export {
  Buffer as Buffergs925ekssbch,
  EOFException as EOFExceptionh831u25jcq9n,
  IOException as IOException1wyutdmfe71nu,
  Source as Source1shr0ps16u4p4,
  indexOf_1 as indexOf29nspdgx2e3ap,
  readByteArray_0 as readByteArray1fhzfwi2j014k,
  readByteArray as readByteArray1ri21h2rciakw,
  readByteString as readByteString2hnsbql6t4ads,
  readString_0 as readString2nvggcfaijfhd,
  readString as readString3v6duspiz33tv,
  writeString as writeString33ca4btrgctw7,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.mjs.map
