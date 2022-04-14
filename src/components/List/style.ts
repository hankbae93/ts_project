import styled from "styled-components";

export const Container = styled.ul`
	flex: 1;
	padding: 10px;
	height: 100%;
	overflow-y: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
`;
