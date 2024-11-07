/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PurchaseInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchase.createMany(input as any))),

        create: procedure.input($Schema.PurchaseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchase.create(input as any))),

        deleteMany: procedure.input($Schema.PurchaseInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchase.deleteMany(input as any))),

        delete: procedure.input($Schema.PurchaseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchase.delete(input as any))),

        findFirst: procedure.input($Schema.PurchaseInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).purchase.findFirst(input as any))),

        findMany: procedure.input($Schema.PurchaseInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).purchase.findMany(input as any))),

        findUnique: procedure.input($Schema.PurchaseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).purchase.findUnique(input as any))),

        updateMany: procedure.input($Schema.PurchaseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchase.updateMany(input as any))),

        update: procedure.input($Schema.PurchaseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchase.update(input as any))),

        count: procedure.input($Schema.PurchaseInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).purchase.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PurchaseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PurchaseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PurchaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PurchaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PurchaseGetPayload<T>, Context>) => Promise<Prisma.PurchaseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PurchaseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PurchaseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PurchaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PurchaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PurchaseGetPayload<T>, Context>) => Promise<Prisma.PurchaseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PurchaseFindFirstArgs, TData = Prisma.PurchaseGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PurchaseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PurchaseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PurchaseFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PurchaseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PurchaseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PurchaseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PurchaseFindManyArgs, TData = Array<Prisma.PurchaseGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PurchaseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PurchaseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PurchaseFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PurchaseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PurchaseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PurchaseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PurchaseFindUniqueArgs, TData = Prisma.PurchaseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PurchaseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PurchaseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PurchaseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PurchaseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PurchaseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PurchaseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PurchaseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PurchaseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PurchaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PurchaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PurchaseGetPayload<T>, Context>) => Promise<Prisma.PurchaseGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PurchaseCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PurchaseCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PurchaseCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PurchaseCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PurchaseCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PurchaseCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PurchaseCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PurchaseCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
