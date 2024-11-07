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

        createMany: procedure.input($Schema.CompanionInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).companion.createMany(input as any))),

        create: procedure.input($Schema.CompanionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).companion.create(input as any))),

        deleteMany: procedure.input($Schema.CompanionInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).companion.deleteMany(input as any))),

        delete: procedure.input($Schema.CompanionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).companion.delete(input as any))),

        findFirst: procedure.input($Schema.CompanionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).companion.findFirst(input as any))),

        findMany: procedure.input($Schema.CompanionInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).companion.findMany(input as any))),

        findUnique: procedure.input($Schema.CompanionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).companion.findUnique(input as any))),

        updateMany: procedure.input($Schema.CompanionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).companion.updateMany(input as any))),

        update: procedure.input($Schema.CompanionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).companion.update(input as any))),

        count: procedure.input($Schema.CompanionInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).companion.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CompanionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CompanionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CompanionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CompanionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CompanionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CompanionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CompanionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CompanionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CompanionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CompanionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CompanionGetPayload<T>, Context>) => Promise<Prisma.CompanionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CompanionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CompanionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CompanionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CompanionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CompanionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CompanionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CompanionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CompanionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CompanionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CompanionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CompanionGetPayload<T>, Context>) => Promise<Prisma.CompanionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CompanionFindFirstArgs, TData = Prisma.CompanionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CompanionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CompanionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CompanionFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CompanionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CompanionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CompanionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CompanionFindManyArgs, TData = Array<Prisma.CompanionGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CompanionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CompanionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CompanionFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CompanionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CompanionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CompanionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CompanionFindUniqueArgs, TData = Prisma.CompanionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CompanionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CompanionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CompanionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CompanionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CompanionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CompanionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CompanionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CompanionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CompanionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CompanionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CompanionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CompanionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CompanionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CompanionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CompanionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CompanionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CompanionGetPayload<T>, Context>) => Promise<Prisma.CompanionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CompanionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CompanionCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CompanionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CompanionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CompanionCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CompanionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CompanionCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CompanionCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
