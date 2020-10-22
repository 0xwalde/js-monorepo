import Head from 'next/head';
import styled from 'styled-components';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

import { FlexDivCol } from 'styles/common';
import { StatBoxes, BarStats, PossibleActions } from 'sections/dashboard';

import useGetDebtDataQuery from 'queries/debt/useGetDebtDataQuery';
import useSNXBalanceQuery from 'queries/walletBalances/useSNXBalanceQuery';
import useGetFeePoolDataQuery from 'queries/staking/useGetFeePoolDataQuery';
import useCurrencyRatesQuery from 'queries/rates/useCurrencyRatesQuery';
import useExchangeRatesQuery from 'queries/rates/useExchangeRatesQuery';
import useSNXTotalSupply from 'queries/network/useSNXTotalSupply';
import useFeeClaimHistoryQuery from 'queries/staking/useFeeClaimHistoryQuery';
import { useMemo } from 'react';
import useStakedValueAtBlockQuery from 'queries/debt/useStakeValueAtBlockQuery';

const DashboardPage = () => {
	const { t } = useTranslation();

	const debtDataQuery = useGetDebtDataQuery();
	const snxBalanceQuery = useSNXBalanceQuery();

	const currentCRatio = debtDataQuery.data?.currentCRatio ?? 0;
	const targetCRatio = debtDataQuery.data?.targetCRatio ?? 0;
	const activeDebt = debtDataQuery.data?.debtBalance;
	const stakedValue = snxBalanceQuery.data?.balance
		? snxBalanceQuery.data.balance * Math.min(1, currentCRatio / targetCRatio)
		: 0;

	const currencyRates = useCurrencyRatesQuery(['SNX']);
	const exchangeRates = useExchangeRatesQuery();

	const currentFeePeriod = useGetFeePoolDataQuery('0');
	const previousFeePeriod = useGetFeePoolDataQuery('1');

	const nextFeePeriodStarts = new Date(
		currentFeePeriod.data?.startTime
			? (currentFeePeriod.data.startTime + currentFeePeriod.data.feePeriodDuration) * 1000
			: 0
	);

	const currentFeePeriodStarts = new Date(
		currentFeePeriod.data?.startTime ? currentFeePeriod.data.startTime * 1000 : 0
	);

	const currentFeePeriodProgress = currentFeePeriod.data?.startTime
		? (Date.now() / 1000 - currentFeePeriod.data.startTime) /
		  currentFeePeriod.data.feePeriodDuration
		: 0;

	const totalSNXSupplyQuery = useSNXTotalSupply();

	const history = useFeeClaimHistoryQuery();

	const checkClaimedStatus = useMemo(() => {
		let claimed = false;
		history.data?.feesClaimedHistory.map((tx) => {
			// console.log(tx);
			const claimedDate = new Date(tx.timestamp);
			if (claimedDate > currentFeePeriodStarts && claimedDate < nextFeePeriodStarts) {
				claimed = true;
			}
		});
		return claimed;
	}, [history]);

	const claimed = checkClaimedStatus;

	// const previousBlock = 10977481;

	// const dest = useStakedValueAtBlockQuery(previousBlock);

	// Find previous rewards

	// @TODO: Find how to get these values
	// const percentLocked = snxLocked / snxTotal;
	// const percentLocked = 0.1;

	// const SNXValueStaked = totalSNXSupplyQuery?.data * percentLocked;

	const sUSDRate = exchangeRates.data?.sUSD ?? 0;
	const SNXRate = currencyRates?.data?.SNX ?? 0;

	// const stakingApy =
	// 	((sUSDRate * currentFeePeriod?.data?.feesToDistribute +
	// 		SNXRate * currentFeePeriod?.data?.rewardsToDistribute) *
	// 		52) /
	// 	stakedValue;

	return (
		<>
			<Head>
				<title>{t('dashboard.page-title')}</title>
			</Head>
			<Content>
				<StatBoxes activeDebt={activeDebt} stakedValue={stakedValue} stakingApy={10} />
				<BarStats
					currentCRatio={currentCRatio}
					targetCRatio={targetCRatio}
					claimed={claimed}
					nextFeePeriodStarts={nextFeePeriodStarts}
					currentFeePeriodProgress={currentFeePeriodProgress}
				/>
				<PossibleActions claimAmount={20} sUSDAmount={2000} SNXAmount={400} earnPercent={0.15} />
			</Content>
		</>
	);
};

const Content = styled(FlexDivCol)`
	width: 100%;
	margin: 0 auto;
	max-width: 1200px;
`;

export default DashboardPage;
