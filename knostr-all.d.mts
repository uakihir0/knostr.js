type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare interface KtList<out E> /* extends Collection<E> */ {
    asJsReadonlyArrayView(): ReadonlyArray<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtList": unique symbol;
    };
}
export declare namespace KtList {
    function fromJsArray<E>(array: ReadonlyArray<E>): KtList<E>;
}
export declare class Pair<out A, out B> /* implements Serializable */ {
    constructor(first: A, second: B);
    get first(): A;
    get second(): B;
    toString(): string;
    copy(first?: A, second?: B): Pair<A, B>;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace Pair {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new <A, B>() => Pair<A, B>;
    }
}
/** @deprecated  */
export declare const initHook: {
    get(): any;
};
export declare interface Nostr {
    events(): EventResource;
    relays(): RelayResource;
    nip(): NipResource;
    signer(): Nullable<any>/* Nullable<NostrSigner> */;
    config(): NostrConfig;
    relayPool(): any/* RelayPool */;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.Nostr": unique symbol;
    };
}
export declare class NostrConfig {
    constructor();
    get relayUrls(): KtList<string>;
    set relayUrls(value: KtList<string>);
    get signer(): Nullable<any>/* Nullable<NostrSigner> */;
    set signer(value: Nullable<any>/* Nullable<NostrSigner> */);
    get connectTimeoutMs(): bigint;
    set connectTimeoutMs(value: bigint);
    get queryTimeoutMs(): bigint;
    set queryTimeoutMs(value: bigint);
    get autoReconnect(): boolean;
    set autoReconnect(value: boolean);
    get maxReconnectAttempts(): number;
    set maxReconnectAttempts(value: number);
    get reconnectDelayMs(): bigint;
    set reconnectDelayMs(value: bigint);
    get autoAuth(): boolean;
    set autoAuth(value: boolean);
}
export declare namespace NostrConfig {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrConfig;
    }
}
export declare abstract class NostrFactory {
    static readonly getInstance: () => typeof NostrFactory.$metadata$.type;
    private constructor();
}
export declare namespace NostrFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            instanceFromConfig(config: NostrConfig): Nostr;
            private constructor();
        }
    }
}
export declare abstract class EventKind {
    static readonly getInstance: () => typeof EventKind.$metadata$.type;
    private constructor();
}
export declare namespace EventKind {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            get METADATA(): number;
            get TEXT_NOTE(): number;
            get RECOMMEND_RELAY(): number;
            get FOLLOW_LIST(): number;
            get ENCRYPTED_DM(): number;
            get EVENT_DELETION(): number;
            get REPOST(): number;
            get REACTION(): number;
            get GENERIC_REPOST(): number;
            get SEAL(): number;
            get CHAT_MESSAGE(): number;
            get FILE_MESSAGE(): number;
            get CHANNEL_CREATE(): number;
            get CHANNEL_METADATA(): number;
            get CHANNEL_MESSAGE(): number;
            get GIFT_WRAP(): number;
            get ZAP_REQUEST(): number;
            get ZAP_RECEIPT(): number;
            get FILE_METADATA(): number;
            get MUTE_LIST(): number;
            get PIN_LIST(): number;
            get AUTH(): number;
            get RELAY_LIST(): number;
            get DM_RELAY_LIST(): number;
            get BOOKMARK_LIST(): number;
            get BADGE_AWARD(): number;
            get INTEREST_LIST(): number;
            get PUBLIC_CHATS_LIST(): number;
            get POLL(): number;
            get POLL_RESPONSE(): number;
            get LONG_FORM(): number;
            get PEOPLE_LIST(): number;
            get BADGE_DEFINITION(): number;
            get PROFILE_BADGES(): number;
            get NWC_REQUEST(): number;
            get NWC_RESPONSE(): number;
            get NIP46_REQUEST(): number;
            get NIP46_RESPONSE(): number;
            get APP_SPECIFIC_DATA(): number;
            get USER_STATUS(): number;
            private constructor();
        }
    }
}
export declare interface EventResource {
    publishEvent(event: NostrEvent): Promise<Response<boolean>>;
    queryEvents(filters: KtList<NostrFilter>): Promise<Response<KtList<NostrEvent>>>;
    deleteEvent(eventId: string, reason?: string): Promise<Response<boolean>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.api.EventResource": unique symbol;
    };
}
export declare interface NipResource {
    resolveNip05(address: string): Promise<Response<any/* Nip05Result */>>;
    encodeNpub(pubkey: string): string;
    encodeNsec(seckey: string): string;
    encodeNote(eventId: string): string;
    encodeNprofile(pubkey: string, relays?: KtList<string>): string;
    encodeNevent(eventId: string, relays?: KtList<string>, author?: Nullable<string>): string;
    encodeNaddr(identifier: string, pubkey: string, kind: number, relays?: KtList<string>): string;
    decodeNip19(encoded: string): Nip19Entity;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.api.NipResource": unique symbol;
    };
}
export declare interface RelayResource {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    getConnectedRelays(): KtList<string>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.api.RelayResource": unique symbol;
    };
}
export declare class Response<T> {
    constructor(data: T);
    get data(): T;
    set data(value: T);
    get json(): Nullable<string>;
    set json(value: Nullable<string>);
}
export declare namespace Response {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new <T>() => Response<T>;
    }
}
export declare class ResponseUnit {
    constructor();
    get json(): Nullable<string>;
    set json(value: Nullable<string>);
}
export declare namespace ResponseUnit {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ResponseUnit;
    }
}
export declare abstract class Nip19Entity {
    private constructor();
}
export declare namespace Nip19Entity {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => Nip19Entity;
    }
    class NPub extends Nip19Entity.$metadata$.constructor {
        constructor(pubkey: string);
        get pubkey(): string;
        copy(pubkey?: string): Nip19Entity.NPub;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace NPub {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NPub;
        }
    }
    class NSec extends Nip19Entity.$metadata$.constructor {
        constructor(seckey: string);
        get seckey(): string;
        copy(seckey?: string): Nip19Entity.NSec;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace NSec {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NSec;
        }
    }
    class Note extends Nip19Entity.$metadata$.constructor {
        constructor(eventId: string);
        get eventId(): string;
        copy(eventId?: string): Nip19Entity.Note;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Note {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Note;
        }
    }
    class NProfile extends Nip19Entity.$metadata$.constructor {
        constructor(pubkey: string, relays?: KtList<string>);
        get pubkey(): string;
        get relays(): KtList<string>;
        copy(pubkey?: string, relays?: KtList<string>): Nip19Entity.NProfile;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace NProfile {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NProfile;
        }
    }
    class NEvent extends Nip19Entity.$metadata$.constructor {
        constructor(eventId: string, relays?: KtList<string>, author?: Nullable<string>);
        get eventId(): string;
        get relays(): KtList<string>;
        get author(): Nullable<string>;
        copy(eventId?: string, relays?: KtList<string>, author?: Nullable<string>): Nip19Entity.NEvent;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace NEvent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NEvent;
        }
    }
    class NAddr extends Nip19Entity.$metadata$.constructor {
        constructor(identifier: string, pubkey: string, kind: number, relays?: KtList<string>);
        get identifier(): string;
        get pubkey(): string;
        get kind(): number;
        get relays(): KtList<string>;
        copy(identifier?: string, pubkey?: string, kind?: number, relays?: KtList<string>): Nip19Entity.NAddr;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace NAddr {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NAddr;
        }
    }
}
export declare class NostrEvent {
    constructor(id: string, pubkey: string, createdAt: bigint, kind: number, tags: KtList<KtList<string>> | undefined, content: string, sig: string);
    get id(): string;
    get pubkey(): string;
    get createdAt(): bigint;
    get kind(): number;
    get tags(): KtList<KtList<string>>;
    get content(): string;
    get sig(): string;
    copy(id?: string, pubkey?: string, createdAt?: bigint, kind?: number, tags?: KtList<KtList<string>>, content?: string, sig?: string): NostrEvent;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NostrEvent {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrEvent;
    }
}
export declare class NostrFilter {
    constructor(ids?: Nullable<KtList<string>>, authors?: Nullable<KtList<string>>, kinds?: Nullable<KtList<number>>, since?: Nullable<bigint>, until?: Nullable<bigint>, eTags?: Nullable<KtList<string>>, pTags?: Nullable<KtList<string>>, tTags?: Nullable<KtList<string>>, dTags?: Nullable<KtList<string>>, aTags?: Nullable<KtList<string>>, limit?: Nullable<number>, search?: Nullable<string>);
    get ids(): Nullable<KtList<string>>;
    get authors(): Nullable<KtList<string>>;
    get kinds(): Nullable<KtList<number>>;
    get since(): Nullable<bigint>;
    get until(): Nullable<bigint>;
    get eTags(): Nullable<KtList<string>>;
    get pTags(): Nullable<KtList<string>>;
    get tTags(): Nullable<KtList<string>>;
    get dTags(): Nullable<KtList<string>>;
    get aTags(): Nullable<KtList<string>>;
    get limit(): Nullable<number>;
    get search(): Nullable<string>;
    copy(ids?: Nullable<KtList<string>>, authors?: Nullable<KtList<string>>, kinds?: Nullable<KtList<number>>, since?: Nullable<bigint>, until?: Nullable<bigint>, eTags?: Nullable<KtList<string>>, pTags?: Nullable<KtList<string>>, tTags?: Nullable<KtList<string>>, dTags?: Nullable<KtList<string>>, aTags?: Nullable<KtList<string>>, limit?: Nullable<number>, search?: Nullable<string>): NostrFilter;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NostrFilter {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrFilter;
    }
}
export declare class NostrProfile {
    constructor(name?: Nullable<string>, about?: Nullable<string>, picture?: Nullable<string>, banner?: Nullable<string>, nip05?: Nullable<string>, displayName?: Nullable<string>, website?: Nullable<string>, lud16?: Nullable<string>);
    get name(): Nullable<string>;
    get about(): Nullable<string>;
    get picture(): Nullable<string>;
    get banner(): Nullable<string>;
    get nip05(): Nullable<string>;
    get displayName(): Nullable<string>;
    get website(): Nullable<string>;
    get lud16(): Nullable<string>;
    copy(name?: Nullable<string>, about?: Nullable<string>, picture?: Nullable<string>, banner?: Nullable<string>, nip05?: Nullable<string>, displayName?: Nullable<string>, website?: Nullable<string>, lud16?: Nullable<string>): NostrProfile;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NostrProfile {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrProfile;
    }
}
export declare class UnsignedEvent {
    constructor(pubkey: string, createdAt: bigint, kind: number, tags: KtList<KtList<string>> | undefined, content: string);
    get pubkey(): string;
    get createdAt(): bigint;
    get kind(): number;
    get tags(): KtList<KtList<string>>;
    get content(): string;
    copy(pubkey?: string, createdAt?: bigint, kind?: number, tags?: KtList<KtList<string>>, content?: string): UnsignedEvent;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace UnsignedEvent {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UnsignedEvent;
    }
}
export declare interface NostrSocial {
    feed(): FeedResource;
    users(): UserResource;
    reactions(): ReactionResource;
    search(): SearchResource;
    media(): MediaResource;
    zaps(): ZapResource;
    mutes(): MuteResource;
    messages(): MessageResource;
    relayList(): RelayListResource;
    bookmarks(): BookmarkResource;
    pins(): PinResource;
    interests(): InterestResource;
    polls(): PollResource;
    articles(): ArticleResource;
    lists(): ListResource;
    channels(): ChannelResource;
    badges(): BadgeResource;
    wallet(): WalletResource;
    appData(): AppDataResource;
    nostr(): Nostr;
    profileCache(): any/* ProfileCache */;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.NostrSocial": unique symbol;
    };
}
export declare class NostrSocialConfig {
    constructor();
    get cacheFollowList(): boolean;
    set cacheFollowList(value: boolean);
    get followListCacheTtlMs(): bigint;
    set followListCacheTtlMs(value: bigint);
    get cacheUserProfile(): boolean;
    set cacheUserProfile(value: boolean);
    get userProfileCacheTtlMs(): bigint;
    set userProfileCacheTtlMs(value: bigint);
}
export declare namespace NostrSocialConfig {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrSocialConfig;
    }
}
export declare abstract class NostrSocialFactory {
    static readonly getInstance: () => typeof NostrSocialFactory.$metadata$.type;
    private constructor();
}
export declare namespace NostrSocialFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            instance(nostr: Nostr, config?: NostrSocialConfig): NostrSocial;
            private constructor();
        }
    }
}
export declare interface AppDataResource {
    setAppData(dTag: string, content: string): Promise<Response<NostrEvent>>;
    getAppData(dTag: string): Promise<Response<Nullable<string>>>;
    getAppDataByPubkey(pubkey: string, dTag: string): Promise<Response<Nullable<string>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.AppDataResource": unique symbol;
    };
}
export declare interface ArticleResource {
    publishArticle(identifier: string, title: string, content: string, summary?: string, image?: Nullable<string>, hashtags?: KtList<string>, publishedAt?: Nullable<bigint>, expiry?: Nullable<bigint>, sensitive?: boolean): Promise<Response<NostrEvent>>;
    getArticle(pubkey: string, identifier: string): Promise<Response<NostrArticle>>;
    getUserArticles(pubkey: string, since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number): Promise<Response<KtList<NostrArticle>>>;
    deleteArticle(identifier: string, reason?: string): Promise<Response<boolean>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.ArticleResource": unique symbol;
    };
}
export declare interface BadgeResource {
    defineBadge(dTag: string, name: string, description?: string, image?: string, thumbImage?: string): Promise<Response<NostrEvent>>;
    awardBadge(badgeDTag: string, recipientPubkeys: KtList<string>): Promise<Response<NostrEvent>>;
    setProfileBadges(badgeRefs: KtList<Pair<string, string>>): Promise<Response<NostrEvent>>;
    getBadgeDefinition(pubkey: string, dTag: string): Promise<Response<NostrBadge>>;
    getProfileBadges(pubkey: string): Promise<Response<KtList<NostrBadge>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.BadgeResource": unique symbol;
    };
}
export declare interface BookmarkResource {
    bookmark(eventId: string): Promise<Response<NostrEvent>>;
    unbookmark(eventId: string): Promise<Response<NostrEvent>>;
    getBookmarks(): Promise<Response<KtList<string>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.BookmarkResource": unique symbol;
    };
}
export declare interface ChannelResource {
    createChannel(name: string, about?: string, picture?: string): Promise<Response<NostrEvent>>;
    updateChannel(channelId: string, name?: Nullable<string>, about?: Nullable<string>, picture?: Nullable<string>): Promise<Response<NostrEvent>>;
    sendMessage(channelId: string, content: string): Promise<Response<NostrEvent>>;
    getChannelMessages(channelId: string, since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number): Promise<Response<KtList<NostrChannelMessage>>>;
    getChannel(channelId: string): Promise<Response<NostrChannel>>;
    getChannels(limit?: number): Promise<Response<KtList<NostrChannel>>>;
    getJoinedChannels(): Promise<Response<KtList<string>>>;
    joinChannel(channelId: string): Promise<Response<NostrEvent>>;
    leaveChannel(channelId: string): Promise<Response<NostrEvent>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.ChannelResource": unique symbol;
    };
}
export declare interface FeedResource {
    getHomeFeed(since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number, excludeSensitive?: boolean): Promise<Response<KtList<NostrNote>>>;
    getNote(eventId: string): Promise<Response<NostrNote>>;
    getUserFeed(pubkey: string, since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number, excludeSensitive?: boolean): Promise<Response<KtList<NostrNote>>>;
    getMentions(since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number, excludeSensitive?: boolean): Promise<Response<KtList<NostrNote>>>;
    getThread(eventId: string): Promise<Response<NostrThread>>;
    post(content: string, tags?: KtList<KtList<string>>, contentWarning?: Nullable<string>, expiry?: Nullable<bigint>, sensitive?: boolean): Promise<Response<NostrEvent>>;
    reply(content: string, replyToEventId: string, rootEventId?: Nullable<string>, contentWarning?: Nullable<string>, expiry?: Nullable<bigint>, sensitive?: boolean): Promise<Response<NostrEvent>>;
    repost(eventId: string): Promise<Response<NostrEvent>>;
    quoteRepost(eventId: string, comment: string, contentWarning?: Nullable<string>, expiry?: Nullable<bigint>, sensitive?: boolean): Promise<Response<NostrEvent>>;
    delete(eventId: string, reason?: string): Promise<Response<boolean>>;
    getUserLikesFeed(pubkey: string, since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number, excludeSensitive?: boolean): Promise<Response<KtList<NostrNote>>>;
    getUserMediaFeed(pubkey: string, since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number, excludeSensitive?: boolean): Promise<Response<KtList<NostrNote>>>;
    getNoteByNpub(noteId: string): Promise<Response<NostrNote>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.FeedResource": unique symbol;
    };
}
export declare interface InterestResource {
    followHashtag(hashtag: string): Promise<Response<NostrEvent>>;
    unfollowHashtag(hashtag: string): Promise<Response<NostrEvent>>;
    getFollowedHashtags(): Promise<Response<KtList<string>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.InterestResource": unique symbol;
    };
}
export declare interface ListResource {
    createList(name: string, pubkeys?: KtList<string>): Promise<Response<NostrEvent>>;
    addToList(name: string, pubkey: string): Promise<Response<NostrEvent>>;
    removeFromList(name: string, pubkey: string): Promise<Response<NostrEvent>>;
    getList(name: string): Promise<Response<NostrList>>;
    getLists(): Promise<Response<KtList<NostrList>>>;
    getListsByPubkey(pubkey: string): Promise<Response<KtList<NostrList>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.ListResource": unique symbol;
    };
}
export declare class LnurlPayInfo {
    constructor(callback?: string, minSendable?: bigint, maxSendable?: bigint, allowsNostr?: boolean, nostrPubkey?: Nullable<string>);
    get callback(): string;
    get minSendable(): bigint;
    get maxSendable(): bigint;
    get allowsNostr(): boolean;
    get nostrPubkey(): Nullable<string>;
    copy(callback?: string, minSendable?: bigint, maxSendable?: bigint, allowsNostr?: boolean, nostrPubkey?: Nullable<string>): LnurlPayInfo;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LnurlPayInfo {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LnurlPayInfo;
    }
}
export declare interface MediaResource {
    upload(serverUrl: string, fileData: Int8Array, fileName: string, mimeType: string, description?: string): Promise<Response<NostrMedia>>;
    getServerInfo(serverUrl: string): Promise<Response<string>>;
    publishFileMetadata(url: string, mimeType: string, sha256?: Nullable<string>, sizeBytes?: Nullable<bigint>, dimensions?: Nullable<string>, blurhash?: Nullable<string>, thumbnailUrl?: Nullable<string>, description?: Nullable<string>): Promise<Response<NostrEvent>>;
    getFileMetadata(url: string): Promise<Response<Nullable<NostrFileMetadata>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.MediaResource": unique symbol;
    };
}
export declare interface MessageResource {
    sendMessage(recipientPubkey: string, content: string): Promise<Response<NostrEvent>>;
    getMessages(since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number): Promise<Response<KtList<NostrDirectMessage>>>;
    getConversation(pubkey: string, since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number): Promise<Response<KtList<NostrDirectMessage>>>;
    sendLegacyMessage(recipientPubkey: string, content: string): Promise<Response<NostrEvent>>;
    getLegacyMessages(since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number): Promise<Response<KtList<NostrDirectMessage>>>;
    getThreads(since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number): Promise<Response<KtList<NostrThread>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.MessageResource": unique symbol;
    };
}
export declare interface MuteResource {
    mute(pubkey: string): Promise<Response<NostrEvent>>;
    unmute(pubkey: string): Promise<Response<NostrEvent>>;
    getMuteList(): Promise<Response<KtList<string>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.MuteResource": unique symbol;
    };
}
export declare interface PinResource {
    pin(eventId: string): Promise<Response<NostrEvent>>;
    unpin(eventId: string): Promise<Response<NostrEvent>>;
    getPinList(): Promise<Response<KtList<string>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.PinResource": unique symbol;
    };
}
export declare interface PollResource {
    createPoll(content: string, options: KtList<string>, closedAt?: Nullable<bigint>): Promise<Response<NostrEvent>>;
    vote(pollEventId: string, optionIndexes: KtList<number>): Promise<Response<NostrEvent>>;
    getPoll(pollEventId: string): Promise<Response<NostrPoll>>;
    getPollVotes(pollEventId: string): Promise<Response<any/* KtMap<number, number> */>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.PollResource": unique symbol;
    };
}
export declare interface ReactionResource {
    like(eventId: string, authorPubkey: string): Promise<Response<NostrEvent>>;
    react(eventId: string, authorPubkey: string, content: string): Promise<Response<NostrEvent>>;
    getReactions(eventId: string): Promise<Response<KtList<NostrReaction>>>;
    unlike(eventId: string): Promise<Response<boolean>>;
    unreact(eventId: string, content?: Nullable<string>): Promise<Response<boolean>>;
    reactWithEmoji(eventId: string, authorPubkey: string, shortcode: string, emojiUrl: string): Promise<Response<NostrEvent>>;
    getUserReactions(pubkey: string, since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number): Promise<Response<KtList<NostrReaction>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.ReactionResource": unique symbol;
    };
}
export declare interface RelayListResource {
    getRelayList(): Promise<Response<KtList<NostrRelayListEntry>>>;
    getRelayListByPubkey(pubkey: string): Promise<Response<KtList<NostrRelayListEntry>>>;
    setRelayList(relays: KtList<NostrRelayListEntry>): Promise<Response<NostrEvent>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.RelayListResource": unique symbol;
    };
}
export declare interface SearchResource {
    searchNotes(query: string, limit?: number): Promise<Response<KtList<NostrNote>>>;
    searchUsers(query: string, limit?: number): Promise<Response<KtList<NostrUser>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.SearchResource": unique symbol;
    };
}
export declare interface UserResource {
    getProfile(pubkey: string): Promise<Response<NostrUser>>;
    updateProfile(profile: NostrProfile): Promise<Response<NostrEvent>>;
    follow(pubkey: string): Promise<Response<NostrEvent>>;
    unfollow(pubkey: string): Promise<Response<NostrEvent>>;
    getFollowing(pubkey: string): Promise<Response<KtList<string>>>;
    getFollowers(pubkey: string, limit?: number): Promise<Response<KtList<string>>>;
    getProfiles(pubkeys: KtList<string>): Promise<Response<KtList<NostrUser>>>;
    verifyNip05(address: string): Promise<Response<boolean>>;
    setStatus(content: string, type?: string, url?: Nullable<string>, expiration?: Nullable<bigint>): Promise<Response<NostrEvent>>;
    getStatus(pubkey: string, type?: string): Promise<Response<Nullable<NostrUserStatus>>>;
    clearStatus(type?: string): Promise<Response<NostrEvent>>;
    getProfileByNpub(npub: string): Promise<Response<NostrUser>>;
    getRelationship(pubkey: string): Promise<Response<NostrRelationship>>;
    getFollowersWithProfiles(pubkey: string, limit?: number): Promise<Response<KtList<NostrUser>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.UserResource": unique symbol;
    };
}
export declare interface WalletResource {
    connect(nwcUrl: string): Promise<void>;
    payInvoice(invoice: string): Promise<Response<string>>;
    makeInvoice(amountMsats: bigint, description?: string): Promise<Response<string>>;
    getBalance(): Promise<Response<bigint>>;
    getInfo(): Promise<Response<KtList<string>>>;
    listTransactions(since?: Nullable<bigint>, until?: Nullable<bigint>, limit?: number): Promise<Response<KtList<NwcTransaction>>>;
    disconnect(): Promise<void>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.WalletResource": unique symbol;
    };
}
export declare interface ZapResource {
    createZapRequest(recipientPubkey: string, amountMilliSats: bigint, relays: KtList<string>, message?: string, eventId?: Nullable<string>): Promise<Response<NostrEvent>>;
    getZapsForEvent(eventId: string, limit?: number): Promise<Response<KtList<NostrZap>>>;
    getZapsForUser(pubkey: string, limit?: number): Promise<Response<KtList<NostrZap>>>;
    getLnurlPayInfo(lud16: string): Promise<Response<LnurlPayInfo>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.knostr.social.api.ZapResource": unique symbol;
    };
}
export declare class NostrArticle {
    constructor();
    get event(): NostrEvent;
    set event(value: NostrEvent);
    get identifier(): string;
    set identifier(value: string);
    get title(): string;
    set title(value: string);
    get summary(): string;
    set summary(value: string);
    get content(): string;
    set content(value: string);
    get image(): Nullable<string>;
    set image(value: Nullable<string>);
    get publishedAt(): Nullable<bigint>;
    set publishedAt(value: Nullable<bigint>);
    get hashtags(): KtList<string>;
    set hashtags(value: KtList<string>);
    get createdAt(): bigint;
    set createdAt(value: bigint);
    get expiry(): Nullable<bigint>;
    set expiry(value: Nullable<bigint>);
    get isSensitive(): boolean;
    set isSensitive(value: boolean);
}
export declare namespace NostrArticle {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrArticle;
    }
}
export declare class NostrBadge {
    constructor();
    get event(): NostrEvent;
    set event(value: NostrEvent);
    get dTag(): string;
    set dTag(value: string);
    get name(): string;
    set name(value: string);
    get description(): string;
    set description(value: string);
    get image(): string;
    set image(value: string);
    get thumbImage(): string;
    set thumbImage(value: string);
    get createdAt(): bigint;
    set createdAt(value: bigint);
}
export declare namespace NostrBadge {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrBadge;
    }
}
export declare class NostrBadgeAward {
    constructor();
    get event(): NostrEvent;
    set event(value: NostrEvent);
    get badgeDTag(): string;
    set badgeDTag(value: string);
    get recipientPubkeys(): KtList<string>;
    set recipientPubkeys(value: KtList<string>);
    get createdAt(): bigint;
    set createdAt(value: bigint);
}
export declare namespace NostrBadgeAward {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrBadgeAward;
    }
}
export declare class NostrChannel {
    constructor();
    get id(): string;
    set id(value: string);
    get name(): string;
    set name(value: string);
    get about(): string;
    set about(value: string);
    get picture(): string;
    set picture(value: string);
    get createdAt(): bigint;
    set createdAt(value: bigint);
}
export declare namespace NostrChannel {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrChannel;
    }
}
export declare class NostrChannelMessage {
    constructor();
    get event(): NostrEvent;
    set event(value: NostrEvent);
    get content(): string;
    set content(value: string);
    get channelId(): string;
    set channelId(value: string);
    get createdAt(): bigint;
    set createdAt(value: bigint);
}
export declare namespace NostrChannelMessage {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrChannelMessage;
    }
}
export declare class NostrDirectMessage {
    constructor(id: string, senderPubkey: string, recipientPubkey: string, content: string, createdAt: bigint, event?: Nullable<NostrEvent>, isLegacy?: boolean);
    get id(): string;
    get senderPubkey(): string;
    get recipientPubkey(): string;
    get content(): string;
    get createdAt(): bigint;
    get event(): Nullable<NostrEvent>;
    get isLegacy(): boolean;
    copy(id?: string, senderPubkey?: string, recipientPubkey?: string, content?: string, createdAt?: bigint, event?: Nullable<NostrEvent>, isLegacy?: boolean): NostrDirectMessage;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NostrDirectMessage {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrDirectMessage;
    }
}
export declare class NostrFileMetadata {
    constructor();
    get event(): NostrEvent;
    set event(value: NostrEvent);
    get url(): string;
    set url(value: string);
    get mimeType(): string;
    set mimeType(value: string);
    get sha256(): Nullable<string>;
    set sha256(value: Nullable<string>);
    get sizeBytes(): Nullable<bigint>;
    set sizeBytes(value: Nullable<bigint>);
    get dimensions(): Nullable<string>;
    set dimensions(value: Nullable<string>);
    get blurhash(): Nullable<string>;
    set blurhash(value: Nullable<string>);
    get thumbnailUrl(): Nullable<string>;
    set thumbnailUrl(value: Nullable<string>);
    get description(): Nullable<string>;
    set description(value: Nullable<string>);
    get createdAt(): bigint;
    set createdAt(value: bigint);
}
export declare namespace NostrFileMetadata {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrFileMetadata;
    }
}
export declare class NostrList {
    constructor();
    get event(): NostrEvent;
    set event(value: NostrEvent);
    get name(): string;
    set name(value: string);
    get pubkeys(): KtList<string>;
    set pubkeys(value: KtList<string>);
    get createdAt(): bigint;
    set createdAt(value: bigint);
}
export declare namespace NostrList {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrList;
    }
}
export declare class NostrMedia {
    constructor();
    get url(): string;
    set url(value: string);
    get fileName(): Nullable<string>;
    set fileName(value: Nullable<string>);
    get mimeType(): Nullable<string>;
    set mimeType(value: Nullable<string>);
    get sizeBytes(): Nullable<bigint>;
    set sizeBytes(value: Nullable<bigint>);
    get sha256(): Nullable<string>;
    set sha256(value: Nullable<string>);
    get width(): Nullable<number>;
    set width(value: Nullable<number>);
    get height(): Nullable<number>;
    set height(value: Nullable<number>);
    get blurhash(): Nullable<string>;
    set blurhash(value: Nullable<string>);
    get thumbnailUrl(): Nullable<string>;
    set thumbnailUrl(value: Nullable<string>);
}
export declare namespace NostrMedia {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrMedia;
    }
}
export declare class NostrNote {
    constructor();
    get event(): NostrEvent;
    set event(value: NostrEvent);
    get author(): Nullable<NostrUser>;
    set author(value: Nullable<NostrUser>);
    get content(): string;
    set content(value: string);
    get createdAt(): bigint;
    set createdAt(value: bigint);
    get replyToEventId(): Nullable<string>;
    set replyToEventId(value: Nullable<string>);
    get rootEventId(): Nullable<string>;
    set rootEventId(value: Nullable<string>);
    get reactions(): KtList<NostrReaction>;
    set reactions(value: KtList<NostrReaction>);
    get repostCount(): number;
    set repostCount(value: number);
    get replyCount(): number;
    set replyCount(value: number);
    get noteId(): string;
    set noteId(value: string);
    get contentWarning(): Nullable<string>;
    set contentWarning(value: Nullable<string>);
    get quotedEventId(): Nullable<string>;
    set quotedEventId(value: Nullable<string>);
    get likeCount(): number;
    set likeCount(value: number);
    get quotedNote(): Nullable<NostrNote>;
    set quotedNote(value: Nullable<NostrNote>);
    get medias(): KtList<NostrMedia>;
    set medias(value: KtList<NostrMedia>);
    get expiry(): Nullable<bigint>;
    set expiry(value: Nullable<bigint>);
    get isSensitive(): boolean;
    set isSensitive(value: boolean);
}
export declare namespace NostrNote {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrNote;
    }
}
export declare class NostrPoll {
    constructor();
    get event(): NostrEvent;
    set event(value: NostrEvent);
    get content(): string;
    set content(value: string);
    get options(): KtList<NostrPollOption>;
    set options(value: KtList<NostrPollOption>);
    get createdAt(): bigint;
    set createdAt(value: bigint);
    get closedAt(): Nullable<bigint>;
    set closedAt(value: Nullable<bigint>);
}
export declare namespace NostrPoll {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrPoll;
    }
}
export declare class NostrPollOption {
    constructor(index: number, label: string);
    get index(): number;
    get label(): string;
    copy(index?: number, label?: string): NostrPollOption;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NostrPollOption {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrPollOption;
    }
}
export declare class NostrReaction {
    constructor();
    get event(): NostrEvent;
    set event(value: NostrEvent);
    get author(): Nullable<NostrUser>;
    set author(value: Nullable<NostrUser>);
    get targetEventId(): string;
    set targetEventId(value: string);
    get content(): string;
    set content(value: string);
    get createdAt(): bigint;
    set createdAt(value: bigint);
    get emojiUrl(): Nullable<string>;
    set emojiUrl(value: Nullable<string>);
}
export declare namespace NostrReaction {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrReaction;
    }
}
export declare class NostrRelationship {
    constructor();
    get isFollowing(): boolean;
    set isFollowing(value: boolean);
    get isFollowedBy(): boolean;
    set isFollowedBy(value: boolean);
    get isMuting(): boolean;
    set isMuting(value: boolean);
}
export declare namespace NostrRelationship {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrRelationship;
    }
}
export declare class NostrRelayListEntry {
    constructor(url: string, read?: boolean, write?: boolean);
    get url(): string;
    get read(): boolean;
    get write(): boolean;
    copy(url?: string, read?: boolean, write?: boolean): NostrRelayListEntry;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NostrRelayListEntry {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrRelayListEntry;
    }
}
export declare class NostrThread {
    constructor();
    get rootNote(): Nullable<NostrNote>;
    set rootNote(value: Nullable<NostrNote>);
    get replies(): KtList<NostrNote>;
    set replies(value: KtList<NostrNote>);
}
export declare namespace NostrThread {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrThread;
    }
}
export declare class NostrUser {
    constructor();
    get pubkey(): string;
    set pubkey(value: string);
    get npub(): string;
    set npub(value: string);
    get name(): Nullable<string>;
    set name(value: Nullable<string>);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get about(): Nullable<string>;
    set about(value: Nullable<string>);
    get picture(): Nullable<string>;
    set picture(value: Nullable<string>);
    get banner(): Nullable<string>;
    set banner(value: Nullable<string>);
    get nip05(): Nullable<string>;
    set nip05(value: Nullable<string>);
    get website(): Nullable<string>;
    set website(value: Nullable<string>);
    get lud16(): Nullable<string>;
    set lud16(value: Nullable<string>);
    get followingCount(): number;
    set followingCount(value: number);
    get followersCount(): number;
    set followersCount(value: number);
    get isFollowing(): boolean;
    set isFollowing(value: boolean);
    get isFollowedBy(): boolean;
    set isFollowedBy(value: boolean);
    get isMuted(): boolean;
    set isMuted(value: boolean);
}
export declare namespace NostrUser {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrUser;
    }
}
export declare class NostrUserStatus {
    constructor(type: string, content: string, url?: Nullable<string>, expiration?: Nullable<bigint>);
    get type(): string;
    get content(): string;
    get url(): Nullable<string>;
    get expiration(): Nullable<bigint>;
    copy(type?: string, content?: string, url?: Nullable<string>, expiration?: Nullable<bigint>): NostrUserStatus;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NostrUserStatus {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrUserStatus;
    }
}
export declare class NostrZap {
    constructor();
    get event(): NostrEvent;
    set event(value: NostrEvent);
    get sender(): Nullable<NostrUser>;
    set sender(value: Nullable<NostrUser>);
    get recipientPubkey(): string;
    set recipientPubkey(value: string);
    get targetEventId(): Nullable<string>;
    set targetEventId(value: Nullable<string>);
    get amountMilliSats(): bigint;
    set amountMilliSats(value: bigint);
    get message(): string;
    set message(value: string);
    get createdAt(): bigint;
    set createdAt(value: bigint);
}
export declare namespace NostrZap {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NostrZap;
    }
}
export declare class NwcTransaction {
    constructor(type?: string, invoice?: string, description?: string, preimage?: string, paymentHash?: string, amount?: bigint, feesPaid?: bigint, createdAt?: bigint, settledAt?: Nullable<bigint>);
    get type(): string;
    get invoice(): string;
    get description(): string;
    get preimage(): string;
    get paymentHash(): string;
    get amount(): bigint;
    get feesPaid(): bigint;
    get createdAt(): bigint;
    get settledAt(): Nullable<bigint>;
    copy(type?: string, invoice?: string, description?: string, preimage?: string, paymentHash?: string, amount?: bigint, feesPaid?: bigint, createdAt?: bigint, settledAt?: Nullable<bigint>): NwcTransaction;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NwcTransaction {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NwcTransaction;
    }
}
export declare class KnostrFactory {
    constructor();
    nostr(config: NostrConfig): Nostr;
    social(nostr: Nostr): NostrSocial;
}
export declare namespace KnostrFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => KnostrFactory;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                getNostrFactory(): typeof NostrFactory.$metadata$.type;
                getNostrSocialFactory(): typeof NostrSocialFactory.$metadata$.type;
                private constructor();
            }
        }
    }
}