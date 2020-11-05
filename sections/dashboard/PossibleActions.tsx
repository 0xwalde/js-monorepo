import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Svg } from 'react-optimized-image';
// leaving the wrong icons for now
import Stake from 'assets/svg/app/stake.svg';
import Trade from 'assets/svg/app/trade.svg';

import { FlexDiv, FlexDivCol } from 'styles/common';
import Link from 'next/link';

type Action = {
	icon: () => JSX.Element;
	title: string;
	copy: string;
	link: string;
	action: string;
};

interface PossibleActionsProps {
	claimAmount: number;
	sUSDAmount: number;
	SNXAmount: number;
	earnPercent: number;
}

const PossibleActions: FC<PossibleActionsProps> = ({
	claimAmount,
	sUSDAmount,
	SNXAmount,
	earnPercent,
}) => {
	const { t } = useTranslation();
	const actions: Action[] = useMemo(
		() => [
			{
				icon: () => <Svg src={Stake} />,
				title: t('dashboard.actions.claim.title', { amount: claimAmount }),
				copy: t('dashboard.actions.claim.copy'),
				action: t('dashboard.actions.claim.action'),
				link: '/staking',
			},
			{
				icon: () => <Svg src={Stake} />,
				title: t('dashboard.actions.stake.title'),
				copy: t('dashboard.actions.stake.copy', { sUSDAmount, SNXAmount }),
				action: t('dashboard.actions.stake.action'),
				link: '/staking',
			},
			{
				icon: () => <Svg src={Trade} />,
				title: t('dashboard.actions.earn.title', { percent: earnPercent }),
				copy: t('dashboard.actions.earn.copy'),
				action: t('dashboard.actions.earn.action'),
				link: '/staking',
			},
		],
		[claimAmount, sUSDAmount, SNXAmount, earnPercent, t]
	);

	return (
		<PossibleActionsContainer>
			<PossibleActionsTitle>{t('dashboard.actions.title')}</PossibleActionsTitle>
			<ActionsContainer>
				{actions.map(({ icon, title, copy, action, link }, index) => (
					<ActionBox key={index}>
						<ActionIcon>{icon()}</ActionIcon>
						<ActionTitle>{title}</ActionTitle>
						<ActionCopy>{copy}</ActionCopy>
						<Link href={link}>
							<ActionButton>{action}</ActionButton>
						</Link>
					</ActionBox>
				))}
			</ActionsContainer>
		</PossibleActionsContainer>
	);
};

const PossibleActionsContainer = styled.div`
	margin: 20px 0;
	width: 100%;
`;

const PossibleActionsTitle = styled.div`
	font-size: 20px;
	font-family: ${(props) => props.theme.fonts.condensedMedium};
	color: ${(props) => props.theme.colors.white};
`;

const ActionsContainer = styled(FlexDiv)`
	justify-content: space-between;
`;

const ActionTitle = styled.p`
	font-size: 20px;
	font-family: ${(props) => props.theme.fonts.expanded};
	color: ${(props) => props.theme.colors.white};
`;

const ActionBox = styled(FlexDivCol)`
	background: ${(props) => props.theme.colors.backgroundBlue};
	box-shadow: 0px 0px 20px ${(props) => props.theme.colors.backgroundBoxShadow};
	border-radius: 4px;
	margin-bottom: 16px;
	padding: 20px;
	text-align: center;
	width: 280px;
`;

const ActionIcon = styled.div`
	width: 100px;
	height: 20px;
	margin: 20px auto;
`;

const ActionCopy = styled.p`
	font-family: ${(props) => props.theme.fonts.interSemiBold};
	font-size: 12px;
	width: 75%;
	color: ${(props) => props.theme.colors.silver};
	margin: 0 auto 25px auto;
`;

const ActionButton = styled.div`
	width: 161px;
	height: 48px;
	background: #0c2344;
	border: ${(props) => `1px solid ${props.theme.colors.brightBlue}`};
	box-sizing: border-box;
	box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.9);
	border-radius: 4px;
	color: ${(props) => props.theme.colors.brightBlue};
	font-family: ${(props) => props.theme.fonts.condensedBold};
	font-size: 12px;
	text-decoration: none;
	text-align: center;
	margin: 20px auto;
	padding-top: 15px;
	cursor: pointer;
`;

export default PossibleActions;
