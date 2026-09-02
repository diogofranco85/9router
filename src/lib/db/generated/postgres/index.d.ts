
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Meta
 * 
 */
export type Meta = $Result.DefaultSelection<Prisma.$MetaPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model ProviderConnection
 * 
 */
export type ProviderConnection = $Result.DefaultSelection<Prisma.$ProviderConnectionPayload>
/**
 * Model ProviderNode
 * 
 */
export type ProviderNode = $Result.DefaultSelection<Prisma.$ProviderNodePayload>
/**
 * Model ProxyPool
 * 
 */
export type ProxyPool = $Result.DefaultSelection<Prisma.$ProxyPoolPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model Combo
 * 
 */
export type Combo = $Result.DefaultSelection<Prisma.$ComboPayload>
/**
 * Model Kv
 * 
 */
export type Kv = $Result.DefaultSelection<Prisma.$KvPayload>
/**
 * Model UsageHistory
 * 
 */
export type UsageHistory = $Result.DefaultSelection<Prisma.$UsageHistoryPayload>
/**
 * Model UsageDaily
 * 
 */
export type UsageDaily = $Result.DefaultSelection<Prisma.$UsageDailyPayload>
/**
 * Model RequestDetail
 * 
 */
export type RequestDetail = $Result.DefaultSelection<Prisma.$RequestDetailPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Metas
 * const metas = await prisma.meta.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Metas
   * const metas = await prisma.meta.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.meta`: Exposes CRUD operations for the **Meta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metas
    * const metas = await prisma.meta.findMany()
    * ```
    */
  get meta(): Prisma.MetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerConnection`: Exposes CRUD operations for the **ProviderConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderConnections
    * const providerConnections = await prisma.providerConnection.findMany()
    * ```
    */
  get providerConnection(): Prisma.ProviderConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerNode`: Exposes CRUD operations for the **ProviderNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderNodes
    * const providerNodes = await prisma.providerNode.findMany()
    * ```
    */
  get providerNode(): Prisma.ProviderNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proxyPool`: Exposes CRUD operations for the **ProxyPool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProxyPools
    * const proxyPools = await prisma.proxyPool.findMany()
    * ```
    */
  get proxyPool(): Prisma.ProxyPoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.combo`: Exposes CRUD operations for the **Combo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Combos
    * const combos = await prisma.combo.findMany()
    * ```
    */
  get combo(): Prisma.ComboDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kv`: Exposes CRUD operations for the **Kv** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kvs
    * const kvs = await prisma.kv.findMany()
    * ```
    */
  get kv(): Prisma.KvDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageHistory`: Exposes CRUD operations for the **UsageHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageHistories
    * const usageHistories = await prisma.usageHistory.findMany()
    * ```
    */
  get usageHistory(): Prisma.UsageHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageDaily`: Exposes CRUD operations for the **UsageDaily** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageDailies
    * const usageDailies = await prisma.usageDaily.findMany()
    * ```
    */
  get usageDaily(): Prisma.UsageDailyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestDetail`: Exposes CRUD operations for the **RequestDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestDetails
    * const requestDetails = await prisma.requestDetail.findMany()
    * ```
    */
  get requestDetail(): Prisma.RequestDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Meta: 'Meta',
    Settings: 'Settings',
    ProviderConnection: 'ProviderConnection',
    ProviderNode: 'ProviderNode',
    ProxyPool: 'ProxyPool',
    User: 'User',
    Project: 'Project',
    ApiKey: 'ApiKey',
    Combo: 'Combo',
    Kv: 'Kv',
    UsageHistory: 'UsageHistory',
    UsageDaily: 'UsageDaily',
    RequestDetail: 'RequestDetail',
    ChatSession: 'ChatSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "meta" | "settings" | "providerConnection" | "providerNode" | "proxyPool" | "user" | "project" | "apiKey" | "combo" | "kv" | "usageHistory" | "usageDaily" | "requestDetail" | "chatSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Meta: {
        payload: Prisma.$MetaPayload<ExtArgs>
        fields: Prisma.MetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findFirst: {
            args: Prisma.MetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findMany: {
            args: Prisma.MetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          create: {
            args: Prisma.MetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          createMany: {
            args: Prisma.MetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          delete: {
            args: Prisma.MetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          update: {
            args: Prisma.MetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          deleteMany: {
            args: Prisma.MetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          upsert: {
            args: Prisma.MetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          aggregate: {
            args: Prisma.MetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeta>
          }
          groupBy: {
            args: Prisma.MetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaCountArgs<ExtArgs>
            result: $Utils.Optional<MetaCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      ProviderConnection: {
        payload: Prisma.$ProviderConnectionPayload<ExtArgs>
        fields: Prisma.ProviderConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload>
          }
          findFirst: {
            args: Prisma.ProviderConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload>
          }
          findMany: {
            args: Prisma.ProviderConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload>[]
          }
          create: {
            args: Prisma.ProviderConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload>
          }
          createMany: {
            args: Prisma.ProviderConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload>[]
          }
          delete: {
            args: Prisma.ProviderConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload>
          }
          update: {
            args: Prisma.ProviderConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload>
          }
          deleteMany: {
            args: Prisma.ProviderConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload>[]
          }
          upsert: {
            args: Prisma.ProviderConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderConnectionPayload>
          }
          aggregate: {
            args: Prisma.ProviderConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderConnection>
          }
          groupBy: {
            args: Prisma.ProviderConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderConnectionCountAggregateOutputType> | number
          }
        }
      }
      ProviderNode: {
        payload: Prisma.$ProviderNodePayload<ExtArgs>
        fields: Prisma.ProviderNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload>
          }
          findFirst: {
            args: Prisma.ProviderNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload>
          }
          findMany: {
            args: Prisma.ProviderNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload>[]
          }
          create: {
            args: Prisma.ProviderNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload>
          }
          createMany: {
            args: Prisma.ProviderNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload>[]
          }
          delete: {
            args: Prisma.ProviderNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload>
          }
          update: {
            args: Prisma.ProviderNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload>
          }
          deleteMany: {
            args: Prisma.ProviderNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload>[]
          }
          upsert: {
            args: Prisma.ProviderNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderNodePayload>
          }
          aggregate: {
            args: Prisma.ProviderNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderNode>
          }
          groupBy: {
            args: Prisma.ProviderNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderNodeCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderNodeCountAggregateOutputType> | number
          }
        }
      }
      ProxyPool: {
        payload: Prisma.$ProxyPoolPayload<ExtArgs>
        fields: Prisma.ProxyPoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProxyPoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProxyPoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload>
          }
          findFirst: {
            args: Prisma.ProxyPoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProxyPoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload>
          }
          findMany: {
            args: Prisma.ProxyPoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload>[]
          }
          create: {
            args: Prisma.ProxyPoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload>
          }
          createMany: {
            args: Prisma.ProxyPoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProxyPoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload>[]
          }
          delete: {
            args: Prisma.ProxyPoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload>
          }
          update: {
            args: Prisma.ProxyPoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload>
          }
          deleteMany: {
            args: Prisma.ProxyPoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProxyPoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProxyPoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload>[]
          }
          upsert: {
            args: Prisma.ProxyPoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPoolPayload>
          }
          aggregate: {
            args: Prisma.ProxyPoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProxyPool>
          }
          groupBy: {
            args: Prisma.ProxyPoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProxyPoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProxyPoolCountArgs<ExtArgs>
            result: $Utils.Optional<ProxyPoolCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      Combo: {
        payload: Prisma.$ComboPayload<ExtArgs>
        fields: Prisma.ComboFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComboFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComboFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          findFirst: {
            args: Prisma.ComboFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComboFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          findMany: {
            args: Prisma.ComboFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>[]
          }
          create: {
            args: Prisma.ComboCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          createMany: {
            args: Prisma.ComboCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComboCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>[]
          }
          delete: {
            args: Prisma.ComboDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          update: {
            args: Prisma.ComboUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          deleteMany: {
            args: Prisma.ComboDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComboUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComboUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>[]
          }
          upsert: {
            args: Prisma.ComboUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          aggregate: {
            args: Prisma.ComboAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCombo>
          }
          groupBy: {
            args: Prisma.ComboGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComboGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComboCountArgs<ExtArgs>
            result: $Utils.Optional<ComboCountAggregateOutputType> | number
          }
        }
      }
      Kv: {
        payload: Prisma.$KvPayload<ExtArgs>
        fields: Prisma.KvFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KvFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KvFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload>
          }
          findFirst: {
            args: Prisma.KvFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KvFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload>
          }
          findMany: {
            args: Prisma.KvFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload>[]
          }
          create: {
            args: Prisma.KvCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload>
          }
          createMany: {
            args: Prisma.KvCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KvCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload>[]
          }
          delete: {
            args: Prisma.KvDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload>
          }
          update: {
            args: Prisma.KvUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload>
          }
          deleteMany: {
            args: Prisma.KvDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KvUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KvUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload>[]
          }
          upsert: {
            args: Prisma.KvUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPayload>
          }
          aggregate: {
            args: Prisma.KvAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKv>
          }
          groupBy: {
            args: Prisma.KvGroupByArgs<ExtArgs>
            result: $Utils.Optional<KvGroupByOutputType>[]
          }
          count: {
            args: Prisma.KvCountArgs<ExtArgs>
            result: $Utils.Optional<KvCountAggregateOutputType> | number
          }
        }
      }
      UsageHistory: {
        payload: Prisma.$UsageHistoryPayload<ExtArgs>
        fields: Prisma.UsageHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload>
          }
          findFirst: {
            args: Prisma.UsageHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload>
          }
          findMany: {
            args: Prisma.UsageHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload>[]
          }
          create: {
            args: Prisma.UsageHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload>
          }
          createMany: {
            args: Prisma.UsageHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload>[]
          }
          delete: {
            args: Prisma.UsageHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload>
          }
          update: {
            args: Prisma.UsageHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload>
          }
          deleteMany: {
            args: Prisma.UsageHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload>[]
          }
          upsert: {
            args: Prisma.UsageHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageHistoryPayload>
          }
          aggregate: {
            args: Prisma.UsageHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageHistory>
          }
          groupBy: {
            args: Prisma.UsageHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<UsageHistoryCountAggregateOutputType> | number
          }
        }
      }
      UsageDaily: {
        payload: Prisma.$UsageDailyPayload<ExtArgs>
        fields: Prisma.UsageDailyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageDailyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageDailyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload>
          }
          findFirst: {
            args: Prisma.UsageDailyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageDailyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload>
          }
          findMany: {
            args: Prisma.UsageDailyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload>[]
          }
          create: {
            args: Prisma.UsageDailyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload>
          }
          createMany: {
            args: Prisma.UsageDailyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageDailyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload>[]
          }
          delete: {
            args: Prisma.UsageDailyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload>
          }
          update: {
            args: Prisma.UsageDailyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload>
          }
          deleteMany: {
            args: Prisma.UsageDailyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageDailyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageDailyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload>[]
          }
          upsert: {
            args: Prisma.UsageDailyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageDailyPayload>
          }
          aggregate: {
            args: Prisma.UsageDailyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageDaily>
          }
          groupBy: {
            args: Prisma.UsageDailyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageDailyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageDailyCountArgs<ExtArgs>
            result: $Utils.Optional<UsageDailyCountAggregateOutputType> | number
          }
        }
      }
      RequestDetail: {
        payload: Prisma.$RequestDetailPayload<ExtArgs>
        fields: Prisma.RequestDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload>
          }
          findFirst: {
            args: Prisma.RequestDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload>
          }
          findMany: {
            args: Prisma.RequestDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload>[]
          }
          create: {
            args: Prisma.RequestDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload>
          }
          createMany: {
            args: Prisma.RequestDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload>[]
          }
          delete: {
            args: Prisma.RequestDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload>
          }
          update: {
            args: Prisma.RequestDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload>
          }
          deleteMany: {
            args: Prisma.RequestDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload>[]
          }
          upsert: {
            args: Prisma.RequestDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDetailPayload>
          }
          aggregate: {
            args: Prisma.RequestDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestDetail>
          }
          groupBy: {
            args: Prisma.RequestDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestDetailCountArgs<ExtArgs>
            result: $Utils.Optional<RequestDetailCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    meta?: MetaOmit
    settings?: SettingsOmit
    providerConnection?: ProviderConnectionOmit
    providerNode?: ProviderNodeOmit
    proxyPool?: ProxyPoolOmit
    user?: UserOmit
    project?: ProjectOmit
    apiKey?: ApiKeyOmit
    combo?: ComboOmit
    kv?: KvOmit
    usageHistory?: UsageHistoryOmit
    usageDaily?: UsageDailyOmit
    requestDetail?: RequestDetailOmit
    chatSession?: ChatSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Meta
   */

  export type AggregateMeta = {
    _count: MetaCountAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  export type MetaMinAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type MetaMaxAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type MetaCountAggregateOutputType = {
    key: number
    value: number
    _all: number
  }


  export type MetaMinAggregateInputType = {
    key?: true
    value?: true
  }

  export type MetaMaxAggregateInputType = {
    key?: true
    value?: true
  }

  export type MetaCountAggregateInputType = {
    key?: true
    value?: true
    _all?: true
  }

  export type MetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meta to aggregate.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metas
    **/
    _count?: true | MetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaMaxAggregateInputType
  }

  export type GetMetaAggregateType<T extends MetaAggregateArgs> = {
        [P in keyof T & keyof AggregateMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeta[P]>
      : GetScalarType<T[P], AggregateMeta[P]>
  }




  export type MetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaWhereInput
    orderBy?: MetaOrderByWithAggregationInput | MetaOrderByWithAggregationInput[]
    by: MetaScalarFieldEnum[] | MetaScalarFieldEnum
    having?: MetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaCountAggregateInputType | true
    _min?: MetaMinAggregateInputType
    _max?: MetaMaxAggregateInputType
  }

  export type MetaGroupByOutputType = {
    key: string
    value: string
    _count: MetaCountAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  type GetMetaGroupByPayload<T extends MetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaGroupByOutputType[P]>
            : GetScalarType<T[P], MetaGroupByOutputType[P]>
        }
      >
    >


  export type MetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectScalar = {
    key?: boolean
    value?: boolean
  }

  export type MetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value", ExtArgs["result"]["meta"]>

  export type $MetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
    }, ExtArgs["result"]["meta"]>
    composites: {}
  }

  type MetaGetPayload<S extends boolean | null | undefined | MetaDefaultArgs> = $Result.GetResult<Prisma.$MetaPayload, S>

  type MetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaCountAggregateInputType | true
    }

  export interface MetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meta'], meta: { name: 'Meta' } }
    /**
     * Find zero or one Meta that matches the filter.
     * @param {MetaFindUniqueArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaFindUniqueArgs>(args: SelectSubset<T, MetaFindUniqueArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaFindUniqueOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaFindFirstArgs>(args?: SelectSubset<T, MetaFindFirstArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metas
     * const metas = await prisma.meta.findMany()
     * 
     * // Get first 10 Metas
     * const metas = await prisma.meta.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const metaWithKeyOnly = await prisma.meta.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends MetaFindManyArgs>(args?: SelectSubset<T, MetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meta.
     * @param {MetaCreateArgs} args - Arguments to create a Meta.
     * @example
     * // Create one Meta
     * const Meta = await prisma.meta.create({
     *   data: {
     *     // ... data to create a Meta
     *   }
     * })
     * 
     */
    create<T extends MetaCreateArgs>(args: SelectSubset<T, MetaCreateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metas.
     * @param {MetaCreateManyArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaCreateManyArgs>(args?: SelectSubset<T, MetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metas and returns the data saved in the database.
     * @param {MetaCreateManyAndReturnArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metas and only return the `key`
     * const metaWithKeyOnly = await prisma.meta.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetaCreateManyAndReturnArgs>(args?: SelectSubset<T, MetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meta.
     * @param {MetaDeleteArgs} args - Arguments to delete one Meta.
     * @example
     * // Delete one Meta
     * const Meta = await prisma.meta.delete({
     *   where: {
     *     // ... filter to delete one Meta
     *   }
     * })
     * 
     */
    delete<T extends MetaDeleteArgs>(args: SelectSubset<T, MetaDeleteArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meta.
     * @param {MetaUpdateArgs} args - Arguments to update one Meta.
     * @example
     * // Update one Meta
     * const meta = await prisma.meta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaUpdateArgs>(args: SelectSubset<T, MetaUpdateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metas.
     * @param {MetaDeleteManyArgs} args - Arguments to filter Metas to delete.
     * @example
     * // Delete a few Metas
     * const { count } = await prisma.meta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaDeleteManyArgs>(args?: SelectSubset<T, MetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaUpdateManyArgs>(args: SelectSubset<T, MetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas and returns the data updated in the database.
     * @param {MetaUpdateManyAndReturnArgs} args - Arguments to update many Metas.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metas and only return the `key`
     * const metaWithKeyOnly = await prisma.meta.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetaUpdateManyAndReturnArgs>(args: SelectSubset<T, MetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meta.
     * @param {MetaUpsertArgs} args - Arguments to update or create a Meta.
     * @example
     * // Update or create a Meta
     * const meta = await prisma.meta.upsert({
     *   create: {
     *     // ... data to create a Meta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meta we want to update
     *   }
     * })
     */
    upsert<T extends MetaUpsertArgs>(args: SelectSubset<T, MetaUpsertArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaCountArgs} args - Arguments to filter Metas to count.
     * @example
     * // Count the number of Metas
     * const count = await prisma.meta.count({
     *   where: {
     *     // ... the filter for the Metas we want to count
     *   }
     * })
    **/
    count<T extends MetaCountArgs>(
      args?: Subset<T, MetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetaAggregateArgs>(args: Subset<T, MetaAggregateArgs>): Prisma.PrismaPromise<GetMetaAggregateType<T>>

    /**
     * Group by Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaGroupByArgs['orderBy'] }
        : { orderBy?: MetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meta model
   */
  readonly fields: MetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meta model
   */
  interface MetaFieldRefs {
    readonly key: FieldRef<"Meta", 'String'>
    readonly value: FieldRef<"Meta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Meta findUnique
   */
  export type MetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findUniqueOrThrow
   */
  export type MetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findFirst
   */
  export type MetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findFirstOrThrow
   */
  export type MetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findMany
   */
  export type MetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter, which Metas to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta create
   */
  export type MetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data needed to create a Meta.
     */
    data: XOR<MetaCreateInput, MetaUncheckedCreateInput>
  }

  /**
   * Meta createMany
   */
  export type MetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meta createManyAndReturn
   */
  export type MetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meta update
   */
  export type MetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data needed to update a Meta.
     */
    data: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
    /**
     * Choose, which Meta to update.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta updateMany
   */
  export type MetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
  }

  /**
   * Meta updateManyAndReturn
   */
  export type MetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
  }

  /**
   * Meta upsert
   */
  export type MetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The filter to search for the Meta to update in case it exists.
     */
    where: MetaWhereUniqueInput
    /**
     * In case the Meta found by the `where` argument doesn't exist, create a new Meta with this data.
     */
    create: XOR<MetaCreateInput, MetaUncheckedCreateInput>
    /**
     * In case the Meta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
  }

  /**
   * Meta delete
   */
  export type MetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter which Meta to delete.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta deleteMany
   */
  export type MetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metas to delete
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to delete.
     */
    limit?: number
  }

  /**
   * Meta without action
   */
  export type MetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: number | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: number | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    data: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    data?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: number
    data: JsonValue
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    data?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data", ExtArgs["result"]["settings"]>

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Prisma.JsonValue
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'Int'>
    readonly data: FieldRef<"Settings", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
  }


  /**
   * Model ProviderConnection
   */

  export type AggregateProviderConnection = {
    _count: ProviderConnectionCountAggregateOutputType | null
    _avg: ProviderConnectionAvgAggregateOutputType | null
    _sum: ProviderConnectionSumAggregateOutputType | null
    _min: ProviderConnectionMinAggregateOutputType | null
    _max: ProviderConnectionMaxAggregateOutputType | null
  }

  export type ProviderConnectionAvgAggregateOutputType = {
    priority: number | null
  }

  export type ProviderConnectionSumAggregateOutputType = {
    priority: number | null
  }

  export type ProviderConnectionMinAggregateOutputType = {
    id: string | null
    provider: string | null
    authType: string | null
    name: string | null
    email: string | null
    priority: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderConnectionMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    authType: string | null
    name: string | null
    email: string | null
    priority: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderConnectionCountAggregateOutputType = {
    id: number
    provider: number
    authType: number
    name: number
    email: number
    priority: number
    isActive: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderConnectionAvgAggregateInputType = {
    priority?: true
  }

  export type ProviderConnectionSumAggregateInputType = {
    priority?: true
  }

  export type ProviderConnectionMinAggregateInputType = {
    id?: true
    provider?: true
    authType?: true
    name?: true
    email?: true
    priority?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderConnectionMaxAggregateInputType = {
    id?: true
    provider?: true
    authType?: true
    name?: true
    email?: true
    priority?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderConnectionCountAggregateInputType = {
    id?: true
    provider?: true
    authType?: true
    name?: true
    email?: true
    priority?: true
    isActive?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderConnection to aggregate.
     */
    where?: ProviderConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderConnections to fetch.
     */
    orderBy?: ProviderConnectionOrderByWithRelationInput | ProviderConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderConnections
    **/
    _count?: true | ProviderConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderConnectionMaxAggregateInputType
  }

  export type GetProviderConnectionAggregateType<T extends ProviderConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderConnection[P]>
      : GetScalarType<T[P], AggregateProviderConnection[P]>
  }




  export type ProviderConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderConnectionWhereInput
    orderBy?: ProviderConnectionOrderByWithAggregationInput | ProviderConnectionOrderByWithAggregationInput[]
    by: ProviderConnectionScalarFieldEnum[] | ProviderConnectionScalarFieldEnum
    having?: ProviderConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderConnectionCountAggregateInputType | true
    _avg?: ProviderConnectionAvgAggregateInputType
    _sum?: ProviderConnectionSumAggregateInputType
    _min?: ProviderConnectionMinAggregateInputType
    _max?: ProviderConnectionMaxAggregateInputType
  }

  export type ProviderConnectionGroupByOutputType = {
    id: string
    provider: string
    authType: string
    name: string | null
    email: string | null
    priority: number | null
    isActive: boolean
    data: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProviderConnectionCountAggregateOutputType | null
    _avg: ProviderConnectionAvgAggregateOutputType | null
    _sum: ProviderConnectionSumAggregateOutputType | null
    _min: ProviderConnectionMinAggregateOutputType | null
    _max: ProviderConnectionMaxAggregateOutputType | null
  }

  type GetProviderConnectionGroupByPayload<T extends ProviderConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderConnectionGroupByOutputType[P]>
        }
      >
    >


  export type ProviderConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    authType?: boolean
    name?: boolean
    email?: boolean
    priority?: boolean
    isActive?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerConnection"]>

  export type ProviderConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    authType?: boolean
    name?: boolean
    email?: boolean
    priority?: boolean
    isActive?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerConnection"]>

  export type ProviderConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    authType?: boolean
    name?: boolean
    email?: boolean
    priority?: boolean
    isActive?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerConnection"]>

  export type ProviderConnectionSelectScalar = {
    id?: boolean
    provider?: boolean
    authType?: boolean
    name?: boolean
    email?: boolean
    priority?: boolean
    isActive?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "authType" | "name" | "email" | "priority" | "isActive" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["providerConnection"]>

  export type $ProviderConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderConnection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      authType: string
      name: string | null
      email: string | null
      priority: number | null
      isActive: boolean
      data: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["providerConnection"]>
    composites: {}
  }

  type ProviderConnectionGetPayload<S extends boolean | null | undefined | ProviderConnectionDefaultArgs> = $Result.GetResult<Prisma.$ProviderConnectionPayload, S>

  type ProviderConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderConnectionCountAggregateInputType | true
    }

  export interface ProviderConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderConnection'], meta: { name: 'ProviderConnection' } }
    /**
     * Find zero or one ProviderConnection that matches the filter.
     * @param {ProviderConnectionFindUniqueArgs} args - Arguments to find a ProviderConnection
     * @example
     * // Get one ProviderConnection
     * const providerConnection = await prisma.providerConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderConnectionFindUniqueArgs>(args: SelectSubset<T, ProviderConnectionFindUniqueArgs<ExtArgs>>): Prisma__ProviderConnectionClient<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderConnectionFindUniqueOrThrowArgs} args - Arguments to find a ProviderConnection
     * @example
     * // Get one ProviderConnection
     * const providerConnection = await prisma.providerConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderConnectionClient<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderConnectionFindFirstArgs} args - Arguments to find a ProviderConnection
     * @example
     * // Get one ProviderConnection
     * const providerConnection = await prisma.providerConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderConnectionFindFirstArgs>(args?: SelectSubset<T, ProviderConnectionFindFirstArgs<ExtArgs>>): Prisma__ProviderConnectionClient<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderConnectionFindFirstOrThrowArgs} args - Arguments to find a ProviderConnection
     * @example
     * // Get one ProviderConnection
     * const providerConnection = await prisma.providerConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderConnectionClient<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderConnections
     * const providerConnections = await prisma.providerConnection.findMany()
     * 
     * // Get first 10 ProviderConnections
     * const providerConnections = await prisma.providerConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerConnectionWithIdOnly = await prisma.providerConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderConnectionFindManyArgs>(args?: SelectSubset<T, ProviderConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderConnection.
     * @param {ProviderConnectionCreateArgs} args - Arguments to create a ProviderConnection.
     * @example
     * // Create one ProviderConnection
     * const ProviderConnection = await prisma.providerConnection.create({
     *   data: {
     *     // ... data to create a ProviderConnection
     *   }
     * })
     * 
     */
    create<T extends ProviderConnectionCreateArgs>(args: SelectSubset<T, ProviderConnectionCreateArgs<ExtArgs>>): Prisma__ProviderConnectionClient<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderConnections.
     * @param {ProviderConnectionCreateManyArgs} args - Arguments to create many ProviderConnections.
     * @example
     * // Create many ProviderConnections
     * const providerConnection = await prisma.providerConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderConnectionCreateManyArgs>(args?: SelectSubset<T, ProviderConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderConnections and returns the data saved in the database.
     * @param {ProviderConnectionCreateManyAndReturnArgs} args - Arguments to create many ProviderConnections.
     * @example
     * // Create many ProviderConnections
     * const providerConnection = await prisma.providerConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderConnections and only return the `id`
     * const providerConnectionWithIdOnly = await prisma.providerConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderConnection.
     * @param {ProviderConnectionDeleteArgs} args - Arguments to delete one ProviderConnection.
     * @example
     * // Delete one ProviderConnection
     * const ProviderConnection = await prisma.providerConnection.delete({
     *   where: {
     *     // ... filter to delete one ProviderConnection
     *   }
     * })
     * 
     */
    delete<T extends ProviderConnectionDeleteArgs>(args: SelectSubset<T, ProviderConnectionDeleteArgs<ExtArgs>>): Prisma__ProviderConnectionClient<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderConnection.
     * @param {ProviderConnectionUpdateArgs} args - Arguments to update one ProviderConnection.
     * @example
     * // Update one ProviderConnection
     * const providerConnection = await prisma.providerConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderConnectionUpdateArgs>(args: SelectSubset<T, ProviderConnectionUpdateArgs<ExtArgs>>): Prisma__ProviderConnectionClient<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderConnections.
     * @param {ProviderConnectionDeleteManyArgs} args - Arguments to filter ProviderConnections to delete.
     * @example
     * // Delete a few ProviderConnections
     * const { count } = await prisma.providerConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderConnectionDeleteManyArgs>(args?: SelectSubset<T, ProviderConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderConnections
     * const providerConnection = await prisma.providerConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderConnectionUpdateManyArgs>(args: SelectSubset<T, ProviderConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderConnections and returns the data updated in the database.
     * @param {ProviderConnectionUpdateManyAndReturnArgs} args - Arguments to update many ProviderConnections.
     * @example
     * // Update many ProviderConnections
     * const providerConnection = await prisma.providerConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderConnections and only return the `id`
     * const providerConnectionWithIdOnly = await prisma.providerConnection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderConnection.
     * @param {ProviderConnectionUpsertArgs} args - Arguments to update or create a ProviderConnection.
     * @example
     * // Update or create a ProviderConnection
     * const providerConnection = await prisma.providerConnection.upsert({
     *   create: {
     *     // ... data to create a ProviderConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderConnection we want to update
     *   }
     * })
     */
    upsert<T extends ProviderConnectionUpsertArgs>(args: SelectSubset<T, ProviderConnectionUpsertArgs<ExtArgs>>): Prisma__ProviderConnectionClient<$Result.GetResult<Prisma.$ProviderConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderConnectionCountArgs} args - Arguments to filter ProviderConnections to count.
     * @example
     * // Count the number of ProviderConnections
     * const count = await prisma.providerConnection.count({
     *   where: {
     *     // ... the filter for the ProviderConnections we want to count
     *   }
     * })
    **/
    count<T extends ProviderConnectionCountArgs>(
      args?: Subset<T, ProviderConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderConnectionAggregateArgs>(args: Subset<T, ProviderConnectionAggregateArgs>): Prisma.PrismaPromise<GetProviderConnectionAggregateType<T>>

    /**
     * Group by ProviderConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderConnectionGroupByArgs['orderBy'] }
        : { orderBy?: ProviderConnectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderConnection model
   */
  readonly fields: ProviderConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderConnection model
   */
  interface ProviderConnectionFieldRefs {
    readonly id: FieldRef<"ProviderConnection", 'String'>
    readonly provider: FieldRef<"ProviderConnection", 'String'>
    readonly authType: FieldRef<"ProviderConnection", 'String'>
    readonly name: FieldRef<"ProviderConnection", 'String'>
    readonly email: FieldRef<"ProviderConnection", 'String'>
    readonly priority: FieldRef<"ProviderConnection", 'Int'>
    readonly isActive: FieldRef<"ProviderConnection", 'Boolean'>
    readonly data: FieldRef<"ProviderConnection", 'Json'>
    readonly createdAt: FieldRef<"ProviderConnection", 'DateTime'>
    readonly updatedAt: FieldRef<"ProviderConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderConnection findUnique
   */
  export type ProviderConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * Filter, which ProviderConnection to fetch.
     */
    where: ProviderConnectionWhereUniqueInput
  }

  /**
   * ProviderConnection findUniqueOrThrow
   */
  export type ProviderConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * Filter, which ProviderConnection to fetch.
     */
    where: ProviderConnectionWhereUniqueInput
  }

  /**
   * ProviderConnection findFirst
   */
  export type ProviderConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * Filter, which ProviderConnection to fetch.
     */
    where?: ProviderConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderConnections to fetch.
     */
    orderBy?: ProviderConnectionOrderByWithRelationInput | ProviderConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderConnections.
     */
    cursor?: ProviderConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderConnections.
     */
    distinct?: ProviderConnectionScalarFieldEnum | ProviderConnectionScalarFieldEnum[]
  }

  /**
   * ProviderConnection findFirstOrThrow
   */
  export type ProviderConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * Filter, which ProviderConnection to fetch.
     */
    where?: ProviderConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderConnections to fetch.
     */
    orderBy?: ProviderConnectionOrderByWithRelationInput | ProviderConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderConnections.
     */
    cursor?: ProviderConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderConnections.
     */
    distinct?: ProviderConnectionScalarFieldEnum | ProviderConnectionScalarFieldEnum[]
  }

  /**
   * ProviderConnection findMany
   */
  export type ProviderConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * Filter, which ProviderConnections to fetch.
     */
    where?: ProviderConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderConnections to fetch.
     */
    orderBy?: ProviderConnectionOrderByWithRelationInput | ProviderConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderConnections.
     */
    cursor?: ProviderConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderConnections.
     */
    skip?: number
    distinct?: ProviderConnectionScalarFieldEnum | ProviderConnectionScalarFieldEnum[]
  }

  /**
   * ProviderConnection create
   */
  export type ProviderConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * The data needed to create a ProviderConnection.
     */
    data: XOR<ProviderConnectionCreateInput, ProviderConnectionUncheckedCreateInput>
  }

  /**
   * ProviderConnection createMany
   */
  export type ProviderConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderConnections.
     */
    data: ProviderConnectionCreateManyInput | ProviderConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderConnection createManyAndReturn
   */
  export type ProviderConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderConnections.
     */
    data: ProviderConnectionCreateManyInput | ProviderConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderConnection update
   */
  export type ProviderConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * The data needed to update a ProviderConnection.
     */
    data: XOR<ProviderConnectionUpdateInput, ProviderConnectionUncheckedUpdateInput>
    /**
     * Choose, which ProviderConnection to update.
     */
    where: ProviderConnectionWhereUniqueInput
  }

  /**
   * ProviderConnection updateMany
   */
  export type ProviderConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderConnections.
     */
    data: XOR<ProviderConnectionUpdateManyMutationInput, ProviderConnectionUncheckedUpdateManyInput>
    /**
     * Filter which ProviderConnections to update
     */
    where?: ProviderConnectionWhereInput
    /**
     * Limit how many ProviderConnections to update.
     */
    limit?: number
  }

  /**
   * ProviderConnection updateManyAndReturn
   */
  export type ProviderConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * The data used to update ProviderConnections.
     */
    data: XOR<ProviderConnectionUpdateManyMutationInput, ProviderConnectionUncheckedUpdateManyInput>
    /**
     * Filter which ProviderConnections to update
     */
    where?: ProviderConnectionWhereInput
    /**
     * Limit how many ProviderConnections to update.
     */
    limit?: number
  }

  /**
   * ProviderConnection upsert
   */
  export type ProviderConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * The filter to search for the ProviderConnection to update in case it exists.
     */
    where: ProviderConnectionWhereUniqueInput
    /**
     * In case the ProviderConnection found by the `where` argument doesn't exist, create a new ProviderConnection with this data.
     */
    create: XOR<ProviderConnectionCreateInput, ProviderConnectionUncheckedCreateInput>
    /**
     * In case the ProviderConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderConnectionUpdateInput, ProviderConnectionUncheckedUpdateInput>
  }

  /**
   * ProviderConnection delete
   */
  export type ProviderConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
    /**
     * Filter which ProviderConnection to delete.
     */
    where: ProviderConnectionWhereUniqueInput
  }

  /**
   * ProviderConnection deleteMany
   */
  export type ProviderConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderConnections to delete
     */
    where?: ProviderConnectionWhereInput
    /**
     * Limit how many ProviderConnections to delete.
     */
    limit?: number
  }

  /**
   * ProviderConnection without action
   */
  export type ProviderConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderConnection
     */
    select?: ProviderConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderConnection
     */
    omit?: ProviderConnectionOmit<ExtArgs> | null
  }


  /**
   * Model ProviderNode
   */

  export type AggregateProviderNode = {
    _count: ProviderNodeCountAggregateOutputType | null
    _min: ProviderNodeMinAggregateOutputType | null
    _max: ProviderNodeMaxAggregateOutputType | null
  }

  export type ProviderNodeMinAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderNodeMaxAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderNodeCountAggregateOutputType = {
    id: number
    type: number
    name: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderNodeMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderNodeMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderNodeCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderNode to aggregate.
     */
    where?: ProviderNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderNodes to fetch.
     */
    orderBy?: ProviderNodeOrderByWithRelationInput | ProviderNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderNodes
    **/
    _count?: true | ProviderNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderNodeMaxAggregateInputType
  }

  export type GetProviderNodeAggregateType<T extends ProviderNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderNode[P]>
      : GetScalarType<T[P], AggregateProviderNode[P]>
  }




  export type ProviderNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderNodeWhereInput
    orderBy?: ProviderNodeOrderByWithAggregationInput | ProviderNodeOrderByWithAggregationInput[]
    by: ProviderNodeScalarFieldEnum[] | ProviderNodeScalarFieldEnum
    having?: ProviderNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderNodeCountAggregateInputType | true
    _min?: ProviderNodeMinAggregateInputType
    _max?: ProviderNodeMaxAggregateInputType
  }

  export type ProviderNodeGroupByOutputType = {
    id: string
    type: string | null
    name: string | null
    data: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProviderNodeCountAggregateOutputType | null
    _min: ProviderNodeMinAggregateOutputType | null
    _max: ProviderNodeMaxAggregateOutputType | null
  }

  type GetProviderNodeGroupByPayload<T extends ProviderNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderNodeGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderNodeGroupByOutputType[P]>
        }
      >
    >


  export type ProviderNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerNode"]>

  export type ProviderNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerNode"]>

  export type ProviderNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerNode"]>

  export type ProviderNodeSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["providerNode"]>

  export type $ProviderNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderNode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string | null
      name: string | null
      data: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["providerNode"]>
    composites: {}
  }

  type ProviderNodeGetPayload<S extends boolean | null | undefined | ProviderNodeDefaultArgs> = $Result.GetResult<Prisma.$ProviderNodePayload, S>

  type ProviderNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderNodeCountAggregateInputType | true
    }

  export interface ProviderNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderNode'], meta: { name: 'ProviderNode' } }
    /**
     * Find zero or one ProviderNode that matches the filter.
     * @param {ProviderNodeFindUniqueArgs} args - Arguments to find a ProviderNode
     * @example
     * // Get one ProviderNode
     * const providerNode = await prisma.providerNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderNodeFindUniqueArgs>(args: SelectSubset<T, ProviderNodeFindUniqueArgs<ExtArgs>>): Prisma__ProviderNodeClient<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderNodeFindUniqueOrThrowArgs} args - Arguments to find a ProviderNode
     * @example
     * // Get one ProviderNode
     * const providerNode = await prisma.providerNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderNodeClient<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderNodeFindFirstArgs} args - Arguments to find a ProviderNode
     * @example
     * // Get one ProviderNode
     * const providerNode = await prisma.providerNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderNodeFindFirstArgs>(args?: SelectSubset<T, ProviderNodeFindFirstArgs<ExtArgs>>): Prisma__ProviderNodeClient<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderNodeFindFirstOrThrowArgs} args - Arguments to find a ProviderNode
     * @example
     * // Get one ProviderNode
     * const providerNode = await prisma.providerNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderNodeClient<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderNodes
     * const providerNodes = await prisma.providerNode.findMany()
     * 
     * // Get first 10 ProviderNodes
     * const providerNodes = await prisma.providerNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerNodeWithIdOnly = await prisma.providerNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderNodeFindManyArgs>(args?: SelectSubset<T, ProviderNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderNode.
     * @param {ProviderNodeCreateArgs} args - Arguments to create a ProviderNode.
     * @example
     * // Create one ProviderNode
     * const ProviderNode = await prisma.providerNode.create({
     *   data: {
     *     // ... data to create a ProviderNode
     *   }
     * })
     * 
     */
    create<T extends ProviderNodeCreateArgs>(args: SelectSubset<T, ProviderNodeCreateArgs<ExtArgs>>): Prisma__ProviderNodeClient<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderNodes.
     * @param {ProviderNodeCreateManyArgs} args - Arguments to create many ProviderNodes.
     * @example
     * // Create many ProviderNodes
     * const providerNode = await prisma.providerNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderNodeCreateManyArgs>(args?: SelectSubset<T, ProviderNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderNodes and returns the data saved in the database.
     * @param {ProviderNodeCreateManyAndReturnArgs} args - Arguments to create many ProviderNodes.
     * @example
     * // Create many ProviderNodes
     * const providerNode = await prisma.providerNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderNodes and only return the `id`
     * const providerNodeWithIdOnly = await prisma.providerNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderNode.
     * @param {ProviderNodeDeleteArgs} args - Arguments to delete one ProviderNode.
     * @example
     * // Delete one ProviderNode
     * const ProviderNode = await prisma.providerNode.delete({
     *   where: {
     *     // ... filter to delete one ProviderNode
     *   }
     * })
     * 
     */
    delete<T extends ProviderNodeDeleteArgs>(args: SelectSubset<T, ProviderNodeDeleteArgs<ExtArgs>>): Prisma__ProviderNodeClient<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderNode.
     * @param {ProviderNodeUpdateArgs} args - Arguments to update one ProviderNode.
     * @example
     * // Update one ProviderNode
     * const providerNode = await prisma.providerNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderNodeUpdateArgs>(args: SelectSubset<T, ProviderNodeUpdateArgs<ExtArgs>>): Prisma__ProviderNodeClient<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderNodes.
     * @param {ProviderNodeDeleteManyArgs} args - Arguments to filter ProviderNodes to delete.
     * @example
     * // Delete a few ProviderNodes
     * const { count } = await prisma.providerNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderNodeDeleteManyArgs>(args?: SelectSubset<T, ProviderNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderNodes
     * const providerNode = await prisma.providerNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderNodeUpdateManyArgs>(args: SelectSubset<T, ProviderNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderNodes and returns the data updated in the database.
     * @param {ProviderNodeUpdateManyAndReturnArgs} args - Arguments to update many ProviderNodes.
     * @example
     * // Update many ProviderNodes
     * const providerNode = await prisma.providerNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderNodes and only return the `id`
     * const providerNodeWithIdOnly = await prisma.providerNode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderNode.
     * @param {ProviderNodeUpsertArgs} args - Arguments to update or create a ProviderNode.
     * @example
     * // Update or create a ProviderNode
     * const providerNode = await prisma.providerNode.upsert({
     *   create: {
     *     // ... data to create a ProviderNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderNode we want to update
     *   }
     * })
     */
    upsert<T extends ProviderNodeUpsertArgs>(args: SelectSubset<T, ProviderNodeUpsertArgs<ExtArgs>>): Prisma__ProviderNodeClient<$Result.GetResult<Prisma.$ProviderNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderNodeCountArgs} args - Arguments to filter ProviderNodes to count.
     * @example
     * // Count the number of ProviderNodes
     * const count = await prisma.providerNode.count({
     *   where: {
     *     // ... the filter for the ProviderNodes we want to count
     *   }
     * })
    **/
    count<T extends ProviderNodeCountArgs>(
      args?: Subset<T, ProviderNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderNodeAggregateArgs>(args: Subset<T, ProviderNodeAggregateArgs>): Prisma.PrismaPromise<GetProviderNodeAggregateType<T>>

    /**
     * Group by ProviderNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderNodeGroupByArgs['orderBy'] }
        : { orderBy?: ProviderNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderNode model
   */
  readonly fields: ProviderNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderNode model
   */
  interface ProviderNodeFieldRefs {
    readonly id: FieldRef<"ProviderNode", 'String'>
    readonly type: FieldRef<"ProviderNode", 'String'>
    readonly name: FieldRef<"ProviderNode", 'String'>
    readonly data: FieldRef<"ProviderNode", 'Json'>
    readonly createdAt: FieldRef<"ProviderNode", 'DateTime'>
    readonly updatedAt: FieldRef<"ProviderNode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderNode findUnique
   */
  export type ProviderNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * Filter, which ProviderNode to fetch.
     */
    where: ProviderNodeWhereUniqueInput
  }

  /**
   * ProviderNode findUniqueOrThrow
   */
  export type ProviderNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * Filter, which ProviderNode to fetch.
     */
    where: ProviderNodeWhereUniqueInput
  }

  /**
   * ProviderNode findFirst
   */
  export type ProviderNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * Filter, which ProviderNode to fetch.
     */
    where?: ProviderNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderNodes to fetch.
     */
    orderBy?: ProviderNodeOrderByWithRelationInput | ProviderNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderNodes.
     */
    cursor?: ProviderNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderNodes.
     */
    distinct?: ProviderNodeScalarFieldEnum | ProviderNodeScalarFieldEnum[]
  }

  /**
   * ProviderNode findFirstOrThrow
   */
  export type ProviderNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * Filter, which ProviderNode to fetch.
     */
    where?: ProviderNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderNodes to fetch.
     */
    orderBy?: ProviderNodeOrderByWithRelationInput | ProviderNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderNodes.
     */
    cursor?: ProviderNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderNodes.
     */
    distinct?: ProviderNodeScalarFieldEnum | ProviderNodeScalarFieldEnum[]
  }

  /**
   * ProviderNode findMany
   */
  export type ProviderNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * Filter, which ProviderNodes to fetch.
     */
    where?: ProviderNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderNodes to fetch.
     */
    orderBy?: ProviderNodeOrderByWithRelationInput | ProviderNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderNodes.
     */
    cursor?: ProviderNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderNodes.
     */
    skip?: number
    distinct?: ProviderNodeScalarFieldEnum | ProviderNodeScalarFieldEnum[]
  }

  /**
   * ProviderNode create
   */
  export type ProviderNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * The data needed to create a ProviderNode.
     */
    data: XOR<ProviderNodeCreateInput, ProviderNodeUncheckedCreateInput>
  }

  /**
   * ProviderNode createMany
   */
  export type ProviderNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderNodes.
     */
    data: ProviderNodeCreateManyInput | ProviderNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderNode createManyAndReturn
   */
  export type ProviderNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderNodes.
     */
    data: ProviderNodeCreateManyInput | ProviderNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderNode update
   */
  export type ProviderNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * The data needed to update a ProviderNode.
     */
    data: XOR<ProviderNodeUpdateInput, ProviderNodeUncheckedUpdateInput>
    /**
     * Choose, which ProviderNode to update.
     */
    where: ProviderNodeWhereUniqueInput
  }

  /**
   * ProviderNode updateMany
   */
  export type ProviderNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderNodes.
     */
    data: XOR<ProviderNodeUpdateManyMutationInput, ProviderNodeUncheckedUpdateManyInput>
    /**
     * Filter which ProviderNodes to update
     */
    where?: ProviderNodeWhereInput
    /**
     * Limit how many ProviderNodes to update.
     */
    limit?: number
  }

  /**
   * ProviderNode updateManyAndReturn
   */
  export type ProviderNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * The data used to update ProviderNodes.
     */
    data: XOR<ProviderNodeUpdateManyMutationInput, ProviderNodeUncheckedUpdateManyInput>
    /**
     * Filter which ProviderNodes to update
     */
    where?: ProviderNodeWhereInput
    /**
     * Limit how many ProviderNodes to update.
     */
    limit?: number
  }

  /**
   * ProviderNode upsert
   */
  export type ProviderNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * The filter to search for the ProviderNode to update in case it exists.
     */
    where: ProviderNodeWhereUniqueInput
    /**
     * In case the ProviderNode found by the `where` argument doesn't exist, create a new ProviderNode with this data.
     */
    create: XOR<ProviderNodeCreateInput, ProviderNodeUncheckedCreateInput>
    /**
     * In case the ProviderNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderNodeUpdateInput, ProviderNodeUncheckedUpdateInput>
  }

  /**
   * ProviderNode delete
   */
  export type ProviderNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
    /**
     * Filter which ProviderNode to delete.
     */
    where: ProviderNodeWhereUniqueInput
  }

  /**
   * ProviderNode deleteMany
   */
  export type ProviderNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderNodes to delete
     */
    where?: ProviderNodeWhereInput
    /**
     * Limit how many ProviderNodes to delete.
     */
    limit?: number
  }

  /**
   * ProviderNode without action
   */
  export type ProviderNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderNode
     */
    select?: ProviderNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderNode
     */
    omit?: ProviderNodeOmit<ExtArgs> | null
  }


  /**
   * Model ProxyPool
   */

  export type AggregateProxyPool = {
    _count: ProxyPoolCountAggregateOutputType | null
    _min: ProxyPoolMinAggregateOutputType | null
    _max: ProxyPoolMaxAggregateOutputType | null
  }

  export type ProxyPoolMinAggregateOutputType = {
    id: string | null
    isActive: boolean | null
    testStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProxyPoolMaxAggregateOutputType = {
    id: string | null
    isActive: boolean | null
    testStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProxyPoolCountAggregateOutputType = {
    id: number
    isActive: number
    testStatus: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProxyPoolMinAggregateInputType = {
    id?: true
    isActive?: true
    testStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProxyPoolMaxAggregateInputType = {
    id?: true
    isActive?: true
    testStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProxyPoolCountAggregateInputType = {
    id?: true
    isActive?: true
    testStatus?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProxyPoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProxyPool to aggregate.
     */
    where?: ProxyPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProxyPools to fetch.
     */
    orderBy?: ProxyPoolOrderByWithRelationInput | ProxyPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProxyPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProxyPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProxyPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProxyPools
    **/
    _count?: true | ProxyPoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProxyPoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProxyPoolMaxAggregateInputType
  }

  export type GetProxyPoolAggregateType<T extends ProxyPoolAggregateArgs> = {
        [P in keyof T & keyof AggregateProxyPool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProxyPool[P]>
      : GetScalarType<T[P], AggregateProxyPool[P]>
  }




  export type ProxyPoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProxyPoolWhereInput
    orderBy?: ProxyPoolOrderByWithAggregationInput | ProxyPoolOrderByWithAggregationInput[]
    by: ProxyPoolScalarFieldEnum[] | ProxyPoolScalarFieldEnum
    having?: ProxyPoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProxyPoolCountAggregateInputType | true
    _min?: ProxyPoolMinAggregateInputType
    _max?: ProxyPoolMaxAggregateInputType
  }

  export type ProxyPoolGroupByOutputType = {
    id: string
    isActive: boolean
    testStatus: string | null
    data: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProxyPoolCountAggregateOutputType | null
    _min: ProxyPoolMinAggregateOutputType | null
    _max: ProxyPoolMaxAggregateOutputType | null
  }

  type GetProxyPoolGroupByPayload<T extends ProxyPoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProxyPoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProxyPoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProxyPoolGroupByOutputType[P]>
            : GetScalarType<T[P], ProxyPoolGroupByOutputType[P]>
        }
      >
    >


  export type ProxyPoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isActive?: boolean
    testStatus?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["proxyPool"]>

  export type ProxyPoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isActive?: boolean
    testStatus?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["proxyPool"]>

  export type ProxyPoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isActive?: boolean
    testStatus?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["proxyPool"]>

  export type ProxyPoolSelectScalar = {
    id?: boolean
    isActive?: boolean
    testStatus?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProxyPoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isActive" | "testStatus" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["proxyPool"]>

  export type $ProxyPoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProxyPool"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isActive: boolean
      testStatus: string | null
      data: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["proxyPool"]>
    composites: {}
  }

  type ProxyPoolGetPayload<S extends boolean | null | undefined | ProxyPoolDefaultArgs> = $Result.GetResult<Prisma.$ProxyPoolPayload, S>

  type ProxyPoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProxyPoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProxyPoolCountAggregateInputType | true
    }

  export interface ProxyPoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProxyPool'], meta: { name: 'ProxyPool' } }
    /**
     * Find zero or one ProxyPool that matches the filter.
     * @param {ProxyPoolFindUniqueArgs} args - Arguments to find a ProxyPool
     * @example
     * // Get one ProxyPool
     * const proxyPool = await prisma.proxyPool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProxyPoolFindUniqueArgs>(args: SelectSubset<T, ProxyPoolFindUniqueArgs<ExtArgs>>): Prisma__ProxyPoolClient<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProxyPool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProxyPoolFindUniqueOrThrowArgs} args - Arguments to find a ProxyPool
     * @example
     * // Get one ProxyPool
     * const proxyPool = await prisma.proxyPool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProxyPoolFindUniqueOrThrowArgs>(args: SelectSubset<T, ProxyPoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProxyPoolClient<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProxyPool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyPoolFindFirstArgs} args - Arguments to find a ProxyPool
     * @example
     * // Get one ProxyPool
     * const proxyPool = await prisma.proxyPool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProxyPoolFindFirstArgs>(args?: SelectSubset<T, ProxyPoolFindFirstArgs<ExtArgs>>): Prisma__ProxyPoolClient<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProxyPool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyPoolFindFirstOrThrowArgs} args - Arguments to find a ProxyPool
     * @example
     * // Get one ProxyPool
     * const proxyPool = await prisma.proxyPool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProxyPoolFindFirstOrThrowArgs>(args?: SelectSubset<T, ProxyPoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProxyPoolClient<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProxyPools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyPoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProxyPools
     * const proxyPools = await prisma.proxyPool.findMany()
     * 
     * // Get first 10 ProxyPools
     * const proxyPools = await prisma.proxyPool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proxyPoolWithIdOnly = await prisma.proxyPool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProxyPoolFindManyArgs>(args?: SelectSubset<T, ProxyPoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProxyPool.
     * @param {ProxyPoolCreateArgs} args - Arguments to create a ProxyPool.
     * @example
     * // Create one ProxyPool
     * const ProxyPool = await prisma.proxyPool.create({
     *   data: {
     *     // ... data to create a ProxyPool
     *   }
     * })
     * 
     */
    create<T extends ProxyPoolCreateArgs>(args: SelectSubset<T, ProxyPoolCreateArgs<ExtArgs>>): Prisma__ProxyPoolClient<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProxyPools.
     * @param {ProxyPoolCreateManyArgs} args - Arguments to create many ProxyPools.
     * @example
     * // Create many ProxyPools
     * const proxyPool = await prisma.proxyPool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProxyPoolCreateManyArgs>(args?: SelectSubset<T, ProxyPoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProxyPools and returns the data saved in the database.
     * @param {ProxyPoolCreateManyAndReturnArgs} args - Arguments to create many ProxyPools.
     * @example
     * // Create many ProxyPools
     * const proxyPool = await prisma.proxyPool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProxyPools and only return the `id`
     * const proxyPoolWithIdOnly = await prisma.proxyPool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProxyPoolCreateManyAndReturnArgs>(args?: SelectSubset<T, ProxyPoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProxyPool.
     * @param {ProxyPoolDeleteArgs} args - Arguments to delete one ProxyPool.
     * @example
     * // Delete one ProxyPool
     * const ProxyPool = await prisma.proxyPool.delete({
     *   where: {
     *     // ... filter to delete one ProxyPool
     *   }
     * })
     * 
     */
    delete<T extends ProxyPoolDeleteArgs>(args: SelectSubset<T, ProxyPoolDeleteArgs<ExtArgs>>): Prisma__ProxyPoolClient<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProxyPool.
     * @param {ProxyPoolUpdateArgs} args - Arguments to update one ProxyPool.
     * @example
     * // Update one ProxyPool
     * const proxyPool = await prisma.proxyPool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProxyPoolUpdateArgs>(args: SelectSubset<T, ProxyPoolUpdateArgs<ExtArgs>>): Prisma__ProxyPoolClient<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProxyPools.
     * @param {ProxyPoolDeleteManyArgs} args - Arguments to filter ProxyPools to delete.
     * @example
     * // Delete a few ProxyPools
     * const { count } = await prisma.proxyPool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProxyPoolDeleteManyArgs>(args?: SelectSubset<T, ProxyPoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProxyPools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyPoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProxyPools
     * const proxyPool = await prisma.proxyPool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProxyPoolUpdateManyArgs>(args: SelectSubset<T, ProxyPoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProxyPools and returns the data updated in the database.
     * @param {ProxyPoolUpdateManyAndReturnArgs} args - Arguments to update many ProxyPools.
     * @example
     * // Update many ProxyPools
     * const proxyPool = await prisma.proxyPool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProxyPools and only return the `id`
     * const proxyPoolWithIdOnly = await prisma.proxyPool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProxyPoolUpdateManyAndReturnArgs>(args: SelectSubset<T, ProxyPoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProxyPool.
     * @param {ProxyPoolUpsertArgs} args - Arguments to update or create a ProxyPool.
     * @example
     * // Update or create a ProxyPool
     * const proxyPool = await prisma.proxyPool.upsert({
     *   create: {
     *     // ... data to create a ProxyPool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProxyPool we want to update
     *   }
     * })
     */
    upsert<T extends ProxyPoolUpsertArgs>(args: SelectSubset<T, ProxyPoolUpsertArgs<ExtArgs>>): Prisma__ProxyPoolClient<$Result.GetResult<Prisma.$ProxyPoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProxyPools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyPoolCountArgs} args - Arguments to filter ProxyPools to count.
     * @example
     * // Count the number of ProxyPools
     * const count = await prisma.proxyPool.count({
     *   where: {
     *     // ... the filter for the ProxyPools we want to count
     *   }
     * })
    **/
    count<T extends ProxyPoolCountArgs>(
      args?: Subset<T, ProxyPoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProxyPoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProxyPool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyPoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProxyPoolAggregateArgs>(args: Subset<T, ProxyPoolAggregateArgs>): Prisma.PrismaPromise<GetProxyPoolAggregateType<T>>

    /**
     * Group by ProxyPool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyPoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProxyPoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProxyPoolGroupByArgs['orderBy'] }
        : { orderBy?: ProxyPoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProxyPoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProxyPoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProxyPool model
   */
  readonly fields: ProxyPoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProxyPool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProxyPoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProxyPool model
   */
  interface ProxyPoolFieldRefs {
    readonly id: FieldRef<"ProxyPool", 'String'>
    readonly isActive: FieldRef<"ProxyPool", 'Boolean'>
    readonly testStatus: FieldRef<"ProxyPool", 'String'>
    readonly data: FieldRef<"ProxyPool", 'Json'>
    readonly createdAt: FieldRef<"ProxyPool", 'DateTime'>
    readonly updatedAt: FieldRef<"ProxyPool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProxyPool findUnique
   */
  export type ProxyPoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * Filter, which ProxyPool to fetch.
     */
    where: ProxyPoolWhereUniqueInput
  }

  /**
   * ProxyPool findUniqueOrThrow
   */
  export type ProxyPoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * Filter, which ProxyPool to fetch.
     */
    where: ProxyPoolWhereUniqueInput
  }

  /**
   * ProxyPool findFirst
   */
  export type ProxyPoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * Filter, which ProxyPool to fetch.
     */
    where?: ProxyPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProxyPools to fetch.
     */
    orderBy?: ProxyPoolOrderByWithRelationInput | ProxyPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProxyPools.
     */
    cursor?: ProxyPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProxyPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProxyPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProxyPools.
     */
    distinct?: ProxyPoolScalarFieldEnum | ProxyPoolScalarFieldEnum[]
  }

  /**
   * ProxyPool findFirstOrThrow
   */
  export type ProxyPoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * Filter, which ProxyPool to fetch.
     */
    where?: ProxyPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProxyPools to fetch.
     */
    orderBy?: ProxyPoolOrderByWithRelationInput | ProxyPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProxyPools.
     */
    cursor?: ProxyPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProxyPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProxyPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProxyPools.
     */
    distinct?: ProxyPoolScalarFieldEnum | ProxyPoolScalarFieldEnum[]
  }

  /**
   * ProxyPool findMany
   */
  export type ProxyPoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * Filter, which ProxyPools to fetch.
     */
    where?: ProxyPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProxyPools to fetch.
     */
    orderBy?: ProxyPoolOrderByWithRelationInput | ProxyPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProxyPools.
     */
    cursor?: ProxyPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProxyPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProxyPools.
     */
    skip?: number
    distinct?: ProxyPoolScalarFieldEnum | ProxyPoolScalarFieldEnum[]
  }

  /**
   * ProxyPool create
   */
  export type ProxyPoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * The data needed to create a ProxyPool.
     */
    data: XOR<ProxyPoolCreateInput, ProxyPoolUncheckedCreateInput>
  }

  /**
   * ProxyPool createMany
   */
  export type ProxyPoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProxyPools.
     */
    data: ProxyPoolCreateManyInput | ProxyPoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProxyPool createManyAndReturn
   */
  export type ProxyPoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * The data used to create many ProxyPools.
     */
    data: ProxyPoolCreateManyInput | ProxyPoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProxyPool update
   */
  export type ProxyPoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * The data needed to update a ProxyPool.
     */
    data: XOR<ProxyPoolUpdateInput, ProxyPoolUncheckedUpdateInput>
    /**
     * Choose, which ProxyPool to update.
     */
    where: ProxyPoolWhereUniqueInput
  }

  /**
   * ProxyPool updateMany
   */
  export type ProxyPoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProxyPools.
     */
    data: XOR<ProxyPoolUpdateManyMutationInput, ProxyPoolUncheckedUpdateManyInput>
    /**
     * Filter which ProxyPools to update
     */
    where?: ProxyPoolWhereInput
    /**
     * Limit how many ProxyPools to update.
     */
    limit?: number
  }

  /**
   * ProxyPool updateManyAndReturn
   */
  export type ProxyPoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * The data used to update ProxyPools.
     */
    data: XOR<ProxyPoolUpdateManyMutationInput, ProxyPoolUncheckedUpdateManyInput>
    /**
     * Filter which ProxyPools to update
     */
    where?: ProxyPoolWhereInput
    /**
     * Limit how many ProxyPools to update.
     */
    limit?: number
  }

  /**
   * ProxyPool upsert
   */
  export type ProxyPoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * The filter to search for the ProxyPool to update in case it exists.
     */
    where: ProxyPoolWhereUniqueInput
    /**
     * In case the ProxyPool found by the `where` argument doesn't exist, create a new ProxyPool with this data.
     */
    create: XOR<ProxyPoolCreateInput, ProxyPoolUncheckedCreateInput>
    /**
     * In case the ProxyPool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProxyPoolUpdateInput, ProxyPoolUncheckedUpdateInput>
  }

  /**
   * ProxyPool delete
   */
  export type ProxyPoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
    /**
     * Filter which ProxyPool to delete.
     */
    where: ProxyPoolWhereUniqueInput
  }

  /**
   * ProxyPool deleteMany
   */
  export type ProxyPoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProxyPools to delete
     */
    where?: ProxyPoolWhereInput
    /**
     * Limit how many ProxyPools to delete.
     */
    limit?: number
  }

  /**
   * ProxyPool without action
   */
  export type ProxyPoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyPool
     */
    select?: ProxyPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProxyPool
     */
    omit?: ProxyPoolOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    mustChangePassword: boolean | null
    isBlocked: boolean | null
    permDashboard: boolean | null
    permChat: boolean | null
    permApi: boolean | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    mustChangePassword: boolean | null
    isBlocked: boolean | null
    permDashboard: boolean | null
    permChat: boolean | null
    permApi: boolean | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    mustChangePassword: number
    isBlocked: number
    permDashboard: number
    permChat: number
    permApi: number
    projectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    mustChangePassword?: true
    isBlocked?: true
    permDashboard?: true
    permChat?: true
    permApi?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    mustChangePassword?: true
    isBlocked?: true
    permDashboard?: true
    permChat?: true
    permApi?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    mustChangePassword?: true
    isBlocked?: true
    permDashboard?: true
    permChat?: true
    permApi?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    passwordHash: string
    mustChangePassword: boolean
    isBlocked: boolean
    permDashboard: boolean
    permChat: boolean
    permApi: boolean
    projectId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    mustChangePassword?: boolean
    isBlocked?: boolean
    permDashboard?: boolean
    permChat?: boolean
    permApi?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    mustChangePassword?: boolean
    isBlocked?: boolean
    permDashboard?: boolean
    permChat?: boolean
    permApi?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    mustChangePassword?: boolean
    isBlocked?: boolean
    permDashboard?: boolean
    permChat?: boolean
    permApi?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    mustChangePassword?: boolean
    isBlocked?: boolean
    permDashboard?: boolean
    permChat?: boolean
    permApi?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "mustChangePassword" | "isBlocked" | "permDashboard" | "permChat" | "permApi" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      passwordHash: string
      mustChangePassword: boolean
      isBlocked: boolean
      permDashboard: boolean
      permChat: boolean
      permApi: boolean
      projectId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly mustChangePassword: FieldRef<"User", 'Boolean'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
    readonly permDashboard: FieldRef<"User", 'Boolean'>
    readonly permChat: FieldRef<"User", 'Boolean'>
    readonly permApi: FieldRef<"User", 'Boolean'>
    readonly projectId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    code: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly code: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    machineId: string | null
    userId: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    machineId: string | null
    userId: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    key: number
    name: number
    machineId: number
    userId: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    machineId?: true
    userId?: true
    isActive?: true
    createdAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    machineId?: true
    userId?: true
    isActive?: true
    createdAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    machineId?: true
    userId?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    key: string
    name: string | null
    machineId: string | null
    userId: string | null
    isActive: boolean
    createdAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    machineId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    machineId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    machineId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    machineId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name" | "machineId" | "userId" | "isActive" | "createdAt", ExtArgs["result"]["apiKey"]>

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name: string | null
      machineId: string | null
      userId: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly machineId: FieldRef<"ApiKey", 'String'>
    readonly userId: FieldRef<"ApiKey", 'String'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
  }


  /**
   * Model Combo
   */

  export type AggregateCombo = {
    _count: ComboCountAggregateOutputType | null
    _min: ComboMinAggregateOutputType | null
    _max: ComboMaxAggregateOutputType | null
  }

  export type ComboMinAggregateOutputType = {
    id: string | null
    name: string | null
    kind: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComboMaxAggregateOutputType = {
    id: string | null
    name: string | null
    kind: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComboCountAggregateOutputType = {
    id: number
    name: number
    kind: number
    models: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComboMinAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComboMaxAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComboCountAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    models?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComboAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combo to aggregate.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Combos
    **/
    _count?: true | ComboCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComboMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComboMaxAggregateInputType
  }

  export type GetComboAggregateType<T extends ComboAggregateArgs> = {
        [P in keyof T & keyof AggregateCombo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCombo[P]>
      : GetScalarType<T[P], AggregateCombo[P]>
  }




  export type ComboGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComboWhereInput
    orderBy?: ComboOrderByWithAggregationInput | ComboOrderByWithAggregationInput[]
    by: ComboScalarFieldEnum[] | ComboScalarFieldEnum
    having?: ComboScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComboCountAggregateInputType | true
    _min?: ComboMinAggregateInputType
    _max?: ComboMaxAggregateInputType
  }

  export type ComboGroupByOutputType = {
    id: string
    name: string
    kind: string | null
    models: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ComboCountAggregateOutputType | null
    _min: ComboMinAggregateOutputType | null
    _max: ComboMaxAggregateOutputType | null
  }

  type GetComboGroupByPayload<T extends ComboGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComboGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComboGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComboGroupByOutputType[P]>
            : GetScalarType<T[P], ComboGroupByOutputType[P]>
        }
      >
    >


  export type ComboSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    kind?: boolean
    models?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["combo"]>

  export type ComboSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    kind?: boolean
    models?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["combo"]>

  export type ComboSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    kind?: boolean
    models?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["combo"]>

  export type ComboSelectScalar = {
    id?: boolean
    name?: boolean
    kind?: boolean
    models?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComboOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "kind" | "models" | "createdAt" | "updatedAt", ExtArgs["result"]["combo"]>

  export type $ComboPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Combo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      kind: string | null
      models: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["combo"]>
    composites: {}
  }

  type ComboGetPayload<S extends boolean | null | undefined | ComboDefaultArgs> = $Result.GetResult<Prisma.$ComboPayload, S>

  type ComboCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComboFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComboCountAggregateInputType | true
    }

  export interface ComboDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Combo'], meta: { name: 'Combo' } }
    /**
     * Find zero or one Combo that matches the filter.
     * @param {ComboFindUniqueArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComboFindUniqueArgs>(args: SelectSubset<T, ComboFindUniqueArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Combo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComboFindUniqueOrThrowArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComboFindUniqueOrThrowArgs>(args: SelectSubset<T, ComboFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboFindFirstArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComboFindFirstArgs>(args?: SelectSubset<T, ComboFindFirstArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboFindFirstOrThrowArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComboFindFirstOrThrowArgs>(args?: SelectSubset<T, ComboFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Combos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Combos
     * const combos = await prisma.combo.findMany()
     * 
     * // Get first 10 Combos
     * const combos = await prisma.combo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comboWithIdOnly = await prisma.combo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComboFindManyArgs>(args?: SelectSubset<T, ComboFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Combo.
     * @param {ComboCreateArgs} args - Arguments to create a Combo.
     * @example
     * // Create one Combo
     * const Combo = await prisma.combo.create({
     *   data: {
     *     // ... data to create a Combo
     *   }
     * })
     * 
     */
    create<T extends ComboCreateArgs>(args: SelectSubset<T, ComboCreateArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Combos.
     * @param {ComboCreateManyArgs} args - Arguments to create many Combos.
     * @example
     * // Create many Combos
     * const combo = await prisma.combo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComboCreateManyArgs>(args?: SelectSubset<T, ComboCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Combos and returns the data saved in the database.
     * @param {ComboCreateManyAndReturnArgs} args - Arguments to create many Combos.
     * @example
     * // Create many Combos
     * const combo = await prisma.combo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Combos and only return the `id`
     * const comboWithIdOnly = await prisma.combo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComboCreateManyAndReturnArgs>(args?: SelectSubset<T, ComboCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Combo.
     * @param {ComboDeleteArgs} args - Arguments to delete one Combo.
     * @example
     * // Delete one Combo
     * const Combo = await prisma.combo.delete({
     *   where: {
     *     // ... filter to delete one Combo
     *   }
     * })
     * 
     */
    delete<T extends ComboDeleteArgs>(args: SelectSubset<T, ComboDeleteArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Combo.
     * @param {ComboUpdateArgs} args - Arguments to update one Combo.
     * @example
     * // Update one Combo
     * const combo = await prisma.combo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComboUpdateArgs>(args: SelectSubset<T, ComboUpdateArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Combos.
     * @param {ComboDeleteManyArgs} args - Arguments to filter Combos to delete.
     * @example
     * // Delete a few Combos
     * const { count } = await prisma.combo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComboDeleteManyArgs>(args?: SelectSubset<T, ComboDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Combos
     * const combo = await prisma.combo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComboUpdateManyArgs>(args: SelectSubset<T, ComboUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combos and returns the data updated in the database.
     * @param {ComboUpdateManyAndReturnArgs} args - Arguments to update many Combos.
     * @example
     * // Update many Combos
     * const combo = await prisma.combo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Combos and only return the `id`
     * const comboWithIdOnly = await prisma.combo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComboUpdateManyAndReturnArgs>(args: SelectSubset<T, ComboUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Combo.
     * @param {ComboUpsertArgs} args - Arguments to update or create a Combo.
     * @example
     * // Update or create a Combo
     * const combo = await prisma.combo.upsert({
     *   create: {
     *     // ... data to create a Combo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Combo we want to update
     *   }
     * })
     */
    upsert<T extends ComboUpsertArgs>(args: SelectSubset<T, ComboUpsertArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Combos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboCountArgs} args - Arguments to filter Combos to count.
     * @example
     * // Count the number of Combos
     * const count = await prisma.combo.count({
     *   where: {
     *     // ... the filter for the Combos we want to count
     *   }
     * })
    **/
    count<T extends ComboCountArgs>(
      args?: Subset<T, ComboCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComboCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Combo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComboAggregateArgs>(args: Subset<T, ComboAggregateArgs>): Prisma.PrismaPromise<GetComboAggregateType<T>>

    /**
     * Group by Combo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComboGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComboGroupByArgs['orderBy'] }
        : { orderBy?: ComboGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComboGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Combo model
   */
  readonly fields: ComboFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Combo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComboClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Combo model
   */
  interface ComboFieldRefs {
    readonly id: FieldRef<"Combo", 'String'>
    readonly name: FieldRef<"Combo", 'String'>
    readonly kind: FieldRef<"Combo", 'String'>
    readonly models: FieldRef<"Combo", 'Json'>
    readonly createdAt: FieldRef<"Combo", 'DateTime'>
    readonly updatedAt: FieldRef<"Combo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Combo findUnique
   */
  export type ComboFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo findUniqueOrThrow
   */
  export type ComboFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo findFirst
   */
  export type ComboFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combos.
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combos.
     */
    distinct?: ComboScalarFieldEnum | ComboScalarFieldEnum[]
  }

  /**
   * Combo findFirstOrThrow
   */
  export type ComboFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combos.
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combos.
     */
    distinct?: ComboScalarFieldEnum | ComboScalarFieldEnum[]
  }

  /**
   * Combo findMany
   */
  export type ComboFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Filter, which Combos to fetch.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Combos.
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    distinct?: ComboScalarFieldEnum | ComboScalarFieldEnum[]
  }

  /**
   * Combo create
   */
  export type ComboCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * The data needed to create a Combo.
     */
    data: XOR<ComboCreateInput, ComboUncheckedCreateInput>
  }

  /**
   * Combo createMany
   */
  export type ComboCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Combos.
     */
    data: ComboCreateManyInput | ComboCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Combo createManyAndReturn
   */
  export type ComboCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * The data used to create many Combos.
     */
    data: ComboCreateManyInput | ComboCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Combo update
   */
  export type ComboUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * The data needed to update a Combo.
     */
    data: XOR<ComboUpdateInput, ComboUncheckedUpdateInput>
    /**
     * Choose, which Combo to update.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo updateMany
   */
  export type ComboUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Combos.
     */
    data: XOR<ComboUpdateManyMutationInput, ComboUncheckedUpdateManyInput>
    /**
     * Filter which Combos to update
     */
    where?: ComboWhereInput
    /**
     * Limit how many Combos to update.
     */
    limit?: number
  }

  /**
   * Combo updateManyAndReturn
   */
  export type ComboUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * The data used to update Combos.
     */
    data: XOR<ComboUpdateManyMutationInput, ComboUncheckedUpdateManyInput>
    /**
     * Filter which Combos to update
     */
    where?: ComboWhereInput
    /**
     * Limit how many Combos to update.
     */
    limit?: number
  }

  /**
   * Combo upsert
   */
  export type ComboUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * The filter to search for the Combo to update in case it exists.
     */
    where: ComboWhereUniqueInput
    /**
     * In case the Combo found by the `where` argument doesn't exist, create a new Combo with this data.
     */
    create: XOR<ComboCreateInput, ComboUncheckedCreateInput>
    /**
     * In case the Combo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComboUpdateInput, ComboUncheckedUpdateInput>
  }

  /**
   * Combo delete
   */
  export type ComboDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Filter which Combo to delete.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo deleteMany
   */
  export type ComboDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combos to delete
     */
    where?: ComboWhereInput
    /**
     * Limit how many Combos to delete.
     */
    limit?: number
  }

  /**
   * Combo without action
   */
  export type ComboDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
  }


  /**
   * Model Kv
   */

  export type AggregateKv = {
    _count: KvCountAggregateOutputType | null
    _min: KvMinAggregateOutputType | null
    _max: KvMaxAggregateOutputType | null
  }

  export type KvMinAggregateOutputType = {
    scope: string | null
    key: string | null
  }

  export type KvMaxAggregateOutputType = {
    scope: string | null
    key: string | null
  }

  export type KvCountAggregateOutputType = {
    scope: number
    key: number
    value: number
    _all: number
  }


  export type KvMinAggregateInputType = {
    scope?: true
    key?: true
  }

  export type KvMaxAggregateInputType = {
    scope?: true
    key?: true
  }

  export type KvCountAggregateInputType = {
    scope?: true
    key?: true
    value?: true
    _all?: true
  }

  export type KvAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kv to aggregate.
     */
    where?: KvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kvs to fetch.
     */
    orderBy?: KvOrderByWithRelationInput | KvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kvs
    **/
    _count?: true | KvCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KvMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KvMaxAggregateInputType
  }

  export type GetKvAggregateType<T extends KvAggregateArgs> = {
        [P in keyof T & keyof AggregateKv]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKv[P]>
      : GetScalarType<T[P], AggregateKv[P]>
  }




  export type KvGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KvWhereInput
    orderBy?: KvOrderByWithAggregationInput | KvOrderByWithAggregationInput[]
    by: KvScalarFieldEnum[] | KvScalarFieldEnum
    having?: KvScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KvCountAggregateInputType | true
    _min?: KvMinAggregateInputType
    _max?: KvMaxAggregateInputType
  }

  export type KvGroupByOutputType = {
    scope: string
    key: string
    value: JsonValue
    _count: KvCountAggregateOutputType | null
    _min: KvMinAggregateOutputType | null
    _max: KvMaxAggregateOutputType | null
  }

  type GetKvGroupByPayload<T extends KvGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KvGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KvGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KvGroupByOutputType[P]>
            : GetScalarType<T[P], KvGroupByOutputType[P]>
        }
      >
    >


  export type KvSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scope?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["kv"]>

  export type KvSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scope?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["kv"]>

  export type KvSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scope?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["kv"]>

  export type KvSelectScalar = {
    scope?: boolean
    key?: boolean
    value?: boolean
  }

  export type KvOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scope" | "key" | "value", ExtArgs["result"]["kv"]>

  export type $KvPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kv"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      scope: string
      key: string
      value: Prisma.JsonValue
    }, ExtArgs["result"]["kv"]>
    composites: {}
  }

  type KvGetPayload<S extends boolean | null | undefined | KvDefaultArgs> = $Result.GetResult<Prisma.$KvPayload, S>

  type KvCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KvFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KvCountAggregateInputType | true
    }

  export interface KvDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kv'], meta: { name: 'Kv' } }
    /**
     * Find zero or one Kv that matches the filter.
     * @param {KvFindUniqueArgs} args - Arguments to find a Kv
     * @example
     * // Get one Kv
     * const kv = await prisma.kv.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KvFindUniqueArgs>(args: SelectSubset<T, KvFindUniqueArgs<ExtArgs>>): Prisma__KvClient<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kv that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KvFindUniqueOrThrowArgs} args - Arguments to find a Kv
     * @example
     * // Get one Kv
     * const kv = await prisma.kv.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KvFindUniqueOrThrowArgs>(args: SelectSubset<T, KvFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KvClient<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kv that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvFindFirstArgs} args - Arguments to find a Kv
     * @example
     * // Get one Kv
     * const kv = await prisma.kv.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KvFindFirstArgs>(args?: SelectSubset<T, KvFindFirstArgs<ExtArgs>>): Prisma__KvClient<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kv that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvFindFirstOrThrowArgs} args - Arguments to find a Kv
     * @example
     * // Get one Kv
     * const kv = await prisma.kv.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KvFindFirstOrThrowArgs>(args?: SelectSubset<T, KvFindFirstOrThrowArgs<ExtArgs>>): Prisma__KvClient<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kvs
     * const kvs = await prisma.kv.findMany()
     * 
     * // Get first 10 Kvs
     * const kvs = await prisma.kv.findMany({ take: 10 })
     * 
     * // Only select the `scope`
     * const kvWithScopeOnly = await prisma.kv.findMany({ select: { scope: true } })
     * 
     */
    findMany<T extends KvFindManyArgs>(args?: SelectSubset<T, KvFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kv.
     * @param {KvCreateArgs} args - Arguments to create a Kv.
     * @example
     * // Create one Kv
     * const Kv = await prisma.kv.create({
     *   data: {
     *     // ... data to create a Kv
     *   }
     * })
     * 
     */
    create<T extends KvCreateArgs>(args: SelectSubset<T, KvCreateArgs<ExtArgs>>): Prisma__KvClient<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kvs.
     * @param {KvCreateManyArgs} args - Arguments to create many Kvs.
     * @example
     * // Create many Kvs
     * const kv = await prisma.kv.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KvCreateManyArgs>(args?: SelectSubset<T, KvCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kvs and returns the data saved in the database.
     * @param {KvCreateManyAndReturnArgs} args - Arguments to create many Kvs.
     * @example
     * // Create many Kvs
     * const kv = await prisma.kv.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kvs and only return the `scope`
     * const kvWithScopeOnly = await prisma.kv.createManyAndReturn({
     *   select: { scope: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KvCreateManyAndReturnArgs>(args?: SelectSubset<T, KvCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kv.
     * @param {KvDeleteArgs} args - Arguments to delete one Kv.
     * @example
     * // Delete one Kv
     * const Kv = await prisma.kv.delete({
     *   where: {
     *     // ... filter to delete one Kv
     *   }
     * })
     * 
     */
    delete<T extends KvDeleteArgs>(args: SelectSubset<T, KvDeleteArgs<ExtArgs>>): Prisma__KvClient<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kv.
     * @param {KvUpdateArgs} args - Arguments to update one Kv.
     * @example
     * // Update one Kv
     * const kv = await prisma.kv.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KvUpdateArgs>(args: SelectSubset<T, KvUpdateArgs<ExtArgs>>): Prisma__KvClient<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kvs.
     * @param {KvDeleteManyArgs} args - Arguments to filter Kvs to delete.
     * @example
     * // Delete a few Kvs
     * const { count } = await prisma.kv.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KvDeleteManyArgs>(args?: SelectSubset<T, KvDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kvs
     * const kv = await prisma.kv.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KvUpdateManyArgs>(args: SelectSubset<T, KvUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kvs and returns the data updated in the database.
     * @param {KvUpdateManyAndReturnArgs} args - Arguments to update many Kvs.
     * @example
     * // Update many Kvs
     * const kv = await prisma.kv.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kvs and only return the `scope`
     * const kvWithScopeOnly = await prisma.kv.updateManyAndReturn({
     *   select: { scope: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KvUpdateManyAndReturnArgs>(args: SelectSubset<T, KvUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kv.
     * @param {KvUpsertArgs} args - Arguments to update or create a Kv.
     * @example
     * // Update or create a Kv
     * const kv = await prisma.kv.upsert({
     *   create: {
     *     // ... data to create a Kv
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kv we want to update
     *   }
     * })
     */
    upsert<T extends KvUpsertArgs>(args: SelectSubset<T, KvUpsertArgs<ExtArgs>>): Prisma__KvClient<$Result.GetResult<Prisma.$KvPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvCountArgs} args - Arguments to filter Kvs to count.
     * @example
     * // Count the number of Kvs
     * const count = await prisma.kv.count({
     *   where: {
     *     // ... the filter for the Kvs we want to count
     *   }
     * })
    **/
    count<T extends KvCountArgs>(
      args?: Subset<T, KvCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KvCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KvAggregateArgs>(args: Subset<T, KvAggregateArgs>): Prisma.PrismaPromise<GetKvAggregateType<T>>

    /**
     * Group by Kv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KvGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KvGroupByArgs['orderBy'] }
        : { orderBy?: KvGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KvGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKvGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kv model
   */
  readonly fields: KvFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kv.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KvClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kv model
   */
  interface KvFieldRefs {
    readonly scope: FieldRef<"Kv", 'String'>
    readonly key: FieldRef<"Kv", 'String'>
    readonly value: FieldRef<"Kv", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Kv findUnique
   */
  export type KvFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * Filter, which Kv to fetch.
     */
    where: KvWhereUniqueInput
  }

  /**
   * Kv findUniqueOrThrow
   */
  export type KvFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * Filter, which Kv to fetch.
     */
    where: KvWhereUniqueInput
  }

  /**
   * Kv findFirst
   */
  export type KvFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * Filter, which Kv to fetch.
     */
    where?: KvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kvs to fetch.
     */
    orderBy?: KvOrderByWithRelationInput | KvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kvs.
     */
    cursor?: KvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kvs.
     */
    distinct?: KvScalarFieldEnum | KvScalarFieldEnum[]
  }

  /**
   * Kv findFirstOrThrow
   */
  export type KvFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * Filter, which Kv to fetch.
     */
    where?: KvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kvs to fetch.
     */
    orderBy?: KvOrderByWithRelationInput | KvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kvs.
     */
    cursor?: KvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kvs.
     */
    distinct?: KvScalarFieldEnum | KvScalarFieldEnum[]
  }

  /**
   * Kv findMany
   */
  export type KvFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * Filter, which Kvs to fetch.
     */
    where?: KvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kvs to fetch.
     */
    orderBy?: KvOrderByWithRelationInput | KvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kvs.
     */
    cursor?: KvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kvs.
     */
    skip?: number
    distinct?: KvScalarFieldEnum | KvScalarFieldEnum[]
  }

  /**
   * Kv create
   */
  export type KvCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * The data needed to create a Kv.
     */
    data: XOR<KvCreateInput, KvUncheckedCreateInput>
  }

  /**
   * Kv createMany
   */
  export type KvCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kvs.
     */
    data: KvCreateManyInput | KvCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kv createManyAndReturn
   */
  export type KvCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * The data used to create many Kvs.
     */
    data: KvCreateManyInput | KvCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kv update
   */
  export type KvUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * The data needed to update a Kv.
     */
    data: XOR<KvUpdateInput, KvUncheckedUpdateInput>
    /**
     * Choose, which Kv to update.
     */
    where: KvWhereUniqueInput
  }

  /**
   * Kv updateMany
   */
  export type KvUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kvs.
     */
    data: XOR<KvUpdateManyMutationInput, KvUncheckedUpdateManyInput>
    /**
     * Filter which Kvs to update
     */
    where?: KvWhereInput
    /**
     * Limit how many Kvs to update.
     */
    limit?: number
  }

  /**
   * Kv updateManyAndReturn
   */
  export type KvUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * The data used to update Kvs.
     */
    data: XOR<KvUpdateManyMutationInput, KvUncheckedUpdateManyInput>
    /**
     * Filter which Kvs to update
     */
    where?: KvWhereInput
    /**
     * Limit how many Kvs to update.
     */
    limit?: number
  }

  /**
   * Kv upsert
   */
  export type KvUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * The filter to search for the Kv to update in case it exists.
     */
    where: KvWhereUniqueInput
    /**
     * In case the Kv found by the `where` argument doesn't exist, create a new Kv with this data.
     */
    create: XOR<KvCreateInput, KvUncheckedCreateInput>
    /**
     * In case the Kv was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KvUpdateInput, KvUncheckedUpdateInput>
  }

  /**
   * Kv delete
   */
  export type KvDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
    /**
     * Filter which Kv to delete.
     */
    where: KvWhereUniqueInput
  }

  /**
   * Kv deleteMany
   */
  export type KvDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kvs to delete
     */
    where?: KvWhereInput
    /**
     * Limit how many Kvs to delete.
     */
    limit?: number
  }

  /**
   * Kv without action
   */
  export type KvDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kv
     */
    select?: KvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kv
     */
    omit?: KvOmit<ExtArgs> | null
  }


  /**
   * Model UsageHistory
   */

  export type AggregateUsageHistory = {
    _count: UsageHistoryCountAggregateOutputType | null
    _avg: UsageHistoryAvgAggregateOutputType | null
    _sum: UsageHistorySumAggregateOutputType | null
    _min: UsageHistoryMinAggregateOutputType | null
    _max: UsageHistoryMaxAggregateOutputType | null
  }

  export type UsageHistoryAvgAggregateOutputType = {
    id: number | null
    promptTokens: number | null
    completionTokens: number | null
    cost: number | null
  }

  export type UsageHistorySumAggregateOutputType = {
    id: number | null
    promptTokens: number | null
    completionTokens: number | null
    cost: number | null
  }

  export type UsageHistoryMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    provider: string | null
    model: string | null
    connectionId: string | null
    apiKey: string | null
    endpoint: string | null
    promptTokens: number | null
    completionTokens: number | null
    cost: number | null
    status: string | null
  }

  export type UsageHistoryMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    provider: string | null
    model: string | null
    connectionId: string | null
    apiKey: string | null
    endpoint: string | null
    promptTokens: number | null
    completionTokens: number | null
    cost: number | null
    status: string | null
  }

  export type UsageHistoryCountAggregateOutputType = {
    id: number
    timestamp: number
    provider: number
    model: number
    connectionId: number
    apiKey: number
    endpoint: number
    promptTokens: number
    completionTokens: number
    cost: number
    status: number
    tokens: number
    meta: number
    _all: number
  }


  export type UsageHistoryAvgAggregateInputType = {
    id?: true
    promptTokens?: true
    completionTokens?: true
    cost?: true
  }

  export type UsageHistorySumAggregateInputType = {
    id?: true
    promptTokens?: true
    completionTokens?: true
    cost?: true
  }

  export type UsageHistoryMinAggregateInputType = {
    id?: true
    timestamp?: true
    provider?: true
    model?: true
    connectionId?: true
    apiKey?: true
    endpoint?: true
    promptTokens?: true
    completionTokens?: true
    cost?: true
    status?: true
  }

  export type UsageHistoryMaxAggregateInputType = {
    id?: true
    timestamp?: true
    provider?: true
    model?: true
    connectionId?: true
    apiKey?: true
    endpoint?: true
    promptTokens?: true
    completionTokens?: true
    cost?: true
    status?: true
  }

  export type UsageHistoryCountAggregateInputType = {
    id?: true
    timestamp?: true
    provider?: true
    model?: true
    connectionId?: true
    apiKey?: true
    endpoint?: true
    promptTokens?: true
    completionTokens?: true
    cost?: true
    status?: true
    tokens?: true
    meta?: true
    _all?: true
  }

  export type UsageHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageHistory to aggregate.
     */
    where?: UsageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageHistories to fetch.
     */
    orderBy?: UsageHistoryOrderByWithRelationInput | UsageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageHistories
    **/
    _count?: true | UsageHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageHistoryMaxAggregateInputType
  }

  export type GetUsageHistoryAggregateType<T extends UsageHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageHistory[P]>
      : GetScalarType<T[P], AggregateUsageHistory[P]>
  }




  export type UsageHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageHistoryWhereInput
    orderBy?: UsageHistoryOrderByWithAggregationInput | UsageHistoryOrderByWithAggregationInput[]
    by: UsageHistoryScalarFieldEnum[] | UsageHistoryScalarFieldEnum
    having?: UsageHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageHistoryCountAggregateInputType | true
    _avg?: UsageHistoryAvgAggregateInputType
    _sum?: UsageHistorySumAggregateInputType
    _min?: UsageHistoryMinAggregateInputType
    _max?: UsageHistoryMaxAggregateInputType
  }

  export type UsageHistoryGroupByOutputType = {
    id: number
    timestamp: Date
    provider: string | null
    model: string | null
    connectionId: string | null
    apiKey: string | null
    endpoint: string | null
    promptTokens: number
    completionTokens: number
    cost: number
    status: string | null
    tokens: JsonValue | null
    meta: JsonValue | null
    _count: UsageHistoryCountAggregateOutputType | null
    _avg: UsageHistoryAvgAggregateOutputType | null
    _sum: UsageHistorySumAggregateOutputType | null
    _min: UsageHistoryMinAggregateOutputType | null
    _max: UsageHistoryMaxAggregateOutputType | null
  }

  type GetUsageHistoryGroupByPayload<T extends UsageHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], UsageHistoryGroupByOutputType[P]>
        }
      >
    >


  export type UsageHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    provider?: boolean
    model?: boolean
    connectionId?: boolean
    apiKey?: boolean
    endpoint?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    cost?: boolean
    status?: boolean
    tokens?: boolean
    meta?: boolean
  }, ExtArgs["result"]["usageHistory"]>

  export type UsageHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    provider?: boolean
    model?: boolean
    connectionId?: boolean
    apiKey?: boolean
    endpoint?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    cost?: boolean
    status?: boolean
    tokens?: boolean
    meta?: boolean
  }, ExtArgs["result"]["usageHistory"]>

  export type UsageHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    provider?: boolean
    model?: boolean
    connectionId?: boolean
    apiKey?: boolean
    endpoint?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    cost?: boolean
    status?: boolean
    tokens?: boolean
    meta?: boolean
  }, ExtArgs["result"]["usageHistory"]>

  export type UsageHistorySelectScalar = {
    id?: boolean
    timestamp?: boolean
    provider?: boolean
    model?: boolean
    connectionId?: boolean
    apiKey?: boolean
    endpoint?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    cost?: boolean
    status?: boolean
    tokens?: boolean
    meta?: boolean
  }

  export type UsageHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "provider" | "model" | "connectionId" | "apiKey" | "endpoint" | "promptTokens" | "completionTokens" | "cost" | "status" | "tokens" | "meta", ExtArgs["result"]["usageHistory"]>

  export type $UsageHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      provider: string | null
      model: string | null
      connectionId: string | null
      apiKey: string | null
      endpoint: string | null
      promptTokens: number
      completionTokens: number
      cost: number
      status: string | null
      tokens: Prisma.JsonValue | null
      meta: Prisma.JsonValue | null
    }, ExtArgs["result"]["usageHistory"]>
    composites: {}
  }

  type UsageHistoryGetPayload<S extends boolean | null | undefined | UsageHistoryDefaultArgs> = $Result.GetResult<Prisma.$UsageHistoryPayload, S>

  type UsageHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageHistoryCountAggregateInputType | true
    }

  export interface UsageHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageHistory'], meta: { name: 'UsageHistory' } }
    /**
     * Find zero or one UsageHistory that matches the filter.
     * @param {UsageHistoryFindUniqueArgs} args - Arguments to find a UsageHistory
     * @example
     * // Get one UsageHistory
     * const usageHistory = await prisma.usageHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageHistoryFindUniqueArgs>(args: SelectSubset<T, UsageHistoryFindUniqueArgs<ExtArgs>>): Prisma__UsageHistoryClient<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageHistoryFindUniqueOrThrowArgs} args - Arguments to find a UsageHistory
     * @example
     * // Get one UsageHistory
     * const usageHistory = await prisma.usageHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageHistoryClient<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageHistoryFindFirstArgs} args - Arguments to find a UsageHistory
     * @example
     * // Get one UsageHistory
     * const usageHistory = await prisma.usageHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageHistoryFindFirstArgs>(args?: SelectSubset<T, UsageHistoryFindFirstArgs<ExtArgs>>): Prisma__UsageHistoryClient<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageHistoryFindFirstOrThrowArgs} args - Arguments to find a UsageHistory
     * @example
     * // Get one UsageHistory
     * const usageHistory = await prisma.usageHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageHistoryClient<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageHistories
     * const usageHistories = await prisma.usageHistory.findMany()
     * 
     * // Get first 10 UsageHistories
     * const usageHistories = await prisma.usageHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageHistoryWithIdOnly = await prisma.usageHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageHistoryFindManyArgs>(args?: SelectSubset<T, UsageHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageHistory.
     * @param {UsageHistoryCreateArgs} args - Arguments to create a UsageHistory.
     * @example
     * // Create one UsageHistory
     * const UsageHistory = await prisma.usageHistory.create({
     *   data: {
     *     // ... data to create a UsageHistory
     *   }
     * })
     * 
     */
    create<T extends UsageHistoryCreateArgs>(args: SelectSubset<T, UsageHistoryCreateArgs<ExtArgs>>): Prisma__UsageHistoryClient<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageHistories.
     * @param {UsageHistoryCreateManyArgs} args - Arguments to create many UsageHistories.
     * @example
     * // Create many UsageHistories
     * const usageHistory = await prisma.usageHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageHistoryCreateManyArgs>(args?: SelectSubset<T, UsageHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageHistories and returns the data saved in the database.
     * @param {UsageHistoryCreateManyAndReturnArgs} args - Arguments to create many UsageHistories.
     * @example
     * // Create many UsageHistories
     * const usageHistory = await prisma.usageHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageHistories and only return the `id`
     * const usageHistoryWithIdOnly = await prisma.usageHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageHistory.
     * @param {UsageHistoryDeleteArgs} args - Arguments to delete one UsageHistory.
     * @example
     * // Delete one UsageHistory
     * const UsageHistory = await prisma.usageHistory.delete({
     *   where: {
     *     // ... filter to delete one UsageHistory
     *   }
     * })
     * 
     */
    delete<T extends UsageHistoryDeleteArgs>(args: SelectSubset<T, UsageHistoryDeleteArgs<ExtArgs>>): Prisma__UsageHistoryClient<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageHistory.
     * @param {UsageHistoryUpdateArgs} args - Arguments to update one UsageHistory.
     * @example
     * // Update one UsageHistory
     * const usageHistory = await prisma.usageHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageHistoryUpdateArgs>(args: SelectSubset<T, UsageHistoryUpdateArgs<ExtArgs>>): Prisma__UsageHistoryClient<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageHistories.
     * @param {UsageHistoryDeleteManyArgs} args - Arguments to filter UsageHistories to delete.
     * @example
     * // Delete a few UsageHistories
     * const { count } = await prisma.usageHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageHistoryDeleteManyArgs>(args?: SelectSubset<T, UsageHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageHistories
     * const usageHistory = await prisma.usageHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageHistoryUpdateManyArgs>(args: SelectSubset<T, UsageHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageHistories and returns the data updated in the database.
     * @param {UsageHistoryUpdateManyAndReturnArgs} args - Arguments to update many UsageHistories.
     * @example
     * // Update many UsageHistories
     * const usageHistory = await prisma.usageHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageHistories and only return the `id`
     * const usageHistoryWithIdOnly = await prisma.usageHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsageHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageHistory.
     * @param {UsageHistoryUpsertArgs} args - Arguments to update or create a UsageHistory.
     * @example
     * // Update or create a UsageHistory
     * const usageHistory = await prisma.usageHistory.upsert({
     *   create: {
     *     // ... data to create a UsageHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageHistory we want to update
     *   }
     * })
     */
    upsert<T extends UsageHistoryUpsertArgs>(args: SelectSubset<T, UsageHistoryUpsertArgs<ExtArgs>>): Prisma__UsageHistoryClient<$Result.GetResult<Prisma.$UsageHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageHistoryCountArgs} args - Arguments to filter UsageHistories to count.
     * @example
     * // Count the number of UsageHistories
     * const count = await prisma.usageHistory.count({
     *   where: {
     *     // ... the filter for the UsageHistories we want to count
     *   }
     * })
    **/
    count<T extends UsageHistoryCountArgs>(
      args?: Subset<T, UsageHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageHistoryAggregateArgs>(args: Subset<T, UsageHistoryAggregateArgs>): Prisma.PrismaPromise<GetUsageHistoryAggregateType<T>>

    /**
     * Group by UsageHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageHistoryGroupByArgs['orderBy'] }
        : { orderBy?: UsageHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageHistory model
   */
  readonly fields: UsageHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageHistory model
   */
  interface UsageHistoryFieldRefs {
    readonly id: FieldRef<"UsageHistory", 'Int'>
    readonly timestamp: FieldRef<"UsageHistory", 'DateTime'>
    readonly provider: FieldRef<"UsageHistory", 'String'>
    readonly model: FieldRef<"UsageHistory", 'String'>
    readonly connectionId: FieldRef<"UsageHistory", 'String'>
    readonly apiKey: FieldRef<"UsageHistory", 'String'>
    readonly endpoint: FieldRef<"UsageHistory", 'String'>
    readonly promptTokens: FieldRef<"UsageHistory", 'Int'>
    readonly completionTokens: FieldRef<"UsageHistory", 'Int'>
    readonly cost: FieldRef<"UsageHistory", 'Float'>
    readonly status: FieldRef<"UsageHistory", 'String'>
    readonly tokens: FieldRef<"UsageHistory", 'Json'>
    readonly meta: FieldRef<"UsageHistory", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * UsageHistory findUnique
   */
  export type UsageHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * Filter, which UsageHistory to fetch.
     */
    where: UsageHistoryWhereUniqueInput
  }

  /**
   * UsageHistory findUniqueOrThrow
   */
  export type UsageHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * Filter, which UsageHistory to fetch.
     */
    where: UsageHistoryWhereUniqueInput
  }

  /**
   * UsageHistory findFirst
   */
  export type UsageHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * Filter, which UsageHistory to fetch.
     */
    where?: UsageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageHistories to fetch.
     */
    orderBy?: UsageHistoryOrderByWithRelationInput | UsageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageHistories.
     */
    cursor?: UsageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageHistories.
     */
    distinct?: UsageHistoryScalarFieldEnum | UsageHistoryScalarFieldEnum[]
  }

  /**
   * UsageHistory findFirstOrThrow
   */
  export type UsageHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * Filter, which UsageHistory to fetch.
     */
    where?: UsageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageHistories to fetch.
     */
    orderBy?: UsageHistoryOrderByWithRelationInput | UsageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageHistories.
     */
    cursor?: UsageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageHistories.
     */
    distinct?: UsageHistoryScalarFieldEnum | UsageHistoryScalarFieldEnum[]
  }

  /**
   * UsageHistory findMany
   */
  export type UsageHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * Filter, which UsageHistories to fetch.
     */
    where?: UsageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageHistories to fetch.
     */
    orderBy?: UsageHistoryOrderByWithRelationInput | UsageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageHistories.
     */
    cursor?: UsageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageHistories.
     */
    skip?: number
    distinct?: UsageHistoryScalarFieldEnum | UsageHistoryScalarFieldEnum[]
  }

  /**
   * UsageHistory create
   */
  export type UsageHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a UsageHistory.
     */
    data: XOR<UsageHistoryCreateInput, UsageHistoryUncheckedCreateInput>
  }

  /**
   * UsageHistory createMany
   */
  export type UsageHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageHistories.
     */
    data: UsageHistoryCreateManyInput | UsageHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageHistory createManyAndReturn
   */
  export type UsageHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many UsageHistories.
     */
    data: UsageHistoryCreateManyInput | UsageHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageHistory update
   */
  export type UsageHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a UsageHistory.
     */
    data: XOR<UsageHistoryUpdateInput, UsageHistoryUncheckedUpdateInput>
    /**
     * Choose, which UsageHistory to update.
     */
    where: UsageHistoryWhereUniqueInput
  }

  /**
   * UsageHistory updateMany
   */
  export type UsageHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageHistories.
     */
    data: XOR<UsageHistoryUpdateManyMutationInput, UsageHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UsageHistories to update
     */
    where?: UsageHistoryWhereInput
    /**
     * Limit how many UsageHistories to update.
     */
    limit?: number
  }

  /**
   * UsageHistory updateManyAndReturn
   */
  export type UsageHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * The data used to update UsageHistories.
     */
    data: XOR<UsageHistoryUpdateManyMutationInput, UsageHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UsageHistories to update
     */
    where?: UsageHistoryWhereInput
    /**
     * Limit how many UsageHistories to update.
     */
    limit?: number
  }

  /**
   * UsageHistory upsert
   */
  export type UsageHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the UsageHistory to update in case it exists.
     */
    where: UsageHistoryWhereUniqueInput
    /**
     * In case the UsageHistory found by the `where` argument doesn't exist, create a new UsageHistory with this data.
     */
    create: XOR<UsageHistoryCreateInput, UsageHistoryUncheckedCreateInput>
    /**
     * In case the UsageHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageHistoryUpdateInput, UsageHistoryUncheckedUpdateInput>
  }

  /**
   * UsageHistory delete
   */
  export type UsageHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
    /**
     * Filter which UsageHistory to delete.
     */
    where: UsageHistoryWhereUniqueInput
  }

  /**
   * UsageHistory deleteMany
   */
  export type UsageHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageHistories to delete
     */
    where?: UsageHistoryWhereInput
    /**
     * Limit how many UsageHistories to delete.
     */
    limit?: number
  }

  /**
   * UsageHistory without action
   */
  export type UsageHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageHistory
     */
    select?: UsageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageHistory
     */
    omit?: UsageHistoryOmit<ExtArgs> | null
  }


  /**
   * Model UsageDaily
   */

  export type AggregateUsageDaily = {
    _count: UsageDailyCountAggregateOutputType | null
    _min: UsageDailyMinAggregateOutputType | null
    _max: UsageDailyMaxAggregateOutputType | null
  }

  export type UsageDailyMinAggregateOutputType = {
    dateKey: string | null
  }

  export type UsageDailyMaxAggregateOutputType = {
    dateKey: string | null
  }

  export type UsageDailyCountAggregateOutputType = {
    dateKey: number
    data: number
    _all: number
  }


  export type UsageDailyMinAggregateInputType = {
    dateKey?: true
  }

  export type UsageDailyMaxAggregateInputType = {
    dateKey?: true
  }

  export type UsageDailyCountAggregateInputType = {
    dateKey?: true
    data?: true
    _all?: true
  }

  export type UsageDailyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageDaily to aggregate.
     */
    where?: UsageDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageDailies to fetch.
     */
    orderBy?: UsageDailyOrderByWithRelationInput | UsageDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageDailies
    **/
    _count?: true | UsageDailyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageDailyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageDailyMaxAggregateInputType
  }

  export type GetUsageDailyAggregateType<T extends UsageDailyAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageDaily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageDaily[P]>
      : GetScalarType<T[P], AggregateUsageDaily[P]>
  }




  export type UsageDailyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageDailyWhereInput
    orderBy?: UsageDailyOrderByWithAggregationInput | UsageDailyOrderByWithAggregationInput[]
    by: UsageDailyScalarFieldEnum[] | UsageDailyScalarFieldEnum
    having?: UsageDailyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageDailyCountAggregateInputType | true
    _min?: UsageDailyMinAggregateInputType
    _max?: UsageDailyMaxAggregateInputType
  }

  export type UsageDailyGroupByOutputType = {
    dateKey: string
    data: JsonValue
    _count: UsageDailyCountAggregateOutputType | null
    _min: UsageDailyMinAggregateOutputType | null
    _max: UsageDailyMaxAggregateOutputType | null
  }

  type GetUsageDailyGroupByPayload<T extends UsageDailyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageDailyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageDailyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageDailyGroupByOutputType[P]>
            : GetScalarType<T[P], UsageDailyGroupByOutputType[P]>
        }
      >
    >


  export type UsageDailySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dateKey?: boolean
    data?: boolean
  }, ExtArgs["result"]["usageDaily"]>

  export type UsageDailySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dateKey?: boolean
    data?: boolean
  }, ExtArgs["result"]["usageDaily"]>

  export type UsageDailySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dateKey?: boolean
    data?: boolean
  }, ExtArgs["result"]["usageDaily"]>

  export type UsageDailySelectScalar = {
    dateKey?: boolean
    data?: boolean
  }

  export type UsageDailyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dateKey" | "data", ExtArgs["result"]["usageDaily"]>

  export type $UsageDailyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageDaily"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      dateKey: string
      data: Prisma.JsonValue
    }, ExtArgs["result"]["usageDaily"]>
    composites: {}
  }

  type UsageDailyGetPayload<S extends boolean | null | undefined | UsageDailyDefaultArgs> = $Result.GetResult<Prisma.$UsageDailyPayload, S>

  type UsageDailyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageDailyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageDailyCountAggregateInputType | true
    }

  export interface UsageDailyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageDaily'], meta: { name: 'UsageDaily' } }
    /**
     * Find zero or one UsageDaily that matches the filter.
     * @param {UsageDailyFindUniqueArgs} args - Arguments to find a UsageDaily
     * @example
     * // Get one UsageDaily
     * const usageDaily = await prisma.usageDaily.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageDailyFindUniqueArgs>(args: SelectSubset<T, UsageDailyFindUniqueArgs<ExtArgs>>): Prisma__UsageDailyClient<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageDaily that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageDailyFindUniqueOrThrowArgs} args - Arguments to find a UsageDaily
     * @example
     * // Get one UsageDaily
     * const usageDaily = await prisma.usageDaily.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageDailyFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageDailyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageDailyClient<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageDaily that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageDailyFindFirstArgs} args - Arguments to find a UsageDaily
     * @example
     * // Get one UsageDaily
     * const usageDaily = await prisma.usageDaily.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageDailyFindFirstArgs>(args?: SelectSubset<T, UsageDailyFindFirstArgs<ExtArgs>>): Prisma__UsageDailyClient<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageDaily that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageDailyFindFirstOrThrowArgs} args - Arguments to find a UsageDaily
     * @example
     * // Get one UsageDaily
     * const usageDaily = await prisma.usageDaily.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageDailyFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageDailyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageDailyClient<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageDailies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageDailyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageDailies
     * const usageDailies = await prisma.usageDaily.findMany()
     * 
     * // Get first 10 UsageDailies
     * const usageDailies = await prisma.usageDaily.findMany({ take: 10 })
     * 
     * // Only select the `dateKey`
     * const usageDailyWithDateKeyOnly = await prisma.usageDaily.findMany({ select: { dateKey: true } })
     * 
     */
    findMany<T extends UsageDailyFindManyArgs>(args?: SelectSubset<T, UsageDailyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageDaily.
     * @param {UsageDailyCreateArgs} args - Arguments to create a UsageDaily.
     * @example
     * // Create one UsageDaily
     * const UsageDaily = await prisma.usageDaily.create({
     *   data: {
     *     // ... data to create a UsageDaily
     *   }
     * })
     * 
     */
    create<T extends UsageDailyCreateArgs>(args: SelectSubset<T, UsageDailyCreateArgs<ExtArgs>>): Prisma__UsageDailyClient<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageDailies.
     * @param {UsageDailyCreateManyArgs} args - Arguments to create many UsageDailies.
     * @example
     * // Create many UsageDailies
     * const usageDaily = await prisma.usageDaily.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageDailyCreateManyArgs>(args?: SelectSubset<T, UsageDailyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageDailies and returns the data saved in the database.
     * @param {UsageDailyCreateManyAndReturnArgs} args - Arguments to create many UsageDailies.
     * @example
     * // Create many UsageDailies
     * const usageDaily = await prisma.usageDaily.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageDailies and only return the `dateKey`
     * const usageDailyWithDateKeyOnly = await prisma.usageDaily.createManyAndReturn({
     *   select: { dateKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageDailyCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageDailyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageDaily.
     * @param {UsageDailyDeleteArgs} args - Arguments to delete one UsageDaily.
     * @example
     * // Delete one UsageDaily
     * const UsageDaily = await prisma.usageDaily.delete({
     *   where: {
     *     // ... filter to delete one UsageDaily
     *   }
     * })
     * 
     */
    delete<T extends UsageDailyDeleteArgs>(args: SelectSubset<T, UsageDailyDeleteArgs<ExtArgs>>): Prisma__UsageDailyClient<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageDaily.
     * @param {UsageDailyUpdateArgs} args - Arguments to update one UsageDaily.
     * @example
     * // Update one UsageDaily
     * const usageDaily = await prisma.usageDaily.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageDailyUpdateArgs>(args: SelectSubset<T, UsageDailyUpdateArgs<ExtArgs>>): Prisma__UsageDailyClient<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageDailies.
     * @param {UsageDailyDeleteManyArgs} args - Arguments to filter UsageDailies to delete.
     * @example
     * // Delete a few UsageDailies
     * const { count } = await prisma.usageDaily.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageDailyDeleteManyArgs>(args?: SelectSubset<T, UsageDailyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageDailyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageDailies
     * const usageDaily = await prisma.usageDaily.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageDailyUpdateManyArgs>(args: SelectSubset<T, UsageDailyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageDailies and returns the data updated in the database.
     * @param {UsageDailyUpdateManyAndReturnArgs} args - Arguments to update many UsageDailies.
     * @example
     * // Update many UsageDailies
     * const usageDaily = await prisma.usageDaily.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageDailies and only return the `dateKey`
     * const usageDailyWithDateKeyOnly = await prisma.usageDaily.updateManyAndReturn({
     *   select: { dateKey: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsageDailyUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageDailyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageDaily.
     * @param {UsageDailyUpsertArgs} args - Arguments to update or create a UsageDaily.
     * @example
     * // Update or create a UsageDaily
     * const usageDaily = await prisma.usageDaily.upsert({
     *   create: {
     *     // ... data to create a UsageDaily
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageDaily we want to update
     *   }
     * })
     */
    upsert<T extends UsageDailyUpsertArgs>(args: SelectSubset<T, UsageDailyUpsertArgs<ExtArgs>>): Prisma__UsageDailyClient<$Result.GetResult<Prisma.$UsageDailyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageDailyCountArgs} args - Arguments to filter UsageDailies to count.
     * @example
     * // Count the number of UsageDailies
     * const count = await prisma.usageDaily.count({
     *   where: {
     *     // ... the filter for the UsageDailies we want to count
     *   }
     * })
    **/
    count<T extends UsageDailyCountArgs>(
      args?: Subset<T, UsageDailyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageDailyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageDailyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageDailyAggregateArgs>(args: Subset<T, UsageDailyAggregateArgs>): Prisma.PrismaPromise<GetUsageDailyAggregateType<T>>

    /**
     * Group by UsageDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageDailyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageDailyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageDailyGroupByArgs['orderBy'] }
        : { orderBy?: UsageDailyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageDailyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageDailyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageDaily model
   */
  readonly fields: UsageDailyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageDaily.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageDailyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageDaily model
   */
  interface UsageDailyFieldRefs {
    readonly dateKey: FieldRef<"UsageDaily", 'String'>
    readonly data: FieldRef<"UsageDaily", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * UsageDaily findUnique
   */
  export type UsageDailyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * Filter, which UsageDaily to fetch.
     */
    where: UsageDailyWhereUniqueInput
  }

  /**
   * UsageDaily findUniqueOrThrow
   */
  export type UsageDailyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * Filter, which UsageDaily to fetch.
     */
    where: UsageDailyWhereUniqueInput
  }

  /**
   * UsageDaily findFirst
   */
  export type UsageDailyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * Filter, which UsageDaily to fetch.
     */
    where?: UsageDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageDailies to fetch.
     */
    orderBy?: UsageDailyOrderByWithRelationInput | UsageDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageDailies.
     */
    cursor?: UsageDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageDailies.
     */
    distinct?: UsageDailyScalarFieldEnum | UsageDailyScalarFieldEnum[]
  }

  /**
   * UsageDaily findFirstOrThrow
   */
  export type UsageDailyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * Filter, which UsageDaily to fetch.
     */
    where?: UsageDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageDailies to fetch.
     */
    orderBy?: UsageDailyOrderByWithRelationInput | UsageDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageDailies.
     */
    cursor?: UsageDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageDailies.
     */
    distinct?: UsageDailyScalarFieldEnum | UsageDailyScalarFieldEnum[]
  }

  /**
   * UsageDaily findMany
   */
  export type UsageDailyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * Filter, which UsageDailies to fetch.
     */
    where?: UsageDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageDailies to fetch.
     */
    orderBy?: UsageDailyOrderByWithRelationInput | UsageDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageDailies.
     */
    cursor?: UsageDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageDailies.
     */
    skip?: number
    distinct?: UsageDailyScalarFieldEnum | UsageDailyScalarFieldEnum[]
  }

  /**
   * UsageDaily create
   */
  export type UsageDailyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * The data needed to create a UsageDaily.
     */
    data: XOR<UsageDailyCreateInput, UsageDailyUncheckedCreateInput>
  }

  /**
   * UsageDaily createMany
   */
  export type UsageDailyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageDailies.
     */
    data: UsageDailyCreateManyInput | UsageDailyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageDaily createManyAndReturn
   */
  export type UsageDailyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * The data used to create many UsageDailies.
     */
    data: UsageDailyCreateManyInput | UsageDailyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageDaily update
   */
  export type UsageDailyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * The data needed to update a UsageDaily.
     */
    data: XOR<UsageDailyUpdateInput, UsageDailyUncheckedUpdateInput>
    /**
     * Choose, which UsageDaily to update.
     */
    where: UsageDailyWhereUniqueInput
  }

  /**
   * UsageDaily updateMany
   */
  export type UsageDailyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageDailies.
     */
    data: XOR<UsageDailyUpdateManyMutationInput, UsageDailyUncheckedUpdateManyInput>
    /**
     * Filter which UsageDailies to update
     */
    where?: UsageDailyWhereInput
    /**
     * Limit how many UsageDailies to update.
     */
    limit?: number
  }

  /**
   * UsageDaily updateManyAndReturn
   */
  export type UsageDailyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * The data used to update UsageDailies.
     */
    data: XOR<UsageDailyUpdateManyMutationInput, UsageDailyUncheckedUpdateManyInput>
    /**
     * Filter which UsageDailies to update
     */
    where?: UsageDailyWhereInput
    /**
     * Limit how many UsageDailies to update.
     */
    limit?: number
  }

  /**
   * UsageDaily upsert
   */
  export type UsageDailyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * The filter to search for the UsageDaily to update in case it exists.
     */
    where: UsageDailyWhereUniqueInput
    /**
     * In case the UsageDaily found by the `where` argument doesn't exist, create a new UsageDaily with this data.
     */
    create: XOR<UsageDailyCreateInput, UsageDailyUncheckedCreateInput>
    /**
     * In case the UsageDaily was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageDailyUpdateInput, UsageDailyUncheckedUpdateInput>
  }

  /**
   * UsageDaily delete
   */
  export type UsageDailyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
    /**
     * Filter which UsageDaily to delete.
     */
    where: UsageDailyWhereUniqueInput
  }

  /**
   * UsageDaily deleteMany
   */
  export type UsageDailyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageDailies to delete
     */
    where?: UsageDailyWhereInput
    /**
     * Limit how many UsageDailies to delete.
     */
    limit?: number
  }

  /**
   * UsageDaily without action
   */
  export type UsageDailyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageDaily
     */
    select?: UsageDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageDaily
     */
    omit?: UsageDailyOmit<ExtArgs> | null
  }


  /**
   * Model RequestDetail
   */

  export type AggregateRequestDetail = {
    _count: RequestDetailCountAggregateOutputType | null
    _min: RequestDetailMinAggregateOutputType | null
    _max: RequestDetailMaxAggregateOutputType | null
  }

  export type RequestDetailMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    provider: string | null
    model: string | null
    connectionId: string | null
    status: string | null
  }

  export type RequestDetailMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    provider: string | null
    model: string | null
    connectionId: string | null
    status: string | null
  }

  export type RequestDetailCountAggregateOutputType = {
    id: number
    timestamp: number
    provider: number
    model: number
    connectionId: number
    status: number
    data: number
    _all: number
  }


  export type RequestDetailMinAggregateInputType = {
    id?: true
    timestamp?: true
    provider?: true
    model?: true
    connectionId?: true
    status?: true
  }

  export type RequestDetailMaxAggregateInputType = {
    id?: true
    timestamp?: true
    provider?: true
    model?: true
    connectionId?: true
    status?: true
  }

  export type RequestDetailCountAggregateInputType = {
    id?: true
    timestamp?: true
    provider?: true
    model?: true
    connectionId?: true
    status?: true
    data?: true
    _all?: true
  }

  export type RequestDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestDetail to aggregate.
     */
    where?: RequestDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDetails to fetch.
     */
    orderBy?: RequestDetailOrderByWithRelationInput | RequestDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestDetails
    **/
    _count?: true | RequestDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestDetailMaxAggregateInputType
  }

  export type GetRequestDetailAggregateType<T extends RequestDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestDetail[P]>
      : GetScalarType<T[P], AggregateRequestDetail[P]>
  }




  export type RequestDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestDetailWhereInput
    orderBy?: RequestDetailOrderByWithAggregationInput | RequestDetailOrderByWithAggregationInput[]
    by: RequestDetailScalarFieldEnum[] | RequestDetailScalarFieldEnum
    having?: RequestDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestDetailCountAggregateInputType | true
    _min?: RequestDetailMinAggregateInputType
    _max?: RequestDetailMaxAggregateInputType
  }

  export type RequestDetailGroupByOutputType = {
    id: string
    timestamp: Date
    provider: string | null
    model: string | null
    connectionId: string | null
    status: string | null
    data: JsonValue
    _count: RequestDetailCountAggregateOutputType | null
    _min: RequestDetailMinAggregateOutputType | null
    _max: RequestDetailMaxAggregateOutputType | null
  }

  type GetRequestDetailGroupByPayload<T extends RequestDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestDetailGroupByOutputType[P]>
            : GetScalarType<T[P], RequestDetailGroupByOutputType[P]>
        }
      >
    >


  export type RequestDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    provider?: boolean
    model?: boolean
    connectionId?: boolean
    status?: boolean
    data?: boolean
  }, ExtArgs["result"]["requestDetail"]>

  export type RequestDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    provider?: boolean
    model?: boolean
    connectionId?: boolean
    status?: boolean
    data?: boolean
  }, ExtArgs["result"]["requestDetail"]>

  export type RequestDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    provider?: boolean
    model?: boolean
    connectionId?: boolean
    status?: boolean
    data?: boolean
  }, ExtArgs["result"]["requestDetail"]>

  export type RequestDetailSelectScalar = {
    id?: boolean
    timestamp?: boolean
    provider?: boolean
    model?: boolean
    connectionId?: boolean
    status?: boolean
    data?: boolean
  }

  export type RequestDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "provider" | "model" | "connectionId" | "status" | "data", ExtArgs["result"]["requestDetail"]>

  export type $RequestDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestDetail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      provider: string | null
      model: string | null
      connectionId: string | null
      status: string | null
      data: Prisma.JsonValue
    }, ExtArgs["result"]["requestDetail"]>
    composites: {}
  }

  type RequestDetailGetPayload<S extends boolean | null | undefined | RequestDetailDefaultArgs> = $Result.GetResult<Prisma.$RequestDetailPayload, S>

  type RequestDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestDetailCountAggregateInputType | true
    }

  export interface RequestDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestDetail'], meta: { name: 'RequestDetail' } }
    /**
     * Find zero or one RequestDetail that matches the filter.
     * @param {RequestDetailFindUniqueArgs} args - Arguments to find a RequestDetail
     * @example
     * // Get one RequestDetail
     * const requestDetail = await prisma.requestDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestDetailFindUniqueArgs>(args: SelectSubset<T, RequestDetailFindUniqueArgs<ExtArgs>>): Prisma__RequestDetailClient<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestDetailFindUniqueOrThrowArgs} args - Arguments to find a RequestDetail
     * @example
     * // Get one RequestDetail
     * const requestDetail = await prisma.requestDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestDetailClient<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailFindFirstArgs} args - Arguments to find a RequestDetail
     * @example
     * // Get one RequestDetail
     * const requestDetail = await prisma.requestDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestDetailFindFirstArgs>(args?: SelectSubset<T, RequestDetailFindFirstArgs<ExtArgs>>): Prisma__RequestDetailClient<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailFindFirstOrThrowArgs} args - Arguments to find a RequestDetail
     * @example
     * // Get one RequestDetail
     * const requestDetail = await prisma.requestDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestDetailClient<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestDetails
     * const requestDetails = await prisma.requestDetail.findMany()
     * 
     * // Get first 10 RequestDetails
     * const requestDetails = await prisma.requestDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestDetailWithIdOnly = await prisma.requestDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestDetailFindManyArgs>(args?: SelectSubset<T, RequestDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestDetail.
     * @param {RequestDetailCreateArgs} args - Arguments to create a RequestDetail.
     * @example
     * // Create one RequestDetail
     * const RequestDetail = await prisma.requestDetail.create({
     *   data: {
     *     // ... data to create a RequestDetail
     *   }
     * })
     * 
     */
    create<T extends RequestDetailCreateArgs>(args: SelectSubset<T, RequestDetailCreateArgs<ExtArgs>>): Prisma__RequestDetailClient<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestDetails.
     * @param {RequestDetailCreateManyArgs} args - Arguments to create many RequestDetails.
     * @example
     * // Create many RequestDetails
     * const requestDetail = await prisma.requestDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestDetailCreateManyArgs>(args?: SelectSubset<T, RequestDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestDetails and returns the data saved in the database.
     * @param {RequestDetailCreateManyAndReturnArgs} args - Arguments to create many RequestDetails.
     * @example
     * // Create many RequestDetails
     * const requestDetail = await prisma.requestDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestDetails and only return the `id`
     * const requestDetailWithIdOnly = await prisma.requestDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestDetail.
     * @param {RequestDetailDeleteArgs} args - Arguments to delete one RequestDetail.
     * @example
     * // Delete one RequestDetail
     * const RequestDetail = await prisma.requestDetail.delete({
     *   where: {
     *     // ... filter to delete one RequestDetail
     *   }
     * })
     * 
     */
    delete<T extends RequestDetailDeleteArgs>(args: SelectSubset<T, RequestDetailDeleteArgs<ExtArgs>>): Prisma__RequestDetailClient<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestDetail.
     * @param {RequestDetailUpdateArgs} args - Arguments to update one RequestDetail.
     * @example
     * // Update one RequestDetail
     * const requestDetail = await prisma.requestDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestDetailUpdateArgs>(args: SelectSubset<T, RequestDetailUpdateArgs<ExtArgs>>): Prisma__RequestDetailClient<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestDetails.
     * @param {RequestDetailDeleteManyArgs} args - Arguments to filter RequestDetails to delete.
     * @example
     * // Delete a few RequestDetails
     * const { count } = await prisma.requestDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDetailDeleteManyArgs>(args?: SelectSubset<T, RequestDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestDetails
     * const requestDetail = await prisma.requestDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestDetailUpdateManyArgs>(args: SelectSubset<T, RequestDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestDetails and returns the data updated in the database.
     * @param {RequestDetailUpdateManyAndReturnArgs} args - Arguments to update many RequestDetails.
     * @example
     * // Update many RequestDetails
     * const requestDetail = await prisma.requestDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestDetails and only return the `id`
     * const requestDetailWithIdOnly = await prisma.requestDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestDetail.
     * @param {RequestDetailUpsertArgs} args - Arguments to update or create a RequestDetail.
     * @example
     * // Update or create a RequestDetail
     * const requestDetail = await prisma.requestDetail.upsert({
     *   create: {
     *     // ... data to create a RequestDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestDetail we want to update
     *   }
     * })
     */
    upsert<T extends RequestDetailUpsertArgs>(args: SelectSubset<T, RequestDetailUpsertArgs<ExtArgs>>): Prisma__RequestDetailClient<$Result.GetResult<Prisma.$RequestDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailCountArgs} args - Arguments to filter RequestDetails to count.
     * @example
     * // Count the number of RequestDetails
     * const count = await prisma.requestDetail.count({
     *   where: {
     *     // ... the filter for the RequestDetails we want to count
     *   }
     * })
    **/
    count<T extends RequestDetailCountArgs>(
      args?: Subset<T, RequestDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestDetailAggregateArgs>(args: Subset<T, RequestDetailAggregateArgs>): Prisma.PrismaPromise<GetRequestDetailAggregateType<T>>

    /**
     * Group by RequestDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestDetailGroupByArgs['orderBy'] }
        : { orderBy?: RequestDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestDetail model
   */
  readonly fields: RequestDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequestDetail model
   */
  interface RequestDetailFieldRefs {
    readonly id: FieldRef<"RequestDetail", 'String'>
    readonly timestamp: FieldRef<"RequestDetail", 'DateTime'>
    readonly provider: FieldRef<"RequestDetail", 'String'>
    readonly model: FieldRef<"RequestDetail", 'String'>
    readonly connectionId: FieldRef<"RequestDetail", 'String'>
    readonly status: FieldRef<"RequestDetail", 'String'>
    readonly data: FieldRef<"RequestDetail", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * RequestDetail findUnique
   */
  export type RequestDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * Filter, which RequestDetail to fetch.
     */
    where: RequestDetailWhereUniqueInput
  }

  /**
   * RequestDetail findUniqueOrThrow
   */
  export type RequestDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * Filter, which RequestDetail to fetch.
     */
    where: RequestDetailWhereUniqueInput
  }

  /**
   * RequestDetail findFirst
   */
  export type RequestDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * Filter, which RequestDetail to fetch.
     */
    where?: RequestDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDetails to fetch.
     */
    orderBy?: RequestDetailOrderByWithRelationInput | RequestDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestDetails.
     */
    cursor?: RequestDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestDetails.
     */
    distinct?: RequestDetailScalarFieldEnum | RequestDetailScalarFieldEnum[]
  }

  /**
   * RequestDetail findFirstOrThrow
   */
  export type RequestDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * Filter, which RequestDetail to fetch.
     */
    where?: RequestDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDetails to fetch.
     */
    orderBy?: RequestDetailOrderByWithRelationInput | RequestDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestDetails.
     */
    cursor?: RequestDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestDetails.
     */
    distinct?: RequestDetailScalarFieldEnum | RequestDetailScalarFieldEnum[]
  }

  /**
   * RequestDetail findMany
   */
  export type RequestDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * Filter, which RequestDetails to fetch.
     */
    where?: RequestDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDetails to fetch.
     */
    orderBy?: RequestDetailOrderByWithRelationInput | RequestDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestDetails.
     */
    cursor?: RequestDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDetails.
     */
    skip?: number
    distinct?: RequestDetailScalarFieldEnum | RequestDetailScalarFieldEnum[]
  }

  /**
   * RequestDetail create
   */
  export type RequestDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * The data needed to create a RequestDetail.
     */
    data: XOR<RequestDetailCreateInput, RequestDetailUncheckedCreateInput>
  }

  /**
   * RequestDetail createMany
   */
  export type RequestDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestDetails.
     */
    data: RequestDetailCreateManyInput | RequestDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestDetail createManyAndReturn
   */
  export type RequestDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * The data used to create many RequestDetails.
     */
    data: RequestDetailCreateManyInput | RequestDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestDetail update
   */
  export type RequestDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * The data needed to update a RequestDetail.
     */
    data: XOR<RequestDetailUpdateInput, RequestDetailUncheckedUpdateInput>
    /**
     * Choose, which RequestDetail to update.
     */
    where: RequestDetailWhereUniqueInput
  }

  /**
   * RequestDetail updateMany
   */
  export type RequestDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestDetails.
     */
    data: XOR<RequestDetailUpdateManyMutationInput, RequestDetailUncheckedUpdateManyInput>
    /**
     * Filter which RequestDetails to update
     */
    where?: RequestDetailWhereInput
    /**
     * Limit how many RequestDetails to update.
     */
    limit?: number
  }

  /**
   * RequestDetail updateManyAndReturn
   */
  export type RequestDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * The data used to update RequestDetails.
     */
    data: XOR<RequestDetailUpdateManyMutationInput, RequestDetailUncheckedUpdateManyInput>
    /**
     * Filter which RequestDetails to update
     */
    where?: RequestDetailWhereInput
    /**
     * Limit how many RequestDetails to update.
     */
    limit?: number
  }

  /**
   * RequestDetail upsert
   */
  export type RequestDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * The filter to search for the RequestDetail to update in case it exists.
     */
    where: RequestDetailWhereUniqueInput
    /**
     * In case the RequestDetail found by the `where` argument doesn't exist, create a new RequestDetail with this data.
     */
    create: XOR<RequestDetailCreateInput, RequestDetailUncheckedCreateInput>
    /**
     * In case the RequestDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestDetailUpdateInput, RequestDetailUncheckedUpdateInput>
  }

  /**
   * RequestDetail delete
   */
  export type RequestDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
    /**
     * Filter which RequestDetail to delete.
     */
    where: RequestDetailWhereUniqueInput
  }

  /**
   * RequestDetail deleteMany
   */
  export type RequestDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestDetails to delete
     */
    where?: RequestDetailWhereInput
    /**
     * Limit how many RequestDetails to delete.
     */
    limit?: number
  }

  /**
   * RequestDetail without action
   */
  export type RequestDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetail
     */
    select?: RequestDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDetail
     */
    omit?: RequestDetailOmit<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    title: string | null
    mode: string | null
    requestModel: string | null
    modelLabel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    mode: string | null
    requestModel: string | null
    modelLabel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    title: number
    mode: number
    requestModel: number
    modelLabel: number
    messages: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    title?: true
    mode?: true
    requestModel?: true
    modelLabel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    title?: true
    mode?: true
    requestModel?: true
    modelLabel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    title?: true
    mode?: true
    requestModel?: true
    modelLabel?: true
    messages?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    title: string
    mode: string | null
    requestModel: string | null
    modelLabel: string | null
    messages: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    mode?: boolean
    requestModel?: boolean
    modelLabel?: boolean
    messages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    mode?: boolean
    requestModel?: boolean
    modelLabel?: boolean
    messages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    mode?: boolean
    requestModel?: boolean
    modelLabel?: boolean
    messages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    title?: boolean
    mode?: boolean
    requestModel?: boolean
    modelLabel?: boolean
    messages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "mode" | "requestModel" | "modelLabel" | "messages" | "createdAt" | "updatedAt", ExtArgs["result"]["chatSession"]>

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      mode: string | null
      requestModel: string | null
      modelLabel: string | null
      messages: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly title: FieldRef<"ChatSession", 'String'>
    readonly mode: FieldRef<"ChatSession", 'String'>
    readonly requestModel: FieldRef<"ChatSession", 'String'>
    readonly modelLabel: FieldRef<"ChatSession", 'String'>
    readonly messages: FieldRef<"ChatSession", 'Json'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MetaScalarFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type MetaScalarFieldEnum = (typeof MetaScalarFieldEnum)[keyof typeof MetaScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    data: 'data'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const ProviderConnectionScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    authType: 'authType',
    name: 'name',
    email: 'email',
    priority: 'priority',
    isActive: 'isActive',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderConnectionScalarFieldEnum = (typeof ProviderConnectionScalarFieldEnum)[keyof typeof ProviderConnectionScalarFieldEnum]


  export const ProviderNodeScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderNodeScalarFieldEnum = (typeof ProviderNodeScalarFieldEnum)[keyof typeof ProviderNodeScalarFieldEnum]


  export const ProxyPoolScalarFieldEnum: {
    id: 'id',
    isActive: 'isActive',
    testStatus: 'testStatus',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProxyPoolScalarFieldEnum = (typeof ProxyPoolScalarFieldEnum)[keyof typeof ProxyPoolScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    mustChangePassword: 'mustChangePassword',
    isBlocked: 'isBlocked',
    permDashboard: 'permDashboard',
    permChat: 'permChat',
    permApi: 'permApi',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    machineId: 'machineId',
    userId: 'userId',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const ComboScalarFieldEnum: {
    id: 'id',
    name: 'name',
    kind: 'kind',
    models: 'models',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComboScalarFieldEnum = (typeof ComboScalarFieldEnum)[keyof typeof ComboScalarFieldEnum]


  export const KvScalarFieldEnum: {
    scope: 'scope',
    key: 'key',
    value: 'value'
  };

  export type KvScalarFieldEnum = (typeof KvScalarFieldEnum)[keyof typeof KvScalarFieldEnum]


  export const UsageHistoryScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    provider: 'provider',
    model: 'model',
    connectionId: 'connectionId',
    apiKey: 'apiKey',
    endpoint: 'endpoint',
    promptTokens: 'promptTokens',
    completionTokens: 'completionTokens',
    cost: 'cost',
    status: 'status',
    tokens: 'tokens',
    meta: 'meta'
  };

  export type UsageHistoryScalarFieldEnum = (typeof UsageHistoryScalarFieldEnum)[keyof typeof UsageHistoryScalarFieldEnum]


  export const UsageDailyScalarFieldEnum: {
    dateKey: 'dateKey',
    data: 'data'
  };

  export type UsageDailyScalarFieldEnum = (typeof UsageDailyScalarFieldEnum)[keyof typeof UsageDailyScalarFieldEnum]


  export const RequestDetailScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    provider: 'provider',
    model: 'model',
    connectionId: 'connectionId',
    status: 'status',
    data: 'data'
  };

  export type RequestDetailScalarFieldEnum = (typeof RequestDetailScalarFieldEnum)[keyof typeof RequestDetailScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    mode: 'mode',
    requestModel: 'requestModel',
    modelLabel: 'modelLabel',
    messages: 'messages',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MetaWhereInput = {
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    key?: StringFilter<"Meta"> | string
    value?: StringFilter<"Meta"> | string
  }

  export type MetaOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type MetaWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    value?: StringFilter<"Meta"> | string
  }, "key">

  export type MetaOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    _count?: MetaCountOrderByAggregateInput
    _max?: MetaMaxOrderByAggregateInput
    _min?: MetaMinOrderByAggregateInput
  }

  export type MetaScalarWhereWithAggregatesInput = {
    AND?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    OR?: MetaScalarWhereWithAggregatesInput[]
    NOT?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Meta"> | string
    value?: StringWithAggregatesFilter<"Meta"> | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: IntFilter<"Settings"> | number
    data?: JsonFilter<"Settings">
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    data?: JsonFilter<"Settings">
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Settings"> | number
    data?: JsonWithAggregatesFilter<"Settings">
  }

  export type ProviderConnectionWhereInput = {
    AND?: ProviderConnectionWhereInput | ProviderConnectionWhereInput[]
    OR?: ProviderConnectionWhereInput[]
    NOT?: ProviderConnectionWhereInput | ProviderConnectionWhereInput[]
    id?: StringFilter<"ProviderConnection"> | string
    provider?: StringFilter<"ProviderConnection"> | string
    authType?: StringFilter<"ProviderConnection"> | string
    name?: StringNullableFilter<"ProviderConnection"> | string | null
    email?: StringNullableFilter<"ProviderConnection"> | string | null
    priority?: IntNullableFilter<"ProviderConnection"> | number | null
    isActive?: BoolFilter<"ProviderConnection"> | boolean
    data?: JsonFilter<"ProviderConnection">
    createdAt?: DateTimeFilter<"ProviderConnection"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderConnection"> | Date | string
  }

  export type ProviderConnectionOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    authType?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    isActive?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProviderConnectionWhereInput | ProviderConnectionWhereInput[]
    OR?: ProviderConnectionWhereInput[]
    NOT?: ProviderConnectionWhereInput | ProviderConnectionWhereInput[]
    provider?: StringFilter<"ProviderConnection"> | string
    authType?: StringFilter<"ProviderConnection"> | string
    name?: StringNullableFilter<"ProviderConnection"> | string | null
    email?: StringNullableFilter<"ProviderConnection"> | string | null
    priority?: IntNullableFilter<"ProviderConnection"> | number | null
    isActive?: BoolFilter<"ProviderConnection"> | boolean
    data?: JsonFilter<"ProviderConnection">
    createdAt?: DateTimeFilter<"ProviderConnection"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderConnection"> | Date | string
  }, "id">

  export type ProviderConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    authType?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    isActive?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderConnectionCountOrderByAggregateInput
    _avg?: ProviderConnectionAvgOrderByAggregateInput
    _max?: ProviderConnectionMaxOrderByAggregateInput
    _min?: ProviderConnectionMinOrderByAggregateInput
    _sum?: ProviderConnectionSumOrderByAggregateInput
  }

  export type ProviderConnectionScalarWhereWithAggregatesInput = {
    AND?: ProviderConnectionScalarWhereWithAggregatesInput | ProviderConnectionScalarWhereWithAggregatesInput[]
    OR?: ProviderConnectionScalarWhereWithAggregatesInput[]
    NOT?: ProviderConnectionScalarWhereWithAggregatesInput | ProviderConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProviderConnection"> | string
    provider?: StringWithAggregatesFilter<"ProviderConnection"> | string
    authType?: StringWithAggregatesFilter<"ProviderConnection"> | string
    name?: StringNullableWithAggregatesFilter<"ProviderConnection"> | string | null
    email?: StringNullableWithAggregatesFilter<"ProviderConnection"> | string | null
    priority?: IntNullableWithAggregatesFilter<"ProviderConnection"> | number | null
    isActive?: BoolWithAggregatesFilter<"ProviderConnection"> | boolean
    data?: JsonWithAggregatesFilter<"ProviderConnection">
    createdAt?: DateTimeWithAggregatesFilter<"ProviderConnection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProviderConnection"> | Date | string
  }

  export type ProviderNodeWhereInput = {
    AND?: ProviderNodeWhereInput | ProviderNodeWhereInput[]
    OR?: ProviderNodeWhereInput[]
    NOT?: ProviderNodeWhereInput | ProviderNodeWhereInput[]
    id?: StringFilter<"ProviderNode"> | string
    type?: StringNullableFilter<"ProviderNode"> | string | null
    name?: StringNullableFilter<"ProviderNode"> | string | null
    data?: JsonFilter<"ProviderNode">
    createdAt?: DateTimeFilter<"ProviderNode"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderNode"> | Date | string
  }

  export type ProviderNodeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProviderNodeWhereInput | ProviderNodeWhereInput[]
    OR?: ProviderNodeWhereInput[]
    NOT?: ProviderNodeWhereInput | ProviderNodeWhereInput[]
    type?: StringNullableFilter<"ProviderNode"> | string | null
    name?: StringNullableFilter<"ProviderNode"> | string | null
    data?: JsonFilter<"ProviderNode">
    createdAt?: DateTimeFilter<"ProviderNode"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderNode"> | Date | string
  }, "id">

  export type ProviderNodeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderNodeCountOrderByAggregateInput
    _max?: ProviderNodeMaxOrderByAggregateInput
    _min?: ProviderNodeMinOrderByAggregateInput
  }

  export type ProviderNodeScalarWhereWithAggregatesInput = {
    AND?: ProviderNodeScalarWhereWithAggregatesInput | ProviderNodeScalarWhereWithAggregatesInput[]
    OR?: ProviderNodeScalarWhereWithAggregatesInput[]
    NOT?: ProviderNodeScalarWhereWithAggregatesInput | ProviderNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProviderNode"> | string
    type?: StringNullableWithAggregatesFilter<"ProviderNode"> | string | null
    name?: StringNullableWithAggregatesFilter<"ProviderNode"> | string | null
    data?: JsonWithAggregatesFilter<"ProviderNode">
    createdAt?: DateTimeWithAggregatesFilter<"ProviderNode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProviderNode"> | Date | string
  }

  export type ProxyPoolWhereInput = {
    AND?: ProxyPoolWhereInput | ProxyPoolWhereInput[]
    OR?: ProxyPoolWhereInput[]
    NOT?: ProxyPoolWhereInput | ProxyPoolWhereInput[]
    id?: StringFilter<"ProxyPool"> | string
    isActive?: BoolFilter<"ProxyPool"> | boolean
    testStatus?: StringNullableFilter<"ProxyPool"> | string | null
    data?: JsonFilter<"ProxyPool">
    createdAt?: DateTimeFilter<"ProxyPool"> | Date | string
    updatedAt?: DateTimeFilter<"ProxyPool"> | Date | string
  }

  export type ProxyPoolOrderByWithRelationInput = {
    id?: SortOrder
    isActive?: SortOrder
    testStatus?: SortOrderInput | SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProxyPoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProxyPoolWhereInput | ProxyPoolWhereInput[]
    OR?: ProxyPoolWhereInput[]
    NOT?: ProxyPoolWhereInput | ProxyPoolWhereInput[]
    isActive?: BoolFilter<"ProxyPool"> | boolean
    testStatus?: StringNullableFilter<"ProxyPool"> | string | null
    data?: JsonFilter<"ProxyPool">
    createdAt?: DateTimeFilter<"ProxyPool"> | Date | string
    updatedAt?: DateTimeFilter<"ProxyPool"> | Date | string
  }, "id">

  export type ProxyPoolOrderByWithAggregationInput = {
    id?: SortOrder
    isActive?: SortOrder
    testStatus?: SortOrderInput | SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProxyPoolCountOrderByAggregateInput
    _max?: ProxyPoolMaxOrderByAggregateInput
    _min?: ProxyPoolMinOrderByAggregateInput
  }

  export type ProxyPoolScalarWhereWithAggregatesInput = {
    AND?: ProxyPoolScalarWhereWithAggregatesInput | ProxyPoolScalarWhereWithAggregatesInput[]
    OR?: ProxyPoolScalarWhereWithAggregatesInput[]
    NOT?: ProxyPoolScalarWhereWithAggregatesInput | ProxyPoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProxyPool"> | string
    isActive?: BoolWithAggregatesFilter<"ProxyPool"> | boolean
    testStatus?: StringNullableWithAggregatesFilter<"ProxyPool"> | string | null
    data?: JsonWithAggregatesFilter<"ProxyPool">
    createdAt?: DateTimeWithAggregatesFilter<"ProxyPool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProxyPool"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    mustChangePassword?: BoolFilter<"User"> | boolean
    isBlocked?: BoolFilter<"User"> | boolean
    permDashboard?: BoolFilter<"User"> | boolean
    permChat?: BoolFilter<"User"> | boolean
    permApi?: BoolFilter<"User"> | boolean
    projectId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    mustChangePassword?: SortOrder
    isBlocked?: SortOrder
    permDashboard?: SortOrder
    permChat?: SortOrder
    permApi?: SortOrder
    projectId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    mustChangePassword?: BoolFilter<"User"> | boolean
    isBlocked?: BoolFilter<"User"> | boolean
    permDashboard?: BoolFilter<"User"> | boolean
    permChat?: BoolFilter<"User"> | boolean
    permApi?: BoolFilter<"User"> | boolean
    projectId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    mustChangePassword?: SortOrder
    isBlocked?: SortOrder
    permDashboard?: SortOrder
    permChat?: SortOrder
    permApi?: SortOrder
    projectId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    mustChangePassword?: BoolWithAggregatesFilter<"User"> | boolean
    isBlocked?: BoolWithAggregatesFilter<"User"> | boolean
    permDashboard?: BoolWithAggregatesFilter<"User"> | boolean
    permChat?: BoolWithAggregatesFilter<"User"> | boolean
    permApi?: BoolWithAggregatesFilter<"User"> | boolean
    projectId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    code?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    code?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    code?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    name?: StringNullableFilter<"ApiKey"> | string | null
    machineId?: StringNullableFilter<"ApiKey"> | string | null
    userId?: StringNullableFilter<"ApiKey"> | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrderInput | SortOrder
    machineId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    name?: StringNullableFilter<"ApiKey"> | string | null
    machineId?: StringNullableFilter<"ApiKey"> | string | null
    userId?: StringNullableFilter<"ApiKey"> | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
  }, "id" | "key">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrderInput | SortOrder
    machineId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    machineId?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    userId?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type ComboWhereInput = {
    AND?: ComboWhereInput | ComboWhereInput[]
    OR?: ComboWhereInput[]
    NOT?: ComboWhereInput | ComboWhereInput[]
    id?: StringFilter<"Combo"> | string
    name?: StringFilter<"Combo"> | string
    kind?: StringNullableFilter<"Combo"> | string | null
    models?: JsonFilter<"Combo">
    createdAt?: DateTimeFilter<"Combo"> | Date | string
    updatedAt?: DateTimeFilter<"Combo"> | Date | string
  }

  export type ComboOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrderInput | SortOrder
    models?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComboWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ComboWhereInput | ComboWhereInput[]
    OR?: ComboWhereInput[]
    NOT?: ComboWhereInput | ComboWhereInput[]
    kind?: StringNullableFilter<"Combo"> | string | null
    models?: JsonFilter<"Combo">
    createdAt?: DateTimeFilter<"Combo"> | Date | string
    updatedAt?: DateTimeFilter<"Combo"> | Date | string
  }, "id" | "name">

  export type ComboOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrderInput | SortOrder
    models?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComboCountOrderByAggregateInput
    _max?: ComboMaxOrderByAggregateInput
    _min?: ComboMinOrderByAggregateInput
  }

  export type ComboScalarWhereWithAggregatesInput = {
    AND?: ComboScalarWhereWithAggregatesInput | ComboScalarWhereWithAggregatesInput[]
    OR?: ComboScalarWhereWithAggregatesInput[]
    NOT?: ComboScalarWhereWithAggregatesInput | ComboScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Combo"> | string
    name?: StringWithAggregatesFilter<"Combo"> | string
    kind?: StringNullableWithAggregatesFilter<"Combo"> | string | null
    models?: JsonWithAggregatesFilter<"Combo">
    createdAt?: DateTimeWithAggregatesFilter<"Combo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Combo"> | Date | string
  }

  export type KvWhereInput = {
    AND?: KvWhereInput | KvWhereInput[]
    OR?: KvWhereInput[]
    NOT?: KvWhereInput | KvWhereInput[]
    scope?: StringFilter<"Kv"> | string
    key?: StringFilter<"Kv"> | string
    value?: JsonFilter<"Kv">
  }

  export type KvOrderByWithRelationInput = {
    scope?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type KvWhereUniqueInput = Prisma.AtLeast<{
    scope_key?: KvScopeKeyCompoundUniqueInput
    AND?: KvWhereInput | KvWhereInput[]
    OR?: KvWhereInput[]
    NOT?: KvWhereInput | KvWhereInput[]
    scope?: StringFilter<"Kv"> | string
    key?: StringFilter<"Kv"> | string
    value?: JsonFilter<"Kv">
  }, "scope_key">

  export type KvOrderByWithAggregationInput = {
    scope?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _count?: KvCountOrderByAggregateInput
    _max?: KvMaxOrderByAggregateInput
    _min?: KvMinOrderByAggregateInput
  }

  export type KvScalarWhereWithAggregatesInput = {
    AND?: KvScalarWhereWithAggregatesInput | KvScalarWhereWithAggregatesInput[]
    OR?: KvScalarWhereWithAggregatesInput[]
    NOT?: KvScalarWhereWithAggregatesInput | KvScalarWhereWithAggregatesInput[]
    scope?: StringWithAggregatesFilter<"Kv"> | string
    key?: StringWithAggregatesFilter<"Kv"> | string
    value?: JsonWithAggregatesFilter<"Kv">
  }

  export type UsageHistoryWhereInput = {
    AND?: UsageHistoryWhereInput | UsageHistoryWhereInput[]
    OR?: UsageHistoryWhereInput[]
    NOT?: UsageHistoryWhereInput | UsageHistoryWhereInput[]
    id?: IntFilter<"UsageHistory"> | number
    timestamp?: DateTimeFilter<"UsageHistory"> | Date | string
    provider?: StringNullableFilter<"UsageHistory"> | string | null
    model?: StringNullableFilter<"UsageHistory"> | string | null
    connectionId?: StringNullableFilter<"UsageHistory"> | string | null
    apiKey?: StringNullableFilter<"UsageHistory"> | string | null
    endpoint?: StringNullableFilter<"UsageHistory"> | string | null
    promptTokens?: IntFilter<"UsageHistory"> | number
    completionTokens?: IntFilter<"UsageHistory"> | number
    cost?: FloatFilter<"UsageHistory"> | number
    status?: StringNullableFilter<"UsageHistory"> | string | null
    tokens?: JsonNullableFilter<"UsageHistory">
    meta?: JsonNullableFilter<"UsageHistory">
  }

  export type UsageHistoryOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    provider?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    connectionId?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    endpoint?: SortOrderInput | SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
    status?: SortOrderInput | SortOrder
    tokens?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
  }

  export type UsageHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsageHistoryWhereInput | UsageHistoryWhereInput[]
    OR?: UsageHistoryWhereInput[]
    NOT?: UsageHistoryWhereInput | UsageHistoryWhereInput[]
    timestamp?: DateTimeFilter<"UsageHistory"> | Date | string
    provider?: StringNullableFilter<"UsageHistory"> | string | null
    model?: StringNullableFilter<"UsageHistory"> | string | null
    connectionId?: StringNullableFilter<"UsageHistory"> | string | null
    apiKey?: StringNullableFilter<"UsageHistory"> | string | null
    endpoint?: StringNullableFilter<"UsageHistory"> | string | null
    promptTokens?: IntFilter<"UsageHistory"> | number
    completionTokens?: IntFilter<"UsageHistory"> | number
    cost?: FloatFilter<"UsageHistory"> | number
    status?: StringNullableFilter<"UsageHistory"> | string | null
    tokens?: JsonNullableFilter<"UsageHistory">
    meta?: JsonNullableFilter<"UsageHistory">
  }, "id">

  export type UsageHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    provider?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    connectionId?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    endpoint?: SortOrderInput | SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
    status?: SortOrderInput | SortOrder
    tokens?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    _count?: UsageHistoryCountOrderByAggregateInput
    _avg?: UsageHistoryAvgOrderByAggregateInput
    _max?: UsageHistoryMaxOrderByAggregateInput
    _min?: UsageHistoryMinOrderByAggregateInput
    _sum?: UsageHistorySumOrderByAggregateInput
  }

  export type UsageHistoryScalarWhereWithAggregatesInput = {
    AND?: UsageHistoryScalarWhereWithAggregatesInput | UsageHistoryScalarWhereWithAggregatesInput[]
    OR?: UsageHistoryScalarWhereWithAggregatesInput[]
    NOT?: UsageHistoryScalarWhereWithAggregatesInput | UsageHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsageHistory"> | number
    timestamp?: DateTimeWithAggregatesFilter<"UsageHistory"> | Date | string
    provider?: StringNullableWithAggregatesFilter<"UsageHistory"> | string | null
    model?: StringNullableWithAggregatesFilter<"UsageHistory"> | string | null
    connectionId?: StringNullableWithAggregatesFilter<"UsageHistory"> | string | null
    apiKey?: StringNullableWithAggregatesFilter<"UsageHistory"> | string | null
    endpoint?: StringNullableWithAggregatesFilter<"UsageHistory"> | string | null
    promptTokens?: IntWithAggregatesFilter<"UsageHistory"> | number
    completionTokens?: IntWithAggregatesFilter<"UsageHistory"> | number
    cost?: FloatWithAggregatesFilter<"UsageHistory"> | number
    status?: StringNullableWithAggregatesFilter<"UsageHistory"> | string | null
    tokens?: JsonNullableWithAggregatesFilter<"UsageHistory">
    meta?: JsonNullableWithAggregatesFilter<"UsageHistory">
  }

  export type UsageDailyWhereInput = {
    AND?: UsageDailyWhereInput | UsageDailyWhereInput[]
    OR?: UsageDailyWhereInput[]
    NOT?: UsageDailyWhereInput | UsageDailyWhereInput[]
    dateKey?: StringFilter<"UsageDaily"> | string
    data?: JsonFilter<"UsageDaily">
  }

  export type UsageDailyOrderByWithRelationInput = {
    dateKey?: SortOrder
    data?: SortOrder
  }

  export type UsageDailyWhereUniqueInput = Prisma.AtLeast<{
    dateKey?: string
    AND?: UsageDailyWhereInput | UsageDailyWhereInput[]
    OR?: UsageDailyWhereInput[]
    NOT?: UsageDailyWhereInput | UsageDailyWhereInput[]
    data?: JsonFilter<"UsageDaily">
  }, "dateKey">

  export type UsageDailyOrderByWithAggregationInput = {
    dateKey?: SortOrder
    data?: SortOrder
    _count?: UsageDailyCountOrderByAggregateInput
    _max?: UsageDailyMaxOrderByAggregateInput
    _min?: UsageDailyMinOrderByAggregateInput
  }

  export type UsageDailyScalarWhereWithAggregatesInput = {
    AND?: UsageDailyScalarWhereWithAggregatesInput | UsageDailyScalarWhereWithAggregatesInput[]
    OR?: UsageDailyScalarWhereWithAggregatesInput[]
    NOT?: UsageDailyScalarWhereWithAggregatesInput | UsageDailyScalarWhereWithAggregatesInput[]
    dateKey?: StringWithAggregatesFilter<"UsageDaily"> | string
    data?: JsonWithAggregatesFilter<"UsageDaily">
  }

  export type RequestDetailWhereInput = {
    AND?: RequestDetailWhereInput | RequestDetailWhereInput[]
    OR?: RequestDetailWhereInput[]
    NOT?: RequestDetailWhereInput | RequestDetailWhereInput[]
    id?: StringFilter<"RequestDetail"> | string
    timestamp?: DateTimeFilter<"RequestDetail"> | Date | string
    provider?: StringNullableFilter<"RequestDetail"> | string | null
    model?: StringNullableFilter<"RequestDetail"> | string | null
    connectionId?: StringNullableFilter<"RequestDetail"> | string | null
    status?: StringNullableFilter<"RequestDetail"> | string | null
    data?: JsonFilter<"RequestDetail">
  }

  export type RequestDetailOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    provider?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    connectionId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    data?: SortOrder
  }

  export type RequestDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestDetailWhereInput | RequestDetailWhereInput[]
    OR?: RequestDetailWhereInput[]
    NOT?: RequestDetailWhereInput | RequestDetailWhereInput[]
    timestamp?: DateTimeFilter<"RequestDetail"> | Date | string
    provider?: StringNullableFilter<"RequestDetail"> | string | null
    model?: StringNullableFilter<"RequestDetail"> | string | null
    connectionId?: StringNullableFilter<"RequestDetail"> | string | null
    status?: StringNullableFilter<"RequestDetail"> | string | null
    data?: JsonFilter<"RequestDetail">
  }, "id">

  export type RequestDetailOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    provider?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    connectionId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    data?: SortOrder
    _count?: RequestDetailCountOrderByAggregateInput
    _max?: RequestDetailMaxOrderByAggregateInput
    _min?: RequestDetailMinOrderByAggregateInput
  }

  export type RequestDetailScalarWhereWithAggregatesInput = {
    AND?: RequestDetailScalarWhereWithAggregatesInput | RequestDetailScalarWhereWithAggregatesInput[]
    OR?: RequestDetailScalarWhereWithAggregatesInput[]
    NOT?: RequestDetailScalarWhereWithAggregatesInput | RequestDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestDetail"> | string
    timestamp?: DateTimeWithAggregatesFilter<"RequestDetail"> | Date | string
    provider?: StringNullableWithAggregatesFilter<"RequestDetail"> | string | null
    model?: StringNullableWithAggregatesFilter<"RequestDetail"> | string | null
    connectionId?: StringNullableWithAggregatesFilter<"RequestDetail"> | string | null
    status?: StringNullableWithAggregatesFilter<"RequestDetail"> | string | null
    data?: JsonWithAggregatesFilter<"RequestDetail">
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    title?: StringFilter<"ChatSession"> | string
    mode?: StringNullableFilter<"ChatSession"> | string | null
    requestModel?: StringNullableFilter<"ChatSession"> | string | null
    modelLabel?: StringNullableFilter<"ChatSession"> | string | null
    messages?: JsonFilter<"ChatSession">
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    mode?: SortOrderInput | SortOrder
    requestModel?: SortOrderInput | SortOrder
    modelLabel?: SortOrderInput | SortOrder
    messages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    title?: StringFilter<"ChatSession"> | string
    mode?: StringNullableFilter<"ChatSession"> | string | null
    requestModel?: StringNullableFilter<"ChatSession"> | string | null
    modelLabel?: StringNullableFilter<"ChatSession"> | string | null
    messages?: JsonFilter<"ChatSession">
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    mode?: SortOrderInput | SortOrder
    requestModel?: SortOrderInput | SortOrder
    modelLabel?: SortOrderInput | SortOrder
    messages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    title?: StringWithAggregatesFilter<"ChatSession"> | string
    mode?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    requestModel?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    modelLabel?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    messages?: JsonWithAggregatesFilter<"ChatSession">
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type MetaCreateInput = {
    key: string
    value: string
  }

  export type MetaUncheckedCreateInput = {
    key: string
    value: string
  }

  export type MetaUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MetaUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MetaCreateManyInput = {
    key: string
    value: string
  }

  export type MetaUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MetaUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsCreateInput = {
    id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type SettingsUncheckedCreateInput = {
    id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type SettingsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type SettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type SettingsCreateManyInput = {
    id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type SettingsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type ProviderConnectionCreateInput = {
    id: string
    provider: string
    authType: string
    name?: string | null
    email?: string | null
    priority?: number | null
    isActive?: boolean
    data: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProviderConnectionUncheckedCreateInput = {
    id: string
    provider: string
    authType: string
    name?: string | null
    email?: string | null
    priority?: number | null
    isActive?: boolean
    data: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProviderConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    authType?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    authType?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderConnectionCreateManyInput = {
    id: string
    provider: string
    authType: string
    name?: string | null
    email?: string | null
    priority?: number | null
    isActive?: boolean
    data: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProviderConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    authType?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    authType?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderNodeCreateInput = {
    id: string
    type?: string | null
    name?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProviderNodeUncheckedCreateInput = {
    id: string
    type?: string | null
    name?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProviderNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderNodeCreateManyInput = {
    id: string
    type?: string | null
    name?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProviderNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProxyPoolCreateInput = {
    id: string
    isActive?: boolean
    testStatus?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProxyPoolUncheckedCreateInput = {
    id: string
    isActive?: boolean
    testStatus?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProxyPoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    testStatus?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProxyPoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    testStatus?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProxyPoolCreateManyInput = {
    id: string
    isActive?: boolean
    testStatus?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProxyPoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    testStatus?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProxyPoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    testStatus?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    name?: string | null
    passwordHash: string
    mustChangePassword?: boolean
    isBlocked?: boolean
    permDashboard?: boolean
    permChat?: boolean
    permApi?: boolean
    projectId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    name?: string | null
    passwordHash: string
    mustChangePassword?: boolean
    isBlocked?: boolean
    permDashboard?: boolean
    permChat?: boolean
    permApi?: boolean
    projectId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    permDashboard?: BoolFieldUpdateOperationsInput | boolean
    permChat?: BoolFieldUpdateOperationsInput | boolean
    permApi?: BoolFieldUpdateOperationsInput | boolean
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    permDashboard?: BoolFieldUpdateOperationsInput | boolean
    permChat?: BoolFieldUpdateOperationsInput | boolean
    permApi?: BoolFieldUpdateOperationsInput | boolean
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    name?: string | null
    passwordHash: string
    mustChangePassword?: boolean
    isBlocked?: boolean
    permDashboard?: boolean
    permChat?: boolean
    permApi?: boolean
    projectId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    permDashboard?: BoolFieldUpdateOperationsInput | boolean
    permChat?: BoolFieldUpdateOperationsInput | boolean
    permApi?: BoolFieldUpdateOperationsInput | boolean
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    permDashboard?: BoolFieldUpdateOperationsInput | boolean
    permChat?: BoolFieldUpdateOperationsInput | boolean
    permApi?: BoolFieldUpdateOperationsInput | boolean
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id: string
    name: string
    code?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProjectUncheckedCreateInput = {
    id: string
    name: string
    code?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id: string
    name: string
    code?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id: string
    key: string
    name?: string | null
    machineId?: string | null
    userId?: string | null
    isActive?: boolean
    createdAt: Date | string
  }

  export type ApiKeyUncheckedCreateInput = {
    id: string
    key: string
    name?: string | null
    machineId?: string | null
    userId?: string | null
    isActive?: boolean
    createdAt: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id: string
    key: string
    name?: string | null
    machineId?: string | null
    userId?: string | null
    isActive?: boolean
    createdAt: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboCreateInput = {
    id: string
    name: string
    kind?: string | null
    models: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ComboUncheckedCreateInput = {
    id: string
    name: string
    kind?: string | null
    models: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ComboUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    models?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    models?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboCreateManyInput = {
    id: string
    name: string
    kind?: string | null
    models: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ComboUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    models?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    models?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KvCreateInput = {
    scope: string
    key: string
    value: JsonNullValueInput | InputJsonValue
  }

  export type KvUncheckedCreateInput = {
    scope: string
    key: string
    value: JsonNullValueInput | InputJsonValue
  }

  export type KvUpdateInput = {
    scope?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
  }

  export type KvUncheckedUpdateInput = {
    scope?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
  }

  export type KvCreateManyInput = {
    scope: string
    key: string
    value: JsonNullValueInput | InputJsonValue
  }

  export type KvUpdateManyMutationInput = {
    scope?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
  }

  export type KvUncheckedUpdateManyInput = {
    scope?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
  }

  export type UsageHistoryCreateInput = {
    timestamp: Date | string
    provider?: string | null
    model?: string | null
    connectionId?: string | null
    apiKey?: string | null
    endpoint?: string | null
    promptTokens?: number
    completionTokens?: number
    cost?: number
    status?: string | null
    tokens?: NullableJsonNullValueInput | InputJsonValue
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsageHistoryUncheckedCreateInput = {
    id?: number
    timestamp: Date | string
    provider?: string | null
    model?: string | null
    connectionId?: string | null
    apiKey?: string | null
    endpoint?: string | null
    promptTokens?: number
    completionTokens?: number
    cost?: number
    status?: string | null
    tokens?: NullableJsonNullValueInput | InputJsonValue
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsageHistoryUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableJsonNullValueInput | InputJsonValue
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsageHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableJsonNullValueInput | InputJsonValue
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsageHistoryCreateManyInput = {
    id?: number
    timestamp: Date | string
    provider?: string | null
    model?: string | null
    connectionId?: string | null
    apiKey?: string | null
    endpoint?: string | null
    promptTokens?: number
    completionTokens?: number
    cost?: number
    status?: string | null
    tokens?: NullableJsonNullValueInput | InputJsonValue
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsageHistoryUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableJsonNullValueInput | InputJsonValue
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsageHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableJsonNullValueInput | InputJsonValue
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsageDailyCreateInput = {
    dateKey: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type UsageDailyUncheckedCreateInput = {
    dateKey: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type UsageDailyUpdateInput = {
    dateKey?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type UsageDailyUncheckedUpdateInput = {
    dateKey?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type UsageDailyCreateManyInput = {
    dateKey: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type UsageDailyUpdateManyMutationInput = {
    dateKey?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type UsageDailyUncheckedUpdateManyInput = {
    dateKey?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type RequestDetailCreateInput = {
    id: string
    timestamp: Date | string
    provider?: string | null
    model?: string | null
    connectionId?: string | null
    status?: string | null
    data: JsonNullValueInput | InputJsonValue
  }

  export type RequestDetailUncheckedCreateInput = {
    id: string
    timestamp: Date | string
    provider?: string | null
    model?: string | null
    connectionId?: string | null
    status?: string | null
    data: JsonNullValueInput | InputJsonValue
  }

  export type RequestDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
  }

  export type RequestDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
  }

  export type RequestDetailCreateManyInput = {
    id: string
    timestamp: Date | string
    provider?: string | null
    model?: string | null
    connectionId?: string | null
    status?: string | null
    data: JsonNullValueInput | InputJsonValue
  }

  export type RequestDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
  }

  export type RequestDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
  }

  export type ChatSessionCreateInput = {
    id: string
    title?: string
    mode?: string | null
    requestModel?: string | null
    modelLabel?: string | null
    messages: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ChatSessionUncheckedCreateInput = {
    id: string
    title?: string
    mode?: string | null
    requestModel?: string | null
    modelLabel?: string | null
    messages: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    requestModel?: NullableStringFieldUpdateOperationsInput | string | null
    modelLabel?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    requestModel?: NullableStringFieldUpdateOperationsInput | string | null
    modelLabel?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateManyInput = {
    id: string
    title?: string
    mode?: string | null
    requestModel?: string | null
    modelLabel?: string | null
    messages: JsonNullValueInput | InputJsonValue
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    requestModel?: NullableStringFieldUpdateOperationsInput | string | null
    modelLabel?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    requestModel?: NullableStringFieldUpdateOperationsInput | string | null
    modelLabel?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MetaCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type MetaMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type MetaMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProviderConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    authType?: SortOrder
    name?: SortOrder
    email?: SortOrder
    priority?: SortOrder
    isActive?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderConnectionAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type ProviderConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    authType?: SortOrder
    name?: SortOrder
    email?: SortOrder
    priority?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    authType?: SortOrder
    name?: SortOrder
    email?: SortOrder
    priority?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderConnectionSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProviderNodeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderNodeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProxyPoolCountOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    testStatus?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProxyPoolMaxOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    testStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProxyPoolMinOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    testStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    mustChangePassword?: SortOrder
    isBlocked?: SortOrder
    permDashboard?: SortOrder
    permChat?: SortOrder
    permApi?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    mustChangePassword?: SortOrder
    isBlocked?: SortOrder
    permDashboard?: SortOrder
    permChat?: SortOrder
    permApi?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    mustChangePassword?: SortOrder
    isBlocked?: SortOrder
    permDashboard?: SortOrder
    permChat?: SortOrder
    permApi?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    machineId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    machineId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    machineId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ComboCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    models?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComboMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComboMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KvScopeKeyCompoundUniqueInput = {
    scope: string
    key: string
  }

  export type KvCountOrderByAggregateInput = {
    scope?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type KvMaxOrderByAggregateInput = {
    scope?: SortOrder
    key?: SortOrder
  }

  export type KvMinOrderByAggregateInput = {
    scope?: SortOrder
    key?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsageHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    connectionId?: SortOrder
    apiKey?: SortOrder
    endpoint?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    tokens?: SortOrder
    meta?: SortOrder
  }

  export type UsageHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
  }

  export type UsageHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    connectionId?: SortOrder
    apiKey?: SortOrder
    endpoint?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
    status?: SortOrder
  }

  export type UsageHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    connectionId?: SortOrder
    apiKey?: SortOrder
    endpoint?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
    status?: SortOrder
  }

  export type UsageHistorySumOrderByAggregateInput = {
    id?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UsageDailyCountOrderByAggregateInput = {
    dateKey?: SortOrder
    data?: SortOrder
  }

  export type UsageDailyMaxOrderByAggregateInput = {
    dateKey?: SortOrder
  }

  export type UsageDailyMinOrderByAggregateInput = {
    dateKey?: SortOrder
  }

  export type RequestDetailCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    connectionId?: SortOrder
    status?: SortOrder
    data?: SortOrder
  }

  export type RequestDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    connectionId?: SortOrder
    status?: SortOrder
  }

  export type RequestDetailMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    connectionId?: SortOrder
    status?: SortOrder
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    mode?: SortOrder
    requestModel?: SortOrder
    modelLabel?: SortOrder
    messages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    mode?: SortOrder
    requestModel?: SortOrder
    modelLabel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    mode?: SortOrder
    requestModel?: SortOrder
    modelLabel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}