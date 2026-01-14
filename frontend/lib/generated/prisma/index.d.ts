
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model CampaignRule
 * 
 */
export type CampaignRule = $Result.DefaultSelection<Prisma.$CampaignRulePayload>
/**
 * Model CampaignParticipant
 * 
 */
export type CampaignParticipant = $Result.DefaultSelection<Prisma.$CampaignParticipantPayload>
/**
 * Model RewardClaim
 * 
 */
export type RewardClaim = $Result.DefaultSelection<Prisma.$RewardClaimPayload>
/**
 * Model TaskCompletion
 * 
 */
export type TaskCompletion = $Result.DefaultSelection<Prisma.$TaskCompletionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignRule`: Exposes CRUD operations for the **CampaignRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignRules
    * const campaignRules = await prisma.campaignRule.findMany()
    * ```
    */
  get campaignRule(): Prisma.CampaignRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignParticipant`: Exposes CRUD operations for the **CampaignParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignParticipants
    * const campaignParticipants = await prisma.campaignParticipant.findMany()
    * ```
    */
  get campaignParticipant(): Prisma.CampaignParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rewardClaim`: Exposes CRUD operations for the **RewardClaim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RewardClaims
    * const rewardClaims = await prisma.rewardClaim.findMany()
    * ```
    */
  get rewardClaim(): Prisma.RewardClaimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskCompletion`: Exposes CRUD operations for the **TaskCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskCompletions
    * const taskCompletions = await prisma.taskCompletion.findMany()
    * ```
    */
  get taskCompletion(): Prisma.TaskCompletionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    User: 'User',
    Campaign: 'Campaign',
    CampaignRule: 'CampaignRule',
    CampaignParticipant: 'CampaignParticipant',
    RewardClaim: 'RewardClaim',
    TaskCompletion: 'TaskCompletion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "campaign" | "campaignRule" | "campaignParticipant" | "rewardClaim" | "taskCompletion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      CampaignRule: {
        payload: Prisma.$CampaignRulePayload<ExtArgs>
        fields: Prisma.CampaignRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload>
          }
          findFirst: {
            args: Prisma.CampaignRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload>
          }
          findMany: {
            args: Prisma.CampaignRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload>[]
          }
          create: {
            args: Prisma.CampaignRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload>
          }
          createMany: {
            args: Prisma.CampaignRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload>[]
          }
          delete: {
            args: Prisma.CampaignRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload>
          }
          update: {
            args: Prisma.CampaignRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload>
          }
          deleteMany: {
            args: Prisma.CampaignRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload>[]
          }
          upsert: {
            args: Prisma.CampaignRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRulePayload>
          }
          aggregate: {
            args: Prisma.CampaignRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignRule>
          }
          groupBy: {
            args: Prisma.CampaignRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignRuleCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignRuleCountAggregateOutputType> | number
          }
        }
      }
      CampaignParticipant: {
        payload: Prisma.$CampaignParticipantPayload<ExtArgs>
        fields: Prisma.CampaignParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload>
          }
          findFirst: {
            args: Prisma.CampaignParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload>
          }
          findMany: {
            args: Prisma.CampaignParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload>[]
          }
          create: {
            args: Prisma.CampaignParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload>
          }
          createMany: {
            args: Prisma.CampaignParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload>[]
          }
          delete: {
            args: Prisma.CampaignParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload>
          }
          update: {
            args: Prisma.CampaignParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload>
          }
          deleteMany: {
            args: Prisma.CampaignParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload>[]
          }
          upsert: {
            args: Prisma.CampaignParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignParticipantPayload>
          }
          aggregate: {
            args: Prisma.CampaignParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignParticipant>
          }
          groupBy: {
            args: Prisma.CampaignParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignParticipantCountAggregateOutputType> | number
          }
        }
      }
      RewardClaim: {
        payload: Prisma.$RewardClaimPayload<ExtArgs>
        fields: Prisma.RewardClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardClaimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardClaimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          findFirst: {
            args: Prisma.RewardClaimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardClaimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          findMany: {
            args: Prisma.RewardClaimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>[]
          }
          create: {
            args: Prisma.RewardClaimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          createMany: {
            args: Prisma.RewardClaimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardClaimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>[]
          }
          delete: {
            args: Prisma.RewardClaimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          update: {
            args: Prisma.RewardClaimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          deleteMany: {
            args: Prisma.RewardClaimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardClaimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardClaimUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>[]
          }
          upsert: {
            args: Prisma.RewardClaimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          aggregate: {
            args: Prisma.RewardClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewardClaim>
          }
          groupBy: {
            args: Prisma.RewardClaimGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardClaimCountArgs<ExtArgs>
            result: $Utils.Optional<RewardClaimCountAggregateOutputType> | number
          }
        }
      }
      TaskCompletion: {
        payload: Prisma.$TaskCompletionPayload<ExtArgs>
        fields: Prisma.TaskCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          findFirst: {
            args: Prisma.TaskCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          findMany: {
            args: Prisma.TaskCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>[]
          }
          create: {
            args: Prisma.TaskCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          createMany: {
            args: Prisma.TaskCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCompletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>[]
          }
          delete: {
            args: Prisma.TaskCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          update: {
            args: Prisma.TaskCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          deleteMany: {
            args: Prisma.TaskCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskCompletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>[]
          }
          upsert: {
            args: Prisma.TaskCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          aggregate: {
            args: Prisma.TaskCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskCompletion>
          }
          groupBy: {
            args: Prisma.TaskCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskCompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCompletionCountAggregateOutputType> | number
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    user?: UserOmit
    campaign?: CampaignOmit
    campaignRule?: CampaignRuleOmit
    campaignParticipant?: CampaignParticipantOmit
    rewardClaim?: RewardClaimOmit
    taskCompletion?: TaskCompletionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdCampaigns: number
    participations: number
    claims: number
    taskCompletions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdCampaigns?: boolean | UserCountOutputTypeCountCreatedCampaignsArgs
    participations?: boolean | UserCountOutputTypeCountParticipationsArgs
    claims?: boolean | UserCountOutputTypeCountClaimsArgs
    taskCompletions?: boolean | UserCountOutputTypeCountTaskCompletionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardClaimWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCompletionWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    rules: number
    participants: number
    claims: number
    taskCompletions: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | CampaignCountOutputTypeCountRulesArgs
    participants?: boolean | CampaignCountOutputTypeCountParticipantsArgs
    claims?: boolean | CampaignCountOutputTypeCountClaimsArgs
    taskCompletions?: boolean | CampaignCountOutputTypeCountTaskCompletionsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignRuleWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignParticipantWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardClaimWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountTaskCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCompletionWhereInput
  }


  /**
   * Models
   */

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
    address: string | null
    twitterId: string | null
    twitterUsername: string | null
    twitterHandle: string | null
    isTwitterAuthorized: boolean | null
    twitterAccessToken: string | null
    twitterRefreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    address: string | null
    twitterId: string | null
    twitterUsername: string | null
    twitterHandle: string | null
    isTwitterAuthorized: boolean | null
    twitterAccessToken: string | null
    twitterRefreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    address: number
    twitterId: number
    twitterUsername: number
    twitterHandle: number
    isTwitterAuthorized: number
    twitterAccessToken: number
    twitterRefreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    address?: true
    twitterId?: true
    twitterUsername?: true
    twitterHandle?: true
    isTwitterAuthorized?: true
    twitterAccessToken?: true
    twitterRefreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    address?: true
    twitterId?: true
    twitterUsername?: true
    twitterHandle?: true
    isTwitterAuthorized?: true
    twitterAccessToken?: true
    twitterRefreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    address?: true
    twitterId?: true
    twitterUsername?: true
    twitterHandle?: true
    isTwitterAuthorized?: true
    twitterAccessToken?: true
    twitterRefreshToken?: true
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
    address: string
    twitterId: string | null
    twitterUsername: string | null
    twitterHandle: string | null
    isTwitterAuthorized: boolean
    twitterAccessToken: string | null
    twitterRefreshToken: string | null
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
    address?: boolean
    twitterId?: boolean
    twitterUsername?: boolean
    twitterHandle?: boolean
    isTwitterAuthorized?: boolean
    twitterAccessToken?: boolean
    twitterRefreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdCampaigns?: boolean | User$createdCampaignsArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    claims?: boolean | User$claimsArgs<ExtArgs>
    taskCompletions?: boolean | User$taskCompletionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    twitterId?: boolean
    twitterUsername?: boolean
    twitterHandle?: boolean
    isTwitterAuthorized?: boolean
    twitterAccessToken?: boolean
    twitterRefreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    twitterId?: boolean
    twitterUsername?: boolean
    twitterHandle?: boolean
    isTwitterAuthorized?: boolean
    twitterAccessToken?: boolean
    twitterRefreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    address?: boolean
    twitterId?: boolean
    twitterUsername?: boolean
    twitterHandle?: boolean
    isTwitterAuthorized?: boolean
    twitterAccessToken?: boolean
    twitterRefreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "twitterId" | "twitterUsername" | "twitterHandle" | "isTwitterAuthorized" | "twitterAccessToken" | "twitterRefreshToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdCampaigns?: boolean | User$createdCampaignsArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    claims?: boolean | User$claimsArgs<ExtArgs>
    taskCompletions?: boolean | User$taskCompletionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdCampaigns: Prisma.$CampaignPayload<ExtArgs>[]
      participations: Prisma.$CampaignParticipantPayload<ExtArgs>[]
      claims: Prisma.$RewardClaimPayload<ExtArgs>[]
      taskCompletions: Prisma.$TaskCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      twitterId: string | null
      twitterUsername: string | null
      twitterHandle: string | null
      isTwitterAuthorized: boolean
      twitterAccessToken: string | null
      twitterRefreshToken: string | null
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
    createdCampaigns<T extends User$createdCampaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCampaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participations<T extends User$participationsArgs<ExtArgs> = {}>(args?: Subset<T, User$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    claims<T extends User$claimsArgs<ExtArgs> = {}>(args?: Subset<T, User$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskCompletions<T extends User$taskCompletionsArgs<ExtArgs> = {}>(args?: Subset<T, User$taskCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly address: FieldRef<"User", 'String'>
    readonly twitterId: FieldRef<"User", 'String'>
    readonly twitterUsername: FieldRef<"User", 'String'>
    readonly twitterHandle: FieldRef<"User", 'String'>
    readonly isTwitterAuthorized: FieldRef<"User", 'Boolean'>
    readonly twitterAccessToken: FieldRef<"User", 'String'>
    readonly twitterRefreshToken: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.createdCampaigns
   */
  export type User$createdCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.participations
   */
  export type User$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    where?: CampaignParticipantWhereInput
    orderBy?: CampaignParticipantOrderByWithRelationInput | CampaignParticipantOrderByWithRelationInput[]
    cursor?: CampaignParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignParticipantScalarFieldEnum | CampaignParticipantScalarFieldEnum[]
  }

  /**
   * User.claims
   */
  export type User$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    where?: RewardClaimWhereInput
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    cursor?: RewardClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardClaimScalarFieldEnum | RewardClaimScalarFieldEnum[]
  }

  /**
   * User.taskCompletions
   */
  export type User$taskCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    where?: TaskCompletionWhereInput
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    cursor?: TaskCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskCompletionScalarFieldEnum | TaskCompletionScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    totalParticipants: number | null
    maxParticipants: number | null
  }

  export type CampaignSumAggregateOutputType = {
    totalParticipants: number | null
    maxParticipants: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    name: string | null
    description: string | null
    contractAddress: string | null
    rewardAmount: string | null
    totalParticipants: number | null
    maxParticipants: number | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    name: string | null
    description: string | null
    contractAddress: string | null
    rewardAmount: string | null
    totalParticipants: number | null
    maxParticipants: number | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    campaignId: number
    name: number
    description: number
    contractAddress: number
    rewardAmount: number
    totalParticipants: number
    maxParticipants: number
    startDate: number
    endDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    creatorId: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    totalParticipants?: true
    maxParticipants?: true
  }

  export type CampaignSumAggregateInputType = {
    totalParticipants?: true
    maxParticipants?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    campaignId?: true
    name?: true
    description?: true
    contractAddress?: true
    rewardAmount?: true
    totalParticipants?: true
    maxParticipants?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    campaignId?: true
    name?: true
    description?: true
    contractAddress?: true
    rewardAmount?: true
    totalParticipants?: true
    maxParticipants?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    campaignId?: true
    name?: true
    description?: true
    contractAddress?: true
    rewardAmount?: true
    totalParticipants?: true
    maxParticipants?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    campaignId: string
    name: string
    description: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants: number
    maxParticipants: number | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    creatorId: string
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    name?: boolean
    description?: boolean
    contractAddress?: boolean
    rewardAmount?: boolean
    totalParticipants?: boolean
    maxParticipants?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    rules?: boolean | Campaign$rulesArgs<ExtArgs>
    participants?: boolean | Campaign$participantsArgs<ExtArgs>
    claims?: boolean | Campaign$claimsArgs<ExtArgs>
    taskCompletions?: boolean | Campaign$taskCompletionsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    name?: boolean
    description?: boolean
    contractAddress?: boolean
    rewardAmount?: boolean
    totalParticipants?: boolean
    maxParticipants?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    name?: boolean
    description?: boolean
    contractAddress?: boolean
    rewardAmount?: boolean
    totalParticipants?: boolean
    maxParticipants?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    campaignId?: boolean
    name?: boolean
    description?: boolean
    contractAddress?: boolean
    rewardAmount?: boolean
    totalParticipants?: boolean
    maxParticipants?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "name" | "description" | "contractAddress" | "rewardAmount" | "totalParticipants" | "maxParticipants" | "startDate" | "endDate" | "isActive" | "createdAt" | "updatedAt" | "creatorId", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    rules?: boolean | Campaign$rulesArgs<ExtArgs>
    participants?: boolean | Campaign$participantsArgs<ExtArgs>
    claims?: boolean | Campaign$claimsArgs<ExtArgs>
    taskCompletions?: boolean | Campaign$taskCompletionsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      rules: Prisma.$CampaignRulePayload<ExtArgs>[]
      participants: Prisma.$CampaignParticipantPayload<ExtArgs>[]
      claims: Prisma.$RewardClaimPayload<ExtArgs>[]
      taskCompletions: Prisma.$TaskCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      name: string
      description: string | null
      contractAddress: string
      rewardAmount: string
      totalParticipants: number
      maxParticipants: number | null
      startDate: Date | null
      endDate: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      creatorId: string
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rules<T extends Campaign$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Campaign$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    claims<T extends Campaign$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskCompletions<T extends Campaign$taskCompletionsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$taskCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly campaignId: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly contractAddress: FieldRef<"Campaign", 'String'>
    readonly rewardAmount: FieldRef<"Campaign", 'String'>
    readonly totalParticipants: FieldRef<"Campaign", 'Int'>
    readonly maxParticipants: FieldRef<"Campaign", 'Int'>
    readonly startDate: FieldRef<"Campaign", 'DateTime'>
    readonly endDate: FieldRef<"Campaign", 'DateTime'>
    readonly isActive: FieldRef<"Campaign", 'Boolean'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
    readonly creatorId: FieldRef<"Campaign", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.rules
   */
  export type Campaign$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
    where?: CampaignRuleWhereInput
    orderBy?: CampaignRuleOrderByWithRelationInput | CampaignRuleOrderByWithRelationInput[]
    cursor?: CampaignRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignRuleScalarFieldEnum | CampaignRuleScalarFieldEnum[]
  }

  /**
   * Campaign.participants
   */
  export type Campaign$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    where?: CampaignParticipantWhereInput
    orderBy?: CampaignParticipantOrderByWithRelationInput | CampaignParticipantOrderByWithRelationInput[]
    cursor?: CampaignParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignParticipantScalarFieldEnum | CampaignParticipantScalarFieldEnum[]
  }

  /**
   * Campaign.claims
   */
  export type Campaign$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    where?: RewardClaimWhereInput
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    cursor?: RewardClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardClaimScalarFieldEnum | RewardClaimScalarFieldEnum[]
  }

  /**
   * Campaign.taskCompletions
   */
  export type Campaign$taskCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    where?: TaskCompletionWhereInput
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    cursor?: TaskCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskCompletionScalarFieldEnum | TaskCompletionScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model CampaignRule
   */

  export type AggregateCampaignRule = {
    _count: CampaignRuleCountAggregateOutputType | null
    _avg: CampaignRuleAvgAggregateOutputType | null
    _sum: CampaignRuleSumAggregateOutputType | null
    _min: CampaignRuleMinAggregateOutputType | null
    _max: CampaignRuleMaxAggregateOutputType | null
  }

  export type CampaignRuleAvgAggregateOutputType = {
    order: number | null
  }

  export type CampaignRuleSumAggregateOutputType = {
    order: number | null
  }

  export type CampaignRuleMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    ruleType: string | null
    ruleValue: string | null
    description: string | null
    isRequired: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignRuleMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    ruleType: string | null
    ruleValue: string | null
    description: string | null
    isRequired: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignRuleCountAggregateOutputType = {
    id: number
    campaignId: number
    ruleType: number
    ruleValue: number
    description: number
    isRequired: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignRuleAvgAggregateInputType = {
    order?: true
  }

  export type CampaignRuleSumAggregateInputType = {
    order?: true
  }

  export type CampaignRuleMinAggregateInputType = {
    id?: true
    campaignId?: true
    ruleType?: true
    ruleValue?: true
    description?: true
    isRequired?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignRuleMaxAggregateInputType = {
    id?: true
    campaignId?: true
    ruleType?: true
    ruleValue?: true
    description?: true
    isRequired?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignRuleCountAggregateInputType = {
    id?: true
    campaignId?: true
    ruleType?: true
    ruleValue?: true
    description?: true
    isRequired?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignRule to aggregate.
     */
    where?: CampaignRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignRules to fetch.
     */
    orderBy?: CampaignRuleOrderByWithRelationInput | CampaignRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignRules
    **/
    _count?: true | CampaignRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignRuleMaxAggregateInputType
  }

  export type GetCampaignRuleAggregateType<T extends CampaignRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignRule[P]>
      : GetScalarType<T[P], AggregateCampaignRule[P]>
  }




  export type CampaignRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignRuleWhereInput
    orderBy?: CampaignRuleOrderByWithAggregationInput | CampaignRuleOrderByWithAggregationInput[]
    by: CampaignRuleScalarFieldEnum[] | CampaignRuleScalarFieldEnum
    having?: CampaignRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignRuleCountAggregateInputType | true
    _avg?: CampaignRuleAvgAggregateInputType
    _sum?: CampaignRuleSumAggregateInputType
    _min?: CampaignRuleMinAggregateInputType
    _max?: CampaignRuleMaxAggregateInputType
  }

  export type CampaignRuleGroupByOutputType = {
    id: string
    campaignId: string
    ruleType: string
    ruleValue: string | null
    description: string
    isRequired: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: CampaignRuleCountAggregateOutputType | null
    _avg: CampaignRuleAvgAggregateOutputType | null
    _sum: CampaignRuleSumAggregateOutputType | null
    _min: CampaignRuleMinAggregateOutputType | null
    _max: CampaignRuleMaxAggregateOutputType | null
  }

  type GetCampaignRuleGroupByPayload<T extends CampaignRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignRuleGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignRuleGroupByOutputType[P]>
        }
      >
    >


  export type CampaignRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    ruleType?: boolean
    ruleValue?: boolean
    description?: boolean
    isRequired?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignRule"]>

  export type CampaignRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    ruleType?: boolean
    ruleValue?: boolean
    description?: boolean
    isRequired?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignRule"]>

  export type CampaignRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    ruleType?: boolean
    ruleValue?: boolean
    description?: boolean
    isRequired?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignRule"]>

  export type CampaignRuleSelectScalar = {
    id?: boolean
    campaignId?: boolean
    ruleType?: boolean
    ruleValue?: boolean
    description?: boolean
    isRequired?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "ruleType" | "ruleValue" | "description" | "isRequired" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["campaignRule"]>
  export type CampaignRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type CampaignRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type CampaignRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $CampaignRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignRule"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      ruleType: string
      ruleValue: string | null
      description: string
      isRequired: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaignRule"]>
    composites: {}
  }

  type CampaignRuleGetPayload<S extends boolean | null | undefined | CampaignRuleDefaultArgs> = $Result.GetResult<Prisma.$CampaignRulePayload, S>

  type CampaignRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignRuleCountAggregateInputType | true
    }

  export interface CampaignRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignRule'], meta: { name: 'CampaignRule' } }
    /**
     * Find zero or one CampaignRule that matches the filter.
     * @param {CampaignRuleFindUniqueArgs} args - Arguments to find a CampaignRule
     * @example
     * // Get one CampaignRule
     * const campaignRule = await prisma.campaignRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignRuleFindUniqueArgs>(args: SelectSubset<T, CampaignRuleFindUniqueArgs<ExtArgs>>): Prisma__CampaignRuleClient<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignRuleFindUniqueOrThrowArgs} args - Arguments to find a CampaignRule
     * @example
     * // Get one CampaignRule
     * const campaignRule = await prisma.campaignRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignRuleClient<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRuleFindFirstArgs} args - Arguments to find a CampaignRule
     * @example
     * // Get one CampaignRule
     * const campaignRule = await prisma.campaignRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignRuleFindFirstArgs>(args?: SelectSubset<T, CampaignRuleFindFirstArgs<ExtArgs>>): Prisma__CampaignRuleClient<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRuleFindFirstOrThrowArgs} args - Arguments to find a CampaignRule
     * @example
     * // Get one CampaignRule
     * const campaignRule = await prisma.campaignRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignRuleClient<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignRules
     * const campaignRules = await prisma.campaignRule.findMany()
     * 
     * // Get first 10 CampaignRules
     * const campaignRules = await prisma.campaignRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignRuleWithIdOnly = await prisma.campaignRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignRuleFindManyArgs>(args?: SelectSubset<T, CampaignRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignRule.
     * @param {CampaignRuleCreateArgs} args - Arguments to create a CampaignRule.
     * @example
     * // Create one CampaignRule
     * const CampaignRule = await prisma.campaignRule.create({
     *   data: {
     *     // ... data to create a CampaignRule
     *   }
     * })
     * 
     */
    create<T extends CampaignRuleCreateArgs>(args: SelectSubset<T, CampaignRuleCreateArgs<ExtArgs>>): Prisma__CampaignRuleClient<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignRules.
     * @param {CampaignRuleCreateManyArgs} args - Arguments to create many CampaignRules.
     * @example
     * // Create many CampaignRules
     * const campaignRule = await prisma.campaignRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignRuleCreateManyArgs>(args?: SelectSubset<T, CampaignRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignRules and returns the data saved in the database.
     * @param {CampaignRuleCreateManyAndReturnArgs} args - Arguments to create many CampaignRules.
     * @example
     * // Create many CampaignRules
     * const campaignRule = await prisma.campaignRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignRules and only return the `id`
     * const campaignRuleWithIdOnly = await prisma.campaignRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignRule.
     * @param {CampaignRuleDeleteArgs} args - Arguments to delete one CampaignRule.
     * @example
     * // Delete one CampaignRule
     * const CampaignRule = await prisma.campaignRule.delete({
     *   where: {
     *     // ... filter to delete one CampaignRule
     *   }
     * })
     * 
     */
    delete<T extends CampaignRuleDeleteArgs>(args: SelectSubset<T, CampaignRuleDeleteArgs<ExtArgs>>): Prisma__CampaignRuleClient<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignRule.
     * @param {CampaignRuleUpdateArgs} args - Arguments to update one CampaignRule.
     * @example
     * // Update one CampaignRule
     * const campaignRule = await prisma.campaignRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignRuleUpdateArgs>(args: SelectSubset<T, CampaignRuleUpdateArgs<ExtArgs>>): Prisma__CampaignRuleClient<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignRules.
     * @param {CampaignRuleDeleteManyArgs} args - Arguments to filter CampaignRules to delete.
     * @example
     * // Delete a few CampaignRules
     * const { count } = await prisma.campaignRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignRuleDeleteManyArgs>(args?: SelectSubset<T, CampaignRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignRules
     * const campaignRule = await prisma.campaignRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignRuleUpdateManyArgs>(args: SelectSubset<T, CampaignRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignRules and returns the data updated in the database.
     * @param {CampaignRuleUpdateManyAndReturnArgs} args - Arguments to update many CampaignRules.
     * @example
     * // Update many CampaignRules
     * const campaignRule = await prisma.campaignRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignRules and only return the `id`
     * const campaignRuleWithIdOnly = await prisma.campaignRule.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignRule.
     * @param {CampaignRuleUpsertArgs} args - Arguments to update or create a CampaignRule.
     * @example
     * // Update or create a CampaignRule
     * const campaignRule = await prisma.campaignRule.upsert({
     *   create: {
     *     // ... data to create a CampaignRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignRule we want to update
     *   }
     * })
     */
    upsert<T extends CampaignRuleUpsertArgs>(args: SelectSubset<T, CampaignRuleUpsertArgs<ExtArgs>>): Prisma__CampaignRuleClient<$Result.GetResult<Prisma.$CampaignRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRuleCountArgs} args - Arguments to filter CampaignRules to count.
     * @example
     * // Count the number of CampaignRules
     * const count = await prisma.campaignRule.count({
     *   where: {
     *     // ... the filter for the CampaignRules we want to count
     *   }
     * })
    **/
    count<T extends CampaignRuleCountArgs>(
      args?: Subset<T, CampaignRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignRuleAggregateArgs>(args: Subset<T, CampaignRuleAggregateArgs>): Prisma.PrismaPromise<GetCampaignRuleAggregateType<T>>

    /**
     * Group by CampaignRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRuleGroupByArgs} args - Group by arguments.
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
      T extends CampaignRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignRuleGroupByArgs['orderBy'] }
        : { orderBy?: CampaignRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignRule model
   */
  readonly fields: CampaignRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CampaignRule model
   */
  interface CampaignRuleFieldRefs {
    readonly id: FieldRef<"CampaignRule", 'String'>
    readonly campaignId: FieldRef<"CampaignRule", 'String'>
    readonly ruleType: FieldRef<"CampaignRule", 'String'>
    readonly ruleValue: FieldRef<"CampaignRule", 'String'>
    readonly description: FieldRef<"CampaignRule", 'String'>
    readonly isRequired: FieldRef<"CampaignRule", 'Boolean'>
    readonly order: FieldRef<"CampaignRule", 'Int'>
    readonly createdAt: FieldRef<"CampaignRule", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaignRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaignRule findUnique
   */
  export type CampaignRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
    /**
     * Filter, which CampaignRule to fetch.
     */
    where: CampaignRuleWhereUniqueInput
  }

  /**
   * CampaignRule findUniqueOrThrow
   */
  export type CampaignRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
    /**
     * Filter, which CampaignRule to fetch.
     */
    where: CampaignRuleWhereUniqueInput
  }

  /**
   * CampaignRule findFirst
   */
  export type CampaignRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
    /**
     * Filter, which CampaignRule to fetch.
     */
    where?: CampaignRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignRules to fetch.
     */
    orderBy?: CampaignRuleOrderByWithRelationInput | CampaignRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignRules.
     */
    cursor?: CampaignRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignRules.
     */
    distinct?: CampaignRuleScalarFieldEnum | CampaignRuleScalarFieldEnum[]
  }

  /**
   * CampaignRule findFirstOrThrow
   */
  export type CampaignRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
    /**
     * Filter, which CampaignRule to fetch.
     */
    where?: CampaignRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignRules to fetch.
     */
    orderBy?: CampaignRuleOrderByWithRelationInput | CampaignRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignRules.
     */
    cursor?: CampaignRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignRules.
     */
    distinct?: CampaignRuleScalarFieldEnum | CampaignRuleScalarFieldEnum[]
  }

  /**
   * CampaignRule findMany
   */
  export type CampaignRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
    /**
     * Filter, which CampaignRules to fetch.
     */
    where?: CampaignRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignRules to fetch.
     */
    orderBy?: CampaignRuleOrderByWithRelationInput | CampaignRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignRules.
     */
    cursor?: CampaignRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignRules.
     */
    skip?: number
    distinct?: CampaignRuleScalarFieldEnum | CampaignRuleScalarFieldEnum[]
  }

  /**
   * CampaignRule create
   */
  export type CampaignRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignRule.
     */
    data: XOR<CampaignRuleCreateInput, CampaignRuleUncheckedCreateInput>
  }

  /**
   * CampaignRule createMany
   */
  export type CampaignRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignRules.
     */
    data: CampaignRuleCreateManyInput | CampaignRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignRule createManyAndReturn
   */
  export type CampaignRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignRules.
     */
    data: CampaignRuleCreateManyInput | CampaignRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignRule update
   */
  export type CampaignRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignRule.
     */
    data: XOR<CampaignRuleUpdateInput, CampaignRuleUncheckedUpdateInput>
    /**
     * Choose, which CampaignRule to update.
     */
    where: CampaignRuleWhereUniqueInput
  }

  /**
   * CampaignRule updateMany
   */
  export type CampaignRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignRules.
     */
    data: XOR<CampaignRuleUpdateManyMutationInput, CampaignRuleUncheckedUpdateManyInput>
    /**
     * Filter which CampaignRules to update
     */
    where?: CampaignRuleWhereInput
    /**
     * Limit how many CampaignRules to update.
     */
    limit?: number
  }

  /**
   * CampaignRule updateManyAndReturn
   */
  export type CampaignRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * The data used to update CampaignRules.
     */
    data: XOR<CampaignRuleUpdateManyMutationInput, CampaignRuleUncheckedUpdateManyInput>
    /**
     * Filter which CampaignRules to update
     */
    where?: CampaignRuleWhereInput
    /**
     * Limit how many CampaignRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignRule upsert
   */
  export type CampaignRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignRule to update in case it exists.
     */
    where: CampaignRuleWhereUniqueInput
    /**
     * In case the CampaignRule found by the `where` argument doesn't exist, create a new CampaignRule with this data.
     */
    create: XOR<CampaignRuleCreateInput, CampaignRuleUncheckedCreateInput>
    /**
     * In case the CampaignRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignRuleUpdateInput, CampaignRuleUncheckedUpdateInput>
  }

  /**
   * CampaignRule delete
   */
  export type CampaignRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
    /**
     * Filter which CampaignRule to delete.
     */
    where: CampaignRuleWhereUniqueInput
  }

  /**
   * CampaignRule deleteMany
   */
  export type CampaignRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignRules to delete
     */
    where?: CampaignRuleWhereInput
    /**
     * Limit how many CampaignRules to delete.
     */
    limit?: number
  }

  /**
   * CampaignRule without action
   */
  export type CampaignRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRule
     */
    select?: CampaignRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRule
     */
    omit?: CampaignRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRuleInclude<ExtArgs> | null
  }


  /**
   * Model CampaignParticipant
   */

  export type AggregateCampaignParticipant = {
    _count: CampaignParticipantCountAggregateOutputType | null
    _min: CampaignParticipantMinAggregateOutputType | null
    _max: CampaignParticipantMaxAggregateOutputType | null
  }

  export type CampaignParticipantMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    userId: string | null
    hasJoined: boolean | null
    joinedAt: Date | null
    validationStatus: string | null
    validationMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignParticipantMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    userId: string | null
    hasJoined: boolean | null
    joinedAt: Date | null
    validationStatus: string | null
    validationMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignParticipantCountAggregateOutputType = {
    id: number
    campaignId: number
    userId: number
    hasJoined: number
    joinedAt: number
    validationStatus: number
    validationMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignParticipantMinAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    hasJoined?: true
    joinedAt?: true
    validationStatus?: true
    validationMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignParticipantMaxAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    hasJoined?: true
    joinedAt?: true
    validationStatus?: true
    validationMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignParticipantCountAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    hasJoined?: true
    joinedAt?: true
    validationStatus?: true
    validationMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignParticipant to aggregate.
     */
    where?: CampaignParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignParticipants to fetch.
     */
    orderBy?: CampaignParticipantOrderByWithRelationInput | CampaignParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignParticipants
    **/
    _count?: true | CampaignParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignParticipantMaxAggregateInputType
  }

  export type GetCampaignParticipantAggregateType<T extends CampaignParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignParticipant[P]>
      : GetScalarType<T[P], AggregateCampaignParticipant[P]>
  }




  export type CampaignParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignParticipantWhereInput
    orderBy?: CampaignParticipantOrderByWithAggregationInput | CampaignParticipantOrderByWithAggregationInput[]
    by: CampaignParticipantScalarFieldEnum[] | CampaignParticipantScalarFieldEnum
    having?: CampaignParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignParticipantCountAggregateInputType | true
    _min?: CampaignParticipantMinAggregateInputType
    _max?: CampaignParticipantMaxAggregateInputType
  }

  export type CampaignParticipantGroupByOutputType = {
    id: string
    campaignId: string
    userId: string
    hasJoined: boolean
    joinedAt: Date | null
    validationStatus: string
    validationMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: CampaignParticipantCountAggregateOutputType | null
    _min: CampaignParticipantMinAggregateOutputType | null
    _max: CampaignParticipantMaxAggregateOutputType | null
  }

  type GetCampaignParticipantGroupByPayload<T extends CampaignParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignParticipantGroupByOutputType[P]>
        }
      >
    >


  export type CampaignParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    hasJoined?: boolean
    joinedAt?: boolean
    validationStatus?: boolean
    validationMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignParticipant"]>

  export type CampaignParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    hasJoined?: boolean
    joinedAt?: boolean
    validationStatus?: boolean
    validationMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignParticipant"]>

  export type CampaignParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    hasJoined?: boolean
    joinedAt?: boolean
    validationStatus?: boolean
    validationMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignParticipant"]>

  export type CampaignParticipantSelectScalar = {
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    hasJoined?: boolean
    joinedAt?: boolean
    validationStatus?: boolean
    validationMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "userId" | "hasJoined" | "joinedAt" | "validationStatus" | "validationMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["campaignParticipant"]>
  export type CampaignParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignParticipant"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      userId: string
      hasJoined: boolean
      joinedAt: Date | null
      validationStatus: string
      validationMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaignParticipant"]>
    composites: {}
  }

  type CampaignParticipantGetPayload<S extends boolean | null | undefined | CampaignParticipantDefaultArgs> = $Result.GetResult<Prisma.$CampaignParticipantPayload, S>

  type CampaignParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignParticipantCountAggregateInputType | true
    }

  export interface CampaignParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignParticipant'], meta: { name: 'CampaignParticipant' } }
    /**
     * Find zero or one CampaignParticipant that matches the filter.
     * @param {CampaignParticipantFindUniqueArgs} args - Arguments to find a CampaignParticipant
     * @example
     * // Get one CampaignParticipant
     * const campaignParticipant = await prisma.campaignParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignParticipantFindUniqueArgs>(args: SelectSubset<T, CampaignParticipantFindUniqueArgs<ExtArgs>>): Prisma__CampaignParticipantClient<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignParticipantFindUniqueOrThrowArgs} args - Arguments to find a CampaignParticipant
     * @example
     * // Get one CampaignParticipant
     * const campaignParticipant = await prisma.campaignParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignParticipantClient<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignParticipantFindFirstArgs} args - Arguments to find a CampaignParticipant
     * @example
     * // Get one CampaignParticipant
     * const campaignParticipant = await prisma.campaignParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignParticipantFindFirstArgs>(args?: SelectSubset<T, CampaignParticipantFindFirstArgs<ExtArgs>>): Prisma__CampaignParticipantClient<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignParticipantFindFirstOrThrowArgs} args - Arguments to find a CampaignParticipant
     * @example
     * // Get one CampaignParticipant
     * const campaignParticipant = await prisma.campaignParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignParticipantClient<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignParticipants
     * const campaignParticipants = await prisma.campaignParticipant.findMany()
     * 
     * // Get first 10 CampaignParticipants
     * const campaignParticipants = await prisma.campaignParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignParticipantWithIdOnly = await prisma.campaignParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignParticipantFindManyArgs>(args?: SelectSubset<T, CampaignParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignParticipant.
     * @param {CampaignParticipantCreateArgs} args - Arguments to create a CampaignParticipant.
     * @example
     * // Create one CampaignParticipant
     * const CampaignParticipant = await prisma.campaignParticipant.create({
     *   data: {
     *     // ... data to create a CampaignParticipant
     *   }
     * })
     * 
     */
    create<T extends CampaignParticipantCreateArgs>(args: SelectSubset<T, CampaignParticipantCreateArgs<ExtArgs>>): Prisma__CampaignParticipantClient<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignParticipants.
     * @param {CampaignParticipantCreateManyArgs} args - Arguments to create many CampaignParticipants.
     * @example
     * // Create many CampaignParticipants
     * const campaignParticipant = await prisma.campaignParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignParticipantCreateManyArgs>(args?: SelectSubset<T, CampaignParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignParticipants and returns the data saved in the database.
     * @param {CampaignParticipantCreateManyAndReturnArgs} args - Arguments to create many CampaignParticipants.
     * @example
     * // Create many CampaignParticipants
     * const campaignParticipant = await prisma.campaignParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignParticipants and only return the `id`
     * const campaignParticipantWithIdOnly = await prisma.campaignParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignParticipant.
     * @param {CampaignParticipantDeleteArgs} args - Arguments to delete one CampaignParticipant.
     * @example
     * // Delete one CampaignParticipant
     * const CampaignParticipant = await prisma.campaignParticipant.delete({
     *   where: {
     *     // ... filter to delete one CampaignParticipant
     *   }
     * })
     * 
     */
    delete<T extends CampaignParticipantDeleteArgs>(args: SelectSubset<T, CampaignParticipantDeleteArgs<ExtArgs>>): Prisma__CampaignParticipantClient<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignParticipant.
     * @param {CampaignParticipantUpdateArgs} args - Arguments to update one CampaignParticipant.
     * @example
     * // Update one CampaignParticipant
     * const campaignParticipant = await prisma.campaignParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignParticipantUpdateArgs>(args: SelectSubset<T, CampaignParticipantUpdateArgs<ExtArgs>>): Prisma__CampaignParticipantClient<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignParticipants.
     * @param {CampaignParticipantDeleteManyArgs} args - Arguments to filter CampaignParticipants to delete.
     * @example
     * // Delete a few CampaignParticipants
     * const { count } = await prisma.campaignParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignParticipantDeleteManyArgs>(args?: SelectSubset<T, CampaignParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignParticipants
     * const campaignParticipant = await prisma.campaignParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignParticipantUpdateManyArgs>(args: SelectSubset<T, CampaignParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignParticipants and returns the data updated in the database.
     * @param {CampaignParticipantUpdateManyAndReturnArgs} args - Arguments to update many CampaignParticipants.
     * @example
     * // Update many CampaignParticipants
     * const campaignParticipant = await prisma.campaignParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignParticipants and only return the `id`
     * const campaignParticipantWithIdOnly = await prisma.campaignParticipant.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignParticipant.
     * @param {CampaignParticipantUpsertArgs} args - Arguments to update or create a CampaignParticipant.
     * @example
     * // Update or create a CampaignParticipant
     * const campaignParticipant = await prisma.campaignParticipant.upsert({
     *   create: {
     *     // ... data to create a CampaignParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignParticipant we want to update
     *   }
     * })
     */
    upsert<T extends CampaignParticipantUpsertArgs>(args: SelectSubset<T, CampaignParticipantUpsertArgs<ExtArgs>>): Prisma__CampaignParticipantClient<$Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignParticipantCountArgs} args - Arguments to filter CampaignParticipants to count.
     * @example
     * // Count the number of CampaignParticipants
     * const count = await prisma.campaignParticipant.count({
     *   where: {
     *     // ... the filter for the CampaignParticipants we want to count
     *   }
     * })
    **/
    count<T extends CampaignParticipantCountArgs>(
      args?: Subset<T, CampaignParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignParticipantAggregateArgs>(args: Subset<T, CampaignParticipantAggregateArgs>): Prisma.PrismaPromise<GetCampaignParticipantAggregateType<T>>

    /**
     * Group by CampaignParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignParticipantGroupByArgs} args - Group by arguments.
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
      T extends CampaignParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignParticipantGroupByArgs['orderBy'] }
        : { orderBy?: CampaignParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignParticipant model
   */
  readonly fields: CampaignParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CampaignParticipant model
   */
  interface CampaignParticipantFieldRefs {
    readonly id: FieldRef<"CampaignParticipant", 'String'>
    readonly campaignId: FieldRef<"CampaignParticipant", 'String'>
    readonly userId: FieldRef<"CampaignParticipant", 'String'>
    readonly hasJoined: FieldRef<"CampaignParticipant", 'Boolean'>
    readonly joinedAt: FieldRef<"CampaignParticipant", 'DateTime'>
    readonly validationStatus: FieldRef<"CampaignParticipant", 'String'>
    readonly validationMessage: FieldRef<"CampaignParticipant", 'String'>
    readonly createdAt: FieldRef<"CampaignParticipant", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaignParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaignParticipant findUnique
   */
  export type CampaignParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CampaignParticipant to fetch.
     */
    where: CampaignParticipantWhereUniqueInput
  }

  /**
   * CampaignParticipant findUniqueOrThrow
   */
  export type CampaignParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CampaignParticipant to fetch.
     */
    where: CampaignParticipantWhereUniqueInput
  }

  /**
   * CampaignParticipant findFirst
   */
  export type CampaignParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CampaignParticipant to fetch.
     */
    where?: CampaignParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignParticipants to fetch.
     */
    orderBy?: CampaignParticipantOrderByWithRelationInput | CampaignParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignParticipants.
     */
    cursor?: CampaignParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignParticipants.
     */
    distinct?: CampaignParticipantScalarFieldEnum | CampaignParticipantScalarFieldEnum[]
  }

  /**
   * CampaignParticipant findFirstOrThrow
   */
  export type CampaignParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CampaignParticipant to fetch.
     */
    where?: CampaignParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignParticipants to fetch.
     */
    orderBy?: CampaignParticipantOrderByWithRelationInput | CampaignParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignParticipants.
     */
    cursor?: CampaignParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignParticipants.
     */
    distinct?: CampaignParticipantScalarFieldEnum | CampaignParticipantScalarFieldEnum[]
  }

  /**
   * CampaignParticipant findMany
   */
  export type CampaignParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CampaignParticipants to fetch.
     */
    where?: CampaignParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignParticipants to fetch.
     */
    orderBy?: CampaignParticipantOrderByWithRelationInput | CampaignParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignParticipants.
     */
    cursor?: CampaignParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignParticipants.
     */
    skip?: number
    distinct?: CampaignParticipantScalarFieldEnum | CampaignParticipantScalarFieldEnum[]
  }

  /**
   * CampaignParticipant create
   */
  export type CampaignParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignParticipant.
     */
    data: XOR<CampaignParticipantCreateInput, CampaignParticipantUncheckedCreateInput>
  }

  /**
   * CampaignParticipant createMany
   */
  export type CampaignParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignParticipants.
     */
    data: CampaignParticipantCreateManyInput | CampaignParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignParticipant createManyAndReturn
   */
  export type CampaignParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignParticipants.
     */
    data: CampaignParticipantCreateManyInput | CampaignParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignParticipant update
   */
  export type CampaignParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignParticipant.
     */
    data: XOR<CampaignParticipantUpdateInput, CampaignParticipantUncheckedUpdateInput>
    /**
     * Choose, which CampaignParticipant to update.
     */
    where: CampaignParticipantWhereUniqueInput
  }

  /**
   * CampaignParticipant updateMany
   */
  export type CampaignParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignParticipants.
     */
    data: XOR<CampaignParticipantUpdateManyMutationInput, CampaignParticipantUncheckedUpdateManyInput>
    /**
     * Filter which CampaignParticipants to update
     */
    where?: CampaignParticipantWhereInput
    /**
     * Limit how many CampaignParticipants to update.
     */
    limit?: number
  }

  /**
   * CampaignParticipant updateManyAndReturn
   */
  export type CampaignParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * The data used to update CampaignParticipants.
     */
    data: XOR<CampaignParticipantUpdateManyMutationInput, CampaignParticipantUncheckedUpdateManyInput>
    /**
     * Filter which CampaignParticipants to update
     */
    where?: CampaignParticipantWhereInput
    /**
     * Limit how many CampaignParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignParticipant upsert
   */
  export type CampaignParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignParticipant to update in case it exists.
     */
    where: CampaignParticipantWhereUniqueInput
    /**
     * In case the CampaignParticipant found by the `where` argument doesn't exist, create a new CampaignParticipant with this data.
     */
    create: XOR<CampaignParticipantCreateInput, CampaignParticipantUncheckedCreateInput>
    /**
     * In case the CampaignParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignParticipantUpdateInput, CampaignParticipantUncheckedUpdateInput>
  }

  /**
   * CampaignParticipant delete
   */
  export type CampaignParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
    /**
     * Filter which CampaignParticipant to delete.
     */
    where: CampaignParticipantWhereUniqueInput
  }

  /**
   * CampaignParticipant deleteMany
   */
  export type CampaignParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignParticipants to delete
     */
    where?: CampaignParticipantWhereInput
    /**
     * Limit how many CampaignParticipants to delete.
     */
    limit?: number
  }

  /**
   * CampaignParticipant without action
   */
  export type CampaignParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: CampaignParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: CampaignParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignParticipantInclude<ExtArgs> | null
  }


  /**
   * Model RewardClaim
   */

  export type AggregateRewardClaim = {
    _count: RewardClaimCountAggregateOutputType | null
    _min: RewardClaimMinAggregateOutputType | null
    _max: RewardClaimMaxAggregateOutputType | null
  }

  export type RewardClaimMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    userId: string | null
    rewardAmount: string | null
    transactionHash: string | null
    claimStatus: string | null
    claimError: string | null
    claimedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardClaimMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    userId: string | null
    rewardAmount: string | null
    transactionHash: string | null
    claimStatus: string | null
    claimError: string | null
    claimedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardClaimCountAggregateOutputType = {
    id: number
    campaignId: number
    userId: number
    rewardAmount: number
    transactionHash: number
    claimStatus: number
    claimError: number
    claimedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RewardClaimMinAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    rewardAmount?: true
    transactionHash?: true
    claimStatus?: true
    claimError?: true
    claimedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardClaimMaxAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    rewardAmount?: true
    transactionHash?: true
    claimStatus?: true
    claimError?: true
    claimedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardClaimCountAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    rewardAmount?: true
    transactionHash?: true
    claimStatus?: true
    claimError?: true
    claimedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RewardClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardClaim to aggregate.
     */
    where?: RewardClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardClaims to fetch.
     */
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RewardClaims
    **/
    _count?: true | RewardClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardClaimMaxAggregateInputType
  }

  export type GetRewardClaimAggregateType<T extends RewardClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateRewardClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewardClaim[P]>
      : GetScalarType<T[P], AggregateRewardClaim[P]>
  }




  export type RewardClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardClaimWhereInput
    orderBy?: RewardClaimOrderByWithAggregationInput | RewardClaimOrderByWithAggregationInput[]
    by: RewardClaimScalarFieldEnum[] | RewardClaimScalarFieldEnum
    having?: RewardClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardClaimCountAggregateInputType | true
    _min?: RewardClaimMinAggregateInputType
    _max?: RewardClaimMaxAggregateInputType
  }

  export type RewardClaimGroupByOutputType = {
    id: string
    campaignId: string
    userId: string
    rewardAmount: string
    transactionHash: string | null
    claimStatus: string
    claimError: string | null
    claimedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: RewardClaimCountAggregateOutputType | null
    _min: RewardClaimMinAggregateOutputType | null
    _max: RewardClaimMaxAggregateOutputType | null
  }

  type GetRewardClaimGroupByPayload<T extends RewardClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardClaimGroupByOutputType[P]>
            : GetScalarType<T[P], RewardClaimGroupByOutputType[P]>
        }
      >
    >


  export type RewardClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    rewardAmount?: boolean
    transactionHash?: boolean
    claimStatus?: boolean
    claimError?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardClaim"]>

  export type RewardClaimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    rewardAmount?: boolean
    transactionHash?: boolean
    claimStatus?: boolean
    claimError?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardClaim"]>

  export type RewardClaimSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    rewardAmount?: boolean
    transactionHash?: boolean
    claimStatus?: boolean
    claimError?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardClaim"]>

  export type RewardClaimSelectScalar = {
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    rewardAmount?: boolean
    transactionHash?: boolean
    claimStatus?: boolean
    claimError?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RewardClaimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "userId" | "rewardAmount" | "transactionHash" | "claimStatus" | "claimError" | "claimedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["rewardClaim"]>
  export type RewardClaimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardClaimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardClaimIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RewardClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RewardClaim"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      userId: string
      rewardAmount: string
      transactionHash: string | null
      claimStatus: string
      claimError: string | null
      claimedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rewardClaim"]>
    composites: {}
  }

  type RewardClaimGetPayload<S extends boolean | null | undefined | RewardClaimDefaultArgs> = $Result.GetResult<Prisma.$RewardClaimPayload, S>

  type RewardClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardClaimCountAggregateInputType | true
    }

  export interface RewardClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RewardClaim'], meta: { name: 'RewardClaim' } }
    /**
     * Find zero or one RewardClaim that matches the filter.
     * @param {RewardClaimFindUniqueArgs} args - Arguments to find a RewardClaim
     * @example
     * // Get one RewardClaim
     * const rewardClaim = await prisma.rewardClaim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardClaimFindUniqueArgs>(args: SelectSubset<T, RewardClaimFindUniqueArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RewardClaim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardClaimFindUniqueOrThrowArgs} args - Arguments to find a RewardClaim
     * @example
     * // Get one RewardClaim
     * const rewardClaim = await prisma.rewardClaim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardClaimFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardClaim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimFindFirstArgs} args - Arguments to find a RewardClaim
     * @example
     * // Get one RewardClaim
     * const rewardClaim = await prisma.rewardClaim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardClaimFindFirstArgs>(args?: SelectSubset<T, RewardClaimFindFirstArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardClaim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimFindFirstOrThrowArgs} args - Arguments to find a RewardClaim
     * @example
     * // Get one RewardClaim
     * const rewardClaim = await prisma.rewardClaim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardClaimFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RewardClaims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RewardClaims
     * const rewardClaims = await prisma.rewardClaim.findMany()
     * 
     * // Get first 10 RewardClaims
     * const rewardClaims = await prisma.rewardClaim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardClaimWithIdOnly = await prisma.rewardClaim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardClaimFindManyArgs>(args?: SelectSubset<T, RewardClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RewardClaim.
     * @param {RewardClaimCreateArgs} args - Arguments to create a RewardClaim.
     * @example
     * // Create one RewardClaim
     * const RewardClaim = await prisma.rewardClaim.create({
     *   data: {
     *     // ... data to create a RewardClaim
     *   }
     * })
     * 
     */
    create<T extends RewardClaimCreateArgs>(args: SelectSubset<T, RewardClaimCreateArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RewardClaims.
     * @param {RewardClaimCreateManyArgs} args - Arguments to create many RewardClaims.
     * @example
     * // Create many RewardClaims
     * const rewardClaim = await prisma.rewardClaim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardClaimCreateManyArgs>(args?: SelectSubset<T, RewardClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RewardClaims and returns the data saved in the database.
     * @param {RewardClaimCreateManyAndReturnArgs} args - Arguments to create many RewardClaims.
     * @example
     * // Create many RewardClaims
     * const rewardClaim = await prisma.rewardClaim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RewardClaims and only return the `id`
     * const rewardClaimWithIdOnly = await prisma.rewardClaim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardClaimCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RewardClaim.
     * @param {RewardClaimDeleteArgs} args - Arguments to delete one RewardClaim.
     * @example
     * // Delete one RewardClaim
     * const RewardClaim = await prisma.rewardClaim.delete({
     *   where: {
     *     // ... filter to delete one RewardClaim
     *   }
     * })
     * 
     */
    delete<T extends RewardClaimDeleteArgs>(args: SelectSubset<T, RewardClaimDeleteArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RewardClaim.
     * @param {RewardClaimUpdateArgs} args - Arguments to update one RewardClaim.
     * @example
     * // Update one RewardClaim
     * const rewardClaim = await prisma.rewardClaim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardClaimUpdateArgs>(args: SelectSubset<T, RewardClaimUpdateArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RewardClaims.
     * @param {RewardClaimDeleteManyArgs} args - Arguments to filter RewardClaims to delete.
     * @example
     * // Delete a few RewardClaims
     * const { count } = await prisma.rewardClaim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardClaimDeleteManyArgs>(args?: SelectSubset<T, RewardClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RewardClaims
     * const rewardClaim = await prisma.rewardClaim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardClaimUpdateManyArgs>(args: SelectSubset<T, RewardClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardClaims and returns the data updated in the database.
     * @param {RewardClaimUpdateManyAndReturnArgs} args - Arguments to update many RewardClaims.
     * @example
     * // Update many RewardClaims
     * const rewardClaim = await prisma.rewardClaim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RewardClaims and only return the `id`
     * const rewardClaimWithIdOnly = await prisma.rewardClaim.updateManyAndReturn({
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
    updateManyAndReturn<T extends RewardClaimUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RewardClaim.
     * @param {RewardClaimUpsertArgs} args - Arguments to update or create a RewardClaim.
     * @example
     * // Update or create a RewardClaim
     * const rewardClaim = await prisma.rewardClaim.upsert({
     *   create: {
     *     // ... data to create a RewardClaim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RewardClaim we want to update
     *   }
     * })
     */
    upsert<T extends RewardClaimUpsertArgs>(args: SelectSubset<T, RewardClaimUpsertArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RewardClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimCountArgs} args - Arguments to filter RewardClaims to count.
     * @example
     * // Count the number of RewardClaims
     * const count = await prisma.rewardClaim.count({
     *   where: {
     *     // ... the filter for the RewardClaims we want to count
     *   }
     * })
    **/
    count<T extends RewardClaimCountArgs>(
      args?: Subset<T, RewardClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RewardClaim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardClaimAggregateArgs>(args: Subset<T, RewardClaimAggregateArgs>): Prisma.PrismaPromise<GetRewardClaimAggregateType<T>>

    /**
     * Group by RewardClaim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimGroupByArgs} args - Group by arguments.
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
      T extends RewardClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardClaimGroupByArgs['orderBy'] }
        : { orderBy?: RewardClaimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RewardClaim model
   */
  readonly fields: RewardClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RewardClaim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RewardClaim model
   */
  interface RewardClaimFieldRefs {
    readonly id: FieldRef<"RewardClaim", 'String'>
    readonly campaignId: FieldRef<"RewardClaim", 'String'>
    readonly userId: FieldRef<"RewardClaim", 'String'>
    readonly rewardAmount: FieldRef<"RewardClaim", 'String'>
    readonly transactionHash: FieldRef<"RewardClaim", 'String'>
    readonly claimStatus: FieldRef<"RewardClaim", 'String'>
    readonly claimError: FieldRef<"RewardClaim", 'String'>
    readonly claimedAt: FieldRef<"RewardClaim", 'DateTime'>
    readonly createdAt: FieldRef<"RewardClaim", 'DateTime'>
    readonly updatedAt: FieldRef<"RewardClaim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RewardClaim findUnique
   */
  export type RewardClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter, which RewardClaim to fetch.
     */
    where: RewardClaimWhereUniqueInput
  }

  /**
   * RewardClaim findUniqueOrThrow
   */
  export type RewardClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter, which RewardClaim to fetch.
     */
    where: RewardClaimWhereUniqueInput
  }

  /**
   * RewardClaim findFirst
   */
  export type RewardClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter, which RewardClaim to fetch.
     */
    where?: RewardClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardClaims to fetch.
     */
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardClaims.
     */
    cursor?: RewardClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardClaims.
     */
    distinct?: RewardClaimScalarFieldEnum | RewardClaimScalarFieldEnum[]
  }

  /**
   * RewardClaim findFirstOrThrow
   */
  export type RewardClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter, which RewardClaim to fetch.
     */
    where?: RewardClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardClaims to fetch.
     */
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardClaims.
     */
    cursor?: RewardClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardClaims.
     */
    distinct?: RewardClaimScalarFieldEnum | RewardClaimScalarFieldEnum[]
  }

  /**
   * RewardClaim findMany
   */
  export type RewardClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter, which RewardClaims to fetch.
     */
    where?: RewardClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardClaims to fetch.
     */
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RewardClaims.
     */
    cursor?: RewardClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardClaims.
     */
    skip?: number
    distinct?: RewardClaimScalarFieldEnum | RewardClaimScalarFieldEnum[]
  }

  /**
   * RewardClaim create
   */
  export type RewardClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * The data needed to create a RewardClaim.
     */
    data: XOR<RewardClaimCreateInput, RewardClaimUncheckedCreateInput>
  }

  /**
   * RewardClaim createMany
   */
  export type RewardClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RewardClaims.
     */
    data: RewardClaimCreateManyInput | RewardClaimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RewardClaim createManyAndReturn
   */
  export type RewardClaimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * The data used to create many RewardClaims.
     */
    data: RewardClaimCreateManyInput | RewardClaimCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardClaim update
   */
  export type RewardClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * The data needed to update a RewardClaim.
     */
    data: XOR<RewardClaimUpdateInput, RewardClaimUncheckedUpdateInput>
    /**
     * Choose, which RewardClaim to update.
     */
    where: RewardClaimWhereUniqueInput
  }

  /**
   * RewardClaim updateMany
   */
  export type RewardClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RewardClaims.
     */
    data: XOR<RewardClaimUpdateManyMutationInput, RewardClaimUncheckedUpdateManyInput>
    /**
     * Filter which RewardClaims to update
     */
    where?: RewardClaimWhereInput
    /**
     * Limit how many RewardClaims to update.
     */
    limit?: number
  }

  /**
   * RewardClaim updateManyAndReturn
   */
  export type RewardClaimUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * The data used to update RewardClaims.
     */
    data: XOR<RewardClaimUpdateManyMutationInput, RewardClaimUncheckedUpdateManyInput>
    /**
     * Filter which RewardClaims to update
     */
    where?: RewardClaimWhereInput
    /**
     * Limit how many RewardClaims to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardClaim upsert
   */
  export type RewardClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * The filter to search for the RewardClaim to update in case it exists.
     */
    where: RewardClaimWhereUniqueInput
    /**
     * In case the RewardClaim found by the `where` argument doesn't exist, create a new RewardClaim with this data.
     */
    create: XOR<RewardClaimCreateInput, RewardClaimUncheckedCreateInput>
    /**
     * In case the RewardClaim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardClaimUpdateInput, RewardClaimUncheckedUpdateInput>
  }

  /**
   * RewardClaim delete
   */
  export type RewardClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter which RewardClaim to delete.
     */
    where: RewardClaimWhereUniqueInput
  }

  /**
   * RewardClaim deleteMany
   */
  export type RewardClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardClaims to delete
     */
    where?: RewardClaimWhereInput
    /**
     * Limit how many RewardClaims to delete.
     */
    limit?: number
  }

  /**
   * RewardClaim without action
   */
  export type RewardClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
  }


  /**
   * Model TaskCompletion
   */

  export type AggregateTaskCompletion = {
    _count: TaskCompletionCountAggregateOutputType | null
    _min: TaskCompletionMinAggregateOutputType | null
    _max: TaskCompletionMaxAggregateOutputType | null
  }

  export type TaskCompletionMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    userId: string | null
    ruleId: string | null
    ruleType: string | null
    verificationData: string | null
    isVerified: boolean | null
    verificationError: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCompletionMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    userId: string | null
    ruleId: string | null
    ruleType: string | null
    verificationData: string | null
    isVerified: boolean | null
    verificationError: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCompletionCountAggregateOutputType = {
    id: number
    campaignId: number
    userId: number
    ruleId: number
    ruleType: number
    verificationData: number
    isVerified: number
    verificationError: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskCompletionMinAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    ruleId?: true
    ruleType?: true
    verificationData?: true
    isVerified?: true
    verificationError?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCompletionMaxAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    ruleId?: true
    ruleType?: true
    verificationData?: true
    isVerified?: true
    verificationError?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCompletionCountAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    ruleId?: true
    ruleType?: true
    verificationData?: true
    isVerified?: true
    verificationError?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskCompletion to aggregate.
     */
    where?: TaskCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskCompletions to fetch.
     */
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskCompletions
    **/
    _count?: true | TaskCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskCompletionMaxAggregateInputType
  }

  export type GetTaskCompletionAggregateType<T extends TaskCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskCompletion[P]>
      : GetScalarType<T[P], AggregateTaskCompletion[P]>
  }




  export type TaskCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCompletionWhereInput
    orderBy?: TaskCompletionOrderByWithAggregationInput | TaskCompletionOrderByWithAggregationInput[]
    by: TaskCompletionScalarFieldEnum[] | TaskCompletionScalarFieldEnum
    having?: TaskCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCompletionCountAggregateInputType | true
    _min?: TaskCompletionMinAggregateInputType
    _max?: TaskCompletionMaxAggregateInputType
  }

  export type TaskCompletionGroupByOutputType = {
    id: string
    campaignId: string
    userId: string
    ruleId: string
    ruleType: string
    verificationData: string | null
    isVerified: boolean
    verificationError: string | null
    completedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: TaskCompletionCountAggregateOutputType | null
    _min: TaskCompletionMinAggregateOutputType | null
    _max: TaskCompletionMaxAggregateOutputType | null
  }

  type GetTaskCompletionGroupByPayload<T extends TaskCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], TaskCompletionGroupByOutputType[P]>
        }
      >
    >


  export type TaskCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    ruleId?: boolean
    ruleType?: boolean
    verificationData?: boolean
    isVerified?: boolean
    verificationError?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskCompletion"]>

  export type TaskCompletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    ruleId?: boolean
    ruleType?: boolean
    verificationData?: boolean
    isVerified?: boolean
    verificationError?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskCompletion"]>

  export type TaskCompletionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    ruleId?: boolean
    ruleType?: boolean
    verificationData?: boolean
    isVerified?: boolean
    verificationError?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskCompletion"]>

  export type TaskCompletionSelectScalar = {
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    ruleId?: boolean
    ruleType?: boolean
    verificationData?: boolean
    isVerified?: boolean
    verificationError?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskCompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "userId" | "ruleId" | "ruleType" | "verificationData" | "isVerified" | "verificationError" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["taskCompletion"]>
  export type TaskCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskCompletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskCompletionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskCompletion"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      userId: string
      ruleId: string
      ruleType: string
      verificationData: string | null
      isVerified: boolean
      verificationError: string | null
      completedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["taskCompletion"]>
    composites: {}
  }

  type TaskCompletionGetPayload<S extends boolean | null | undefined | TaskCompletionDefaultArgs> = $Result.GetResult<Prisma.$TaskCompletionPayload, S>

  type TaskCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCompletionCountAggregateInputType | true
    }

  export interface TaskCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskCompletion'], meta: { name: 'TaskCompletion' } }
    /**
     * Find zero or one TaskCompletion that matches the filter.
     * @param {TaskCompletionFindUniqueArgs} args - Arguments to find a TaskCompletion
     * @example
     * // Get one TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskCompletionFindUniqueArgs>(args: SelectSubset<T, TaskCompletionFindUniqueArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskCompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskCompletionFindUniqueOrThrowArgs} args - Arguments to find a TaskCompletion
     * @example
     * // Get one TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionFindFirstArgs} args - Arguments to find a TaskCompletion
     * @example
     * // Get one TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskCompletionFindFirstArgs>(args?: SelectSubset<T, TaskCompletionFindFirstArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionFindFirstOrThrowArgs} args - Arguments to find a TaskCompletion
     * @example
     * // Get one TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskCompletions
     * const taskCompletions = await prisma.taskCompletion.findMany()
     * 
     * // Get first 10 TaskCompletions
     * const taskCompletions = await prisma.taskCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskCompletionWithIdOnly = await prisma.taskCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskCompletionFindManyArgs>(args?: SelectSubset<T, TaskCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskCompletion.
     * @param {TaskCompletionCreateArgs} args - Arguments to create a TaskCompletion.
     * @example
     * // Create one TaskCompletion
     * const TaskCompletion = await prisma.taskCompletion.create({
     *   data: {
     *     // ... data to create a TaskCompletion
     *   }
     * })
     * 
     */
    create<T extends TaskCompletionCreateArgs>(args: SelectSubset<T, TaskCompletionCreateArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskCompletions.
     * @param {TaskCompletionCreateManyArgs} args - Arguments to create many TaskCompletions.
     * @example
     * // Create many TaskCompletions
     * const taskCompletion = await prisma.taskCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCompletionCreateManyArgs>(args?: SelectSubset<T, TaskCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskCompletions and returns the data saved in the database.
     * @param {TaskCompletionCreateManyAndReturnArgs} args - Arguments to create many TaskCompletions.
     * @example
     * // Create many TaskCompletions
     * const taskCompletion = await prisma.taskCompletion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskCompletions and only return the `id`
     * const taskCompletionWithIdOnly = await prisma.taskCompletion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCompletionCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskCompletion.
     * @param {TaskCompletionDeleteArgs} args - Arguments to delete one TaskCompletion.
     * @example
     * // Delete one TaskCompletion
     * const TaskCompletion = await prisma.taskCompletion.delete({
     *   where: {
     *     // ... filter to delete one TaskCompletion
     *   }
     * })
     * 
     */
    delete<T extends TaskCompletionDeleteArgs>(args: SelectSubset<T, TaskCompletionDeleteArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskCompletion.
     * @param {TaskCompletionUpdateArgs} args - Arguments to update one TaskCompletion.
     * @example
     * // Update one TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskCompletionUpdateArgs>(args: SelectSubset<T, TaskCompletionUpdateArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskCompletions.
     * @param {TaskCompletionDeleteManyArgs} args - Arguments to filter TaskCompletions to delete.
     * @example
     * // Delete a few TaskCompletions
     * const { count } = await prisma.taskCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskCompletionDeleteManyArgs>(args?: SelectSubset<T, TaskCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskCompletions
     * const taskCompletion = await prisma.taskCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskCompletionUpdateManyArgs>(args: SelectSubset<T, TaskCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskCompletions and returns the data updated in the database.
     * @param {TaskCompletionUpdateManyAndReturnArgs} args - Arguments to update many TaskCompletions.
     * @example
     * // Update many TaskCompletions
     * const taskCompletion = await prisma.taskCompletion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskCompletions and only return the `id`
     * const taskCompletionWithIdOnly = await prisma.taskCompletion.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskCompletionUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskCompletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskCompletion.
     * @param {TaskCompletionUpsertArgs} args - Arguments to update or create a TaskCompletion.
     * @example
     * // Update or create a TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.upsert({
     *   create: {
     *     // ... data to create a TaskCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskCompletion we want to update
     *   }
     * })
     */
    upsert<T extends TaskCompletionUpsertArgs>(args: SelectSubset<T, TaskCompletionUpsertArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionCountArgs} args - Arguments to filter TaskCompletions to count.
     * @example
     * // Count the number of TaskCompletions
     * const count = await prisma.taskCompletion.count({
     *   where: {
     *     // ... the filter for the TaskCompletions we want to count
     *   }
     * })
    **/
    count<T extends TaskCompletionCountArgs>(
      args?: Subset<T, TaskCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskCompletionAggregateArgs>(args: Subset<T, TaskCompletionAggregateArgs>): Prisma.PrismaPromise<GetTaskCompletionAggregateType<T>>

    /**
     * Group by TaskCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionGroupByArgs} args - Group by arguments.
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
      T extends TaskCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskCompletionGroupByArgs['orderBy'] }
        : { orderBy?: TaskCompletionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskCompletion model
   */
  readonly fields: TaskCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskCompletion model
   */
  interface TaskCompletionFieldRefs {
    readonly id: FieldRef<"TaskCompletion", 'String'>
    readonly campaignId: FieldRef<"TaskCompletion", 'String'>
    readonly userId: FieldRef<"TaskCompletion", 'String'>
    readonly ruleId: FieldRef<"TaskCompletion", 'String'>
    readonly ruleType: FieldRef<"TaskCompletion", 'String'>
    readonly verificationData: FieldRef<"TaskCompletion", 'String'>
    readonly isVerified: FieldRef<"TaskCompletion", 'Boolean'>
    readonly verificationError: FieldRef<"TaskCompletion", 'String'>
    readonly completedAt: FieldRef<"TaskCompletion", 'DateTime'>
    readonly createdAt: FieldRef<"TaskCompletion", 'DateTime'>
    readonly updatedAt: FieldRef<"TaskCompletion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskCompletion findUnique
   */
  export type TaskCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter, which TaskCompletion to fetch.
     */
    where: TaskCompletionWhereUniqueInput
  }

  /**
   * TaskCompletion findUniqueOrThrow
   */
  export type TaskCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter, which TaskCompletion to fetch.
     */
    where: TaskCompletionWhereUniqueInput
  }

  /**
   * TaskCompletion findFirst
   */
  export type TaskCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter, which TaskCompletion to fetch.
     */
    where?: TaskCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskCompletions to fetch.
     */
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskCompletions.
     */
    cursor?: TaskCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskCompletions.
     */
    distinct?: TaskCompletionScalarFieldEnum | TaskCompletionScalarFieldEnum[]
  }

  /**
   * TaskCompletion findFirstOrThrow
   */
  export type TaskCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter, which TaskCompletion to fetch.
     */
    where?: TaskCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskCompletions to fetch.
     */
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskCompletions.
     */
    cursor?: TaskCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskCompletions.
     */
    distinct?: TaskCompletionScalarFieldEnum | TaskCompletionScalarFieldEnum[]
  }

  /**
   * TaskCompletion findMany
   */
  export type TaskCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter, which TaskCompletions to fetch.
     */
    where?: TaskCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskCompletions to fetch.
     */
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskCompletions.
     */
    cursor?: TaskCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskCompletions.
     */
    skip?: number
    distinct?: TaskCompletionScalarFieldEnum | TaskCompletionScalarFieldEnum[]
  }

  /**
   * TaskCompletion create
   */
  export type TaskCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskCompletion.
     */
    data: XOR<TaskCompletionCreateInput, TaskCompletionUncheckedCreateInput>
  }

  /**
   * TaskCompletion createMany
   */
  export type TaskCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskCompletions.
     */
    data: TaskCompletionCreateManyInput | TaskCompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskCompletion createManyAndReturn
   */
  export type TaskCompletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * The data used to create many TaskCompletions.
     */
    data: TaskCompletionCreateManyInput | TaskCompletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskCompletion update
   */
  export type TaskCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskCompletion.
     */
    data: XOR<TaskCompletionUpdateInput, TaskCompletionUncheckedUpdateInput>
    /**
     * Choose, which TaskCompletion to update.
     */
    where: TaskCompletionWhereUniqueInput
  }

  /**
   * TaskCompletion updateMany
   */
  export type TaskCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskCompletions.
     */
    data: XOR<TaskCompletionUpdateManyMutationInput, TaskCompletionUncheckedUpdateManyInput>
    /**
     * Filter which TaskCompletions to update
     */
    where?: TaskCompletionWhereInput
    /**
     * Limit how many TaskCompletions to update.
     */
    limit?: number
  }

  /**
   * TaskCompletion updateManyAndReturn
   */
  export type TaskCompletionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * The data used to update TaskCompletions.
     */
    data: XOR<TaskCompletionUpdateManyMutationInput, TaskCompletionUncheckedUpdateManyInput>
    /**
     * Filter which TaskCompletions to update
     */
    where?: TaskCompletionWhereInput
    /**
     * Limit how many TaskCompletions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskCompletion upsert
   */
  export type TaskCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskCompletion to update in case it exists.
     */
    where: TaskCompletionWhereUniqueInput
    /**
     * In case the TaskCompletion found by the `where` argument doesn't exist, create a new TaskCompletion with this data.
     */
    create: XOR<TaskCompletionCreateInput, TaskCompletionUncheckedCreateInput>
    /**
     * In case the TaskCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskCompletionUpdateInput, TaskCompletionUncheckedUpdateInput>
  }

  /**
   * TaskCompletion delete
   */
  export type TaskCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter which TaskCompletion to delete.
     */
    where: TaskCompletionWhereUniqueInput
  }

  /**
   * TaskCompletion deleteMany
   */
  export type TaskCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskCompletions to delete
     */
    where?: TaskCompletionWhereInput
    /**
     * Limit how many TaskCompletions to delete.
     */
    limit?: number
  }

  /**
   * TaskCompletion without action
   */
  export type TaskCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    address: 'address',
    twitterId: 'twitterId',
    twitterUsername: 'twitterUsername',
    twitterHandle: 'twitterHandle',
    isTwitterAuthorized: 'isTwitterAuthorized',
    twitterAccessToken: 'twitterAccessToken',
    twitterRefreshToken: 'twitterRefreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    name: 'name',
    description: 'description',
    contractAddress: 'contractAddress',
    rewardAmount: 'rewardAmount',
    totalParticipants: 'totalParticipants',
    maxParticipants: 'maxParticipants',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorId: 'creatorId'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const CampaignRuleScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    ruleType: 'ruleType',
    ruleValue: 'ruleValue',
    description: 'description',
    isRequired: 'isRequired',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignRuleScalarFieldEnum = (typeof CampaignRuleScalarFieldEnum)[keyof typeof CampaignRuleScalarFieldEnum]


  export const CampaignParticipantScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    userId: 'userId',
    hasJoined: 'hasJoined',
    joinedAt: 'joinedAt',
    validationStatus: 'validationStatus',
    validationMessage: 'validationMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignParticipantScalarFieldEnum = (typeof CampaignParticipantScalarFieldEnum)[keyof typeof CampaignParticipantScalarFieldEnum]


  export const RewardClaimScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    userId: 'userId',
    rewardAmount: 'rewardAmount',
    transactionHash: 'transactionHash',
    claimStatus: 'claimStatus',
    claimError: 'claimError',
    claimedAt: 'claimedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RewardClaimScalarFieldEnum = (typeof RewardClaimScalarFieldEnum)[keyof typeof RewardClaimScalarFieldEnum]


  export const TaskCompletionScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    userId: 'userId',
    ruleId: 'ruleId',
    ruleType: 'ruleType',
    verificationData: 'verificationData',
    isVerified: 'isVerified',
    verificationError: 'verificationError',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskCompletionScalarFieldEnum = (typeof TaskCompletionScalarFieldEnum)[keyof typeof TaskCompletionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    twitterId?: StringNullableFilter<"User"> | string | null
    twitterUsername?: StringNullableFilter<"User"> | string | null
    twitterHandle?: StringNullableFilter<"User"> | string | null
    isTwitterAuthorized?: BoolFilter<"User"> | boolean
    twitterAccessToken?: StringNullableFilter<"User"> | string | null
    twitterRefreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdCampaigns?: CampaignListRelationFilter
    participations?: CampaignParticipantListRelationFilter
    claims?: RewardClaimListRelationFilter
    taskCompletions?: TaskCompletionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    twitterId?: SortOrderInput | SortOrder
    twitterUsername?: SortOrderInput | SortOrder
    twitterHandle?: SortOrderInput | SortOrder
    isTwitterAuthorized?: SortOrder
    twitterAccessToken?: SortOrderInput | SortOrder
    twitterRefreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdCampaigns?: CampaignOrderByRelationAggregateInput
    participations?: CampaignParticipantOrderByRelationAggregateInput
    claims?: RewardClaimOrderByRelationAggregateInput
    taskCompletions?: TaskCompletionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    twitterId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    twitterUsername?: StringNullableFilter<"User"> | string | null
    twitterHandle?: StringNullableFilter<"User"> | string | null
    isTwitterAuthorized?: BoolFilter<"User"> | boolean
    twitterAccessToken?: StringNullableFilter<"User"> | string | null
    twitterRefreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdCampaigns?: CampaignListRelationFilter
    participations?: CampaignParticipantListRelationFilter
    claims?: RewardClaimListRelationFilter
    taskCompletions?: TaskCompletionListRelationFilter
  }, "id" | "address" | "twitterId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    twitterId?: SortOrderInput | SortOrder
    twitterUsername?: SortOrderInput | SortOrder
    twitterHandle?: SortOrderInput | SortOrder
    isTwitterAuthorized?: SortOrder
    twitterAccessToken?: SortOrderInput | SortOrder
    twitterRefreshToken?: SortOrderInput | SortOrder
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
    address?: StringWithAggregatesFilter<"User"> | string
    twitterId?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitterUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitterHandle?: StringNullableWithAggregatesFilter<"User"> | string | null
    isTwitterAuthorized?: BoolWithAggregatesFilter<"User"> | boolean
    twitterAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitterRefreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    campaignId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    contractAddress?: StringFilter<"Campaign"> | string
    rewardAmount?: StringFilter<"Campaign"> | string
    totalParticipants?: IntFilter<"Campaign"> | number
    maxParticipants?: IntNullableFilter<"Campaign"> | number | null
    startDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    isActive?: BoolFilter<"Campaign"> | boolean
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    creatorId?: StringFilter<"Campaign"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    rules?: CampaignRuleListRelationFilter
    participants?: CampaignParticipantListRelationFilter
    claims?: RewardClaimListRelationFilter
    taskCompletions?: TaskCompletionListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    contractAddress?: SortOrder
    rewardAmount?: SortOrder
    totalParticipants?: SortOrder
    maxParticipants?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    creator?: UserOrderByWithRelationInput
    rules?: CampaignRuleOrderByRelationAggregateInput
    participants?: CampaignParticipantOrderByRelationAggregateInput
    claims?: RewardClaimOrderByRelationAggregateInput
    taskCompletions?: TaskCompletionOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    contractAddress?: StringFilter<"Campaign"> | string
    rewardAmount?: StringFilter<"Campaign"> | string
    totalParticipants?: IntFilter<"Campaign"> | number
    maxParticipants?: IntNullableFilter<"Campaign"> | number | null
    startDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    isActive?: BoolFilter<"Campaign"> | boolean
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    creatorId?: StringFilter<"Campaign"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    rules?: CampaignRuleListRelationFilter
    participants?: CampaignParticipantListRelationFilter
    claims?: RewardClaimListRelationFilter
    taskCompletions?: TaskCompletionListRelationFilter
  }, "id" | "campaignId">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    contractAddress?: SortOrder
    rewardAmount?: SortOrder
    totalParticipants?: SortOrder
    maxParticipants?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    campaignId?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    contractAddress?: StringWithAggregatesFilter<"Campaign"> | string
    rewardAmount?: StringWithAggregatesFilter<"Campaign"> | string
    totalParticipants?: IntWithAggregatesFilter<"Campaign"> | number
    maxParticipants?: IntNullableWithAggregatesFilter<"Campaign"> | number | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Campaign"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    creatorId?: StringWithAggregatesFilter<"Campaign"> | string
  }

  export type CampaignRuleWhereInput = {
    AND?: CampaignRuleWhereInput | CampaignRuleWhereInput[]
    OR?: CampaignRuleWhereInput[]
    NOT?: CampaignRuleWhereInput | CampaignRuleWhereInput[]
    id?: StringFilter<"CampaignRule"> | string
    campaignId?: StringFilter<"CampaignRule"> | string
    ruleType?: StringFilter<"CampaignRule"> | string
    ruleValue?: StringNullableFilter<"CampaignRule"> | string | null
    description?: StringFilter<"CampaignRule"> | string
    isRequired?: BoolFilter<"CampaignRule"> | boolean
    order?: IntFilter<"CampaignRule"> | number
    createdAt?: DateTimeFilter<"CampaignRule"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignRule"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type CampaignRuleOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ruleType?: SortOrder
    ruleValue?: SortOrderInput | SortOrder
    description?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type CampaignRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignRuleWhereInput | CampaignRuleWhereInput[]
    OR?: CampaignRuleWhereInput[]
    NOT?: CampaignRuleWhereInput | CampaignRuleWhereInput[]
    campaignId?: StringFilter<"CampaignRule"> | string
    ruleType?: StringFilter<"CampaignRule"> | string
    ruleValue?: StringNullableFilter<"CampaignRule"> | string | null
    description?: StringFilter<"CampaignRule"> | string
    isRequired?: BoolFilter<"CampaignRule"> | boolean
    order?: IntFilter<"CampaignRule"> | number
    createdAt?: DateTimeFilter<"CampaignRule"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignRule"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type CampaignRuleOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ruleType?: SortOrder
    ruleValue?: SortOrderInput | SortOrder
    description?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignRuleCountOrderByAggregateInput
    _avg?: CampaignRuleAvgOrderByAggregateInput
    _max?: CampaignRuleMaxOrderByAggregateInput
    _min?: CampaignRuleMinOrderByAggregateInput
    _sum?: CampaignRuleSumOrderByAggregateInput
  }

  export type CampaignRuleScalarWhereWithAggregatesInput = {
    AND?: CampaignRuleScalarWhereWithAggregatesInput | CampaignRuleScalarWhereWithAggregatesInput[]
    OR?: CampaignRuleScalarWhereWithAggregatesInput[]
    NOT?: CampaignRuleScalarWhereWithAggregatesInput | CampaignRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampaignRule"> | string
    campaignId?: StringWithAggregatesFilter<"CampaignRule"> | string
    ruleType?: StringWithAggregatesFilter<"CampaignRule"> | string
    ruleValue?: StringNullableWithAggregatesFilter<"CampaignRule"> | string | null
    description?: StringWithAggregatesFilter<"CampaignRule"> | string
    isRequired?: BoolWithAggregatesFilter<"CampaignRule"> | boolean
    order?: IntWithAggregatesFilter<"CampaignRule"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CampaignRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaignRule"> | Date | string
  }

  export type CampaignParticipantWhereInput = {
    AND?: CampaignParticipantWhereInput | CampaignParticipantWhereInput[]
    OR?: CampaignParticipantWhereInput[]
    NOT?: CampaignParticipantWhereInput | CampaignParticipantWhereInput[]
    id?: StringFilter<"CampaignParticipant"> | string
    campaignId?: StringFilter<"CampaignParticipant"> | string
    userId?: StringFilter<"CampaignParticipant"> | string
    hasJoined?: BoolFilter<"CampaignParticipant"> | boolean
    joinedAt?: DateTimeNullableFilter<"CampaignParticipant"> | Date | string | null
    validationStatus?: StringFilter<"CampaignParticipant"> | string
    validationMessage?: StringNullableFilter<"CampaignParticipant"> | string | null
    createdAt?: DateTimeFilter<"CampaignParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignParticipant"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CampaignParticipantOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    hasJoined?: SortOrder
    joinedAt?: SortOrderInput | SortOrder
    validationStatus?: SortOrder
    validationMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CampaignParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId_userId?: CampaignParticipantCampaignIdUserIdCompoundUniqueInput
    AND?: CampaignParticipantWhereInput | CampaignParticipantWhereInput[]
    OR?: CampaignParticipantWhereInput[]
    NOT?: CampaignParticipantWhereInput | CampaignParticipantWhereInput[]
    campaignId?: StringFilter<"CampaignParticipant"> | string
    userId?: StringFilter<"CampaignParticipant"> | string
    hasJoined?: BoolFilter<"CampaignParticipant"> | boolean
    joinedAt?: DateTimeNullableFilter<"CampaignParticipant"> | Date | string | null
    validationStatus?: StringFilter<"CampaignParticipant"> | string
    validationMessage?: StringNullableFilter<"CampaignParticipant"> | string | null
    createdAt?: DateTimeFilter<"CampaignParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignParticipant"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "campaignId_userId">

  export type CampaignParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    hasJoined?: SortOrder
    joinedAt?: SortOrderInput | SortOrder
    validationStatus?: SortOrder
    validationMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignParticipantCountOrderByAggregateInput
    _max?: CampaignParticipantMaxOrderByAggregateInput
    _min?: CampaignParticipantMinOrderByAggregateInput
  }

  export type CampaignParticipantScalarWhereWithAggregatesInput = {
    AND?: CampaignParticipantScalarWhereWithAggregatesInput | CampaignParticipantScalarWhereWithAggregatesInput[]
    OR?: CampaignParticipantScalarWhereWithAggregatesInput[]
    NOT?: CampaignParticipantScalarWhereWithAggregatesInput | CampaignParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampaignParticipant"> | string
    campaignId?: StringWithAggregatesFilter<"CampaignParticipant"> | string
    userId?: StringWithAggregatesFilter<"CampaignParticipant"> | string
    hasJoined?: BoolWithAggregatesFilter<"CampaignParticipant"> | boolean
    joinedAt?: DateTimeNullableWithAggregatesFilter<"CampaignParticipant"> | Date | string | null
    validationStatus?: StringWithAggregatesFilter<"CampaignParticipant"> | string
    validationMessage?: StringNullableWithAggregatesFilter<"CampaignParticipant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CampaignParticipant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaignParticipant"> | Date | string
  }

  export type RewardClaimWhereInput = {
    AND?: RewardClaimWhereInput | RewardClaimWhereInput[]
    OR?: RewardClaimWhereInput[]
    NOT?: RewardClaimWhereInput | RewardClaimWhereInput[]
    id?: StringFilter<"RewardClaim"> | string
    campaignId?: StringFilter<"RewardClaim"> | string
    userId?: StringFilter<"RewardClaim"> | string
    rewardAmount?: StringFilter<"RewardClaim"> | string
    transactionHash?: StringNullableFilter<"RewardClaim"> | string | null
    claimStatus?: StringFilter<"RewardClaim"> | string
    claimError?: StringNullableFilter<"RewardClaim"> | string | null
    claimedAt?: DateTimeFilter<"RewardClaim"> | Date | string
    createdAt?: DateTimeFilter<"RewardClaim"> | Date | string
    updatedAt?: DateTimeFilter<"RewardClaim"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RewardClaimOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    rewardAmount?: SortOrder
    transactionHash?: SortOrderInput | SortOrder
    claimStatus?: SortOrder
    claimError?: SortOrderInput | SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RewardClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId_userId?: RewardClaimCampaignIdUserIdCompoundUniqueInput
    AND?: RewardClaimWhereInput | RewardClaimWhereInput[]
    OR?: RewardClaimWhereInput[]
    NOT?: RewardClaimWhereInput | RewardClaimWhereInput[]
    campaignId?: StringFilter<"RewardClaim"> | string
    userId?: StringFilter<"RewardClaim"> | string
    rewardAmount?: StringFilter<"RewardClaim"> | string
    transactionHash?: StringNullableFilter<"RewardClaim"> | string | null
    claimStatus?: StringFilter<"RewardClaim"> | string
    claimError?: StringNullableFilter<"RewardClaim"> | string | null
    claimedAt?: DateTimeFilter<"RewardClaim"> | Date | string
    createdAt?: DateTimeFilter<"RewardClaim"> | Date | string
    updatedAt?: DateTimeFilter<"RewardClaim"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "campaignId_userId">

  export type RewardClaimOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    rewardAmount?: SortOrder
    transactionHash?: SortOrderInput | SortOrder
    claimStatus?: SortOrder
    claimError?: SortOrderInput | SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RewardClaimCountOrderByAggregateInput
    _max?: RewardClaimMaxOrderByAggregateInput
    _min?: RewardClaimMinOrderByAggregateInput
  }

  export type RewardClaimScalarWhereWithAggregatesInput = {
    AND?: RewardClaimScalarWhereWithAggregatesInput | RewardClaimScalarWhereWithAggregatesInput[]
    OR?: RewardClaimScalarWhereWithAggregatesInput[]
    NOT?: RewardClaimScalarWhereWithAggregatesInput | RewardClaimScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RewardClaim"> | string
    campaignId?: StringWithAggregatesFilter<"RewardClaim"> | string
    userId?: StringWithAggregatesFilter<"RewardClaim"> | string
    rewardAmount?: StringWithAggregatesFilter<"RewardClaim"> | string
    transactionHash?: StringNullableWithAggregatesFilter<"RewardClaim"> | string | null
    claimStatus?: StringWithAggregatesFilter<"RewardClaim"> | string
    claimError?: StringNullableWithAggregatesFilter<"RewardClaim"> | string | null
    claimedAt?: DateTimeWithAggregatesFilter<"RewardClaim"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RewardClaim"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RewardClaim"> | Date | string
  }

  export type TaskCompletionWhereInput = {
    AND?: TaskCompletionWhereInput | TaskCompletionWhereInput[]
    OR?: TaskCompletionWhereInput[]
    NOT?: TaskCompletionWhereInput | TaskCompletionWhereInput[]
    id?: StringFilter<"TaskCompletion"> | string
    campaignId?: StringFilter<"TaskCompletion"> | string
    userId?: StringFilter<"TaskCompletion"> | string
    ruleId?: StringFilter<"TaskCompletion"> | string
    ruleType?: StringFilter<"TaskCompletion"> | string
    verificationData?: StringNullableFilter<"TaskCompletion"> | string | null
    isVerified?: BoolFilter<"TaskCompletion"> | boolean
    verificationError?: StringNullableFilter<"TaskCompletion"> | string | null
    completedAt?: DateTimeFilter<"TaskCompletion"> | Date | string
    createdAt?: DateTimeFilter<"TaskCompletion"> | Date | string
    updatedAt?: DateTimeFilter<"TaskCompletion"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskCompletionOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    ruleId?: SortOrder
    ruleType?: SortOrder
    verificationData?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verificationError?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TaskCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId_userId_ruleId?: TaskCompletionCampaignIdUserIdRuleIdCompoundUniqueInput
    AND?: TaskCompletionWhereInput | TaskCompletionWhereInput[]
    OR?: TaskCompletionWhereInput[]
    NOT?: TaskCompletionWhereInput | TaskCompletionWhereInput[]
    campaignId?: StringFilter<"TaskCompletion"> | string
    userId?: StringFilter<"TaskCompletion"> | string
    ruleId?: StringFilter<"TaskCompletion"> | string
    ruleType?: StringFilter<"TaskCompletion"> | string
    verificationData?: StringNullableFilter<"TaskCompletion"> | string | null
    isVerified?: BoolFilter<"TaskCompletion"> | boolean
    verificationError?: StringNullableFilter<"TaskCompletion"> | string | null
    completedAt?: DateTimeFilter<"TaskCompletion"> | Date | string
    createdAt?: DateTimeFilter<"TaskCompletion"> | Date | string
    updatedAt?: DateTimeFilter<"TaskCompletion"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "campaignId_userId_ruleId">

  export type TaskCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    ruleId?: SortOrder
    ruleType?: SortOrder
    verificationData?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verificationError?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCompletionCountOrderByAggregateInput
    _max?: TaskCompletionMaxOrderByAggregateInput
    _min?: TaskCompletionMinOrderByAggregateInput
  }

  export type TaskCompletionScalarWhereWithAggregatesInput = {
    AND?: TaskCompletionScalarWhereWithAggregatesInput | TaskCompletionScalarWhereWithAggregatesInput[]
    OR?: TaskCompletionScalarWhereWithAggregatesInput[]
    NOT?: TaskCompletionScalarWhereWithAggregatesInput | TaskCompletionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskCompletion"> | string
    campaignId?: StringWithAggregatesFilter<"TaskCompletion"> | string
    userId?: StringWithAggregatesFilter<"TaskCompletion"> | string
    ruleId?: StringWithAggregatesFilter<"TaskCompletion"> | string
    ruleType?: StringWithAggregatesFilter<"TaskCompletion"> | string
    verificationData?: StringNullableWithAggregatesFilter<"TaskCompletion"> | string | null
    isVerified?: BoolWithAggregatesFilter<"TaskCompletion"> | boolean
    verificationError?: StringNullableWithAggregatesFilter<"TaskCompletion"> | string | null
    completedAt?: DateTimeWithAggregatesFilter<"TaskCompletion"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TaskCompletion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TaskCompletion"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCampaigns?: CampaignCreateNestedManyWithoutCreatorInput
    participations?: CampaignParticipantCreateNestedManyWithoutUserInput
    claims?: RewardClaimCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCampaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    participations?: CampaignParticipantUncheckedCreateNestedManyWithoutUserInput
    claims?: RewardClaimUncheckedCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCampaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    participations?: CampaignParticipantUpdateManyWithoutUserNestedInput
    claims?: RewardClaimUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCampaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: CampaignParticipantUncheckedUpdateManyWithoutUserNestedInput
    claims?: RewardClaimUncheckedUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCampaignsInput
    rules?: CampaignRuleCreateNestedManyWithoutCampaignInput
    participants?: CampaignParticipantCreateNestedManyWithoutCampaignInput
    claims?: RewardClaimCreateNestedManyWithoutCampaignInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    rules?: CampaignRuleUncheckedCreateNestedManyWithoutCampaignInput
    participants?: CampaignParticipantUncheckedCreateNestedManyWithoutCampaignInput
    claims?: RewardClaimUncheckedCreateNestedManyWithoutCampaignInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCampaignsNestedInput
    rules?: CampaignRuleUpdateManyWithoutCampaignNestedInput
    participants?: CampaignParticipantUpdateManyWithoutCampaignNestedInput
    claims?: RewardClaimUpdateManyWithoutCampaignNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    rules?: CampaignRuleUncheckedUpdateManyWithoutCampaignNestedInput
    participants?: CampaignParticipantUncheckedUpdateManyWithoutCampaignNestedInput
    claims?: RewardClaimUncheckedUpdateManyWithoutCampaignNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignRuleCreateInput = {
    id?: string
    ruleType: string
    ruleValue?: string | null
    description: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutRulesInput
  }

  export type CampaignRuleUncheckedCreateInput = {
    id?: string
    campaignId: string
    ruleType: string
    ruleValue?: string | null
    description: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    ruleValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutRulesNestedInput
  }

  export type CampaignRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    ruleValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignRuleCreateManyInput = {
    id?: string
    campaignId: string
    ruleType: string
    ruleValue?: string | null
    description: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    ruleValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    ruleValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignParticipantCreateInput = {
    id?: string
    hasJoined?: boolean
    joinedAt?: Date | string | null
    validationStatus?: string
    validationMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutParticipationsInput
  }

  export type CampaignParticipantUncheckedCreateInput = {
    id?: string
    campaignId: string
    userId: string
    hasJoined?: boolean
    joinedAt?: Date | string | null
    validationStatus?: string
    validationMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasJoined?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    validationMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type CampaignParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hasJoined?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    validationMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignParticipantCreateManyInput = {
    id?: string
    campaignId: string
    userId: string
    hasJoined?: boolean
    joinedAt?: Date | string | null
    validationStatus?: string
    validationMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasJoined?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    validationMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hasJoined?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    validationMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimCreateInput = {
    id?: string
    rewardAmount: string
    transactionHash?: string | null
    claimStatus?: string
    claimError?: string | null
    claimedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutClaimsInput
    user: UserCreateNestedOneWithoutClaimsInput
  }

  export type RewardClaimUncheckedCreateInput = {
    id?: string
    campaignId: string
    userId: string
    rewardAmount: string
    transactionHash?: string | null
    claimStatus?: string
    claimError?: string | null
    claimedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardClaimUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    claimStatus?: StringFieldUpdateOperationsInput | string
    claimError?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutClaimsNestedInput
    user?: UserUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type RewardClaimUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    claimStatus?: StringFieldUpdateOperationsInput | string
    claimError?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimCreateManyInput = {
    id?: string
    campaignId: string
    userId: string
    rewardAmount: string
    transactionHash?: string | null
    claimStatus?: string
    claimError?: string | null
    claimedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardClaimUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    claimStatus?: StringFieldUpdateOperationsInput | string
    claimError?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    claimStatus?: StringFieldUpdateOperationsInput | string
    claimError?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCompletionCreateInput = {
    id?: string
    ruleId: string
    ruleType: string
    verificationData?: string | null
    isVerified?: boolean
    verificationError?: string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutTaskCompletionsInput
    user: UserCreateNestedOneWithoutTaskCompletionsInput
  }

  export type TaskCompletionUncheckedCreateInput = {
    id?: string
    campaignId: string
    userId: string
    ruleId: string
    ruleType: string
    verificationData?: string | null
    isVerified?: boolean
    verificationError?: string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCompletionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    verificationData?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationError?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutTaskCompletionsNestedInput
    user?: UserUpdateOneRequiredWithoutTaskCompletionsNestedInput
  }

  export type TaskCompletionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    verificationData?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationError?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCompletionCreateManyInput = {
    id?: string
    campaignId: string
    userId: string
    ruleId: string
    ruleType: string
    verificationData?: string | null
    isVerified?: boolean
    verificationError?: string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCompletionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    verificationData?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationError?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCompletionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    verificationData?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationError?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type CampaignParticipantListRelationFilter = {
    every?: CampaignParticipantWhereInput
    some?: CampaignParticipantWhereInput
    none?: CampaignParticipantWhereInput
  }

  export type RewardClaimListRelationFilter = {
    every?: RewardClaimWhereInput
    some?: RewardClaimWhereInput
    none?: RewardClaimWhereInput
  }

  export type TaskCompletionListRelationFilter = {
    every?: TaskCompletionWhereInput
    some?: TaskCompletionWhereInput
    none?: TaskCompletionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardClaimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    twitterId?: SortOrder
    twitterUsername?: SortOrder
    twitterHandle?: SortOrder
    isTwitterAuthorized?: SortOrder
    twitterAccessToken?: SortOrder
    twitterRefreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    twitterId?: SortOrder
    twitterUsername?: SortOrder
    twitterHandle?: SortOrder
    isTwitterAuthorized?: SortOrder
    twitterAccessToken?: SortOrder
    twitterRefreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    twitterId?: SortOrder
    twitterUsername?: SortOrder
    twitterHandle?: SortOrder
    isTwitterAuthorized?: SortOrder
    twitterAccessToken?: SortOrder
    twitterRefreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CampaignRuleListRelationFilter = {
    every?: CampaignRuleWhereInput
    some?: CampaignRuleWhereInput
    none?: CampaignRuleWhereInput
  }

  export type CampaignRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contractAddress?: SortOrder
    rewardAmount?: SortOrder
    totalParticipants?: SortOrder
    maxParticipants?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    totalParticipants?: SortOrder
    maxParticipants?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contractAddress?: SortOrder
    rewardAmount?: SortOrder
    totalParticipants?: SortOrder
    maxParticipants?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contractAddress?: SortOrder
    rewardAmount?: SortOrder
    totalParticipants?: SortOrder
    maxParticipants?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    totalParticipants?: SortOrder
    maxParticipants?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type CampaignRuleCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ruleType?: SortOrder
    ruleValue?: SortOrder
    description?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignRuleAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CampaignRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ruleType?: SortOrder
    ruleValue?: SortOrder
    description?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignRuleMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ruleType?: SortOrder
    ruleValue?: SortOrder
    description?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignRuleSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CampaignParticipantCampaignIdUserIdCompoundUniqueInput = {
    campaignId: string
    userId: string
  }

  export type CampaignParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    hasJoined?: SortOrder
    joinedAt?: SortOrder
    validationStatus?: SortOrder
    validationMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    hasJoined?: SortOrder
    joinedAt?: SortOrder
    validationStatus?: SortOrder
    validationMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    hasJoined?: SortOrder
    joinedAt?: SortOrder
    validationStatus?: SortOrder
    validationMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardClaimCampaignIdUserIdCompoundUniqueInput = {
    campaignId: string
    userId: string
  }

  export type RewardClaimCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    rewardAmount?: SortOrder
    transactionHash?: SortOrder
    claimStatus?: SortOrder
    claimError?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    rewardAmount?: SortOrder
    transactionHash?: SortOrder
    claimStatus?: SortOrder
    claimError?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardClaimMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    rewardAmount?: SortOrder
    transactionHash?: SortOrder
    claimStatus?: SortOrder
    claimError?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskCompletionCampaignIdUserIdRuleIdCompoundUniqueInput = {
    campaignId: string
    userId: string
    ruleId: string
  }

  export type TaskCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    ruleId?: SortOrder
    ruleType?: SortOrder
    verificationData?: SortOrder
    isVerified?: SortOrder
    verificationError?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    ruleId?: SortOrder
    ruleType?: SortOrder
    verificationData?: SortOrder
    isVerified?: SortOrder
    verificationError?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    ruleId?: SortOrder
    ruleType?: SortOrder
    verificationData?: SortOrder
    isVerified?: SortOrder
    verificationError?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CampaignParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignParticipantCreateWithoutUserInput, CampaignParticipantUncheckedCreateWithoutUserInput> | CampaignParticipantCreateWithoutUserInput[] | CampaignParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignParticipantCreateOrConnectWithoutUserInput | CampaignParticipantCreateOrConnectWithoutUserInput[]
    createMany?: CampaignParticipantCreateManyUserInputEnvelope
    connect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
  }

  export type RewardClaimCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput> | RewardClaimCreateWithoutUserInput[] | RewardClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutUserInput | RewardClaimCreateOrConnectWithoutUserInput[]
    createMany?: RewardClaimCreateManyUserInputEnvelope
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
  }

  export type TaskCompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput> | TaskCompletionCreateWithoutUserInput[] | TaskCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutUserInput | TaskCompletionCreateOrConnectWithoutUserInput[]
    createMany?: TaskCompletionCreateManyUserInputEnvelope
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CampaignParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignParticipantCreateWithoutUserInput, CampaignParticipantUncheckedCreateWithoutUserInput> | CampaignParticipantCreateWithoutUserInput[] | CampaignParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignParticipantCreateOrConnectWithoutUserInput | CampaignParticipantCreateOrConnectWithoutUserInput[]
    createMany?: CampaignParticipantCreateManyUserInputEnvelope
    connect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
  }

  export type RewardClaimUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput> | RewardClaimCreateWithoutUserInput[] | RewardClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutUserInput | RewardClaimCreateOrConnectWithoutUserInput[]
    createMany?: RewardClaimCreateManyUserInputEnvelope
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
  }

  export type TaskCompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput> | TaskCompletionCreateWithoutUserInput[] | TaskCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutUserInput | TaskCompletionCreateOrConnectWithoutUserInput[]
    createMany?: TaskCompletionCreateManyUserInputEnvelope
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CampaignUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatorInput | CampaignUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatorInput | CampaignUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatorInput | CampaignUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignParticipantCreateWithoutUserInput, CampaignParticipantUncheckedCreateWithoutUserInput> | CampaignParticipantCreateWithoutUserInput[] | CampaignParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignParticipantCreateOrConnectWithoutUserInput | CampaignParticipantCreateOrConnectWithoutUserInput[]
    upsert?: CampaignParticipantUpsertWithWhereUniqueWithoutUserInput | CampaignParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignParticipantCreateManyUserInputEnvelope
    set?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    disconnect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    delete?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    connect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    update?: CampaignParticipantUpdateWithWhereUniqueWithoutUserInput | CampaignParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignParticipantUpdateManyWithWhereWithoutUserInput | CampaignParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignParticipantScalarWhereInput | CampaignParticipantScalarWhereInput[]
  }

  export type RewardClaimUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput> | RewardClaimCreateWithoutUserInput[] | RewardClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutUserInput | RewardClaimCreateOrConnectWithoutUserInput[]
    upsert?: RewardClaimUpsertWithWhereUniqueWithoutUserInput | RewardClaimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardClaimCreateManyUserInputEnvelope
    set?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    disconnect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    delete?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    update?: RewardClaimUpdateWithWhereUniqueWithoutUserInput | RewardClaimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardClaimUpdateManyWithWhereWithoutUserInput | RewardClaimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
  }

  export type TaskCompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput> | TaskCompletionCreateWithoutUserInput[] | TaskCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutUserInput | TaskCompletionCreateOrConnectWithoutUserInput[]
    upsert?: TaskCompletionUpsertWithWhereUniqueWithoutUserInput | TaskCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCompletionCreateManyUserInputEnvelope
    set?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    disconnect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    delete?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    update?: TaskCompletionUpdateWithWhereUniqueWithoutUserInput | TaskCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskCompletionUpdateManyWithWhereWithoutUserInput | TaskCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatorInput | CampaignUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatorInput | CampaignUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatorInput | CampaignUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignParticipantCreateWithoutUserInput, CampaignParticipantUncheckedCreateWithoutUserInput> | CampaignParticipantCreateWithoutUserInput[] | CampaignParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignParticipantCreateOrConnectWithoutUserInput | CampaignParticipantCreateOrConnectWithoutUserInput[]
    upsert?: CampaignParticipantUpsertWithWhereUniqueWithoutUserInput | CampaignParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignParticipantCreateManyUserInputEnvelope
    set?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    disconnect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    delete?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    connect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    update?: CampaignParticipantUpdateWithWhereUniqueWithoutUserInput | CampaignParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignParticipantUpdateManyWithWhereWithoutUserInput | CampaignParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignParticipantScalarWhereInput | CampaignParticipantScalarWhereInput[]
  }

  export type RewardClaimUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput> | RewardClaimCreateWithoutUserInput[] | RewardClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutUserInput | RewardClaimCreateOrConnectWithoutUserInput[]
    upsert?: RewardClaimUpsertWithWhereUniqueWithoutUserInput | RewardClaimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardClaimCreateManyUserInputEnvelope
    set?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    disconnect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    delete?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    update?: RewardClaimUpdateWithWhereUniqueWithoutUserInput | RewardClaimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardClaimUpdateManyWithWhereWithoutUserInput | RewardClaimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
  }

  export type TaskCompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput> | TaskCompletionCreateWithoutUserInput[] | TaskCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutUserInput | TaskCompletionCreateOrConnectWithoutUserInput[]
    upsert?: TaskCompletionUpsertWithWhereUniqueWithoutUserInput | TaskCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCompletionCreateManyUserInputEnvelope
    set?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    disconnect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    delete?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    update?: TaskCompletionUpdateWithWhereUniqueWithoutUserInput | TaskCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskCompletionUpdateManyWithWhereWithoutUserInput | TaskCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedCampaignsInput = {
    create?: XOR<UserCreateWithoutCreatedCampaignsInput, UserUncheckedCreateWithoutCreatedCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignRuleCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignRuleCreateWithoutCampaignInput, CampaignRuleUncheckedCreateWithoutCampaignInput> | CampaignRuleCreateWithoutCampaignInput[] | CampaignRuleUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignRuleCreateOrConnectWithoutCampaignInput | CampaignRuleCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignRuleCreateManyCampaignInputEnvelope
    connect?: CampaignRuleWhereUniqueInput | CampaignRuleWhereUniqueInput[]
  }

  export type CampaignParticipantCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignParticipantCreateWithoutCampaignInput, CampaignParticipantUncheckedCreateWithoutCampaignInput> | CampaignParticipantCreateWithoutCampaignInput[] | CampaignParticipantUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignParticipantCreateOrConnectWithoutCampaignInput | CampaignParticipantCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignParticipantCreateManyCampaignInputEnvelope
    connect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
  }

  export type RewardClaimCreateNestedManyWithoutCampaignInput = {
    create?: XOR<RewardClaimCreateWithoutCampaignInput, RewardClaimUncheckedCreateWithoutCampaignInput> | RewardClaimCreateWithoutCampaignInput[] | RewardClaimUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutCampaignInput | RewardClaimCreateOrConnectWithoutCampaignInput[]
    createMany?: RewardClaimCreateManyCampaignInputEnvelope
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
  }

  export type TaskCompletionCreateNestedManyWithoutCampaignInput = {
    create?: XOR<TaskCompletionCreateWithoutCampaignInput, TaskCompletionUncheckedCreateWithoutCampaignInput> | TaskCompletionCreateWithoutCampaignInput[] | TaskCompletionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutCampaignInput | TaskCompletionCreateOrConnectWithoutCampaignInput[]
    createMany?: TaskCompletionCreateManyCampaignInputEnvelope
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
  }

  export type CampaignRuleUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignRuleCreateWithoutCampaignInput, CampaignRuleUncheckedCreateWithoutCampaignInput> | CampaignRuleCreateWithoutCampaignInput[] | CampaignRuleUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignRuleCreateOrConnectWithoutCampaignInput | CampaignRuleCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignRuleCreateManyCampaignInputEnvelope
    connect?: CampaignRuleWhereUniqueInput | CampaignRuleWhereUniqueInput[]
  }

  export type CampaignParticipantUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignParticipantCreateWithoutCampaignInput, CampaignParticipantUncheckedCreateWithoutCampaignInput> | CampaignParticipantCreateWithoutCampaignInput[] | CampaignParticipantUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignParticipantCreateOrConnectWithoutCampaignInput | CampaignParticipantCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignParticipantCreateManyCampaignInputEnvelope
    connect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
  }

  export type RewardClaimUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<RewardClaimCreateWithoutCampaignInput, RewardClaimUncheckedCreateWithoutCampaignInput> | RewardClaimCreateWithoutCampaignInput[] | RewardClaimUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutCampaignInput | RewardClaimCreateOrConnectWithoutCampaignInput[]
    createMany?: RewardClaimCreateManyCampaignInputEnvelope
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
  }

  export type TaskCompletionUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<TaskCompletionCreateWithoutCampaignInput, TaskCompletionUncheckedCreateWithoutCampaignInput> | TaskCompletionCreateWithoutCampaignInput[] | TaskCompletionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutCampaignInput | TaskCompletionCreateOrConnectWithoutCampaignInput[]
    createMany?: TaskCompletionCreateManyCampaignInputEnvelope
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCreatedCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCampaignsInput, UserUncheckedCreateWithoutCreatedCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCampaignsInput
    upsert?: UserUpsertWithoutCreatedCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCampaignsInput, UserUpdateWithoutCreatedCampaignsInput>, UserUncheckedUpdateWithoutCreatedCampaignsInput>
  }

  export type CampaignRuleUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignRuleCreateWithoutCampaignInput, CampaignRuleUncheckedCreateWithoutCampaignInput> | CampaignRuleCreateWithoutCampaignInput[] | CampaignRuleUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignRuleCreateOrConnectWithoutCampaignInput | CampaignRuleCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignRuleUpsertWithWhereUniqueWithoutCampaignInput | CampaignRuleUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignRuleCreateManyCampaignInputEnvelope
    set?: CampaignRuleWhereUniqueInput | CampaignRuleWhereUniqueInput[]
    disconnect?: CampaignRuleWhereUniqueInput | CampaignRuleWhereUniqueInput[]
    delete?: CampaignRuleWhereUniqueInput | CampaignRuleWhereUniqueInput[]
    connect?: CampaignRuleWhereUniqueInput | CampaignRuleWhereUniqueInput[]
    update?: CampaignRuleUpdateWithWhereUniqueWithoutCampaignInput | CampaignRuleUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignRuleUpdateManyWithWhereWithoutCampaignInput | CampaignRuleUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignRuleScalarWhereInput | CampaignRuleScalarWhereInput[]
  }

  export type CampaignParticipantUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignParticipantCreateWithoutCampaignInput, CampaignParticipantUncheckedCreateWithoutCampaignInput> | CampaignParticipantCreateWithoutCampaignInput[] | CampaignParticipantUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignParticipantCreateOrConnectWithoutCampaignInput | CampaignParticipantCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignParticipantUpsertWithWhereUniqueWithoutCampaignInput | CampaignParticipantUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignParticipantCreateManyCampaignInputEnvelope
    set?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    disconnect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    delete?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    connect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    update?: CampaignParticipantUpdateWithWhereUniqueWithoutCampaignInput | CampaignParticipantUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignParticipantUpdateManyWithWhereWithoutCampaignInput | CampaignParticipantUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignParticipantScalarWhereInput | CampaignParticipantScalarWhereInput[]
  }

  export type RewardClaimUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<RewardClaimCreateWithoutCampaignInput, RewardClaimUncheckedCreateWithoutCampaignInput> | RewardClaimCreateWithoutCampaignInput[] | RewardClaimUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutCampaignInput | RewardClaimCreateOrConnectWithoutCampaignInput[]
    upsert?: RewardClaimUpsertWithWhereUniqueWithoutCampaignInput | RewardClaimUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: RewardClaimCreateManyCampaignInputEnvelope
    set?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    disconnect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    delete?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    update?: RewardClaimUpdateWithWhereUniqueWithoutCampaignInput | RewardClaimUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: RewardClaimUpdateManyWithWhereWithoutCampaignInput | RewardClaimUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
  }

  export type TaskCompletionUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<TaskCompletionCreateWithoutCampaignInput, TaskCompletionUncheckedCreateWithoutCampaignInput> | TaskCompletionCreateWithoutCampaignInput[] | TaskCompletionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutCampaignInput | TaskCompletionCreateOrConnectWithoutCampaignInput[]
    upsert?: TaskCompletionUpsertWithWhereUniqueWithoutCampaignInput | TaskCompletionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: TaskCompletionCreateManyCampaignInputEnvelope
    set?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    disconnect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    delete?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    update?: TaskCompletionUpdateWithWhereUniqueWithoutCampaignInput | TaskCompletionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: TaskCompletionUpdateManyWithWhereWithoutCampaignInput | TaskCompletionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
  }

  export type CampaignRuleUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignRuleCreateWithoutCampaignInput, CampaignRuleUncheckedCreateWithoutCampaignInput> | CampaignRuleCreateWithoutCampaignInput[] | CampaignRuleUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignRuleCreateOrConnectWithoutCampaignInput | CampaignRuleCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignRuleUpsertWithWhereUniqueWithoutCampaignInput | CampaignRuleUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignRuleCreateManyCampaignInputEnvelope
    set?: CampaignRuleWhereUniqueInput | CampaignRuleWhereUniqueInput[]
    disconnect?: CampaignRuleWhereUniqueInput | CampaignRuleWhereUniqueInput[]
    delete?: CampaignRuleWhereUniqueInput | CampaignRuleWhereUniqueInput[]
    connect?: CampaignRuleWhereUniqueInput | CampaignRuleWhereUniqueInput[]
    update?: CampaignRuleUpdateWithWhereUniqueWithoutCampaignInput | CampaignRuleUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignRuleUpdateManyWithWhereWithoutCampaignInput | CampaignRuleUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignRuleScalarWhereInput | CampaignRuleScalarWhereInput[]
  }

  export type CampaignParticipantUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignParticipantCreateWithoutCampaignInput, CampaignParticipantUncheckedCreateWithoutCampaignInput> | CampaignParticipantCreateWithoutCampaignInput[] | CampaignParticipantUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignParticipantCreateOrConnectWithoutCampaignInput | CampaignParticipantCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignParticipantUpsertWithWhereUniqueWithoutCampaignInput | CampaignParticipantUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignParticipantCreateManyCampaignInputEnvelope
    set?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    disconnect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    delete?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    connect?: CampaignParticipantWhereUniqueInput | CampaignParticipantWhereUniqueInput[]
    update?: CampaignParticipantUpdateWithWhereUniqueWithoutCampaignInput | CampaignParticipantUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignParticipantUpdateManyWithWhereWithoutCampaignInput | CampaignParticipantUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignParticipantScalarWhereInput | CampaignParticipantScalarWhereInput[]
  }

  export type RewardClaimUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<RewardClaimCreateWithoutCampaignInput, RewardClaimUncheckedCreateWithoutCampaignInput> | RewardClaimCreateWithoutCampaignInput[] | RewardClaimUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutCampaignInput | RewardClaimCreateOrConnectWithoutCampaignInput[]
    upsert?: RewardClaimUpsertWithWhereUniqueWithoutCampaignInput | RewardClaimUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: RewardClaimCreateManyCampaignInputEnvelope
    set?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    disconnect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    delete?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    update?: RewardClaimUpdateWithWhereUniqueWithoutCampaignInput | RewardClaimUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: RewardClaimUpdateManyWithWhereWithoutCampaignInput | RewardClaimUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
  }

  export type TaskCompletionUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<TaskCompletionCreateWithoutCampaignInput, TaskCompletionUncheckedCreateWithoutCampaignInput> | TaskCompletionCreateWithoutCampaignInput[] | TaskCompletionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutCampaignInput | TaskCompletionCreateOrConnectWithoutCampaignInput[]
    upsert?: TaskCompletionUpsertWithWhereUniqueWithoutCampaignInput | TaskCompletionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: TaskCompletionCreateManyCampaignInputEnvelope
    set?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    disconnect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    delete?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    update?: TaskCompletionUpdateWithWhereUniqueWithoutCampaignInput | TaskCompletionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: TaskCompletionUpdateManyWithWhereWithoutCampaignInput | TaskCompletionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutRulesInput = {
    create?: XOR<CampaignCreateWithoutRulesInput, CampaignUncheckedCreateWithoutRulesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutRulesInput
    connect?: CampaignWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<CampaignCreateWithoutRulesInput, CampaignUncheckedCreateWithoutRulesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutRulesInput
    upsert?: CampaignUpsertWithoutRulesInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutRulesInput, CampaignUpdateWithoutRulesInput>, CampaignUncheckedUpdateWithoutRulesInput>
  }

  export type CampaignCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<CampaignCreateWithoutParticipantsInput, CampaignUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutParticipantsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<CampaignCreateWithoutParticipantsInput, CampaignUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutParticipantsInput
    upsert?: CampaignUpsertWithoutParticipantsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutParticipantsInput, CampaignUpdateWithoutParticipantsInput>, CampaignUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    upsert?: UserUpsertWithoutParticipationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipationsInput, UserUpdateWithoutParticipationsInput>, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type CampaignCreateNestedOneWithoutClaimsInput = {
    create?: XOR<CampaignCreateWithoutClaimsInput, CampaignUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutClaimsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClaimsInput = {
    create?: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<CampaignCreateWithoutClaimsInput, CampaignUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutClaimsInput
    upsert?: CampaignUpsertWithoutClaimsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutClaimsInput, CampaignUpdateWithoutClaimsInput>, CampaignUncheckedUpdateWithoutClaimsInput>
  }

  export type UserUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimsInput
    upsert?: UserUpsertWithoutClaimsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClaimsInput, UserUpdateWithoutClaimsInput>, UserUncheckedUpdateWithoutClaimsInput>
  }

  export type CampaignCreateNestedOneWithoutTaskCompletionsInput = {
    create?: XOR<CampaignCreateWithoutTaskCompletionsInput, CampaignUncheckedCreateWithoutTaskCompletionsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutTaskCompletionsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaskCompletionsInput = {
    create?: XOR<UserCreateWithoutTaskCompletionsInput, UserUncheckedCreateWithoutTaskCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskCompletionsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutTaskCompletionsNestedInput = {
    create?: XOR<CampaignCreateWithoutTaskCompletionsInput, CampaignUncheckedCreateWithoutTaskCompletionsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutTaskCompletionsInput
    upsert?: CampaignUpsertWithoutTaskCompletionsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutTaskCompletionsInput, CampaignUpdateWithoutTaskCompletionsInput>, CampaignUncheckedUpdateWithoutTaskCompletionsInput>
  }

  export type UserUpdateOneRequiredWithoutTaskCompletionsNestedInput = {
    create?: XOR<UserCreateWithoutTaskCompletionsInput, UserUncheckedCreateWithoutTaskCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskCompletionsInput
    upsert?: UserUpsertWithoutTaskCompletionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskCompletionsInput, UserUpdateWithoutTaskCompletionsInput>, UserUncheckedUpdateWithoutTaskCompletionsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CampaignCreateWithoutCreatorInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: CampaignRuleCreateNestedManyWithoutCampaignInput
    participants?: CampaignParticipantCreateNestedManyWithoutCampaignInput
    claims?: RewardClaimCreateNestedManyWithoutCampaignInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutCreatorInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: CampaignRuleUncheckedCreateNestedManyWithoutCampaignInput
    participants?: CampaignParticipantUncheckedCreateNestedManyWithoutCampaignInput
    claims?: RewardClaimUncheckedCreateNestedManyWithoutCampaignInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCreatorInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput>
  }

  export type CampaignCreateManyCreatorInputEnvelope = {
    data: CampaignCreateManyCreatorInput | CampaignCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CampaignParticipantCreateWithoutUserInput = {
    id?: string
    hasJoined?: boolean
    joinedAt?: Date | string | null
    validationStatus?: string
    validationMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutParticipantsInput
  }

  export type CampaignParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    campaignId: string
    hasJoined?: boolean
    joinedAt?: Date | string | null
    validationStatus?: string
    validationMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignParticipantCreateOrConnectWithoutUserInput = {
    where: CampaignParticipantWhereUniqueInput
    create: XOR<CampaignParticipantCreateWithoutUserInput, CampaignParticipantUncheckedCreateWithoutUserInput>
  }

  export type CampaignParticipantCreateManyUserInputEnvelope = {
    data: CampaignParticipantCreateManyUserInput | CampaignParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RewardClaimCreateWithoutUserInput = {
    id?: string
    rewardAmount: string
    transactionHash?: string | null
    claimStatus?: string
    claimError?: string | null
    claimedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutClaimsInput
  }

  export type RewardClaimUncheckedCreateWithoutUserInput = {
    id?: string
    campaignId: string
    rewardAmount: string
    transactionHash?: string | null
    claimStatus?: string
    claimError?: string | null
    claimedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardClaimCreateOrConnectWithoutUserInput = {
    where: RewardClaimWhereUniqueInput
    create: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput>
  }

  export type RewardClaimCreateManyUserInputEnvelope = {
    data: RewardClaimCreateManyUserInput | RewardClaimCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCompletionCreateWithoutUserInput = {
    id?: string
    ruleId: string
    ruleType: string
    verificationData?: string | null
    isVerified?: boolean
    verificationError?: string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutTaskCompletionsInput
  }

  export type TaskCompletionUncheckedCreateWithoutUserInput = {
    id?: string
    campaignId: string
    ruleId: string
    ruleType: string
    verificationData?: string | null
    isVerified?: boolean
    verificationError?: string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCompletionCreateOrConnectWithoutUserInput = {
    where: TaskCompletionWhereUniqueInput
    create: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput>
  }

  export type TaskCompletionCreateManyUserInputEnvelope = {
    data: TaskCompletionCreateManyUserInput | TaskCompletionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutCreatorInput, CampaignUncheckedUpdateWithoutCreatorInput>
    create: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutCreatorInput, CampaignUncheckedUpdateWithoutCreatorInput>
  }

  export type CampaignUpdateManyWithWhereWithoutCreatorInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    campaignId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    contractAddress?: StringFilter<"Campaign"> | string
    rewardAmount?: StringFilter<"Campaign"> | string
    totalParticipants?: IntFilter<"Campaign"> | number
    maxParticipants?: IntNullableFilter<"Campaign"> | number | null
    startDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    isActive?: BoolFilter<"Campaign"> | boolean
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    creatorId?: StringFilter<"Campaign"> | string
  }

  export type CampaignParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: CampaignParticipantWhereUniqueInput
    update: XOR<CampaignParticipantUpdateWithoutUserInput, CampaignParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<CampaignParticipantCreateWithoutUserInput, CampaignParticipantUncheckedCreateWithoutUserInput>
  }

  export type CampaignParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: CampaignParticipantWhereUniqueInput
    data: XOR<CampaignParticipantUpdateWithoutUserInput, CampaignParticipantUncheckedUpdateWithoutUserInput>
  }

  export type CampaignParticipantUpdateManyWithWhereWithoutUserInput = {
    where: CampaignParticipantScalarWhereInput
    data: XOR<CampaignParticipantUpdateManyMutationInput, CampaignParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type CampaignParticipantScalarWhereInput = {
    AND?: CampaignParticipantScalarWhereInput | CampaignParticipantScalarWhereInput[]
    OR?: CampaignParticipantScalarWhereInput[]
    NOT?: CampaignParticipantScalarWhereInput | CampaignParticipantScalarWhereInput[]
    id?: StringFilter<"CampaignParticipant"> | string
    campaignId?: StringFilter<"CampaignParticipant"> | string
    userId?: StringFilter<"CampaignParticipant"> | string
    hasJoined?: BoolFilter<"CampaignParticipant"> | boolean
    joinedAt?: DateTimeNullableFilter<"CampaignParticipant"> | Date | string | null
    validationStatus?: StringFilter<"CampaignParticipant"> | string
    validationMessage?: StringNullableFilter<"CampaignParticipant"> | string | null
    createdAt?: DateTimeFilter<"CampaignParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignParticipant"> | Date | string
  }

  export type RewardClaimUpsertWithWhereUniqueWithoutUserInput = {
    where: RewardClaimWhereUniqueInput
    update: XOR<RewardClaimUpdateWithoutUserInput, RewardClaimUncheckedUpdateWithoutUserInput>
    create: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput>
  }

  export type RewardClaimUpdateWithWhereUniqueWithoutUserInput = {
    where: RewardClaimWhereUniqueInput
    data: XOR<RewardClaimUpdateWithoutUserInput, RewardClaimUncheckedUpdateWithoutUserInput>
  }

  export type RewardClaimUpdateManyWithWhereWithoutUserInput = {
    where: RewardClaimScalarWhereInput
    data: XOR<RewardClaimUpdateManyMutationInput, RewardClaimUncheckedUpdateManyWithoutUserInput>
  }

  export type RewardClaimScalarWhereInput = {
    AND?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
    OR?: RewardClaimScalarWhereInput[]
    NOT?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
    id?: StringFilter<"RewardClaim"> | string
    campaignId?: StringFilter<"RewardClaim"> | string
    userId?: StringFilter<"RewardClaim"> | string
    rewardAmount?: StringFilter<"RewardClaim"> | string
    transactionHash?: StringNullableFilter<"RewardClaim"> | string | null
    claimStatus?: StringFilter<"RewardClaim"> | string
    claimError?: StringNullableFilter<"RewardClaim"> | string | null
    claimedAt?: DateTimeFilter<"RewardClaim"> | Date | string
    createdAt?: DateTimeFilter<"RewardClaim"> | Date | string
    updatedAt?: DateTimeFilter<"RewardClaim"> | Date | string
  }

  export type TaskCompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskCompletionWhereUniqueInput
    update: XOR<TaskCompletionUpdateWithoutUserInput, TaskCompletionUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput>
  }

  export type TaskCompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskCompletionWhereUniqueInput
    data: XOR<TaskCompletionUpdateWithoutUserInput, TaskCompletionUncheckedUpdateWithoutUserInput>
  }

  export type TaskCompletionUpdateManyWithWhereWithoutUserInput = {
    where: TaskCompletionScalarWhereInput
    data: XOR<TaskCompletionUpdateManyMutationInput, TaskCompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskCompletionScalarWhereInput = {
    AND?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
    OR?: TaskCompletionScalarWhereInput[]
    NOT?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
    id?: StringFilter<"TaskCompletion"> | string
    campaignId?: StringFilter<"TaskCompletion"> | string
    userId?: StringFilter<"TaskCompletion"> | string
    ruleId?: StringFilter<"TaskCompletion"> | string
    ruleType?: StringFilter<"TaskCompletion"> | string
    verificationData?: StringNullableFilter<"TaskCompletion"> | string | null
    isVerified?: BoolFilter<"TaskCompletion"> | boolean
    verificationError?: StringNullableFilter<"TaskCompletion"> | string | null
    completedAt?: DateTimeFilter<"TaskCompletion"> | Date | string
    createdAt?: DateTimeFilter<"TaskCompletion"> | Date | string
    updatedAt?: DateTimeFilter<"TaskCompletion"> | Date | string
  }

  export type UserCreateWithoutCreatedCampaignsInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participations?: CampaignParticipantCreateNestedManyWithoutUserInput
    claims?: RewardClaimCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedCampaignsInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participations?: CampaignParticipantUncheckedCreateNestedManyWithoutUserInput
    claims?: RewardClaimUncheckedCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCampaignsInput, UserUncheckedCreateWithoutCreatedCampaignsInput>
  }

  export type CampaignRuleCreateWithoutCampaignInput = {
    id?: string
    ruleType: string
    ruleValue?: string | null
    description: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignRuleUncheckedCreateWithoutCampaignInput = {
    id?: string
    ruleType: string
    ruleValue?: string | null
    description: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignRuleCreateOrConnectWithoutCampaignInput = {
    where: CampaignRuleWhereUniqueInput
    create: XOR<CampaignRuleCreateWithoutCampaignInput, CampaignRuleUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignRuleCreateManyCampaignInputEnvelope = {
    data: CampaignRuleCreateManyCampaignInput | CampaignRuleCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type CampaignParticipantCreateWithoutCampaignInput = {
    id?: string
    hasJoined?: boolean
    joinedAt?: Date | string | null
    validationStatus?: string
    validationMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutParticipationsInput
  }

  export type CampaignParticipantUncheckedCreateWithoutCampaignInput = {
    id?: string
    userId: string
    hasJoined?: boolean
    joinedAt?: Date | string | null
    validationStatus?: string
    validationMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignParticipantCreateOrConnectWithoutCampaignInput = {
    where: CampaignParticipantWhereUniqueInput
    create: XOR<CampaignParticipantCreateWithoutCampaignInput, CampaignParticipantUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignParticipantCreateManyCampaignInputEnvelope = {
    data: CampaignParticipantCreateManyCampaignInput | CampaignParticipantCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type RewardClaimCreateWithoutCampaignInput = {
    id?: string
    rewardAmount: string
    transactionHash?: string | null
    claimStatus?: string
    claimError?: string | null
    claimedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClaimsInput
  }

  export type RewardClaimUncheckedCreateWithoutCampaignInput = {
    id?: string
    userId: string
    rewardAmount: string
    transactionHash?: string | null
    claimStatus?: string
    claimError?: string | null
    claimedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardClaimCreateOrConnectWithoutCampaignInput = {
    where: RewardClaimWhereUniqueInput
    create: XOR<RewardClaimCreateWithoutCampaignInput, RewardClaimUncheckedCreateWithoutCampaignInput>
  }

  export type RewardClaimCreateManyCampaignInputEnvelope = {
    data: RewardClaimCreateManyCampaignInput | RewardClaimCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type TaskCompletionCreateWithoutCampaignInput = {
    id?: string
    ruleId: string
    ruleType: string
    verificationData?: string | null
    isVerified?: boolean
    verificationError?: string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTaskCompletionsInput
  }

  export type TaskCompletionUncheckedCreateWithoutCampaignInput = {
    id?: string
    userId: string
    ruleId: string
    ruleType: string
    verificationData?: string | null
    isVerified?: boolean
    verificationError?: string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCompletionCreateOrConnectWithoutCampaignInput = {
    where: TaskCompletionWhereUniqueInput
    create: XOR<TaskCompletionCreateWithoutCampaignInput, TaskCompletionUncheckedCreateWithoutCampaignInput>
  }

  export type TaskCompletionCreateManyCampaignInputEnvelope = {
    data: TaskCompletionCreateManyCampaignInput | TaskCompletionCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedCampaignsInput = {
    update: XOR<UserUpdateWithoutCreatedCampaignsInput, UserUncheckedUpdateWithoutCreatedCampaignsInput>
    create: XOR<UserCreateWithoutCreatedCampaignsInput, UserUncheckedCreateWithoutCreatedCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCampaignsInput, UserUncheckedUpdateWithoutCreatedCampaignsInput>
  }

  export type UserUpdateWithoutCreatedCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: CampaignParticipantUpdateManyWithoutUserNestedInput
    claims?: RewardClaimUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: CampaignParticipantUncheckedUpdateManyWithoutUserNestedInput
    claims?: RewardClaimUncheckedUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignRuleUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CampaignRuleWhereUniqueInput
    update: XOR<CampaignRuleUpdateWithoutCampaignInput, CampaignRuleUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignRuleCreateWithoutCampaignInput, CampaignRuleUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignRuleUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CampaignRuleWhereUniqueInput
    data: XOR<CampaignRuleUpdateWithoutCampaignInput, CampaignRuleUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignRuleUpdateManyWithWhereWithoutCampaignInput = {
    where: CampaignRuleScalarWhereInput
    data: XOR<CampaignRuleUpdateManyMutationInput, CampaignRuleUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignRuleScalarWhereInput = {
    AND?: CampaignRuleScalarWhereInput | CampaignRuleScalarWhereInput[]
    OR?: CampaignRuleScalarWhereInput[]
    NOT?: CampaignRuleScalarWhereInput | CampaignRuleScalarWhereInput[]
    id?: StringFilter<"CampaignRule"> | string
    campaignId?: StringFilter<"CampaignRule"> | string
    ruleType?: StringFilter<"CampaignRule"> | string
    ruleValue?: StringNullableFilter<"CampaignRule"> | string | null
    description?: StringFilter<"CampaignRule"> | string
    isRequired?: BoolFilter<"CampaignRule"> | boolean
    order?: IntFilter<"CampaignRule"> | number
    createdAt?: DateTimeFilter<"CampaignRule"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignRule"> | Date | string
  }

  export type CampaignParticipantUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CampaignParticipantWhereUniqueInput
    update: XOR<CampaignParticipantUpdateWithoutCampaignInput, CampaignParticipantUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignParticipantCreateWithoutCampaignInput, CampaignParticipantUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignParticipantUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CampaignParticipantWhereUniqueInput
    data: XOR<CampaignParticipantUpdateWithoutCampaignInput, CampaignParticipantUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignParticipantUpdateManyWithWhereWithoutCampaignInput = {
    where: CampaignParticipantScalarWhereInput
    data: XOR<CampaignParticipantUpdateManyMutationInput, CampaignParticipantUncheckedUpdateManyWithoutCampaignInput>
  }

  export type RewardClaimUpsertWithWhereUniqueWithoutCampaignInput = {
    where: RewardClaimWhereUniqueInput
    update: XOR<RewardClaimUpdateWithoutCampaignInput, RewardClaimUncheckedUpdateWithoutCampaignInput>
    create: XOR<RewardClaimCreateWithoutCampaignInput, RewardClaimUncheckedCreateWithoutCampaignInput>
  }

  export type RewardClaimUpdateWithWhereUniqueWithoutCampaignInput = {
    where: RewardClaimWhereUniqueInput
    data: XOR<RewardClaimUpdateWithoutCampaignInput, RewardClaimUncheckedUpdateWithoutCampaignInput>
  }

  export type RewardClaimUpdateManyWithWhereWithoutCampaignInput = {
    where: RewardClaimScalarWhereInput
    data: XOR<RewardClaimUpdateManyMutationInput, RewardClaimUncheckedUpdateManyWithoutCampaignInput>
  }

  export type TaskCompletionUpsertWithWhereUniqueWithoutCampaignInput = {
    where: TaskCompletionWhereUniqueInput
    update: XOR<TaskCompletionUpdateWithoutCampaignInput, TaskCompletionUncheckedUpdateWithoutCampaignInput>
    create: XOR<TaskCompletionCreateWithoutCampaignInput, TaskCompletionUncheckedCreateWithoutCampaignInput>
  }

  export type TaskCompletionUpdateWithWhereUniqueWithoutCampaignInput = {
    where: TaskCompletionWhereUniqueInput
    data: XOR<TaskCompletionUpdateWithoutCampaignInput, TaskCompletionUncheckedUpdateWithoutCampaignInput>
  }

  export type TaskCompletionUpdateManyWithWhereWithoutCampaignInput = {
    where: TaskCompletionScalarWhereInput
    data: XOR<TaskCompletionUpdateManyMutationInput, TaskCompletionUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignCreateWithoutRulesInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCampaignsInput
    participants?: CampaignParticipantCreateNestedManyWithoutCampaignInput
    claims?: RewardClaimCreateNestedManyWithoutCampaignInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutRulesInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    participants?: CampaignParticipantUncheckedCreateNestedManyWithoutCampaignInput
    claims?: RewardClaimUncheckedCreateNestedManyWithoutCampaignInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutRulesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutRulesInput, CampaignUncheckedCreateWithoutRulesInput>
  }

  export type CampaignUpsertWithoutRulesInput = {
    update: XOR<CampaignUpdateWithoutRulesInput, CampaignUncheckedUpdateWithoutRulesInput>
    create: XOR<CampaignCreateWithoutRulesInput, CampaignUncheckedCreateWithoutRulesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutRulesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutRulesInput, CampaignUncheckedUpdateWithoutRulesInput>
  }

  export type CampaignUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCampaignsNestedInput
    participants?: CampaignParticipantUpdateManyWithoutCampaignNestedInput
    claims?: RewardClaimUpdateManyWithoutCampaignNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    participants?: CampaignParticipantUncheckedUpdateManyWithoutCampaignNestedInput
    claims?: RewardClaimUncheckedUpdateManyWithoutCampaignNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateWithoutParticipantsInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCampaignsInput
    rules?: CampaignRuleCreateNestedManyWithoutCampaignInput
    claims?: RewardClaimCreateNestedManyWithoutCampaignInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutParticipantsInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    rules?: CampaignRuleUncheckedCreateNestedManyWithoutCampaignInput
    claims?: RewardClaimUncheckedCreateNestedManyWithoutCampaignInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutParticipantsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutParticipantsInput, CampaignUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutParticipationsInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCampaigns?: CampaignCreateNestedManyWithoutCreatorInput
    claims?: RewardClaimCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipationsInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCampaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    claims?: RewardClaimUncheckedCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
  }

  export type CampaignUpsertWithoutParticipantsInput = {
    update: XOR<CampaignUpdateWithoutParticipantsInput, CampaignUncheckedUpdateWithoutParticipantsInput>
    create: XOR<CampaignCreateWithoutParticipantsInput, CampaignUncheckedCreateWithoutParticipantsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutParticipantsInput, CampaignUncheckedUpdateWithoutParticipantsInput>
  }

  export type CampaignUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCampaignsNestedInput
    rules?: CampaignRuleUpdateManyWithoutCampaignNestedInput
    claims?: RewardClaimUpdateManyWithoutCampaignNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    rules?: CampaignRuleUncheckedUpdateManyWithoutCampaignNestedInput
    claims?: RewardClaimUncheckedUpdateManyWithoutCampaignNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type UserUpsertWithoutParticipationsInput = {
    update: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCampaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    claims?: RewardClaimUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCampaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    claims?: RewardClaimUncheckedUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignCreateWithoutClaimsInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCampaignsInput
    rules?: CampaignRuleCreateNestedManyWithoutCampaignInput
    participants?: CampaignParticipantCreateNestedManyWithoutCampaignInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutClaimsInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    rules?: CampaignRuleUncheckedCreateNestedManyWithoutCampaignInput
    participants?: CampaignParticipantUncheckedCreateNestedManyWithoutCampaignInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutClaimsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutClaimsInput, CampaignUncheckedCreateWithoutClaimsInput>
  }

  export type UserCreateWithoutClaimsInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCampaigns?: CampaignCreateNestedManyWithoutCreatorInput
    participations?: CampaignParticipantCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClaimsInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCampaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    participations?: CampaignParticipantUncheckedCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClaimsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
  }

  export type CampaignUpsertWithoutClaimsInput = {
    update: XOR<CampaignUpdateWithoutClaimsInput, CampaignUncheckedUpdateWithoutClaimsInput>
    create: XOR<CampaignCreateWithoutClaimsInput, CampaignUncheckedCreateWithoutClaimsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutClaimsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutClaimsInput, CampaignUncheckedUpdateWithoutClaimsInput>
  }

  export type CampaignUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCampaignsNestedInput
    rules?: CampaignRuleUpdateManyWithoutCampaignNestedInput
    participants?: CampaignParticipantUpdateManyWithoutCampaignNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    rules?: CampaignRuleUncheckedUpdateManyWithoutCampaignNestedInput
    participants?: CampaignParticipantUncheckedUpdateManyWithoutCampaignNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type UserUpsertWithoutClaimsInput = {
    update: XOR<UserUpdateWithoutClaimsInput, UserUncheckedUpdateWithoutClaimsInput>
    create: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClaimsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClaimsInput, UserUncheckedUpdateWithoutClaimsInput>
  }

  export type UserUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCampaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    participations?: CampaignParticipantUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCampaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: CampaignParticipantUncheckedUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignCreateWithoutTaskCompletionsInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCampaignsInput
    rules?: CampaignRuleCreateNestedManyWithoutCampaignInput
    participants?: CampaignParticipantCreateNestedManyWithoutCampaignInput
    claims?: RewardClaimCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutTaskCompletionsInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    rules?: CampaignRuleUncheckedCreateNestedManyWithoutCampaignInput
    participants?: CampaignParticipantUncheckedCreateNestedManyWithoutCampaignInput
    claims?: RewardClaimUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutTaskCompletionsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutTaskCompletionsInput, CampaignUncheckedCreateWithoutTaskCompletionsInput>
  }

  export type UserCreateWithoutTaskCompletionsInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCampaigns?: CampaignCreateNestedManyWithoutCreatorInput
    participations?: CampaignParticipantCreateNestedManyWithoutUserInput
    claims?: RewardClaimCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskCompletionsInput = {
    id?: string
    address: string
    twitterId?: string | null
    twitterUsername?: string | null
    twitterHandle?: string | null
    isTwitterAuthorized?: boolean
    twitterAccessToken?: string | null
    twitterRefreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCampaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    participations?: CampaignParticipantUncheckedCreateNestedManyWithoutUserInput
    claims?: RewardClaimUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaskCompletionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskCompletionsInput, UserUncheckedCreateWithoutTaskCompletionsInput>
  }

  export type CampaignUpsertWithoutTaskCompletionsInput = {
    update: XOR<CampaignUpdateWithoutTaskCompletionsInput, CampaignUncheckedUpdateWithoutTaskCompletionsInput>
    create: XOR<CampaignCreateWithoutTaskCompletionsInput, CampaignUncheckedCreateWithoutTaskCompletionsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutTaskCompletionsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutTaskCompletionsInput, CampaignUncheckedUpdateWithoutTaskCompletionsInput>
  }

  export type CampaignUpdateWithoutTaskCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCampaignsNestedInput
    rules?: CampaignRuleUpdateManyWithoutCampaignNestedInput
    participants?: CampaignParticipantUpdateManyWithoutCampaignNestedInput
    claims?: RewardClaimUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutTaskCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    rules?: CampaignRuleUncheckedUpdateManyWithoutCampaignNestedInput
    participants?: CampaignParticipantUncheckedUpdateManyWithoutCampaignNestedInput
    claims?: RewardClaimUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type UserUpsertWithoutTaskCompletionsInput = {
    update: XOR<UserUpdateWithoutTaskCompletionsInput, UserUncheckedUpdateWithoutTaskCompletionsInput>
    create: XOR<UserCreateWithoutTaskCompletionsInput, UserUncheckedCreateWithoutTaskCompletionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskCompletionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskCompletionsInput, UserUncheckedUpdateWithoutTaskCompletionsInput>
  }

  export type UserUpdateWithoutTaskCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCampaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    participations?: CampaignParticipantUpdateManyWithoutUserNestedInput
    claims?: RewardClaimUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitterId?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUsername?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    isTwitterAuthorized?: BoolFieldUpdateOperationsInput | boolean
    twitterAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    twitterRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCampaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: CampaignParticipantUncheckedUpdateManyWithoutUserNestedInput
    claims?: RewardClaimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignCreateManyCreatorInput = {
    id?: string
    campaignId: string
    name: string
    description?: string | null
    contractAddress: string
    rewardAmount: string
    totalParticipants?: number
    maxParticipants?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignParticipantCreateManyUserInput = {
    id?: string
    campaignId: string
    hasJoined?: boolean
    joinedAt?: Date | string | null
    validationStatus?: string
    validationMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardClaimCreateManyUserInput = {
    id?: string
    campaignId: string
    rewardAmount: string
    transactionHash?: string | null
    claimStatus?: string
    claimError?: string | null
    claimedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCompletionCreateManyUserInput = {
    id?: string
    campaignId: string
    ruleId: string
    ruleType: string
    verificationData?: string | null
    isVerified?: boolean
    verificationError?: string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: CampaignRuleUpdateManyWithoutCampaignNestedInput
    participants?: CampaignParticipantUpdateManyWithoutCampaignNestedInput
    claims?: RewardClaimUpdateManyWithoutCampaignNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: CampaignRuleUncheckedUpdateManyWithoutCampaignNestedInput
    participants?: CampaignParticipantUncheckedUpdateManyWithoutCampaignNestedInput
    claims?: RewardClaimUncheckedUpdateManyWithoutCampaignNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    totalParticipants?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasJoined?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    validationMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type CampaignParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    hasJoined?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    validationMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    hasJoined?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    validationMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    claimStatus?: StringFieldUpdateOperationsInput | string
    claimError?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type RewardClaimUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    claimStatus?: StringFieldUpdateOperationsInput | string
    claimError?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    claimStatus?: StringFieldUpdateOperationsInput | string
    claimError?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCompletionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    verificationData?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationError?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutTaskCompletionsNestedInput
  }

  export type TaskCompletionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    verificationData?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationError?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCompletionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    verificationData?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationError?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignRuleCreateManyCampaignInput = {
    id?: string
    ruleType: string
    ruleValue?: string | null
    description: string
    isRequired?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignParticipantCreateManyCampaignInput = {
    id?: string
    userId: string
    hasJoined?: boolean
    joinedAt?: Date | string | null
    validationStatus?: string
    validationMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardClaimCreateManyCampaignInput = {
    id?: string
    userId: string
    rewardAmount: string
    transactionHash?: string | null
    claimStatus?: string
    claimError?: string | null
    claimedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCompletionCreateManyCampaignInput = {
    id?: string
    userId: string
    ruleId: string
    ruleType: string
    verificationData?: string | null
    isVerified?: boolean
    verificationError?: string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignRuleUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    ruleValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignRuleUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    ruleValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignRuleUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    ruleValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignParticipantUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasJoined?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    validationMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type CampaignParticipantUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hasJoined?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    validationMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignParticipantUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hasJoined?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    validationMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    claimStatus?: StringFieldUpdateOperationsInput | string
    claimError?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type RewardClaimUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    claimStatus?: StringFieldUpdateOperationsInput | string
    claimError?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rewardAmount?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    claimStatus?: StringFieldUpdateOperationsInput | string
    claimError?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCompletionUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    verificationData?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationError?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTaskCompletionsNestedInput
  }

  export type TaskCompletionUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    verificationData?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationError?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCompletionUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    ruleType?: StringFieldUpdateOperationsInput | string
    verificationData?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationError?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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