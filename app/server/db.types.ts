import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { Audience } from "./types";

export type PostTable = {
    id: string;
    audience: Audience;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    title: string | null;
};
export type DB = {
    post: PostTable;
};
