import * as knex from "knex";
import { Type } from "../types/details";

export class DatabaseHelpers {
    public filterByType = (query: knex.QueryBuilder, type: Type) => {
        return query.where({ type: `${Type[type]}` });
    }

    public filterByDate = (query: knex.QueryBuilder) => {
        return query.whereRaw("?? = ??", ["A.date", "B.date"]);
    }

    public filterByYear = (query: knex.QueryBuilder) => {
        return query.whereRaw("strftime('%Y',??) = strftime('%Y',??)", ["A.date", "B.date"]);
    }
}