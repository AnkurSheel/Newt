import React from "react";
import { ChartsWithLoadingIndicator } from "../../components/chart";
import Content from "../../Components/content";
import FlexContainer from "../../Components/flex-container";
import Navigation from "../../components/navigation";
import withTotalsLoader from "../../higher-order-components/totals-loader";
import { IMonthlyTotalsProps } from "../../types/props";

const MonthlyChart = ({ totals, isLoading }: IMonthlyTotalsProps) => {
    return (
        <FlexContainer>
            <Navigation />
            <Content>
                <ChartsWithLoadingIndicator loading={isLoading} data={totals} XAxisLabel="Months" YAxisLabel="Amount" />
            </Content>
        </FlexContainer>
    );
};

export default withTotalsLoader()(MonthlyChart);
