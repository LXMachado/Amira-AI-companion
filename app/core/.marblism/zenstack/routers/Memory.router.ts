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

        createMany: procedure.input($Schema.MemoryInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).memory.createMany(input as any))),

        create: procedure.input($Schema.MemoryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).memory.create(input as any))),

        deleteMany: procedure.input($Schema.MemoryInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).memory.deleteMany(input as any))),

        delete: procedure.input($Schema.MemoryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).memory.delete(input as any))),

        findFirst: procedure.input($Schema.MemoryInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).memory.findFirst(input as any))),

        findMany: procedure.input($Schema.MemoryInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).memory.findMany(input as any))),

        findUnique: procedure.input($Schema.MemoryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).memory.findUnique(input as any))),

        updateMany: procedure.input($Schema.MemoryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).memory.updateMany(input as any))),

        update: procedure.input($Schema.MemoryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).memory.update(input as any))),

        count: procedure.input($Schema.MemoryInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).memory.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MemoryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MemoryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MemoryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MemoryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MemoryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MemoryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MemoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MemoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MemoryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MemoryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MemoryGetPayload<T>, Context>) => Promise<Prisma.MemoryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MemoryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MemoryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MemoryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MemoryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MemoryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MemoryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MemoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MemoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MemoryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MemoryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MemoryGetPayload<T>, Context>) => Promise<Prisma.MemoryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MemoryFindFirstArgs, TData = Prisma.MemoryGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.MemoryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MemoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MemoryFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MemoryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MemoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MemoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MemoryFindManyArgs, TData = Array<Prisma.MemoryGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.MemoryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MemoryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MemoryFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MemoryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MemoryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MemoryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MemoryFindUniqueArgs, TData = Prisma.MemoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MemoryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MemoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MemoryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MemoryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MemoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MemoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MemoryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MemoryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MemoryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MemoryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MemoryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MemoryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MemoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MemoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MemoryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MemoryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MemoryGetPayload<T>, Context>) => Promise<Prisma.MemoryGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.MemoryCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MemoryCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.MemoryCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.MemoryCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.MemoryCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.MemoryCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MemoryCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MemoryCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
