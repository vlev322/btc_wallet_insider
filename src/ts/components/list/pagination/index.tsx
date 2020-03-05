import React from "react";

interface IPagination {
	page: number;
	pages: number;
}

const Pagination = ({ page, pages }: IPagination): JSX.Element => {
	return (
		<div className="pagination">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
		</div>
	);
};

export default Pagination;
