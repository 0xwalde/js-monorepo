import styled from 'styled-components';

import { FlexDivColCentered, GridDivCenteredRow, linkCSS } from 'styles/common';
import Button from 'components/Button';
import Table from 'components/Table';

export const TabContainer = styled(FlexDivColCentered)`
	background: ${(props) => props.theme.colors.black};
	height: 100%;
	padding: 24px;
`;

export const StyledCTA = styled(Button)<{ blue: boolean }>`
	font-size: 14px;
	font-family: ${(props) => props.theme.fonts.condensedMedium};
	box-shadow: ${(props) =>
		props.blue
			? `0px 0px 10px rgba(0, 209, 255, 0.9)`
			: `0px 0px 8.38542px rgba(252, 135, 56, 0.6);`};
	border-radius: 4px;
	width: 100%;
	text-transform: uppercase;
`;

export const Title = styled.p`
	font-family: ${(props) => props.theme.fonts.extended};
	color: ${(props) => props.theme.colors.white};
	font-size: 12px;
`;
export const Subtitle = styled.p`
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.gray};
	font-size: 14px;
`;

export const StyledLink = styled.span`
	${linkCSS}
	color: ${(props) => props.theme.colors.blue};
`;

export const Container = styled.div`
	background: ${(props) => props.theme.colors.navy};
`;

export const ContainerHeader = styled.div`
	padding: 16px;
	border-bottom: 1px solid ${(props) => props.theme.colors.grayBlue};
`;

export const ContainerBody = styled.div`
	padding: 16px;
`;

export const StyledTable = styled(Table)`
	margin-top: 0 16px;
`;

export const TableNoResults = styled(GridDivCenteredRow)`
	padding: 50px 0;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.navy};
	margin-top: -2px;
	justify-items: center;
	grid-gap: 10px;
`;

export const Header = styled.span`
	font-family: ${(props) => props.theme.fonts.interBold};
	font-size: 12px;
	color: ${(props) => props.theme.colors.gray};
	width: 50%;
`;
export const Data = styled.span`
	font-family: ${(props) => props.theme.fonts.interBold};
	font-size: 12px;
	color: ${(props) => props.theme.colors.white};
	width: 50%;
`;
