/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createCompanionRouter from "./Companion.router";
import createConversationRouter from "./Conversation.router";
import createMessageRouter from "./Message.router";
import createMemoryRouter from "./Memory.router";
import createActivityRouter from "./Activity.router";
import createAchievementRouter from "./Achievement.router";
import createPurchaseRouter from "./Purchase.router";
import createNotificationRouter from "./Notification.router";
import createPwaSubscriptionRouter from "./PwaSubscription.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as CompanionClientType } from "./Companion.router";
import { ClientType as ConversationClientType } from "./Conversation.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as MemoryClientType } from "./Memory.router";
import { ClientType as ActivityClientType } from "./Activity.router";
import { ClientType as AchievementClientType } from "./Achievement.router";
import { ClientType as PurchaseClientType } from "./Purchase.router";
import { ClientType as NotificationClientType } from "./Notification.router";
import { ClientType as PwaSubscriptionClientType } from "./PwaSubscription.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        companion: createCompanionRouter(router, procedure),
        conversation: createConversationRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        memory: createMemoryRouter(router, procedure),
        activity: createActivityRouter(router, procedure),
        achievement: createAchievementRouter(router, procedure),
        purchase: createPurchaseRouter(router, procedure),
        notification: createNotificationRouter(router, procedure),
        pwaSubscription: createPwaSubscriptionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    companion: CompanionClientType<AppRouter>;
    conversation: ConversationClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    memory: MemoryClientType<AppRouter>;
    activity: ActivityClientType<AppRouter>;
    achievement: AchievementClientType<AppRouter>;
    purchase: PurchaseClientType<AppRouter>;
    notification: NotificationClientType<AppRouter>;
    pwaSubscription: PwaSubscriptionClientType<AppRouter>;
}
