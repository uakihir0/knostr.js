import { NostrFactory_instance2shyk50chs77i as NostrFactory_instance } from './knostr-core.mjs';
import { NostrSocialFactory_instancexumjg5ed2gxr as NostrSocialFactory_instance } from './knostr-social.mjs';
import {
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  defineProp3ur6h3slcvq4x as defineProp,
  VOID3gxj6tk5isa35 as VOID,
} from './kotlin-kotlin-stdlib.mjs';
import './ktor-ktor-client-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  getNostrFactory() {
    return NostrFactory_instance;
  }
  getNostrSocialFactory() {
    return NostrSocialFactory_instance;
  }
}
class KnostrFactory {
  nostr(config) {
    return NostrFactory_instance.instanceFromConfig(config);
  }
  social(nostr) {
    return NostrSocialFactory_instance.instance(nostr);
  }
}
//endregion
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(KnostrFactory, 'KnostrFactory', KnostrFactory);
//endregion
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
defineProp(KnostrFactory, 'Companion', Companion_getInstance, VOID, true);
export {
  KnostrFactory as KnostrFactory,
};
//endregion

//# sourceMappingURL=knostr-all.mjs.map
