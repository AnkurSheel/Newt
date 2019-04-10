import * as React from "react";
import { useEffect, useState } from "react";
import { ChartsWithLoadingIndicator } from "../../components/chart";
import { Database } from "../../shared/database";
import { Totals } from "../../types/totals";

export const YearlyChart = () => {
    const db: Database = new Database();

    const [totals, setTotals] = useState<Totals[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const result = await db.getYearlyTotals();
            setTotals(result);

            setIsLoading(false);
        };
        fetchData();
    }, []);

    return <ChartsWithLoadingIndicator loading={isLoading} data={totals} XAxisLabel="Years" YAxisLabel="Amount" />;
};
