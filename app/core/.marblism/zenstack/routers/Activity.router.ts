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

        createMany: procedure.input($Schema.ActivityInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).activity.createMany(input as any))),

        create: procedure.input($Schema.ActivityInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).activity.create(input as any))),

        deleteMany: procedure.input($Schema.ActivityInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).activity.deleteMany(input as any))),

        delete: procedure.input($Schema.ActivityInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).activity.delete(input as any))),

        findFirst: procedure.input($Schema.ActivityInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).activity.findFirst(input as any))),

        findMany: procedure.input($Schema.ActivityInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).activity.findMany(input as any))),

        findUnique: procedure.input($Schema.ActivityInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).activity.findUnique(input as any))),

        updateMany: procedure.input($Schema.ActivityInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).activity.updateMany(input as any))),

        update: procedure.input($Schema.ActivityInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).activity.update(input as any))),

        count: procedure.input($Schema.ActivityInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).activity.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ActivityCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ActivityCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ActivityCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ActivityCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ActivityCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ActivityCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ActivityGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ActivityGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ActivityCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ActivityCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ActivityGetPayload<T>, Context>) => Promise<Prisma.ActivityGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ActivityDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ActivityDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ActivityDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ActivityDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ActivityDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ActivityDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ActivityGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ActivityGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ActivityDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ActivityDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ActivityGetPayload<T>, Context>) => Promise<Prisma.ActivityGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ActivityFindFirstArgs, TData = Prisma.ActivityGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ActivityFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ActivityGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ActivityFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ActivityFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ActivityGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ActivityGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ActivityFindManyArgs, TData = Array<Prisma.ActivityGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ActivityFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ActivityGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ActivityFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ActivityFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ActivityGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ActivityGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ActivityFindUniqueArgs, TData = Prisma.ActivityGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ActivityFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ActivityGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ActivityFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ActivityFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ActivityGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ActivityGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ActivityUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ActivityUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ActivityUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ActivityUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ActivityUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ActivityUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ActivityGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ActivityGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ActivityUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ActivityUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ActivityGetPayload<T>, Context>) => Promise<Prisma.ActivityGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ActivityCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ActivityCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ActivityCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ActivityCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ActivityCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ActivityCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ActivityCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ActivityCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
